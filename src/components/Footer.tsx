import { profile } from "@/data/projects";

export function Footer() {
  return (
    <footer className="border-t border-accent/10 bg-background py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left lg:px-10">
        <p className="text-label text-foreground/30">
          © {new Date().getFullYear()} {profile.name} {profile.credential}
        </p>
        <p className="text-label text-foreground/25">
          Documentary &amp; Factual Editor · {profile.location}
        </p>
      </div>
    </footer>
  );
}
