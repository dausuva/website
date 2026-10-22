import test from 'node:test';
import assert from 'node:assert/strict';
import { parseList, compare } from './check-public-files.mjs';

test('comments and blank lines are ignored', () => {
  assert.deepEqual(parseList('# note\n\na.md\r\n  b.md  \n'), ['a.md', 'b.md']);
});

test('a file that is not listed is reported', () => {
  assert.deepEqual(compare(['a.md', 'notes.md'], ['a.md']).unlisted, ['notes.md']);
});

test('a listed file that is gone is reported', () => {
  assert.deepEqual(compare(['a.md'], ['a.md', 'old.md']).missing, ['old.md']);
});

test('entries are exact paths, not prefixes', () => {
  assert.deepEqual(compare(['docs/a.md', 'docs/b.md'], ['docs/a.md']).unlisted, ['docs/b.md']);
});

test('duplicates are reported', () => {
  assert.deepEqual(compare(['a.md'], ['a.md', 'a.md']).duplicates, ['a.md']);
});

test('everything listed and present passes', () => {
  assert.deepEqual(compare(['a.md'], ['a.md']), { unlisted: [], missing: [], duplicates: [] });
});
