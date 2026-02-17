"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import CountUp from "react-countup";
import { Globe2, Sparkles, TrendingUp, Users } from "lucide-react";

const stats = [
  {
    label: "Strategic Members",
    value: 120,
    suffix: "+",
    description: "Enterprises, startups, and public sector allies driving the mission.",
    icon: Users,
    color: "#2563EB",
    iconBg: "bg-[#2563EB]/10 border-[#2563EB]/20",
    iconColor: "text-[#2563EB]",
  },
  {
    label: "Innovation Programs",
    value: 48,
    suffix: "+",
    description: "Active initiatives across AI, trade, and digital transformation.",
    icon: Sparkles,
    color: "#22C55E",
    iconBg: "bg-[#22C55E]/10 border-[#22C55E]/20",
    iconColor: "text-[#22C55E]",
  },
  {
    label: "Cross-Border Ventures",
    value: 32,
    suffix: "+",
    description: "Investment and partnership pipelines between the UK and Pakistan.",
    icon: Globe2,
    color: "#2563EB",
    iconBg: "bg-[#2563EB]/10 border-[#2563EB]/20",
    iconColor: "text-[#2563EB]",
  },
  {
    label: "Export Growth Lift",
    value: 285,
    suffix: "%",
    description: "Momentum in digital trade outcomes accelerated by UPTECH.",
    icon: TrendingUp,
    color: "#22C55E",
    iconBg: "bg-[#22C55E]/10 border-[#22C55E]/20",
    iconColor: "text-[#22C55E]",
  },
];

export function ImpactStats() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <div ref={sectionRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.02 }}
            className="relative group"
          >
            <div className="relative h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-md transition-all duration-500 group-hover:shadow-lg overflow-hidden">
              <div
                className="absolute inset-x-0 top-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
              />
              <div className={`w-14 h-14 rounded-xl ${stat.iconBg} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                <Icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
              <div className="relative z-10 space-y-2">
                <div
                  className="text-5xl font-bold bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)` }}
                >
                  {shouldReduceMotion ? (
                    `${stat.value}${stat.suffix}`
                  ) : isInView ? (
                    <CountUp end={stat.value} duration={2.4} suffix={stat.suffix} separator="," />
                  ) : (
                    "0"
                  )}
                </div>
                <div className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F2937]/80">{stat.label}</div>
              </div>
              <p className="relative z-10 mt-4 text-sm leading-relaxed text-[#4B5563]">{stat.description}</p>
              <div
                className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}66, transparent)` }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
