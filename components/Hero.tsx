"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Play, Pause } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const slides = [
  {
    video: "/image/home/hero_video_openart.mp4",
    label: "UPTECH",
    headline: "Driving bilateral technology collaboration between the UK and Pakistan",
    cta: { text: "Explore our work", href: "/about" },
    secondary: { text: "Discover our membership", href: "/membership" },
  },
  {
    video: "/image/home/hero_video_new2.mp4",
    label: "INNOVATION",
    headline: "Connecting startups, investors & enterprises across borders",
    cta: { text: "Discover programmes", href: "/programs/ai-tech-programs" },
    secondary: { text: "View initiatives", href: "/initiatives/people-ai" },
  },
  {
    video: "/image/home/hero_video_new3.mp4",
    label: "PARTNERSHIP",
    headline: "Building the UK–Pakistan digital corridor of the future",
    cta: { text: "Join the ecosystem", href: "/ecosystem/uk-pakistan-technology-partnership" },
    secondary: { text: "Trade delegations", href: "/ecosystem/trade-delegations-and-exhibitions" },
  },
  {
    video: "/image/home/hero_video3.mp4",
    label: "MEMBERSHIP",
    headline: "A trusted network of 120+ members shaping bilateral tech growth",
    cta: { text: "Become a member", href: "/membership" },
    secondary: { text: "Upcoming events", href: "/events" },
  },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
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
    setCurrentIndex((prev) => (prev + 1) % slides.length);
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

  const slide = slides[currentIndex];

  return (
    <section className="relative z-[2] w-full min-h-[420px] sm:min-h-[500px] lg:h-screen overflow-hidden bg-[#0B0F1A]">
      {/* Background videos */}
      {slides.map((s, index) => {
        const isActive = index === currentIndex;
        const isNext = index === (currentIndex + 1) % slides.length;
        return (
          <video
            key={s.video}
            ref={setVideoRef(index)}
            aria-hidden="true"
            autoPlay={index === 0}
            muted
            playsInline
            preload={isActive || isNext ? "auto" : "none"}
            onEnded={isActive ? handleVideoEnded : undefined}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out will-change-[opacity] ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <source src={s.video} type="video/mp4" />
          </video>
        );
      })}

      {/* Dark overlay for text readability across all video slides */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(5,10,20,0.72) 0%, rgba(5,10,20,0.50) 45%, rgba(5,10,20,0.25) 70%, rgba(5,10,20,0.10) 100%)",
        }}
      />

      {/* Subtle overlay — non-repeating */}
      <div className="absolute inset-0 z-[11] pointer-events-none opacity-[0.04] bg-gradient-to-br from-white/5 via-transparent to-white/5" />

      {/* Content wrapper */}
      <div className="relative z-20 flex items-center lg:h-screen px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-14 sm:pt-16 lg:pt-0 pb-14 lg:pb-0">
        <div className="w-full max-w-full lg:max-w-[55%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Small label */}
              <p className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-[0.18em] text-[#C41E3A] mb-4 sm:mb-5" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
                {slide.label}
              </p>

              {/* Headline — word-by-word blur-in */}
              <h1
                className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[3rem] text-white mb-5 sm:mb-7"
                style={{ lineHeight: 1.25, textShadow: "0 2px 8px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.4)" }}
              >
                {slide.headline.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.3em]"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 16, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.35, delay: 0.15 + i * 0.035, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <ShinyButton href={slide.cta.href}>
                  {slide.cta.text}
                </ShinyButton>
                <Link
                  href={slide.secondary.href}
                  className="inline-flex items-center gap-2.5 text-white font-semibold text-base sm:text-base underline underline-offset-4 hover:text-white/75 transition-colors duration-200"
                >
                  {slide.secondary.text}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Pause/Play toggle button */}
      <button
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className="absolute bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
      </button>

      {/* Video indicator dots — pill style with width animation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Switch to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "bg-[#22C55E] w-8"
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
