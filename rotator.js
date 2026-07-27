/* rotator.js — cycles the hero word with a slide animation. */
(function () {
  var WORDS = ['web apps', 'AI tools', 'dashboards', 'experiences'];

  function initRotator() {
    var host = document.getElementById('rotator');
    if (!host) return;

    // width sizer keeps layout from jumping to the longest word
    var sizer = document.createElement('span');
    sizer.className = 'word';
    sizer.style.visibility = 'hidden';
    sizer.textContent = WORDS.reduce(function (a, b) { return a.length >= b.length ? a : b; });
    host.appendChild(sizer);

    var current = document.createElement('span');
    current.className = 'word in';
    current.textContent = WORDS[0];
    host.appendChild(current);

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var i = 0;

    setInterval(function () {
      i = (i + 1) % WORDS.length;
      var next = document.createElement('span');
      next.className = 'word';
      next.textContent = WORDS[i];
      host.appendChild(next);

      if (reduce) {
        current.remove();
        next.classList.add('in');
        current = next;
        return;
      }

      // trigger animations
      requestAnimationFrame(function () {
        current.classList.remove('in');
        current.classList.add('out');
        next.classList.add('in');
      });
      var old = current;
      current = next;
      setTimeout(function () { old.remove(); }, 650);
    }, 2200);
  }
  window.PANDU_ROTATOR = initRotator;
})();
