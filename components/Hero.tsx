"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Pause } from "lucide-react";



const videos = [
  "/image/home/hero_video3.mp4",
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
    <section className="relative w-full min-h-0 lg:h-screen overflow-hidden bg-[#0B0F1A]">
      {/* Background videos — all screen sizes */}
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

      {/* SVG Overlay — dark glassy panel with circular cutout */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 508 264.583"
          preserveAspectRatio="xMinYMin slice"
          className="w-full h-full"
        >
          <defs>
            <filter id="crescentBlur" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>
          <path
            d="
              M -760 -445 L -760 710 L 1268 710 L 1268 -445 Z
              M 205.357 -442.635
              A 425.831 425.831 0 0 1 582.289 -19.654
              A 425.831 425.831 0 0 1 156.457  406.176
              A 425.831 425.831 0 0 1   9.520  379.762
              A 425.831 425.831 0 0 0  58.562  382.893
              A 425.831 425.831 0 0 0 484.395  -42.938
              A 425.831 425.831 0 0 0 205.357 -442.635 Z
            "
            style={{ fill: "#111827", fillOpacity: 0.6, mixBlendMode: "multiply" }}
          />
          <path
            d="
              M 205.357 -442.635
              A 425.831 425.831 0 0 1 484.395  -42.938
              A 425.831 425.831 0 0 1  58.562  382.893
              A 425.831 425.831 0 0 1   9.520  379.762
              L -760 710
              L -760 -445
              Z
            "
            filter="url(#crescentBlur)"
            style={{ fill: "#1e3a5f", fillOpacity: 0.1, mixBlendMode: "normal" }}
          />
        </svg>
      </div>

      {/* Overlay — top darkness for header readability */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(5,10,20,0.6) 0%, rgba(5,10,20,0.25) 18%, rgba(5,10,20,0.00) 38%)",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-20 flex items-center lg:h-screen px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-36 sm:pt-40 lg:pt-40 pb-14 lg:pb-0">
        <div className="w-full max-w-full lg:max-w-[55%]">

          {/* Small label */}
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#C41E3A] mb-3 sm:mb-4">
            UPTECH
          </p>

          {/* Headline */}
          <h1
            className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[3rem] text-white mb-5 sm:mb-7"
            style={{ lineHeight: 1.25 }}
          >
            Driving bilateral technology collaboration between the UK and Pakistan
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#C41E3A] text-white font-bold text-sm sm:text-base hover:bg-[#A01830] transition-colors duration-200"
            >
              Explore our work
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/membership"
              className="inline-flex items-center gap-2.5 text-white font-semibold text-sm sm:text-base underline underline-offset-4 hover:text-white/75 transition-colors duration-200"
            >
              Discover our membership
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Gold/yellow separator line */}
          <div className="w-full h-px bg-[#F59E0B] mb-4 sm:mb-6" />

          {/* Partner logos row */}
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-white/80 mb-4 sm:mb-5">
            Trusted by leading organisations
          </p>
          <div className="flex items-center gap-4 sm:gap-8 lg:gap-10 flex-wrap">
            {["/image/sponsor-logos/1.png", "/image/sponsor-logos/2.png", "/image/sponsor-logos/3.png"].map((src, i) => (
              <div key={i} className="relative h-8 w-20 sm:h-12 sm:w-32 lg:h-14 lg:w-36 opacity-80 hover:opacity-100 transition-opacity duration-200">
                <Image
                  src={src}
                  alt={`Partner ${i + 1}`}
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 144px"
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
