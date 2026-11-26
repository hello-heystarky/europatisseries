import type { Metadata } from "next";
import Link from "next/link";
import { KitchenScene } from "@/components/kitchen-scene";

export const metadata: Metadata = {
  title: "Back of house",
  robots: { index: false },
};

/** 404 — "you've found the kitchen": the baking happens back here, the ordering happens out front. */
export default function NotFound() {
  return (
    <section className="flex flex-col items-center gap-6 bg-euro-tint px-6 pb-20 pt-14 text-center md:gap-8 md:pb-24 md:pt-16">
      <div className="flex max-w-[560px] flex-col items-center gap-4">
        <p className="euro-eyebrow text-euro-muted">404 · Back of house</p>
        <h1 className="euro-heading mr-[-0.2em] text-balance text-[clamp(28px,3.4vw,46px)] tracking-[0.2em] text-euro-ink">
          You&rsquo;ve found the kitchen
        </h1>
        <p className="max-w-[440px] text-balance text-[15px] leading-[1.8] text-euro-soft">
          Everything back here is still in the oven. Ordering happens out front, and you&rsquo;re welcome to stay and
          watch a while.
        </p>
      </div>

      <KitchenScene />

      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-euro">
            Head out front
          </Link>
          <Link href="/pre-order" className="btn-euro-outline text-euro-ink hover:bg-euro-ink hover:text-white">
            Browse the menu
          </Link>
        </div>
        <p className="text-balance text-xs text-euro-muted">This page has moved or no longer exists.</p>
      </div>
    </section>
  );
}
