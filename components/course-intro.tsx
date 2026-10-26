import { ArrowDownRight } from "lucide-react";
import Label from "@/components/section-label";

export default function CourseIntro() {
  return (
    <>
      <section
        className="grid gap-9 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16"
        id="formation"
      >
        <div>
          <Label>LA FORMATION</Label>
          <h2 className="max-w-xl text-4xl font-medium leading-[1.04] tracking-[-.06em] sm:text-6xl">
            Une méthode.
            <br />
            <span className="text-neutral-400">Un cadre.</span> De nouvelles
            perspectives.
          </h2>
        </div>
        <div className="flex flex-col items-start justify-center lg:pl-10">
          <p className="max-w-xl text-lg leading-8 tracking-[-.02em]">
            Une journée immersive pour comprendre les bases de
            l’auriculothérapie et découvrir l’utilisation du laser dans
            l’accompagnement des addictions.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600">
            Le parcours alterne repères théoriques, anatomie de l’oreille,
            localisation des points neuro-réflexes et présentation de
            protocoles. Une approche structurée, conçue pour enrichir votre
            pratique professionnelle.
          </p>
          <a
            className="mt-7 grid h-11 w-11 place-items-center rounded-full border border-divider transition hover:border-brand hover:text-brand"
            href="#programme"
            aria-label="Voir le programme"
          >
            <ArrowDownRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
