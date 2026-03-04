"use client";

import { useId, useState } from "react";
import type { ReactNode } from "react";

type ExpandableTextProps = {
  children: ReactNode;
  collapsedLines?: number;
  moreLabel?: string;
  lessLabel?: string;
};

/** Maps a line count to the matching Tailwind line-clamp utility. */
const clampMap: Record<number, string> = {
  1: "line-clamp-1",
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
  5: "line-clamp-5",
  6: "line-clamp-6",
};

/**
 * Collapses long content visually via CSS line-clamp while keeping all
 * markup in the DOM (SEO-safe). Accessible via aria-expanded + aria-controls.
 */
export default function ExpandableText({
  children,
  collapsedLines = 3,
  moreLabel = "Read more",
  lessLabel = "Read less",
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();

  const clampClass = clampMap[collapsedLines] ?? "line-clamp-3";

  return (
    <div>
      <div
        id={contentId}
        className={expanded ? undefined : clampClass}
      >
        {children}
      </div>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={contentId}
        onClick={() => setExpanded((v) => !v)}
        className="mt-3 rounded-sm text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 focus-visible:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
      >
        {expanded ? lessLabel : moreLabel}
      </button>
    </div>
  );
}
