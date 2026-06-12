# Publish together — Squarespace + new portfolio

Your new site is a **Next.js app**. Squarespace **cannot host it directly** — Squarespace only serves pages built inside their editor.

What we **can** do:

1. **Deploy the new site to Vercel** (free, built for Next.js).
2. **Keep** your Squarespace account for now.
3. **Send visitors** to the new site via link, redirect, or (later) a custom domain.

---

## Important: `shanecookeedits.squarespace.com`

That URL is **owned by Squarespace**. You cannot point it at Vercel.

| URL | What happens |
|-----|----------------|
| `shanecookeedits.squarespace.com` | Always your **old** Squarespace site |
| `something.vercel.app` | Your **new** portfolio (after deploy) |
| `shanecookeedits.com` (if you buy one) | Can point to the new site |

**Without a custom domain**, the cleanest launch is:

- New site live on **Vercel** (e.g. `shanecooke-portfolio.vercel.app`)
- Old Squarespace homepage gets a short note + **“View portfolio”** button to the Vercel URL  
  *(or we add a domain later and switch traffic in one step)*

---

## Phase 1 — GitHub (you + Cursor)

### 1. Create an empty repo on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Name: e.g. `shanecooke-portfolio`
3. **Private** or public — your choice
4. **Do not** add README / .gitignore (we already have them)
5. Create repository — copy the `git@github.com:YOU/shanecooke-portfolio.git` URL

### 2. Push from this Mac

```bash
cd /Users/shanecooke/CURSOR_TEST/portfolio-site

git add .
git commit -m "Portfolio site ready for production deploy"

git remote add origin git@github.com:YOUR_USERNAME/shanecooke-portfolio.git
git branch -M main
git push -u origin main
```

Say when the repo URL is ready — we can run the push from here.

---

## Phase 2 — Vercel

### 1. Import project

1. Sign in at [vercel.com](https://vercel.com) (GitHub login is easiest)
2. **Add New → Project**
3. Import `shanecooke-portfolio`
4. **Root Directory:** leave as `.` (repo root is the Next.js app)
5. Framework: **Next.js** (auto-detected)
6. **Deploy**

First build takes ~2 minutes. You get a URL like `https://shanecooke-portfolio.vercel.app`.

### 2. Environment variable (optional but good)

Vercel → Project → **Settings → Environment Variables**

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://YOUR-PROJECT.vercel.app` |

Redeploy after adding (Deployments → … → Redeploy).

### 3. Smoke test

- [ ] Homepage hero video autoplays (muted)
- [ ] Project cards hover-preview
- [ ] `/work/my-wife-my-abuser` detail page loads
- [ ] Mobile layout OK

---

## Phase 3 — Squarespace (bridge until you have a .com)

You have **no custom domain** right now, so we **bridge** from the old site:

### Option A — Homepage banner (5 min)

Squarespace → **Edit** homepage:

1. Add a **Button** block at the top: **“View updated portfolio”** → your Vercel URL
2. Optional: hide or shrink the old project grid so the button is obvious
3. **Save**

### Option B — Full redirect page

1. New page: `/portfolio` with only the button + one line of copy
2. Set as **homepage** temporarily, or link from nav

### Option C — Buy a domain (best long-term)

Squarespace → **Settings → Domains → Get a domain** (e.g. `shanecookeedits.com`).

Then **Phase 4** below.

---

## Phase 4 — Custom domain on Vercel (when you have one)

1. Vercel → Project → **Settings → Domains** → add `shanecookeedits.com` and `www`
2. Vercel shows **DNS records** (A + CNAME)
3. Squarespace → **Settings → Domains → your domain → DNS**
4. Add Vercel’s records (do **not** delete MX if you use Squarespace/Google email)
5. Squarespace → set old site to **Private** (stops Squarespace intercepting traffic on that domain)
6. Wait 15–60 min for DNS

After that, `shanecookeedits.com` serves the **new** Vercel site.

---

## What we are **not** doing

- Rebuilding the full Next.js site **inside** Squarespace (no hover autoplay, no `/work/[slug]` routing, heavy manual work)
- Replacing `*.squarespace.com` with Vercel (not possible without a custom domain)

---

## Checklist — where we are

- [x] Production build passes locally (`npm run build`)
- [x] `metadataBase` set for production URLs
- [ ] GitHub repo created
- [ ] Code pushed
- [ ] Vercel deploy live
- [ ] Squarespace bridge link OR custom domain connected

---

## Next message from you

Reply with **one** of:

1. **GitHub repo URL** — we push and you import to Vercel  
2. **“Deployed to Vercel”** + your `.vercel.app` URL — we wire Squarespace bridge copy  
3. **“I bought a domain”** — we do DNS step-by-step together
