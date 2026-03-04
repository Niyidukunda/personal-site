import ContactForm from "@/components/contact/ContactForm";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const nextSteps = [
  {
    step: "01",
    title: "Submit your brief",
    detail: "Complete the form and send the pre-filled email. Takes under two minutes.",
  },
  {
    step: "02",
    title: "Scoping call",
    detail: "I'll review your context and reply within one business day to arrange a short call.",
  },
  {
    step: "03",
    title: "Structured proposal",
    detail: "A clear scope, approach, and engagement outline — no generic decks.",
  },
] as const;

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <Section className="pt-6 md:pt-10">
        <div className="ds-gap max-w-3xl">
          <h1 className="ds-h1">Contact</h1>
          <p className="ds-muted md:text-base">
            Discuss your architecture. Start with a brief description of what
            you&rsquo;re building, where it stands, and what you need to move forward.
          </p>
        </div>
      </Section>

      {/* What happens next */}
      <Section className="pt-0">
        <div className="border-t border-slate-200 pt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">
            What happens next
          </h2>
          <ol className="mt-5 grid gap-5 sm:grid-cols-3" aria-label="Process steps">
            {nextSteps.map((item) => (
              <li key={item.step} className="space-y-1.5">
                <span className="text-xs font-semibold tabular-nums text-slate-400">
                  {item.step}
                </span>
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="text-sm leading-6 text-slate-600">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Form */}
      <Section className="pt-0">
        <div className="border-t border-slate-200 pt-8">
          <div className="max-w-2xl">
            <h2 className="ds-h3">Start the conversation</h2>
            <p className="ds-muted mt-2">
              All fields marked <span aria-hidden="true">*</span> are required. The
              form opens a pre-filled email draft — review it and send.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      {/* Fallback */}
      <Section className="pt-0">
        <div className="border-t border-slate-200 pt-8 max-w-2xl">
          <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">
            Prefer email?
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Write directly to{" "}
            <a
              href="mailto:hello@delitweb.com"
              className="font-medium text-slate-900 underline underline-offset-4 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 rounded-sm"
            >
              hello@delitweb.com
            </a>
            . I respond to substantive architecture enquiries within one business day.
          </p>
        </div>
      </Section>

      {/* CTA band */}
      <Section contained={false} className="bg-slate-900 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              Not ready to reach out yet?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              Review what I&rsquo;ve built or the depth of capability available before committing to a conversation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/work"
                variant="secondary"
                className="border-white bg-white text-slate-900 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                View selected work
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

