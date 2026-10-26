"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const sections = document.querySelectorAll<HTMLElement>(
      "main section:not([data-no-reveal]), footer",
    );

    if (motionPreference.matches) return;

    sections.forEach((section) => {
      section.dataset.scrollReveal = "true";
    });
    document.documentElement.dataset.revealReady = "true";

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => {
        section.dataset.revealed = "true";
      });
      return () => {
        delete document.documentElement.dataset.revealReady;
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const section = entry.target as HTMLElement;
          section.dataset.revealed = "true";
          observer.unobserve(section);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      delete document.documentElement.dataset.revealReady;
    };
  }, []);

  return null;
}
