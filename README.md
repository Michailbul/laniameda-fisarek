# Fisarek Presentation

A cinematic creative treatment presentation for Laniameda.

## Project Structure

- `index.html`: Main presentation entry point.
- `css/`: Stylesheets (Tailwind via CDN + custom styles).
- `js/`: Application logic.
- `ep*/`: Asset folders for each episode's imagery.

## Deployment on Vercel

This project is ready for static deployment on [Vercel](https://vercel.com).

### Option 1: Vercel CLI (Recommended)

1.  **Install Vercel CLI**: `npm i -g vercel`
2.  **Deploy**: Run `vercel` in this directory.
    -   Follow the prompts (accept defaults).
3.  **Production**: Run `vercel --prod` to deploy to production.
4.  **Custom Domain**:
    -   Link your domain `laniameda.space` in the Vercel Project Settings > Domains.
    -   The project is configured to serve content at `laniameda.space/lovedoesnothurt` automatically via rewrites.

### Option 2: Git Integration

1.  Push this repository to GitHub/GitLab/Bitbucket.
2.  Import the project in Vercel.
3.  Vercel will automatically detect the static file structure.
    -   **Framework Preset**: Other (or None)
    -   **Root Directory**: `./` (default)

## Features

- **Bulk Image Download**: The "Download All Images" button in the intro section uses `JSZip` to package all presentation assets into a ZIP file client-side.
- **Cinematic Animations**: Scroll-driven reveals and custom carousel interactions.

## Local Development

To run locally, simply serve the directory with any static server:

```bash
npx serve .
```

Open `http://localhost:3000` in your browser.
