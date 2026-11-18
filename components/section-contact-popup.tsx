"use client";

import { MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const SECTION_END_ATTRIBUTE = "data-section-end";

// Put <SectionEnd /> after each section; the popup opens once per section as the visitor scrolls past it.
export function SectionEnd() {
  return <div aria-hidden="true" {...{ [SECTION_END_ATTRIBUTE]: "" }} />;
}

export default function SectionContactPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const markers = document.querySelectorAll(`[${SECTION_END_ATTRIBUTE}]`);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Only react when the end of a section scrolls up into view (scrolling down).
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          setOpen(true);
        }
      },
      { rootMargin: "0px 0px -35% 0px" },
    );

    markers.forEach((marker) => observer.observe(marker));
    return () => observer.disconnect();
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed bottom-4 left-4 z-40 w-[min(92vw,21rem)] rounded-2xl border border-white/10 bg-ink p-5 text-white shadow-[0_18px_60px_rgba(0,0,0,.3)] motion-safe:animate-[soft-rise_.5s_cubic-bezier(.22,.8,.2,1)_both] sm:bottom-6 sm:left-6"
      role="dialog"
      aria-label="Nous contacter"
    >
      <button
        type="button"
        aria-label="Fermer"
        onClick={() => setOpen(false)}
        className="absolute right-3 top-3 grid size-7 place-items-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <X size={15} aria-hidden="true" />
      </button>
      <div className="flex items-start gap-3 pr-6">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-white">
          <MessageCircle size={19} aria-hidden="true" />
        </span>
        <div>
          <p className="text-[15px] font-semibold leading-5 tracking-[-.01em]">
            Une question ? 👋
          </p>
          <p className="mt-1 text-[13px] leading-5 text-white/70">
            Notre équipe vous répond avec plaisir. Souhaitez-vous nous contacter ?
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="inline-flex min-h-10 flex-1 items-center justify-center rounded-full bg-white px-4 text-[13px] font-semibold text-ink transition hover:bg-white/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          Oui, me contacter
        </Link>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="inline-flex min-h-10 items-center justify-center rounded-full px-4 text-[13px] font-medium text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Plus tard
        </button>
      </div>
    </div>
  );
}
