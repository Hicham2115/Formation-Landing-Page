import { CalendarDays, Check, MapPin, Phone } from "lucide-react";
import Label from "@/components/section-label";
import { phone } from "@/lib/site";

export default function RegistrationSection() {
  return (
    <>
      <section
        className="my-20 grid gap-10 rounded-[26px] bg-[#f1f2f1] px-6 py-12 sm:my-28 sm:grid-cols-2 sm:items-center sm:px-12 sm:py-16 lg:px-16"
        id="inscription"
      >
        <div>
          <Label>INFORMATIONS PRATIQUES</Label>
          <h2 className="max-w-lg text-4xl font-medium leading-[1.04] tracking-[-.065em] sm:text-6xl">
            Une journée pour faire évoluer votre pratique.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-neutral-600">
            Les informations ci-dessous sont reprises de la brochure fournie.
            Contactez l’équipe pour confirmer votre inscription et les
            modalités.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs">
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={15} /> 31 octobre 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} /> Mohammedia
            </span>
          </div>
        </div>
        <div className="rounded-[20px] bg-white p-6 sm:p-9">
          <div className="flex items-center justify-between border-b border-divider pb-4 text-[9px] font-semibold tracking-[.16em] text-neutral-500">
            <span>SESSION DE FORMATION</span>
            <span className="h-2 w-2 rounded-full bg-brand" />
          </div>
          <p className="mt-7 text-5xl font-medium tracking-[-.07em] sm:text-6xl">
            22 900 <small className="text-base tracking-normal">DH HT</small>
          </p>
          <p className="mt-2 text-xs text-neutral-500">
            Tarif de la journée de formation
          </p>
          <ul className="my-7 grid gap-3 border-t border-divider pt-6 text-xs text-neutral-700">
            <li className="flex items-center gap-2">
              <Check size={16} className="text-brand" /> Formation sur une
              journée
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-brand" /> Déjeuner inclus
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-brand" /> Certificat mentionné
              dans la brochure*
            </li>
          </ul>
          <a
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-4 text-xs font-semibold text-white transition hover:bg-ink"
            href={`tel:${phone}`}
          >
            Appeler pour réserver <Phone size={15} />
          </a>
          <p className="mt-4 text-[10px] leading-5 text-neutral-500">
            *Accréditations annoncées par l’organisateur : IPHM (Royaume-Uni) et
            CIRET-TP (France). À confirmer auprès de l’organisateur.
          </p>
        </div>
      </section>
    </>
  );
}
