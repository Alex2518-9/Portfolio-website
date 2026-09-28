# Alex Téringer — Portfolio

A personal portfolio site built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- Fonts: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (code/labels) + [Inter](https://fonts.google.com/specimen/Inter) (body), via `next/font/google`

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content to personalize before you launch

- **`public/resume.pdf`** — replace this placeholder with your real resume (keep the same filename, or update the link in `src/components/Nav.tsx`).
- **`src/data/projects.ts`** — swap in your real projects.
- **`src/data/skills.ts`** — adjust to match your actual stack.
- **`src/components/About.tsx`** — update the bio text and quick facts.
- **`src/components/Contact.tsx`** — replace the email address and social links.
- **`src/app/layout.tsx`** — update the `metadata` (title/description) if needed.

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Design notes

- Dark, IDE/terminal-inspired look: monospace labels, code-block hero, and file-card project grid (`src/components/TerminalWindow.tsx` is the reusable "window chrome" used in the hero and project cards).
- Colors, fonts, and other tokens live in `src/app/globals.css` (`:root` and `@theme inline`).
- Sections are split into standalone components under `src/components/` — reorder or remove sections in `src/app/page.tsx`.
