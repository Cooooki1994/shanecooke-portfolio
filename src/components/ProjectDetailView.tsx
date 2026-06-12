import Link from "next/link";
import type { Project } from "@/data/projects";
import type { ProjectDetail } from "@/data/project-details";
import { getChannelLogos } from "@/data/channel-logos";
import { getPosterFitClass, getPosterLayoutClass } from "@/data/video-fit";
import { profile } from "@/data/projects";
import { Navigation } from "./Navigation";
import { ProjectTrailer } from "./ProjectTrailer";

function formatLabel(project: Project): string | null {
  switch (project.category) {
    case "true-crime":
      return "True Crime";
    case "history":
      return "History";
    case "film":
      return "Feature Film";
    case "short":
      return "Short Film";
    default:
      return null;
  }
}

type ProjectDetailViewProps = {
  project: Project;
  detail: ProjectDetail;
};

export function ProjectDetailView({ project, detail }: ProjectDetailViewProps) {
  const poster = project.bannerSrc ?? project.poster;
  const channelLogos = getChannelLogos(project);
  const format = formatLabel(project);
  const posterFit = getPosterFitClass(project.slug);
  const posterLayout = getPosterLayoutClass(project.slug);

  return (
    <>
      <Navigation solid />
      <main className="min-h-screen pt-20 pb-24">
        {/* Hero banner */}
        <div className="relative h-[38vh] min-h-[280px] max-h-[480px] w-full overflow-hidden bg-background">
          <img
            src={poster}
            alt=""
            className={`absolute ${posterLayout} ${posterFit}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/50" />
        </div>

        <div className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 lg:px-10">
          <Link
            href="/#work"
            className="btn-ghost mb-8 inline-flex items-center gap-2"
          >
            ← Back to work
          </Link>

          <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
            {/* Poster column */}
            <div className="hidden lg:block">
              <div className="sticky top-28 overflow-hidden rounded-2xl bg-surface ring-1 ring-accent/12">
                <div className="relative aspect-video w-full">
                  <img
                    src={poster}
                    alt={project.title}
                    className={`absolute ${posterLayout} ${posterFit}`}
                  />
                </div>
              </div>
            </div>

            {/* Main content */}
            <div>
              {channelLogos.length > 0 && (
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  {channelLogos.map((logo) => (
                    <div
                      key={logo}
                      className="rounded-full bg-surface/80 px-3 py-1.5 ring-1 ring-accent/10"
                    >
                      <img src={logo} alt="" className="h-5 w-auto max-w-[5rem] object-contain" />
                    </div>
                  ))}
                </div>
              )}

              {project.wip && (
                <p className="text-label mb-3 rounded-full border border-accent/25 bg-accent/8 px-3 py-1.5 text-accent">
                  Work in progress, releasing soon on History Hit SVOD
                </p>
              )}

              {project.award && !project.wip && (
                <p className="text-label mb-3 text-accent">
                  {project.award}
                </p>
              )}

              <h1 className="font-display-italic text-glow-title text-4xl text-foreground md:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="text-label mt-4 text-foreground/48">
                {project.year}
                {format && (
                  <>
                    <span className="mx-2 text-foreground/20">·</span>
                    {format}
                  </>
                )}
                <span className="mx-2 text-foreground/20">·</span>
                {project.client}
              </p>

              {/* Meta strip, IMDb-style */}
              <dl
                className={`mt-8 grid gap-x-8 gap-y-4 border-y border-accent/12 py-6 ${
                  format ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3"
                }`}
              >
                <div>
                  <dt className="text-meta">
                    Role
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-meta">
                    Year
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-meta">
                    Client
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">{project.client}</dd>
                </div>
                {format && (
                  <div>
                    <dt className="text-meta">
                      Format
                    </dt>
                    <dd className="mt-1 text-sm text-foreground">{format}</dd>
                  </div>
                )}
              </dl>

              {/* Trailer */}
              <section className="mt-10">
                <h2 className="text-eyebrow mb-4">
                  Trailer
                </h2>
                <ProjectTrailer project={project} />
              </section>

              {/* Synopsis */}
              <section className="mt-12">
                <h2 className="text-eyebrow mb-4">
                  Synopsis
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-foreground/75">
                  {detail.synopsis}
                </p>
                {detail.editorial && (
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/45">
                    {detail.editorial}
                  </p>
                )}
              </section>

              {/* Where to watch */}
              {detail.watch.length > 0 && (
                <section className="mt-12">
                  <h2 className="text-eyebrow mb-4">
                    Where to watch
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {detail.watch.map((link) =>
                      project.wip ? (
                        <span
                          key={link.url}
                          className="btn-outline cursor-default px-5 py-2.5 text-foreground/55"
                        >
                          {link.label}
                        </span>
                      ) : (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline px-5 py-2.5 text-foreground/75 hover:text-accent"
                        >
                          {link.label}
                          <span className="ml-2 text-foreground/25">↗</span>
                        </a>
                      ),
                    )}
                    {detail.imdbUrl && (
                      <a
                        href={detail.imdbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline border-[#f5c518]/35 px-5 py-2.5 text-[#f5c518] hover:border-[#f5c518]/65 hover:bg-[#f5c518]/10"
                      >
                        IMDb
                        <span className="ml-2 opacity-50">↗</span>
                      </a>
                    )}
                  </div>
                </section>
              )}

              {/* Production credits */}
              {detail.credits && detail.credits.length > 0 && (
                <section className="mt-12 border-t border-accent/12 pt-10">
                  <h2 className="text-eyebrow mb-6">Details</h2>
                  <dl className="grid gap-4 sm:grid-cols-2">
                    {detail.credits.map((row) => (
                      <div key={row.label}>
                        <dt className="text-meta">
                          {row.label}
                        </dt>
                        <dd className="mt-1 text-sm text-foreground/70">{row.value}</dd>
                      </div>
                    ))}
                    <div>
                      <dt className="text-meta">
                        Editor
                      </dt>
                      <dd className="mt-1 text-sm text-foreground/70">
                        {profile.name} {profile.credential}, {project.role}
                      </dd>
                    </div>
                  </dl>
                </section>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
