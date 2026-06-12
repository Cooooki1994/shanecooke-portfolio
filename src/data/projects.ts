export type ProjectCategory =
  | "documentary"
  | "true-crime"
  | "history"
  | "film"
  | "short";

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  category: ProjectCategory;
  poster: string;
  bannerSrc?: string;
  logoSrc?: string;
  externalUrl?: string;
  vimeoId?: string;
  youtubeId?: string;
  videoSrc?: string;
  featured?: boolean;
  award?: string;
  youtubeChannel?: boolean;
  wip?: boolean;
  description: string;
};

export const youtubeChannelSlugs = [
  "history-hit-youtube",
  "astrum-earth",
  "infrastructure-wars",
] as const;

export const profile = {
  name: "Shane Cooke",
  credential: "BFE",
  tagline: "Documentary & factual editor",
  heroLead:
    "Passionate about crafting films that move people, shaping interviews, archive and raw footage into stories with feeling, pace and purpose.",
  aboutHeadline: {
    italic: "Documentary & factual",
    caps: "editor",
    label: "broadcast · youtube · podcast · creator long-form",
  },
  location: "London",
  email: "shanealexcooke94@gmail.com",
  phone: "07894 412594",
  linkedin: "https://www.linkedin.com/in/shane-cooke-657852212",
  imdb: "https://www.imdb.com/name/nm10567555/",
  portfolio: "https://www.shanecookedits.com/",
  bio: `Shane Cooke is a London-based freelance documentary and factual editor working across broadcast, YouTube, podcasts and creator-led long-form.`,
  extendedBio: `His work is strongest where there is a real story to shape, interviews, archive, scripts, voiceover and raw material that needs turning into a clear, engaging film. Not just assembling shots: finding structure, pacing, emotional rhythm and the visual logic of the piece. He edited My Wife, My Abuser, nominated for a British Film Editors award, and continues across documentary, history, science, investigations and digital-first factual.`,
  approach: `Working with the times, modern editing, colour grading, and 2D and 3D animation across Premiere Pro, DaVinci Resolve, After Effects and Blender. New tools where they help; story, tone and structure always human-led.`,
  skills: [
    "Documentary & factual editing",
    "YouTube long-form",
    "Interview & A-roll cutting",
    "Archive-led sequences",
    "Script-to-picture",
    "Colour grading",
    "2D & 3D animation",
    "Multi-camera podcast",
    "Story pacing & retention",
    "Trailer & cutdowns",
  ] as const,
  tools: "Premiere Pro · DaVinci Resolve · After Effects · Blender",
  toolsFull:
    "Adobe Premiere Pro · DaVinci Resolve · After Effects · Blender · Photoshop · Illustrator",
  specialisms:
    "History · Science · Archive · Investigations · Human stories · YouTube",
  platforms: "Broadcast · YouTube · Podcast · Creator long-form",
  clients: "Netflix · Channel 5 · Channel 4 · ITV · BBC · History Hit",
  availability:
    "Available for freelance editorial on documentary, factual, YouTube, podcast and creator long-form, broadcast hours, digital series, archive-led features and cutdowns. London-based; on-site or remote.",
} as const;

export const projects: Project[] = [
  {
    slug: "my-wife-my-abuser",
    title: "My Wife, My Abuser",
    client: "Channel 5 / Netflix",
    year: "2023",
    role: "Editor",
    category: "documentary",
    poster:
      "https://images.squarespace-cdn.com/content/v1/61119a51fee1111102a9dd9a/3822559f-f721-4bfa-93e4-e4352347aa14/Screenshot+2025-09-01+at+13-27-40+My+Wife+My+Abuser+The+Secret+Footage+%282024%29.png",
    youtubeId: "3a9YIyQQBPY",
    externalUrl: "https://www.youtube.com/watch?v=3a9YIyQQBPY",
    featured: true,
    award: "BFE Nominee · Best Edited Current Affairs · Solo editor",
    description:
      "Lead editor on a sensitive current-affairs film, legal complexity, survivor testimony, and primetime broadcast clarity.",
  },
  {
    slug: "willem-frieda",
    title: "Willem & Frieda",
    client: "Channel 4",
    year: "2023",
    role: "Editor",
    category: "documentary",
    poster: "/images/willem-frieda-poster.jpg",
    youtubeId: "IfxHSX2Az18",
    externalUrl: "https://www.youtube.com/watch?v=IfxHSX2Az18",
    featured: true,
    description:
      "Lead editor weaving archival footage and testimony into an intimate resistance story for Channel 4.",
  },
  {
    slug: "who-killed-billie-jo",
    title: "Who Killed Billie Jo?",
    client: "Channel 5",
    year: "2021",
    role: "Editor",
    category: "true-crime",
    poster:
      "https://images.squarespace-cdn.com/content/v1/61119a51fee1111102a9dd9a/1678552972597-TVJH1A6Q7TBLZ8MO1RVI/WKBJ10080.png",
    vimeoId: "678141708",
    externalUrl: "https://vimeo.com/678141708",
    featured: true,
    description:
      "Lead editor on a two-hour true-crime investigation, timeline construction, tone, and sustained tension.",
  },
  {
    slug: "murder-of-louise-kam",
    title: "Body in the Bin: The Murder of Louise Kam",
    client: "Channel 5",
    year: "2025",
    role: "Editor",
    category: "true-crime",
    poster:
      "https://images.squarespace-cdn.com/content/v1/61119a51fee1111102a9dd9a/767a9ea4-347b-41f8-a7fa-d92dd6d84a8f/BITB.jpg",
    featured: true,
    description:
      "Lead editor on a Channel 5 investigation, momentum and clarity through dense police and family testimony.",
  },
  {
    slug: "babes-in-the-woods",
    title: "Babes in the Woods",
    client: "ITV",
    year: "2018",
    role: "Assistant Editor",
    category: "true-crime",
    poster: "/images/babes-in-the-woods-poster.jpg",
    videoSrc: "/videos/babes-in-the-woods.mp4",
    externalUrl: "https://www.youtube.com/watch?v=gKPLOZdgPfE",
    description:
      "Assistant editor on a landmark ITV cold-case documentary, early broadcast credits.",
  },
  {
    slug: "human-tide",
    title: "Human Tide",
    client: "Feature Documentary",
    year: "2025",
    role: "Editor",
    category: "documentary",
    poster: "/images/human-tide-poster.jpg",
    bannerSrc: "/images/human-tide-poster.jpg",
    youtubeId: "zV4xTVH90-8",
    externalUrl: "https://www.youtube.com/watch?v=zV4xTVH90-8",
    featured: true,
    description:
      "Lead editor on a feature-length documentary, long-form assembly for international festival release.",
  },
  {
    slug: "icelandic-vikings-arrival",
    title: "Icelandic Vikings: Arrival",
    client: "History Hit",
    year: "2025",
    role: "Editor",
    category: "history",
    poster: "/images/history-hit/icelandic-vikings-arrival.jpg",
    videoSrc: "/videos/hh-originals/icelandic-vikings-arrival.mp4",
    externalUrl: "https://access.historyhit.com/videos/icelandic-vikings-arrival",
    featured: true,
    description:
      "Lead editor on a History Hit Original, location-led Viking history with presenter-driven narrative.",
  },
  {
    slug: "icelandic-vikings-survival",
    title: "Icelandic Vikings: Survival",
    client: "History Hit",
    year: "2026",
    role: "Editor",
    category: "history",
    poster: "/images/history-hit/icelandic-vikings-survival.jpg",
    videoSrc: "/videos/hh-originals/icelandic-vikings-survival.mp4",
    externalUrl:
      "https://access.historyhit.com/icelandic-vikings/season:1/videos/icelandic-vikings-survival",
    description:
      "Lead editor on the companion Iceland Vikings film, saga-led history across a harsh frontier landscape.",
  },
  {
    slug: "churchills-secret-war",
    title: "Churchill's Secret War",
    client: "History Hit",
    year: "2026",
    role: "Editor",
    category: "history",
    poster: "/images/history-hit/churchills-secret-war.jpg",
    videoSrc: "/videos/hh-originals/churchills-secret-war.mp4",
    externalUrl: "https://access.historyhit.com/videos/churchills-secret-army",
    featured: true,
    description:
      "Lead editor on an archive-heavy WWII feature for History Hit, covert operations and strategic through-line.",
  },
  {
    slug: "rise-of-caesar",
    title: "Rise of Caesar",
    client: "History Hit",
    year: "2026",
    role: "Editor",
    category: "history",
    poster: "/images/history-hit/rise-of-caesar.jpg",
    videoSrc: "/videos/hh-originals/rise-of-augustus.mp4",
    externalUrl: "https://access.historyhit.com/videos/rise-of-caesar",
    description:
      "Lead editor in History Hit's Rise Of strand, political complexity with character-driven momentum.",
  },
  {
    slug: "rise-of-augustus",
    title: "Rise of Augustus",
    client: "History Hit",
    year: "2026",
    role: "Editor",
    category: "history",
    poster: "/images/history-hit/rise-of-augustus.jpg",
    videoSrc: "/videos/hh-originals/rise-of-augustus.mp4",
    externalUrl: "https://access.historyhit.com/videos/rise-of-augustus",
    description:
      "Lead editor on the Rise Of companion, epic Roman history with intimate political detail.",
  },
  {
    slug: "the-legend-of-arthur",
    title: "The Legend of Arthur",
    client: "History Hit",
    year: "2026",
    role: "Editor",
    category: "history",
    poster: "/images/history-hit/king-arthur-title-card.jpg",
    bannerSrc: "/images/history-hit/king-arthur-title-card.jpg",
    logoSrc: "/images/history-hit-channel-logo.png",
    externalUrl: "https://access.historyhit.com",
    featured: true,
    wip: true,
    award: "WIP · Coming soon on History Hit",
    description:
      "Lead editor on a History Hit Original TV documentary, manuscript-led Arthurian history, currently in post.",
  },
  {
    slug: "dandelion",
    title: "Dandelion",
    client: "Short Film",
    year: "2023",
    role: "Editor",
    category: "short",
    poster: "/images/dandelion-poster.jpg",
    bannerSrc: "/images/dandelion-poster.jpg",
    externalUrl: "https://www.instagram.com/p/DBvxi9CNpWI/?img_index=3",
    description:
      "Editor on a short-form dramatic narrative, performance-led pacing in a compact runtime.",
  },
  {
    slug: "britains-lost-masterpieces",
    title: "Britain's Lost Masterpieces",
    client: "BBC",
    year: "2020",
    role: "Camera Assistant",
    category: "history",
    poster: "/images/britains-lost-masterpieces.jpg",
    youtubeId: "BY5qbr5g7Io",
    externalUrl: "https://www.youtube.com/watch?v=BY5qbr5g7Io",
    description:
      "Camera assistant on BBC Four arts documentary, foundation in broadcast production workflow.",
  },
  {
    slug: "to-olivia",
    title: "To Olivia",
    client: "Feature Film",
    year: "2019",
    role: "DIT",
    category: "film",
    poster: "/images/to-olivia.jpg",
    youtubeId: "IJm_lDh8Sog",
    externalUrl: "https://www.youtube.com/watch?v=IJm_lDh8Sog",
    description:
      "On-set DIT and data workflow on a Sky Cinema feature, rushes integrity before offline editing.",
  },
  {
    slug: "history-hit-youtube",
    title: "History Hit YouTube",
    client: "YouTube",
    year: "2023 to 2026",
    role: "Editor",
    category: "history",
    poster:
      "https://images.squarespace-cdn.com/content/v1/61119a51fee1111102a9dd9a/1678553328893-KXBB5FPHMYJXXLI37OMM/HH+PNG.png",
    externalUrl: "https://www.youtube.com/@HistoryHit",
    youtubeChannel: true,
    featured: true,
    description:
      "Lead editor across History Hit's YouTube catalogue, long-form history documentary for a global audience.",
  },
  {
    slug: "astrum-earth",
    title: "Astrum Earth",
    client: "Astrum Earth · YouTube",
    year: "2026",
    role: "Editor",
    category: "short",
    poster: "/images/astrum-earth-banner.jpg",
    bannerSrc: "/images/astrum-earth-banner.jpg",
    logoSrc: "/images/astrum-earth-logo.png",
    externalUrl: "https://www.youtube.com/@AstrumEarth",
    youtubeChannel: true,
    featured: true,
    description:
      "Lead editor on earth-science explainers, clear structure, graphics integration, and digital delivery.",
  },
  {
    slug: "infrastructure-wars",
    title: "Infrastructure Wars",
    client: "Siraj Raval · YouTube",
    year: "2025",
    role: "Editor",
    category: "short",
    poster: "/images/infrastructure-wars-title-card.jpg",
    bannerSrc: "/images/infrastructure-wars-title-card.jpg",
    logoSrc: "/images/siraj-raval-logo.png",
    youtubeId: "wANPRZejSfg",
    externalUrl: "https://www.youtube.com/watch?v=wANPRZejSfg",
    featured: true,
    description:
      "Episode 1, long-form tech documentary on Copenhagen Atomics and the race to power AI at scale.",
  },
];

/** Self-hosted hero reel — muted MP4s, no embed player chrome. Run scripts/fetch-hero-clips.sh */
export const heroLocalVideos = [
  "/videos/hero/my-wife-my-abuser.mp4",
  "/videos/hero/willem-frieda.mp4",
  "/videos/hero/who-killed-billie-jo.mp4",
  "/videos/hero/babes-in-the-woods.mp4",
  "/videos/hero/human-tide.mp4",
] as const;

/** Fallback if local clips missing — YouTube/Vimeo embeds (may show player UI). */
export const heroMedia = [
  { type: "youtube", id: "3a9YIyQQBPY" },
  { type: "youtube", id: "IfxHSX2Az18" },
  { type: "vimeo", id: "678141708" },
  { type: "youtube", id: "gKPLOZdgPfE" },
  { type: "youtube", id: "zV4xTVH90-8" },
] as const;

export const featuredProjects = projects.filter((p) => p.featured);

export const televisionCredits = [
  { title: "My Wife, My Abuser", client: "Channel 5 / Netflix", role: "Editor", year: "2023" },
  { title: "The Murder of Louise Kam", client: "Channel 5", role: "Editor", year: "2025" },
  { title: "Willem and Frieda", client: "Channel 4", role: "Editor", year: "2023" },
  { title: "Who Killed Billie-Jo", client: "Channel 5", role: "Editor", year: "2021" },
  { title: "Babes in the Woods", client: "ITV", role: "Assistant Editor", year: "2018" },
  { title: "Britain's Lost Masterpieces", client: "BBC", role: "Camera Assistant", year: "2020" },
  { title: "Icelandic Vikings: Survival", client: "History Hit", role: "Editor", year: "2026" },
  { title: "Icelandic Vikings: Arrival", client: "History Hit", role: "Editor", year: "2025" },
  { title: "Churchill's Secret War", client: "History Hit", role: "Editor", year: "2026" },
  { title: "Rise of Augustus", client: "History Hit", role: "Editor", year: "2026" },
  { title: "Rise of Caesar", client: "History Hit", role: "Editor", year: "2026" },
];
