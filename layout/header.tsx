import { ArrowUpRight } from "lucide-react";
import MobileMenu from "@/layout/mobile-menu";
import { navigationLinks } from "@/layout/navigation-links";
import { phone } from "@/lib/site";

export default function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between gap-4 py-5 sm:py-6">
      <a className="flex items-center gap-2.5" href="#top" aria-label="Addic’s Laser, accueil">
        <span className="text-[30px] font-black leading-none tracking-[-.09em]">
          A<span className="text-brand">.</span>
        </span>
        <span className="text-[11px] font-bold leading-tight tracking-[.08em]">
          ADDIC’S LASER
          <small className="mt-1 block text-[8px] font-medium tracking-[.17em] text-neutral-500">
            FORMATION PROFESSIONNELLE
          </small>
        </span>
      </a>
      <nav className="hidden items-center gap-8 text-[13px] text-neutral-700 md:flex" aria-label="Navigation principale">
        {navigationLinks.map((link) => (
          <a className="transition hover:text-brand" href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a
        className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-semibold text-white transition hover:bg-brand sm:inline-flex"
        href={`tel:${phone}`}
      >
        Réserver ma place <ArrowUpRight size={15} />
      </a>
      <MobileMenu />
    </header>
  );
}
