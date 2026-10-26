import {
  BadgeCheck,
  CalendarDays,
  Clock3,
  MapPin,
  Phone,
  Utensils,
} from "lucide-react";
import { phone } from "@/lib/site";

export default function RegistrationSection() {
  return (
    <>
      <section
        className="my-20 grid gap-10 rounded-[26px] bg-ink px-6 py-12 text-white sm:my-28 sm:grid-cols-2 sm:items-center sm:gap-14 sm:px-12 sm:py-16 lg:px-16"
        id="inscription"
      >
        <div className="min-w-0">
          <p className="mb-5 flex items-center gap-2 text-[11px] font-semibold tracking-[.16em] text-white/60">
            <span className="h-px w-5 bg-brand" /> INFORMATIONS PRATIQUES
          </p>
          <h2 className="max-w-lg text-4xl font-medium leading-[1.04] tracking-[-.065em] sm:text-6xl">
            Découvrez le laser auriculaire pour votre <em className="not-italic text-brand">pratique.</em>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
            Retrouvez les détails de la session et contactez l’équipe pour
            confirmer votre inscription et les modalités.
          </p>
          <div className="mt-8 grid gap-3 text-xs sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-[14px] border border-white/10 bg-white/5 p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-[11px] bg-brand text-base font-semibold text-white">
                31
              </span>
              <span>
                <span className="block text-[9px] font-semibold tracking-[.14em] text-white/50">
                  SAMEDI
                </span>
                <span className="mt-1 block font-medium text-white">
                  Octobre 2026
                </span>
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-[14px] border border-white/10 bg-white/5 p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-brand">
                <MapPin size={17} />
              </span>
              <span>
                <span className="block text-[9px] font-semibold tracking-[.14em] text-white/50">
                  LIEU
                </span>
                <span className="mt-1 block font-medium text-white">
                  Centre Addic’s Laser
                </span>
                <span className="mt-1 block max-w-[220px] text-[10px] leading-4 text-white/60">
                  West Coast Office · Boulevard Hassan II · 28800 Mohammedia
                  · 5 min de la gare
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="min-w-0 rounded-[26px] border-2 border-brand bg-white p-6 sm:p-9 lg:p-10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-soft text-brand">
                <CalendarDays size={20} strokeWidth={1.7} />
              </span>
              <span className="text-sm font-semibold tracking-[-.02em] text-ink sm:text-base">
                SESSION DE FORMATION
              </span>
            </div>
            <span className="rounded-xl bg-brand px-3 py-2 text-[10px] font-semibold tracking-[.08em] text-white sm:text-xs">
              31 OCTOBRE
            </span>
          </div>
          <p className="mt-8 text-5xl font-semibold tracking-[-.07em] text-ink sm:text-6xl lg:text-7xl">
            22 900 <small className="text-base tracking-normal">DH HT</small>
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            Tarif de la journée de formation
          </p>
          <ul className="my-7 text-sm text-ink">
            <li className="flex items-center gap-4 border-t border-divider py-4">
              <Clock3 size={20} strokeWidth={1.7} /> Formation sur une journée
            </li>
            <li className="flex items-center gap-4 border-t border-divider py-4">
              <Utensils size={20} strokeWidth={1.7} /> Déjeuner inclus
            </li>
            <li className="flex items-center gap-4 border-y border-divider py-4">
              <BadgeCheck size={20} strokeWidth={1.7} />
              <span>
                Certificat international de praticien·ne en réflexologie
                auriculaire par bio-stimulation laser*
              </span>
            </li>
            <li className="flex items-center gap-4 border-b border-divider py-4">
              <BadgeCheck size={20} strokeWidth={1.7} />
              <span>Pack professionnel pour vous former et vous équiper</span>
            </li>
          </ul>
          <a
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white transition hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:px-9"
            href={`tel:${phone}`}
          >
            Appeler pour réserver <Phone size={16} />
          </a>
          <p className="mt-4 text-[10px] leading-5 text-neutral-500">
            *Certificat de formation associé à IPHM (Royaume-Uni) et CIRET-TP
            (France).
          </p>
        </div>
      </section>
    </>
  );
}
