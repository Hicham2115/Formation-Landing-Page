const details = [
  {
    title: "À qui s’adresse la formation ?",
    eyebrow: "PUBLIC CONCERNÉ",
    items: [
      "Thérapeutes, naturopathes, psychothérapeutes et coachs",
      "Médecins, infirmiers, kinésithérapeutes, orthoptistes et orthophonistes",
      "Personnes en reconversion avec un niveau Bac+2",
      "Praticiens en institut médical, Bac+2 minimum",
    ],
  },
  {
    title: "Les objectifs de la journée",
    eyebrow: "APPRENTISSAGES",
    items: [
      "Maîtriser les bases de la réflexologie auriculaire et du laser thérapeutique",
      "Localiser et stimuler les points réflexes auriculaires",
      "Découvrir les usages du laser présentés dans la brochure",
      "Réfléchir à l’intégration de la méthode en cabinet, spa, institut ou centre de soins",
    ],
  },
  {
    title: "Un cadre pour progresser",
    eyebrow: "ACCOMPAGNEMENT",
    items: [
      "Enseignement théorique et pratique",
      "Protocoles professionnels présentés pendant la formation",
      "Accompagnement post-formation et supervision annoncés par l’organisateur",
      "Certificat, réseau de praticiens et visibilité professionnelle annoncés dans la brochure",
    ],
  },
];

export default function CourseDetails() {
  return (
    <section className="border-y border-divider py-16 sm:py-20" aria-labelledby="course-details-title">
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="mb-5 flex items-center gap-2 text-[11px] font-semibold tracking-[.16em] text-neutral-500">
            <span className="h-px w-5 bg-brand" /> REPÈRES DE FORMATION
          </p>
          <h2
            className="max-w-[12ch] text-4xl font-medium leading-[1.02] tracking-[-.065em] sm:text-5xl"
            id="course-details-title"
          >
            Un cadre clair, des bases solides.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-neutral-600 sm:text-base">
            Les publics, objectifs et modalités ci-dessous sont ceux annoncés
            par l’organisateur dans la brochure de formation.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {details.map((detail) => (
            <article
              className="border-t border-divider pt-5"
              key={detail.eyebrow}
            >
              <p className="text-[10px] font-semibold tracking-[.15em] text-brand">
                {detail.eyebrow}
              </p>
              <h3 className="mt-3 text-lg font-medium leading-snug tracking-[-.035em]">
                {detail.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
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
      </div>

      <div className="mt-10 grid gap-3 border-t border-divider pt-5 text-xs leading-5 text-neutral-500 sm:grid-cols-2 sm:gap-8">
        <p>
          La brochure cite comme thèmes de protocoles le sevrage tabagique,
          l’alcool, le cannabis, la gestion du poids, l’alimentation compulsive,
          l’anxiété, la dépression et le stress. Elle mentionne aussi les douleurs chroniques,
          le sommeil, la sciatique, les douleurs dorsales, la fertilité, les
          nausées, l’arthrose, les acouphènes et d’autres sujets. Ces
          mentions décrivent le contenu du document et ne constituent pas une
          promesse de résultat médical.
        </p>
        <p>
          La brochure décrit la méthode comme naturelle, douce et sans
          aiguilles, et la
          présente comme reconnue par l’OMS. Cette affirmation et les montants
          de consultation indicatifs de 600 à 2&nbsp;500 DH cités dans le
          document sont à confirmer auprès de l’organisateur.
        </p>
      </div>
    </section>
  );
}
