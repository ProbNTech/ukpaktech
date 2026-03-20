"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const advisors = [
  {
    name: "Hussnain Kazmi",
    role: "Chairman",
    bio: "Providing strategic vision and governance oversight for the UK–Pakistan technology corridor.",
    photo: "/image/chairman/hussnain-kazmi.jpg",
    accent: "#D4AF37",
    delay: 0,
  },
  {
    name: "Khalil Choudhary",
    role: "President",
    bio: "Leading bilateral partnerships, policy engagement, and operational strategy across both nations.",
    photo: "/image/ceo/khalil-choudhary-headshot.jpg",
    accent: "#C0C0C0",
    delay: 0.15,
  },
  {
    name: "Muhammad Faizan Ashraf",
    role: "Board Director — Technology & Innovation",
    bio: "Driving technology initiatives, innovation programmes, and digital transformation strategy.",
    photo: "/image/board/director.jpg",
    accent: "#B08D57",
    delay: 0.3,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function BoardOfAdvisors() {
  const reduce = useReducedMotion();

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* ── Deep gradient background ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #070d1f 0%, #0f1a3a 35%, #152040 60%, #0a1025 100%)",
        }}
      />

      {/* Subtle radial light spots */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 600px 400px at 20% 20%, rgba(212,175,55,0.08) 0%, transparent 100%), radial-gradient(ellipse 500px 350px at 80% 80%, rgba(59,130,246,0.06) 0%, transparent 100%)",
        }}
      />

      {/* Fine dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* ── Heading ── */}
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={headingVariants}
          className="text-center mb-14 lg:mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">
            Leadership
          </p>

          <h2
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Board of Advisors
          </h2>

          {/* Accent underline */}
          <div className="flex items-center justify-center gap-2">
            <span className="block h-[2px] w-10 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="block h-[3px] w-16 bg-[#D4AF37] rounded-full" />
            <span className="block h-[2px] w-10 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Guided by distinguished leaders committed to strengthening
            UK–Pakistan technology collaboration.
          </p>
        </motion.div>

        {/* ── Cards — 3-column horizontal layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {advisors.map((advisor) => (
            <motion.div
              key={advisor.name}
              custom={advisor.delay}
              initial={reduce ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
            >
              <AdvisorCard advisor={advisor} />
            </motion.div>
          ))}
        </div>

        {/* ── Bottom decorative strip ── */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 lg:mt-16 flex items-center justify-center gap-3"
        >
          <div className="h-px flex-1 max-w-[140px] bg-gradient-to-r from-transparent to-[#D4AF37]/30" />
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-[0.2em] font-medium text-center">
            More advisors joining soon
          </p>
          <div className="h-px flex-1 max-w-[140px] bg-gradient-to-l from-transparent to-[#D4AF37]/30" />
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────
   Advisor Card — tall, elegant card with glass effect
──────────────────────────────────────────────────── */
function AdvisorCard({
  advisor,
}: {
  advisor: (typeof advisors)[number];
}) {
  return (
    <div className="group relative flex flex-col items-center text-center rounded-2xl overflow-hidden h-full">
      {/* Glass card background */}
      <div
        className="absolute inset-0 rounded-2xl transition-all duration-500"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(180deg, ${advisor.accent}08 0%, transparent 60%)`,
          border: `1px solid ${advisor.accent}20`,
        }}
      />

      {/* Card content */}
      <div className="relative z-10 px-6 pt-10 pb-8 flex flex-col items-center h-full">
        {/* Photo */}
        <div className="relative mb-6 group/photo">
          {/* Outer glow ring */}
          <div
            className="absolute -inset-[3px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `conic-gradient(from 0deg, ${advisor.accent}, transparent 40%, ${advisor.accent} 60%, transparent 100%)`,
            }}
          />
          <div className="absolute -inset-[2px] rounded-full bg-[#0f1a3a]" />

          <div
            className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg"
            style={{ boxShadow: `0 0 0 2px ${advisor.accent}40` }}
          >
            <Image
              src={advisor.photo}
              alt={advisor.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="160px"
            />
          </div>

          {/* Hover glow beneath */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500 -z-10"
            style={{ background: advisor.accent }}
          />
        </div>

        {/* Name */}
        <h3
          className="font-heading font-bold text-white text-lg sm:text-xl leading-tight mb-3"
          style={{ fontFamily: "'Lato', serif" }}
        >
          {advisor.name}
        </h3>

        {/* Role badge */}
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4"
          style={{
            color: advisor.accent,
            background: `${advisor.accent}12`,
            border: `1px solid ${advisor.accent}30`,
          }}
        >
          {advisor.role}
        </span>

        {/* Bio */}
        <p className="text-gray-400/80 text-sm leading-relaxed mt-auto">
          {advisor.bio}
        </p>
      </div>
    </div>
  );
}
