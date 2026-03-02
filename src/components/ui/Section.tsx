import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`ds-section ${className}`.trim()}>
      {(title || description) && (
        <div className="ds-gap mb-6">
          {title ? <h2 className="ds-h2">{title}</h2> : null}
          {description ? <p className="ds-muted">{description}</p> : null}
        </div>
      )}
      {children}
    </section>
  );
}
