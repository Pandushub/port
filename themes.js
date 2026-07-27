/* themes.js — sliding theme switcher (Aurora / Ember / Mono). */
(function () {
  var ORDER = ['aurora', 'ember', 'mono'];

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var sw = document.querySelector('.theme-switch');
    if (!sw) return;
    sw.querySelectorAll('button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.theme === theme));
    });
    var glider = sw.querySelector('.glider');
    if (glider) glider.style.transform = 'translateX(' + (ORDER.indexOf(theme) * 34) + 'px)';
    try { localStorage.setItem('pandu-theme', theme); } catch (e) {}
  }

  function initThemes() {
    var saved = 'aurora';
    try { saved = localStorage.getItem('pandu-theme') || 'aurora'; } catch (e) {}
    if (ORDER.indexOf(saved) === -1) saved = 'aurora';

    var sw = document.querySelector('.theme-switch');
    if (sw) {
      sw.addEventListener('click', function (e) {
        var b = e.target.closest('button[data-theme]');
        if (b) apply(b.dataset.theme);
      });
    }
    apply(saved);
  }
  window.PANDU_THEMES = initThemes;
})();
