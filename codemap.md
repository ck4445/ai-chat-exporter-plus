# Codemap

## Objective

Enforce a single export path: JSONL only, fixed filename `userdata.jsonl`, and mandatory export disclaimer.

## Primary Files

- `ai-chat-exporter.user.js`
  - Tampermonkey userscript for ChatGPT/Claude/Copilot/Gemini export.
  - Core utility methods live in `Utils`.
  - Export flow calls `Utils.downloadFile(...)` with JSONL output only.
- `README.md`
  - Basic setup documentation for JSONL-only behavior.
- `compliation.json`
  - Export format/config reference (`userdata.jsonl`, disclaimer policy, line schema).
- `extension/build-extension.ps1`
  - Builds extension packages from the userscript into `extension/dist/firefox` and `extension/dist/chrome`.
- `extension/content-shim.js`
  - Defines compatibility shims for extension mode.
- `extension/manifest.firefox.json`
  - Firefox MV3 manifest template.
- `extension/manifest.chrome.json`
  - Chrome MV3 manifest template.
- `extension/README.md`
  - Minimal extension build/load instructions.

## Recent Changes

- Enforced JSONL-only export path.
- Fixed export filename to `userdata.jsonl`.
- Added mandatory confirmation disclaimer before every export.
- Removed Markdown export button and generic JSON export option.
- Removed filename-format settings UI.
- Added `compliation.json` for export/config policy.

## Removal Log

- Removed: Markdown export flow (`formatToMarkdown` and related button).
- Removed: Filename format settings flow (`GM_getValue`, `GM_setValue`, settings button).
- Removed: Unused filename helper methods (`slugify`, `formatFileName`).
