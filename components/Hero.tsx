"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Pause } from "lucide-react";


const videos = [
  "/image/home/hero_video.mp4",
  "/image/home/hero_video1.mp4",
  "/image/home/hero_video2.mp4",
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const setVideoRef = useCallback(
    (index: number) => (el: HTMLVideoElement | null) => {
      videoRefs.current[index] = el;
    },
    []
  );

  const handleVideoEnded = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  }, []);

  useEffect(() => {
    const activeVideo = videoRefs.current[currentIndex];
    if (!activeVideo) return;

    activeVideo.currentTime = 0;

    if (isPlaying) {
      activeVideo.play().catch(() => {});
    }

    videoRefs.current.forEach((v, i) => {
      if (v && i !== currentIndex) {
        v.pause();
        v.currentTime = 0;
      }
    });
  }, [currentIndex, isPlaying]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => {
      const next = !prev;
      const activeVideo = videoRefs.current[currentIndex];
      if (activeVideo) {
        if (next) {
          activeVideo.play().catch(() => {});
        } else {
          activeVideo.pause();
        }
      }
      return next;
    });
  }, [currentIndex]);

  return (
    <section className="relative w-full h-screen -mt-[72px] overflow-hidden bg-[#0B0F1A]">
      {/* Stacked background videos */}
      {videos.map((src, index) => (
        <video
          key={src}
          ref={setVideoRef(index)}
          autoPlay={index === 0}
          muted
          playsInline
          preload="auto"
          onEnded={index === currentIndex ? handleVideoEnded : undefined}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}

      {/* Overlay — dark navy base + left-to-right fade, matching reference image */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(8,16,36,0.92) 0%, rgba(8,16,36,0.85) 45%, rgba(8,16,36,0.50) 70%, rgba(8,16,36,0.10) 100%)",
        }}
      />

      {/* Content wrapper — bottom-anchored like ukproptech */}
      <div className="relative z-20 flex items-end h-screen pb-16 pt-[72px]">
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">

          {/* Small label */}
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2563EB] mb-4">
            UPTECH
          </p>

          {/* Headline */}
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] leading-[1.05] text-white mb-8 max-w-[800px]">
            Driving bilateral technology collaboration between the UK and Pakistan
          </h1>

          {/* Buttons — rounded-full pill + plain underlined link */}
          <div className="flex flex-wrap items-center gap-6 mb-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#C41E3A] text-white font-bold text-base hover:bg-[#A01830] transition-colors duration-200"
            >
              Explore our work
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/membership"
              className="inline-flex items-center gap-2.5 text-white font-semibold text-base underline underline-offset-4 hover:text-white/75 transition-colors duration-200"
            >
              Discover our membership
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Green separator line — ukproptech signature */}
          <div className="w-full h-px bg-[#22C55E] mb-6" />

          {/* Partner logos row */}
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-4">
            Trusted by leading organisations
          </p>
          <div className="flex items-center gap-8 flex-wrap">
            {["/image/sponsor-logos/1.png", "/image/sponsor-logos/2.png", "/image/sponsor-logos/3.png"].map((src, i) => (
              <div key={i} className="relative h-8 w-24 opacity-70 hover:opacity-100 transition-opacity duration-200">
                <Image
                  src={src}
                  alt={`Partner ${i + 1}`}
                  fill
                  className="object-contain object-left"
                  sizes="96px"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Pause/Play toggle button */}
      <button
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className="absolute bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
      </button>

      {/* Video indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Switch to video ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "bg-[#22C55E] w-6"
                : "bg-white/40 w-2 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] z-30 bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#E11D48]" />
    </section>
  );
}
