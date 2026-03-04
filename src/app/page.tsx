import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function HomePage() {
  return (
    <div>
      <Section contained={false} className="relative overflow-hidden border-b border-slate-200/70 bg-slate-50 py-20 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_80%_20%,rgba(148,163,184,0.18),transparent_65%)]"
        />
        <Container className="relative z-10 max-w-[96rem]">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="ds-gap max-w-3xl">
              <p className="ds-muted uppercase tracking-[0.12em]">Del IT+Web</p>
              <div className="space-y-7">
                <h1 className="ds-h1">Full-stack development and infrastructure that scale together.</h1>
                <p className="ds-body">
                  Secure web platforms built with production-grade infrastructure
                  — from architecture to deployment.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/contact" variant="primary">
                  Discuss your architecture
                </Button>
                <Button href="/work" variant="secondary">
                  View work
                </Button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-md border border-slate-200/80 bg-white/80 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                  Secure Authentication & Identity
                </span>
                <span className="rounded-md border border-slate-200/80 bg-white/80 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                  API & Service Architecture
                </span>
                <span className="rounded-md border border-slate-200/80 bg-white/80 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                  Cloud Infrastructure & Deployment
                </span>
              </div>
            </div>

            <Card
              title="Core Competencies"
              description=""
              className="border-slate-300 bg-white p-7 shadow-lg md:p-8"
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
        className="bg-white pt-16 md:pt-20"
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
        className="bg-slate-50/40"
        title="Featured work"
        description="An anonymized architecture snapshot from a recent platform engagement."
      >
        <Card
          title="Compliance & Scoring Platform (NDA)"
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
        className="bg-white"
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
              <Button variant="secondary" className="px-3 py-1.5 text-xs" disabled>
                Repo
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
              <Button variant="secondary" className="px-3 py-1.5 text-xs" disabled>
                Repo
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
              <Button variant="secondary" className="px-3 py-1.5 text-xs" disabled>
                Repo
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      <Section contained={false} className="bg-slate-900 py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
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
              >
                Start a conversation
              </Button>
              <Button
                href="/services"
                variant="secondary"
                className="!border-slate-300 !bg-transparent !text-slate-100 transition-colors hover:!bg-slate-800/20 hover:!text-white"
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
