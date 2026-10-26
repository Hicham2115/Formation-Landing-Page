import { ArrowUp, Phone } from "lucide-react";
import BrandLockup from "@/components/brand-lockup";
import { phone } from "@/lib/site";

const footerGroups = [
  {
    title: "La formation",
    links: [
      ["Présentation", "#formation"],
      ["Programme", "#programme"],
      ["La formatrice", "#formatrice"],
    ],
  },
  {
    title: "Informations",
    links: [
      ["Informations pratiques", "#inscription"],
      ["Questions fréquentes", "#faq"],
      ["Réserver sa place", `tel:${phone}`],
    ],
  },
];

export default function SiteFooter() {
  return (
    <>
      <div className="mt-16 rounded-[30px] bg-ink p-2 sm:mt-20 sm:rounded-[34px] sm:p-3">
        <footer className="rounded-[24px] border border-white/10 bg-ink px-6 py-9 text-white shadow-[0_2px_8px_rgb(0_0_0/12%)] sm:rounded-[28px] sm:px-10 sm:py-11 lg:px-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
            <div className="max-w-sm">
              <a
                className="inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                href="#top"
                aria-label="Addic’s Laser, accueil"
              >
                <BrandLockup inverse />
              </a>
              <p className="mt-5 text-sm leading-6 text-white">
                Une formation professionnelle en réflexologie auriculaire par
                bio-stimulation laser, à Mohammedia.
              </p>
            </div>

            {footerGroups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="text-sm font-semibold text-white">
                  {group.title}
                </h2>
                <ul className="mt-5 space-y-3.5 text-sm text-white">
                  {group.links.map(([label, href]) => (
                    <li key={label}>
                      <a
                        className="transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                        href={href}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div>
              <h2 className="text-sm font-semibold text-white">Contact</h2>
              <a
                className="mt-5 inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                href={`tel:${phone}`}
              >
                <Phone size={15} className="text-brand" />
                +212 613 755 122
              </a>
              <p className="mt-3 text-sm text-white">
                Mohammedia, Maroc
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Addic’s Laser · Full International Academy</span>
            <a
              className="w-fit transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              href="#top"
            >
              Retour en haut ↑
            </a>
          </div>

          <p className="mt-5 max-w-4xl text-[10px] leading-5 text-white">
            Les informations relatives à la formation, aux certifications et à
            l’appareil sont présentées selon la brochure fournie par
            l’organisateur. Elles ne constituent pas un avis médical.
          </p>
        </footer>

        <p className="mx-auto max-w-[1440px] px-6 py-4 text-center text-[12px] text-white sm:px-8 lg:px-12">
          Designed &amp; developed by{" "}
          <a
            href="https://www.stallionadvertising.ma/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-transparent underline-offset-2 transition-colors duration-200 hover:text-white hover:decoration-teal-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            Stallion Advertising
          </a>
        </p>
      </div>

      <a
        className="fixed right-5 bottom-5 z-40 grid size-12 place-items-center rounded-full bg-brand text-white shadow-lg transition-colors hover:bg-white hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        href="#top"
        aria-label="Retour en haut de page"
      >
        <ArrowUp size={20} />
      </a>
    </>
  );
}
