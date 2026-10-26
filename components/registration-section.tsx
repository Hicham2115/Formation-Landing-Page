import {
  BadgeCheck,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Utensils,
} from "lucide-react";
import { COURSE_PRICE, SPOTS_LEFT } from "@/lib/site";

export default function RegistrationSection() {
  return (
    <>
      <section
        className="my-20 grid gap-10 rounded-[26px] bg-ink px-6 py-12 text-white sm:my-28 sm:grid-cols-2 sm:items-center sm:gap-14 sm:px-12 sm:py-16 lg:px-16"
        id="inscription"
      >
        <div className="min-w-0">
          <p className="mb-5 flex items-center gap-2 text-[11px] font-semibold tracking-[.16em] text-white/60">
            <span className="h-px w-5 bg-brand" /> SESSION DU 31 OCTOBRE
          </p>
          <h2 className="max-w-lg text-4xl font-medium leading-[1.04] tracking-[-.065em] sm:text-6xl">
            Intégrez le laser auriculaire à votre cabinet.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-7 text-white/75">
            Une journée de formation professionnelle à Mohammedia, le samedi 31
            octobre 2026.
          </p>
          <div className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-[14px] border border-white/10 bg-white/5 p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-[11px] bg-brand text-base font-semibold text-white">
                31
              </span>
              <span>
                <span className="block text-[10px] font-semibold tracking-[.12em] text-white/60">
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
                <span className="block text-[10px] font-semibold tracking-[.12em] text-white/60">
                  LIEU
                </span>
                <span className="mt-1 block font-medium text-white">
                  YATCH CLUB DE MOHAMMEDIA
                </span>
                <span className="mt-1 block max-w-[220px] text-xs leading-5 text-white/70">
                  28800 Mohammedia
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
                VOTRE INVESTISSEMENT
              </span>
            </div>
            <span className="rounded-xl bg-brand px-3 py-2 text-[10px] font-semibold tracking-[.08em] text-white sm:text-xs">
              31 OCTOBRE
            </span>
          </div>
          <div className="mt-7 space-y-0 text-sm text-ink">
            <div className="flex items-start justify-between gap-4 border-t border-divider py-4">
              <span className="max-w-[72%] leading-6">Formation · 1 journée, déjeuner, certificat international, supervision et suivi</span>
              <strong className="shrink-0">3 000 DH HT</strong>
            </div>
            <div className="flex items-start justify-between gap-4 border-t border-divider py-4">
              <span className="max-w-[72%] leading-6">Laser professionnel classe 3R · garantie 2 ans</span>
              <strong className="shrink-0">19 900 DH HT</strong>
            </div>
            <div className="flex items-center justify-between gap-4 border-y-2 border-ink py-4 text-base">
              <strong>TOTAL</strong>
              <strong>{new Intl.NumberFormat("fr-MA").format(COURSE_PRICE)} DH HT</strong>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-neutral-600">
            Le laser vous appartient et reste dans votre cabinet.
          </p>
          <ul className="my-6 space-y-3 text-sm leading-6 text-ink">
            <li className="flex items-center gap-3">
              <Clock3 size={18} strokeWidth={1.7} /> Formation sur une journée
            </li>
            <li className="flex items-center gap-3">
              <Utensils size={18} strokeWidth={1.7} /> Déjeuner inclus
            </li>
            <li className="flex items-center gap-3">
              <BadgeCheck size={18} strokeWidth={1.7} /> Certificat international de praticien·ne*
            </li>
          </ul>
          <p className="mb-3 text-xs font-semibold tracking-[.08em] text-brand">
            PLUS QUE {SPOTS_LEFT} PLACES
          </p>
          <a
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white transition hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:px-9"
            href="#contact-form"
          >
            Réserver ma place <ArrowUpRight size={16} />
          </a>
          <p className="mt-4 text-xs leading-5 text-neutral-600">
            *Certificat de formation associé à IPHM (Royaume-Uni) et CIRET-TP
            (France).
          </p>
        </div>
      </section>
    </>
  );
}
