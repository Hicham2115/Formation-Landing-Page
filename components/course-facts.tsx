"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

const facts = [
  {
    target: 1,
    format: (value: number) => String(Math.round(value)).padStart(2, "0"),
    accessibleValue: "01",
    unit: "",
    title: "Journée de formation",
    detail: "Un format intensif pour découvrir la méthode étape par étape.",
  },
  {
    target: 7,
    format: (value: number) => String(Math.round(value)).padStart(2, "0"),
    accessibleValue: "07",
    unit: "",
    title: "Modules progressifs",
    detail: "Des bases théoriques jusqu’aux protocoles présentés.",
  },
  {
    target: 695,
    format: (value: number) => `${Math.round((value * 675) / 695)}–${Math.round(value)}`,
    accessibleValue: "675–695 nm",
    unit: "nm",
    title: "Longueur d’onde",
    detail: "Valeur indiquée dans la brochure de la formation.",
  },
  {
    target: 2,
    format: (value: number) => String(Math.round(value)),
    accessibleValue: "2 ans",
    unit: "ans",
    title: "Garantie de l’appareil",
    detail: "Durée annoncée dans la brochure de l’organisateur.",
  },
];

function CountUp({
  target,
  format,
}: {
  target: number;
  format: (value: number) => string;
}) {
  const [progress, setProgress] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animationFrame = 0;
    let startedAt: number | undefined;
    let cancelled = false;
    let observer: IntersectionObserver | undefined;

    const animate = (time: number) => {
      if (cancelled) return;
      startedAt ??= time;
      const elapsed = Math.min((time - startedAt) / 1100, 1);
      const eased = 1 - (1 - elapsed) ** 3;
      setProgress(eased);

      if (elapsed < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const start = () => {
      animationFrame = requestAnimationFrame(animate);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animationFrame = requestAnimationFrame(() => setProgress(1));
    } else if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            observer?.disconnect();
            start();
          }
        },
        { threshold: 0.35 },
      );
      observer.observe(element);
    } else {
      start();
    }

    return () => {
      cancelled = true;
      observer?.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <span ref={elementRef}>{format(target * progress)}</span>;
}

export default function CourseFacts() {
  return (
    <section
      className="pb-20 pt-10 sm:pb-24 sm:pt-12 lg:pb-28 lg:pt-14"
      aria-label="La formation en chiffres"
    >
      <div className="mb-10 inline-flex items-center gap-2.5 rounded-full bg-secondary px-4 py-2.5 font-mono text-[10px] font-semibold tracking-[.12em] text-ink sm:mb-12">
        <span className="grid size-[15px] place-items-center rounded-[3px] bg-brand text-white">
          <Plus size={11} strokeWidth={2.5} />
        </span>
        LA FORMATION EN CHIFFRES
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-10">
        {facts.map((fact) => (
          <article key={fact.title}>
            <div className="flex h-20 items-end border-b border-dashed border-neutral-500 pb-3 sm:h-24 lg:h-28">
              <p
                aria-label={fact.accessibleValue}
                className={`whitespace-nowrap font-medium leading-[.9] tracking-[-.08em] ${
                  fact.title === "Longueur d’onde"
                    ? "text-[clamp(2rem,4vw,4rem)]"
                    : "text-[clamp(3rem,7vw,7rem)]"
                }`}
              >
                <CountUp target={fact.target} format={fact.format} />
                {fact.unit && (
                  <span className="ml-1 inline-block align-baseline text-[.38em] font-medium tracking-[-.04em]">
                    {fact.unit}
                  </span>
                )}
              </p>
            </div>
            <h2 className="mt-5 text-base font-semibold tracking-[-.035em] sm:text-lg">
              {fact.title}
            </h2>
            <p className="mt-2 max-w-[280px] text-sm leading-6 text-neutral-600">
              {fact.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
