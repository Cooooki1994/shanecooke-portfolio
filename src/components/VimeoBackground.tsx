"use client";

import { useEffect, useState } from "react";

type VimeoBackgroundProps = {
  vimeoId: string;
  className?: string;
  opacity?: number;
  muted?: boolean;
  background?: boolean;
  chromeless?: boolean;
};

export function VimeoBackground({
  vimeoId,
  className = "",
  opacity = 1,
  muted = true,
  background = true,
  chromeless = false,
}: VimeoBackgroundProps) {
  const base =
    "autoplay=1&loop=1&controls=0&title=0&byline=0&portrait=0&badge=0&pip=0&playsinline=1&dnt=1&transparent=0";
  const src = background
    ? `https://player.vimeo.com/video/${vimeoId}?background=1&muted=1&${base}`
    : `https://player.vimeo.com/video/${vimeoId}?muted=${muted ? 1 : 0}&${base}`;

  const frameClass = chromeless
    ? "absolute left-1/2 top-[52%] h-[170%] w-[170%] max-w-none -translate-x-1/2 -translate-y-1/2 border-0"
    : "absolute inset-0 h-full w-full border-0";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden bg-background ${className}`}
      style={{ opacity }}
    >
      <iframe
        src={src}
        className={frameClass}
        allow="autoplay; fullscreen; picture-in-picture"
        title=""
        loading="eager"
        tabIndex={-1}
      />
      {chromeless && (
        <>
          <div className="absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-background via-background/90 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-10 h-14 bg-gradient-to-t from-background/70 via-background/30 to-transparent" />
          <div className="absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background/50 to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background/50 to-transparent" />
        </>
      )}
    </div>
  );
}

type VimeoCarouselProps = {
  vimeoIds: string[];
  intervalMs?: number;
};

export function VimeoCarousel({
  vimeoIds,
  intervalMs = 12000,
}: VimeoCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (vimeoIds.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % vimeoIds.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [vimeoIds.length, intervalMs]);

  if (vimeoIds.length === 0) return null;

  return (
    <div className="absolute inset-0">
      {vimeoIds.map((id, i) => (
        <VimeoBackground
          key={id}
          vimeoId={id}
          opacity={i === index ? 1 : 0}
          className="transition-opacity duration-[2000ms] ease-in-out"
        />
      ))}
    </div>
  );
}
