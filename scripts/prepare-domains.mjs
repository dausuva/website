import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { productSlugs, productPath, privacyPath } from './routes.mjs';

export function prepareDomains(output) {
  const root = resolve(output);
  for (const [lang, domain] of [['en', 'dausuva.com'], ['lt', 'dausuva.lt']]) {
    if (!existsSync(join(root, lang, productPath(lang), 'index.html'))) throw new Error(`Missing multihost output: ${lang}`);
    writeFileSync(join(root, lang, 'CNAME'), domain + '\n');
    writeFileSync(join(root, lang, '.nojekyll'), '');
  }
  // Only obsolete URLs redirect. Current pages on each domain are served natively.
  const redirects = new Map([['', ''], ['privacy/', privacyPath('lt')], [privacyPath('lt'), privacyPath('lt')]]);
  for (const slug of productSlugs) {
    const target = productPath('lt', slug);
    for (const old of [`school/${slug}`, `classroom-manager/${slug}`, target]) redirects.set(old, target);
  }
  for (const [path, target] of redirects) {
    const destination = new URL(target, 'https://dausuva.lt/').href;
    const directory = join(root, 'en', 'lt', path);
    mkdirSync(directory, { recursive: true });
    writeFileSync(join(directory, 'index.html'), `<!doctype html><html lang="lt"><head><meta charset="utf-8"><title>Puslapis perkeltas</title><link rel="canonical" href="${destination}"><meta http-equiv="refresh" content="0; url=${destination}"></head><body><p><a href="${destination}">Tęsti į dausuva.lt</a></p></body></html>\n`);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) prepareDomains(process.argv[2] || 'public/domains');
