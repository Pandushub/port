/* slider.js — highlights carousel: auto-advance, dots, arrows, swipe, pause on hover. */
(function () {
  function initSlider() {
    var root = document.getElementById('carousel');
    if (!root) return;
    var track = root.querySelector('.slides');
    var slides = root.querySelectorAll('.slide');
    var dotsBox = root.querySelector('.dots');
    var prev = root.querySelector('.prev');
    var next = root.querySelector('.next');
    var n = slides.length;
    var i = 0;
    var timer = null;
    var DELAY = 5000;

    // build dots
    for (var d = 0; d < n; d++) {
      var b = document.createElement('button');
      b.setAttribute('aria-label', 'Go to slide ' + (d + 1));
      b.dataset.i = d;
      dotsBox.appendChild(b);
    }
    var dots = dotsBox.querySelectorAll('button');

    function go(idx) {
      i = (idx + n) % n;
      track.style.transform = 'translateX(-' + (i * 100) + '%)';
      dots.forEach(function (dot, k) { dot.setAttribute('aria-selected', String(k === i)); });
    }
    function nextSlide() { go(i + 1); }
    function start() {
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) return;
      stop();
      timer = setInterval(nextSlide, DELAY);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function restart() { stop(); start(); }

    if (next) next.addEventListener('click', function () { nextSlide(); restart(); });
    if (prev) prev.addEventListener('click', function () { go(i - 1); restart(); });
    dotsBox.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-i]');
      if (b) { go(parseInt(b.dataset.i, 10)); restart(); }
    });

    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);

    // touch swipe
    var x0 = null;
    var vp = root.querySelector('.viewport');
    vp.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; stop(); }, { passive: true });
    vp.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) go(dx < 0 ? i + 1 : i - 1);
      x0 = null; start();
    });

    go(0);
    start();
  }
  window.PANDU_SLIDER = initSlider;
})();
