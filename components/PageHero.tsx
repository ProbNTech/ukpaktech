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
  label?: string;
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

      {/* Subtle left-side gradient for text readability */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(5,10,20,0.55) 0%, rgba(5,10,20,0.20) 50%, rgba(5,10,20,0.0) 75%)",
        }}
      />

      {/* Dot-grid texture overlay */}
      <div
        className="absolute inset-0 z-[11] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute right-[10%] top-[20%] w-[400px] h-[400px] rounded-full pointer-events-none z-[5]"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12), transparent 70%)" }}
        animate={shouldReduceMotion ? {} : { y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[60%] bottom-[15%] w-[250px] h-[250px] rounded-full pointer-events-none z-[5]"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.08), transparent 70%)" }}
        animate={shouldReduceMotion ? {} : { y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div
        className={`relative z-20 flex items-center min-h-[420px] lg:min-h-[480px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-20 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <div className={`w-full ${align === "center" ? "max-w-3xl text-center" : "max-w-[55%] max-lg:max-w-full"}`}>
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Label */}
            {label && (
              <motion.p
                className="text-lg sm:text-xl font-extrabold uppercase tracking-[0.18em] text-[#C41E3A] mb-4 sm:mb-5"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                {label}
              </motion.p>
            )}

            {/* Title — word-by-word blur-in for strings */}
            {typeof title === "string" ? (
              <h1
                className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[3rem] text-white mb-5 sm:mb-6"
                style={{ lineHeight: 1.25 }}
              >
                {title.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.3em]"
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            ) : (
              <motion.div
                className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[3rem] text-white mb-5 sm:mb-6"
                style={{ lineHeight: 1.25 }}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {title}
              </motion.div>
            )}

            {/* Subtitle */}
            {subtitle && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
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
                transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 sm:mt-8"
              >
                {children}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] z-30 bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#E11D48]" />
    </section>
  );
}
