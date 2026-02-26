# Extension Packaging

Build browser-extension folders from `ai-chat-exporter.user.js` (no Tampermonkey required).

## Build

From repo root:

```powershell
powershell -ExecutionPolicy Bypass -File .\extension\build-extension.ps1 -Target all
```

Or one browser:

```powershell
powershell -ExecutionPolicy Bypass -File .\extension\build-extension.ps1 -Target firefox
powershell -ExecutionPolicy Bypass -File .\extension\build-extension.ps1 -Target chrome
```

Output:
- `extension/dist/firefox`
- `extension/dist/chrome`

## Load in Firefox

1. Open `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on...**
3. Select `extension/dist/firefox/manifest.json`

## Load in Chrome

1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select folder: `extension/dist/chrome`

## Update flow

1. Edit `ai-chat-exporter.user.js`
2. Re-run build script
3. Reload extension in browser extensions page
