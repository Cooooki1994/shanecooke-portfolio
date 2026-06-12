"use client";

import { useEffect, useState } from "react";

type YouTubeBackgroundProps = {
  youtubeId: string;
  className?: string;
  opacity?: number;
  muted?: boolean;
  /** Crop + mask embed chrome (title bar, controls) — for hero backgrounds */
  chromeless?: boolean;
};

export function YouTubeBackground({
  youtubeId,
  className = "",
  opacity = 1,
  muted = true,
  chromeless = false,
}: YouTubeBackgroundProps) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams({
      autoplay: "1",
      mute: muted ? "1" : "0",
      loop: "1",
      controls: "0",
      playsinline: "1",
      rel: "0",
      modestbranding: "1",
      iv_load_policy: "3",
      cc_load_policy: "0",
      disablekb: "1",
      fs: "0",
      autohide: "1",
      showinfo: "0",
      playlist: youtubeId,
    });

    if (chromeless) {
      params.set("origin", window.location.origin);
      params.set("widget_referrer", window.location.origin);
    }

    setSrc(`https://www.youtube-nocookie.com/embed/${youtubeId}?${params}`);
  }, [youtubeId, muted, chromeless]);

  const frameClass = chromeless
    ? "absolute left-1/2 top-[52%] h-[170%] w-[170%] max-w-none -translate-x-1/2 -translate-y-1/2 border-0"
    : "absolute inset-0 h-full w-full border-0";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden bg-background ${className}`}
      style={{ opacity }}
    >
      {src && (
        <iframe
          src={src}
          className={frameClass}
          allow="autoplay; encrypted-media; picture-in-picture"
          title=""
          loading="eager"
          tabIndex={-1}
        />
      )}
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

type YouTubeCarouselProps = {
  youtubeIds: string[];
  intervalMs?: number;
};

export function YouTubeCarousel({
  youtubeIds,
  intervalMs = 12000,
}: YouTubeCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (youtubeIds.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % youtubeIds.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [youtubeIds.length, intervalMs]);

  if (youtubeIds.length === 0) return null;

  return (
    <div className="absolute inset-0">
      {youtubeIds.map((id, i) => (
        <YouTubeBackground
          key={id}
          youtubeId={id}
          opacity={i === index ? 1 : 0}
          className="transition-opacity duration-[2000ms] ease-in-out"
        />
      ))}
    </div>
  );
}
