import type { Project } from "./projects";

/** HH SVOD documentary cards — no broadcaster badge on thumbnail. */
export const hhOriginalSlugs = new Set([
  "icelandic-vikings-arrival",
  "icelandic-vikings-survival",
  "churchills-secret-war",
  "rise-of-caesar",
  "rise-of-augustus",
]);

const logos = {
  channel5: "/images/logos/channel-5.png",
  channel4: "/images/logos/channel-4.png",
  itv: "/images/logos/itv.png",
  bbc: "/images/logos/bbc.png",
  netflix: "/images/logos/netflix.png",
  sky: "/images/logos/sky.png",
  historyHit: "/images/history-hit-channel-logo.png",
} as const;

const bySlug: Record<string, string | string[]> = {
  "my-wife-my-abuser": [logos.channel5, logos.netflix],
  "to-olivia": logos.sky,
  "history-hit-youtube": logos.historyHit,
  "astrum-earth": "/images/astrum-earth-logo.png",
  "infrastructure-wars": "/images/siraj-raval-logo.png",
};

const byClient: Record<string, string> = {
  "Channel 5": logos.channel5,
  "Channel 4": logos.channel4,
  ITV: logos.itv,
  BBC: logos.bbc,
  "Astrum Earth · YouTube": "/images/astrum-earth-logo.png",
  "Siraj Raval · YouTube": "/images/siraj-raval-logo.png",
};

export function getChannelLogos(project: Project): string[] {
  if (hhOriginalSlugs.has(project.slug)) return [];

  if (project.logoSrc) return [project.logoSrc];

  const slugEntry = bySlug[project.slug];
  if (slugEntry) {
    return typeof slugEntry === "string" ? [slugEntry] : [...slugEntry];
  }

  const clientLogo = byClient[project.client];
  return clientLogo ? [clientLogo] : [];
}
