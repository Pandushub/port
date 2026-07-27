/* render.js — builds project cards and filter chips from PORTFOLIO_DATA.
 * Runs only on pages that have a #project-list container (the projects page). */
(function () {
  function cardHTML(p) {
    var chips = p.stack.map(function (s) { return '<span class="chip">' + s + '</span>'; }).join('');
    return (
      '<article class="card" data-tags="' + p.tags.join(' ') + '">' +
        '<div class="card-top">' +
          '<span class="fname">' + p.file + '</span>' +
          '<span class="tag">' + p.domain + '</span>' +
        '</div>' +
        '<h3>' + p.name + '</h3>' +
        '<p class="blurb">' + p.blurb + '</p>' +
        '<div class="stack">' + chips + '</div>' +
        '<div class="card-foot">' +
          '<span class="status">' + p.status + '</span>' +
          '<a class="go" href="' + p.url + '" target="_blank" rel="noopener">open <span aria-hidden="true">&rarr;</span></a>' +
        '</div>' +
      '</article>'
    );
  }

  function buildFilters(projects, onChange) {
    var box = document.getElementById('filters');
    if (!box) return;
    var tags = ['All'];
    projects.forEach(function (p) {
      p.tags.forEach(function (t) { if (tags.indexOf(t) === -1) tags.push(t); });
    });
    box.innerHTML = tags.map(function (t, i) {
      return '<button class="filter" aria-pressed="' + (i === 0) + '" data-tag="' + t + '">' + t + '</button>';
    }).join('');
    box.addEventListener('click', function (e) {
      var b = e.target.closest('.filter');
      if (!b) return;
      box.querySelectorAll('.filter').forEach(function (f) { f.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
      onChange(b.dataset.tag);
    });
  }

  function render() {
    var list = document.getElementById('project-list');
    if (!list || !window.PORTFOLIO_DATA) return;
    var projects = window.PORTFOLIO_DATA.projects;

    function draw(filter) {
      var shown = projects.filter(function (p) {
        return filter === 'All' || p.tags.indexOf(filter) !== -1;
      });
      list.innerHTML = shown.length
        ? shown.map(cardHTML).join('')
        : '<div class="empty">No projects match that filter.</div>';
      var c = document.getElementById('proj-count');
      if (c) c.textContent = String(shown.length).padStart(2, '0') + ' shown';
    }

    buildFilters(projects, draw);
    draw('All');
  }

  window.PORTFOLIO_RENDER = render;
})();
