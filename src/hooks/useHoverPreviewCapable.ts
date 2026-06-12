"use client";

import { useEffect, useState } from "react";

const HOVER_PREVIEW_QUERY = "(hover: hover) and (pointer: fine)";

/** True only on devices with a mouse (or fine pointer) that supports hover. */
export function useHoverPreviewCapable() {
  const [capable, setCapable] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(HOVER_PREVIEW_QUERY);
    const update = () => setCapable(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return capable;
}
