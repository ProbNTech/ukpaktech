"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface PageHeroProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
  className?: string;
  /** Path to a background image (from /public). When omitted, falls back to solid dark background. */
  image?: string;
}

export function PageHero({
  title,
  subtitle,
  children,
  align = "left",
  className = "",
  image,
}: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={`relative overflow-hidden -mt-[72px] min-h-[480px] ${!image ? "bg-[#1C1F2E]" : ""} ${className}`}>
      {/* ── Background image + overlay ─────────────────────────────── */}
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-fit object-center"
            sizes="100vw"
          />
          {/* Dark overlay — left heavier, fading slightly right, matching the UKPropTech reference */}
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(to right, rgba(10,14,30,0.82) 0%, rgba(10,14,30,0.70) 50%, rgba(10,14,30,0.58) 100%)",
            }}
          />
          {/* Subtle bottom vignette so the page content below blends cleanly */}
          <div
            className="absolute bottom-0 inset-x-0 h-24 z-[1]"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(10,14,30,0.45))",
            }}
          />
        </>
      )}

      {/* Content */}
      <div
        className={`relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 pt-[120px] pb-16 flex flex-col ${
          align === "center" ? "items-center text-center" : "items-start text-left"
        }`}
      >
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`max-w-4xl ${align === "center" ? "mx-auto" : ""}`}
        >
          {typeof title === "string" ? (
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.08] text-white mb-5">
              {title}
            </h1>
          ) : (
            <div className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.08] text-white mb-5">
              {title}
            </div>
          )}

          {/* Horizontal rule — editorial signature */}
          <div className="w-full h-px bg-white/20 mb-5" />

          {subtitle && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {typeof subtitle === "string" ? (
                <p className="text-lg text-white/70 leading-relaxed max-w-2xl">{subtitle}</p>
              ) : (
                subtitle
              )}
            </motion.div>
          )}

          {children && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
