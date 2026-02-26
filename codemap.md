# Codemap

## Objective

Maintain Firefox + Windows-friendly export behavior and provide a clear setup guide for fork-first usage.

## Primary Files

- `ai-chat-exporter.user.js`
  - Tampermonkey userscript for ChatGPT/Claude/Copilot/Gemini export.
  - Core utility methods live in `Utils`.
  - Export flow calls `Utils.downloadFile(...)`.
- `README.md`
  - Very basic setup documentation.
  - Plain step-by-step install/use/troubleshooting/update instructions for non-technical users.
- `extension/build-extension.ps1`
  - Builds extension packages from the userscript into `extension/dist/firefox` and `extension/dist/chrome`.
- `extension/content-shim.js`
  - Defines `GM_getValue`, `GM_setValue`, and `GM_download` compatibility shims for extension mode.
- `extension/manifest.firefox.json`
  - Firefox MV3 manifest template.
- `extension/manifest.chrome.json`
  - Chrome MV3 manifest template.
- `extension/README.md`
  - Minimal extension build/load instructions.

## Recent Changes

- Added `@grant GM_download` to userscript metadata.
- Added `Utils.sanitizeWindowsFilename(name)` to enforce Windows filename safety.
- Updated `Utils.downloadFile(...)` to:
  - Prefer `GM_download` when available (better Firefox/Tampermonkey behavior).
  - Fall back to anchor download if `GM_download` is not available.
  - Use normalized Windows-safe filenames in both paths.
- Added extension packaging pipeline:
  - Build script for Firefox/Chrome output folders.
  - Browser-specific manifest templates.
  - Compatibility shim so the userscript runs in extension mode.
  - Main README section linking to extension packaging flow.

## Removal Log

- None for this task.
