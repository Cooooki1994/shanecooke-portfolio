/** Hover clips that are native 9:16 — use blurred pillarbox preview (same as Vikings Arrival). */
export const portraitVideoSlugs = new Set([
  "icelandic-vikings-arrival",
  "icelandic-vikings-survival",
  "churchills-secret-war",
]);

export function getPosterFitClass(_slug: string): string {
  return "object-cover";
}

/** Position/size overrides for poster cards (absolute layer). */
export function getPosterLayoutClass(_slug: string): string {
  return "inset-0 h-full w-full";
}

export function isPortraitVideo(slug: string, videoWidth?: number, videoHeight?: number) {
  if (portraitVideoSlugs.has(slug)) return true;
  if (videoWidth && videoHeight) return videoHeight > videoWidth;
  return false;
}
