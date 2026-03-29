import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const caseStudies = [
  {
    id: "compliance",
    title: "SME Compliance & Scoring Platform",
    positioning:
      "Secure multi-service platform for compliance workflows, identity, and scoring.",
    outcome:
      "Delivered a modular release foundation that improved compliance velocity across staging and production.",
    context:
      "A compliance team needed secure intake, role-based access, and scoring workflows with predictable delivery across environments.",
    architecture: [
      "Next.js frontend with domain-aligned API boundaries",
      "NestJS and FastAPI services separated by workflow and scoring domains",
      "Keycloak identity plus Dockerized CI/CD across staged AWS environments",
    ],
    success: [
      "Service boundaries reduced coupling and release risk",
      "Centralized identity standards improved access consistency",
      "Staged infrastructure patterns increased deployment repeatability",
    ],
    snapshotTitle: "Stack",
    snapshotPoints: [
      "Next.js",
      "NestJS + FastAPI",
      "Keycloak",
      "Docker",
      "AWS EC2 / S3",
      "GitHub Actions",
    ],
    proofImage: {
      src: "/images/work/wave-stats3.png",
      alt: "SME compliance and scoring platform dashboard interface",
    },
  },
  {
    id: "website",
    title: "Design-Led Business Website",
    positioning:
      "Performance-focused marketing website for a design-driven business.",
    outcome:
      "Shipped a fast conversion-ready site with clean structure and reliable release flow.",
    context:
      "The brief required design-accurate implementation, clear conversion flow, and strong performance from day one.",
    architecture: [
      "Next.js build with component-led page architecture",
      "Tailwind system for consistent UI execution",
      "Static optimization and Vercel release workflow tuned for SEO and speed",
    ],
    success: [
      "Design intent translated cleanly into production UI",
      "Content structure simplified future edits",
      "Conversion pathways remained clear across devices",
    ],
    snapshotTitle: "Delivery",
    snapshotPoints: [
      "Next.js",
      "Tailwind",
      "Static Optimization",
      "Vercel",
      "SEO Structure",
      "Performance Tuning",
    ],
    proofImage: {
      src: "/images/work/velvet-room-site.png",
      alt: "Velvet Room interior design website homepage",
    },
  },
  {
    id: "lms",
    title: "Coding & Robotics Learning Platform",
    positioning:
      "LMS platform built for phased curriculum delivery and progression.",
    outcome:
      "Established a scalable curriculum system that supports progression across learner levels.",
    context:
      "An education program needed trackable learner progression and role-aware workflows across multiple skill phases.",
    architecture: [
      "WordPress foundation with modular content structure",
      "Tutor LMS integration for enrollment and progression tracking",
      "Role-based flows aligned to student, instructor, and admin operations",
    ],
    success: [
      "Phased curriculum mapping supported growth without rework",
      "Role-aware flows improved usability across levels",
      "Structured delivery kept releases consistent over time",
    ],
    snapshotTitle: "Platform",
    snapshotPoints: [
      "WordPress",
      "Tutor LMS",
      "Phase Mapping",
      "Role Flows",
      "Content Structuring",
    ],
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure & Deployment Automation",
    positioning:
      "Deployment and CI/CD foundation for multi-service production workloads.",
    outcome:
      "Standardized release infrastructure reduced deployment friction across staging and production.",
    context:
      "The team needed a repeatable infrastructure model for multi-service releases with stronger operational confidence.",
    architecture: [
      "Docker Compose orchestration for cross-environment service coordination",
      "AWS EC2 host provisioning with repeatable deployment baselines",
      "Nginx routing and GitHub Actions pipelines with integrated secrets workflow",
    ],
    success: [
      "Stable environment workflows lowered release risk",
      "Automated pipelines shortened feedback cycles",
      "Repeatable patterns improved operational reliability",
    ],
    snapshotTitle: "Infrastructure",
    snapshotPoints: [
      "Docker Compose",
      "EC2 Provisioning",
      "Nginx Proxy",
      "GitHub Actions",
      "Secrets Management",
    ],
  },
] as const;

export default function WorkPage() {
  return (
    <div>
      <Section className="relative overflow-hidden border-b border-slate-200/70 bg-[linear-gradient(180deg,#f8fcfa_0%,#f6fbf9_52%,#fbfdfc_100%)] pt-6 md:pt-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(46%_48%_at_8%_0%,rgba(34,197,94,0.11),transparent_74%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_38%_at_90%_10%,rgba(20,184,166,0.08),transparent_76%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.022)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.022)_1px,transparent_1px)] bg-[size:52px_52px] opacity-55"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[8%] top-[18%] hidden md:block"
        >
          <svg width="88" height="118" viewBox="0 0 126 170" fill="none" className="opacity-25">
            <path
              d="M22 16L101 83L66 90L90 151L62 162L37 101L8 122L22 16Z"
              fill="rgba(15,118,110,0.13)"
              stroke="rgba(15,118,110,0.24)"
              strokeWidth="1.2"
            />
          </svg>
        </div>
        <div className="relative ds-gap max-w-3xl">
          <h1 className="ds-h1">Selected Work</h1>
          <p className="ds-body">
            Systems built across full-stack engineering and production-grade infrastructure.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-200/85 pt-6">
            <a
              href="#compliance"
              className="group relative inline-flex text-sm font-medium tracking-[0.02em] text-slate-600 transition-colors hover:text-slate-900 focus-visible:text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100"
            >
              Compliance Platform
            </a>
            <a
              href="#website"
              className="group relative inline-flex text-sm font-medium tracking-[0.02em] text-slate-600 transition-colors hover:text-slate-900 focus-visible:text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100"
            >
              Business Website
            </a>
            <a
              href="#lms"
              className="group relative inline-flex text-sm font-medium tracking-[0.02em] text-slate-600 transition-colors hover:text-slate-900 focus-visible:text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100"
            >
              Learning Platform
            </a>
            <a
              href="#cloud"
              className="group relative inline-flex text-sm font-medium tracking-[0.02em] text-slate-600 transition-colors hover:text-slate-900 focus-visible:text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100"
            >
              Cloud Automation
            </a>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="border-t border-slate-200/85 divide-y divide-slate-200/75">
          {caseStudies.map((study) => (
            <article id={study.id} key={study.title} className="relative scroll-mt-24 py-12 md:py-14">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <div>
                    <h2 className="ds-h2">{study.title}</h2>
                    <p className="mt-3 ds-body">{study.positioning}</p>
                    <p className="mt-3 text-sm font-medium text-slate-800">Outcome: {study.outcome}</p>
                  </div>

                  <div className="mt-7">
                    <div className="rounded-lg border border-emerald-100/70 bg-[linear-gradient(170deg,rgba(255,255,255,0.92)_0%,rgba(240,253,250,0.56)_100%)] p-5">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">
                        {study.snapshotTitle}
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {study.snapshotPoints.map((point) => (
                          <span
                            key={point}
                            className="rounded-md border border-slate-200/80 bg-white px-2 py-0.5 text-[11px] font-medium text-slate-700"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 lg:border-l lg:border-slate-200/60 lg:pl-8">
                  {study.proofImage ? (
                    <div className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-white p-2 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                      <div className="overflow-hidden rounded-xl border border-neutral-200/70 bg-white">
                        <Image
                          src={study.proofImage.src}
                          alt={study.proofImage.alt}
                          width={1600}
                          height={900}
                          sizes="(min-width: 1024px) 42vw, 92vw"
                          className="h-[260px] w-full object-cover object-top md:h-[300px] lg:h-[320px]"
                        />
                      </div>
                    </div>
                  ) : null}

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-900">
                      Context
                    </h3>
                    <p className="mt-3 ds-body">{study.context}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-900">
                      Technical Architecture
                    </h3>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                      {study.architecture.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-900">
                      What Made It Successful
                    </h3>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                      {study.success.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section contained={false} className="relative overflow-hidden border-t border-emerald-200/35 bg-[linear-gradient(180deg,#0f172a_0%,#11201d_100%)] py-16 md:py-20">
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
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              Need architecture support for your next build?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              Engagements designed for reliable delivery across application and infrastructure layers.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/contact"
                variant="secondary"
                className="border-white bg-white text-slate-900 transition-colors hover:bg-slate-100 hover:text-slate-900"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "cta_band", label: "primary" }}
              >
                Start a conversation
              </Button>
              <Button
                href="/services"
                variant="secondary"
                className="border-slate-300 bg-transparent text-slate-100 transition-colors hover:bg-slate-800/20 hover:text-white"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "cta_band", label: "secondary" }}
              >
                Explore services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
