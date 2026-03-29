import Link from "next/link";
import { ReactNode } from "react";

type CardProps = {
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  children?: ReactNode;
  className?: string;
};

export default function Card({
  title,
  description,
  href,
  ctaLabel,
  children,
  className = "",
}: CardProps) {
  const content = (
    <div className={`rounded-xl border border-slate-200 bg-white p-6 shadow-sm ${className}`.trim()}>
      <h3 className="ds-h3">{title}</h3>
      <p className="ds-body mt-3">{description}</p>
      {children}
      {href && ctaLabel ? (
        <span className="mt-4 inline-flex text-sm font-medium text-slate-900 underline underline-offset-4">
          {ctaLabel}
        </span>
      ) : null}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block rounded-xl transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">
        {content}
      </Link>
    );
  }

  return content;
}
