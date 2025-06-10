(() => {
  // <stdin>
  function darkMode() {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    function applyTheme(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      themeIcon.textContent = theme === "dark" ? "[bright]" : "[dark]";
    }
    if (savedTheme != currentTheme) {
      applyTheme(savedTheme);
    } else if (systemPrefersDark) {
      applyTheme("dark");
    }
    themeToggle.addEventListener("click", function() {
      const currentTheme2 = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme2 === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }
  document.addEventListener("DOMContentLoaded", darkMode);
})();
