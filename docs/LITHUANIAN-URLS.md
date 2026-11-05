# Lithuanian public URLs

English product pages live under `/classroom-manager/` (the old `/school/` addresses redirect there). Lithuanian pages use ASCII Lithuanian slugs:

| English path | Lithuanian path |
| --- | --- |
| `/classroom-manager/` | `/mokykloms/` |
| `/classroom-manager/features/` | `/mokykloms/funkcijos/` |
| `/classroom-manager/security/` | `/mokykloms/saugumas/` |
| `/classroom-manager/privacy/` | `/mokykloms/privatumas/` |
| `/classroom-manager/getting-started/` | `/mokykloms/pradzia/` |
| `/classroom-manager/pricing/` | `/mokykloms/kainos/` |
| `/classroom-manager/faq/` | `/mokykloms/duk/` |
| `/classroom-manager/request/` | `/mokykloms/kontaktai/` |
| `/privacy/` | `/privatumas/` |

On the split domains these are native `https://dausuva.lt/` URLs. The legacy
single-host/local preview prefixes Lithuanian paths with `/lt/`. Templates resolve
content pages, not English URL strings. The product overview is found by its
translation key, so `content/lt/overview.md` can have a different path from English.

Hugo aliases keep old `.lt/school/...`, `.lt/classroom-manager/...` and
`.lt/privacy/` bookmarks working. Domain preparation also sends historical
`.com/lt/...` URLs directly to the corresponding localized `.lt` destination.
GitHub Pages aliases are HTML redirects with a canonical and immediate meta refresh,
not server-side HTTP 301 responses. Do not advertise them as HTTP redirects.

Canonical URLs, hreflang, navigation, language switches, JSON-LD and sitemaps use
the localized destination. Review both language outputs before publication. The
old URLs are kept as redirects, not included as additional canonical sitemap pages.
