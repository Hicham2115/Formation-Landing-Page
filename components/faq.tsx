import { ArrowUpRight } from "lucide-react";
import Label from "@/components/section-label";

const faqs = [
  [
    "À qui s’adresse cette formation ?",
    "Elle s’adresse en priorité aux médecins et professionnels de santé qui souhaitent découvrir l’appareil laser et les protocoles étudiés pour accompagner leurs patients. Elle est aussi ouverte aux thérapeutes, naturopathes, psychothérapeutes, coachs et certains profils en reconversion.",
  ],
  [
    "Quand et où aura lieu la session ?",
    "La session se tient le samedi 31 octobre 2026 à Mohammedia, au Centre Addic’s Laser, Boulevard Hassan II.",
  ],
  [
    "Quel est le tarif de la journée ?",
    "Le tarif de la journée est de 22 900 DH HT. Le déjeuner est inclus.",
  ],
  [
    "Un appareil laser est-il compris ?",
    "Un pack professionnel d’équipement est prévu. Contactez l’équipe pour connaître son contenu exact et confirmer si le stylo laser est inclus dans le tarif.",
  ],
];

export default function Faq() {
  return (
    <>
      <section
        className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[.9fr_1.1fr] lg:gap-16"
        id="faq"
      >
        <div className="lg:pt-2">
          <Label>VOS QUESTIONS</Label>
          <h2 className="max-w-[11ch] text-5xl font-medium leading-[.98] tracking-[-.065em] sm:text-6xl lg:text-[4.5rem]">
            Des questions ? Nos réponses.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            Tout ce qu’il faut savoir sur la formation et son déroulement.
          </p>
          <a
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            href="#contact-form"
          >
            Parler à l’équipe <ArrowUpRight size={15} className="text-brand" />
          </a>
        </div>
        <div className="grid content-start gap-3 sm:gap-4">
          {faqs.map(([question, answer]) => (
            <details
              key={question}
              className="group rounded-[28px] bg-soft px-5 py-5 sm:rounded-[40px] sm:px-8 sm:py-7"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-medium leading-snug tracking-[-.025em] marker:hidden sm:text-[21px] [&::-webkit-details-marker]:hidden">
                {question}
                <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center text-[28px] font-light leading-none text-ink transition-transform duration-300 ease-out group-open:rotate-45 motion-reduce:transition-none">
                  +
                </span>
              </summary>
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.22,.8,.2,1)] group-open:grid-rows-[1fr] motion-reduce:transition-none">
                <div className="min-h-0 overflow-hidden">
                  <p className="max-w-2xl pt-4 text-base leading-7 text-neutral-600 sm:pr-12">
                    {answer}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
