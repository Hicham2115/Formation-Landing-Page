import { Menu } from "lucide-react";
import { phone } from "@/lib/site";
import { navigationLinks } from "@/layout/navigation-links";

export default function MobileMenu() {
  return (
    <details className="group relative md:hidden">
      <summary
        className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-full border border-divider"
        aria-label="Ouvrir le menu"
      >
        <Menu size={21} />
      </summary>
      <nav
        className="absolute right-0 top-14 grid min-w-52 gap-4 rounded-2xl border border-divider bg-white p-5 text-sm shadow-xl"
        aria-label="Navigation mobile"
      >
        {navigationLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
        <a className="font-semibold text-brand" href={`tel:${phone}`}>
          Réserver ma place
        </a>
      </nav>
    </details>
  );
}
