import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function AboutPage() {
  return (
    <div>
      <Section className="pt-4 md:pt-8">
        <div className="ds-gap max-w-3xl">
          <h1 className="ds-h1">About</h1>
          <p className="ds-body">
            Del IT+Web helps teams ship practical websites and internal web tools
            with an emphasis on clarity, reliability, and long-term maintainability.
          </p>
        </div>
      </Section>

      <Section contained={false} className="bg-slate-900 py-16 md:py-20">
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
                className="border-slate-300 bg-transparent text-slate-100 transition-colors hover:bg-slate-800/20 hover:text-white"
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
