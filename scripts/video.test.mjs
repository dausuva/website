import { test } from 'node:test';
import assert from 'node:assert/strict';
import { embedUrl, play } from '../assets/js/video.mjs';
test('timestamp playback uses the privacy-enhanced host and rejects executable video IDs', () => {
  assert.equal(embedUrl('OU81pvKxGTA', 127.9), 'https://www.youtube-nocookie.com/embed/OU81pvKxGTA?autoplay=1&rel=0&start=127');
  assert.ok(embedUrl('OU81pvKxGTA', -50).endsWith('start=0'));
  for (const id of ['javascript:alert(1)', 'https://youtu.be/OU81pvKxGTA', '', '<script>']) assert.throws(() => embedUrl(id));
});
test('playing or seeking replaces only the selected player with a titled accessible iframe', () => {
  let child;
  let playing = false;
  const box = { dataset: { videoId: 'OU81pvKxGTA', videoTitle: 'Lesson 4: Files' }, replaceChildren(frame) { child = frame; }, classList: { add(value) { playing = value === 'playing'; } } };
  play(box, 164, { createElement(tag) { assert.equal(tag, 'iframe'); return {}; } });
  assert.equal(child.title, 'Lesson 4: Files');
  assert.ok(child.src.endsWith('start=164'));
  assert.equal(child.referrerPolicy, 'strict-origin-when-cross-origin');
  assert.equal(child.allowFullscreen, true);
  assert.equal(playing, true);
});
