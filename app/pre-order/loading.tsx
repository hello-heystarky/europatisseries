// Shown while the live menu is fetched from Square (force-dynamic route). Mirrors the
// v4 menu page — heading, tab row, product grid — so the real page drops in without a jump.
export default function PreOrderLoading() {
  return (
    <div className="bg-white px-6 pb-24 pt-10 md:px-12 md:pt-14" aria-busy="true" aria-label="Loading the menu">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="euro-eyebrow text-euro-muted">Order online · pickup or delivery</p>
        <h1 className="euro-heading mr-[-0.2em] text-[clamp(28px,3vw,40px)] tracking-[0.2em] text-euro-ink">Menu</h1>
      </div>

      <div className="-mx-6 mt-9 flex items-center gap-7 overflow-hidden border-b border-euro-line px-6 py-4 md:-mx-12 md:px-12">
        {[96, 104, 88, 132, 76].map((w, i) => (
          <span key={i} className="h-2.5 flex-none bg-euro-tint" style={{ width: w }} />
        ))}
      </div>

      <div className="mt-9 grid animate-pulse grid-cols-2 gap-x-3 gap-y-11 [animation-duration:2.4s] md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-3.5">
            <div className="aspect-[4/5] bg-euro-tint" />
            <span className="h-2.5 w-2/3 bg-euro-tint" />
            <span className="h-2.5 w-1/4 bg-euro-tint" />
          </div>
        ))}
      </div>
    </div>
  );
}
