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
  },
  {
    label: "Innovation Programs",
    value: 48,
    suffix: "+",
    description: "Active initiatives across AI, trade, and digital transformation.",
    icon: Sparkles,
    color: "#22C55E",
  },
  {
    label: "Cross-Border Ventures",
    value: 32,
    suffix: "+",
    description: "Investment and partnership pipelines between the UK and Pakistan.",
    icon: Globe2,
    color: "#2563EB",
  },
  {
    label: "Export Growth Lift",
    value: 285,
    suffix: "%",
    description: "Momentum in digital trade outcomes accelerated by UPTECH.",
    icon: TrendingUp,
    color: "#22C55E",
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
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="bg-white border border-[#D8D5CF] rounded p-7 flex flex-col group hover:border-[#2563EB]/40 hover:shadow-lg transition-all duration-300"
          >
            <Icon className="h-5 w-5 mb-5" style={{ color: stat.color }} />
            <div
              className="text-5xl font-bold mb-2 bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, ${stat.color}, ${stat.color}cc)` }}
            >
              {shouldReduceMotion ? (
                `${stat.value}${stat.suffix}`
              ) : isInView ? (
                <CountUp end={stat.value} duration={2.2} suffix={stat.suffix} separator="," />
              ) : (
                "0"
              )}
            </div>
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#1C1F2E] mb-3">{stat.label}</div>
            <motion.div
              className="h-px mb-3"
              style={{ background: `linear-gradient(90deg, ${stat.color}, ${stat.color}40)` }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            />
            <p className="text-sm leading-relaxed text-[#3D4152]">{stat.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
