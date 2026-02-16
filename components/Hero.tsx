"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const slides: { type: "image" | "video"; src: string; poster?: string }[] = [
  { type: "image", src: "/image/home/heroimg.jpeg" },
  { type: "image", src: "/image/eventgallery/event-1.jpg" },
  { type: "image", src: "/image/eventgallery/event-2.jpg" },
  { type: "video", src: "/image/home/banner_video_720.mp4", poster: "/image/home/heroimg.jpeg" },
  { type: "image", src: "/image/eventgallery/event-3.jpg" },
];

const INTERVAL = 5500;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setCurrent(next);
    },
    []
  );

  const next = useCallback(() => {
    go((current + 1) % slides.length, 1);
  }, [current, go]);

  const prev = useCallback(() => {
    go((current - 1 + slides.length) % slides.length, -1);
  }, [current, go]);

  useEffect(() => {
    timerRef.current = setTimeout(next, INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, next]);

  const variants = shouldReduceMotion
    ? { enter: { opacity: 1 }, center: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d: number) => ({ x: d > 0 ? "-50%" : "50%", opacity: 0 }),
      };

  return (
    <section className="relative w-full h-[58vh] min-h-[420px] max-h-[720px] overflow-hidden bg-white pt-0">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
          className="absolute inset-0"
        >
          {slides[current].type === "image" ? (
            <Image
              src={slides[current].src}
              alt="Hero slide"
              fill
              priority={current === 0}
              className="object-cover"
              sizes="100vw"
            />
          ) : (
            <video
              key={slides[current].src}
              autoPlay
              muted
              loop
              playsInline
              poster={slides[current].poster}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={slides[current].src} type="video/mp4" />
            </video>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Left gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/80 via-[#0B1220]/45 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/40 via-transparent to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-5">
            {/* Small label */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2D5BFF]/40 bg-[#2D5BFF]/15 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D5BFF] animate-pulse" />
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
              <span className="text-[#2D5BFF]">Tech Council</span>
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2D5BFF] text-white font-semibold text-sm shadow-md hover:bg-[#1E40AF] transition-colors duration-300"
              >
                Explore the Council
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#00B140] text-[#00B140] font-semibold text-sm hover:bg-[#00B140]/10 transition-colors duration-300"
              >
                View Events
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > current ? 1 : -1)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 h-2.5 bg-[#2D5BFF]"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] z-20 bg-gradient-to-r from-[#2D5BFF] via-[#00B140] to-[#E11D48]" />
    </section>
  );
}
