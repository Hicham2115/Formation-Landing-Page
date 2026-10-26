import { ArrowUpRight } from "lucide-react";
import Label from "@/components/section-label";
import { phone } from "@/lib/site";

export default function ContactSection() {
  return (
    <>
      <section className="my-16 flex flex-col justify-between gap-8 overflow-hidden rounded-[26px] bg-ink px-7 py-12 text-white sm:my-24 sm:flex-row sm:items-center sm:px-14 sm:py-16">
        <div className="max-w-2xl">
          <Label>PLACES LIMITÉES</Label>
          <h2 className="text-4xl font-medium leading-[1.02] tracking-[-.065em] sm:text-6xl">
            Prêt·e à découvrir une nouvelle approche&nbsp;?
          </h2>
          <p className="mt-5 text-sm leading-6 text-white/60">
            Contactez l’équipe pour connaître les disponibilités de la session
            du 31 octobre.
          </p>
          <a
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3.5 text-xs font-semibold text-white transition hover:bg-white hover:text-ink"
            href={`tel:${phone}`}
          >
            Réserver ma place <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="flex h-36 w-36 shrink-0 flex-col items-center justify-center rounded-full border border-white/25 text-center sm:h-44 sm:w-44">
          <span className="text-5xl font-medium tracking-[-.08em]">31</span>
          <span className="mt-1 text-xs tracking-[.18em]">OCTOBRE</span>
          <span className="mt-2 text-[8px] tracking-[.18em] text-white/55">
            MOHAMMEDIA
          </span>
        </div>
      </section>
    </>
  );
}
