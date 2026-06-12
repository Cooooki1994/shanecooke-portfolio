# Shane Cooke BFE — Portfolio Site

Professional documentary editor portfolio with autoplay video previews, built to replace or sit alongside [shanecookeedits.squarespace.com](https://shanecookeedits.squarespace.com/).

## Features

- **Hero autoplay** — cycles through Vimeo background clips (muted, looped)
- **Hover-to-play** project cards — Vimeo previews on hover where available
- **Award highlights** — BFE Cut Above & Broadcast Awards from CV
- **Full credits table** — television & streaming from CV 2026
- **Cinematic dark theme** — documentary-editor aesthetic (Cormorant + DM Sans)

## Quick start

```bash
cd portfolio-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Trailers (public only)

Hover autoplay uses **released** trailers linked on [shanecookeedits.squarespace.com](https://shanecookeedits.squarespace.com/) — Vimeo (`vimeoId`) or YouTube (`youtubeId`). No unreleased work-in-progress exports.

Add a trailer in `src/data/projects.ts`:

```ts
youtubeId: "3a9YIyQQBPY",  // or vimeoId: "678141708"
externalUrl: "https://www.youtube.com/watch?v=3a9YIyQQBPY",
```

## Deploy (replace Squarespace)

### Vercel (recommended)

1. Push `portfolio-site` to GitHub
2. Import at [vercel.com](https://vercel.com)
3. Point `shanecookeedits.com` DNS to Vercel (or use a subdomain first)

### Keep Squarespace domain

In Squarespace → Settings → Domains → connect external site, or use Vercel custom domain with DNS CNAME.

## Remotion hero reel

A Ken Burns showreel composition lives in `../remotion/src/compositions/PortfolioHeroReel.tsx`.

Render a hero background video:

```bash
cd ../remotion
npx remotion render PortfolioHeroReel out/portfolio-hero.mp4
```

Copy to `portfolio-site/public/videos/hero.mp4` and wire into the Hero component if you prefer a self-hosted reel over Vimeo.

## Content updates

Edit `src/data/projects.ts` for projects, awards, credits, and contact info.
