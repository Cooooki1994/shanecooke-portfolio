/** Canonical production URL — set NEXT_PUBLIC_SITE_URL in Vercel if different. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shanecookedits.com";

export const siteBrand = "Shane Cooke Edits";

export const siteTitle =
  "Shane Cooke Edits | Documentary & Factual Editor, BFE";

export const siteDescription =
  "Shane Cooke Edits — London freelance documentary and factual editor. BFE-nominated credits include My Wife My Abuser (Netflix), Willem & Frieda (Channel 4), and History Hit. Broadcast, digital and long-form.";

export const siteKeywords = [
  "Shane Cooke Edits",
  "shanecookedits",
  "Shane Cooke editor",
  "documentary editor London",
  "factual editor UK",
  "freelance documentary editor",
  "British Film Editors",
  "BFE editor",
  "video editor broadcast",
] as const;
