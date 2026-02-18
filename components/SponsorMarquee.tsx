"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { sponsorLogos } from "@/data/sponsor-logos";
import { useReducedMotion } from "framer-motion";

export function SponsorMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const duplicatedLogos = [...sponsorLogos, ...sponsorLogos];

  useEffect(() => {
    if (shouldReduceMotion && containerRef.current) {
      containerRef.current.style.animation = "none";
    }
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="relative overflow-x-auto scrollbar-hide py-4">
        <div className="flex gap-6 min-w-max">
          {sponsorLogos.map((logo, index) => (
            <div key={index} className="relative flex items-center justify-center h-16 w-32 shrink-0 bg-white border border-[#D8D5CF] p-4">
              <Image src={logo.src} alt={logo.alt} width={128} height={64} className="object-contain h-full w-full" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fade edges — match the section background */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#EEECEA] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#EEECEA] to-transparent z-10 pointer-events-none" />

      <div className="flex gap-8">
        <div
          ref={containerRef}
          className={`flex gap-8 shrink-0 ${isPaused ? "animation-paused" : "animate-scroll-smooth"}`}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="flex items-center justify-center h-16 w-32 shrink-0 bg-white border border-[#D8D5CF] p-4"
            >
              <Image src={logo.src} alt={logo.alt} width={128} height={64} className="object-contain h-full w-full" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
