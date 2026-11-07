// Verify actual rendered tutorial pages, navigation, localization and optional video wiring.
import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import assert from 'node:assert/strict';
const root = resolve(process.argv[2] || 'public');
const domains = process.argv.includes('--domains');
const fixture = process.argv.includes('--video-fixture');
const catalogPath = process.argv.find(a => a.startsWith('--catalog='))?.slice('--catalog='.length) || resolve(import.meta.dirname, '../data/tutorial.json');
const catalog = JSON.parse(readFileSync(catalogPath, 'utf8'));
let checks = 0;
const check = (value, message) => { checks++; assert.ok(value, message); };
const decode = value => value.replaceAll('&amp;', '&').replaceAll('&#39;', "'").replaceAll('&#34;', '"').replaceAll('&rsquo;', '’');
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)].map(m => [m[1], decode(m[2] ?? m[3] ?? m[4])]));
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map(m => attrs(m[0]));
const privateFile = resolve(import.meta.dirname, '../.private-terms');
const privateTerms = [process.env.SITE_PRIVATE_TERMS || '', existsSync(privateFile) ? readFileSync(privateFile, 'utf8') : ''].join('\n').split(/[\r\n,]/).map(t => t.trim().toLowerCase()).filter(t => t && !t.startsWith('#'));
check(catalog.chapters.length === 14, 'fourteen lessons');
for (const lang of ['en', 'lt']) {
  const build = domains ? join(root, lang) : root;
  const prefix = !domains && lang === 'lt' ? '/lt' : '';
  const origin = domains && lang === 'lt' ? 'https://dausuva.lt' : 'https://dausuva.com';
  const indexPath = `${prefix}${lang === 'lt' ? '/mokykloms/pamokos/' : '/classroom-manager/tutorial/'}`;
  const indexHtml = readFileSync(join(build, indexPath, 'index.html'), 'utf8');
  check(tags(indexHtml, 'h1').length === 1, `${lang}: one index heading`);
  check(!/data-video-id|<iframe/.test(indexHtml), `${lang}: index links to lessons rather than loading fourteen players`);
  const cards = tags(indexHtml, 'a').filter(a => a.class === 'tutorial-card');
  check(cards.length === 14, `${lang}: fourteen lesson cards`);
  const metadata = html => {
    const script = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].find(m => attrs(m[1]).type === 'application/ld+json');
    return JSON.parse(script[2])['@graph'];
  };
  check(metadata(indexHtml).find(n => n['@type'] === 'ItemList')?.numberOfItems === 14, `${lang}: course structured data`);
  for (const [i, chapter] of catalog.chapters.entries()) {
    const path = prefix + chapter[lang].url;
    const html = readFileSync(join(build, path, 'index.html'), 'utf8');
    const links = tags(html, 'a');
    check(cards[i].href === path, `${lang}/${i}: index order and destination`);
    check(tags(html, 'h1').length === 1 && html.includes(chapter[lang].title), `${lang}/${i}: unique lesson heading`);
    check(/<title>[^<]*Classroom Manager/.test(html), `${lang}/${i}: descriptive product search title`);
    check(metadata(html).find(n => n['@type'] === 'BreadcrumbList')?.itemListElement.length === 3, `${lang}/${i}: product, course and lesson breadcrumbs`);
    check(tags(html, 'link').some(l => l.rel === 'canonical' && l.href === origin + path), `${lang}/${i}: canonical`);
    check(tags(html, 'meta').some(m => m.name === 'description' && m.content === chapter[lang].description), `${lang}/${i}: summary metadata`);
    const other = lang === 'lt' ? 'en' : 'lt';
    const peerOrigin = domains && other === 'lt' ? 'https://dausuva.lt' : 'https://dausuva.com';
    const peerPrefix = !domains && other === 'lt' ? '/lt' : '';
    check(tags(html, 'link').some(l => l.hreflang === other && l.href === peerOrigin + peerPrefix + chapter[other].url), `${lang}/${i}: matching translated lesson`);
    check(links.some(l => l.href === indexPath), `${lang}/${i}: course index link`);
    const previous = links.filter(l => l.rel === 'prev');
    const next = links.filter(l => l.rel === 'next');
    check(previous.length === (i > 0 ? 1 : 0), `${lang}/${i}: previous boundary`);
    check(next.length === (i < 13 ? 1 : 0), `${lang}/${i}: next boundary`);
    if (i > 0) check(previous[0].href === prefix + catalog.chapters[i - 1][lang].url, `${lang}/${i}: previous destination`);
    if (i < 13) check(next[0].href === prefix + catalog.chapters[i + 1][lang].url, `${lang}/${i}: next destination`);
    check(links.filter(l => l['aria-current'] === 'page' && l.href === path).length === 1, `${lang}/${i}: current course item`);
    for (const paragraph of chapter[lang].paragraphs) check(decode(html).includes(paragraph), `${lang}/${i}: full explanation`);
    for (const moment of chapter.timestamps) check(html.includes(`moment-${moment.seconds}`) && decode(html).includes(moment[lang]), `${lang}/${i}: timestamp ${moment.seconds}`);
    check(!/<iframe\b|youtube(?:-nocookie)?\.com\/embed/.test(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')), `${lang}/${i}: no third-party request before play`);
    check(!privateTerms.some(term => html.toLowerCase().includes(term)), `${lang}/${i}: no private names`);
    if (chapter.youtubeId) {
      check(html.includes(chapter.youtubeId) && /data-video-id/.test(html), `${lang}/${i}: configured player`);
      const seeks = links.filter(l => l['data-start'] !== undefined);
      check(seeks.length === chapter.timestamps.length, `${lang}/${i}: every timestamp can seek`);
      check(seeks.every((l, n) => l.href === `https://youtu.be/${chapter.youtubeId}?t=${chapter.timestamps[n].seconds}`), `${lang}/${i}: no-JS timestamp fallback`);
      check(tags(html, 'script').some(s => /\/js\/video\./.test(s.src)), `${lang}/${i}: click-to-play helper`);
      if (chapter.youtubeUploadDate) {
        const video = metadata(html).find(n => n['@type'] === 'VideoObject');
        check(video?.hasPart.length === chapter.timestamps.length && video.uploadDate === chapter.youtubeUploadDate, `${lang}/${i}: actual uploaded-video schema and clips`);
      }
    } else {
      check(html.includes('tutorial-video-pending') && !links.some(l => l['data-start'] !== undefined), `${lang}/${i}: honest pending-video state`);
      check(!metadata(html).some(n => n['@type'] === 'VideoObject'), `${lang}/${i}: no fabricated upload metadata`);
    }
  }
}
if (fixture) check(catalog.chapters.some(c => c.youtubeId), 'fixture exercises a real configured-player branch');
console.log(`PASS: ${checks} tutorial checks; 14 lessons × 2 languages; ${domains ? 'two domains' : 'single host'}${fixture ? '; uploaded-video fixture' : ''}.`);
