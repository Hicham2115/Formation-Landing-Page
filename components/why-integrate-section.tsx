const benefits = [
  {
    title: "Pour vos patients",
    points: [
      "Une approche non invasive, sans aiguilles et sans médicament",
      "Un accompagnement sur des motifs fréquents : tabac, poids, alimentation compulsive, stress, sommeil et douleurs chroniques",
      "Un complément à vos soins existants",
    ],
  },
  {
    title: "Pour votre cabinet",
    points: [
      "Une nouvelle prestation à proposer après la formation",
      "Un appareil léger et portable, alimenté par piles, sans aménagement nécessaire",
      "Estimez le nombre de séances nécessaires pour amortir votre investissement avec notre simulateur",
    ],
  },
];

export default function WhyIntegrateSection() {
  return (
    <section className="border-y border-divider py-14 sm:py-20" aria-labelledby="why-integrate-title">
      <p className="mb-5 flex items-center gap-2 text-[11px] font-semibold tracking-[.16em] text-neutral-500">
        <span className="h-px w-5 bg-brand" /> POURQUOI L’INTÉGRER
      </p>
      <h2
        className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-.065em] sm:text-6xl"
        id="why-integrate-title"
      >
        Un nouveau service pour vos patients. Un nouvel actif pour votre cabinet.
      </h2>
      <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-10">
        {benefits.map((benefit) => (
          <article className="border-t border-divider pt-5" key={benefit.title}>
            <h3 className="text-xl font-medium tracking-[-.03em] sm:text-2xl">
              {benefit.title}
            </h3>
            <ul className="mt-5 space-y-4 text-[15px] leading-7 text-neutral-700">
              {benefit.points.map((point) => (
                <li className="flex gap-3" key={point}>
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
