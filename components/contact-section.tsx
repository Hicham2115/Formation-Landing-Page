import { ArrowUpRight } from "lucide-react";
import Label from "@/components/section-label";
import { phone } from "@/lib/site";

export default function ContactSection() {
  return (
    <>
      <section className="mt-16 mb-8 flex flex-col justify-between gap-8 overflow-hidden rounded-[26px] bg-ink px-7 py-10 text-white sm:mt-24 sm:mb-10 sm:flex-row sm:items-center sm:px-14 sm:py-12">
        <div className="max-w-3xl">
          <Label>PLACES LIMITÉES</Label>
          <h2 className="text-4xl font-medium leading-[1.02] tracking-[-.065em] sm:text-6xl">
            Prêt·e à découvrir le laser auriculaire&nbsp;?
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
            Cette journée s’adresse en priorité aux médecins et professionnels
            de santé qui souhaitent explorer cet outil pour accompagner leurs
            patients. Contactez l’équipe pour connaître les disponibilités.
          </p>
          <a
            className="group mt-8 inline-flex min-h-14 items-center gap-4 rounded-full bg-brand py-2 pl-6 pr-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
            href={`tel:${phone}`}
          >
            Réserver ma place
            <span className="grid size-10 place-items-center rounded-full bg-white/15 transition-colors group-hover:bg-brand/10">
              <ArrowUpRight size={17} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
            </span>
          </a>
        </div>
        <div className="relative flex size-36 shrink-0 flex-col items-center justify-center rounded-full border border-white/20 text-center before:absolute before:inset-2 before:rounded-full before:border before:border-white/10 sm:size-44">
          <span className="text-5xl font-medium tracking-[-.08em] sm:text-6xl">31</span>
          <span className="mt-1 text-[11px] font-medium tracking-[.2em] text-white/80">OCTOBRE</span>
          <span className="mt-2 text-[8px] tracking-[.2em] text-white/50">
            MOHAMMEDIA
          </span>
        </div>
      </section>
    </>
  );
}
