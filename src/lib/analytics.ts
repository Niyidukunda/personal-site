type GtagFunction = (command: "event", eventName: string, params?: Record<string, unknown>) => void;

type WindowWithGtag = Window & {
  gtag?: GtagFunction;
};

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") {
    return;
  }

  const gtag = (window as WindowWithGtag).gtag;
  if (typeof gtag !== "function") {
    return;
  }

  gtag("event", eventName, params);
}
