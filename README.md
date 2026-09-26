# Sayu Cafe

Marketing site for **Sayu Cafe** — a specialty coffee and matcha bar in South Poblacion, San Fernando, Cebu. The name *sayu* is Japanese for the quiet moments before the day gets loud, and the site is built around that feeling: minimal, warm, and made for early mornings.

Live socials: [@sayucafe.cebu](https://www.instagram.com/sayucafe.cebu/).

## Tech

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- Tailwind CSS v4
- TypeScript
- [Vercel Analytics](https://vercel.com/analytics)

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
npm run typecheck # TypeScript
npm run check   # lint, typecheck, and production build
```

## Project layout

```
app/           # App Router entry (layout.tsx, page.tsx, globals.css)
components/    # Section components (hero, menu-preview, about, gallery, ...)
lib/           # Shared site data and configuration
public/        # Static assets — logos, drink and gallery photos
```

## Visitor journey

Visitors can browse the menu, then send a pre-order request through Sayu Café's Facebook Messenger. The café confirms availability, total, and pickup details in the conversation; the website does not take payment or confirm orders. The Visit Us section uses the café's Google Maps listing for its embedded map, fallback link, and directions route.

The site uses Lenis for restrained desktop wheel scrolling. Touch momentum stays native, and reduced-motion preferences disable scroll smoothing and decorative animation.
