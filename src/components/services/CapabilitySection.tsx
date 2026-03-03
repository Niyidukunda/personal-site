import ExpandableText from "@/components/ui/ExpandableText";

type CapabilitySectionProps = {
  id: string;
  title: string;
  lede: string;
  covers: readonly string[];
  outcomes: readonly string[];
  signals: readonly string[];
};

export default function CapabilitySection({
  id,
  title,
  lede,
  covers,
  outcomes,
  signals,
}: CapabilitySectionProps) {
  return (
    <article id={id} className="relative scroll-mt-24 py-10 md:py-12">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <h2 className="ds-h2">{title}</h2>
          <p className="ds-body">{lede}</p>
        </div>

        <div className="lg:border-l lg:border-slate-200/60 lg:pl-8">
        <ExpandableText collapsedLines={4} moreLabel="Expand detail" lessLabel="Collapse">
          <div className="space-y-6">
            <section className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">
                What it covers
              </h3>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                {covers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">
                Typical outcomes
              </h3>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                {outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">
                Signals of completion
              </h3>
              <ul className="space-y-1.5 pl-1 text-sm text-slate-700">
                {signals.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-[0.2rem] text-slate-500">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </ExpandableText>
        </div>
      </div>
    </article>
  );
}
