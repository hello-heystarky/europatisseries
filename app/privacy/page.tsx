import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Euro Patisserie Armadale collects, uses and protects your personal information when you order online, contact us or visit the café.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "26 November 2026";
const PHONE = BUSINESS.phone.replace("+61 3 ", "(03) ");
const EMAIL = BUSINESS.email;

type Section = { id: string; title: string; body: React.ReactNode };

const mail = (
  <a href={`mailto:${EMAIL}`} className="text-euro-ink underline underline-offset-4">
    {EMAIL}
  </a>
);

/*
 * Structured on the Australian Privacy Principles (APP 1.4): what we collect, how, why, who we share it with
 * (including overseas), how to access or correct it, and how to complain. Written for what this site actually
 * does: Square payments, Google / OpenStreetMap address lookups for delivery, cart saved on the device, no
 * analytics or advertising cookies. Update it if any of that changes (e.g. analytics, CRM, newsletter tool).
 */
const SECTIONS: Section[] = [
  {
    id: "about",
    title: "About this policy",
    body: (
      <>
        <p>
          This policy explains how Euro Patisserie Armadale (&ldquo;we&rdquo;, &ldquo;us&rdquo;) at {BUSINESS.streetAddress},{" "}
          {BUSINESS.locality} {BUSINESS.region} {BUSINESS.postalCode} handles your personal information when you use this
          website, order online, contact us, apply for a job or visit the café.
        </p>
        <p>We follow the Australian Privacy Principles in the Privacy Act 1988 (Cth).</p>
      </>
    ),
  },
  {
    id: "collect",
    title: "What we collect",
    body: (
      <ul>
        <li>
          <strong>Orders:</strong> your name, phone number, email (optional), pickup or delivery time, delivery address and
          any order notes you add.
        </li>
        <li>
          <strong>Payments:</strong> card and wallet payments are processed by Square. Your card number goes directly to
          Square. We never see or store it.
        </li>
        <li>
          <strong>Allergies and dietary needs:</strong> only if you tell us, and only to prepare your order safely.
        </li>
        <li>
          <strong>Enquiries:</strong> your name, email and message when you use our contact form, email or call us,
          including event and catering enquiries.
        </li>
        <li>
          <strong>Job applications:</strong>{" "}
          your name, email, the role you&rsquo;re applying for and what you tell us about yourself.
        </li>
        <li>
          <strong>Newsletter:</strong> your email address, if you subscribe.
        </li>
        <li>
          <strong>Website visits:</strong> our hosting provider keeps short-term technical logs (such as IP address, browser
          type and pages requested) to keep the site running and secure.
        </li>
      </ul>
    ),
  },
  {
    id: "how",
    title: "How we collect it",
    body: (
      <p>
        Mostly directly from you: at checkout, through our website forms, by email, phone, social media messages or in
        the café. When you pay, Square shares the payment and order details we need to fill your order.
      </p>
    ),
  },
  {
    id: "use",
    title: "How we use it",
    body: (
      <ul>
        <li>To prepare, deliver and confirm your order, and contact you about it if something changes</li>
        <li>To work out your delivery fee from the driving distance to your address</li>
        <li>To reply to your enquiries and plan catering or events with you</li>
        <li>To consider your job application</li>
        <li>To send our newsletter, if you&rsquo;ve subscribed</li>
        <li>To keep our website secure and fix problems</li>
        <li>To keep the business and tax records the law requires</li>
      </ul>
    ),
  },
  {
    id: "marketing",
    title: "Marketing",
    body: (
      <p>
        We only send marketing emails if you subscribe. Every email has an unsubscribe link, or you can ask us to remove
        you at {mail}. We never sell or rent your personal information.
      </p>
    ),
  },
  {
    id: "share",
    title: "Who we share it with",
    body: (
      <>
        <p>We share only what each one needs to do its job:</p>
        <ul>
          <li>
            <strong>Square</strong> processes payments and keeps our order and sales records.
          </li>
          <li>
            <strong>Google Maps and OpenStreetMap</strong> look up your delivery address and measure the driving distance
            from our shop.
          </li>
          <li>
            <strong>Our delivery driver or courier</strong> receives your name, phone number and delivery address.
          </li>
          <li>
            <strong>Our website, hosting and customer contact providers</strong> run this site, its forms and our email.
          </li>
          <li>
            <strong>Professional advisers</strong> (such as our accountant), or anyone the law requires us to share with.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "overseas",
    title: "Overseas",
    body: (
      <p>
        This website is hosted in Sydney. Some of the providers above store or process information outside Australia.
        Square may do so in countries including the United States, Canada, Japan, Ireland, France, Spain and the United
        Kingdom. Google is based in the United States, OpenStreetMap services are run from Europe, and our customer
        contact and email providers may store data in the United States. We choose providers that protect personal
        information to a standard similar to Australian law.
      </p>
    ),
  },
  {
    id: "device",
    title: "Cookies and your device",
    body: (
      <p>
        Your bag and chosen pickup or delivery time are saved in your own browser so they&rsquo;re still there when you come
        back. They stay on your device until you check out. We don&rsquo;t use advertising or tracking cookies. If we add
        website analytics in future, we&rsquo;ll update this policy first.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security and how long we keep it",
    body: (
      <p>
        We take reasonable steps to protect your information, including encrypted (HTTPS) connections and limiting access
        to the people who need it. Order and payment records are kept for five years, as Australian tax law requires. Job
        applications are kept while we&rsquo;re recruiting. Other information is deleted when we no longer need it. If a
        data breach is likely to cause you serious harm, we&rsquo;ll let you know.
      </p>
    ),
  },
  {
    id: "access",
    title: "Seeing or correcting your information",
    body: (
      <p>
        You can ask to see the personal information we hold about you, or ask us to correct or delete it, by emailing{" "}
        {mail}. We&rsquo;ll reply within 30 days, free of charge.
      </p>
    ),
  },
  {
    id: "complaints",
    title: "Complaints",
    body: (
      <p>
        If you&rsquo;re concerned about how we&rsquo;ve handled your information, email {mail} or call {PHONE}. We&rsquo;ll
        acknowledge your complaint within five business days and aim to resolve it within 30 days. If you&rsquo;re not
        satisfied with our response, you can contact the Office of the Australian Information Commissioner at{" "}
        <a href="https://www.oaic.gov.au" target="_blank" rel="noreferrer" className="text-euro-ink underline underline-offset-4">
          oaic.gov.au
        </a>{" "}
        or 1300 363 992.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: <p>We&rsquo;ll post any changes on this page and update the date at the top.</p>,
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <p>
        Euro Patisserie Armadale
        <br />
        {BUSINESS.streetAddress}, {BUSINESS.locality} {BUSINESS.region} {BUSINESS.postalCode}
        <br />
        {mail} · <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} className="text-euro-ink underline underline-offset-4">{PHONE}</a>
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="bg-euro-tint px-6 py-20 text-center md:py-24">
        <div className="mx-auto flex max-w-[640px] flex-col items-center gap-4">
          <p className="euro-eyebrow text-euro-muted">Last updated {UPDATED}</p>
          <h1 className="euro-heading mr-[-0.2em] text-[clamp(30px,3.4vw,46px)] tracking-[0.2em] text-euro-ink">
            Privacy policy
          </h1>
          <p className="text-[15px] leading-[1.8] text-euro-soft">How we look after your personal information.</p>
        </div>
      </section>

      <div className="mx-auto flex max-w-[1080px] flex-col gap-12 px-6 py-16 md:flex-row md:gap-16 md:px-12 md:py-24">
        <nav aria-label="On this page" className="md:sticky md:top-[128px] md:w-[240px] md:flex-none md:self-start">
          <p className="euro-label mb-4 text-euro-ink">On this page</p>
          <ol className="flex flex-col gap-2.5 text-[13px] text-euro-soft">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-euro-ink">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="flex min-w-0 flex-1 flex-col gap-11">
          {SECTIONS.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-[128px]">
              <h2 className="euro-label mb-4 text-[13px] text-euro-ink">{s.title}</h2>
              <div className="flex flex-col gap-3 text-[14.5px] leading-[1.8] text-euro-text [&_li]:pl-1 [&_strong]:font-medium [&_strong]:text-euro-ink [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5">
                {s.body}
              </div>
            </section>
          ))}
          <p className="text-xs text-euro-soft">
            Questions about an order rather than privacy?{" "}
            <Link href="/contact" className="text-euro-ink underline underline-offset-4">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
