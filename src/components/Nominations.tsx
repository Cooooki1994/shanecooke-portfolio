import Link from "next/link";
import { featuredNomination } from "@/data/nominations";

const creditLabels = {
  solo: "Solo editor",
  editor: "Editor",
  production: "Production",
} as const;

export function Nominations() {
  if (!featuredNomination) return null;

  const { category, organisation, year, project, projectSlug, type, credit } =
    featuredNomination;

  const inner = (
    <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3 sm:gap-y-1">
      <span className="text-eyebrow shrink-0">{organisation}</span>
      <span className="text-label text-accent">
        {type} · {year} · {creditLabels[credit]}
      </span>
      <span className="font-display-italic text-glow-title text-base text-foreground md:text-lg">
        {category}
        <span className="text-foreground/35">, </span>
        <em>{project}</em>
      </span>
    </div>
  );

  return (
    <section
      id="nominations"
      className="border-y border-accent/12 bg-background py-3.5 md:py-4"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {projectSlug ? (
          <Link
            href={`/work/${projectSlug}`}
            className="block transition-opacity hover:opacity-85"
          >
            {inner}
          </Link>
        ) : (
          inner
        )}
      </div>
    </section>
  );
}
