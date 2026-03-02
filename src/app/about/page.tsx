import Section from "@/components/ui/Section";

export default function AboutPage() {
  return (
    <Section className="pt-4 md:pt-8">
      <div className="ds-gap max-w-3xl">
        <h1 className="ds-h1">About</h1>
        <p className="ds-body">
          Del IT+Web helps teams ship practical websites and internal web tools
          with an emphasis on clarity, reliability, and long-term maintainability.
        </p>
      </div>
    </Section>
  );
}
