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
  align = "center",
  className = "",
}: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={`relative min-h-[60vh] flex items-center overflow-hidden bg-[#F8FAFC] pt-20 ${className}`}
    >
      {/* Subtle background gradient accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#2563EB] rounded-full opacity-[0.04] blur-[150px]" />
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-[#22C55E] rounded-full opacity-[0.03] blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/2 w-[400px] h-[400px] bg-[#2563EB] rounded-full opacity-[0.03] blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div
          className={`flex flex-col ${
            align === "center" ? "items-center text-center" : "items-start text-left"
          } max-w-4xl ${align === "center" ? "mx-auto" : ""}`}
        >
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10 w-full"
          >
            {typeof title === "string" ? (
              <motion.h1
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[#0F172A]"
              >
                {title}
              </motion.h1>
            ) : (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[#0F172A]"
              >
                {title}
              </motion.div>
            )}

            {subtitle && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {typeof subtitle === "string" ? (
                  <p className="text-xl md:text-2xl text-[#475569] font-medium leading-relaxed tracking-tight">{subtitle}</p>
                ) : (
                  subtitle
                )}
              </motion.div>
            )}

            {children && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {children}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
