import { ArrowUpRight } from "lucide-react";

export default function MidPageCta() {
  return (
    <aside className="my-10 flex flex-col gap-5 rounded-[22px] bg-secondary px-5 py-6 sm:my-14 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7">
      <div>
        <p className="text-[11px] font-semibold tracking-[.14em] text-brand">
          PLACES LIMITÉES
        </p>
        <p className="mt-2 max-w-xl text-[15px] leading-6 text-ink sm:text-base">
          Réservez votre place dès maintenant en contactant notre équipe.
        </p>
      </div>
      <a
        className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        href="#contact-form"
      >
        Réserver ma place <ArrowUpRight size={16} />
      </a>
    </aside>
  );
}
