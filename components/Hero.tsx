"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Play, Pause } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const videos = [
  "/image/home/hero_video.mp4",
  "/image/home/hero_video1.mp4",
  "/image/home/hero_video2.mp4",
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
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
    <section className="relative w-full h-[75vh] lg:h-[85vh] -mt-[72px] overflow-hidden bg-gray-900">
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

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/40 to-black/20 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-20 flex items-center h-[75vh] lg:h-[85vh] pt-24 pb-16">
        <div className="mx-auto max-w-[1280px] w-full px-6 lg:px-12">
          <div className="max-w-2xl space-y-5">
            {/* Small label */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                Bilateral Technology Council
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-white"
            >
              UK–Pakistan{" "}
              <span className="text-[#60A5FA]">Tech Council</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed"
            >
              Driving technology collaboration between the United Kingdom and Pakistan.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl"
            >
              A strategic platform strengthening innovation, digital trade, and institutional partnerships across both nations.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2563EB] text-white font-semibold text-sm shadow-md hover:bg-[#1D4ED8] transition-colors duration-300"
              >
                Explore the Council
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#22C55E] text-white font-semibold text-sm bg-[#22C55E]/20 hover:bg-[#22C55E] transition-colors duration-300"
              >
                View Events
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
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
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "bg-[#22C55E] w-6"
                : "bg-[#22C55E]/40 hover:bg-[#22C55E]/60"
            }`}
          />
        ))}
      </div>

      {/* Bottom accent line — only place red is used */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] z-30 bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#E11D48]" />
    </section>
  );
}
