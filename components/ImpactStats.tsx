"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import CountUp from "react-countup";
import { LiquidCard, CardContent } from "@/components/ui/liquid-glass-card";

/* ─── Stat data ─── */
const stats = [
  {
    label: "Strategic Members",
    value: 120,
    suffix: "+",
    percent: 80,
    description: "Enterprises, startups, and public sector allies driving the mission.",
    color: "#2563EB",
  },
  {
    label: "Innovation Programs",
    value: 48,
    suffix: "+",
    percent: 80,
    description: "Active initiatives across AI, trade, and digital transformation.",
    color: "#22C55E",
  },
  {
    label: "Cross-Border Ventures",
    value: 32,
    suffix: "+",
    percent: 75,
    description: "Investment and partnership pipelines between the UK and Pakistan.",
    color: "#C41E3A",
  },
  {
    label: "Export Growth Lift",
    value: 285,
    suffix: "%",
    percent: 95,
    description: "Momentum in digital trade outcomes accelerated by UPTECH.",
    color: "#EAB308",
  },
];

/* ─── Half-circle gauge ─── */
function HalfCircleGauge({ percent, color, animate }: { percent: number; color: string; animate: boolean }) {
  const strokeRef = useRef<SVGCircleElement>(null);
  const gradIdRef = useRef(`gauge-${Math.random().toString(36).slice(2, 6)}`);
  const gradId = gradIdRef.current;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const halfCirc = circumference / 2;
  const strokeDasharray = `${halfCirc} ${halfCirc}`;
  const targetOffset = -Math.min(percent / 100, 1) * halfCirc;

  useEffect(() => {
    if (!animate || !strokeRef.current) return;
    strokeRef.current.animate(
      [
        { strokeDashoffset: "0", offset: 0 },
        { strokeDashoffset: "0", offset: 0.3 },
        { strokeDashoffset: targetOffset.toString() },
      ],
      {
        duration: 1400,
        easing: "cubic-bezier(0.65, 0, 0.35, 1)",
        fill: "forwards",
      },
    );
  }, [animate, targetOffset]);

  return (
    <svg className="block mx-auto w-auto max-w-full h-32" viewBox="0 0 100 50" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={`${color}60`} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={`${color}90`} />
        </linearGradient>
      </defs>
      <g fill="none" strokeWidth="10" transform="translate(50, 50.5)">
        <circle className="stroke-[#E8E6E3]" r={radius} strokeDasharray={strokeDasharray} />
        <circle
          ref={strokeRef}
          stroke={`url(#${gradId})`}
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          r={radius}
        />
      </g>
    </svg>
  );
}

/* ─── Single stat card ─── */
function StatScoreCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [appeared, setAppeared] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => setAppeared(true), 200 + index * 200);
    return () => clearTimeout(timeout);
  }, [isInView, index]);

  if (!appeared && !shouldReduceMotion) {
    return <div ref={ref} className="h-[360px]" />;
  }

  return (
    <div ref={ref} className="h-[360px]">
      <motion.div
        className="h-full"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <LiquidCard className="w-full h-full">
          <CardContent className="p-7 flex flex-col h-full justify-between">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-semibold text-[#1C1F2E] truncate">{stat.label}</h3>
              <span
                className="shrink-0 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
                style={{ background: `${stat.color}15`, color: stat.color }}
              >
                {stat.percent}%
              </span>
            </div>

            {/* Half-circle gauge + value */}
            <div className="relative mb-4">
              <HalfCircleGauge percent={stat.percent} color={stat.color} animate={isInView} />
              <div className="absolute bottom-0 w-full text-center">
                <div className="text-4xl font-bold h-12 overflow-hidden" style={{ color: stat.color }}>
                  {shouldReduceMotion ? (
                    `${stat.value}${stat.suffix}`
                  ) : isInView ? (
                    <CountUp end={stat.value} duration={2.2} suffix={stat.suffix} separator="," />
                  ) : (
                    "0"
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#3D4152]/70 text-center leading-relaxed mt-auto">
              {stat.description}
            </p>
          </CardContent>
        </LiquidCard>
      </motion.div>
    </div>
  );
}

/* ─── Main component ─── */
export function ImpactStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
      {stats.map((stat, index) => (
        <StatScoreCard key={stat.label} stat={stat} index={index} />
      ))}
    </div>
  );
}
