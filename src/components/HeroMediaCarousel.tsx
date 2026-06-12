"use client";

import { useEffect, useState } from "react";
import { VimeoBackground } from "./VimeoBackground";
import { YouTubeBackground } from "./YouTubeBackground";

export type HeroMediaItem =
  | { type: "vimeo"; id: string }
  | { type: "youtube"; id: string };

type HeroMediaCarouselProps = {
  items: HeroMediaItem[];
  intervalMs?: number;
};

export function HeroMediaCarousel({
  items,
  intervalMs = 12000,
}: HeroMediaCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [items.length, intervalMs]);

  if (items.length === 0) return null;

  return (
    <div className="absolute inset-0">
      {items.map((item, i) => {
        const active = i === index;
        const className = `transition-opacity duration-[2000ms] ease-in-out`;
        const opacity = active ? 1 : 0;

        if (item.type === "vimeo") {
          return (
            <VimeoBackground
              key={`vimeo-${item.id}`}
              vimeoId={item.id}
              opacity={opacity}
              className={className}
              chromeless
            />
          );
        }

        return (
          <YouTubeBackground
            key={`youtube-${item.id}`}
            youtubeId={item.id}
            opacity={opacity}
            className={className}
            chromeless
          />
        );
      })}
    </div>
  );
}
