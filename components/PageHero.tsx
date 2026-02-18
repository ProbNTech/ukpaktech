"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface PageHeroProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  children,
  align = "left",
  className = "",
}: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={`relative bg-[#1C1F2E] overflow-hidden -mt-[72px] ${className}`}>
      {/* Content */}
      <div
        className={`relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 pt-[120px] pb-16 flex flex-col ${
          align === "center" ? "items-center text-center" : "items-start text-left"
        }`}
      >
        {/* Label slot rendered via children if passed before title — handled by callers */}

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
