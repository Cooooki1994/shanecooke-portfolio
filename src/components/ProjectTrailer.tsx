"use client";

import type { Project } from "@/data/projects";
import {
  getPosterFitClass,
  getPosterLayoutClass,
  portraitVideoSlugs,
} from "@/data/video-fit";
import { LocalVideoBackground } from "./LocalVideoBackground";
import { VimeoBackground } from "./VimeoBackground";
import { YouTubeBackground } from "./YouTubeBackground";

type ProjectTrailerProps = {
  project: Project;
};

export function ProjectTrailer({ project }: ProjectTrailerProps) {
  const hasVideo = Boolean(
    project.videoSrc || project.youtubeId || project.vimeoId,
  );

  if (!hasVideo) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-accent/12 bg-surface">
        <img
          src={project.bannerSrc ?? project.poster}
          alt={project.title}
          className={`absolute opacity-80 ${getPosterLayoutClass(project.slug)} ${getPosterFitClass(project.slug)}`}
        />
      </div>
    );
  }

  const fit = portraitVideoSlugs.has(project.slug) ? "portrait" : "auto";

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-surface ring-1 ring-accent/12">
      {project.videoSrc && (
        <LocalVideoBackground src={project.videoSrc} active muted={false} fit={fit} />
      )}
      {!project.videoSrc && project.youtubeId && (
        <YouTubeBackground youtubeId={project.youtubeId} muted={false} />
      )}
      {!project.videoSrc && !project.youtubeId && project.vimeoId && (
        <VimeoBackground vimeoId={project.vimeoId} muted={false} background={false} />
      )}
    </div>
  );
}
