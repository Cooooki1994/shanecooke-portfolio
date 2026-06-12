# Squarespace → Professional Portfolio

Your current [Squarespace site](https://shanecookeedits.squarespace.com/) uses static poster images and buried Vimeo embeds on sub-pages. This upgrade path gets you to **autoplay clips + award-led positioning** from your CV.

## Option A — Deploy the new site (recommended)

The `portfolio-site` folder is a production-ready replacement:

| Current Squarespace | New site |
|---|---|
| Static screenshots | Hero + hover **autoplay** (Vimeo background mode) |
| Generic bio block | CV-driven awards, credits, specialisms |
| Default Squarespace template | Custom documentary-editor aesthetic |
| Project pages buried | Filterable work grid |

**Deploy:** See `README.md` → Vercel + point your domain.

## Option B — Improve Squarespace in-place

If you stay on Squarespace temporarily:

1. **Hero video block** — Add a Video block at the top; upload a 30–45s muted showreel (render `PortfolioHeroReel` from Remotion, or export from Premiere).
2. **Autoplay on portfolio** — Squarespace 7.1 portfolio hover video: use **Gallery** or **Portfolio** with video thumbnails (upload short MP4 loops per project).
3. **Lead with awards** — Move BFE + Broadcast Awards above the fold in a text block with gold accent styling.
4. **Update copy** — Paste profile text from `src/data/projects.ts` (matches CV 2026).
5. **Add History Hit 2025–26** — Churchill's Secret Army, Rise of Caesar, Icelandic Vikings (currently missing from live site).
6. **Remove dead links** — `/work`, `/shop`, `/blog` in footer go nowhere; keep Portfolio + Contact only.
7. **Typography** — Settings → Site Styles → Fonts: heading **Cormorant Garamond**, body **DM Sans** or **Inter**.

## Vimeo IDs already on your site

Wire these into Squarespace video blocks or the new site:

- **Babes in the Woods** — `361741556`
- **Who Killed Billie Jo?** — `678141708`

Add Vimeo IDs for MWMA, Willem & Frieda, Louise Kam when you have permission to host previews.

## Remotion showreel

```bash
cd ../remotion
npx remotion render PortfolioHeroReel out/portfolio-hero.mp4
```

Use the output as Squarespace hero video or `portfolio-site/public/videos/hero.mp4`.
