/* nav.js — marks the active editor tab based on the current filename. */
(function () {
  function initNav() {
    var here = location.pathname.split('/').pop() || 'index.html';
    if (here === '') here = 'index.html';
    document.querySelectorAll('.tab').forEach(function (tab) {
      var target = tab.getAttribute('data-file');
      if (target === here) tab.setAttribute('aria-current', 'page');
      else tab.removeAttribute('aria-current');
    });
  }
  window.PORTFOLIO_NAV = initNav;
})();
