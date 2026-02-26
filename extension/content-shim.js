/* Compatibility shim for running the userscript as a browser extension content script. */
(function () {
  if (typeof window.GM_getValue !== "function") {
    window.GM_getValue = function (key, defaultValue) {
      try {
        const raw = window.localStorage.getItem("__ai_chat_exporter__" + key);
        if (raw === null || raw === undefined) return defaultValue;
        return JSON.parse(raw);
      } catch (e) {
        return defaultValue;
      }
    };
  }

  if (typeof window.GM_setValue !== "function") {
    window.GM_setValue = function (key, value) {
      try {
        window.localStorage.setItem(
          "__ai_chat_exporter__" + key,
          JSON.stringify(value)
        );
      } catch (e) {
        // Ignore storage quota or access errors.
      }
    };
  }

  if (typeof window.GM_download !== "function") {
    window.GM_download = function (options) {
      try {
        const a = document.createElement("a");
        a.href = options.url;
        a.download = options.name || "download";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        a.remove();
        if (typeof options.onload === "function") options.onload();
      } catch (e) {
        if (typeof options.onerror === "function") options.onerror(e);
      }
    };
  }
})();
