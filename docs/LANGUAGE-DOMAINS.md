# Two language domains, one source repository

Prepared configuration, not yet activated. No repository, deploy key, secret or DNS setting was created
by this change. Keep the switch below disabled until the Lithuanian HTTPS site is verified.

| Role | Repository / address |
| --- | --- |
| Edit all source, content and automation here | `dausuva/website` |
| English native site | `https://dausuva.com/school/` |
| Lithuanian native site | `https://dausuva.lt/mokykloms/` |
| Generated Lithuanian files only, never edit manually | `dausuva/website-lt`, branch `gh-pages` |

The Hugo domain overlay builds `public/domains/en` and `public/domains/lt`. Each has its own canonical
URLs, hreflang, language switch, sitemap, CNAME and local assets. Old `.com/lt/…` bookmarks get a small
HTML redirect document to `.lt/…`; normal pages on either language domain do not redirect. This is
static hosting, not a shared application/database or browser-side hostname trick.

## 1. Create the deployment-only repository

Open [GitHub's new repository screen](https://github.com/new): owner **dausuva**, name **website-lt**,
visibility **Public**. Add a README so the repository has a default branch. Do not copy the Hugo source
there. All future generated site updates go to `gh-pages`; the README on `main` is irrelevant to hosting.

Leave [the existing source repository's Pages settings](https://github.com/dausuva/website/settings/pages)
on **GitHub Actions**, custom domain **dausuva.com**. Do not change the working `.com` DNS.

## 2. Create a dedicated deployment key locally

In PowerShell on your own PC, create a new key outside either repository:

```powershell
$deployKeyPath = Join-Path $env:USERPROFILE '.ssh\dausuva-website-lt-deploy'
if ((Test-Path -LiteralPath $deployKeyPath) -or (Test-Path -LiteralPath "$deployKeyPath.pub")) { throw 'Choose a new key filename; do not overwrite an existing key.' }
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $deployKeyPath) | Out-Null
ssh-keygen -t ed25519 -C 'Dausuva website Lithuanian deployment' -f $deployKeyPath
```

For this unattended automation key only, press Enter twice at the passphrase prompts. The two files are
the private key (no extension) and its public key (`.pub`). Keep the private file outside Git and never
paste it into chat, a ticket or a README. Do not reuse a lab key or your personal SSH key.

Go to [website-lt → Settings → Deploy keys](https://github.com/dausuva/website-lt/settings/keys),
choose **Add deploy key**, title **Website source → Lithuanian pages**, paste only the `.pub` file's
text, enable **Allow write access**, and save. This key can write to the deployment repository; it
does not expire automatically. Remove it there if automation is retired or the private key leaks.
[GitHub deploy-key reference](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys).

## 3. Store the private half in the source repository

Open [website → Settings → Secrets and variables → Actions](https://github.com/dausuva/website/settings/secrets/actions).
Choose **New repository secret**:

- Name: **`LT_PAGES_DEPLOY_KEY`**
- Secret: the complete private file's contents, including its BEGIN/END lines.

Do not put it on the Variables tab, and do not commit either key. The workflow loads the key into an
ephemeral SSH agent; it does not write the private key to a runner file or reuse the source checkout's token.
Protect/review changes to source `main` and workflow files: trusted source workflows can use this write credential.
[GitHub repository-secret reference](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets).

## 4. Push the prepared source, then seed Lithuanian output

After reviewing the prepared commit, push it from the existing source checkout:

```powershell
git -C D:\dausuva-website push origin main
```

With no activation variable set, regular pushes still publish the current bilingual `.com` layout.
Both domain builds are tested but Lithuanian publication is disabled by default.

Open [website → Actions → Publish site](https://github.com/dausuva/website/actions/workflows/pages.yml).
Choose **Run workflow**, branch **main**, check **Seed/update Lithuanian repository only**, then run.
The input's technical name is `prepare_lithuanian`. This run pushes only Lithuanian output and deliberately
skips English publication. Wait for the `deploy-lithuanian` job to succeed; it creates `gh-pages`.

In [website-lt → Settings → Pages](https://github.com/dausuva/website-lt/settings/pages), set:

- Source: **Deploy from a branch**
- Branch: **gh-pages**
- Folder: **/(root)**
- Save; custom domain: **dausuva.lt**, then Save.

The generated CNAME is already `dausuva.lt`; `.nojekyll` is included. The SSH deploy key is intentional:
a push using the source workflow's default `GITHUB_TOKEN` would not trigger branch-based Pages builds.
[GitHub publishing-source reference](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## 5. Configure dausuva.lt at the domain provider

First, in the **dausuva organization → Settings → Pages → Add a domain**, verify `dausuva.lt`
using the TXT record GitHub provides. Keep that TXT record afterwards.
[GitHub domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).

At the registrar/DNS provider for **dausuva.lt**:

1. Disable the old URL forwarding to `dausuva.com/lt/school/` (not masked/frame forwarding).
2. Replace conflicting apex web records with these A records:

   | Type | Name | Value |
   | --- | --- | --- |
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | dausuva.github.io |

3. If IPv6 is enabled, use all four GitHub Pages AAAA addresses: `2606:50c0:8000::153`,
   `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`. Do not leave old conflicting AAAA records.
4. Preserve **MX, SPF, DKIM, DMARC and verification TXT records**; these protect your email and domain ownership.

Return to website-lt Pages settings, wait for the DNS/certificate checks, then enable **Enforce HTTPS**.
Certificate issuance can take time; do not bypass a browser certificate warning. The main `.lt` address
must stay `.lt` in the address bar; the optional `www` name may redirect to its apex.
[GitHub domain and HTTPS configuration](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## 6. Verify Lithuanian hosting before activating the switch

Check [website-lt Actions](https://github.com/dausuva/website-lt/actions) for a successful Pages deployment.
Visit `https://dausuva.lt/mokykloms/`, `/mokykloms/funkcijos/`, `/mokykloms/kontaktai/` and `/privatumas/`. Confirm:

- Lithuanian text; the address remains `dausuva.lt` without `/lt/`.
- CSS and screenshots load, LT email buttons use `support@dausuva.lt`.
- EN switches to the matching page on `dausuva.com`.
- HTTPS is valid. A successful source push alone is not proof that Pages deployed.

If the branch was populated before Pages was enabled, rerun its **pages build and deployment** workflow
from the destination repository's Actions screen if needed.

## 7. Enable both automated deployments

In [website → Settings → Secrets and variables → Actions → Variables](https://github.com/dausuva/website/settings/variables/actions),
create a **repository variable**, not a secret:

- Name: **`LANGUAGE_DOMAINS_ENABLED`**
- Value: **`true`** (lowercase)

Run **Publish site** on `main` again, this time leaving **Seed/update Lithuanian repository only unchecked**.
Subsequent source pushes automatically build/test both languages, push LT output and deploy EN output.
The English deployment waits for the Lithuanian push to succeed. The destination's separate Pages
deployment may finish later; the two hosts do not update atomically.

Verify both sites, matching language switches, and an old `https://dausuva.com/lt/school/features/`
bookmark. Never edit generated files in `website-lt` to fix content; edit `content/lt/` in the source.

## Rollback / troubleshooting

- A Node.js 20 deprecation warning concerns JavaScript actions' own runtime, not
  the `node-version: '24'` used by the website checks. The source workflow uses
  Node 24-compatible checkout/setup-node v6, artifact upload/download v7, and
  Pages upload/deploy v5 (including the Pages uploader's nested artifact action).
  Push the workflow update, then run a new build; rerunning an older commit still
  uses its older workflow. GitHub-hosted `ubuntu-latest` runners are used here.
- Set `LANGUAGE_DOMAINS_ENABLED` to `false` or delete it, then run Publish site normally. English hosting
  returns to the original bilingual `.com` layout. This does not delete the LT repository, revoke its key,
  or automatically restore registrar forwarding; do those separately only if desired.
- Missing key/repository/write permission: fix the source secret and destination deploy-key permission;
  English domain-mode deployment will not proceed after a failed LT push. Do not grant a broad personal token.
- Non-fast-forward rejection: another process changed `gh-pages`; rerun from a fresh artifact. No force push is used.
- Branch protection/rulesets may need an explicit exception for the generated deployment branch/key.
- If the default `GITHUB_TOKEN` is used instead of the dedicated SSH key, destination Pages may not trigger.
- Keep both domains verified while DNS points to Pages. Do not add wildcard DNS records.

## Local verification

```powershell
hugo --minify --panicOnWarning --destination public/legacy
node scripts/test-site.mjs public/legacy https://dausuva.com/
hugo --config hugo.toml,config/domains/hugo.toml --minify --panicOnWarning --destination public/domains
node scripts/prepare-domains.mjs public/domains
node scripts/test-site.mjs public/domains --domains
node --test scripts/domains.test.mjs scripts/contacts.test.mjs
```

Use fresh output directories for release checks. `run.bat` deliberately keeps the simple single-host
local preview with Lithuanian under `/lt/`; it does not need real domains, a key or an internet deployment.
Lithuanian content omits explicit `url` overrides so Hugo can compute the correct route in both modes.
