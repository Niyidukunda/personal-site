import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import FastLaneForm from "@/components/contact/FastLaneForm";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Del IT+Web by email or WhatsApp for a website, online store, digital system, workflow, or launch support.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Del IT+Web",
    description:
      "Send a quick project note by email or WhatsApp about your next website, platform, workflow, or digital system.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <Section className="!py-8 md:!py-10">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(14rem,0.6fr)] md:items-center">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#bde7df] bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#005f50] shadow-[0_8px_20px_rgba(15,97,87,0.08)]">
              <Image
                src="/images/icononly.png"
                alt=""
                width={18}
                height={18}
                className="h-4 w-auto"
              />
              <span>Del IT+Web</span>
            </div>
            <h1 className="ds-h1">Contact</h1>
            <p className="ds-muted md:text-base">
              Send a short note by email or WhatsApp. A simple outline is enough to start.
            </p>
          </div>
          <div className="w-full max-w-[14rem] md:justify-self-end">
            <div className="relative overflow-hidden rounded-xl border border-emerald-100/60 bg-white p-2 shadow-[0_10px_28px_rgba(15,23,42,0.05)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[0.72rem] bg-slate-100">
                <Image
                  src="/images/gallery/about-at-work-crop.jpg"
                  alt="Fidel reviewing project details before a conversation"
                  fill
                  priority
                  sizes="(min-width: 768px) 24vw, 72vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick note */}
      <Section className="pt-0">
        <div className="border-t border-slate-200 pt-8">
          <div className="max-w-2xl rounded-lg border border-slate-200 bg-slate-50/60 px-6 py-6 md:px-8 md:py-7">
            <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">
              Quick note
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Use the form, email{" "}
              <a
                href="mailto:hello@delitweb.com"
                className="font-medium text-slate-900 underline underline-offset-4 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 rounded-sm"
              >
                hello@delitweb.com
              </a>
              , or WhatsApp{" "}
              <a
                href="https://wa.me/27677188232"
                className="font-medium text-slate-900 underline underline-offset-4 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 rounded-sm"
              >
                (+27) 067 7188 232
              </a>
            </p>
            <FastLaneForm />
          </div>
        </div>
      </Section>

      {/* Structured enquiry - optional detail */}
      <Section className="pt-0">
        <div className="border-t border-slate-200 pt-8 max-w-2xl">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 rounded-sm">
              <div>
                <h2 className="ds-h3">Add details{" "}
                  <span className="text-base font-normal text-slate-500">(optional)</span>
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  For a fuller brief.
                </p>
              </div>
              <span
                aria-hidden="true"
                className="flex-shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </summary>

            <div className="mt-6">
              <p className="text-sm leading-6 text-slate-500 mb-6">
                An email draft opens before sending.
              </p>
              <ContactForm />
            </div>
          </details>
        </div>
      </Section>
    </div>
  );
}

