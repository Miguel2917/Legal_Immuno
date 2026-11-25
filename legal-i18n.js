(function () {
  "use strict";

  var LANGS = [
    { code: "es", htmlLang: "es", label: "Español", aria: "Idioma" },
    { code: "en", htmlLang: "en", label: "English", aria: "Language" },
    { code: "pt", htmlLang: "pt-BR", label: "Português", aria: "Idioma" },
    { code: "fr", htmlLang: "fr", label: "Français", aria: "Langue" },
    { code: "ja", htmlLang: "ja", label: "日本語", aria: "言語" },
    { code: "ko", htmlLang: "ko", label: "한국어", aria: "언어" },
    { code: "id", htmlLang: "id", label: "Bahasa Indonesia", aria: "Bahasa" }
  ];

  var STORAGE_KEY = "immuno_legal_lang";
  var VALID = {};
  for (var i = 0; i < LANGS.length; i++) {
    VALID[LANGS[i].code] = LANGS[i];
  }

  function normalizeLang(raw) {
    if (!raw || typeof raw !== "string") return null;
    var base = raw.trim().toLowerCase().split(/[-_]/)[0];
    return VALID[base] ? base : null;
  }

  function getQueryLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      return normalizeLang(params.get("lang"));
    } catch (e) {
      return null;
    }
  }

  function getSavedLang() {
    try {
      return normalizeLang(window.localStorage.getItem(STORAGE_KEY));
    } catch (e) {
      return null;
    }
  }

  function saveLang(code) {
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch (e) {
      // ignore storage errors in private mode
    }
  }

  function detectBrowserLang() {
    var list = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || "es"];
    for (var j = 0; j < list.length; j++) {
      var match = normalizeLang(list[j]);
      if (match) return match;
    }
    return "es";
  }

  function updateUrlParam(code) {
    try {
      var url = new URL(window.location.href);
      if (code === "es") {
        url.searchParams.delete("lang");
      } else {
        url.searchParams.set("lang", code);
      }
      window.history.replaceState(null, "", url.toString());
    } catch (e) {
      // ignore on restricted origins
    }
  }

  function rewriteInternalLinks(root, code) {
    var links = root.querySelectorAll("a[href]");
    for (var k = 0; k < links.length; k++) {
      var a = links[k];
      var href = a.getAttribute("href");
      if (!href) continue;
      if (/^(https?:|mailto:|#)/i.test(href)) continue;
      var parts = href.split("#");
      var pathAndQuery = parts[0];
      var hash = parts.length > 1 ? "#" + parts[1] : "";
      var basePath = pathAndQuery.split("?")[0];
      if (!/\.html$/i.test(basePath)) continue;
      var nextHref = code === "es"
        ? basePath + hash
        : basePath + "?lang=" + encodeURIComponent(code) + hash;
      a.setAttribute("href", nextHref);
    }
  }

  function init() {
    var contentEl = document.getElementById("doc-content");
    var navEl = document.getElementById("lang-bar");
    if (!contentEl || !navEl) return;

    var translations = window.LEGAL_I18N || {};
    var defaultTitle = document.title;
    var defaultHtml = contentEl.innerHTML;

    var labelEl = document.createElement("span");
    labelEl.className = "lang-label";
    navEl.appendChild(labelEl);

    var buttons = {};
    for (var i = 0; i < LANGS.length; i++) {
      (function (lang) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "lang-btn";
        btn.setAttribute("data-lang", lang.code);
        btn.setAttribute("lang", lang.htmlLang);
        btn.textContent = lang.label;
        btn.addEventListener("click", function () {
          applyLang(lang.code, true);
        });
        navEl.appendChild(btn);
        buttons[lang.code] = btn;
      })(LANGS[i]);
    }

    function applyLang(code, persist) {
      var info = VALID[code] || VALID.es;
      var resolved = info.code;
      var entry = resolved === "es" ? null : translations[resolved];

      if (resolved !== "es" && !entry) {
        resolved = "es";
        info = VALID.es;
      }

      document.documentElement.setAttribute("lang", info.htmlLang);
      navEl.setAttribute("aria-label", info.aria);
      labelEl.textContent = info.aria + ":";

      if (resolved === "es") {
        document.title = defaultTitle;
        contentEl.innerHTML = defaultHtml;
      } else {
        document.title = entry.title || defaultTitle;
        contentEl.innerHTML = entry.html;
      }

      rewriteInternalLinks(contentEl, resolved);

      for (var c in buttons) {
        if (Object.prototype.hasOwnProperty.call(buttons, c)) {
          buttons[c].setAttribute("aria-pressed", c === resolved ? "true" : "false");
        }
      }

      if (persist) {
        saveLang(resolved);
        updateUrlParam(resolved);
      }
    }

    var initial = getQueryLang() || getSavedLang() || detectBrowserLang();
    applyLang(initial, false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
