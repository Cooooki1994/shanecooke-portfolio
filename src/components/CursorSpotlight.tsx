"use client";

import { useEffect, useRef } from "react";

const LERP = 0.12;

export function CursorSpotlight() {
  const frameRef = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const root = document.documentElement;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (coarse || reduced) {
      root.classList.add("spotlight-off");
      return;
    }

    root.classList.remove("spotlight-off");

    const setVars = (x: number, y: number) => {
      root.style.setProperty("--spot-x", `${x}px`);
      root.style.setProperty("--spot-y", `${y}px`);
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * LERP;
      current.current.y += (target.current.y - current.current.y) * LERP;
      setVars(current.current.x, current.current.y);
      frameRef.current = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      root.classList.add("spotlight-on");
    };

    const onLeave = () => {
      root.classList.remove("spotlight-on");
    };

    frameRef.current = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      root.classList.remove("spotlight-on", "spotlight-off");
    };
  }, []);

  return (
    <div className="spotlight" aria-hidden>
      <div className="spotlight-glow" />
    </div>
  );
}
