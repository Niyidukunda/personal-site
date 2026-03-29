import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

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
          className="pointer-events-none absolute -left-16 top-10 h-44 w-44 rounded-full bg-emerald-300/20 blur-3xl md:h-56 md:w-56"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-4rem] top-24 h-48 w-48 rounded-full bg-teal-300/20 blur-3xl md:h-72 md:w-72"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.028)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.028)_1px,transparent_1px)] bg-[size:52px_52px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(16,185,129,0.06)_0%,transparent_42%,rgba(45,212,191,0.05)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[11%] top-[14%] hidden md:block"
        >
          <svg width="126" height="170" viewBox="0 0 126 170" fill="none" className="opacity-35">
            <path
              d="M22 16L101 83L66 90L90 151L62 162L37 101L8 122L22 16Z"
              fill="rgba(15,118,110,0.16)"
              stroke="rgba(15,118,110,0.30)"
              strokeWidth="1.25"
            />
          </svg>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-3.5rem] left-[44%] h-24 w-52 -translate-x-1/2 rounded-[999px] bg-emerald-400/10 blur-2xl md:h-28 md:w-64"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0.02)_72%,rgba(255,255,255,0.08)_88%,rgba(255,255,255,0.18)_100%)] md:h-20"
        />
        <Container className="relative z-10 max-w-[96rem]">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="ds-gap max-w-3xl">
              <p className="inline-flex items-center rounded-full border border-emerald-200/75 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-emerald-800 shadow-sm">
                Del IT+Web
              </p>
              <div className="space-y-7">
                <h1 className="ds-h1">Full-stack development and infrastructure that scale together.</h1>
                <p className="ds-body">
                  Secure web platforms built with production-grade infrastructure
                  — from architecture to deployment.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  href="/contact"
                  variant="primary"
                  analyticsEventName="cta_click"
                  analyticsParams={{ location: "hero", label: "primary" }}
                >
                  Start a conversation
                </Button>
                <Button href="/work" variant="secondary">
                  View work
                </Button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-md border border-emerald-100 bg-white/85 px-2 py-0.5 text-[11px] font-medium text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.05)]">
                  Secure Authentication & Identity
                </span>
                <span className="rounded-md border border-emerald-100 bg-white/85 px-2 py-0.5 text-[11px] font-medium text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.05)]">
                  API & Service Architecture
                </span>
                <span className="rounded-md border border-emerald-100 bg-white/85 px-2 py-0.5 text-[11px] font-medium text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.05)]">
                  Cloud Infrastructure & Deployment
                </span>
              </div>
            </div>

            <Card
              title="Core Competencies"
              description=""
              className="border-emerald-100/90 bg-white/92 p-7 shadow-[0_18px_40px_-28px_rgba(4,120,87,0.45)] backdrop-blur-[1.5px] md:p-8"
            >
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Full-Stack Engineering</p>
                  <p className="ds-muted">Next.js · React · TypeScript · APIs</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Infrastructure & Networking</p>
                  <p className="ds-muted">Routing · Segmentation · Hardening</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Cloud & DevOps</p>
                  <p className="ds-muted">Docker · CI/CD · Production Environments</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Security-minded</p>
                  <p className="ds-muted">Hardening, auth, and reliable deployment practices</p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section
        className="border-t border-emerald-100/45 pt-16 md:pt-20"
        title="Services"
        description="Execution-focused services across product engineering, infrastructure, and delivery."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-5 px-1 py-2">
            <h3 className="ds-h3">Web Apps & Portals</h3>
            <p className="ds-body">Build and iterate web applications with clean architecture and production standards.</p>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-700">
              <li>Next.js / React builds</li>
              <li>API integration patterns</li>
              <li>Authentication and session flows</li>
              <li>Operational dashboards</li>
            </ul>
            <Link href="/services" className="inline-flex text-sm font-medium text-slate-900 underline underline-offset-4">
              See service
            </Link>
          </div>

          <div className="space-y-5 px-1 py-2 md:border-l md:border-slate-200/60 md:pl-6">
            <h3 className="ds-h3">Infrastructure & Networking</h3>
            <p className="ds-body">Design stable technical foundations that support secure day-to-day operations.</p>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-700">
              <li>Network setup and hardening</li>
              <li>VPN and Wi-Fi reliability</li>
              <li>Technical documentation</li>
              <li>Support-ready operational baselines</li>
            </ul>
            <Link href="/services" className="inline-flex text-sm font-medium text-slate-900 underline underline-offset-4">
              See service
            </Link>
          </div>

          <div className="space-y-5 px-1 py-2 md:border-l md:border-slate-200/60 md:pl-6">
            <h3 className="ds-h3">Cloud & Delivery</h3>
            <p className="ds-body">Ship with repeatable processes that reduce risk and improve release confidence.</p>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-700">
              <li>Dockerized environments</li>
              <li>CI/CD pipeline setup</li>
              <li>Deployment workflows</li>
              <li>Monitoring-ready foundations</li>
            </ul>
            <Link href="/services" className="inline-flex text-sm font-medium text-slate-900 underline underline-offset-4">
              See service
            </Link>
          </div>
        </div>
      </Section>

      <Section
        className="border-t border-slate-200/60 bg-[linear-gradient(180deg,#fbfdfb_0%,#f7faf9_100%)]"
        title="Featured work"
        description="An anonymized architecture snapshot from a recent platform engagement."
      >
        <Card
          title="Compliance & Scoring Platform"
          description="Led architecture and implementation across application workflows, service boundaries, and secure delivery pipelines."
          href="/work"
          ctaLabel="Read case study"
        >
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>Implemented a BFF layer to isolate frontend concerns from backend domain services</li>
            <li>Coordinated multi-service integration for compliance, scoring, and reporting workflows</li>
            <li>Separated staging and production environments with controlled promotion flow</li>
            <li>Strengthened authentication pathways and access control for sensitive operations</li>
          </ul>
        </Card>
      </Section>

      <Section
        className="border-t border-slate-200/60 bg-white"
        title="More Work"
        description="Public proof from shipped and in-progress projects."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card
            title="Interior Design Studio Website"
            description="Conversion-focused marketing build with responsive layouts, clear navigation, and reliable production deployment."
          >
            <p className="mt-4 text-sm text-slate-600">Next.js · React · Tailwind</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button href="/work" variant="secondary" className="px-3 py-1.5 text-xs">
                View project
              </Button>
            </div>
          </Card>
          <Card
            title="Product Concept Prototype"
            description="Early-stage product prototype focused on validating user flows, data handling, and delivery feasibility."
          >
            <p className="mt-4 text-sm text-slate-600">TypeScript · React · API</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button href="/work" variant="secondary" className="px-3 py-1.5 text-xs">
                View project
              </Button>
            </div>
          </Card>
          <Card
            title="Learning Platform Build"
            description="Structured platform delivery centered on phased content rollout, role-based access, and maintainable operations."
          >
            <p className="mt-4 text-sm text-slate-600">Web · Infra · Delivery</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button href="/work" variant="secondary" className="px-3 py-1.5 text-xs">
                View project
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      <Section contained={false} className="relative overflow-hidden border-t border-emerald-200/35 bg-[linear-gradient(180deg,#0f172a_0%,#11201d_100%)] py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(42%_56%_at_18%_12%,rgba(34,197,94,0.14),transparent_72%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_44%_at_82%_8%,rgba(45,212,191,0.12),transparent_78%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] opacity-25"
        />
        <Container>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              Planning a platform or infrastructure upgrade?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              Architecture-led systems built for reliability, scalability, and clean delivery from development through production.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button
                href="/contact"
                variant="secondary"
                className="bg-white text-slate-900 border-white transition-colors hover:bg-slate-100 hover:text-slate-900"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "cta_band", label: "primary" }}
              >
                Start a conversation
              </Button>
              <Button
                href="/services"
                variant="secondary"
                className="!border-slate-300 !bg-transparent !text-slate-100 transition-colors hover:!bg-slate-800/20 hover:!text-white"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "cta_band", label: "secondary" }}
              >
                View services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
