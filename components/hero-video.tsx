"use client";

import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isMounted = true;
    video.muted = false;

    video.play().catch(() => {
      if (isMounted) setIsPlaying(false);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    video.pause();
  }

  function handleVideoClick() {
    setShowControls(true);

    const video = videoRef.current;
    if (!video?.paused) return;

    video.play().catch(() => {
      setIsPlaying(false);
    });
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  }

  return (
    <div
      className="group absolute inset-0"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onTouchStart={() => setShowControls(true)}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        preload="metadata"
        poster="/transfer-01a17ab0/ADDICS%20LASER5.png"
        className="size-full object-cover"
        aria-label="Montage vidéo montrant le laser Addic et son application sur l’oreille"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={handleVideoClick}
      >
        <source src="/ADDICS%20LASER%20-%20MONTAGE%20.mp4" type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5" />

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Mettre la vidéo en pause" : "Lire la vidéo"}
        className={`absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-black/55 text-white shadow-lg backdrop-blur-sm transition duration-200 hover:scale-105 hover:bg-brand focus-visible:pointer-events-auto focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:size-[76px] ${showControls ? "scale-100 opacity-100" : "pointer-events-none scale-90 opacity-0"}`}
      >
        {isPlaying ? (
          <Pause aria-hidden="true" size={27} fill="currentColor" />
        ) : (
          <Play
            aria-hidden="true"
            size={27}
            fill="currentColor"
            className="translate-x-0.5"
          />
        )}
      </button>

      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? "Activer le son" : "Couper le son"}
        className={`absolute bottom-4 right-4 grid size-11 place-items-center rounded-full border border-white/30 bg-black/55 text-white backdrop-blur-sm transition hover:bg-black/75 focus-visible:pointer-events-auto focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:bottom-6 sm:right-6 ${showControls ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        {isMuted ? (
          <VolumeX aria-hidden="true" size={19} />
        ) : (
          <Volume2 aria-hidden="true" size={19} />
        )}
      </button>
    </div>
  );
}
