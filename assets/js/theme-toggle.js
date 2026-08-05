(function () {
  var root = document.documentElement;

  function currentSetting() {
    var stored = localStorage.getItem("theme");
    return stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
  }

  function applySetting(setting) {
    root.setAttribute("data-theme-setting", setting);
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = setting === "system" ? (prefersDark ? "dark" : "light") : setting;
    root.setAttribute("data-theme", theme);
  }

  function cycle() {
    var setting = currentSetting();
    var next = setting === "system" ? "light" : setting === "light" ? "dark" : "system";
    localStorage.setItem("theme", next);
    applySetting(next);
  }

  applySetting(currentSetting());

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.getElementById("light-toggle");
    if (toggle) {
      toggle.addEventListener("click", cycle);
    }
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
        applySetting(currentSetting());
      });
    }
  });
})();
