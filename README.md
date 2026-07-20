# Sayu Cafe

Marketing site for **Sayu Cafe** — a specialty coffee and matcha bar in South Poblacion, San Fernando, Cebu. The name *sayu* is Japanese for the quiet moments before the day gets loud, and the site is built around that feeling: minimal, warm, and made for early mornings.

Live socials: [@sayucafe.cebu](https://www.instagram.com/sayucafe.cebu/).

## Tech

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- Tailwind CSS v4 + [shadcn/ui](https://ui.shadcn.com) primitives
- TypeScript
- [Vercel Analytics](https://vercel.com/analytics)
- Bootstrapped and continuously synced from [v0](https://v0.app)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project layout

```
app/           # App Router entry (layout.tsx, page.tsx, globals.css)
components/    # Section components (hero, menu-preview, about, gallery, ...)
components/ui/ # shadcn/ui primitives
hooks/         # Shared React hooks
lib/           # Utilities (cn, etc.)
public/        # Static assets — logos, drink and gallery photos
```

## Deploying

Every merge to `main` deploys automatically via Vercel. The project is also linked to v0, so edits made there push commits back to this repo.

- [Continue on v0 →](https://v0.app/chat/projects/prj_KhFoOKtdoR39rHj2NtjRHP01NmVk)
