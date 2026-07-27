# Pandu — Portfolio

A technical, developer-styled portfolio (dark IDE aesthetic). Plain HTML/CSS/JS — no build step, no framework. The project list is data-driven, so you add or edit projects in one place.

## Structure

```
portfolio/
├── index.html          # home — hero + featured work
├── projects.html       # all projects (rendered from js/data.js, with filters)
├── about.html          # about, toolbox, contact
├── css/
│   ├── reset.css       # baseline reset
│   ├── tokens.css      # colors, type, spacing (design variables)
│   ├── base.css        # typography + global elements
│   ├── layout.css      # the editor frame: tab bar, viewport, status bar
│   ├── components.css  # buttons, cards, tags, terminal, chips, skills
│   └── pages.css       # per-page composition (hero, grids, about)
├── js/
│   ├── data.js         # ← your projects live here (source of truth)
│   ├── render.js       # builds project cards + filters from data.js
│   ├── nav.js          # highlights the active tab
│   ├── statusbar.js    # live clock + project count in the status bar
│   ├── terminal.js     # hero typewriter effect
│   └── main.js         # entry point — wires the modules together
├── assets/
│   └── favicon.svg     # monogram favicon
├── README.md
├── .gitignore
├── netlify.toml        # deploy + clean-URL config
└── package.json        # metadata + `npm start` local server
```

## Edit your projects

Everything about your projects lives in **`js/data.js`** — name, description, stack, tags, and the link. Change it there and the projects page updates automatically. The four featured cards on the home page are in `index.html` (search for `card`).

Right now every project link points to your GitHub profile (`github.com/pandushub`). Replace each `url` in `js/data.js` (and the `href`s in `index.html`) with the real live-site or repo URL — search for `EDIT`.

Your name, email (panduchiluvuri7@gmail.com), GitHub, and LinkedIn are already wired in.

## Run locally

Because the projects page loads files with JavaScript, open it through a tiny local server (opening the `.html` directly from disk can block that):

```bash
npm start        # then visit the printed http://localhost address
# or, without npm:
python3 -m http.server
```

The home and about pages work fine opened directly; the server just guarantees the projects list renders everywhere.

## Publish (get a link to share)

- **Netlify Drop** (fastest): go to https://app.netlify.com/drop and drag this whole `portfolio` folder in. Live URL in seconds; `netlify.toml` gives you clean `/projects` and `/about` URLs.
- **GitHub Pages**: push to a repo → Settings → Pages → deploy from `main`.
- **Vercel**: `vercel` from this folder, or import the repo.

## Support

panduchiluvuri7@gmail.com
