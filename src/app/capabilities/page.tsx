import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "How Fidel Niyidukunda helps clients plan, build, launch, improve, and support clean digital systems.",
  alternates: {
    canonical: "/capabilities",
  },
  openGraph: {
    title: "Capabilities | Del IT+Web",
    description:
      "Client-friendly support for websites, online stores, platforms, learning workflows, launch, and after-launch care.",
    url: "/capabilities",
  },
};

const capabilities = [
  {
    id: "build",
    title: "Build",
    summary:
      "Turn an idea into a polished website, store, portal, course platform, or practical digital tool.",
    context:
      "Useful when you need something real online, not just a rough concept or unfinished page.",
    examples: [
      "Simple, polished pages and user flows",
      "Easy-to-manage admin and content areas",
      "Practical interfaces people can actually use",
    ],
  },
  {
    id: "stabilize",
    title: "Stabilize",
    summary:
      "Improve something that already exists so it feels calmer, cleaner, and easier to manage.",
    context:
      "Useful when a site, store, workflow, or system has grown messy, slow, or hard to update.",
    examples: [
      "Bug fixing and careful cleanup",
      "Workflow simplification",
      "Reliability checks before launch or client handover",
    ],
  },
  {
    id: "connect",
    title: "Connect",
    summary:
      "Connect the pieces that make the experience work, from forms and accounts to data and admin tasks.",
    context:
      "Useful when a digital project needs logins, payments, forms, learning flows, or behind-the-scenes tools.",
    examples: [
      "Forms, accounts, and access flows",
      "Payments, tools, and system integrations",
      "Data moving cleanly between steps",
    ],
  },
  {
    id: "deploy",
    title: "Deploy",
    summary:
      "Move from build to launch with the right hosting, setup, checks, and support path.",
    context:
      "Useful when a project needs to go live cleanly instead of being left half-finished.",
    examples: [
      "Hosting and domain setup",
      "Launch checks and release support",
      "Clear setup notes for future changes",
    ],
  },
  {
    id: "documentation",
    title: "Document & Handover",
    summary:
      "Leave clients with a clear understanding of what was built, how to manage it, and what to do next.",
    context:
      "Useful when the project needs to stay understandable after launch, not dependent on hidden knowledge.",
    examples: [
      "Operating guide and setup notes",
      "Admin guidance for common updates",
      "Clear next steps for future improvements",
    ],
  },
  {
    id: "support",
    title: "Support",
    summary:
      "Stay close after launch for questions, fixes, improvements, and practical next steps.",
    context:
      "Useful for clients who want a steady technical partner, not just a one-off build.",
    examples: [
      "After-launch troubleshooting",
      "Technical review and implementation support",
      "Small improvements over time",
    ],
  },
] as const;

export default function CapabilitiesPage() {
  return (
    <div>
      <Section className="relative overflow-hidden border-b border-slate-200/70 bg-[linear-gradient(180deg,#f8fcfa_0%,#f6fbf9_52%,#fbfdfc_100%)] pt-6 md:pt-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(44%_46%_at_6%_0%,rgba(34,197,94,0.11),transparent_74%)]"
        />
        <div className="relative ds-gap max-w-3xl">
          <h1 className="ds-h1">Capabilities</h1>
          <p className="ds-body">
            A calm, practical way to move from idea to something real: understand the
            problem, build the right pieces, launch cleanly, and keep the system easy to manage.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="border-y border-slate-200 divide-y divide-slate-200">
          {capabilities.map((capability) => (
            <article id={capability.id} key={capability.id} className="scroll-mt-24 py-10 md:py-12">
              <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
                <div>
                  <h2 className="ds-h2">{capability.title}</h2>
                  <p className="mt-3 ds-body">{capability.summary}</p>
                </div>
                <div className="space-y-5 md:border-l md:border-slate-200/70 md:pl-8">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">
                      Where this helps
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{capability.context}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">
                      Often includes
                    </h3>
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                      {capability.examples.map((example) => (
                        <li key={example}>{example}</li>
                      ))}
                    </ul>
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
              Want to see how this looks in practice?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              Recent work shows client-safe examples of websites, platforms, learning workflows,
              secure access, launch support, and operating guides.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/work"
                variant="secondary"
                className="border-white bg-white text-slate-900 transition-colors hover:bg-slate-100 hover:text-slate-900"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "capabilities_cta", label: "work" }}
              >
                View Recent Work
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                className="border-slate-300 bg-transparent text-slate-100 transition-colors hover:bg-slate-800/20 hover:text-white"
                analyticsEventName="cta_click"
                analyticsParams={{ location: "capabilities_cta", label: "contact" }}
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
