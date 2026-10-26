import { ArrowUpRight } from "lucide-react";
import Label from "@/components/section-label";
import { phone } from "@/lib/site";

const faqs = [
  [
    "À qui s’adresse cette formation ?",
    "La formation s’adresse aux professionnels de santé, thérapeutes et praticiens souhaitant découvrir la réflexologie auriculaire par bio-stimulation laser.",
  ],
  [
    "Quand et où aura lieu la session ?",
    "La session se tient le samedi 31 octobre 2026 à Mohammedia, au Centre Addic’s Laser, Boulevard Hassan II.",
  ],
  [
    "Quel est le tarif de la journée ?",
    "Le tarif indiqué dans la brochure est de 22 900 DH HT. Le déjeuner est inclus.",
  ],
  [
    "Un appareil laser est-il compris ?",
    "La brochure présente les caractéristiques de l’appareil, mais ne précise pas si celui-ci est inclus dans le tarif. Contactez l’équipe pour confirmation.",
  ],
];

export default function Faq() {
  return (
    <>
      <section
        className="grid gap-10 py-14 sm:grid-cols-[.7fr_1.3fr] sm:py-20"
        id="faq"
      >
        <div>
          <Label>VOS QUESTIONS</Label>
          <h2 className="text-4xl font-medium leading-[1.02] tracking-[-.065em] sm:text-6xl">
            Les détails,
            <br />
            sans détour.
          </h2>
          <a
            className="mt-7 inline-flex items-center gap-2 text-xs font-medium"
            href={`tel:${phone}`}
          >
            Parler à l’équipe <ArrowUpRight size={15} className="text-brand" />
          </a>
        </div>
        <div>
          {faqs.map(([question, answer]) => (
            <details
              key={question}
              className="group border-b border-divider py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium sm:text-base">
                {question}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-divider text-lg font-light transition group-open:rotate-45 group-open:border-brand group-open:text-brand">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pr-12 pt-4 text-sm leading-6 text-neutral-600">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
