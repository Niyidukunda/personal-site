import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const proofSignals = [
  {
    heading: "What I optimize for",
    items: [
      "Architecture that supports change without structural rework",
      "Release processes with low friction and clear rollback paths",
      "Service boundaries that match operational and team realities",
      "Security and compliance controls embedded in delivery, not added after",
    ],
  },
  {
    heading: "Tooling & stack",
    items: [
      "Next.js, React, TypeScript for application layer",
      "NestJS, FastAPI for backend services and API boundaries",
      "Docker, GitHub Actions, AWS EC2/S3 for platform and delivery",
      "Keycloak for identity; Nginx for routing and proxy configuration",
    ],
  },
  {
    heading: "Delivery outputs",
    items: [
      "Architecture blueprints and decision records",
      "Working software with documented deployment and runbook",
      "CI/CD pipelines with staged environment separation",
      "Handover-ready codebases with maintainability as a first-class concern",
    ],
  },
] as const;

const timeline = [
  {
    label: "Now",
    detail:
      "Architecture-led consultancy — full-stack builds, platform delivery, and identity/security integrations for product and infrastructure teams.",
  },
  {
    label: "Recent",
    detail:
      "Delivered multi-service compliance platforms, design-led marketing sites, and cloud infrastructure automation across AWS and containerized environments.",
  },
  {
    label: "Foundations",
    detail:
      "Grounded in practical systems thinking: networking, secure deployment, and application design at the boundary of product and infrastructure.",
  },
] as const;

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <Section className="pt-6 md:pt-10">
        <div className="ds-gap max-w-3xl">
          <h1 className="ds-h1">About</h1>
          <p className="ds-muted md:text-base">
            Independent consultancy focused on architecture-led delivery across
            full-stack engineering, cloud platform, and operational reliability.
          </p>
        </div>
      </Section>

      {/* Authority block */}
      <Section className="pt-0">
        <div className="max-w-3xl space-y-5 border-t border-slate-200 pt-8">
          <p className="ds-body">
            Del IT+Web works at the boundary of product and infrastructure — designing
            systems where application architecture, delivery process, and operational
            controls are treated as a unified concern rather than separate workstreams.
          </p>
          <p className="ds-body">
            Engagements are structured around outcomes: clear scope, defined
            interfaces, staged delivery, and a codebase or platform that the team can
            operate confidently after handover. The work is architecture-first and
            implementation-complete.
          </p>
        </div>
      </Section>

      {/* Proof signals */}
      <Section className="pt-0">
        <div className="border-t border-slate-200 pt-8">
          <div className="grid gap-8 md:grid-cols-3">
            {proofSignals.map((group, i) => (
              <div
                key={group.heading}
                className={[
                  "space-y-3",
                  i > 0 ? "md:border-l md:border-slate-200/60 md:pl-8" : "",
                ].join(" ")}
              >
                <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">
                  {group.heading}
                </h2>
                <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Micro timeline */}
      <Section className="pt-0">
        <div className="border-t border-slate-200 pt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">
            Timeline
          </h2>
          <dl className="mt-5 space-y-4">
            {timeline.map((entry) => (
              <div key={entry.label} className="grid gap-1 sm:grid-cols-[6rem_1fr]">
                <dt className="text-sm font-semibold text-slate-900">{entry.label}</dt>
                <dd className="text-sm leading-6 text-slate-700">{entry.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Final CTA band */}
      <Section contained={false} className="bg-slate-900 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              Ready to move from planning to delivery?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              Engagements start with a scoping conversation — no commitment required.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/contact"
                variant="secondary"
                className="border-white bg-white text-slate-900 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                Start a conversation
              </Button>
              <Button
                href="/work"
                variant="secondary"
                className="border-slate-300 bg-transparent text-slate-100 transition-colors hover:bg-slate-800/20 hover:text-white"
              >
                View selected work
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
