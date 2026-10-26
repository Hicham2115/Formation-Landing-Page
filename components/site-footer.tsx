import { Phone } from "lucide-react";
import BrandLockup from "@/components/brand-lockup";
import { phone } from "@/lib/site";

export default function SiteFooter() {
  return (
    <>
      <footer className="rounded-[26px] bg-ink px-6 py-9 text-white sm:px-10 sm:py-11">
        <div className="flex flex-col gap-7 border-b border-white/15 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" aria-label="Addic’s Laser, accueil">
            <BrandLockup inverse />
          </a>
          <p className="max-w-xs text-sm leading-6 text-white/60">
            La connaissance au service d’un accompagnement plus éclairé.
          </p>
          <a
            className="inline-flex items-center gap-2 text-sm"
            href={`tel:${phone}`}
          >
            <Phone size={15} className="text-brand" /> +212 613 755 122
          </a>
        </div>
        <div className="flex flex-col gap-3 pt-5 text-[10px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Addic’s Laser · Full International Academy</span>
          <span>Mohammedia, Maroc</span>
          <a className="text-white/80 hover:text-brand" href="#top">
            Retour en haut ↑
          </a>
        </div>
        <p className="mt-5 max-w-4xl text-[9px] leading-5 text-white/60">
          Les informations relatives à la formation, aux certifications et à
          l’appareil sont présentées selon la brochure fournie par
          l’organisateur. Elles ne constituent pas un avis médical.
        </p>
      </footer>
    </>
  );
}
