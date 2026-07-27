/* data.js — the source of truth for all projects.
 * Edit here to add / change a project; the projects page renders from this.
 * Set `url` to a live site or a GitHub repo. */
window.PORTFOLIO_DATA = {
  projects: [
    {
      id: "verdant",
      name: "Verdant",
      file: "verdant.tsx",
      domain: "AI · Documents",
      tags: ["AI"],
      blurb: "AI résumé & cover-letter builder. Upload a PDF/DOCX/TXT résumé, confirm your details and a target role, and it generates tailored, review-before-download documents across hundreds of layouts.",
      stack: ["React", "TypeScript", "Vite", "PDF.js", "Cloudflare Workers"],
      role: "Design & build",
      status: "Live",
      // EDIT: replace with the live URL (currently points to your GitHub)
      url: "https://github.com/pandushub"
    },
    {
      id: "quant-dashboard",
      name: "Quant Dashboard",
      file: "dashboard.jsx",
      domain: "Finance · Data",
      tags: ["Finance"],
      blurb: "A quantitative finance dashboard streaming live market data into portfolio analytics — positions, performance, and risk in one readable view.",
      stack: ["Web", "Live market data", "Analytics"],
      role: "Design & build",
      status: "Live",
      url: "https://github.com/pandushub"
    },
    {
      id: "terminal",
      name: "Terminal",
      file: "terminal.js",
      domain: "Finance · Terminal",
      tags: ["Finance"],
      blurb: "A Bloomberg-style financial terminal built for a portfolio showcase — dense, real-time market readouts in a dark, information-first interface built for speed.",
      stack: ["Web", "Real-time UI"],
      role: "Design & build",
      status: "Live",
      url: "https://github.com/pandushub"
    },
    {
      id: "flashcards",
      name: "Flashcard Generator",
      file: "flashcards.js",
      domain: "AI · Learning",
      tags: ["AI"],
      blurb: "A local-first AI tool that turns notes into study flashcards, running the model on-device so nothing leaves the browser.",
      stack: ["Web", "Local AI inference"],
      role: "Design & build",
      status: "Live",
      url: "https://github.com/pandushub"
    },
    {
      id: "student-perf",
      name: "Student Performance Predictor",
      file: "predictor.py",
      domain: "ML · Neural net",
      tags: ["ML"],
      blurb: "A neural network that predicts student performance from study and background features — data cleaning, training, and evaluation end to end.",
      stack: ["Python", "TensorFlow"],
      role: "Model & build",
      status: "Live",
      url: "https://github.com/pandushub"
    },
    {
      id: "wordy",
      name: "Wordy",
      file: "wordy.py",
      domain: "Games · Python",
      tags: ["Games"],
      blurb: "A Wordle-inspired word game in Python, written to a clean, Flake8-compliant standard for automated grading.",
      stack: ["Python"],
      role: "Design & build",
      status: "Live",
      url: "https://github.com/pandushub"
    }
  ]
};
