import { Plus } from "lucide-react";

const facts = [
  {
    value: "1",
    accessibleValue: "1",
    unit: "",
    title: "Journée de formation",
    detail: "Un format intensif pour découvrir la méthode étape par étape.",
  },
  {
    value: "7",
    accessibleValue: "7",
    unit: "",
    title: "Modules progressifs",
    detail: "Des bases théoriques jusqu’aux protocoles présentés.",
  },
  {
    value: "675–695",
    accessibleValue: "675–695 nm",
    unit: "nm",
    title: "Longueur d’onde",
    detail: "Plage de longueur d’onde de l’appareil laser.",
  },
  {
    value: "2",
    accessibleValue: "2 ans",
    unit: "ans",
    title: "Garantie de l’appareil",
    detail: "Garantie de l’appareil à compter de la date d’achat.",
  },
];

export default function CourseFacts() {
  return (
    <section
      className="pb-20 pt-10 sm:pb-24 sm:pt-12 lg:pb-28 lg:pt-14"
      aria-label="La formation en chiffres"
    >
      <div className="mb-10 inline-flex items-center gap-2.5 rounded-full bg-secondary px-4 py-2.5 font-mono text-[11px] font-semibold tracking-[.1em] text-ink sm:mb-12">
        <span className="grid size-[15px] place-items-center rounded-[3px] bg-brand text-white">
          <Plus size={11} strokeWidth={2.5} />
        </span>
        LA FORMATION EN CHIFFRES
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-10">
        {facts.map((fact) => (
          <article key={fact.title}>
            <div className="flex h-20 items-end border-b border-dashed border-neutral-500 pb-3 sm:h-24 lg:h-28">
              <p
                aria-label={fact.accessibleValue}
                className={`whitespace-nowrap font-medium leading-[.9] tracking-[-.08em] ${
                  fact.title === "Longueur d’onde"
                    ? "text-[clamp(2rem,4vw,4rem)]"
                    : "text-[clamp(3rem,7vw,7rem)]"
                }`}
              >
                {fact.value}
                {fact.unit && (
                  <span className="ml-1 inline-block align-baseline text-[.38em] font-medium tracking-[-.04em]">
                    {fact.unit}
                  </span>
                )}
              </p>
            </div>
            <h2 className="mt-5 text-base font-semibold tracking-[-.035em] sm:text-lg">
              {fact.title}
            </h2>
            <p className="mt-2 max-w-[280px] text-[15px] leading-7 text-neutral-600">
              {fact.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
