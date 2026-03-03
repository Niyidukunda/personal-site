import CapabilitySection from "@/components/services/CapabilitySection";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const capabilities = [
  {
    id: "product-strategy",
    title: "Product Strategy",
    lede:
      "Clarify product direction, delivery boundaries, and execution priorities before engineering acceleration.",
    covers: [
      "Problem framing, scope definition, and roadmap sequencing",
      "Capability mapping across users, workflows, and service boundaries",
      "Delivery planning that aligns release stages with business constraints",
    ],
    outcomes: [
      "Teams focus on high-value increments with fewer priority resets",
      "Roadmaps become decision tools instead of static documentation",
      "Stakeholders align on what ships now, next, and later",
    ],
    signals: [
      "Clear product scope documented and approved",
      "Prioritized release plan with dependency mapping",
      "Decision criteria defined for backlog intake and changes",
      "Success metrics established for early delivery stages",
    ],
  },
  {
    id: "systems-architecture",
    title: "Systems Architecture",
    lede:
      "Design application and service architecture that balances change velocity with long-term maintainability.",
    covers: [
      "Domain-aligned boundaries for frontend, API, and backend services",
      "Data flow and integration patterns across internal and third-party systems",
      "Architecture tradeoff analysis for scale, complexity, and team ownership",
    ],
    outcomes: [
      "Service interactions become easier to reason about and evolve",
      "Architecture supports parallel delivery across product and platform tracks",
      "Technical risk is surfaced earlier and reduced before release",
    ],
    signals: [
      "Architecture blueprint signed off by engineering stakeholders",
      "Interface contracts and integration boundaries documented",
      "Non-functional requirements translated into implementation constraints",
      "Migration path defined for legacy dependencies where needed",
    ],
  },
  {
    id: "cloud-platform",
    title: "Cloud & Platform",
    lede:
      "Establish repeatable platform foundations for stable delivery across environments.",
    covers: [
      "Environment architecture for development, staging, and production",
      "CI/CD workflow design and release orchestration",
      "Infrastructure configuration baselines and runtime hardening",
      "Operational readiness for scaling, rollback, and incident response",
    ],
    outcomes: [
      "Deployments become predictable and easier to audit",
      "Release throughput improves without reducing control",
      "Platform operations spend less time on manual recovery work",
    ],
    signals: [
      "Deployment pipeline executes with consistent quality gates",
      "Environment parity validated across release stages",
      "Rollback and recovery paths tested and documented",
      "Ownership model defined for ongoing platform support",
    ],
  },
  {
    id: "identity-security-compliance",
    title: "Identity, Security & Compliance",
    lede:
      "Integrate identity and control frameworks into delivery rather than treating security as a final-step review.",
    covers: [
      "Authentication and authorization model design",
      "Access control, secrets handling, and session security patterns",
      "Compliance-oriented controls for auditability and policy alignment",
    ],
    outcomes: [
      "Security decisions are embedded in architecture and release workflows",
      "Access governance improves while preserving engineering velocity",
      "Audit and compliance preparation becomes less reactive",
    ],
    signals: [
      "Role and permission model implemented with least-privilege defaults",
      "Identity lifecycle flows defined for onboarding and revocation",
      "Control evidence mapped to operational processes",
      "Security review checkpoints integrated into delivery lifecycle",
    ],
  },
  {
    id: "observability-reliability",
    title: "Observability & Reliability",
    lede:
      "Build visibility and reliability practices that support confident operation after launch.",
    covers: [
      "Monitoring strategy across application, infrastructure, and user-impact metrics",
      "Alerting and incident triage workflows",
      "Reliability patterns for failure isolation and graceful degradation",
      "Operational runbooks and readiness processes",
    ],
    outcomes: [
      "Teams detect and resolve issues faster with clearer signals",
      "Operational risk decreases through tested response patterns",
      "Service performance remains stable as usage and complexity grow",
    ],
    signals: [
      "Observability dashboards map to critical user journeys",
      "Alert thresholds tuned to actionable operational states",
      "Incident response playbooks validated in routine drills",
      "Reliability objectives tracked and reviewed with delivery teams",
    ],
  },
] as const;

const deliverySteps = [
  {
    title: "Diagnose",
    description:
      "Assess product, architecture, and delivery constraints to identify the highest-value intervention points.",
  },
  {
    title: "Design",
    description:
      "Define target architecture, execution phases, and ownership boundaries before build acceleration.",
  },
  {
    title: "Deliver",
    description:
      "Implement prioritized capabilities with controlled rollout, quality gates, and production readiness checks.",
  },
  {
    title: "Support",
    description:
      "Stabilize operations through documentation, handover, and structured ongoing advisory support.",
  },
] as const;

export default function ServicesPage() {
  return (
    <div>
      <Section className="pt-6 md:pt-10">
        <div className="ds-gap max-w-3xl">
          <h1 className="ds-h1">Services</h1>
          <p className="ds-muted md:text-base">
            Capability depth across strategy, architecture, platform delivery, and operational reliability.
          </p>
          <div className="border-t border-slate-200 pt-6">
            <nav aria-label="Services capabilities" className="flex flex-wrap gap-x-6 gap-y-3">
              {capabilities.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group relative inline-flex rounded-sm text-sm font-medium tracking-[0.02em] text-slate-600 transition-colors hover:text-slate-900 focus-visible:text-slate-900 focus-visible:outline-none after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="border-y border-slate-200">
          {capabilities.map((capability) => (
            <CapabilitySection
              key={capability.id}
              id={capability.id}
              title={capability.title}
              lede={capability.lede}
              covers={capability.covers}
              outcomes={capability.outcomes}
              signals={capability.signals}
            />
          ))}
        </div>
      </Section>

      <Section className="pt-0 md:pt-0">
        <div className="border border-slate-200 bg-slate-50/40 p-6 md:p-8">
          <h2 className="ds-h3">How work runs</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map((step) => (
              <div key={step.title} className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-6 text-slate-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section contained={false} className="bg-slate-900 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              Need capability depth for your next delivery phase?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              Engagements are structured to improve decision quality, delivery stability, and operating confidence.
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
                Review proof
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
