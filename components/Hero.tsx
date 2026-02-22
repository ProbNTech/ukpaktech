"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Pause } from "lucide-react";



const videos = [
  "/image/home/hero_video_openart.mp4",
  "/image/home/hero_video_new2.mp4",
  "/image/home/hero_video_new3.mp4",
  "/image/home/hero_video3.mp4",
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

      {/* Subtle left-side gradient so white text remains readable over any video */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(5,10,20,0.45) 0%, rgba(5,10,20,0.15) 50%, rgba(5,10,20,0.0) 75%)",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-20 flex items-center lg:h-screen px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-14 sm:pt-16 lg:pt-0 pb-14 lg:pb-0">
        <div className="w-full max-w-full lg:max-w-[55%]">

          {/* Small label */}
          <p className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-[0.18em] text-[#C41E3A] mb-4 sm:mb-5">
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
