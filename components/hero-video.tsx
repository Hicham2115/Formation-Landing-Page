"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try audible autoplay first; the bottom playback control remains available if blocked.
    void video.play().then(
      () => {
        setIsPlaying(true);
      },
      () => setIsPlaying(false),
    );
  }, []);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (!video.paused) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  }

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        aria-label="ADDICS LASER - MONTAGE"
        autoPlay
        className="size-full object-cover"
        loop
        playsInline
        poster="/images/laser-ear-detail.jpg"
        preload="metadata"
        onError={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        <source src="/addics-laser-hero-optimized.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge la lecture vidéo.
      </video>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/75 to-transparent px-4 pb-4 pt-10 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:focus-within:opacity-100">
        <button
          aria-label={isPlaying ? "Mettre la vidéo en pause" : "Lire la vidéo"}
          className="flex size-10 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={togglePlayback}
          type="button"
        >
          {isPlaying ? <Pause aria-hidden="true" size={18} /> : <Play aria-hidden="true" fill="currentColor" size={18} />}
        </button>
        <button
          aria-label={isMuted ? "Activer le son" : "Couper le son"}
          aria-pressed={!isMuted}
          className="flex size-10 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={toggleSound}
          type="button"
        >
          {isMuted ? <VolumeX aria-hidden="true" size={18} /> : <Volume2 aria-hidden="true" size={18} />}
        </button>
      </div>
    </div>
  );
}
