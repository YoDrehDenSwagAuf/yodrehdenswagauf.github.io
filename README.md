# YoDrehDenSwagAuf - Games

Public studio catalog for **YoDrehDenSwagAuf - Games**, Marcel Fischer's indie
minigame studio. Playdate is a first love, not the whole shelf — the catalog
also tracks PC and web experiments.

This is a static marketing page: hero, game shelf, social teaser, about, and
legal stubs. Store links, trailers, and cover art are wired so they can be
swapped without redesigning the layout.

## Run locally

```bash
npm install
npm run dev
```

The dev server binds to `http://127.0.0.1:4731`.

```bash
npm run build
npm run preview
```

## Swap placeholders

| What | Where |
| --- | --- |
| Game blurbs, status, platform, Catalog / itch / trailer URLs | `src/data/games.ts` |
| Studio name, email, GitHub, itch, Buy Me a Coffee | `src/data/studio.ts` |
| Instagram / TikTok / X handles | `src/data/studio.ts` (`social`) |
| Cover illustrations | Real art via `coverGif` / `coverImage` / `coverHover` in `src/data/games.ts`. Games without promo art (Dental Drill Disco, coming-soon slots) use the CRT panel in `src/components/CrtCover.tsx`. |
| Studio mark | Header uses a text wordmark (thicker **Yo**, gold **Games** centered under the name). The bitmap `public/assets/studio-logo.png` is unused in chrome for now. First visit plays a short GBA SP–style boot on the hero wordmark only (`sessionStorage`, skipped when `prefers-reduced-motion`). |
| Cranky Tanks hover | Idle still `cranky-tanks-idle.jpg`, intro `cranky-tanks-intro.gif` / `.mp4`, loop `cranky-tanks-card.gif`. Billboard `cranky-tanks-billboard.png` is the poster/fallback. |
| Trailer embed | set `links.trailerEmbed` to a YouTube/Vimeo embed URL — the card opens a dialog. Use `links.trailer` for a plain outbound link. |
| Impressum / privacy copy | `src/components/LegalPage.tsx` |

## Cranky Tanks card hover

Idle shows the tank behind the grass. Hover plays the grass intro once, then
loops the card GIF. Leave reverses the intro and lands back on the still.
Rapid hover in/out flips direction from the current frame. Motion respects
`prefers-reduced-motion`.

Covers for Cranky Tanks are real 1-bit promo art with the idle → intro → loop
hover. Unfinished games (Dental Drill Disco, coming-soon slots) use a CRT
panel: bezel, scanlines, phosphor glow, and a no-input / unstable signal
readout. Do not copy Panic / Playdate Catalog trademarks.

## Stack

Vite + React + TypeScript. Scroll reveals use `IntersectionObserver`. Motion
respects `prefers-reduced-motion`.
