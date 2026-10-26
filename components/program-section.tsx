import { ArrowRight, ArrowUpRight, Clock3 } from "lucide-react";
import Label from "@/components/section-label";
import { phone } from "@/lib/site";

const modules = [
  "Introduction à la réflexologie auriculaire",
  "Histoire et définition de la méthode",
  "Anatomie de l’oreille",
  "Système nerveux et points réflexes",
  "Repérage des points neuro-réflexes",
  "Utilisation de la bio-stimulation laser",
  "Protocoles : addictions et états émotionnels",
];

export default function ProgramSection() {
  return (
    <>
      <section
        className="my-20 rounded-[26px] bg-ink px-6 py-14 text-white sm:my-28 sm:px-12 sm:py-20 lg:px-16"
        id="programme"
      >
        <div className="grid gap-8 border-b border-white/15 pb-10 sm:grid-cols-2 sm:items-end sm:pb-14">
          <div>
            <Label>LE PROGRAMME</Label>
            <h2 className="text-5xl font-medium leading-[.96] tracking-[-.07em] sm:text-7xl">
              Du repère
              <br />à la <em className="not-italic text-brand">pratique.</em>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/65 sm:justify-self-end">
            Sept modules pour poser les bases, comprendre les mécanismes et
            découvrir des exemples de protocoles dédiés aux addictions et aux
            états émotionnels.
          </p>
        </div>
        <div>
          {modules.map((title, index) => (
            <div
              key={title}
              className="group grid grid-cols-[38px_1fr_20px] items-center gap-3 border-b border-white/15 py-5 sm:grid-cols-[60px_1fr_24px] sm:py-6"
            >
              <span className="text-[10px] tracking-[.12em] text-white/45">
                0{index + 1}
              </span>
              <h3 className="text-base font-normal tracking-[-.02em] transition group-hover:translate-x-1 sm:text-xl">
                {title}
              </h3>
              <ArrowUpRight
                className="text-white/50 transition group-hover:text-brand"
                size={17}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-xs text-white/60">
          <span className="inline-flex items-center gap-2">
            <Clock3 size={15} /> Format intensif sur une journée
          </span>
          <a
            className="inline-flex items-center gap-2 text-white transition hover:text-brand"
            href={`tel:${phone}`}
          >
            Poser une question <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </>
  );
}
