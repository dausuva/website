# Use current Hugo data APIs and test visible facts separately

- Date: 2026-10-16
- Keywords: Hugo, structured data, search, metadata, testing
- Trigger: New partials used `site.Data`, deprecated by the installed Hugo 0.168;
  the warning-fatal build correctly refused the result.
- Correction: Use `hugo.Data` for shared multilingual data. Rebuild both domain
  modes and the noindex preview before committing.
- Prevention: Keep warning-fatal builds enabled when extending Hugo templates.
  When checking that JSON-LD matches visible facts, strip script blocks before
  searching HTML; otherwise the metadata can accidentally validate itself.
