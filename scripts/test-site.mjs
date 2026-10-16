// Read-only checks of built Hugo output. No dependencies or browser automation.
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, join, relative, sep } from 'node:path';
import assert from 'node:assert/strict';

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
const slugs = ['', 'features/', 'security/', 'privacy/', 'getting-started/', 'pricing/', 'faq/', 'request/'];
for (const lang of ['en', 'lt']) {
  const current = contexts.get(lang);
  const prefix = current.prefix;
  const peer = contexts.get(lang === 'lt' ? 'en' : 'lt');
  const other = peer.prefix;
  if (domains) {
    check(readFileSync(join(current.root, 'CNAME'), 'utf8').trim() === current.origin.hostname, `${lang}: domain binding`);
    check(existsSync(join(current.root, '.nojekyll')), `${lang}: static Pages output`);
    check(!existsSync(join(current.root, lang, 'school/index.html')), `${lang}: no language prefix on native pages`);
    const sitemap = readFileSync(join(current.root, 'sitemap.xml'), 'utf8');
    for (const match of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      check(new URL(match[1]).origin === current.origin.origin && !new URL(match[1]).pathname.startsWith('/lt/'), `${lang}: domain-specific sitemap`);
    }
    for (const path of ['', 'privacy/']) {
      const html = page(path, lang);
      check(tags(html, 'html')[0].lang === lang, `${lang}/${path}: company/privacy language`);
      check(tags(html, 'link').some(t => t.rel === 'canonical' && t.href === new URL(path, current.origin).href), `${lang}/${path}: company/privacy canonical`);
      check(tags(html, 'link').some(t => t.rel === 'alternate' && t.href === new URL(path, peer.origin).href), `${lang}/${path}: company/privacy alternate`);
    }
  }
  for (const slug of slugs) {
    const path = `${prefix}school/${slug}`;
    const html = page(path, lang);
    check(tags(html, 'h1').length === 1, `${path}: one H1`);
    check(/<title>[^<]+<\/title>/.test(html), `${path}: title`);
    check(tags(html, 'html')[0].lang === lang, `${path}: language`);
    check(tags(html, 'meta').some(t => t.name === 'description' && t.content?.length > 30), `${path}: description`);
    const links = tags(html, 'link');
    check(links.some(t => t.rel === 'canonical' && t.href === new URL(path, current.origin).href), `${path}: canonical`);
    check(links.some(t => t.rel === 'alternate' && t.hreflang === (lang === 'lt' ? 'en' : 'lt') && t.href === new URL(`${other}school/${slug}`, peer.origin).href), `${path}: translation`);
    check(tags(html, 'a').some(t => t.class === 'lang' && new URL(t.href, current.origin).href === new URL(`${other}school/${slug}`, peer.origin).href), `${path}: translated navigation`);
    check(!/<script\b|<form\b|<iframe\b/i.test(html), `${path}: no scripts, forms or embeds`);
    check(!/[lab]|[pc]|[pc]|[pc]|[lab]|BEGIN (?:RSA |EC )?PRIVATE KEY/i.test(html), `${path}: no internal lab identifiers or secrets`);
    if (preview) check(tags(html, 'meta').some(t => t.name === 'robots' && t.content.includes('noindex')), `${path}: private preview noindex`);
    else check(!tags(html, 'meta').some(t => t.name === 'robots' && t.content.includes('noindex')), `${path}: public indexing`);
    if (slug === '' || slug === 'pricing/') {
      check(html.includes('€499') && html.includes('€299'), `${path}: approved prices`);
    }
    if (slug === '') {
      check(tags(html, 'img').length === 3, `${path}: three genuine demo screenshots`);
      check(tags(html, 'img')[0].loading === 'eager', `${path}: hero loads eagerly`);
    }
    if (slug === 'request/') {
      const drafts = tags(html, 'a').filter(t => t.href?.startsWith('mailto:') && t.href.includes('?'));
      check(drafts.length === 2, `${path}: demo and deployment draft`);
      for (const draft of drafts) {
        const url = new URL(draft.href);
        check(url.pathname === `support@dausuva.${lang === 'lt' ? 'lt' : 'com'}`, `${path}: localized recipient`);
        check(url.searchParams.get('subject')?.includes('Classroom Manager'), `${path}: subject`);
        check(url.searchParams.get('body')?.includes(lang === 'lt' ? 'Kontaktinis asmuo:' : 'Contact name:'), `${path}: draft context`);
      }
    }
    if (slug === 'faq/') check(tags(html, 'details').length === 9, `${path}: accessible FAQ questions`);
    const alias = page(`${prefix}classroom-manager/${slug}`, lang);
    check(alias.includes(new URL(path, current.origin).href), `${path}: legacy alias`);
    if (domains && lang === 'lt') {
      const old = page(`lt/school/${slug}`, 'en');
      check(tags(old, 'link').some(t => t.rel === 'canonical' && t.href === new URL(`school/${slug}`, current.origin).href), `${path}: old .com/lt/ bookmark destination`);
    }
  }
}
let checkedLinks = 0;
for (const current of (domains ? [...contexts.values()] : [contexts.get('en')])) {
  for (const file of walk(current.root).filter(f => f.endsWith('.html'))) {
    const html = readFileSync(file, 'utf8');
    const filePath = relative(current.root, file).split(sep).join('/');
    const base = new URL(filePath.replace(/index\.html$/, ''), current.origin);
    for (const tag of tags(html, '(?:a|link|img|source)')) {
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
  const privacy = page(`${prefix}school/privacy/`, lang);
  check(privacy.includes(lang === 'lt' ? 'naršyklėse atidarytas svetaines' : 'websites open in browsers'), `${lang}: browser-data disclosure`);
  const security = page(`${prefix}school/security/`, lang);
  check(security.includes(lang === 'lt' ? 'neįgyvendintas' : 'not implemented'), `${lang}: rollback limitation`);
}
console.log(`PASS: ${checks} checks; 16 product pages; ${checkedLinks} local/peer links and assets; ${domains ? 'two domains' : 'single host'} and legacy aliases.`);
