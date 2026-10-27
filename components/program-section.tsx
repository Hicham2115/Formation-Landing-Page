"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Clock3 } from "lucide-react";
import Label from "@/components/section-label";

const modules = [
  {
    title: "Introduction à la réflexologie auriculaire",
    image: "/images/programme-introduction.jpg",
    alt: "Atelier d’introduction autour d’un grand schéma de l’oreille",
    caption: "Découvrir la méthode",
    topics: [
      "Objectifs de la formation",
      "Place de l’auriculothérapie laser dans les thérapies complémentaires",
    ],
  },
  {
    title: "Histoire et définition de la méthode",
    image: "/images/programme-histoire.jpg",
    alt: "Atlas ancien illustrant l’oreille et carnet de notes",
    caption: "Comprendre ses repères",
    topics: [
      "Histoire et origines",
      "Définition et principes généraux",
      "Différences entre auriculothérapie, acupuncture et auriculomédecine",
      "Données scientifiques et question de l’efficacité",
    ],
  },
  {
    title: "Anatomie de l’oreille",
    image: "/images/programme-anatomie.jpg",
    alt: "Modèle anatomique détaillé de l’oreille",
    caption: "Observer l’oreille",
    topics: [
      "Généralités et reliefs anatomiques : hélix, anti-hélix, conque et tragus",
      "Muscles, téguments et vascularisation",
      "Innervation auriculaire",
    ],
  },
  {
    title: "Système nerveux et points réflexes",
    image: "/images/programme-systeme-nerveux.jpg",
    alt: "Modèle pédagogique de la tête et du système nerveux",
    caption: "Relier les points réflexes",
    topics: [
      "Systèmes nerveux central, périphérique et végétatif",
      "Rôle spécifique du nerf vague",
    ],
  },
  {
    title: "Repérage des points neuro-réflexes",
    image: "/images/programme-points-reflexes.jpg",
    alt: "Formatrice indiquant des repères sur un schéma auriculaire",
    caption: "Repérer les zones",
    topics: [
      "Types de points : organiques, fonctionnels et émotionnels",
      "Somatotopie auriculaire et embryon inversé de Nogier",
      "Localisations générales, points maîtres et points de fonction",
      "Exemples présentés : Shen Men, Sympathique et Endorphines",
    ],
  },
  {
    title: "Utilisation de la bio-stimulation laser",
    image: "/transfer-01a17ab0/ADDICS%20LASER7.png",
    alt: "Démonstration rapprochée du laser Addic sur l’oreille",
    caption: "Voir le geste",
    topics: [
      "Principes de traitement et régulation naturelle",
      "Moyens présentés : aiguilles, ASP, magrains, massage, placture, sparadraps et laser",
      "Précautions, contre-indications, obstacles et réactions possibles après séance",
    ],
  },
  {
    title: "Protocoles : addictions et états émotionnels",
    image: "/images/programme-protocoles.jpg",
    alt: "Petit groupe échangeant autour de fiches de travail et d’un schéma",
    caption: "Explorer les protocoles",
    topics: [
      "Exemples : sevrage tabagique, alcool, cannabis et alimentation compulsive",
      "Anxiété, dépression et stress",
      "Démonstration, pratique, débrief collectif et présentation du test laser",
    ],
  },
];

export default function ProgramSection() {
  const [activeModule, setActiveModule] = useState(modules.length - 1);
  const active = modules[activeModule];

  return (
    <section
      className="my-20 rounded-[26px] bg-ink px-6 py-14 text-white sm:my-28 sm:px-12 sm:py-20 lg:px-16"
      id="programme"
    >
      <div className="grid gap-8 border-b border-white/15 pb-10 sm:grid-cols-2 sm:items-end sm:pb-14">
        <div>
          <Label tone="light">LE PROGRAMME</Label>
          <h2 className="text-5xl font-medium leading-[.96] tracking-[-.07em] sm:text-7xl">
            Du repère
            <br />à la <em className="not-italic text-brand">pratique.</em>
          </h2>
        </div>
        <p className="max-w-md text-[15px] leading-7 text-white/70 sm:justify-self-end">
          Pour les médecins et professionnels de santé : sept modules pour
          découvrir les repères auriculaires, l’appareil laser et les protocoles
          étudiés pendant la formation.
        </p>
      </div>

      <div className="grid gap-8 pt-5 lg:grid-cols-[minmax(0,1fr)_minmax(250px,0.64fr)] lg:gap-12">
        <div className="order-1 min-w-0">
          {modules.map((module, index) => (
            <div className="border-b border-white/15" key={module.title}>
              <button
                type="button"
                aria-pressed={activeModule === index}
                aria-expanded={activeModule === index}
                aria-controls={
                  activeModule === index ? `module-topics-${index}` : undefined
                }
                onMouseEnter={() => {
                  if (window.matchMedia("(hover: hover)").matches) {
                    setActiveModule(index);
                  }
                }}
                onFocus={() => setActiveModule(index)}
                onClick={() => setActiveModule(index)}
                className={`group grid w-full grid-cols-[38px_minmax(0,1fr)_20px] items-start gap-3 py-5 text-left transition-colors sm:grid-cols-[60px_minmax(0,1fr)_24px] sm:py-6 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-brand ${
                  activeModule === index ? "text-white" : "text-white/75"
                }`}
              >
                <span className="mt-1 text-[10px] tracking-[.12em] text-white/45">
                  0{index + 1}
                </span>
                <span className="min-w-0">
                  <span
                    className={`block text-base font-normal tracking-[-.02em] transition duration-300 sm:text-xl ${
                      activeModule === index
                        ? "translate-x-1"
                        : "group-hover:translate-x-1"
                    }`}
                  >
                    {module.title}
                  </span>
                  {activeModule === index && (
                    <span
                      className="mt-3 block space-y-2 text-[15px] leading-7 text-white/70 lg:hidden"
                      id={`module-topics-${index}`}
                    >
                      {module.topics.map((topic) => (
                        <span className="flex gap-2.5" key={topic}>
                          <span
                            aria-hidden="true"
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                          />
                          {topic}
                        </span>
                      ))}
                    </span>
                  )}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={`mt-1 transition-transform lg:hidden ${
                    activeModule === index
                      ? "rotate-180 text-brand"
                      : "text-white/50 group-hover:text-brand"
                  }`}
                  size={18}
                />
                <ArrowUpRight
                  aria-hidden="true"
                  className={`mt-1 hidden transition-colors lg:block ${
                    activeModule === index
                      ? "text-brand"
                      : "text-white/50 group-hover:text-brand"
                  }`}
                  size={17}
                />
              </button>
            </div>
          ))}
        </div>

        <div className="order-2 hidden min-w-0 lg:sticky lg:top-8 lg:mt-2 lg:block lg:self-start">
          <div
            className="relative min-h-[270px] overflow-hidden rounded-[18px] bg-white/5 sm:min-h-[360px] lg:h-[350px]"
            aria-live="polite"
            aria-label={`Aperçu : ${active.title}`}
          >
            <Image
              key={active.image + activeModule}
              src={active.image}
              alt={active.alt}
              fill
              priority
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="animate-[soft-rise_300ms_ease-out] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/5" />
            <span className="absolute left-4 top-4 rounded-full border border-white/35 bg-black/25 px-3 py-1.5 text-[10px] tracking-[.14em] text-white/90 backdrop-blur-sm">
              MODULE 0{activeModule + 1}
            </span>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
              <p className="max-w-[15rem] text-xl leading-tight tracking-[-.04em] sm:text-2xl">
                {active.caption}
              </p>
              <span className="mb-1 h-px w-10 shrink-0 bg-brand" />
            </div>
          </div>
          <details className="group border-b border-white/15 py-4" open>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium marker:hidden [&::-webkit-details-marker]:hidden">
              Contenu du module
              <span className="text-lg text-brand transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <ul className="mt-3 hidden space-y-2 text-[15px] leading-7 text-white/70 lg:block">
              {active.topics.map((topic) => (
                <li className="flex gap-2.5" key={topic}>
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  {topic}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-sm text-white/70">
        <span className="inline-flex items-center gap-2">
          <Clock3 size={15} /> Format intensif sur une journée
        </span>
        <a
          className="inline-flex items-center gap-2 text-white transition hover:text-brand"
          href="#contact-form"
        >
          Poser une question <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}
