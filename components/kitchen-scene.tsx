"use client";

import { useEffect, useRef, useState } from "react";

type Anim = { play: () => void; stop: () => void; goToAndStop: (f: number, isFrame: boolean) => void; totalFrames: number; destroy: () => void };

const SCENES = [
  { src: "/animations/baking-ingredients.json", label: "Flour, eggs, butter and a rolling pin on a checked tablecloth", ms: 6000 },
  { src: "/animations/cooking-with-love.json", label: "A pastry chef mixing in the kitchen", ms: 9000 },
];

/**
 * The 404's kitchen: the ingredients come out first and fade away, then the baker grows in mixing — on repeat.
 * Each Lottie restarts from its first frame as it enters. Reduced motion: the baker, standing still.
 */
export function KitchenScene() {
  const boxes = useRef<(HTMLDivElement | null)[]>([]);
  const anims = useRef<(Anim | null)[]>([]);
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const [still, setStill] = useState(false);

  // Load both animations once.
  useEffect(() => {
    let cancelled = false;
    const list = anims.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    import("lottie-web/build/player/lottie_light").then(({ default: lottie }) => {
      if (cancelled) return;
      let loaded = 0;
      SCENES.forEach((s, i) => {
        const a = lottie.loadAnimation({
          container: boxes.current[i]!,
          renderer: "svg",
          loop: true,
          autoplay: false,
          path: s.src,
          rendererSettings: { preserveAspectRatio: "xMidYMid meet" },
        }) as unknown as Anim;
        (a as unknown as { addEventListener: (e: string, f: () => void) => void }).addEventListener("DOMLoaded", () => {
          if (++loaded === SCENES.length) {
            if (reduce) {
              setStill(true);
              setActive(1);
              a.goToAndStop(Math.round(a.totalFrames * 0.4), true);
            }
            setReady(true);
          }
        });
        list[i] = a;
      });
    });
    return () => {
      cancelled = true;
      list.forEach((a) => a?.destroy());
    };
  }, []);

  // Play the scene on stage from its first frame, then hand over to the next one.
  useEffect(() => {
    if (!ready || still) return;
    const a = anims.current[active];
    a?.goToAndStop(0, true);
    // Start it as it appears (after the outgoing scene's 500ms exit).
    const start = setTimeout(() => a?.play(), 500);
    const next = setTimeout(() => setActive((n) => (n + 1) % SCENES.length), SCENES[active].ms);
    // Stop the one that just left once its exit has finished.
    const prev = (active + SCENES.length - 1) % SCENES.length;
    const rest = setTimeout(() => anims.current[prev]?.stop(), 600);
    return () => {
      clearTimeout(start);
      clearTimeout(next);
      clearTimeout(rest);
    };
  }, [active, ready, still]);

  return (
    <div className="relative aspect-[3/2] w-full max-w-[520px] overflow-hidden" role="img" aria-label={SCENES[active].label}>
      {SCENES.map((s, i) => {
        const on = i === active && ready;
        return (
          <div
            key={s.src}
            aria-hidden="true"
            // Out first (shrink + fade), then the next one grows in once the stage is clear.
            className={`absolute inset-0 transition-[opacity,transform] duration-500 ease-out ${
              on ? "scale-100 opacity-100 delay-500" : "scale-95 opacity-0"
            }`}
          >
            {/* The artwork sits in the middle of a square frame; the 3:2 box trims the empty top and bottom. */}
            <div
              ref={(el) => {
                boxes.current[i] = el;
              }}
              className="absolute inset-x-0 top-1/2 aspect-square w-full -translate-y-1/2"
            />
          </div>
        );
      })}
    </div>
  );
}
