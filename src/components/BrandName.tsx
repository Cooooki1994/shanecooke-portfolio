import { profile } from "@/data/projects";

type BrandNameProps = {
  size?: "hero" | "nav" | "inline";
  className?: string;
};

export function BrandName({ size = "inline", className = "" }: BrandNameProps) {
  const nameClass =
    size === "hero"
      ? "font-display-italic text-glow-hero text-6xl leading-[0.95] md:text-8xl lg:text-[6.5rem]"
      : size === "nav"
        ? "font-display-italic text-glow-title text-base leading-none md:text-lg"
        : "font-display-italic text-glow-title text-base leading-none";

  const postnomClass =
    size === "hero" ? "postnom-hero" : size === "nav" ? "postnom-nav" : "postnom";

  return (
    <span className={`${nameClass} ${className}`.trim()}>
      {profile.name}
      <span className={postnomClass}> {profile.credential}</span>
    </span>
  );
}
