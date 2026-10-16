import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname, basename } from 'node:path';
import { spawnSync } from 'node:child_process';
import { prepareDomains } from './prepare-domains.mjs';
import { publishLithuanian } from './publish-lt.mjs';
import { productSlugs, productPath } from './routes.mjs';

function git(cwd, ...args) {
  const result = spawnSync('git', ['-C', cwd, ...args], { encoding: 'utf8', windowsHide: true });
  assert.equal(result.status, 0, result.stderr);
  return result.stdout.trim();
}
function output(root) {
  for (const lang of ['en', 'lt']) {
    mkdirSync(join(root, lang, productPath(lang)), { recursive: true });
    writeFileSync(join(root, lang, 'index.html'), `<html lang="${lang}"><h1>Fixture</h1></html>`);
    writeFileSync(join(root, lang, productPath(lang), 'index.html'), `<html lang="${lang}"><h1>Fixture</h1></html>`);
  }
  prepareDomains(root);
}
const sha = 'a'.repeat(40);
function cleanup(root) {
  const resolved = resolve(root);
  if (dirname(resolved) !== resolve(tmpdir()) || !/^dausuva-(domains|deploy)-test-/.test(basename(resolved))) throw new Error('Unsafe fixture cleanup target.');
  rmSync(resolved, { recursive: true, force: true });
}

test('one source produces two native domain bindings and preserves only old-path redirects', () => {
  const root = mkdtempSync(join(tmpdir(), 'dausuva-domains-test-'));
  try {
    output(root);
    assert.equal(readFileSync(join(root, 'lt/CNAME'), 'utf8'), 'dausuva.lt\n');
    assert.equal(readFileSync(join(root, 'en/CNAME'), 'utf8'), 'dausuva.com\n');
    assert.ok(existsSync(join(root, 'lt/.nojekyll')));
    assert.equal(productPath('lt', 'features/'), 'mokykloms/funkcijos/');
    for (const slug of productSlugs) {
      const redirect = readFileSync(join(root, 'en/lt/school', slug, 'index.html'), 'utf8');
      assert.ok(redirect.includes(`https://dausuva.lt/${productPath('lt', slug)}`));
    }
    assert.doesNotMatch(readFileSync(join(root, 'lt/mokykloms/index.html'), 'utf8'), /http-equiv/);
    assert.throws(() => prepareDomains(join(root, 'missing')), /Missing multihost output/);
  } finally { cleanup(root); }
});

test('deployment creates a branch, fast-forwards changes, removes stale files and skips unchanged output', () => {
  const root = mkdtempSync(join(tmpdir(), 'dausuva-deploy-test-'));
  try {
    const remote = join(root, 'remote.git');
    mkdirSync(remote);
    git(remote, 'init', '--bare', '--quiet');
    const first = join(root, 'first');
    output(first);
    writeFileSync(join(first, 'lt/stale.html'), 'obsolete fixture');
    assert.equal(publishLithuanian(join(first, 'lt'), remote, sha), true);
    const head1 = git(remote, 'rev-parse', 'refs/heads/gh-pages');
    const second = join(root, 'second');
    output(second);
    writeFileSync(join(second, 'lt/new.html'), 'new fixture');
    assert.equal(publishLithuanian(join(second, 'lt'), remote, 'b'.repeat(40)), true);
    const head2 = git(remote, 'rev-parse', 'refs/heads/gh-pages');
    assert.notEqual(head1, head2);
    const files = git(remote, 'ls-tree', '-r', '--name-only', 'refs/heads/gh-pages');
    assert.doesNotMatch(files, /stale.html/);
    assert.match(files, /new.html/);
    const third = join(root, 'third');
    output(third);
    writeFileSync(join(third, 'lt/new.html'), 'new fixture');
    assert.equal(publishLithuanian(join(third, 'lt'), remote, 'c'.repeat(40)), false);
    assert.equal(git(remote, 'rev-parse', 'refs/heads/gh-pages'), head2);
    assert.throws(() => publishLithuanian(join(first, 'lt'), remote, sha), /existing source checkout/);
    assert.throws(() => publishLithuanian(join(third, 'en'), remote, sha), /Expected prepared Lithuanian/);
  } finally { cleanup(root); }
});
