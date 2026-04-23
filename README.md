# Desire Foundation — 3D Multi-Page Website

A motion-rich, 3D-enhanced website for **Desire Foundation**, focused on women empowerment, green environment, rural employment, and societal welfare. 8 pages, fully separated routes, no donation flow.

## Tech Stack

- **React 19** + **Vite** — fast dev server and optimized builds
- **Three.js** / **React Three Fiber** / **Drei** — 3D hero scenes (particle field, globe, leaf cluster)
- **Tailwind CSS** — brand palette, keyframe animations, responsive design
- **React Router** — 8 routes with code splitting via `React.lazy`

## Design

- **Palette:** Earthy green (`#2D6A4F`) + warm gold (`#D4A24C`) + cream (`#FAF7F0`) + deep forest accents
- **Typography:** Playfair Display (headings) + Inter (body)
- **Mood:** Warm, hopeful, grounded — inspired by NGO storytelling sites

## Pages

| Route | Page |
|---|---|
| `/` | Home — 3D particle hero, pillar grid, impact counters, partner marquee |
| `/about` | About — founding timeline, core values hex grid, vision/mission + 3D leaf scene |
| `/focus-areas` | Focus Areas — 4 flip cards (Women / Green / Rural / Welfare) |
| `/projects` | Projects — 9 cards with status filters & 3D tilt |
| `/programs` | Programs — 9 program cards grouped by pillar |
| `/impact` | Impact — animated stat counters, milestone timeline, testimonials, awards |
| `/team` | Team — 6 leadership cards, field force numbers, org structure |
| `/contact` | Contact — info card, animated form with toast, map placeholder |

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Lint

```bash
npm run lint
```
