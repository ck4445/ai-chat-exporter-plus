/* Background worker for reliable file downloads in extension mode. */

const runtimeApi =
  (typeof browser !== "undefined" && browser.runtime) ||
  (typeof chrome !== "undefined" && chrome.runtime);
const downloadsApi =
  (typeof browser !== "undefined" && browser.downloads) ||
  (typeof chrome !== "undefined" && chrome.downloads);

if (runtimeApi && downloadsApi) {
  runtimeApi.onMessage.addListener((message, sender, sendResponse) => {
    if (!message || message.type !== "AI_CHAT_EXPORTER_DOWNLOAD") return;

    try {
      downloadsApi.download(
        {
          url: message.url,
          filename: message.filename || "userdata.jsonl",
          saveAs: true,
          conflictAction: "uniquify",
        },
        () => {
          const lastError =
            (typeof chrome !== "undefined" &&
              chrome.runtime &&
              chrome.runtime.lastError &&
              chrome.runtime.lastError.message) ||
            null;

          if (lastError) {
            sendResponse({ ok: false, error: lastError });
            return;
          }
          sendResponse({ ok: true });
        }
      );
    } catch (err) {
      sendResponse({ ok: false, error: String(err) });
    }

    return true;
  });
}
