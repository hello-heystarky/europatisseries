import type { Metadata } from "next";
import Link from "next/link";
import { getMenuOrSample } from "@/lib/menu-source";
import { buildShop } from "@/lib/shop";
import { BUSINESS } from "@/lib/site";
import { ShopSection } from "@/components/home/shop";
import { FaqSection } from "@/components/faq-section";

// Catering packs are priced live from the Square menu — render at request time.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Catering & Events",
  description:
    "Catering platters for the office, parties and events in Armadale — savoury lunch platters, party pies, morning tea, pastry packs and grazing tables. Order online with 24 hours notice.",
  alternates: { canonical: "/catering" },
};

const EVENTS = [
  { title: "Weddings & celebrations", text: "Dessert tables, macaron towers and celebration cakes, made to your colours and numbers." },
  { title: "Corporate & office", text: "Breakfast, morning tea and lunch for meetings, launches and regular office orders." },
  { title: "Custom cakes", text: "Birthday, engagement and christening cakes, designed with you and made in our kitchen." },
];

/** Catering: the same platters as the homepage tab, on their own, plus a way in for bigger events. */
export default async function CateringPage() {
  const { menu, source } = await getMenuOrSample();
  const shop = buildShop(menu, source);
  const tel = BUSINESS.phone.replace(/\s/g, "");

  return (
    <>
      <div className="bg-white">
        <ShopSection shop={shop} variant="catering" />
      </div>

      <section id="events" className="flex scroll-mt-[108px] flex-wrap items-stretch bg-euro-cream">
        <div className="relative min-h-[320px] flex-[1_1_480px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/catering/lemon-tart.jpg"
            alt="Tarte au citron"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-[1_1_520px] flex-col gap-8 px-6 py-16 md:px-16 md:py-24">
          <div className="flex flex-col gap-4">
            <p className="euro-eyebrow text-euro-muted">Bigger events</p>
            <h2 className="euro-heading text-[clamp(26px,2.6vw,38px)] text-euro-ink">Planning something bigger?</h2>
            <p className="max-w-[520px] text-[14px] leading-relaxed text-euro-text">
              For a wedding, a big crowd, a custom menu or a cake for the occasion, tell us the date, numbers and what you
              have in mind. We&rsquo;ll come back with a menu and a quote.
            </p>
          </div>

          <ul className="flex flex-col divide-y divide-euro-line border-y border-euro-line">
            {EVENTS.map((e) => (
              <li key={e.title} className="flex flex-col gap-1.5 py-5">
                <span className="euro-label text-euro-ink">{e.title}</span>
                <span className="text-[13px] leading-relaxed text-euro-text">{e.text}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${BUSINESS.email}?subject=${encodeURIComponent("Event enquiry")}`}
              className="btn-euro"
            >
              Email an enquiry
            </a>
            <a href={`tel:${tel}`} className="btn-euro-outline text-euro-ink hover:bg-euro-ink hover:text-white">
              Call {BUSINESS.phone.replace("+61 3 ", "(03) ")}
            </a>
          </div>
          <p className="text-xs text-euro-soft">
            Or <Link href="/contact" className="text-euro-ink underline underline-offset-4">send us a message</Link>.
          </p>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
