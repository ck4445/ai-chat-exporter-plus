# AI Chat Exporter Plus (v2.7.1)

Export chats from ChatGPT, Claude, Copilot, and Gemini to Markdown or JSON.

Fork: [ck4445/ai-chat-exporter-plus](https://github.com/ck4445/ai-chat-exporter-plus)  
Upstream: [revivalstack/ai-chat-exporter](https://github.com/revivalstack/ai-chat-exporter)

## Supported Sites

- `https://chatgpt.com/*`
- `https://chat.openai.com/*`
- `https://claude.ai/*`
- `https://copilot.microsoft.com/*`
- `https://gemini.google.com/*`

## Quick Setup (Firefox + Windows)

1. Install Tampermonkey for Firefox: [addons.mozilla.org/firefox/addon/tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey)
2. Install script from fork raw URL:
[Install `ai-chat-exporter.user.js` from your fork](https://raw.githubusercontent.com/ck4445/ai-chat-exporter-plus/main/ai-chat-exporter.user.js)
3. Keep Tampermonkey save prompts enabled.
4. Open a supported chat page and use `Export MD` or `JSON`.

## Setup From Source

1. Clone your fork.
2. Edit `ai-chat-exporter.user.js`.
3. Paste updated script into Tampermonkey and save.
4. Refresh chat page and test export.

## Fork Workflow (No PR)

```bash
git remote -v
# origin   https://github.com/ck4445/ai-chat-exporter-plus.git
# upstream https://github.com/revivalstack/ai-chat-exporter.git
```

Push changes:

```bash
git add .
git commit -m "Your message"
git push
```

## Features

- Markdown and JSON export
- Markdown TOC and YAML metadata
- Outline panel with selective export
- Regex search in outline
- Filename format placeholders
- Windows-safe filenames
- Firefox-friendly downloads via `GM_download`

## Filename Placeholders

- `{exporter}`
- `{platform}`
- `{title}`
- `{timestamp}`
- `{timestampLocal}`
- `{tags}`
- `{tag1}` ... `{tag9}`

Default:

```text
{platform}_{title}_{timestampLocal}
```

## What's New (Legacy Notes)

### v2.7.0
- Copilot support
- Light-theme consistency for outline UI
- Improved JSON structure to mirror Markdown flow
- Details: [CHANGELOG.md](CHANGELOG.md)

### v2.6.0
- Claude support
- Better Claude code block handling
- Refactoring for maintainability
- Details: [CHANGELOG.md](CHANGELOG.md)

### v2.5.0
- Custom filename format settings
- Title/tag parsing improvements
- Improved Gemini older-message loading
- Details: [CHANGELOG.md](CHANGELOG.md)

## Export Format

Markdown export includes:
- YAML front matter metadata
- Table of contents
- Message content with formatting/code blocks

See:
- [sample.md](sample.md)
- [regex.md](regex.md)

## Troubleshooting

- No buttons: refresh page and confirm Tampermonkey is enabled for the site.
- No download: check Tampermonkey permissions and browser download settings.
- Filename changed: Windows-invalid characters/reserved names are normalized.
- Missing old Gemini messages: scroll up to load more messages, then export.

## License

MIT License. See [LICENSE](LICENSE).
You can fork, modify, and redistribute with license notice retained.
