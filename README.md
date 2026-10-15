# Amogo Moses — React Developer Portfolio

A multi-page React + Vite portfolio using React Router, Lucide icons, a black/white/deep-gold theme, 20 illustrative project cards, a contact form that opens the visitor's email app, and a print/save-as-PDF CV page.

## Run locally

1. Install Node.js LTS if it is not already installed: https://nodejs.org/
2. Open this folder in VS Code.
3. Open the terminal in VS Code and run:

   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL Vite prints in the terminal (usually `http://localhost:5173`).

## Important customisation

- Change the contact destination in `src/pages/Contact.jsx` and `src/pages/CV.jsx` from `edfrikconsult@gmail.com` if you prefer a different professional email.
- Review the CV content before using it for an application.
- The 20 project entries in `src/data.js` are illustrative ideas, not claims of completed work. Add actual GitHub/live-demo links only after those projects exist.
- Images are loaded from Unsplash's image CDN, so they need an internet connection. See https://unsplash.com/license.
- This contact form uses `mailto:` and does not send/store messages on a server. A production contact form needs a backend or a form service.
- If you deploy this as a single-page app, configure your hosting provider to serve `index.html` for routes such as `/projects` and `/contact`.
