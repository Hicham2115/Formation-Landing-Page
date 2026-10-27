import { ArrowUpRight } from "lucide-react";
import HeroVideo from "@/components/hero-video";
import { SPOTS_LEFT } from "@/lib/site";

export default function Hero() {
  return (
    <>
      <section
        className="grid overflow-hidden rounded-[26px] bg-ink text-white lg:min-h-[620px] lg:grid-cols-[1.05fr_.95fr]"
        id="top"
        data-no-reveal
      >
        <div className="flex min-w-0 flex-col justify-center px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
          <p className="mb-8 inline-flex w-fit max-w-full flex-nowrap items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-white/[.04] px-2.5 py-2 text-[8px] font-bold uppercase tracking-[.08em] text-white sm:gap-2.5 sm:px-3.5 sm:text-[9px] sm:tracking-[.2em] motion-safe:animate-[soft-rise_.65s_cubic-bezier(.22,.8,.2,1)_both] motion-safe:[animation-delay:80ms]">
            <span className="size-1.5 rounded-full  bg-brand motion-safe:animate-[pulse-dot_2.2s_ease-in-out_infinite]" />
            <span className="sm:hidden">
              Formation pro · Mohammedia · 31 oct.
            </span>
            <span className="hidden sm:inline">
              Formation professionnelle · Mohammedia · Samedi 31 octobre 2026
            </span>
          </p>
          <h1 className="max-w-[650px] text-[clamp(2rem,4.8vw,5.3rem)] font-medium leading-[.96] tracking-[-.075em]">
            <span className="block overflow-hidden pb-[.08em]">
              <span className="inline-block whitespace-nowrap motion-safe:animate-[hero-text-in_.85s_cubic-bezier(.22,.8,.2,1)_both] motion-safe:[animation-delay:160ms]">
                Ajoutez le laser
              </span>
            </span>
            <span className="block overflow-hidden pb-[.08em]">
              <span className="inline-block pr-2 font-normal  text-brand motion-safe:animate-[hero-text-in_.85s_cubic-bezier(.22,.8,.2,1)_both] motion-safe:[animation-delay:300ms]">
                à votre cabinet.
              </span>
            </span>
          </h1>
          <p className="mt-7 max-w-lg text-[15px] leading-7 text-white/90 motion-safe:animate-[soft-rise_.7s_cubic-bezier(.22,.8,.2,1)_both] motion-safe:[animation-delay:540ms] sm:text-base">
            Une journée pour maîtriser une approche sans aiguilles qui
            accompagne vos patients (tabac, poids, stress, sommeil, douleurs).
            La formation comprend un laser professionnel de classe 3R.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 motion-safe:animate-[soft-rise_.7s_cubic-bezier(.22,.8,.2,1)_both] motion-safe:[animation-delay:640ms]">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3.5 text-sm font-semibold duration-300 text-white transition hover:bg-white hover:text-ink"
              href="#contact-form"
            >
              Réserver ma place <ArrowUpRight size={15} />
            </a>
            <a
              className="inline-flex items-center gap-2 text-sm text-white transition duration-300 hover:text-white/80"
              href="#rentabilite"
            >
              Calculer ma rentabilité <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="group relative min-h-[390px] min-w-0 overflow-hidden motion-safe:animate-[soft-rise_.85s_cubic-bezier(.22,.8,.2,1)_both] motion-safe:[animation-delay:120ms] lg:min-h-full">
          <HeroVideo />
        </div>
      </section>

      <section
        className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-divider bg-divider sm:grid-cols-3 lg:grid-cols-5"
        aria-label="Informations clés"
      >
        {[
          ["FORMAT", "1 journée"],
          ["DATE", "31.10.2026"],
          ["LIEU", "Mohammedia"],
          ["INVESTISSEMENT", "22 900 DH HT · laser inclus"],
          ["PLACES", `${SPOTS_LEFT} restantes`],
        ].map(([label, value]) => (
          <div className="bg-[#fafafa] px-4 py-5 sm:px-6 sm:py-6" key={label}>
            <span className="flex items-center gap-2 text-[9px] font-semibold tracking-[.16em] text-neutral-500">
              <span className="size-1.5 rounded-full bg-brand" />
              {label}
            </span>
            <strong className="mt-3 block text-sm font-semibold leading-5 tracking-[-.025em] sm:text-lg">
              {value}
            </strong>
          </div>
        ))}
      </section>
    </>
  );
}
