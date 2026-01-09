(function () {
  const root = document.documentElement;
  const key = "anyland-theme";

  function setTheme(t) {
    if (t === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
    try { localStorage.setItem(key, t); } catch (_) {}
  }

  function getPreferred() {
    try {
      const saved = localStorage.getItem(key);
      if (saved === "light" || saved === "dark") return saved;
    } catch (_) {}
    const mql = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)");
    return (mql && mql.matches) ? "light" : "dark";
  }

  const btn = document.getElementById("themeBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      const isLight = root.getAttribute("data-theme") === "light";
      setTheme(isLight ? "dark" : "light");
    });
  }

  setTheme(getPreferred());
})();
