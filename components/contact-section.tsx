import { ArrowUpRight } from "lucide-react";
import Label from "@/components/section-label";
import { SPOTS_LEFT } from "@/lib/site";

export default function ContactSection() {
  return (
    <>
      <section className="mt-16 mb-8 grid gap-10 overflow-hidden rounded-[26px] bg-ink px-7 py-10 text-white sm:mt-24 sm:mb-10 sm:grid-cols-[minmax(0,1fr)_12rem] sm:items-center sm:gap-12 sm:px-14 sm:py-14 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16 lg:px-20 lg:py-16">
        <div className="min-w-0">
          <div className="mb-5 flex items-center gap-2 text-[12px] font-semibold tracking-[.16em] text-white/60">
            <span className="h-px w-5 bg-brand" />
            PLUS QUE {SPOTS_LEFT} PLACES
          </div>
          <h2 className="max-w-5xl text-4xl font-medium leading-[1.02] tracking-[-.065em] sm:text-6xl lg:text-7xl">
            Plus que {SPOTS_LEFT} places pour compléter le groupe du 31 octobre.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-lg sm:leading-8">
            Intégrez le laser auriculaire à votre pratique et préparez une
            nouvelle prestation pour vos patients.
          </p>
          <a
            className="group mt-8 inline-flex min-h-14 items-center gap-4 rounded-full bg-brand py-2 pl-6 pr-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
            href="#contact-form"
          >
            Réserver ma place
            <span className="grid size-10 place-items-center rounded-full bg-white/15 transition-colors group-hover:bg-brand/10">
              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              />
            </span>
          </a>
        </div>
        <div className="relative flex size-36 shrink-0 flex-col items-center justify-center justify-self-center rounded-full border border-white/20 text-center before:absolute before:inset-2 before:rounded-full before:border before:border-white/10 sm:size-44 lg:size-52">
          <span className="text-5xl font-medium tracking-[-.08em] sm:text-6xl lg:text-7xl">
            31
          </span>
          <span className="mt-1 text-[11px] font-medium tracking-[.2em] text-white/80">
            OCTOBRE
          </span>
          <span className="mt-2 text-[8px] tracking-[.2em] text-white/50">
            MOHAMMEDIA
          </span>
        </div>
      </section>
    </>
  );
}
