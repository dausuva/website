import { test } from 'node:test';
import assert from 'node:assert/strict';
import { decodeContact, contactHref, activateContact } from '../assets/js/contacts.mjs';

const encode = value => Buffer.from(JSON.stringify(value), 'utf8').toString('base64');
const email = { kind: 'email', value: 'support@dausuva.lt' };
test('contact reveal creates a safe copyable link and moves keyboard focus without navigation', () => {
  let replaced;
  let focused = false;
  const anchor = { focus() { focused = true; } };
  const button = { dataset: { contact: encode(email) }, replaceWith(link) { replaced = link; } };
  activateContact(button, { createElement(tag) { assert.equal(tag, 'a'); return anchor; } }, () => assert.fail('Reveal must not navigate'));
  assert.equal(replaced, anchor);
  assert.equal(anchor.href, 'mailto:support@dausuva.lt');
  assert.equal(anchor.textContent, email.value);
  assert.ok(focused);
});

test('Lithuanian drafts preserve Unicode, line breaks and reserved characters', () => {
  const draft = { ...email, kind: 'compose', subject: 'Classroom Manager demonstracija: ąčęėįšųūž & +', body: 'Kontaktinis asmuo:\nMokykla & klasė + IT\n' };
  const decoded = decodeContact(encode(draft));
  assert.deepEqual(decoded, draft);
  let destination;
  activateContact({ dataset: { contact: encode(draft) } }, {}, href => { destination = href; });
  const url = new URL(destination);
  assert.equal(url.protocol, 'mailto:');
  assert.equal(url.pathname, email.value);
  assert.equal(url.searchParams.get('subject'), draft.subject);
  assert.equal(url.searchParams.get('body'), draft.body);
});

test('phone reveal validates E.164 destination and uses display text only as text', () => {
  const payload = { kind: 'phone', value: '+37064845767', label: '<img src=x onerror=alert(1)>' };
  let link;
  activateContact({ dataset: { contact: encode(payload) }, replaceWith(value) { link = value; } },
    { createElement() { return { focus() {} }; } }, () => assert.fail());
  assert.equal(link.href, 'tel:+37064845767');
  assert.equal(link.textContent, payload.label);
  assert.equal(link.innerHTML, undefined);
  assert.equal(contactHref(decodeContact(encode(payload))), link.href);
});

test('malformed and executable destinations cannot reach the DOM or navigation', () => {
  for (const value of [null, {}, { kind: 'link', value: 'https://evil.invalid' },
    { ...email, value: 'javascript:alert(1)' }, { ...email, value: 'support@dausuva.lt?bcc=other@invalid.test' },
    { kind: 'phone', value: '+37064845767;ext=123' }, { kind: 'phone', value: '+1' },
    { ...email, kind: 'compose', subject: 'Header\nInjection', body: '' },
    { ...email, kind: 'compose', subject: 'demo', body: null }]) {
    assert.throws(() => decodeContact(encode(value)));
    assert.throws(() => activateContact({ dataset: { contact: encode(value) } },
      { createElement() { assert.fail('Invalid contact reached DOM'); } }, () => assert.fail('Invalid contact navigated')));
  }
  assert.throws(() => decodeContact('not base64!'));
  assert.throws(() => decodeContact('a'.repeat(32769)));
});
