import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

export default function HomePage() {
  return (
    <div>
      <Section className="pt-4 md:pt-8">
        <div className="ds-gap max-w-3xl">
          <p className="ds-muted uppercase tracking-[0.12em]">Del IT+Web</p>
          <h1 className="ds-h1">Reliable web systems for practical business needs.</h1>
          <p className="ds-body">
            We design, build, and maintain performant websites and web
            applications with a clean, dependable foundation.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="/contact" variant="primary">
              Start a project
            </Button>
            <Button href="/services" variant="secondary">
              Explore services
            </Button>
          </div>
        </div>
      </Section>

      <Section
        title="What we do"
        description="Focused services designed to keep your website stable, useful, and growing."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card
            title="Web development"
            description="Build modern websites and web apps with clean architecture and maintainable code."
          />
          <Card
            title="Site maintenance"
            description="Keep your platform updated, fast, and secure with proactive maintenance support."
          />
          <Card
            title="Technical support"
            description="Get practical troubleshooting and implementation help for day-to-day web operations."
          />
        </div>
      </Section>

      <Section title="Featured work" description="A preview of selected projects and case studies.">
        <Card
          title="Recent client work"
          description="Explore examples of shipped projects, outcomes, and implementation approach."
          href="/work"
          ctaLabel="View work"
        />
      </Section>
    </div>
  );
}
