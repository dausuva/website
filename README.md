# dausuva.com

The Dausuva website: company details and the Classroom Manager product pages, in English and Lithuanian.
English is served on `dausuva.com` and Lithuanian on `dausuva.lt`; old `dausuva.com/lt/…` addresses
redirect there. A local preview keeps Lithuanian under `/lt/`.
Built with [Hugo](https://gohugo.io/) and published to GitHub Pages by `.github/workflows/pages.yml` on
every push to `main`.

The second repository (`dausuva/website-lt`) stores the generated Lithuanian pages only; keep all
source changes in `dausuva/website`.

## What may be in this repository

This repository is public, so it holds only the site and what builds and tests it. Plans, notes and
setup runbooks belong in the private product repository. `PUBLIC-FILES.txt` lists every file; a commit
or push that adds anything else fails `scripts/check-public-files.mjs` until the file is added to the
list, which is the deliberate decision to publish it. The check runs first in CI, so nothing deploys
while it fails, and as a pre-commit hook once enabled per clone:

```powershell
git config core.hooksPath .githooks
```

Names that must never appear on the pages (lab PCs, internal hosts) are checked by
`scripts/test-site.mjs` from the `SITE_PRIVATE_TERMS` Actions secret, or locally from an uncommitted
`.private-terms` file, one term per line. The list itself is never committed.

## Build locally

On Windows, double-click **`run.bat`**. It finds Hugo on PATH or in the WinGet installation,
starts a localhost-only preview and opens `/school/` in your default browser once ready.
Keep the terminal open; press Ctrl+C to stop. Nothing is published.
Use `run.bat -Port 1314` for another port, `run.bat -NoBrowser` to skip opening a browser,
or `run.bat -Check` to build without starting the preview.

Hugo Extended **0.168.0** (the same version as the workflow):

```powershell
winget install --id Hugo.Hugo.Extended --version 0.168.0 --exact
hugo server            # preview at http://localhost:1313/
hugo --minify --panicOnWarning
node scripts/test-site.mjs public https://dausuva.com/
```

## Where things are

- `hugo.toml`: company details, prices, contact addresses. Change them here only.
- `content/en/`, `content/lt/`: the pages. The product page's sections, features and prices are in its
  front matter.
- `i18n/`: button and label texts per language.
- `layouts/`, `assets/css/site.css`: the templates and the one stylesheet. No JavaScript, no cookies,
  nothing loaded from other sites.
- `assets/images/demo-*.png`: reviewed app screenshots with synthetic demo data, copied from the
  product's help screenshot suite. The page captions identify them as illustrative, not a capture of
  the latest release.
- `/classroom-manager/` redirects to `/school/` through Hugo `aliases` (GitHub Pages has no server
  redirects).

## Product pages and review

The green-and-white `d.` favicon is a font-independent vector in
`assets/icons/favicon.svg`. Hugo fingerprints its URL for cache updates and
includes it on both language sites. Edit this SVG to update the tab icon.

Both languages have the same eight-page product journey: overview, features, school IT/security,
product privacy, getting started, pricing, FAQ and request. Website privacy is a separate page.
Lithuanian URLs use `/mokykloms/` and localized subpaths; see the
[URL map and bookmark compatibility](docs/LITHUANIAN-URLS.md).
Public contact links use [lightweight click-to-reveal protection](docs/CONTACT-PROTECTION.md),
with one-click email drafts and a written fallback when JavaScript is disabled.
Pricing is rendered from `hugo.toml`; edit the first-year and renewal values there, not in copy.

Hugo generates the pages and styles. Node 24 runs dependency-free output checks and domain-deployment
helpers; no npm packages, frontend framework or Node server are required.
The checks cover all 16 product pages, localized contact drafts, canonical/hreflang pairs, legacy
aliases, local links and anchors, screenshot dimensions/alt text, approved prices and key disclosures.
They do not replace visual mobile/desktop review, Lighthouse, accessibility testing or an owner copy review.

For a private review, build to a **fresh** external directory rather than publishing old `public/`
contents. This avoids retaining unreferenced old images. Pass `--environment preview` and the actual
preview `--baseURL`; preview pages include `noindex, nofollow`. Test that output with:

```powershell
node scripts/test-site.mjs PATH_TO_OUTPUT https://YOUR_PREVIEW_ORIGIN/ --preview
```

Hugo prefixes aliases with the language directory: Lithuanian content uses `/classroom-manager/`
as its alias value, not `/lt/classroom-manager/` (which would create `/lt/lt/…`).

Do not call the product independently security-audited or certified based on this site. The school IT
page records current controls, the checks to repeat on the supplied build and the remaining boundaries:
manual recovery after a failed Client start, file roots that are not a hardened junction sandbox, and
privileged Admin commands. Re-check those statements against the actual package before a public launch.

Pushing `main` triggers public GitHub Pages publication. A private Sites preview does not authorize
that push or a DNS change. The private preview is a sanitized build-output copy, not a second canonical
source tree; keep maintaining this Hugo repository.

## Publishing (once)

For the small search-visibility feature set and owner-side verification/sitemap
steps, see [Search visibility](docs/SEARCH-VISIBILITY.md).

1. Repository Settings > Pages > Source: **GitHub Actions**.
2. DNS for `dausuva.com` at the registrar: `A` records to `185.199.108.153`, `185.199.109.153`,
   `185.199.110.153`, `185.199.111.153` (and `AAAA` to `2606:50c0:8000::153`, `2606:50c0:8001::153`,
   `2606:50c0:8002::153`, `2606:50c0:8003::153`), and `www` as a `CNAME` to `dausuva.github.io`.
3. Settings > Pages > Custom domain: `dausuva.com` (the `static/CNAME` file says the same), then
   **Enforce HTTPS** once the certificate is issued. Verifying the domain for the `dausuva` organisation
   (organisation Settings > Pages) protects it from being claimed by another repository.
4. `dausuva.lt` is served from `dausuva/website-lt` (GitHub Pages, branch `gh-pages`), which the
   workflow fills using the `LT_PAGES_DEPLOY_KEY` secret while the `LANGUAGE_DOMAINS_ENABLED` variable
   is `true`.
