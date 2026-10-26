import Image from "next/image";
import { Check } from "lucide-react";
import Label from "@/components/section-label";

const credentials = [
  "Psychothérapeute",
  "Formatrice",
  "Fondatrice de Full International Academy",
];

export default function TrainerSection() {
  return (
    <section
      className="grid items-center gap-10 border-t border-divider py-16 sm:gap-14 sm:py-24 lg:grid-cols-[1.02fr_.98fr] lg:gap-20"
      id="formatrice"
    >
      <div className="group relative aspect-[4/4.6] min-h-[440px] overflow-hidden rounded-[24px] bg-secondary sm:min-h-[560px]">
        <Image
          src="/images/siham-boulla-portrait.jpg"
          alt="Portrait de Siham Boulla dans son cabinet"
          fill
          sizes="(max-width: 1024px) 100vw, 48vw"
          className="object-cover object-[center_34%] transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transition-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/35 bg-black/20 px-3 py-2 text-[9px] font-semibold tracking-[.14em] text-white backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          VOTRE FORMATRICE
        </span>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white sm:p-8">
          <div>
            <p className="text-2xl font-medium tracking-[-.045em] sm:text-3xl">
              Siham Boulla
            </p>
            <p className="mt-1 text-xs text-white/75 sm:text-sm">
              Psychothérapeute & formatrice
            </p>
          </div>
          <span className="mb-1 grid size-10 shrink-0 place-items-center rounded-full border border-white/40 text-[10px] tracking-[.12em]">
            01
          </span>
        </div>
      </div>

      <div className="lg:py-8">
        <Label>TRANSMISSION & EXPÉRIENCE</Label>
        <h2 className="max-w-xl text-4xl font-medium leading-[1.03] tracking-[-.065em] sm:text-6xl lg:text-[4.25rem]">
          Une formation menée par une{" "}
          <em className="not-italic text-brand">praticienne.</em>
        </h2>
        <p className="mt-7 max-w-lg text-base leading-7 text-neutral-600 sm:mt-8 sm:text-[17px] sm:leading-8">
          Siham Boulla vous accompagne dans la découverte de la méthode et des
          applications présentées au programme.
        </p>

        <div className="mt-10 border-y border-divider py-5 sm:mt-12 sm:py-6">
          <p className="mb-4 text-[10px] font-semibold tracking-[.16em] text-neutral-500">
            SON PARCOURS
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-x-6">
            {credentials.map((credential) => (
              <li
                key={credential}
                className="flex items-center gap-3 text-sm text-ink"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-soft text-brand">
                  <Check size={13} strokeWidth={2.5} />
                </span>
                {credential}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
