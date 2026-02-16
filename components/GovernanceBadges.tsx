"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Users, Scale, Eye } from "lucide-react";

export function GovernanceBadges() {
  const shouldReduceMotion = useReducedMotion();
  const badges = [
    {
      label: "Advisory Committee",
      icon: Users,
      color: "#00B140",
      bg: "border-[#00B140]/30 bg-[#00B140]/10",
    },
    {
      label: "Ethical Standards",
      icon: Scale,
      color: "#1E40AF",
      bg: "border-[#1E40AF]/30 bg-[#1E40AF]/10",
    },
    {
      label: "Full Transparency",
      icon: Eye,
      color: "#E11D48",
      bg: "border-[#E11D48]/30 bg-[#E11D48]/10",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={badge.label}
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -3 }}
            className={`relative flex items-center gap-2.5 px-6 py-3.5 rounded-full border backdrop-blur-md ${badge.bg} text-[#EAF2FF] text-sm font-semibold transition-all duration-300 group cursor-default`}
          >
            <Icon className="w-4 h-4" style={{ color: badge.color }} />
            <span className="relative z-10">{badge.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}