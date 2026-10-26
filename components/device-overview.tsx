const specifications = [
  ["Type d’appareil", "Laser manuel de classe 3R"],
  ["Protection", "Alimentation interne"],
  ["Laser", "Diode à émission continue"],
  ["Puissance nominale de sortie", "50 mW ± 10 %"],
  ["Puissance absorbée", "360 mW"],
  ["Longueur d’onde", "675 à 695 nm"],
  ["Densité de puissance", "Environ 1 J/cm²"],
  ["Tension", "4,5 V DC"],
  ["Alimentation", "3 piles alcalines AAA de 1,5 V (LR03)"],
  ["Fonctionnement", "Continu, arrêt par bouton-poussoir"],
  ["Tête", "Acier inoxydable sans nickel"],
  ["Tube", "Aluminium anodisé"],
  ["Normes", "EN 60601 · EN 60825 · EN 40411 · EN 980 · EN 14971"],
  ["Garantie", "2 ans à compter de la date d’achat"],
];

const applications = [
  "Biostimulation",
  "Laserpuncture : stimulation laser de points d’acupuncture",
  "Acupuncture traditionnelle",
  "Microsystèmes, dont réflexologie et auriculothérapie",
  "Thèmes présentés : stress cellulaire et circulation sanguine",
];

export default function DeviceOverview() {
  return (
    <section
      className="border-y border-divider py-14 sm:py-16 lg:py-20"
      aria-labelledby="device-overview-title"
    >
      <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
        <div>
          <p className="mb-5 flex items-center gap-2 text-[11px] font-semibold tracking-[.16em] text-neutral-500">
            <span className="h-px w-5 bg-brand" /> APPAREIL & APPLICATIONS
          </p>
          <h2
            className="max-w-[12ch] text-4xl font-medium leading-[1.02] tracking-[-.065em] sm:text-5xl lg:text-6xl"
            id="device-overview-title"
          >
            Découvrez l’outil au cœur de la formation.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-neutral-600">
            Une présentation claire des usages abordés et des caractéristiques
            du laser auriculaire utilisé pendant la journée.
          </p>
          <div className="mt-8 rounded-2xl bg-soft p-5 sm:p-6">
            <p className="text-[10px] font-semibold tracking-[.15em] text-brand">
              CHAMPS D’APPLICATION ABORDÉS
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-ink">
              {applications.map((application) => (
                <li className="flex gap-3" key={application}>
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                  />
                  {application}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs leading-5 text-neutral-500">
            Les applications sont présentées à des fins de formation. Toute
            utilisation auprès d’un patient relève de l’évaluation et de la
            responsabilité du professionnel de santé.
          </p>
        </div>

        <div className="rounded-[22px] border border-divider bg-white p-5 sm:p-7 lg:p-8">
          <div className="flex items-end justify-between gap-4 border-b border-divider pb-5">
            <div>
              <p className="text-[10px] font-semibold tracking-[.15em] text-brand">
                FICHE TECHNIQUE
              </p>
              <h3 className="mt-2 text-xl font-medium tracking-[-.04em] sm:text-2xl">
                Spécifications de l’appareil
              </h3>
            </div>
            <span className="hidden rounded-full bg-soft px-3 py-2 text-[10px] font-semibold text-ink sm:inline-flex">
              CLASSE 3R
            </span>
          </div>
          <dl className="mt-2 grid gap-x-8 sm:grid-cols-2">
            {specifications.map(([label, value]) => (
              <div
                className="grid grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] gap-3 border-b border-divider py-3"
                key={label}
              >
                <dt className="text-xs leading-5 text-neutral-500">{label}</dt>
                <dd className="text-xs font-medium leading-5 text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
