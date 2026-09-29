# Alex Téringer — Portfolio

Personal portfolio website for a frontend and mobile developer based in Tokyo, Japan. The site introduces my experience, skills, selected projects, resume, and contact details.

**Live site:** [teringer-alex-dev.vercel.app](https://teringer-alex-dev.vercel.app/)

## Features

- Responsive, terminal-inspired design
- English and Japanese language options
- Dark and light themes
- Theme and language preferences saved in the browser
- Project gallery with images, videos, and links
- Downloadable English CV and Japanese work history
- Search engine metadata, sitemap, and robots file

## Tech stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) and [Inter](https://fonts.google.com/specimen/Inter), loaded with `next/font`

## Getting started

### Requirements

- Node.js 20.9 or later
- npm

### Run locally

```bash
git clone https://github.com/Alex2518-9/Portfolio-website.git
cd Portfolio-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
├── app/          # App Router pages, layout, styles, sitemap, and robots
├── components/   # Page sections and reusable UI
├── data/         # Project, skill, and document content
└── lib/          # Shared site configuration
public/
├── documents/    # CV and work history PDFs
├── images/       # Profile and project images
└── videos/       # Project demo videos
```

## Updating the portfolio

- Edit project entries in [`src/data/projects.ts`](src/data/projects.ts).
- Update skills in [`src/data/skills.ts`](src/data/skills.ts).
- Update resume and work-history links and labels in [`src/data/documents.ts`](src/data/documents.ts); place corresponding PDFs in `public/documents/`.
- Edit biography and quick facts in [`src/components/About.tsx`](src/components/About.tsx).
- Update contact details and social links in [`src/components/Contact.tsx`](src/components/Contact.tsx).
- Update page metadata in [`src/app/layout.tsx`](src/app/layout.tsx) and the canonical site URL in [`src/lib/site.ts`](src/lib/site.ts).
- Adjust colors and design tokens in [`src/app/globals.css`](src/app/globals.css).

## Deployment

The site can be deployed to [Vercel](https://vercel.com/) by importing the GitHub repository. Vercel detects Next.js and configures the build automatically. The production build can also be tested locally:

```bash
npm run build
npm run start
```
