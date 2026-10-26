"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let observer: IntersectionObserver | undefined;
    let startupTimer: number | undefined;
    let started = false;

    const start = () => {
      if (started) return;
      started = true;
      startupTimer = window.setTimeout(() => {
        const sections = document.querySelectorAll<HTMLElement>(
          "main section:not([data-no-reveal]), footer",
        );

        sections.forEach((section) => {
          section.dataset.scrollReveal = "true";
        });
        document.documentElement.dataset.revealReady = "true";

        if (!("IntersectionObserver" in window)) {
          sections.forEach((section) => {
            section.dataset.revealed = "true";
          });
          return;
        }

        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;

              const section = entry.target as HTMLElement;
              section.dataset.revealed = "true";
              observer?.unobserve(section);
            });
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
        );

        sections.forEach((section) => observer?.observe(section));
      }, 400);
    };

    if (document.readyState === "complete") {
      start();
    } else {
      window.addEventListener("load", start, { once: true });
      startupTimer = window.setTimeout(start, 1200);
    }

    return () => {
      window.removeEventListener("load", start);
      if (startupTimer !== undefined) window.clearTimeout(startupTimer);
      observer?.disconnect();
      delete document.documentElement.dataset.revealReady;
    };
  }, []);

  return null;
}
