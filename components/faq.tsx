import { ArrowUpRight } from "lucide-react";
import Label from "@/components/section-label";

const faqs = [
  [
    "Le laser est-il compris ?",
    "Oui. Le tarif de 22 900 DH HT comprend la formation (3 000 DH HT) et le laser professionnel (19 900 DH HT), garanti 2 ans.",
  ],
  [
    "Puis-je suivre la formation sans acheter le laser ?",
    "Contactez l’équipe pour confirmer les conditions de participation sans achat de l’appareil.",
  ],
  [
    "En combien de temps l’investissement est-il amorti ?",
    "Cela dépend de votre tarif et de votre volume. Utilisez notre simulateur de rentabilité pour obtenir une estimation indicative.",
  ],
  [
    "Comment se passe le paiement ?",
    "Contactez l’équipe pour connaître les modalités de paiement.",
  ],
  [
    "Que se passe-t-il après la formation ?",
    "La formation comprend une supervision, un suivi et un accès au réseau professionnel. Contactez l’équipe pour connaître les modalités de cet accompagnement.",
  ],
  [
    "Qui peut s’inscrire ?",
    "La formation s’adresse en priorité aux médecins et professionnels de santé. Elle est aussi ouverte aux thérapeutes, naturopathes, psychothérapeutes, coachs et certains profils en reconversion. Les profils de la madérothérapie peuvent aussi se renseigner : masseuses, esthéticiennes, propriétaires de spa ou de centre de beauté et centres d’amincissement.",
  ],
  [
    "Quand et où aura lieu la session ?",
    "La session se tient le samedi 31 octobre 2026 à Mohammedia, au Centre Addic’s Laser, Boulevard Hassan II.",
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
          <h2 className="max-w-[11ch] text-4xl font-medium leading-[1.02] tracking-[-.065em] sm:text-6xl lg:text-[4.5rem]">
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
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[17px] font-medium leading-snug tracking-[-.02em] marker:hidden sm:text-[21px] [&::-webkit-details-marker]:hidden">
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
