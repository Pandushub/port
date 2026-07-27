/* main.js — entry point. Initializes each module once the DOM is ready. */
(function () {
  function boot() {
    if (window.PORTFOLIO_NAV) window.PORTFOLIO_NAV();
    if (window.PORTFOLIO_STATUS) window.PORTFOLIO_STATUS();
    if (window.PORTFOLIO_TERMINAL) window.PORTFOLIO_TERMINAL();
    if (window.PORTFOLIO_RENDER) window.PORTFOLIO_RENDER();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
