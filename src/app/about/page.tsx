import Image from "next/image";
import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Fidel Niyidukunda, the founder-led builder behind Del IT+Web, bridging software, infrastructure, teaching, support, and practical delivery.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Del IT+Web",
    description:
      "Founder-led practical delivery across software, infrastructure, teaching, support, and client guidance.",
    url: "/about",
  },
};

const process = [
  {
    label: "Scope",
    detail:
      "We clarify what needs to work, who it is for, and what should happen first.",
  },
  {
    label: "Build",
    detail:
      "I build the pages, flows, and setup needed to make the idea usable.",
  },
  {
    label: "Stabilize",
    detail:
      "Release checks, support notes, and after-launch guidance are built in so clients can move confidently.",
  },
] as const;

const focusAreas = [
  "Websites, stores, portals, and practical systems",
  "Online learning systems and training workflows",
  "Cleaner launches with setup notes and after-launch support",
  "Access, accounts, admin areas, and easier day-to-day management",
] as const;

const trustSignals = [
  {
    title: "Clear communication",
    text: "Simple updates, practical decisions, and language that is easy to follow.",
  },
  {
    title: "Calm delivery",
    text: "A steady process from first idea to launch, with the next step kept clear.",
  },
  {
    title: "Support after launch",
    text: "Setup notes, fixes, and guidance when the project needs care after going live.",
  },
] as const;

const testimonials = [
  {
    quote: "Thank you so much Mr Fidel for your patience and for helping me.",
    attribution: "N. Mthembu",
    context: "Student / Learning Support",
  },
  {
    quote: "Dude I'm so happy! Thank you for the thoroughness.",
    attribution: "L. Mark",
    context: "Online Store Client",
  },
  {
    quote:
      "At all times I have found Fidele to be a man of integrity, selflessness, and consistency.",
    attribution: "Rev. A. Butorano",
    context: "Education Reference",
  },
  {
    quote: "Thank you for a lovely website, and for your patience. Will be staying in touch.",
    attribution: "E. Billy",
    context: "Website Client",
  },
] as const;

export default function AboutPage() {
  return (
    <div>
      {/* Opening positioning */}
      <Section className="relative overflow-hidden border-b border-slate-200/70 bg-[linear-gradient(180deg,#f8fcfa_0%,#f7fbf9_52%,#fbfdfc_100%)] pt-6 md:pt-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(44%_46%_at_6%_0%,rgba(34,197,94,0.11),transparent_74%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(32%_38%_at_90%_10%,rgba(20,184,166,0.09),transparent_76%)]"
        />
        <div className="relative grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-start">
          <div className="ds-gap max-w-3xl">
            <h1 className="ds-h1">About</h1>
            <p className="ds-body text-slate-800">
              I am Fidel Niyidukunda, a full-stack builder and technical delivery
              partner behind Del IT+Web.
            </p>
            <p className="ds-muted md:text-base">
              My work sits between software, teaching, support, and practical problem-solving -
              turning ideas and manual processes into practical, usable systems. I
              keep learning, building, and sharing what I know along the way, with the goal of
              making technology feel clearer, more useful, and easier to work with.
            </p>
          </div>
          <div className="w-full max-w-xs md:max-w-[18rem] md:justify-self-end">
            <div className="relative overflow-hidden rounded-xl border border-emerald-100/50 bg-[linear-gradient(160deg,rgba(255,255,255,0.9)_0%,rgba(240,253,250,0.58)_100%)] p-2 shadow-[0_8px_18px_-16px_rgba(15,23,42,0.22)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.024)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.024)_1px,transparent_1px)] bg-[size:28px_28px]"
              />
              <div className="relative aspect-[6/7] overflow-hidden rounded-[0.72rem] border border-slate-200/70 bg-slate-100 md:aspect-[5/6]">
                <Image
                  src="/images/gallery/about-practical-support-hero.jpg"
                  alt="Fidel working on a practical technology setup"
                  fill
                  priority
                  sizes="(min-width: 768px) 28vw, 72vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission / What I do */}
      <Section className="pt-0">
        <div className="border-t border-slate-200 pt-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">Mission</h2>
              <p className="ds-body">
                Use technology, teaching, and practical support to make useful tools easier
                to understand, manage, and grow.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">What I do</h2>
              <p className="ds-body">
                The work combines website design, online stores, practical software, learning
                tools, support, and clear technical guidance.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How I work */}
      <Section className="pt-0">
        <div className="border-t border-slate-200 pt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">How I work</h2>
          <dl className="mt-5 grid gap-4 md:grid-cols-3">
            {process.map((entry, i) => (
              <div
                key={entry.label}
                className={[
                  "space-y-1",
                  i > 0 ? "md:border-l md:border-slate-200/60 md:pl-6" : "",
                ].join(" ")}
              >
                <dt className="text-sm font-semibold text-slate-900">{entry.label}</dt>
                <dd className="text-sm leading-6 text-slate-700">{entry.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Trust signals */}
      <Section
        className="border-t border-slate-200/60 bg-slate-50/50"
        title="What working together should feel like"
        description="Clear communication, calm delivery, and practical support around the work."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {trustSignals.map((item) => (
            <article
              key={item.title}
              className="border-t border-slate-200 bg-white pt-5 md:border-l md:border-t-0 md:pl-6"
            >
              <h3 className="text-base font-semibold tracking-tight text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        className="relative overflow-hidden border-y border-emerald-900/10 bg-[#f8fbf8]"
        title="What people say"
        description="Short notes from people who have worked with, learned from, or received support through the work."
      >
        <div className="grid gap-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:items-start">
          <figure className="max-w-[15rem] overflow-hidden rounded-lg border border-emerald-900/10 bg-white p-2 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-100 lg:aspect-[4/5]">
              <Image
                src="/images/gallery/iris-lab-3.jpeg"
                alt="Fidel supporting a practical learning and technology session"
                fill
                sizes="(min-width: 1024px) 30vw, 92vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="px-2 py-3 text-sm leading-6 text-slate-600">
              Practical learning, guidance, and problem-solving in a real working setting.
            </figcaption>
          </figure>

          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((item) => (
              <figure
                key={`${item.attribution}-${item.context}`}
                className={[
                  "rounded-lg border bg-white p-5",
                  item.attribution === "Rev. A. Butorano"
                    ? "border-emerald-900/20 shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:row-span-2 md:p-6"
                    : "border-slate-200",
                ].join(" ")}
              >
                <blockquote
                  className={[
                    "leading-7 text-slate-800",
                    item.attribution === "Rev. A. Butorano" ? "text-lg md:text-xl md:leading-8" : "text-base",
                  ].join(" ")}
                >
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-slate-200 pt-4 text-sm">
                  <span className="font-semibold text-slate-950">{item.attribution}</span>
                  <span className="text-slate-500"> - {item.context}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      {/* Focus areas */}
      <Section className="pt-0">
        <div className="border-t border-slate-200 pt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">
            Focus areas
          </h2>
          <ul className="mt-5 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
            {focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="pt-0">
        <Container>
          <div className="rounded-lg border border-emerald-900/10 bg-[#f8fbf8] p-5 md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                Have something to build or improve?
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
                Send a short project note and the next step can be shaped clearly.
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-0">
              <Button
                href="/contact"
                variant="primary"
                className="border-emerald-900 bg-emerald-900 text-white hover:bg-emerald-800"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "cta_band", label: "primary" }}
              >
                Start a Project
              </Button>
              <Button
                href="/work"
                variant="secondary"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "cta_band", label: "secondary" }}
              >
                View Work
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
