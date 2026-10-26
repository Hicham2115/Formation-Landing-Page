import Image from "next/image";
import { Check } from "lucide-react";
import Label from "@/components/section-label";

export default function TrainerSection() {
  return (
    <>
      <section
        className="grid items-center gap-9 py-4 sm:gap-14 lg:grid-cols-[.9fr_1.1fr]"
        id="formatrice"
      >
        <div className="group relative min-h-[440px] overflow-hidden rounded-[20px] sm:min-h-[580px]">
          <Image
            src="/images/siham-boulla-portrait.jpg"
            alt="Portrait de Siham Boulla dans son cabinet"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-[center_34%] transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transition-none"
          />
          <span className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-[9px] font-semibold tracking-[.14em]">
            VOTRE FORMATRICE
          </span>
        </div>
        <div className="py-7 lg:pl-8">
          <Label>TRANSMISSION & EXPÉRIENCE</Label>
          <h2 className="max-w-xl text-4xl font-medium leading-[1.02] tracking-[-.065em] sm:text-6xl">
            Une formation menée par une{" "}
            <em className="not-italic text-brand">praticienne.</em>
          </h2>
          <p className="mt-8 text-2xl font-medium tracking-[-.04em]">
            Siham Boulla
          </p>
          <p className="mt-3 max-w-lg text-sm leading-7 text-neutral-600">
            Psychothérapeute, formatrice et fondatrice de Full International
            Academy. Elle vous accompagne dans la découverte de la méthode et
            des applications présentées au programme.
          </p>
          <div className="mt-7 grid gap-3 text-xs text-neutral-700 sm:grid-cols-2">
            <span className="flex items-center gap-2">
              <Check size={15} className="text-brand" /> Psychothérapeute
            </span>
            <span className="flex items-center gap-2">
              <Check size={15} className="text-brand" /> Formatrice
            </span>
            <span className="flex items-center gap-2">
              <Check size={15} className="text-brand" /> Full International
              Academy
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
