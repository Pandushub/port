/* statusbar.js — drives the VS Code-style bottom bar (live clock + build info). */
(function () {
  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function tick() {
    var el = document.getElementById('clock');
    if (!el) return;
    var d = new Date();
    el.textContent = pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
  }

  function initStatus() {
    tick();
    setInterval(tick, 1000);
    var count = document.getElementById('sb-count');
    if (count && window.PORTFOLIO_DATA) {
      count.textContent = window.PORTFOLIO_DATA.projects.length + ' projects';
    }
  }
  window.PORTFOLIO_STATUS = initStatus;
})();
