import Image from "next/image";

const images = [
  {
    src: "/images/auriculotherapy-workshop.jpg",
    alt: "Atelier de formation en petit groupe autour de l’auriculothérapie",
    caption: "APPRENDRE ENSEMBLE",
  },
  {
    src: "/images/laser-ear-detail.jpg",
    alt: "Démonstration d’un appareil de bio-stimulation laser près de l’oreille",
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
      className="grid gap-4 pb-10 sm:grid-cols-2 sm:pb-12 lg:grid-cols-3 lg:gap-5 lg:pb-14"
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
          <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 pb-5 pt-16 text-[11px] font-semibold tracking-[.12em] text-white sm:px-6 sm:pb-6">
            {image.caption}
            <span className="font-mono text-white/70">0{index + 1} / 03</span>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
