# Copilot Instructions for My-Website

This workspace contains a static website (HTML/CSS/JS), a Next.js app (`my-next-website`), and a Sanity content studio (`studio`). Follow these guidelines to be productive as an AI coding agent:

## Architecture Overview
- **Root (`index.html`, etc.):** Static Bootstrap-based site. Key files: `index.html`, `contact.html`, `topics-listing.html`, `topics-detail.html`, `css/`, `js/`, `assets/`.
- **Next.js App (`my-next-website/`):** Modern React app. Entry: `app/page.tsx`. Config: `next.config.ts`, `tsconfig.json`. Start with `npm run dev`.
- **Sanity Studio (`studio/`):** Content management backend. Entry: `sanity.config.ts`. See [Sanity docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme).

## Developer Workflows
- **Static Site:** No build step. Edit HTML/CSS/JS directly. Use Bootstrap classes and icons (`bi-*`).
- **Next.js:**
  - Start dev server: `npm run dev` (in `my-next-website/`)
  - Main page: `app/page.tsx`. Hot reload enabled.
  - Deploy: See Next.js docs or Vercel.
- **Sanity Studio:**
  - Run studio: `npm start` or follow Sanity CLI instructions in `studio/README.md`.
  - Extend schemas in `schemaTypes/`.

## Patterns & Conventions
- **Bootstrap:** Use classes from `css/bootstrap.min.css` and icons from `css/bootstrap-icons.css`.
- **Navigation:** Navbar and footer use `<i class="bi-back"></i>` and similar icons. See `index.html` for structure.
- **Tabs & Sections:** Content organized in Bootstrap tabs (`nav nav-tabs`) and sections (`section-*`).
- **Images:** Store in `images/` and reference with relative paths.
- **Dropdowns:** Use Bootstrap dropdowns for language and page selection.
- **Custom JS:** Scripts in `js/` folder. Main entry: `js/custom.js`.

## Integration Points
- **Sanity ↔ Next.js:** For dynamic content, connect Next.js to Sanity backend (see Sanity/Next.js integration guides).
- **Static ↔ Dynamic:** Static site is separate from Next.js app; no direct code sharing.

## Key Files & Directories
- `index.html`: Main landing page, navbar, footer, and sections.
- `css/`: Stylesheets (Bootstrap, custom, icons).
- `js/`: JavaScript (Bootstrap, custom scripts).
- `my-next-website/`: Next.js app (React, TypeScript).
- `studio/`: Sanity content studio (schemas, config).
- `assets/`: Third-party assets (Bootstrap, images, plugins).

## Examples
- To add a new topic card: Edit the relevant section in `index.html` and add an image to `images/topics/`.
- To update navigation: Edit navbar in `index.html` and ensure icon classes match those in `css/bootstrap-icons.css`.
- To add a new schema: Create a file in `studio/schemaTypes/` and import it in `sanity.config.ts`.

---

If any section is unclear or missing, please provide feedback to improve these instructions.