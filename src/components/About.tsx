import { profile } from "@/data/projects";

export function About() {
  return (
    <section id="about" className="border-t border-accent/10 bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-eyebrow mb-4">About</p>
            <h2 className="text-foreground">
              <span className="font-display-italic text-glow-title block text-4xl md:text-5xl lg:text-[3.25rem]">
                {profile.aboutHeadline.italic}
              </span>
              <span className="font-display-caps text-glow-gold mt-2 block text-2xl text-accent/90 md:text-3xl">
                {profile.aboutHeadline.caps}
              </span>
              <span className="text-label mt-5 block text-foreground/45">
                {profile.aboutHeadline.label}
              </span>
            </h2>
            <p className="text-label mt-6 max-w-md text-foreground/42">
              {profile.workIntro}
            </p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-foreground/70">
            <p>{profile.bio}</p>
            <p>{profile.extendedBio}</p>
            <p className="font-serif text-foreground/58">{profile.approach}</p>

            <div className="grid grid-cols-2 gap-6 border-t border-accent/12 pt-8">
              <div>
                <p className="text-meta">Location</p>
                <p className="mt-2 text-sm text-foreground">{profile.location}</p>
              </div>
              <div>
                <p className="text-meta">Platforms</p>
                <p className="mt-2 text-sm text-foreground">{profile.platforms}</p>
              </div>
              <div>
                <p className="text-meta">Specialisms</p>
                <p className="mt-2 text-sm text-foreground">
                  {profile.specialisms}
                </p>
              </div>
              <div>
                <p className="text-meta">Clients</p>
                <p className="mt-2 text-sm text-foreground">
                  {profile.clients}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-meta">Software</p>
                <p className="mt-2 text-sm text-foreground">{profile.toolsFull}</p>
              </div>
            </div>

            <p className="font-serif border-t border-accent/12 pt-8 text-sm leading-relaxed text-foreground/58">
              {profile.availability}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="btn-outline"
              >
                {profile.phone}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label text-foreground/45 transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href={profile.imdb}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label text-foreground/45 transition-colors hover:text-accent"
              >
                IMDb
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
