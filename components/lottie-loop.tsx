"use client";

import { useEffect, useRef } from "react";

/**
 * Plays a Lottie JSON from /public on a loop. The player (lottie-web light, SVG) loads only on pages that use it.
 * Visitors who prefer reduced motion get a still frame.
 */
export function LottieLoop({ src, label, className }: { src: string; label: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: { destroy: () => void } | undefined;
    let cancelled = false;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    import("lottie-web/build/player/lottie_light").then(({ default: lottie }) => {
      if (cancelled || !ref.current) return;
      const a = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: !still,
        autoplay: !still,
        path: src,
        rendererSettings: { preserveAspectRatio: "xMidYMid meet" },
      });
      if (still) a.addEventListener("DOMLoaded", () => a.goToAndStop(Math.round(a.totalFrames * 0.4), true));
      anim = a;
    });
    return () => {
      cancelled = true;
      anim?.destroy();
    };
  }, [src]);

  return <div ref={ref} role="img" aria-label={label} className={className} />;
}
