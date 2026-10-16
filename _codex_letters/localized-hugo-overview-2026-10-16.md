# Keep localized overview identity separate from section permalink rules

- Date: 2026-10-16
- Keywords: Hugo, multilingual, slugs, URLs, permalinks
- Trigger: A Lithuanian `school` section permalink also affected the same-named
  overview file, producing `/mokykloms/mokykloms/` instead of `/mokykloms/`.
- Correction: Move the localized overview to `overview.md`, keep its explicit
  translation key, and resolve it by that identity in shared templates. Resolve
  navigation from content pages rather than hard-coded English public paths.
- Prevention: Test overview and detail canonicals, language switches, schema and
  old aliases in both multihost and single-host builds. Do not infer correct URLs
  from successful rendering alone; inspect sitemaps and exact generated paths.
