import CollapsibleList from "@/components/ui/CollapsibleList";

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
  const signalItems = signals.map((item) => (
    <span key={item} className="flex items-start gap-2">
      <span aria-hidden="true" className="mt-[0.2rem] text-slate-500">✓</span>
      <span>{item}</span>
    </span>
  ));

  return (
    <article id={id} className="relative scroll-mt-24 py-10 md:py-12">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <h2 className="ds-h2">{title}</h2>
          <p className="ds-body">{lede}</p>
        </div>

        <div className="space-y-6 lg:border-l lg:border-slate-200/60 lg:pl-8">
          <section className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">
              What it covers
            </h3>
            <CollapsibleList items={covers} visibleCount={3} />
          </section>

          <section className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">
              Typical outcomes
            </h3>
            <CollapsibleList items={outcomes} visibleCount={2} />
          </section>

          <section className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-900">
              Signals of completion
            </h3>
            <CollapsibleList
              items={signalItems}
              visibleCount={3}
              ulClassName="space-y-1.5 pl-1 text-sm text-slate-700"
            />
          </section>
        </div>
      </div>
    </article>
  );
}
