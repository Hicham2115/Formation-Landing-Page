import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ImageStory() {
  return (
    <>
      <section
        className="grid items-end gap-5 pb-20 sm:grid-cols-[1.2fr_.8fr] sm:pb-28"
        aria-label="La formation en images"
      >
        <figure className="group relative min-h-[310px] overflow-hidden rounded-[20px] sm:min-h-[440px]">
          <Image
            src="https://images.unsplash.com/photo-1664382953481-141e97ad9825?auto=format&fit=crop&w=1400&q=85"
            alt="Atelier de formation en petit groupe"
            fill
            sizes="(max-width: 640px) 100vw, 62vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none"
          />
          <figcaption className="absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-black/60 to-transparent px-5 pb-5 pt-14 text-[9px] font-semibold tracking-[.15em] text-white">
            APPRENDRE ENSEMBLE <span>01 / 03</span>
          </figcaption>
        </figure>
        <div className="grid gap-5 sm:pl-1">
          <figure className="group relative min-h-[250px] overflow-hidden rounded-[20px] sm:min-h-[325px]">
            <Image
              src="https://images.unsplash.com/photo-1634656883281-3a665dd2bb8a?auto=format&fit=crop&w=900&q=85"
              alt="Détail d’une oreille, zone centrale de la réflexologie auriculaire"
              fill
              sizes="(max-width: 640px) 80vw, 34vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-black/60 to-transparent px-4 pb-4 pt-12 text-[9px] font-semibold tracking-[.15em] text-white">
              AU CŒUR DE LA MÉTHODE <span>02 / 03</span>
            </figcaption>
          </figure>
          <div className="flex items-center justify-between gap-5 px-1">
            <p className="max-w-xs text-sm leading-6">
              Des fondations aux protocoles : le programme avance étape par
              étape.
            </p>
            <a
              href="#programme"
              aria-label="Explorer le programme"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-white transition hover:bg-brand"
            >
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
