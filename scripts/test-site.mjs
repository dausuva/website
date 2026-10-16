// Read-only checks of built Hugo output. No dependencies or browser automation.
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, join, relative, sep } from 'node:path';
import assert from 'node:assert/strict';
import { productSlugs, productPath, privacyPath } from './routes.mjs';
import { decodeContact, contactHref } from '../assets/js/contacts.mjs';

const root = resolve(process.argv[2] || 'public');
const origin = new URL(process.argv[3] && !process.argv[3].startsWith('--') ? process.argv[3] : 'https://dausuva.com/');
const preview = process.argv.includes('--preview');
const domains = process.argv.includes('--domains');
const contexts = new Map(['en', 'lt'].map(lang => [lang, {
  root: domains ? join(root, lang) : root,
  origin: domains ? new URL(lang === 'en' ? 'https://dausuva.com/' : 'https://dausuva.lt/') : origin,
  prefix: !domains && lang === 'lt' ? 'lt/' : ''
}]));
let checks = 0;
function check(condition, message) { checks++; assert.ok(condition, message); }
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]);
}
function decode(s) { return s.replaceAll('&amp;', '&').replaceAll('&#39;', "'").replaceAll('&#34;', '"'); }
function attrs(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)].map(m => [m[1], decode(m[2] ?? m[3] ?? m[4])]));
}
function tags(html, name) { return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map(m => attrs(m[0])); }
function page(path, lang) { return readFileSync(join(contexts.get(lang).root, path, 'index.html'), 'utf8'); }
const slugs = productSlugs;
for (const lang of ['en', 'lt']) {
  const searchTitles = new Set();
  const current = contexts.get(lang);
  const prefix = current.prefix;
  const peer = contexts.get(lang === 'lt' ? 'en' : 'lt');
  const other = peer.prefix;
  if (domains) {
    check(readFileSync(join(current.root, 'CNAME'), 'utf8').trim() === current.origin.hostname, `${lang}: domain binding`);
    check(existsSync(join(current.root, '.nojekyll')), `${lang}: static Pages output`);
    check(!existsSync(join(current.root, lang, productPath(lang), 'index.html')), `${lang}: no language prefix on native pages`);
    const sitemap = readFileSync(join(current.root, 'sitemap.xml'), 'utf8');
    for (const match of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      check(new URL(match[1]).origin === current.origin.origin && !new URL(match[1]).pathname.startsWith('/lt/'), `${lang}: domain-specific sitemap`);
    }
    for (const kind of ['home', 'privacy']) {
      const path = kind === 'home' ? '' : privacyPath(lang);
      const peerPath = kind === 'home' ? '' : privacyPath(lang === 'lt' ? 'en' : 'lt');
      const html = page(path, lang);
      check(tags(html, 'html')[0].lang === lang, `${lang}/${path}: company/privacy language`);
      check(tags(html, 'link').some(t => t.rel === 'canonical' && t.href === new URL(path, current.origin).href), `${lang}/${path}: company/privacy canonical`);
      check(tags(html, 'link').some(t => t.rel === 'alternate' && t.href === new URL(peerPath, peer.origin).href), `${lang}/${path}: company/privacy alternate`);
    }
  }
  for (const slug of slugs) {
    const path = `${prefix}${productPath(lang, slug)}`;
    const html = page(path, lang);
    check(tags(html, 'h1').length === 1, `${path}: one H1`);
    const searchTitle = decode(html.match(/<title>([^<]+)<\/title>/)?.[1] || '');
    check(searchTitle.includes('Classroom Manager'), `${path}: descriptive product search title`);
    check(!searchTitles.has(searchTitle), `${path}: unique search title`);
    searchTitles.add(searchTitle);
    check(tags(html, 'meta').some(t => t.property === 'og:title' && t.content === searchTitle), `${path}: consistent share title`);
    check(tags(html, 'html')[0].lang === lang, `${path}: language`);
    check(tags(html, 'meta').some(t => t.name === 'description' && t.content?.length > 30), `${path}: description`);
    const links = tags(html, 'link');
    const favicon = links.find(t => t.rel === 'icon');
    check(favicon?.type === 'image/svg+xml' && favicon.sizes === 'any', `${path}: scalable favicon`);
    const faviconUrl = new URL(favicon.href, current.origin);
    check(faviconUrl.origin === current.origin.origin && /\/icons\/favicon\.[a-f0-9]+\.svg$/.test(faviconUrl.pathname), `${path}: local versioned favicon`);
    const faviconSvg = readFileSync(join(current.root, decodeURIComponent(faviconUrl.pathname)), 'utf8');
    check(faviconSvg.includes('viewBox="0 0 64 64"') && faviconSvg.includes('#226456'), `${path}: Dausuva brand favicon`);
    check(!/<(?:script|text|image|foreignObject)\b|(?:href|onload)=/i.test(faviconSvg), `${path}: self-contained, font-independent icon`);
    check(links.some(t => t.rel === 'canonical' && t.href === new URL(path, current.origin).href), `${path}: canonical`);
    const peerProduct = `${other}${productPath(lang === 'lt' ? 'en' : 'lt', slug)}`;
    check(links.some(t => t.rel === 'alternate' && t.hreflang === (lang === 'lt' ? 'en' : 'lt') && t.href === new URL(peerProduct, peer.origin).href), `${path}: translation`);
    check(tags(html, 'a').some(t => t.class === 'lang' && new URL(t.href, current.origin).href === new URL(peerProduct, peer.origin).href), `${path}: translated navigation`);
    check(!/<form\b|<iframe\b/i.test(html), `${path}: no forms or embeds`);
    const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
    const visibleHtml = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
    check(scripts.length === 2, `${path}: metadata and first-party contact helper only`);
    const metadata = scripts.find(script => attrs(script[1]).type === 'application/ld+json');
    check(metadata && Object.keys(attrs(metadata[1])).length === 1, `${path}: inert JSON-LD`);
    const contactScript = scripts.find(script => attrs(script[1]).type === 'module');
    const scriptAttrs = attrs(contactScript?.[1] || '');
    check(contactScript && !contactScript[2].trim() && /^\/js\/contacts\.[a-f0-9]+\.mjs$/.test(scriptAttrs.src) && scriptAttrs.integrity?.startsWith('sha256-'), `${path}: local fingerprinted contact module, no inline execution`);
    check(existsSync(join(current.root, scriptAttrs.src)), `${path}: contact module exists`);
    check(!html.includes('support@dausuva.') && !html.includes('+370 648 45767') && !html.includes('+37064845767'), `${path}: no plain contact values in HTML or metadata`);
    check(!tags(html, 'a').some(link => /^(?:mailto:|tel:)/.test(link.href)), `${path}: no scrape-ready contact hrefs`);
    check(html.includes('<noscript>') && html.includes('[at]') && html.includes('[dot]'), `${path}: manual contact fallback without JavaScript`);
    const schema = JSON.parse(metadata[2]);
    check(schema['@context'] === 'https://schema.org' && Array.isArray(schema['@graph']), `${path}: valid JSON-LD graph`);
    const node = type => schema['@graph'].find(item => item['@type'] === type);
    const organization = node('Organization');
    const website = node('WebSite');
    const webpage = node('WebPage');
    check(organization?.name === 'Dausuva MB' && organization.identifier === '307580523', `${path}: real company identity`);
    check(organization['@id'] === 'https://dausuva.com/#organization', `${path}: same company across languages`);
    check(website?.url === new URL(prefix, current.origin).href && website.inLanguage === lang, `${path}: localized website`);
    check(webpage?.url === new URL(path, current.origin).href && webpage.name === searchTitle && webpage.inLanguage === lang, `${path}: schema matches canonical, title and language`);
    check(webpage.about?.['@id'] === new URL(`${prefix}${productPath(lang)}#software`, current.origin).href, `${path}: localized product reference`);
    check(!/"(?:aggregateRating|review|offers|downloadUrl)"/.test(JSON.stringify(schema)), `${path}: no fabricated ratings, offers or downloads`);
    if (slug !== '') {
      const crumbs = node('BreadcrumbList')?.itemListElement;
      check(crumbs?.length === 2 && crumbs[0].position === 1 && crumbs[1].position === 2, `${path}: breadcrumb ordering`);
      check(crumbs[0].item === new URL(`${prefix}${productPath(lang)}`, current.origin).href && crumbs[1].item === webpage.url, `${path}: breadcrumb destinations`);
      check(crumbs[1].name === decode(html.match(/<h1>([^<]+)<\/h1>/)?.[1] || ''), `${path}: breadcrumb matches visible heading`);
      check(!node('SoftwareApplication'), `${path}: software definition stays on overview`);
    }
    check(!/Home Lab|DELL-WIN11|ACER-WIN10|HPG4-WIN10|edtechlabs|BEGIN (?:RSA |EC )?PRIVATE KEY/i.test(html), `${path}: no internal lab identifiers or secrets`);
    if (preview) check(tags(html, 'meta').some(t => t.name === 'robots' && t.content.includes('noindex')), `${path}: private preview noindex`);
    else check(!tags(html, 'meta').some(t => t.name === 'robots' && t.content.includes('noindex')), `${path}: public indexing`);
    if (slug === '' || slug === 'pricing/') {
      check(html.includes('€499') && html.includes('€299'), `${path}: approved prices`);
    }
    if (slug === '') {
      const software = node('SoftwareApplication');
      check(software?.['@id'] === webpage.about['@id'] && software.name === 'Classroom Manager', `${path}: software identity`);
      check(software.operatingSystem === 'Windows 10, Windows 11' && visibleHtml.includes(software.operatingSystem), `${path}: visible supported configurations`);
      check(software.applicationCategory === 'EducationalApplication' && visibleHtml.includes(software.description), `${path}: visible software description`);
      check(software.publisher?.['@id'] === organization['@id'] && visibleHtml.includes(`Classroom Manager ${software.softwareVersion}`), `${path}: real publisher and displayed version`);
      check(html.includes('id=product-facts') || html.includes('id="product-facts"'), `${path}: answer-first product facts`);
      check(tags(html, 'img').length === 3, `${path}: three genuine demo screenshots`);
      check(tags(html, 'img')[0].loading === 'eager', `${path}: hero loads eagerly`);
    }
    if (slug === 'request/') {
      const drafts = tags(html, 'button').filter(t => t['data-contact']).map(t => decodeContact(t['data-contact'])).filter(payload => payload.kind === 'compose');
      check(drafts.length === 2, `${path}: demo and deployment draft`);
      for (const draft of drafts) {
        const url = new URL(contactHref(draft));
        check(url.pathname === `support@dausuva.${lang === 'lt' ? 'lt' : 'com'}`, `${path}: localized recipient`);
        check(url.searchParams.get('subject')?.includes('Classroom Manager'), `${path}: subject`);
        check(url.searchParams.get('body')?.includes(lang === 'lt' ? 'Kontaktinis asmuo:' : 'Contact name:'), `${path}: draft context`);
      }
    }
    if (slug === 'faq/') check(tags(html, 'details').length === 9, `${path}: accessible FAQ questions`);
    const alias = page(`${prefix}classroom-manager/${slug}`, lang);
    check(alias.includes(new URL(path, current.origin).href), `${path}: legacy alias`);
    if (lang === 'lt') check(page(`${prefix}school/${slug}`, lang).includes(new URL(path, current.origin).href), `${path}: old English-slug bookmark`);
    if (domains && lang === 'lt') {
      const old = page(`lt/school/${slug}`, 'en');
      check(tags(old, 'link').some(t => t.rel === 'canonical' && t.href === new URL(productPath('lt', slug), current.origin).href), `${path}: old .com/lt/ bookmark destination`);
    }
  }
}
let checkedLinks = 0;
for (const current of (domains ? [...contexts.values()] : [contexts.get('en')])) {
  for (const file of walk(current.root).filter(f => f.endsWith('.html'))) {
    const html = readFileSync(file, 'utf8');
    check(!/support@dausuva\.(?:com|lt)|\+370(?: 648 45767|64845767)/.test(html), `${file}: contact details not left plain in any HTML`);
    for (const button of tags(html, 'button').filter(tag => tag['data-contact'])) {
      check(button.type === 'button' && ['email', 'phone', 'compose'].includes(decodeContact(button['data-contact']).kind), `${file}: valid keyboard-accessible contact control`);
    }
    const filePath = relative(current.root, file).split(sep).join('/');
    const base = new URL(filePath.replace(/index\.html$/, ''), current.origin);
    for (const tag of tags(html, '(?:a|link|img|source|script)')) {
      for (const value of [tag.href, tag.src, tag.srcset?.split(/\s|,/)[0]].filter(Boolean)) {
        if (/^(mailto:|tel:|data:)/.test(value)) continue;
        const url = new URL(value, base);
        // Validate peer-domain language links against the peer build, without network requests.
        const destination = [...contexts.values()].find(c => c.origin.origin === url.origin);
        if (!destination) continue;
        const local = join(destination.root, decodeURIComponent(url.pathname));
        const target = url.pathname.endsWith('/') ? join(local, 'index.html') : local;
        check(existsSync(target), `${filePath}: missing ${url.pathname}`);
        checkedLinks++;
        if (url.hash && target.endsWith('.html')) {
          const targetHtml = readFileSync(target, 'utf8');
          const id = decodeURIComponent(url.hash.slice(1));
          check([...targetHtml.matchAll(/\bid=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)].some(m => (m[1] ?? m[2] ?? m[3]) === id), `${filePath}: missing anchor ${url.hash}`);
        }
      }
    }
    for (const image of tags(html, 'img')) check(image.alt && Number(image.width) > 0 && Number(image.height) > 0, `${filePath}: image alt and dimensions`);
  }
}
for (const lang of ['en', 'lt']) {
  const prefix = contexts.get(lang).prefix;
  const privacy = page(`${prefix}${productPath(lang, 'privacy/')}`, lang);
  check(privacy.includes(lang === 'lt' ? 'naršyklėse atidarytas svetaines' : 'websites open in browsers'), `${lang}: browser-data disclosure`);
  const security = page(`${prefix}${productPath(lang, 'security/')}`, lang);
  check(security.includes(lang === 'lt' ? 'neįgyvendintas' : 'not implemented'), `${lang}: rollback limitation`);
}
console.log(`PASS: ${checks} checks; 16 product pages; ${checkedLinks} local/peer links and assets; ${domains ? 'two domains' : 'single host'} and legacy aliases.`);
