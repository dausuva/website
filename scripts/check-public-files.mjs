// Fails when the repository holds a file that PUBLIC-FILES.txt does not list, or the list names a file
// that is gone. This repository is public: adding a file to the list is the deliberate "yes, publish this".
// Runs as the pre-commit hook (.githooks/pre-commit, checks what is staged) and in CI before deployment.
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export function parseList(text) {
  return text.split(/\r?\n/).map(l => l.trim()).filter(l => l && !l.startsWith('#'));
}

export function compare(tracked, listed) {
  const allowed = new Set(listed);
  const present = new Set(tracked);
  return {
    unlisted: tracked.filter(f => !allowed.has(f)),
    missing: listed.filter(f => !present.has(f)),
    duplicates: listed.filter((f, i) => listed.indexOf(f) !== i)
  };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = resolve(import.meta.dirname, '..');
  const tracked = execFileSync('git', ['ls-files', '-z'], { cwd: root, encoding: 'utf8' }).split('\0').filter(Boolean);
  const listed = parseList(readFileSync(resolve(root, 'PUBLIC-FILES.txt'), 'utf8'));
  const { unlisted, missing, duplicates } = compare(tracked, listed);
  for (const f of unlisted) console.error(`Not in PUBLIC-FILES.txt: ${f}`);
  for (const f of missing) console.error(`Listed in PUBLIC-FILES.txt but not in the repository: ${f}`);
  for (const f of duplicates) console.error(`Listed twice in PUBLIC-FILES.txt: ${f}`);
  if (unlisted.length || missing.length || duplicates.length) {
    console.error('\nThis repository is public. Add a new file to PUBLIC-FILES.txt only once you have checked it may be published;');
    console.error('keep plans, notes and internal docs in the private classroom-manager repository.');
    process.exit(1);
  }
  console.log(`PUBLIC-FILES.txt: ${tracked.length} files, all listed.`);
}
