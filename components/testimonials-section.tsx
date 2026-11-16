"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import Label from "@/components/section-label";

const testimonials = [1, 2, 3].map((n) => ({
  id: n,
  label: `Témoignage ${String(n).padStart(2, "0")}`,
  video: `/testimonials/temoignage-${n}.mp4`,
  poster: `/testimonials/temoignage-${n}.jpg`,
}));

export default function TestimonialsSection() {
  const videos = useRef<Record<number, HTMLVideoElement | null>>({});
  const [playingId, setPlayingId] = useState<number | null>(null);

  async function toggle(id: number) {
    const video = videos.current[id];
    if (!video) return;

    if (!video.paused) {
      video.pause();
      return;
    }

    for (const [otherId, other] of Object.entries(videos.current)) {
      if (Number(otherId) !== id) other?.pause();
    }
    try {
      await video.play();
    } catch {
      setPlayingId(null);
    }
  }

  return (
    <section
      className="border-t border-divider py-16 sm:py-24"
      id="temoignages"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_.7fr] lg:items-end lg:gap-16">
        <div>
          <Label>TÉMOIGNAGES</Label>
          <h2 className="max-w-[14ch] text-[clamp(2rem,8.5vw,3rem)] font-medium leading-[1.03] tracking-[-.065em] sm:text-6xl lg:text-[4.5rem]">
            Ils ont suivi la formation, <em className="not-italic text-brand">ils en parlent.</em>
          </h2>
        </div>
        <p className="max-w-md text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
          Retours de participantes, en vidéo et sans filtre.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5">
        {testimonials.map(({ id, label, video, poster }) => {
          const isPlaying = playingId === id;
          return (
            <figure
              key={id}
              className="group relative aspect-[9/16] overflow-hidden rounded-[24px] bg-secondary"
            >
              <video
                ref={(el) => {
                  videos.current[id] = el;
                }}
                aria-label={label}
                className="size-full object-cover"
                loop
                playsInline
                poster={poster}
                preload="none"
                onPlay={() => setPlayingId(id)}
                onPause={() => setPlayingId((c) => (c === id ? null : c))}
              >
                <source src={video} type="video/mp4" />
              </video>
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/35 bg-black/20 px-3 py-2 text-[9px] font-semibold tracking-[.14em] text-white backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {label.toUpperCase()}
              </span>
              <button
                aria-label={isPlaying ? `Mettre en pause : ${label}` : `Lire : ${label}`}
                className="absolute inset-0 flex items-end p-5 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-brand"
                onClick={() => toggle(id)}
                type="button"
              >
                <span
                  className={`grid size-12 place-items-center rounded-full bg-brand text-white transition duration-300 group-hover:scale-105 motion-reduce:transition-none ${isPlaying ? "opacity-0 group-hover:opacity-100" : ""}`}
                >
                  {isPlaying ? (
                    <Pause aria-hidden="true" size={18} fill="currentColor" />
                  ) : (
                    <Play aria-hidden="true" size={18} fill="currentColor" />
                  )}
                </span>
              </button>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
