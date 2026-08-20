import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Practical digital and IT support for web presence, business tools, learning support, setup, devices, networks, and ongoing help.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Del IT+Web",
    description:
      "Web presence, business tools, learning support, and everyday IT help for people who need things clear, useful, and easier to manage.",
    url: "/services",
  },
};

const serviceGroups = [
  {
    title: "Websites, Stores & Online Presence",
    text: "Clean websites, landing pages, and shop experiences that help people understand the offer, browse easily, and take the next step.",
    href: "/work#online-store",
  },
  {
    title: "Business Systems & Client Portals",
    text: "Simple tools for forms, accounts, content, records, client access, and everyday admin work.",
    href: "/work#business-support",
  },
  {
    title: "Learning & Training Support",
    text: "Course spaces, assessment support, learner paths, and admin workflows made easier to manage.",
    href: "/work#learning-training",
  },
  {
    title: "IT Setup, Networks & Ongoing Support",
    text: "Help with devices, connectivity, basic networks, setup, troubleshooting, fixes, and support after launch.",
    href: "/work#business-support",
  },
] as const;

const startingPoints = [
  {
    label: "A new site, shop, or online presence",
    href: "/work#online-store",
  },
  {
    label: "A process that needs to be easier to manage",
    href: "/work#business-support",
  },
  {
    label: "A course, assessment, or training setup",
    href: "/work#learning-training",
  },
  {
    label: "Devices, connectivity, or support after launch",
    href: "/work#business-support",
  },
] as const;

const processSteps = [
  {
    title: "Shape the need",
    text: "Clarify what should be built, improved, or made easier.",
  },
  {
    title: "Build the first useful version",
    text: "Focus on the pages, flows, and setup that matter first.",
  },
  {
    title: "Launch with support",
    text: "Prepare the setup notes, fixes, and next steps needed after going live.",
  },
] as const;

const examples = [
  {
    title: "Assessment platform",
    text: "Automatic grading, results, and feedback support.",
    href: "/work#assessment-platform",
  },
  {
    title: "Premium storefront",
    text: "A cleaner customer path from browsing to checkout.",
    href: "/work#online-store",
  },
  {
    title: "Business support portal",
    text: "Documents, compliance, and admin work in one place.",
    href: "/work#business-support",
  },
  {
    title: "Learning workflow",
    text: "Learning content, activities, and admin follow-up made easier.",
    href: "/work#learning-training",
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <Section className="border-b border-slate-200 bg-[#fbfcfb]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(18rem,0.48fr)] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
              Services
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.04]">
              Practical digital and IT support for your work.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              Web presence, business tools, learning support, and everyday IT help for people
              who need things clear, useful, and easier to manage.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href="/contact"
                variant="primary"
                className="border-emerald-900 bg-emerald-900 text-white hover:bg-emerald-800"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "services_hero", label: "contact" }}
              >
                Start a Project
              </Button>
              <Button
                href="/work"
                variant="secondary"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "services_hero", label: "examples" }}
              >
                View Examples
              </Button>
            </div>
          </div>

          <aside className="rounded-lg border border-emerald-900/10 bg-white/85 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
              Best starting points
            </p>
            <div className="mt-5 space-y-4">
              {startingPoints.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block border-t border-slate-200 pt-4 first:border-t-0 first:pt-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                >
                  <span className="block text-sm font-medium leading-6 text-slate-800">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-5 rounded-md bg-[#f8fbf8] px-3 py-2 text-sm font-medium text-slate-900">
              Simple scope. Clear setup. Support after launch.
            </div>
          </aside>
        </div>
      </Section>

      <Section className="border-b border-slate-200 bg-white">
        <div className="grid gap-4 md:grid-cols-2">
          {serviceGroups.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="block rounded-lg border border-slate-200 bg-white p-5 transition-transform hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              <article>
                <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
                <span className="mt-5 inline-flex text-sm font-medium text-slate-900 underline underline-offset-4">
                  See related example
                </span>
              </article>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-b border-slate-200 bg-slate-50/60">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              How the process works
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
              Clear steps, simple decisions, and support that stays practical.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.title} className="border-t border-slate-200 pt-4">
                <h3 className="text-sm font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="border-b border-slate-200 bg-white"
        title="Examples of this work"
        description="A few recent examples are available on the Work page."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {examples.map((example) => (
            <Link
              key={example.title}
              href={example.href}
              className="block rounded-lg border border-slate-200 bg-white p-5 transition-transform hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              <article>
                <h3 className="text-base font-semibold tracking-tight text-slate-950">
                  {example.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{example.text}</p>
              </article>
            </Link>
          ))}
        </div>
      </Section>

      <Section contained={false} className="bg-slate-950 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              Ready to shape the next step?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              Send a short project note.
            </p>
            <div className="mt-8">
              <Button
                href="/contact"
                variant="secondary"
                className="border-white bg-white text-slate-900 transition-colors hover:bg-slate-100 hover:text-slate-900"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "services_cta", label: "contact" }}
              >
                Start a Project
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
