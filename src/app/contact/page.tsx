import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import FastLaneForm from "@/components/contact/FastLaneForm";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
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
      <Section className="pt-6 md:pt-10">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(16rem,0.72fr)] md:items-center">
          <div className="ds-gap max-w-3xl">
            <h1 className="ds-h1">Contact</h1>
            <p className="ds-muted md:text-base">
              Have something to build, fix, learn, or collaborate on? Send a short note by
              email or WhatsApp, and the next step can be shaped clearly.
            </p>
          </div>
          <div className="w-full max-w-xs md:justify-self-end">
            <div className="relative overflow-hidden rounded-xl border border-emerald-100/60 bg-white p-2 shadow-[0_10px_28px_rgba(15,23,42,0.05)]">
              <div className="relative aspect-[5/6] overflow-hidden rounded-[0.72rem] bg-slate-100">
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

      {/* Fast lane */}
      <Section className="pt-0">
        <div className="border-t border-slate-200 pt-8">
          <div className="max-w-2xl rounded-lg border border-slate-200 bg-slate-50/60 px-6 py-6 md:px-8 md:py-7">
            <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">
              Fast lane
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Use the quick form to open an email draft, or send a WhatsApp message if
              that is easier. I&rsquo;ll reply within one business day where possible.{" "}
              <a
                href="mailto:hello@delitweb.com"
                className="font-medium text-slate-900 underline underline-offset-4 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 rounded-sm"
              >
                hello@delitweb.com
              </a>
              {" "}or{" "}
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
                  Sharing context about your project helps me prepare a more relevant, faster response.
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
                Fields marked <span aria-hidden="true">*</span> are required. The form
                opens a pre-filled email draft. Review it, then send it from your email app.
              </p>
              <ContactForm />
            </div>
          </details>
        </div>
      </Section>

      {/* CTA band */}
      <Section contained={false} className="bg-slate-900 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              Not ready to reach out yet?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              Browse recent work before sending a note.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                href="/work"
                variant="secondary"
                className="border-white bg-white text-slate-900 transition-colors hover:bg-slate-100 hover:text-slate-900"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "cta_band", label: "primary" }}
              >
                View Recent Work
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

