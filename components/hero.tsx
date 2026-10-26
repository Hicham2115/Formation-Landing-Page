import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { phone } from "@/lib/site";

export default function Hero() {
  return (
    <>
      <section
        className="grid overflow-hidden rounded-[26px] bg-ink text-white lg:min-h-[620px] lg:grid-cols-[1.05fr_.95fr]"
        id="top"
      >
        <div className="flex flex-col justify-center px-7 py-12 motion-safe:animate-[soft-rise_.75s_cubic-bezier(.22,.8,.2,1)_both] sm:px-12 lg:px-16 lg:py-16">
          <p className="mb-8 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.18em] text-white/65">
            <span className="h-2 w-2 rounded-full bg-brand motion-safe:animate-[pulse-dot_2.2s_ease-in-out_infinite]" /> Formation
            professionnelle · Mohammedia
          </p>
          <h1 className="max-w-[650px] text-[clamp(2.6rem,5.5vw,5.6rem)] font-medium leading-[.96] tracking-[-.075em]">
            Un nouvel outil
            <br />
            pour
            <br />
            <em className="not-italic text-brand">accompagner</em>
            <br />
            le changement.
          </h1>
          <p className="mt-7 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
            Découvrez la réflexologie auriculaire par bio-stimulation laser,
            appliquée aux addictions et aux états émotionnels.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-ink"
              href={`tel:${phone}`}
            >
              Réserver ma place <ArrowUpRight size={15} />
            </a>
            <a
              className="inline-flex items-center gap-2 text-xs text-white/80 transition hover:text-white"
              href="#programme"
            >
              Découvrir le programme <ArrowDownRight size={15} />
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-5 text-[11px] text-white/75">
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={14} /> Samedi 31 octobre 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} /> Mohammedia, Maroc
            </span>
          </div>
        </div>
        <div className="group relative min-h-[390px] overflow-hidden motion-safe:animate-[soft-rise_.85s_cubic-bezier(.22,.8,.2,1)_both] motion-safe:[animation-delay:120ms] lg:min-h-full">
          <Image
            src="/images/siham-boulla.jpg"
            alt="Siham Boulla, formatrice, dans son cabinet"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-[center_38%] transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transition-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5" />
          <div className="absolute bottom-7 left-7 text-white sm:bottom-9 sm:left-9">
            <span className="text-[10px] uppercase tracking-[.18em] text-white/70">
              Avec
            </span>
            <strong className="mt-1 block text-xl font-medium tracking-tight">
              Siham Boulla
            </strong>
            <span className="mt-1 block text-xs text-white/70">
              Psychothérapeute & formatrice
            </span>
          </div>
          <span className="absolute right-7 top-7 rounded-full border border-white/40 px-3 py-2 text-[9px] tracking-[.13em] text-white">
            01 / 07 MODULES
          </span>
        </div>
      </section>

      <section
        className="grid grid-cols-2 border-b border-divider py-7 sm:grid-cols-4 sm:py-9"
        aria-label="Informations clés"
      >
        {[
          ["FORMAT", "1 journée"],
          ["DATE", "31.10.2026"],
          ["LIEU", "Mohammedia"],
          ["INVESTISSEMENT", "22 900 DH HT"],
        ].map(([label, value]) => (
          <div className="px-3 py-2 sm:px-6" key={label}>
            <span className="block text-[9px] font-semibold tracking-[.15em] text-neutral-500">
              {label}
            </span>
            <strong className="mt-2 block text-sm font-medium sm:text-base">
              {value}
            </strong>
          </div>
        ))}
      </section>
    </>
  );
}
