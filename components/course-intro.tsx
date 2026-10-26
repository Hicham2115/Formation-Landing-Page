import { ArrowRight, Plus } from "lucide-react";

export default function CourseIntro() {
  return (
    <section
      className="grid items-end gap-8 pb-12 pt-20 sm:pb-14 sm:pt-24 lg:grid-cols-[1.2fr_.8fr] lg:gap-12 lg:pb-16 lg:pt-28"
      id="formation"
    >
      <div>
        <div className="mb-7 inline-flex items-center gap-2.5 rounded-full bg-secondary px-4 py-2.5 font-mono text-[10px] font-semibold tracking-[.12em] text-ink">
          <span className="grid size-[15px] place-items-center rounded-[3px] bg-brand text-white">
            <Plus size={11} strokeWidth={2.5} />
          </span>
          LA FORMATION
        </div>
        <h2 className="max-w-[850px] text-[clamp(2.5rem,5.8vw,5.25rem)] font-medium leading-[.98] tracking-[-.075em]">
          Apprendre le laser.
          <br />
          <span className="text-neutral-400">Enrichir</span> sa pratique.
        </h2>
      </div>

      <div className="flex flex-col items-start lg:items-end lg:pb-2 lg:text-right">
        <p className="max-w-md text-base leading-7 text-neutral-600 sm:text-lg">
          Une journée pour les médecins et professionnels de santé qui
          souhaitent découvrir les bases de l’auriculothérapie et de la
          bio-stimulation laser.
        </p>
        <a
          className="group mt-6 inline-flex items-center gap-3 text-sm font-semibold tracking-[-.02em] transition-colors hover:text-brand"
          href="#programme"
        >
          Explorer le programme
          <span className="grid size-10 place-items-center rounded-full border border-divider transition duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
            <ArrowRight size={17} />
          </span>
        </a>
      </div>
    </section>
  );
}
