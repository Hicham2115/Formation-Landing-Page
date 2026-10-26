import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { phone } from "@/lib/site";

export default function Hero() {
  return (
    <>
      <section
        className="grid overflow-hidden rounded-[26px] bg-ink text-white lg:min-h-[620px] lg:grid-cols-[1.05fr_.95fr]"
        id="top"
        data-no-reveal
      >
        <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
          <p className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/[.04] px-3.5 py-2 text-[9px] font-bold uppercase tracking-[.2em] text-white motion-safe:animate-[soft-rise_.65s_cubic-bezier(.22,.8,.2,1)_both] motion-safe:[animation-delay:80ms]">
            <span className="size-1.5 rounded-full  bg-brand motion-safe:animate-[pulse-dot_2.2s_ease-in-out_infinite]" />
            Formation pour les professionnels de santé{" "}
            <span className="text-white/30">·</span> Mohammedia
          </p>
          <h1 className="max-w-[650px] text-[clamp(2.2rem,4.8vw,5.3rem)] font-medium leading-[.96] tracking-[-.075em]">
            <span className="block overflow-hidden pb-[.08em]">
              <span className="inline-block whitespace-nowrap motion-safe:animate-[hero-text-in_.85s_cubic-bezier(.22,.8,.2,1)_both] motion-safe:[animation-delay:160ms]">
                Apprenez le
              </span>
            </span>
            <span className="block overflow-hidden pb-[.08em]">
              <span className="inline-block pr-2 font-normal  text-brand motion-safe:animate-[hero-text-in_.85s_cubic-bezier(.22,.8,.2,1)_both] motion-safe:[animation-delay:300ms]">
                laser auriculaire.
              </span>
            </span>
          </h1>
          <p className="mt-7 max-w-lg text-sm leading-7 text-white/90 motion-safe:animate-[soft-rise_.7s_cubic-bezier(.22,.8,.2,1)_both] motion-safe:[animation-delay:540ms] sm:text-base">
            Une journée pour les médecins et professionnels de santé : découvrez
            les bases de la réflexologie auriculaire par bio-stimulation laser,
            l’appareil et les protocoles présentés pour accompagner vos
            patients.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 motion-safe:animate-[soft-rise_.7s_cubic-bezier(.22,.8,.2,1)_both] motion-safe:[animation-delay:640ms]">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3.5 text-sm font-semibold duration-300 text-white transition hover:bg-white hover:text-ink"
              href={`tel:${phone}`}
            >
              Réserver ma place <ArrowUpRight size={15} />
            </a>
            <a
              className="inline-flex items-center gap-2 text-sm  text-white transition hover:text-white/80 duration-300"
              href="#programme"
            >
              Découvrir le programme <ArrowDownRight size={15} />
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-5 text-[13px] text-white motion-safe:animate-[soft-rise_.7s_cubic-bezier(.22,.8,.2,1)_both] motion-safe:[animation-delay:740ms]">
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
            src="/images/siham-boulla-hero.jpg"
            alt="Siham Boulla, formatrice, dans son cabinet"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-[center_38%] transition-transform duration-700  motion-reduce:transition-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5" />
          <div className="absolute bottom-7 left-7 text-white sm:bottom-9 sm:left-9">
            <span className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.24em] text-white/75">
              <span className="size-1.5 rounded-full bg-brand" /> Avec
            </span>
            <strong className="mt-2 block text-2xl font-semibold tracking-[-.045em] drop-shadow-sm sm:text-[28px]">
              Siham Boulla
            </strong>
            <span className="mt-2 inline-flex items-center gap-2 text-xs font-medium tracking-[.025em] text-white/80 sm:text-sm">
              <span className="h-px w-5 bg-brand" />
              Psychothérapeute & formatrice
            </span>
          </div>
        </div>
      </section>

      <section
        className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-divider bg-divider sm:grid-cols-4"
        aria-label="Informations clés"
      >
        {[
          ["FORMAT", "1 journée"],
          ["DATE", "31.10.2026"],
          ["LIEU", "Mohammedia"],
          ["INVESTISSEMENT", "22 900 DH HT"],
        ].map(([label, value]) => (
          <div className="bg-[#fafafa] px-4 py-5 sm:px-6 sm:py-6" key={label}>
            <span className="flex items-center gap-2 text-[9px] font-semibold tracking-[.16em] text-neutral-500">
              <span className="size-1.5 rounded-full bg-brand" />
              {label}
            </span>
            <strong className="mt-3 block text-base font-semibold tracking-[-.025em] sm:text-lg">
              {value}
            </strong>
          </div>
        ))}
      </section>
    </>
  );
}
