// Publishes generated files only. SSH credentials belong to the caller's short-lived agent.
import { existsSync, readFileSync, realpathSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

export function publishLithuanian(directory, remote, sourceCommit) {
  const root = realpathSync(directory);
  if (!/^[0-9a-f]{40}$/.test(sourceCommit)) throw new Error('Expected a full source commit SHA.');
  if (existsSync(join(root, '.git'))) throw new Error('Use fresh generated output, not an existing source checkout.');
  if (readFileSync(join(root, 'CNAME'), 'utf8').trim() !== 'dausuva.lt' ||
      !existsSync(join(root, '.nojekyll')) ||
      !/<html\s+lang=(?:"lt"|lt)[\s>]/.test(readFileSync(join(root, 'index.html'), 'utf8'))) {
    throw new Error('Expected prepared Lithuanian output with the correct CNAME and .nojekyll.');
  }
  function git(args, accepted = [0]) {
    const result = spawnSync('git', ['-C', root, ...args], { encoding: 'utf8', windowsHide: true });
    if (result.error) throw result.error;
    if (!accepted.includes(result.status)) throw new Error(`Git operation failed (${args[0]}): ${result.stderr}`);
    return result;
  }
  git(['init', '--quiet', '--initial-branch=gh-pages']);
  git(['config', 'user.name', 'Dausuva website deployment']);
  git(['config', 'user.email', '41898282+github-actions[bot]@users.noreply.github.com']);
  git(['config', 'commit.gpgsign', 'false']);
  git(['remote', 'add', 'origin', remote]);
  const advertised = git(['ls-remote', '--exit-code', '--heads', 'origin', 'gh-pages'], [0, 2]);
  if (advertised.status === 0) {
    git(['fetch', '--quiet', '--depth=1', 'origin', 'gh-pages']);
    // Reset the index to remote history, keeping the fresh generated working files. Files removed
    // from today's output are then staged as deletions; no source repository is overwritten.
    git(['reset', '--mixed', 'FETCH_HEAD']);
  }
  git(['add', '--all', '--', '.']);
  if (git(['diff', '--cached', '--quiet'], [0, 1]).status === 0) {
    console.log('Lithuanian output unchanged; no deployment commit needed.');
    return false;
  }
  git(['commit', '--quiet', '-m', `Deploy Lithuanian site from ${sourceCommit}`]);
  git(['push', 'origin', 'HEAD:gh-pages']); // Normal fast-forward push; never rewrite remote history.
  console.log(`Published Lithuanian output from ${sourceCommit}. Check the destination Pages workflow.`);
  return true;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const [directory, repository, commit] = process.argv.slice(2);
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository || '') ||
      repository.toLowerCase() === (process.env.GITHUB_REPOSITORY || 'dausuva/website').toLowerCase()) {
    throw new Error('Choose a separate deployment-only owner/repository.');
  }
  publishLithuanian(directory, `git@github.com:${repository}.git`, commit);
}
