/* terminal.js — types the hero command, then reveals its output.
 * Respects prefers-reduced-motion (renders instantly). */
(function () {
  var COMMAND = 'whoami && ls projects/';

  function reveal(outputEl) {
    if (outputEl) outputEl.style.opacity = '1';
    var cursor = document.querySelector('.term .cursor');
    if (cursor) cursor.style.display = 'none';
  }

  function initTerminal() {
    var typed = document.getElementById('typed');
    var output = document.getElementById('term-out');
    if (!typed) return;

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { typed.textContent = COMMAND; reveal(output); return; }

    var i = 0;
    (function type() {
      if (i <= COMMAND.length) {
        typed.textContent = COMMAND.slice(0, i);
        i++;
        setTimeout(type, 55);
      } else {
        setTimeout(function () { reveal(output); }, 350);
      }
    })();
  }
  window.PORTFOLIO_TERMINAL = initTerminal;
})();
