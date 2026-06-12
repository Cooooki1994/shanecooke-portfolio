"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { getChannelLogos } from "@/data/channel-logos";
import type { Project } from "@/data/projects";
import {
  getPosterFitClass,
  getPosterLayoutClass,
  portraitVideoSlugs,
} from "@/data/video-fit";
import { LocalVideoBackground } from "./LocalVideoBackground";
import { VimeoBackground } from "./VimeoBackground";
import { YouTubeBackground } from "./YouTubeBackground";

const TRAILER_DELAY_MS = 550;

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [trailerActive, setTrailerActive] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const trailerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const canPlay = Boolean(
    project.videoSrc || project.vimeoId || project.youtubeId,
  );
  const poster = project.bannerSrc ?? project.poster;
  const hasTrailer = canPlay;

  const clearTrailerTimer = () => {
    if (trailerTimerRef.current) {
      clearTimeout(trailerTimerRef.current);
      trailerTimerRef.current = null;
    }
  };

  const startHover = () => {
    setHovered(true);
    if (!canPlay) return;

    clearTrailerTimer();
    trailerTimerRef.current = setTimeout(() => {
      setTrailerActive(true);
    }, TRAILER_DELAY_MS);
  };

  const endHover = () => {
    if (window.matchMedia("(hover: none)").matches) return;

    setHovered(false);
    setTrailerActive(false);
    clearTrailerTimer();
  };

  useEffect(() => {
    const node = cardRef.current;
    if (!node || !canPlay) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && window.matchMedia("(hover: none)").matches) {
          startHover();
        }
      },
      { threshold: 0.55 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      clearTrailerTimer();
    };
  }, [canPlay]);

  const channelLogos = getChannelLogos(project);
  const posterBlurred = hovered && canPlay && !trailerActive;
  const posterHidden = trailerActive && canPlay;
  const posterFit = getPosterFitClass(project.slug);
  const posterLayout = getPosterLayoutClass(project.slug);

  const content = (
    <>
      <img
        src={poster}
        alt={project.title}
        className={`absolute ${posterLayout} ${posterFit} transition-all duration-500 ${
          posterHidden ? "scale-105 opacity-0" : "scale-100 opacity-100"
        } ${posterBlurred ? "blur-md brightness-75" : ""} ${
          hovered && !posterHidden ? "scale-[1.02]" : ""
        }`}
        loading="lazy"
      />

      {project.videoSrc && trailerActive && (
        <LocalVideoBackground
          src={project.videoSrc}
          active
          muted={false}
          fit={portraitVideoSlugs.has(project.slug) ? "portrait" : "auto"}
          className="z-0 opacity-0 animate-[fadeIn_0.7s_ease-out_forwards]"
        />
      )}

      {!project.videoSrc && project.youtubeId && trailerActive && (
        <YouTubeBackground
          youtubeId={project.youtubeId}
          muted={false}
          className="z-0 opacity-0 animate-[fadeIn_0.7s_ease-out_forwards]"
        />
      )}

      {!project.videoSrc && !project.youtubeId && project.vimeoId && trailerActive && (
        <VimeoBackground
          vimeoId={project.vimeoId}
          muted={false}
          background={false}
          className="z-0 opacity-0 animate-[fadeIn_0.7s_ease-out_forwards]"
        />
      )}

      {channelLogos.length > 0 && !trailerActive && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-3 md:top-5 md:left-5">
          {channelLogos.map((logo) => (
            <img
              key={logo}
              src={logo}
              alt=""
              className="h-5 w-auto max-w-[5.5rem] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] md:h-6 md:max-w-[6.5rem]"
            />
          ))}
        </div>
      )}

      {project.wip && !trailerActive && (
        <div className="absolute top-4 right-4 z-20 md:top-5 md:right-5">
          <span className="text-label rounded-full bg-background/85 px-2.5 py-1 text-[0.62rem] tracking-[0.18em] text-accent ring-1 ring-accent/35 backdrop-blur-sm">
            WIP
          </span>
        </div>
      )}

      <div
        className={`absolute inset-0 z-10 bg-gradient-to-t from-background via-background/40 to-transparent transition-opacity duration-300 ${
          hovered && !trailerActive ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute right-0 bottom-0 left-0 z-20 p-4 transition-all duration-300 sm:p-5 lg:p-5 ${
          hovered && !trailerActive
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            {project.award && (
              <p className="text-label mb-2 text-accent">
                {project.award}
              </p>
            )}
            <h3 className="font-display-italic text-glow-title text-xl text-foreground sm:text-2xl lg:text-[1.45rem]">
              {project.title}
            </h3>
            <p className="text-label mt-2 text-foreground/48">
              {project.youtubeChannel
                ? `${project.client} · ${project.role}`
                : `${project.client} · ${project.role} · ${project.year}`}
            </p>
          </div>
          <span className="text-label shrink-0 text-accent">
            {hasTrailer ? "Preview" : project.wip ? "Coming soon" : "View"}
          </span>
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-0 z-30 rounded-2xl border transition-all duration-300 ${
          hovered
            ? "border-accent/40 shadow-[inset_0_0_24px_rgba(201,162,78,0.06)]"
            : "border-transparent"
        }`}
      />
    </>
  );

  const motionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] as const },
    className:
      "group surface-shine relative aspect-video cursor-pointer overflow-hidden rounded-2xl bg-surface transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(201,162,78,0.14)]",
    onMouseEnter: startHover,
    onMouseLeave: endHover,
  };

  return (
    <Link href={`/work/${project.slug}`} className="block">
      <motion.article ref={cardRef} {...motionProps}>
        {content}
      </motion.article>
    </Link>
  );
}
