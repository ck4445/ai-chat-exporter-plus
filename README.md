# AI Chat Exporter Plus

This fork exports chats to one format only:
- `userdata.jsonl`

No Markdown export. No alternate export types.

## Important Safety Warning (shown every export)

Before each export, the script shows this warning:

`WARNING: Do not open-source or share this export unless you already checked there is NO sensitive data and NO illegal material.`

## Install (Firefox + Tampermonkey)

1. Install Tampermonkey:
https://addons.mozilla.org/firefox/addon/tampermonkey
2. Install script:
https://raw.githubusercontent.com/ck4445/ai-chat-exporter-plus/main/ai-chat-exporter.user.js

## Use

1. Open a chat page on ChatGPT, Claude, Copilot, or Gemini.
2. Click `Export userdata.jsonl`.
3. Read the warning and confirm.
4. File downloads as `userdata.jsonl`.

## Output schema

One JSON object per line (`.jsonl`).

Schema/config file:
- `compliation.json`

## License

MIT. Keep license notice when sharing code.
