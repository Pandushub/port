/* main.js — boot all modules once the DOM is ready. */
(function () {
  function boot() {
    if (window.PANDU_THEMES) window.PANDU_THEMES();
    if (window.PANDU_ROTATOR) window.PANDU_ROTATOR();
    if (window.PANDU_SLIDER) window.PANDU_SLIDER();
    if (window.PANDU_REVEAL) window.PANDU_REVEAL();

    // nav shadow on scroll
    var nav = document.querySelector('.nav');
    if (nav) {
      var onScroll = function () {
        if (window.scrollY > 20) nav.style.boxShadow = 'var(--shadow)';
        else nav.style.boxShadow = 'none';
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
