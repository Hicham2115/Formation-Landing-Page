"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Label from "@/components/section-label";

const companies: { name: string; logo: string; iconOnly?: boolean }[] = [
  { name: "Opel", logo: "opel-highres.png" },
  { name: "Ford", logo: "ford-highres.png" },
  { name: "Pfizer", logo: "pfizer-highres.png" },
  { name: "Medtronic", logo: "medtronic-highres.png" },
  { name: "Alpine BioMed", logo: "alpine-biomed.png" },
  { name: "Gérés", logo: "geres.png" },
  { name: "Faraneco", logo: "faraneco.jpeg" },
  { name: "Hemolab", logo: "hemolab.png" },
  { name: "SAHAM Assurance", logo: "saham-assurance.png" },
  { name: "Esnapharm Laboratoire", logo: "esnapharm.png" },
  { name: "Total", logo: "total.png" },
  { name: "Meksa Industries", logo: "meksa.gif" },
  { name: "Elf", logo: "elf.jpg" },
  { name: "Nissan", logo: "nissan.svg", iconOnly: true },
  { name: "ESCM", logo: "escm.jpg" },
  { name: "Toyota", logo: "toyota.png" },
  { name: "Collège LaSalle", logo: "college-lasalle.png" },
  { name: "Roche", logo: "roche.png" },
];

export default function CompanyReferences() {
  const logoRail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = logoRail.current;
    if (!rail || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let direction: -1 | 1 = 1;
    const interval = window.setInterval(() => {
      if (
        document.hidden ||
        rail.matches(":hover") ||
        rail.matches(":focus-within")
      ) {
        return;
      }

      const maxScroll = rail.scrollWidth - rail.clientWidth;
      if (maxScroll <= 0) return;

      if (direction === 1 && rail.scrollLeft >= maxScroll - 2) direction = -1;
      if (direction === -1 && rail.scrollLeft <= 2) direction = 1;

      const firstLogo = rail.firstElementChild as HTMLElement | null;
      if (!firstLogo) return;

      const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 0;
      rail.scrollBy({
        left: (firstLogo.getBoundingClientRect().width + gap) * direction,
        behavior: "smooth",
      });
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  function moveLogos(direction: -1 | 1) {
    const rail = logoRail.current;
    if (!rail) return;

    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "auto"
      : "smooth";
    rail.scrollBy({ left: rail.clientWidth * 0.75 * direction, behavior });
  }

  return (
    <section
      aria-label="Entreprises accompagnées en communication par Siham Boulla"
      className="overflow-hidden border-y border-dashed border-divider py-6 sm:py-8"
    >
      <div className="grid items-center gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
        <div>
          <Label>ENTREPRISES ACCOMPAGNÉES EN COMMUNICATION</Label>
          <p className="max-w-[260px] text-sm leading-6 text-black">
            Quelques organisations accompagnées en communication et relations
            presse au fil de son parcours.
          </p>
        </div>
        <div className="min-w-0">
          <div className="mb-3 flex justify-end gap-2">
            <button
              type="button"
              aria-label="Voir les références précédentes"
              onClick={() => moveLogos(-1)}
              className="grid size-9 place-items-center rounded-full border border-divider text-ink transition hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              type="button"
              aria-label="Voir les références suivantes"
              onClick={() => moveLogos(1)}
              className="grid size-9 place-items-center rounded-full border border-divider text-ink transition hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <ChevronRight size={17} />
            </button>
          </div>
          <div
            ref={logoRail}
            role="region"
            aria-label="Logos des références professionnelles"
            tabIndex={0}
            className="flex snap-x snap-mandatory items-center gap-10 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-14"
          >
            {companies.map((company) => (
              <div
                key={company.name}
                className={`flex h-12 w-28 shrink-0 snap-start items-center justify-center sm:w-32 ${
                  company.iconOnly ? "gap-2" : ""
                }`}
              >
                <span
                  className={`relative h-full ${
                    company.iconOnly ? "w-7 shrink-0" : "w-full"
                  }`}
                >
                  <Image
                    src={`/images/company-references/${company.logo}`}
                    alt={company.iconOnly ? "" : company.name}
                    fill
                    unoptimized
                    sizes="128px"
                    className="object-contain"
                  />
                </span>
                {company.iconOnly && (
                  <span className="text-xs font-semibold tracking-[-.03em] text-ink">
                    {company.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
