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
      className="grid min-w-0 items-center gap-10 border-t border-divider py-16 sm:gap-14 sm:py-24 lg:grid-cols-[.88fr_1.12fr] lg:gap-14"
      id="formatrice"
    >
      <div className="group relative aspect-[4/4.6] min-w-0 overflow-hidden rounded-[24px] bg-secondary">
        <Image
          src="/images/siham-boulla-profile.jpg"
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

      <div className="min-w-0 lg:py-8">
        <Label>TRANSMISSION & EXPÉRIENCE</Label>
        <h2 className="max-w-none text-[clamp(2rem,8.5vw,3rem)] font-medium leading-[1.03] tracking-[-.065em] sm:text-6xl lg:text-[4rem]">
          Une formation menée par une{" "}
          <em className="not-italic text-brand">praticienne.</em>
        </h2>
        <div className="mt-7 max-w-2xl space-y-4 text-base leading-7 text-ink sm:mt-8 sm:text-[17px] sm:leading-8">
          <p>
            Psychothérapeute, formatrice et fondatrice de Full International
            Academy, Siham Boulla anime cette journée autour de la réflexologie
            auriculaire et de la bio-stimulation laser. Son parcours associe
            psychothérapie, formation et approches intégratives.
          </p>
          <p>
            Elle a également près de 22 ans d’expérience en communication,
            relations presse et digital, en France, à Monaco et au Maroc.
          </p>
          <p>
            Diplômée en communication marketing à Paris, elle est aussi formée
            en magnétisme, sophrologie et EFT, avec des certifications en
            publicité médicale et webmarketing. Pendant la formation, elle
            accompagne les participants des repères anatomiques au repérage
            des points et à la découverte des protocoles présentés.
          </p>
        </div>

        <div className="mt-10 border-y border-divider py-5 sm:mt-12 sm:py-6">
          <p className="mb-5 flex items-center gap-2 text-[10px] font-semibold tracking-[.18em] text-neutral-500">
            <span aria-hidden="true" className="h-px w-5 bg-brand" />
            SON PARCOURS
          </p>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {credentials.map((credential, index) => (
              <li
                key={credential}
                className={`flex min-h-14 items-center gap-3 border-t border-divider/80 py-3 text-[15px] font-medium leading-6 text-ink sm:text-base ${index === 2 ? "sm:col-span-2" : ""}`}
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-brand/25 bg-brand/[.045] text-brand">
                  <Check size={13} strokeWidth={2.5} />
                </span>
                <span>{credential}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
