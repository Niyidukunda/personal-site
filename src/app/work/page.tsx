import ExpandableText from "@/components/ui/ExpandableText";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const caseStudies = [
  {
    id: "compliance",
    title: "SME Compliance & Scoring Platform",
    positioning:
      "Multi-service platform supporting document workflows, identity, and scoring automation.",
    outcome:
      "Delivered a secure, modular platform foundation that accelerated compliant release cycles across staging and production.",
    context:
      "A compliance-focused team required a secure application stack for document intake, role-based access, and scoring workflows. The platform also needed predictable delivery across product and operations teams.",
    architecture: [
      "Frontend delivery in Next.js with domain-aligned API boundaries",
      "Modular backend services across NestJS and FastAPI for workflow and scoring separation",
      "Identity and access management through Keycloak with controlled token lifecycle",
      "Containerized workloads with Docker and environment-specific deployment pipelines",
      "AWS EC2 + S3 infrastructure with GitHub Actions CI/CD and staged environment management",
    ],
    success: [
      "Service separation reduced cross-domain coupling and improved release safety",
      "Centralized identity standards strengthened authentication and authorization consistency",
      "Infrastructure-first delivery improved repeatability from staging to production",
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
  },
  {
    id: "website",
    title: "Design-Led Business Website",
    positioning:
      "High-performance marketing site built for a visually-driven client.",
    outcome:
      "Shipped a fast, conversion-oriented website with a maintainable structure and consistent deployment workflow.",
    context:
      "The engagement required design-accurate implementation with clear conversion flow and maintainable code. Performance and SEO quality were non-negotiable from the first release.",
    architecture: [
      "Next.js-based implementation with component-driven section architecture",
      "Tailwind-powered UI system for consistent visual execution",
      "Static optimization strategy with route-level performance tuning",
      "Vercel deployment workflows with predictable release behavior",
      "SEO-aligned page structure for discoverability and content clarity",
    ],
    success: [
      "Design intent translated cleanly into production-ready UI",
      "Structured content architecture simplified future updates",
      "Conversion pathways stayed clear across desktop and mobile",
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
  },
  {
    id: "lms",
    title: "Coding & Robotics Learning Platform",
    positioning:
      "Structured LMS platform supporting phased curriculum delivery.",
    outcome:
      "Established a scalable curriculum system that supports learner progression across multiple levels and cohorts.",
    context:
      "An education initiative needed a curriculum system that supports multiple learner levels and instructor workflows. Progression from foundational to advanced phases had to remain consistent and trackable.",
    architecture: [
      "WordPress deployment configured for modular educational content delivery",
      "Tutor LMS integration for enrollment, progression, and learner tracking flows",
      "Curriculum phase mapping to support staged skill development",
      "User role flows aligned to student, instructor, and administrator operations",
      "Content structuring patterns designed for scale and maintainability",
    ],
    success: [
      "Phased curriculum architecture enabled growth without structural rework",
      "Role-aware learner flows improved usability across skill levels",
      "Structured delivery model maintained consistency over content releases",
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
      "Production-ready deployment and CI/CD environment for multi-service applications.",
    outcome:
      "Standardized release infrastructure reduced deployment friction and improved reliability across environments.",
    context:
      "The objective was to standardize infrastructure delivery for multi-service releases across environments. The team needed lower deployment friction with stronger operational confidence.",
    architecture: [
      "Docker Compose orchestration for service coordination across environments",
      "AWS EC2 provisioning and host configuration with repeatable deployment baselines",
      "Nginx reverse proxy routing and upstream service management",
      "GitHub Actions pipelines for build, test, and deployment automation",
      "Environment variable and secrets management integrated into release workflows",
    ],
    success: [
      "Stable staging and production workflows reduced release risk",
      "Automated deployment routines shortened feedback cycles",
      "Repeatable infrastructure patterns improved operational reliability",
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
      <Section className="pt-6 md:pt-10">
        <div className="ds-gap max-w-3xl">
          <h1 className="ds-h1">Selected Work</h1>
          <p className="ds-body">
            Systems built across full-stack engineering and production-grade infrastructure.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-200 pt-6">
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
        <div className="border-y border-slate-200">
          {caseStudies.map((study, index) => (
            <article id={study.id} key={study.title} className="scroll-mt-24 py-12 md:py-16">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="space-y-4">
                    <h2 className="ds-h2">{study.title}</h2>
                    <p className="ds-body">{study.positioning}</p>
                    <p className="text-sm font-medium text-slate-800">Outcome: {study.outcome}</p>
                  </div>

                  <div className="mt-8 space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-900">
                        Context
                      </h3>
                      <div className="mt-2">
                        <ExpandableText collapsedLines={4}>
                          <p className="ds-body">{study.context}</p>
                        </ExpandableText>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-900">
                        Technical Architecture
                      </h3>
                      <div className="mt-2">
                        <ExpandableText collapsedLines={4}>
                          <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                            {study.architecture.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </ExpandableText>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-900">
                        What Made It Successful
                      </h3>
                      <div className="mt-2">
                        <ExpandableText collapsedLines={4}>
                          <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                            {study.success.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </ExpandableText>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="h-full border border-slate-200/80 bg-slate-50/40 p-5">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">
                      {study.snapshotTitle}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.snapshotPoints.map((point) => (
                        <span
                          key={point}
                          className="border border-slate-200/80 bg-white px-2 py-0.5 text-[11px] font-medium text-slate-700"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section contained={false} className="bg-slate-900 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
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
              >
                Start a conversation
              </Button>
              <Button
                href="/services"
                variant="secondary"
                className="border-slate-300 bg-transparent text-slate-100 transition-colors hover:bg-slate-800/20 hover:text-white"
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
