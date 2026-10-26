import { ArrowUpRight } from "lucide-react";
import BrandLockup from "@/components/brand-lockup";
import MobileMenu from "@/layout/mobile-menu";
import { navigationLinks } from "@/layout/navigation-links";
import { phone } from "@/lib/site";

export default function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between gap-4 py-3 sm:py-4">
      <a href="#top" aria-label="Addic’s Laser, accueil">
        <BrandLockup />
      </a>
      <nav
        className="hidden items-center gap-8 text-[13px] font-semibold text-neutral-700 md:flex"
        aria-label="Navigation principale"
      >
        {navigationLinks.map((link) => (
          <a
            className="relative py-2 transition-colors hover:text-brand after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:after:scale-x-100"
            href={link.href}
            key={link.href}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="flex shrink-0 items-center gap-3">
        <a
          className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-semibold text-white transition hover:bg-brand sm:inline-flex"
          href={`tel:${phone}`}
        >
          Réserver ma place <ArrowUpRight size={15} />
        </a>
        <MobileMenu />
      </div>
    </header>
  );
}
