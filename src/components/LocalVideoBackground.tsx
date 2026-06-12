"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type FitMode = "cover" | "portrait";

type LocalVideoBackgroundProps = {
  src: string;
  className?: string;
  opacity?: number;
  active?: boolean;
  muted?: boolean;
  fit?: "auto" | FitMode;
};

function bindReliablePlayback(video: HTMLVideoElement, active: boolean, muted: boolean) {
  const attemptPlay = () => {
    if (!active) return;
    video.muted = muted;
    void video.play().catch(() => {});
  };

  if (!active) {
    video.pause();
    return () => {};
  }

  attemptPlay();

  const events = ["loadeddata", "canplay", "canplaythrough"] as const;
  events.forEach((e) => video.addEventListener(e, attemptPlay));

  const onVisible = () => {
    if (document.visibilityState === "visible") attemptPlay();
  };
  document.addEventListener("visibilitychange", onVisible);

  return () => {
    events.forEach((e) => video.removeEventListener(e, attemptPlay));
    document.removeEventListener("visibilitychange", onVisible);
  };
}

function useVideoSync(
  active: boolean,
  src: string,
  count: number,
  muted: boolean,
) {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  const setRef = useCallback(
    (index: number) => (el: HTMLVideoElement | null) => {
      refs.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    const videos = refs.current.filter(Boolean) as HTMLVideoElement[];
    if (videos.length === 0) return;

    if (active) {
      videos.forEach((v) => {
        v.currentTime = 0;
      });
    }

    const cleanups = videos.map((v) => bindReliablePlayback(v, active, muted));
    return () => cleanups.forEach((fn) => fn());
  }, [active, src, count, muted]);

  return setRef;
}

function PortraitFrame({
  src,
  active,
  muted,
  className,
  opacity,
}: Omit<LocalVideoBackgroundProps, "fit">) {
  const setRef = useVideoSync(active ?? true, src, 4, muted ?? true);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden bg-background ${className}`}
      style={{ opacity }}
    >
      <video
        ref={setRef(0)}
        src={src}
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full scale-[1.4] object-cover blur-[32px] brightness-[0.45] saturate-[1.15]"
      />

      <video
        ref={setRef(1)}
        src={src}
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 h-full w-[34%] scale-x-[-1] object-cover object-right blur-lg brightness-[0.55]"
      />

      <video
        ref={setRef(2)}
        src={src}
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 right-0 h-full w-[34%] object-cover object-left blur-lg brightness-[0.55]"
      />

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <video
          ref={setRef(3)}
          src={src}
          muted={muted}
          loop
          playsInline
          preload="auto"
          className="h-full w-auto max-w-[42%] object-contain"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
    </div>
  );
}

export function LocalVideoBackground({
  src,
  className = "",
  opacity = 1,
  active = true,
  muted = true,
  fit = "auto",
}: LocalVideoBackgroundProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [resolvedFit, setResolvedFit] = useState<FitMode | null>(
    fit === "auto" ? null : fit,
  );

  useEffect(() => {
    if (fit !== "auto") setResolvedFit(fit);
  }, [fit]);

  useEffect(() => {
    const video = ref.current;
    if (!video || resolvedFit !== "cover") return;
    return bindReliablePlayback(video, active, muted);
  }, [active, src, resolvedFit, muted]);

  if (resolvedFit === null) {
    return (
      <video
        src={src}
        preload="metadata"
        className="hidden"
        onLoadedMetadata={(e) => {
          const { videoWidth, videoHeight } = e.currentTarget;
          setResolvedFit(videoHeight > videoWidth ? "portrait" : "cover");
        }}
      />
    );
  }

  if (resolvedFit === "portrait") {
    return (
      <PortraitFrame
        src={src}
        active={active}
        muted={muted}
        className={className}
        opacity={opacity}
      />
    );
  }

  return (
    <video
      ref={ref}
      src={src}
      muted={muted}
      loop
      playsInline
      autoPlay={active}
      preload="auto"
      controls={false}
      disablePictureInPicture
      controlsList="nodownload noplaybackrate noremoteplayback"
      className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${className}`}
      style={{ opacity }}
    />
  );
}

type LocalVideoCarouselProps = {
  sources: readonly string[];
  intervalMs?: number;
};

export function LocalVideoCarousel({
  sources,
  intervalMs = 10000,
}: LocalVideoCarouselProps) {
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sources.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % sources.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [sources.length, intervalMs]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="absolute inset-0">
      {sources.map((src, i) => (
        <LocalVideoBackground
          key={src}
          src={src}
          active={inView && i === index}
          fit="cover"
          muted
          opacity={i === index ? 1 : 0}
          className={`transition-opacity duration-[2000ms] ease-in-out ${
            i === index ? "z-[1]" : "z-0"
          }`}
        />
      ))}
    </div>
  );
}
