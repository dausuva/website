# Lightweight contact harvesting deterrence

Email and phone links are revealed on request by a small first-party JavaScript
module (`assets/js/contacts.mjs`). Prepared demo/deployment buttons open an email
draft on one click, preserving the localized subject and body. Nothing is sent
automatically. Revealed contact links are normal, selectable/copyable links, and
keyboard focus moves to the new link. There is no analytics, storage, fetch call,
external script, form provider, CAPTCHA or server-side endpoint.

Rendered HTML contains encoded contact payloads rather than raw email/phone
values or mailto/tel hrefs. Company JSON-LD intentionally omits those fields to
avoid bypassing the visible controls. Privacy/security pages use the same helper.
Without JavaScript, nonfunctional buttons are hidden and written `[at]`/`[dot]`
email addresses and separated phone digits remain available, with instructions.

This deters only basic HTML scrapers. Base64 is reversible encoding, not encryption.
A JavaScript-capable crawler, a person or a bot that reads the manual fallback can
recover the contacts. Public source history, caches, registries and previous pages
may already contain them. Do not describe these business contacts as secret or
promise that spam will stop. The deliberately accessible fallback limits how
aggressively harvesting can be blocked.

Use mailbox-provider junk filtering and a dedicated public enquiries alias for
actual incoming spam handling. Keep private personal numbers off public pages if
that separation is needed. Those operational choices are not changed by this code.
Stronger submission protection would need an approved server-side form endpoint,
rate limiting, validation and abuse handling; a frontend CAPTCHA alone is not a
validated form backend. No account/DNS/email settings were changed here.

Tests cover contact validation, safe link creation, keyboard focus, draft-only
navigation, Lithuanian Unicode and rejection of malformed/executable destinations.
Built-output checks reject raw contacts throughout all generated HTML, validate
the contact module and retain the existing no-form/no-third-party-embed checks.
