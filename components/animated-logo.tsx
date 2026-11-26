"use client";

import { useId } from "react";
import { DOT_PATHS, LOGO_VIEWBOX, SCRIPT_PATH, WORD_PATHS } from "./logo-paths";
import { SCRIPT_DOTS, SCRIPT_STROKES } from "./logo-strokes";

/** How long the pen takes to write "patisserie", in seconds. */
export const WRITE_SECONDS = 1.5;
const START = 0.1;

// A steady pen: each stroke's time is in proportion to its length, one after another, left to right.
const TOTAL = SCRIPT_STROKES.reduce((n, s) => n + s.len, 0);
const TIMED = SCRIPT_STROKES.reduce<{ d: string; delay: number; dur: number; x: number }[]>((acc, s) => {
  const prev = acc[acc.length - 1];
  const delay = prev ? prev.delay + prev.dur : START;
  const x = Number(s.d.match(/M([\d.]+)/)?.[1] ?? 0);
  acc.push({ d: s.d, delay, dur: (s.len / TOTAL) * WRITE_SECONDS, x });
  return acc;
}, []);
// Each i-dot lands as the pen finishes the stroke that ends nearest to it (the i's stem).
const ends = (d: string) => {
  const pts = [...d.matchAll(/([\d.]+),([\d.]+)/g)].map((m) => [Number(m[1]), Number(m[2])]);
  return [pts[0], pts[pts.length - 1]];
};
const DOTS = SCRIPT_DOTS.map((dot) => {
  let best = TIMED[TIMED.length - 1];
  let bestDist = Infinity;
  for (const t of TIMED) {
    for (const [x, y] of ends(t.d)) {
      const dist = Math.hypot(x - dot.cx, y - dot.cy);
      if (dist < bestDist) {
        bestDist = dist;
        best = t;
      }
    }
  }
  return { ...dot, delay: best.delay + best.dur };
});

/**
 * The brand logo with "patisserie" handwritten in: a pen line traces the centre of each letter (a trim-path
 * mask over the real script), the i-dots land as the pen passes, and "euro" sits still underneath.
 * Uses currentColor; set it with a text-* class.
 */
export function AnimatedLogo({ className = "" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox={LOGO_VIEWBOX} role="img" aria-label="Euro Patisserie" className={className}>
      <defs>
        <mask id={`${id}-write`} maskUnits="userSpaceOnUse" x="0" y="0" width="590" height="140">
          <g fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
            {TIMED.map((t) => (
              <path
                key={t.d}
                d={t.d}
                pathLength={1}
                className="logo-trace"
                style={{ animationDuration: `${t.dur}s`, animationDelay: `${t.delay}s` }}
              />
            ))}
          </g>
          {DOTS.map((d) => (
            <circle
              key={d.cx}
              cx={d.cx}
              cy={d.cy}
              r={d.r}
              fill="#fff"
              className="logo-dot"
              style={{ animationDelay: `${d.delay}s`, transformOrigin: `${d.cx}px ${d.cy}px` }}
            />
          ))}
        </mask>
      </defs>
      <g mask={`url(#${id}-write)`} fill="currentColor">
        <path d={SCRIPT_PATH} />
        {DOT_PATHS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="currentColor">
        {WORD_PATHS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
    </svg>
  );
}
