"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [needsPlay, setNeedsPlay] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try audible autoplay first. Browsers that block it show a user-gesture control.
    void video.play().then(
      () => setNeedsPlay(false),
      () => setNeedsPlay(true),
    );
  }, []);

  async function startWithSound() {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    try {
      await video.play();
      setNeedsPlay(false);
    } catch {
      setNeedsPlay(true);
    }
  }

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        aria-label="ADDICS LASER - MONTAGE"
        autoPlay
        className="size-full object-cover"
        controls
        loop
        playsInline
        poster="/images/laser-ear-detail.jpg"
        preload="metadata"
      >
        <source src="/addics-laser-hero-optimized.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge la lecture vidéo.
      </video>
      {needsPlay && (
        <button
          className="absolute inset-x-4 bottom-4 mx-auto w-fit rounded-full bg-black/75 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={startWithSound}
          type="button"
        >
          Lire la vidéo avec le son
        </button>
      )}
    </div>
  );
}
