import { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  contained?: boolean; // NEW
};

export default function Section({
  title,
  description,
  children,
  className = "",
  contained = true, // default behaviour unchanged
}: SectionProps) {
  const content = (
    <>
      {(title || description) && (
        <div className="ds-gap mb-6">
          {title ? <h2 className="ds-h2">{title}</h2> : null}
          {description ? <p className="ds-muted">{description}</p> : null}
        </div>
      )}
      {children}
    </>
  );

  return (
    <section className={`ds-section ${className}`.trim()}>
      {contained ? <Container>{content}</Container> : content}
    </section>
  );
}