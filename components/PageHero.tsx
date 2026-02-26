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
  /** Optional small uppercase label above the title (e.g. "ABOUT US") */
  label?: string;
  /** Path to a background image (from /public). */
  image?: string;
}

export function PageHero({
  title,
  subtitle,
  children,
  align = "left",
  className = "",
  label,
  image,
}: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={`relative z-[2] w-full overflow-hidden bg-[#0B0F1A] ${className}`}>
      {/* Background image */}
      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      )}

      {/* Subtle left-side gradient for text readability — matches home hero */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(5,10,20,0.55) 0%, rgba(5,10,20,0.20) 50%, rgba(5,10,20,0.0) 75%)",
        }}
      />

      {/* Content */}
      <div
        className={`relative z-20 flex items-center min-h-[420px] lg:min-h-[480px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-20 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <div className={`w-full ${align === "center" ? "max-w-3xl text-center" : "max-w-[55%] max-lg:max-w-full"}`}>
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Label */}
            {label && (
              <p className="text-lg sm:text-xl font-extrabold uppercase tracking-[0.18em] text-[#C41E3A] mb-4 sm:mb-5">
                {label}
              </p>
            )}

            {/* Title */}
            {typeof title === "string" ? (
              <h1
                className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[3rem] text-white mb-5 sm:mb-6"
                style={{ lineHeight: 1.25 }}
              >
                {title}
              </h1>
            ) : (
              <div
                className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[3rem] text-white mb-5 sm:mb-6"
                style={{ lineHeight: 1.25 }}
              >
                {title}
              </div>
            )}

            {/* Subtitle */}
            {subtitle && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {typeof subtitle === "string" ? (
                  <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl">{subtitle}</p>
                ) : (
                  subtitle
                )}
              </motion.div>
            )}

            {/* Children (buttons, stats, etc.) */}
            {children && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 sm:mt-8"
              >
                {children}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line — matches home hero */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] z-30 bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#E11D48]" />
    </section>
  );
}
