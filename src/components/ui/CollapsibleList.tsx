"use client";

import { useId, useState } from "react";
import type { ReactNode } from "react";

type CollapsibleListProps = {
  items: readonly ReactNode[];
  visibleCount?: number;
  moreLabel?: string;
  lessLabel?: string;
};

/**
 * Renders a <ul> where items beyond visibleCount are hidden (not removed)
 * when collapsed. All items stay in the DOM for SEO and to avoid CLS.
 * Extra items are hidden with the HTML `hidden` attribute so assistive
 * technology skips them, while aria-expanded on the toggle communicates
 * that more items exist.
 */
export default function CollapsibleList({
  items,
  visibleCount = 3,
  moreLabel = "Read more",
  lessLabel = "Read less",
}: CollapsibleListProps) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();

  const needsToggle = items.length > visibleCount;

  return (
    <div>
      <ul
        id={listId}
        className="list-disc space-y-1.5 pl-5 text-sm text-slate-700"
      >
        {items.map((item, i) => (
          <li
            key={i}
            {...(!expanded && i >= visibleCount ? { hidden: true } : {})}
          >
            {item}
          </li>
        ))}
      </ul>
      {needsToggle && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 rounded-sm text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 focus-visible:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
        >
          {expanded ? lessLabel : moreLabel}
        </button>
      )}
    </div>
  );
}
