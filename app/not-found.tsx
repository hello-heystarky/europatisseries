import type { Metadata } from "next";
import Link from "next/link";
import { LottieLoop } from "@/components/lottie-loop";

export const metadata: Metadata = {
  title: "Back of house",
  robots: { index: false },
};

/** 404 — "you've wandered into the kitchen": the baking happens here, the ordering happens out front. */
export default function NotFound() {
  return (
    <section className="flex flex-col items-center gap-8 bg-euro-tint px-6 pb-20 pt-14 text-center md:gap-10 md:pb-24 md:pt-16">
      <div className="flex max-w-[620px] flex-col items-center gap-4">
        <p className="euro-eyebrow text-euro-muted">Back of house · Staff only</p>
        <h1 className="euro-heading mr-[-0.2em] text-[clamp(28px,3.4vw,46px)] tracking-[0.2em] text-euro-ink">
          You&rsquo;ve found the kitchen
        </h1>
        <p className="text-[15px] leading-[1.8] text-euro-soft">
          This is where the butter gets folded and the pastries come out of the oven. Everything back here is still
          baking, so ordering happens out front. You&rsquo;re welcome to stay and watch for a moment.
        </p>
      </div>

      {/* The artwork sits in the middle of a square frame; a 3:2 window trims the empty top and bottom. */}
      <div className="flex w-full max-w-[1000px] items-end justify-center gap-2 md:gap-8">
        <div className="relative hidden aspect-[3/2] w-[46%] max-w-[460px] overflow-hidden sm:block">
          <LottieLoop
            src="/animations/baking-ingredients.json"
            label="Flour, eggs, butter and a rolling pin on a checked tablecloth"
            className="absolute inset-x-0 top-1/2 aspect-square w-full -translate-y-1/2"
          />
        </div>
        <div className="relative aspect-[3/2] w-full max-w-[460px] overflow-hidden sm:w-[50%]">
          <LottieLoop
            src="/animations/cooking-with-love.json"
            label="A pastry chef stirring a pot in the kitchen"
            className="absolute inset-x-0 top-1/2 aspect-square w-full -translate-y-1/2"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-euro">
            Head out front
          </Link>
          <Link href="/pre-order" className="btn-euro-outline text-euro-ink hover:bg-euro-ink hover:text-white">
            Browse the menu
          </Link>
        </div>
        <p className="text-xs text-euro-muted">Error 404 · The page you were looking for has moved or no longer exists.</p>
      </div>
    </section>
  );
}
