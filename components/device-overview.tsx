import Image from "next/image";

const specifications = [
  ["Type d’appareil", "Laser manuel de classe 3R"],
  ["Protection", "Alimentation interne"],
  ["Laser", "Diode à émission continue"],
  ["Puissance nominale de sortie", "50 mW ± 10 %"],
  ["Puissance absorbée", "360 mW"],
  ["Longueur d’onde", "675 à 695 nm"],
  ["Tension", "4,5 V DC"],
  ["Alimentation", "3 piles alcalines AAA de 1,5 V (LR03)"],
  ["Fonctionnement", "Continu, arrêt par bouton-poussoir"],
  ["Tête", "Acier inoxydable sans nickel"],
  ["Tube", "Aluminium anodisé"],
  ["Normes", "EN 60601 · EN 60825 · EN ISO 14971"],
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
      className="my-16 overflow-hidden rounded-[28px] bg-[#f3f3f1] px-5 py-8 sm:my-20 sm:px-8 sm:py-10 lg:my-24 lg:px-12 lg:py-14"
      aria-labelledby="device-overview-title"
    >
      <div className="mb-8 grid gap-6 border-b border-black/10 pb-7 lg:grid-cols-[1fr_.7fr] lg:items-end lg:gap-12 lg:pb-9">
        <div>
          <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold tracking-[.16em] text-neutral-500">
            <span className="h-px w-5 bg-brand" /> APPAREIL & APPLICATIONS
          </p>
          <h2
            className="max-w-[17ch] text-4xl font-medium leading-[1.02] tracking-[-.065em] sm:text-5xl lg:text-[3.5rem]"
            id="device-overview-title"
          >
            Le laser, ses usages et ses caractéristiques.
          </h2>
        </div>
        <p className="max-w-lg text-[15px] leading-7 text-neutral-600 lg:justify-self-end">
          Repères concrets sur le dispositif présenté pendant la journée et les
          applications intégrées au programme.
        </p>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4" aria-label="Détails de l’appareil laser Addic">
        {[
          ["ADDICS LASER1.png", "Détail du manche du laser Addic tenu en main", "LE MANCHE"],
          ["ADDICS LASER2.png", "Vue du laser Addic tenu par la formatrice", "LA PRISE EN MAIN"],
          ["ADDICS LASER4.png", "Laser Addic guidé vers un point de l’oreille", "LE POSITIONNEMENT"],
          ["ADDICS LASER9.png", "Gros plan sur l’appareil laser Addic", "L’APPAREIL"],
        ].map(([file, alt, caption]) => (
          <figure className="relative h-40 overflow-hidden rounded-[16px] bg-white sm:h-56 lg:h-64" key={file}>
            <Image
              src={`/transfer-01a17ab0/${file.replaceAll(" ", "%20")}`}
              alt={alt}
              fill
              sizes="(max-width: 640px) 33vw, 30vw"
              className="object-cover object-center"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-3 pb-3 pt-8 text-[9px] font-semibold tracking-[.14em] text-white sm:px-4 sm:pb-4">
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[.72fr_1.28fr] lg:gap-6">
        <div className="relative overflow-hidden rounded-[22px] bg-ink p-6 text-white sm:p-8">
          <div aria-hidden="true" className="absolute -right-12 -top-14 size-44 rounded-full border border-white/10 sm:size-56" />
          <div aria-hidden="true" className="absolute -right-5 -top-7 size-32 rounded-full border border-brand/40 sm:size-40" />
          <div className="relative">
            <p className="text-[10px] font-semibold tracking-[.16em] text-brand">
              CHAMPS D’APPLICATION ABORDÉS
            </p>
            <ul className="mt-6 space-y-4 text-[15px] leading-6 text-white/90">
              {applications.map((application) => (
                <li className="flex gap-3" key={application}>
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  {application}
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-white/15 pt-4 text-sm leading-6 text-white/70">
              Présentation à des fins de formation. Toute utilisation auprès
              d’un patient relève de l’évaluation et de la responsabilité du
              professionnel de santé.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[22px] border border-black/10 bg-white">
          <div className="flex items-center justify-between gap-4 bg-white px-5 py-5 sm:px-7">
            <div>
              <p className="text-[10px] font-semibold tracking-[.15em] text-brand">
                FICHE TECHNIQUE
              </p>
              <h3 className="mt-2 text-xl font-medium tracking-[-.04em] sm:text-2xl">
                Spécifications de l’appareil
              </h3>
            </div>
            <span className="shrink-0 rounded-full bg-soft px-3 py-2 text-[10px] font-semibold text-ink">
              CLASSE 3R
            </span>
          </div>
          <dl className="grid gap-x-7 px-5 pb-5 sm:grid-cols-2 sm:px-7 sm:pb-7">
            {specifications.map(([label, value], index) => (
              <div
                className={`grid grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] gap-3 border-t border-divider py-3.5 ${index === 0 ? "sm:border-t" : ""}`}
                key={label}
              >
                <dt className="text-sm leading-6 text-neutral-600">{label}</dt>
                <dd className="text-sm font-medium leading-6 text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
