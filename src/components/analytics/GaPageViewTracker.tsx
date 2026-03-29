"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type GaPageViewTrackerProps = {
  gaId: string;
};

export default function GaPageViewTracker({ gaId }: GaPageViewTrackerProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }

    const query = window.location.search;
    const pagePath = query ? `${pathname}${query}` : pathname;

    window.gtag("event", "page_view", {
      send_to: gaId,
      page_path: pagePath,
      page_location: `${window.location.origin}${pagePath}`,
      page_title: document.title,
    });
  }, [gaId, pathname]);

  return null;
}
