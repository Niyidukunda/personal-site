"use client";

import { useEffect, useState } from "react";

type NavItem = {
  id: string;
  title: string;
};

type ServicesNavProps = {
  items: readonly NavItem[];
};

/**
 * Scroll-spy anchor navigation for the Services page.
 * Uses IntersectionObserver with a rootMargin band so it works correctly
 * with tall sections that can never reach a meaningful pixel-based threshold.
 */
export default function ServicesNav({ items }: ServicesNavProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // The detection band starts just below the sticky header (~96 px) and
    // ends 55% up from the bottom. A section becomes "active" as soon as any
    // part of it crosses into the upper ~45% of the visible viewport.
    // Using threshold: 0 + rootMargin is more reliable than a bare 0.4–0.6
    // threshold for sections taller than the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        // Collect all currently-intersecting section ids…
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target.id);

        if (intersecting.length > 0) {
          // …then pick the one that appears first in document order.
          const first = items.find((item) => intersecting.includes(item.id));
          if (first) setActiveId(first.id);
        }
      },
      {
        rootMargin: "-96px 0px -55% 0px",
        threshold: 0,
      },
    );

    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Services capabilities" className="flex flex-wrap gap-x-6 gap-y-3">
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={isActive ? "true" : undefined}
            className={[
              "group relative inline-flex rounded-sm text-sm font-medium tracking-[0.02em] transition-colors",
              "focus-visible:text-slate-900 focus-visible:outline-none",
              "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full",
              "after:origin-left after:bg-slate-900 after:transition-transform after:duration-200 after:content-['']",
              "hover:text-slate-900 hover:after:scale-x-100 focus-visible:after:scale-x-100",
              isActive
                ? "text-slate-900 after:scale-x-100"
                : "text-slate-600 after:scale-x-0",
            ].join(" ")}
          >
            {item.title}
          </a>
        );
      })}
    </nav>
  );
}
