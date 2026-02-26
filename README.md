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

## Install (Chrome)

Option A: Tampermonkey (same behavior as Firefox)
1. Install Tampermonkey for Chrome:
https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
2. Install script:
https://raw.githubusercontent.com/ck4445/ai-chat-exporter-plus/main/ai-chat-exporter.user.js

Option B: Upload folder (no Tampermonkey)
1. Build extension folders:
`powershell -ExecutionPolicy Bypass -File .\extension\build-extension.ps1 -Target all`
2. Open `chrome://extensions`
3. Turn on **Developer mode**
4. Click **Load unpacked**
5. Select folder: `extension/dist/chrome`

## Use

1. Open a chat page on ChatGPT, Claude, Copilot, or Gemini.
2. Click `Export userdata.jsonl`.
3. Read the warning and confirm.
4. File downloads as `userdata.jsonl`.

If you click confirm and nothing downloads:
- Reload the extension/userscript and refresh the tab.
- Disable other chat-related extensions and test again.
- CSP errors in console are often from other extensions; this exporter does not inject inline `<script>`.

## Output schema

One JSON object per line (`.jsonl`) in this exact shape:

```json
{"messages":[{"role":"user","content":"..."},{"role":"assistant","content":"..."}]}
```

No extra fields are included.

Schema/config file:
- `compliation.json`

## License

MIT. Keep license notice when sharing code.
