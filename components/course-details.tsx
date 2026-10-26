const details = [
  {
    title: "À qui s’adresse la formation ?",
    eyebrow: "PUBLIC CONCERNÉ",
    items: [
      "Médecins et professionnels de santé : infirmiers, kinésithérapeutes, orthoptistes et orthophonistes",
      "Aussi ouverte aux thérapeutes, naturopathes, psychothérapeutes, coachs et reconversion Bac+2; institut médical Bac+2 minimum",
    ],
  },
  {
    title: "Les objectifs de la journée",
    eyebrow: "APPRENTISSAGES",
    items: [
      "Comprendre les bases et localiser les points réflexes auriculaires",
      "Découvrir le laser et son intégration en cabinet, spa, institut ou centre de soins",
    ],
  },
  {
    title: "Un cadre pour progresser",
    eyebrow: "ACCOMPAGNEMENT",
    items: [
      "Une journée structurée entre théorie, pratique et protocoles",
      "Certificat, supervision, suivi après la formation et réseau professionnel",
    ],
  },
];

export default function CourseDetails() {
  return (
    <section
      className="border-y border-divider py-14 sm:py-16 lg:py-20"
      id="course-details"
      aria-labelledby="course-details-title"
    >
      <div className="grid items-end gap-6 lg:grid-cols-[1fr_.8fr] lg:gap-14">
        <div>
          <p className="mb-5 flex items-center gap-2 text-[11px] font-semibold tracking-[.16em] text-neutral-500">
            <span className="h-px w-5 bg-brand" /> REPÈRES DE FORMATION
          </p>
          <h2
            className="max-w-[15ch] text-4xl font-medium leading-[1.02] tracking-[-.065em] sm:text-5xl lg:text-6xl"
            id="course-details-title"
          >
            Un cadre clair, des bases solides.
          </h2>
        </div>
        <p className="max-w-lg text-[15px] leading-7 text-ink sm:text-base lg:justify-self-end">
          Une journée pour découvrir l’appareil et les repères de
          l’auriculothérapie laser, puis explorer son intégration à
          l’accompagnement des patients.
        </p>
      </div>

      <div className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-x-10">
        {details.map((detail) => (
          <article className="border-t border-divider pt-5" key={detail.eyebrow}>
            <p className="text-[10px] font-semibold tracking-[.15em] text-brand">
              {detail.eyebrow}
            </p>
            <h3 className="mt-3 text-lg font-medium leading-snug tracking-[-.035em]">
              {detail.title}
            </h3>
            <ul className="mt-4 space-y-3 text-[15px] leading-7 text-ink">
              {detail.items.map((item) => (
                <li className="flex gap-2.5" key={item}>
                  <span
                    aria-hidden="true"
                    className="mt-[9px] size-1.5 shrink-0 rounded-full bg-brand"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <details className="group mt-10 rounded-2xl bg-soft px-5 py-4 sm:mt-12 sm:px-6">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium marker:hidden [&::-webkit-details-marker]:hidden">
          Thèmes abordés pendant la formation
          <span className="text-lg text-brand transition-transform group-open:rotate-45 motion-reduce:transition-none">
            +
          </span>
        </summary>
        <div className="mt-4 grid gap-4 border-t border-divider pt-4 text-sm leading-6 text-ink sm:grid-cols-2 sm:gap-8">
          <p>
            Exemples de protocoles étudiés : sevrage tabagique, alcool,
            cannabis, gestion du poids, alimentation compulsive, anxiété,
            dépression et stress. La formation aborde aussi les douleurs
            chroniques et dorsales, les troubles du sommeil, la sciatique, la
            fertilité, les nausées, l’arthrose et les acouphènes.
          </p>
          <p>
            La formation présente une approche sans aiguilles et l’utilisation
            du laser auriculaire. Les décisions de prise en charge restent
            adaptées à chaque patient et relèvent du professionnel de santé.
          </p>
        </div>
      </details>
    </section>
  );
}
