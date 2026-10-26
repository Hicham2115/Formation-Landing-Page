type AnalyticsWindow = Window & {
  fbq?: (...args: unknown[]) => void;
  gtag?: (...args: unknown[]) => void;
};

export function trackConversion(
  event: "form_submit" | "whatsapp_click",
): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();

  const analyticsWindow = window as AnalyticsWindow;
  const metaEvent = event === "form_submit" ? "Lead" : "Contact";
  const parameters =
    event === "form_submit"
      ? { content_name: "laser_auriculaire" }
      : { contact_method: "whatsapp" };

  analyticsWindow.fbq?.("track", metaEvent, parameters);

  if (!analyticsWindow.gtag) {
    return new Promise((resolve) => window.setTimeout(resolve, 200));
  }

  return new Promise((resolve) => {
    const timeout = window.setTimeout(resolve, 500);
    analyticsWindow.gtag?.("event", event, {
      ...parameters,
      event_callback: () => {
        window.clearTimeout(timeout);
        resolve();
      },
      event_timeout: 500,
    });
  });
}
