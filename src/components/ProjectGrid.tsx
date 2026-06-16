"use client";

import { useMemo, useState } from "react";
import {
  projects,
  youtubeChannelSlugs,
  type Project,
} from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

type WorkFilter = "all" | "true-crime" | "history" | "features";

const filters: { label: string; value: WorkFilter }[] = [
  { label: "All", value: "all" },
  { label: "True Crime", value: "true-crime" },
  { label: "History", value: "history" },
  { label: "Features", value: "features" },
];

const youtubeSlugSet = new Set<string>(youtubeChannelSlugs);

const featureSlugs = new Set(["human-tide", "to-olivia", "dandelion"]);

const gridClass =
  "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5";

function partitionProjects(list: Project[]) {
  const main = list.filter((p) => !youtubeSlugSet.has(p.slug));
  const youtube = youtubeChannelSlugs
    .map((slug) => list.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p));
  return { main, youtube };
}

function matchesFilter(project: Project, filter: WorkFilter): boolean {
  if (filter === "all") return true;
  if (filter === "true-crime") return project.category === "true-crime";
  if (filter === "history") return project.category === "history";
  if (filter === "features") {
    return (
      project.category === "film" ||
      project.category === "short" ||
      featureSlugs.has(project.slug)
    );
  }
  return true;
}

export function ProjectGrid() {
  const [filter, setFilter] = useState<WorkFilter>("all");

  const filtered = useMemo(
    () => projects.filter((p) => matchesFilter(p, filter)),
    [filter],
  );

  const { main, youtube } = useMemo(
    () => partitionProjects(filtered),
    [filtered],
  );

  const showYoutube =
    youtube.length > 0 &&
    (filter === "all" || filter === "history" || filter === "features");

  return (
    <section id="work" className="relative bg-background py-10 md:py-14">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mb-6">
          <div>
            <p className="text-eyebrow mb-4">Selected work</p>
            <h2 className="max-w-xl text-foreground">
              <span className="font-display-italic text-glow-title block text-[2.55rem] leading-[1.02] md:text-[3.05rem]">
                Broadcast,
              </span>
              <span className="font-display-italic mt-1 block text-[2.2rem] leading-[1.06] text-foreground/76 md:text-[2.65rem]">
                streaming{" "}
                <span className="text-accent/80">&amp;</span> digital
              </span>
            </h2>
          </div>
        </div>

        <div className="filter-bar mb-6">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              aria-pressed={filter === f.value}
              className={filter === f.value ? "btn-filter-active" : "btn-filter"}
            >
              {f.label}
            </button>
          ))}
        </div>

        {main.length > 0 && (
          <div className={gridClass}>
            {main.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        )}

        {showYoutube && (
          <div className={main.length > 0 ? "mt-8" : ""}>
            <div className="mb-4 flex items-center gap-3 border-t border-accent/10 pt-5">
              <p className="text-eyebrow shrink-0">YouTube</p>
              <span className="h-px flex-1 bg-accent/10" />
            </div>
            <div className={gridClass}>
              {youtube.map((project, i) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={main.length + i}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
