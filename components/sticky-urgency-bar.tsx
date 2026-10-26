"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SPOTS_LEFT } from "@/lib/site";

const closingTime = Date.parse("2026-10-30T18:00:00+01:00");

function countdownParts(milliseconds: number) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export default function StickyUrgencyBar() {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setRemaining(Math.max(0, closingTime - Date.now()));
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const complete = SPOTS_LEFT === 0 || remaining === 0;
  const time = remaining === null ? null : countdownParts(remaining);

  return (
    <div className="sticky top-0 z-50 bg-brand px-3 py-2 text-white shadow-sm sm:px-5">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-xs font-semibold sm:text-sm">
        {complete ? (
          <>
            <span>
              Session du 31 octobre complète — inscrivez-vous sur la liste
              d’attente de la prochaine session
            </span>
            <a
              className="inline-flex items-center gap-1 underline underline-offset-2"
              href="/?intent=waitlist#contact-form"
            >
              Liste d’attente <ArrowUpRight size={14} />
            </a>
          </>
        ) : (
          <>
            <span>
              Inscriptions closes dans&nbsp;
              {time ? (
                <span className="font-mono tabular-nums">
                  {String(time.days).padStart(2, "0")}j {String(time.hours).padStart(2, "0")}h {String(time.minutes).padStart(2, "0")}m {String(time.seconds).padStart(2, "0")}s
                </span>
              ) : (
                <span>le 30 octobre à 18 h</span>
              )}
              <span className="mx-2 text-white/60">·</span>
              Plus que {SPOTS_LEFT} places pour compléter le groupe
            </span>
            <a
              className="inline-flex items-center gap-1 underline underline-offset-2"
              href="#contact-form"
            >
              Réserver <ArrowUpRight size={14} />
            </a>
          </>
        )}
      </div>
    </div>
  );
}
