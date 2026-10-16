# Small, maintainable search improvements

The site already has crawlable HTML, canonicals, language alternates, domain-specific
sitemaps and localized page descriptions. This update adds descriptive search/share
titles without replacing the visible marketing headings, a visible product-facts
summary, and JSON-LD company/website/page/software/breadcrumb metadata. It adds no
tracking pixels, analytics cookies or external dependencies. Contact protection
uses one first-party JavaScript module; JSON-LD itself remains inert metadata.

Maintain localized titles and summary copy in `data/search/en.toml` and `lt.toml`.
Company identity, version, Windows configurations and displayed prices come from
`hugo.toml`. The product description in JSON-LD is the same one displayed in the
summary. Breadcrumbs match the visible product/page path. Both domains refer to
the same company identity while retaining their own language and canonical URLs.

There are intentionally no invented ratings, customer reviews, free-app offers,
public-download URLs, FAQ rich-result promises or artificial freshness dates.
The supported deployment package is not represented as an app licence price.
SoftwareApplication metadata is descriptive: without genuine review/rating data
and an appropriate offer it does not meet Google's software-app rich-result
requirements. Do not manufacture those fields to remove validator warnings.

## Owner setup after publishing

### Google Search Console

1. Open [Search Console](https://search.google.com/search-console/about).
2. Add separate **Domain properties** for `dausuva.com` and `dausuva.lt`.
3. Add each property's supplied verification TXT record at its DNS provider.
   Keep existing Pages A/AAAA/CNAME records and GitHub domain-verification TXT
   records intact. These checks serve different purposes. Do not commit account
   credentials or private verification material to this repository.
4. Complete verification, then submit `https://dausuva.com/sitemap.xml` and
   `https://dausuva.lt/sitemap.xml` in their respective properties.
5. Use URL Inspection on `.com/school/`, `.lt/mokykloms/` and one detail page per language.
   Confirm the canonical is on that page's own domain and the page can be indexed.
   Request indexing once after the changes are deployed, not repeatedly.

Domain verification instructions: [Google's ownership-verification help](https://support.google.com/webmasters/answer/9008080).
Only production sites should be submitted; private preview builds remain noindex.

### Bing Webmaster Tools

1. Open [Bing Webmaster Tools](https://www.bing.com/webmasters/).
2. Import the verified Search Console sites if offered, or add and verify both
   domains using Bing's current ownership-verification instructions.
3. Check that both domain-specific sitemaps are listed and fetch successfully.
4. Inspect `.com/school/` and `.lt/mokykloms/`. Keep verification access with the site owner.

No IndexNow key or automated indexing pings are necessary for this small static
site's first pass. Never treat sitemap submission as an indexing guarantee.

## A light monthly check

- Look for crawl/indexing errors, wrong-domain canonicals or broken language links.
- Compare impressions, clicks and queries for each language over a consistent
  period. Low volume is not a reason to create many near-duplicate pages.
- Record genuine demo enquiries and ask how the school found the product.
  The static mail links do not automatically measure completed enquiries; an
  email-link click would not prove a lead even if click tracking were later added.
- Improve useful answers on existing pages before adding a content campaign.

Search placement, rich results and inclusion in AI answers are not guaranteed.
Google's [AI search guidance](https://developers.google.com/search/docs/appearance/ai-features)
says there is no special schema or AI-only file required. Accurate, accessible
content is the baseline; this is not a promise of measurable ranking gains.

## Verification

Run the existing builds and `scripts/test-site.mjs` checks in both single-host and
split-domain modes, plus `node --test scripts/domains.test.mjs scripts/contacts.test.mjs`. Output checks parse
the JSON-LD, check language/domain references and visible fact consistency, reject
unexpected executable scripts and invented reviews/offers, allow only the local
fingerprinted contact module, and retain all prior link, price,
privacy and disclosure checks. Validate production pages with the
[Schema.org validator](https://validator.schema.org/) after publication; Google's
[Rich Results Test](https://search.google.com/test/rich-results) checks a narrower
set of display eligibility requirements, not every valid schema type.
