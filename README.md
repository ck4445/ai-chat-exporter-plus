# AI Chat Exporter Plus

This script saves chats from ChatGPT, Claude, Copilot, and Gemini as Markdown (`.md`) or JSON (`.json`).

## 1) What to click (easy install)

1. Install Firefox.
2. Install Tampermonkey:
https://addons.mozilla.org/firefox/addon/tampermonkey
3. Click this link to install the script:
https://raw.githubusercontent.com/ck4445/ai-chat-exporter-plus/main/ai-chat-exporter.user.js
4. Tampermonkey opens. Click **Install**.

## 2) How to use it

1. Open one chat page:
   - https://chatgpt.com
   - https://claude.ai
   - https://copilot.microsoft.com
   - https://gemini.google.com
2. Refresh once.
3. Bottom-right, click:
   - **Export MD** for Markdown
   - **JSON** for JSON
4. Save the file.

## 3) If it does not work

- No buttons:
  - Make sure Tampermonkey is enabled.
  - Refresh the page.
- No download:
  - Check browser download settings.
  - Allow Tampermonkey download permissions.

## 4) Update later

1. Open Tampermonkey dashboard.
2. Click **Check for userscript updates**.
3. Update this script.

## 5) For your fork workflow (no PR)

Your fork:
https://github.com/ck4445/ai-chat-exporter-plus

Upstream:
https://github.com/revivalstack/ai-chat-exporter

Basic commands:

```bash
git add .
git commit -m "your message"
git push
```

## License

MIT license. You can fork and modify. Keep the license notice.
