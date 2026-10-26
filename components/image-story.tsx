import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1664382953481-141e97ad9825?auto=format&fit=crop&w=1200&q=85",
    alt: "Atelier de formation en petit groupe",
    caption: "APPRENDRE ENSEMBLE",
  },
  {
    src: "https://images.unsplash.com/photo-1634656883281-3a665dd2bb8a?auto=format&fit=crop&w=1000&q=85",
    alt: "Détail d’une oreille, zone centrale de la réflexologie auriculaire",
    caption: "AU CŒUR DE LA MÉTHODE",
  },
  {
    src: "/images/siham-boulla-portrait.jpg",
    alt: "Portrait de Siham Boulla, formatrice",
    caption: "VOTRE FORMATRICE",
  },
];

export default function ImageStory() {
  return (
    <section
      className="grid gap-4 pb-20 sm:grid-cols-2 sm:pb-28 lg:grid-cols-3 lg:gap-5"
      aria-label="La formation en images"
    >
      {images.map((image, index) => (
        <figure
          className="group relative h-[340px] overflow-hidden rounded-[22px] sm:h-[420px] lg:h-[min(42vw,580px)]"
          key={image.src}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80" />
          <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 pb-5 pt-16 text-[9px] font-semibold tracking-[.16em] text-white sm:px-6 sm:pb-6">
            {image.caption}
            <span className="font-mono text-white/70">0{index + 1} / 03</span>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
