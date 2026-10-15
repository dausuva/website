# dausuva.com

The Dausuva website: company details and the Classroom Manager product page, in English
(`dausuva.com/`, `dausuva.com/school/`) and Lithuanian (`dausuva.com/lt/`, `dausuva.com/lt/school/`).
Built with [Hugo](https://gohugo.io/) and published to GitHub Pages by `.github/workflows/pages.yml` on
every push to `main`.

## Build locally

Hugo Extended **0.168.0** (the same version as the workflow):

```powershell
winget install --id Hugo.Hugo.Extended --version 0.168.0 --exact
hugo server            # preview at http://localhost:1313/
hugo --minify --panicOnWarning
```

## Where things are

- `hugo.toml`: company details, prices, contact addresses. Change them here only.
- `content/en/`, `content/lt/`: the pages. The product page's sections, features and prices are in its
  front matter.
- `i18n/`: button and label texts per language.
- `layouts/`, `assets/css/site.css`: the templates and the one stylesheet. No JavaScript, no cookies,
  nothing loaded from other sites.
- `assets/images/`: product screenshots, taken by the product's screenshot test with demo data only.
- `/classroom-manager/` redirects to `/school/` through Hugo `aliases` (GitHub Pages has no server
  redirects).

## Publishing (once)

1. Repository Settings > Pages > Source: **GitHub Actions**.
2. DNS for `dausuva.com` at the registrar: `A` records to `185.199.108.153`, `185.199.109.153`,
   `185.199.110.153`, `185.199.111.153` (and `AAAA` to `2606:50c0:8000::153`, `2606:50c0:8001::153`,
   `2606:50c0:8002::153`, `2606:50c0:8003::153`), and `www` as a `CNAME` to `dausuva.github.io`.
3. Settings > Pages > Custom domain: `dausuva.com` (the `static/CNAME` file says the same), then
   **Enforce HTTPS** once the certificate is issued. Verifying the domain for the `dausuva` organisation
   (organisation Settings > Pages) protects it from being claimed by another repository.
4. `dausuva.lt`: URL forwarding at its registrar to `https://dausuva.com/lt/school/`.
