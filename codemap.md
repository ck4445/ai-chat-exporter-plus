# Codemap

## Objective

Add Firefox + Windows-friendly export behavior and document setup/fork workflow.

## Primary Files

- `ai-chat-exporter.user.js`
  - Tampermonkey userscript for ChatGPT/Claude/Copilot/Gemini export.
  - Core utility methods live in `Utils`.
  - Export flow calls `Utils.downloadFile(...)`.
- `README.md`
  - Installation and usage documentation.
  - Now includes Firefox + Windows setup and fork-first workflow notes.

## Recent Changes

- Added `@grant GM_download` to userscript metadata.
- Added `Utils.sanitizeWindowsFilename(name)` to enforce Windows filename safety.
- Updated `Utils.downloadFile(...)` to:
  - Prefer `GM_download` when available (better Firefox/Tampermonkey behavior).
  - Fall back to anchor download if `GM_download` is not available.
  - Use normalized Windows-safe filenames in both paths.
- Added README sections:
  - `Firefox + Windows setup (recommended)`
  - `Fork-first workflow (no pull request)`

## Removal Log

- None for this task.
