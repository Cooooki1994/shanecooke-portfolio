/** Hover clips that are native 9:16 — use blurred pillarbox preview (same as Vikings Arrival). */
export const portraitVideoSlugs = new Set([
  "icelandic-vikings-arrival",
  "icelandic-vikings-survival",
  "churchills-secret-war",
]);

/** Posters that must show in full (letterbox) — e.g. title on image edges. */
export const containPosterSlugs = new Set(["human-tide"]);

export function getPosterFitClass(slug: string): string {
  if (containPosterSlugs.has(slug)) return "object-contain";
  return "object-cover";
}

/** Position/size overrides for poster cards (absolute layer). */
export function getPosterLayoutClass(slug: string): string {
  if (containPosterSlugs.has(slug)) {
    return "inset-0 h-full w-full object-center";
  }
  return "inset-0 h-full w-full";
}

export function isPortraitVideo(slug: string, videoWidth?: number, videoHeight?: number) {
  if (portraitVideoSlugs.has(slug)) return true;
  if (videoWidth && videoHeight) return videoHeight > videoWidth;
  return false;
}
