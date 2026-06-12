export type WatchLink = {
  label: string;
  url: string;
};

export type ProjectDetail = {
  synopsis: string;
  editorial?: string;
  imdbUrl?: string;
  watch: WatchLink[];
  credits?: { label: string; value: string }[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  "my-wife-my-abuser": {
    synopsis:
      "A sensitive current affairs documentary examining coercive control through secretly recorded footage. The film balances legal complexity, survivor testimony, and broadcast clarity for a primetime Channel 5 audience, later reaching international audiences on Netflix.",
    editorial:
      "Lead editor across long-form assembly and multiple timelines. Solo editor nomination, Best Edited Current Affairs, BFE Cut Above Awards 2025.",
    imdbUrl: "https://www.imdb.com/title/tt28166722/",
    watch: [
      { label: "Netflix", url: "https://www.netflix.com/title/81771748" },
      { label: "Channel 5", url: "https://www.channel5.com/" },
      { label: "Trailer", url: "https://www.youtube.com/watch?v=3a9YIyQQBPY" },
    ],
    credits: [
      { label: "Broadcaster", value: "Channel 5 / Netflix" },
      { label: "Format", value: "Documentary · 90 min" },
    ],
  },
  "willem-frieda": {
    synopsis:
      "Stephen Fry tells the story of Willem Arondeus and Frieda Belinfante, gay artists who forged papers and led one of the Dutch resistance's most daring acts of sabotage during the Nazi occupation.",
    editorial:
      "Lead editor on an archival-led narrative balancing historical scope with intimate character arcs, testimony, reconstruction, and period material woven into a single through-line.",
    imdbUrl: "https://www.imdb.com/title/tt21065126/",
    watch: [
      { label: "Channel 4", url: "https://www.channel4.com/" },
      { label: "Trailer", url: "https://www.youtube.com/watch?v=IfxHSX2Az18" },
    ],
    credits: [
      { label: "Broadcaster", value: "Channel 4" },
      { label: "Production", value: "Atticus Film & Television" },
    ],
  },
  "who-killed-billie-jo": {
    synopsis:
      "A long-form true-crime investigation into the unsolved murder of Billie-Jo Jenkins, structured for sustained tension across two hours of broadcast narrative.",
    editorial:
      "Lead editor. Meticulous timeline construction and tonal restraint across interview, archive, and reconstruction.",
    watch: [
      { label: "Channel 5", url: "https://www.channel5.com/" },
      { label: "Trailer", url: "https://vimeo.com/678141708" },
    ],
    credits: [{ label: "Broadcaster", value: "Channel 5" }],
  },
  "murder-of-louise-kam": {
    synopsis:
      "True-crime documentary following the investigation into the murder of Louise Kam, precise pacing across police procedure, family testimony, and case revelation.",
    editorial:
      "Lead editor on a Channel 5 investigation feature. Responsible for clarity and momentum through dense factual material, interview structure, and case progression.",
    watch: [{ label: "Channel 5", url: "https://www.channel5.com/" }],
    credits: [{ label: "Broadcaster", value: "Channel 5" }],
  },
  "babes-in-the-woods": {
    synopsis:
      "Sir Trevor McDonald presents the remarkable 32-year investigation into the murders of Nicola Fellows and Karen Hadaway in Brighton, from the original 1986 case to Russell Bishop's eventual conviction.",
    editorial:
      "Assistant editor on this ITV crime & punishment documentary. Early-career broadcast credit, supporting long-form assembly on a landmark cold-case investigation.",
    watch: [
      { label: "ITV", url: "https://www.itv.com/" },
      { label: "Trailer", url: "https://www.youtube.com/watch?v=gKPLOZdgPfE" },
    ],
    credits: [{ label: "Broadcaster", value: "ITV" }],
  },
  "the-legend-of-arthur": {
    synopsis:
      "A History Hit Original TV documentary tracing the origins of the Arthurian legend, from medieval manuscripts and Plantagenet politics to the stories that shaped a king.",
    editorial:
      "Lead editor on Episode 1, currently in post. Manuscript animation, presenter-led history, and archive storytelling for History Hit SVOD.",
    watch: [
      {
        label: "Coming soon, History Hit",
        url: "https://access.historyhit.com",
      },
    ],
    credits: [
      { label: "Platform", value: "History Hit SVOD" },
      { label: "Format", value: "TV Documentary · Episode 1" },
      { label: "Status", value: "Work in progress" },
    ],
  },
  "icelandic-vikings-arrival": {
    synopsis:
      "Dan Snow explores how Norse settlers reached Iceland, turf homes, saga landscapes, and the story of arrival on the edge of the known world.",
    editorial:
      "Lead editor on a History Hit Original. Location-led history with presenter-driven narrative, balancing landscape, archive, and on-camera storytelling.",
    watch: [
      {
        label: "History Hit",
        url: "https://access.historyhit.com/videos/icelandic-vikings-arrival",
      },
    ],
    credits: [{ label: "Platform", value: "History Hit SVOD" }],
  },
  "icelandic-vikings-survival": {
    synopsis:
      "How Viking settlers endured Iceland's frontier, sagas, parliament at Þingvellir, and the society they built in an unforgiving landscape.",
    editorial:
      "Lead editor on the companion film in the Icelandic Vikings series. Continuity of tone, structure, and pacing across episodes.",
    watch: [
      {
        label: "History Hit",
        url: "https://access.historyhit.com/icelandic-vikings/season:1/videos/icelandic-vikings-survival",
      },
    ],
    credits: [{ label: "Platform", value: "History Hit SVOD" }],
  },
  "churchills-secret-war": {
    synopsis:
      "Churchill's covert resistance networks during the Second World War, the secret armies and unconventional operations that operated far from the headlines.",
    editorial:
      "Lead editor on an archive-heavy WWII feature for History Hit. Strategic through-line across extensive period material, expert testimony, and reconstruction.",
    watch: [
      {
        label: "History Hit",
        url: "https://access.historyhit.com/videos/churchills-secret-army",
      },
    ],
    credits: [{ label: "Platform", value: "History Hit SVOD" }],
  },
  "rise-of-caesar": {
    synopsis:
      "Julius Caesar's path to power, Rubicon, alliances, civil war, and the Ides of March. Part of History Hit's Rise Of documentary strand.",
    editorial:
      "Lead editor on a Roman history feature. Balancing political complexity with character-driven momentum across a dense historical timeline.",
    watch: [
      { label: "History Hit", url: "https://access.historyhit.com/videos/rise-of-caesar" },
    ],
    credits: [{ label: "Platform", value: "History Hit SVOD" }],
  },
  "rise-of-augustus": {
    synopsis:
      "Octavian's transformation from civil-war victor to Rome's first emperor, the making of Augustus and the world he left behind.",
    editorial:
      "Lead editor on the Rise Of companion film. Epic scope with intimate political detail, continuity of editorial approach across the strand.",
    watch: [
      { label: "History Hit", url: "https://access.historyhit.com/videos/rise-of-augustus" },
    ],
    credits: [{ label: "Platform", value: "History Hit SVOD" }],
  },
  "human-tide": {
    synopsis:
      "Feature-length documentary with cinematic narrative scope, global human stories told through long-form editorial structure.",
    editorial:
      "Lead editor on a feature documentary. Assembly and polish across international material ahead of festival release.",
    watch: [
      { label: "Trailer", url: "https://www.youtube.com/watch?v=zV4xTVH90-8" },
    ],
    credits: [{ label: "Format", value: "Feature documentary" }],
  },
  dandelion: {
    synopsis:
      "Amateur boxer Liam reflects on love and loss during the pandemic, a moving LGBTQIA+ short from Benjamin Colbourne.",
    editorial:
      "Editor on a short film. Performance-led pacing and visual rhythm across a tight dramatic structure.",
    watch: [
      {
        label: "Stills, Peter Maughan",
        url: "https://www.instagram.com/p/DBvxi9CNpWI/?img_index=3",
      },
    ],
    credits: [
      { label: "Format", value: "Short film" },
      { label: "Director", value: "Benjamin Colbourne" },
      { label: "Colourist", value: "Peter Maughan" },
    ],
  },
  "britains-lost-masterpieces": {
    synopsis:
      "BBC arts documentary series uncovering lost masterpieces in Britain's regional collections.",
    editorial:
      "Camera assistant on location for BBC Four. Early broadcast credit, supporting production workflow on a long-running factual series.",
    watch: [
      { label: "BBC iPlayer", url: "https://www.bbc.co.uk/iplayer" },
      { label: "Trailer", url: "https://www.youtube.com/watch?v=BY5qbr5g7Io" },
    ],
    credits: [{ label: "Broadcaster", value: "BBC Four" }],
  },
  "to-olivia": {
    synopsis:
      "Feature film telling the story of Roald Dahl and Patricia Neal after the death of their daughter Olivia, a period drama starring Hugh Bonneville and Keeley Hawes.",
    editorial:
      "On-set DIT and data workflow for this Sky Cinema feature. Responsible for rushes integrity, on-set colour pipeline, and secure data handover, foundation before moving into offline editing.",
    imdbUrl: "https://www.imdb.com/title/tt11649926/",
    watch: [
      { label: "Sky", url: "https://www.sky.com/watch/sky-cinema" },
      { label: "Trailer", url: "https://www.youtube.com/watch?v=IJm_lDh8Sog" },
    ],
    credits: [
      { label: "Distributor", value: "Sky Cinema" },
      { label: "Production", value: "Sky / Invented Life" },
    ],
  },
  "history-hit-youtube": {
    synopsis:
      "Ongoing editorial work across History Hit's YouTube channel, long-form history documentaries, presenter-led features, and archive storytelling for a global audience of nearly two million subscribers.",
    editorial:
      "Lead editor across multiple History Hit documentary strands, Vikings, Rome, WWII, and presenter-led history. Digital long-form with broadcast-standard structure and pacing.",
    watch: [
      { label: "YouTube", url: "https://www.youtube.com/@HistoryHit" },
      { label: "History Hit", url: "https://access.historyhit.com" },
    ],
    credits: [{ label: "Channel", value: "@HistoryHit" }],
  },
  "astrum-earth": {
    synopsis:
      "Earth science documentaries for Astrum Earth, climate, oceans, chemistry, and environmental storytelling for a growing YouTube audience.",
    editorial:
      "Lead editor on science-led explainers. Clear narrative structure, motion graphics integration, and pacing suited to digital long-form delivery.",
    watch: [{ label: "YouTube", url: "https://www.youtube.com/@AstrumEarth" }],
    credits: [{ label: "Channel", value: "Astrum Earth" }],
  },
  "infrastructure-wars": {
    synopsis:
      "Episode 1 of Infrastructure Wars, a long-form YouTube documentary following Copenhagen Atomics and the shipping-container datacentre built to power tens of thousands of AI chips.",
    editorial:
      "Editor on a presenter-led tech documentary for Siraj Raval's channel, balancing interview blocks, industrial B-roll, and motion graphics across a dense digital long-form runtime.",
    watch: [
      {
        label: "YouTube",
        url: "https://www.youtube.com/watch?v=wANPRZejSfg",
      },
    ],
    credits: [
      { label: "Series", value: "Infrastructure Wars · Episode 1" },
      { label: "Channel", value: "Siraj Raval" },
    ],
  },
};

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails[slug];
}
