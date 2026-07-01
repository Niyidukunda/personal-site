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
      "I build the pages, tools, flows, and setup needed to make the idea usable.",
  },
  {
    label: "Stabilize",
    detail:
      "Release checks, support notes, and after-launch guidance are built in so clients can move confidently.",
  },
] as const;

const focusAreas = [
  "Websites, stores, portals, and practical digital tools",
  "Online learning systems and training workflows",
  "Cleaner launches with setup notes and after-launch support",
  "Access, accounts, admin areas, and easier day-to-day management",
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
              I help people turn ideas, manual processes, and technical problems
              into working digital systems that are clear, useful, and easier to manage.
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
                  src="/images/about/about-alt-1-compressed.jpg"
                  alt="Portrait of Del IT and Web consultant"
                  fill
                  priority
                  sizes="(min-width: 768px) 28vw, 72vw"
                  className="object-cover object-[center_27%] md:object-[center_26%]"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Who I am / What I do */}
      <Section className="pt-0">
        <div className="border-t border-slate-200 pt-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">Who I am</h2>
              <p className="ds-body">
                My work sits between software, teaching, support, and practical problem-solving.
                That mix helps me turn messy real-world needs into systems people can actually use.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">What I do</h2>
              <p className="ds-body">
                I build and improve websites, stores, learning systems, client portals,
                launch paths, operating guides, and setup notes for clients, collaborators,
                and education-focused teams.
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

      {/* Final CTA band */}
      <Section contained={false} className="bg-slate-900 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              Ready to make the next step clearer?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              Send a short project note and we can shape a practical next step.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/contact"
                variant="secondary"
                className="border-white bg-white text-slate-900 transition-colors hover:bg-slate-100 hover:text-slate-900"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "cta_band", label: "primary" }}
              >
                Start a Project
              </Button>
              <Button
                href="/capabilities"
                variant="secondary"
                className="border-slate-300 bg-transparent text-slate-100 transition-colors hover:bg-slate-800/20 hover:text-white"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "cta_band", label: "secondary" }}
              >
                Explore capabilities
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
