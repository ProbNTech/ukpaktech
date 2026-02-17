"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { sponsorLogos } from "@/data/sponsor-logos";
import { motion, useReducedMotion, useInView } from "framer-motion";

export function SponsorMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const duplicatedLogos = [...sponsorLogos, ...sponsorLogos];

  useEffect(() => {
    if (shouldReduceMotion && containerRef.current) {
      containerRef.current.style.animation = "none";
    }
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-x-auto scrollbar-hide py-8"
      >
        <div className="flex gap-8 min-w-max px-4">
          {sponsorLogos.map((logo, index) => (
            <div key={index} className="relative flex items-center justify-center h-24 w-36 md:h-28 md:w-44 shrink-0 bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <Image src={logo.src} alt={logo.alt} width={160} height={112} className="object-contain h-full w-full" loading="lazy" />
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden py-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

      <div className="flex gap-10">
        <div
          ref={containerRef}
          className={`flex gap-10 shrink-0 ${isPaused ? "animation-paused" : "animate-scroll-smooth"}`}
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={`logo-${index}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="group relative flex items-center justify-center h-24 w-36 md:h-28 md:w-44 shrink-0 cursor-pointer"
            >
              <div className="absolute inset-0 rounded-xl border border-gray-100 bg-white shadow-sm group-hover:shadow-md group-hover:border-[#2563EB]/20 transition-all duration-500" />
              <div className="relative z-10 w-full h-full flex items-center justify-center p-5">
                <Image src={logo.src} alt={logo.alt} width={160} height={112} className="object-contain h-full w-full" loading="lazy" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
