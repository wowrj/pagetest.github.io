// Persist dark/light preference across pages
(function () {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') document.documentElement.classList.add('dark');
})();

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('themeBtn');
  const icon = document.getElementById('themeIcon');
  if (!btn) return;

  function update() {
    const isDark = document.documentElement.classList.contains('dark');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    btn.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  }

  update();

  btn.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    update();
  });
});
