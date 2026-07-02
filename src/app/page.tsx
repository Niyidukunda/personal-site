import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const trustPoints = [
  "Websites & stores",
  "Client portals",
  "Learning workflows",
  "Launch support",
] as const;

const selectedWork = [
  {
    title: "Compliance & Scoring Platform",
    description:
      "A private review process became a clearer system for intake, scoring, admin work, and reporting.",
  },
  {
    title: "Design-Led Business Website",
    description:
      "A business idea became a polished site that is easier for visitors to browse and easier to grow.",
  },
  {
    title: "Online Learning Platform",
    description:
      "Training content became a more organized online learning system for learners and admins.",
  },
  {
    title: "Deployment Workflow",
    description:
      "A complex launch path became easier to explain, repeat, and support after changes.",
  },
] as const;

const helpAreas = [
  "Build clean websites, online stores, portals, and practical tools",
  "Improve existing systems so they feel easier to manage",
  "Connect forms, payments, accounts, data, and everyday work",
  "Prepare launches with clear setup notes and support-ready structure",
  "Guide clients through decisions, setup, and clear next steps",
  "Support launch, feedback, fixes, and the next useful improvement",
] as const;

const audienceFit = [
  "Individuals who want a thoughtful website, store, or digital idea built properly",
  "Small businesses that need a polished online presence or smoother workflow",
  "Education teams turning training programmes into structured online systems",
  "Collaborators and hirers looking for someone who can bridge product, code, and launch",
] as const;

const visualProof = [
  {
    title: "Online store experience",
    src: "/images/proof/online-store-mobile-hero.jpg",
    alt: "Mobile online store page with clean product-focused layout",
    caption: "A mobile storefront shaped for clear browsing, with brand writing obscured.",
  },
  {
    title: "Practical admin workflow",
    src: "/images/proof/platform-dashboard-overview.jpg",
    alt: "Dashboard interface with private operational details hidden",
    caption: "A dashboard-style system where private counts and internal details are hidden.",
  },
  {
    title: "Hands-on setup",
    src: "/images/gallery/behind-the-work-laptop-setup.jpg",
    alt: "Hands-on laptop setup work with private screen details hidden",
    caption: "Real setup and testing work, with screen details and private context obscured.",
  },
] as const;

const trustCards = [
  {
    title: "Clear communication",
    detail: "You know what is being built, what decisions matter, and what comes next.",
  },
  {
    title: "Practical setup notes",
    detail: "The finished work is easier to understand, update, and support after launch.",
  },
  {
    title: "Calm launch support",
    detail: "Launch details are handled with checks, guidance, and room for useful fixes.",
  },
  {
    title: "Client-friendly guidance",
    detail: "Technical choices are explained in plain language so the project stays approachable.",
  },
] as const;

export default function HomePage() {
  return (
    <div>
      <Section contained={false} className="relative overflow-hidden border-b border-slate-200/70 bg-[linear-gradient(180deg,#f7fcf9_0%,#f3faf7_48%,#f8fbfa_100%)] py-20 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(58%_54%_at_10%_0%,rgba(34,197,94,0.17),transparent_72%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(36%_44%_at_88%_12%,rgba(20,184,166,0.15),transparent_74%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.028)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.028)_1px,transparent_1px)] bg-[size:52px_52px]"
        />
        <Container className="relative z-10 max-w-[90rem]">
          <div className="max-w-4xl">
            <p className="inline-flex items-center rounded-full border border-emerald-200/75 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-emerald-800 shadow-sm">
              Fidel Niyidukunda / Del IT+Web
            </p>
            <div className="mt-7 space-y-7">
              <h1 className="ds-h1">
                Clean websites, online stores, and practical digital systems for people ready to launch well.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-700">
                Del IT+Web helps individuals, small businesses, and education-focused teams
                turn ideas and messy processes into clean, easy-to-manage digital systems,
                from simple sites to online stores, portals, and learning tools.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href="/work"
                variant="primary"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "hero", label: "work" }}
              >
                View Recent Work
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "hero", label: "contact" }}
              >
                Start a Project
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-emerald-100/45 py-8 md:py-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point} className="border-l border-slate-200 pl-4">
              <p className="text-sm font-semibold text-slate-900">{point}</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">Built from real work, shared without private details.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="border-t border-slate-200/60 bg-white"
        title="Real work, shared carefully"
        description="A quick look at the kind of websites, systems, and setup work Del IT+Web helps bring to life."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {visualProof.map((item) => (
            <figure
              key={item.title}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.05)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 768px) 31vw, 92vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="space-y-1 p-4">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="text-xs leading-5 text-slate-600">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section
        className="border-t border-slate-200/60 bg-[linear-gradient(180deg,#fbfdfb_0%,#f7faf9_100%)]"
        title="Recent work"
        description="A few anonymized examples of problems solved and systems made easier to manage."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {selectedWork.map((item) => (
            <Card key={item.title} title={item.title} description={item.description}>
              <Link href="/work" className="mt-4 inline-flex text-sm font-medium text-slate-900 underline underline-offset-4">
                Explore This Work
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        className="border-t border-slate-200/60 bg-white"
        title="How Fidel helps"
        description="Focused support for the parts that make a digital project clear, useful, and ready to use."
      >
        <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
          {helpAreas.map((area) => (
            <div key={area} className="border-t border-slate-200 pt-4">
              <p className="text-sm leading-6 text-slate-700">{area}</p>
            </div>
          ))}
        </div>
        <Button href="/capabilities" variant="secondary" className="mt-8">
          Explore capabilities
        </Button>
      </Section>

      <Section
        className="border-t border-slate-200/60 bg-slate-50/50"
        title="Who this fits"
        description="Built for people who want thoughtful delivery without a heavy agency process or developer-speak."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {audienceFit.map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-sm leading-6 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="border-t border-slate-200/60 bg-white"
        title="What working together feels like"
        description="No invented testimonials, just the standards clients should expect from the process."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((card) => (
            <div key={card.title} className="rounded-lg border border-slate-200 bg-slate-50/60 p-5">
              <h3 className="text-sm font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{card.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section contained={false} className="relative overflow-hidden border-t border-emerald-200/35 bg-[linear-gradient(180deg,#0f172a_0%,#11201d_100%)] py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(42%_56%_at_18%_12%,rgba(34,197,94,0.14),transparent_72%)]"
        />
        <Container>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              Have an idea that needs a clear, polished digital home?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              Send a short project note and we can shape the next step together.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/work"
                variant="secondary"
                className="border-white bg-white text-slate-900 transition-colors hover:bg-slate-100 hover:text-slate-900"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "cta_band", label: "work" }}
              >
                View Recent Work
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                className="border-slate-300 bg-transparent text-slate-100 transition-colors hover:bg-slate-800/20 hover:text-white"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "cta_band", label: "contact" }}
              >
                Send a Project Note
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
