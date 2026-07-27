# Pandu — Personal Site

A polished, animated personal marketing site — built to show off skills, not a list of past projects. Plain HTML/CSS/JS, no framework, no build step.

## Highlights

- **Three switchable themes** — Aurora, Ember, Mono — with a sliding switcher (top right). Your choice is remembered.
- **Animated hero** with a rotating word.
- **Drifting aurora background** + subtle grid.
- **Highlights carousel** — auto-advancing, swipeable, with dots and arrows.
- **Scrolling skills marquee.**
- **Scroll-reveal** animations throughout.
- Fully responsive; respects `prefers-reduced-motion` and keyboard focus.

## Structure

```
index.html            # the whole page
css/
  reset.css           # baseline
  themes.css          # the 3 color themes (edit palettes here)
  base.css            # typography + aurora background
  layout.css          # nav, sections, footer
  components.css      # buttons, cards, carousel, marquee, stats, steps
  animations.css      # keyframes + scroll reveal
js/
  themes.js           # sliding theme switcher
  rotator.js          # hero rotating word (edit the word list here)
  slider.js           # highlights carousel
  reveal.js           # scroll reveals
  main.js             # entry point
assets/favicon.svg
README.md · netlify.toml · package.json · .gitignore
```

## Make it yours

- **Rotating hero words** → `js/rotator.js` (the `WORDS` array).
- **Stats numbers** → `index.html`, search `EDIT` (set your real numbers).
- **Services, principles, process, skills** → `index.html` (plain text, easy to edit).
- **Theme colors** → `css/themes.css`.

Your name (Pandu), email (panduchiluvuri7@gmail.com), GitHub, and LinkedIn are already wired in.

## Run locally

```bash
npm start          # or: python3 -m http.server
```

## Publish (get a link to share)

- **Netlify Drop** (fastest): drag this whole folder onto https://app.netlify.com/drop → live URL in seconds.
- **GitHub Pages**: push to a repo → Settings → Pages.
- **Vercel**: `vercel`, or import the repo.

## Support

panduchiluvuri7@gmail.com
