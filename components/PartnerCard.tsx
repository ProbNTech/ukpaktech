"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import { LazyImage } from "@/components/ui/lazy-image";
import type { FeaturedPartner } from "@/data/featured-partners";

const categoryThemes: Record<string, { gradient: string; glow: string; text: string; badge: string; ring: string }> = {
  "AI & Data":      { gradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)", glow: "#3B82F6", text: "#1E40AF", badge: "#EFF6FF",  ring: "#BFDBFE" },
  Fintech:          { gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)", glow: "#10B981", text: "#065F46", badge: "#ECFDF5",  ring: "#A7F3D0" },
  Cybersecurity:    { gradient: "linear-gradient(135deg, #F43F5E 0%, #BE123C 100%)", glow: "#F43F5E", text: "#9F1239", badge: "#FFF1F2",  ring: "#FECDD3" },
  Cloud:            { gradient: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)", glow: "#8B5CF6", text: "#5B21B6", badge: "#F5F3FF",  ring: "#DDD6FE" },
  Consulting:       { gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)", glow: "#F59E0B", text: "#92400E", badge: "#FFFBEB",  ring: "#FDE68A" },
  HealthTech:       { gradient: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)", glow: "#06B6D4", text: "#155E75", badge: "#ECFEFF",  ring: "#A5F3FC" },
};

function getTheme(category: string) {
  return categoryThemes[category] || categoryThemes["AI & Data"];
}

interface PartnerCardProps {
  partner: FeaturedPartner;
  index?: number;
}

export function PartnerCard({ partner, index = 0 }: PartnerCardProps) {
  const theme = getTheme(partner.category);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (y - 0.5) * -6, y: (x - 0.5) * 6 });
    setGlowPos({ x: x * 100, y: y * 100 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  const initial = partner.name.charAt(0).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        ref={cardRef}
        className="group relative h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        style={{ perspective: "900px" }}
      >
        <a
          href={partner.href}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="relative flex flex-col h-full rounded-2xl overflow-hidden"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? "translateY(-8px)" : ""}`,
            transition: isHovered
              ? "transform 0.1s ease-out, box-shadow 0.4s ease"
              : "transform 0.6s cubic-bezier(.25,.8,.25,1), box-shadow 0.4s ease",
            transformStyle: "preserve-3d",
            background: "#fff",
            boxShadow: isHovered
              ? `0 25px 50px -12px ${theme.glow}25, 0 12px 24px -8px rgba(0,0,0,0.06), 0 0 0 1px ${theme.glow}15`
              : "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px -2px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.03)",
          }}
        >
          {/* Top accent gradient bar */}
          <div
            className="h-1 w-full shrink-0 transition-all duration-500"
            style={{
              background: isHovered ? theme.gradient : `linear-gradient(90deg, ${theme.glow}40, ${theme.glow}10)`,
            }}
          />

          {/* Cursor-following glow on hover */}
          {isHovered && (
            <div
              className="absolute inset-0 pointer-events-none z-10 rounded-2xl"
              style={{
                background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, ${theme.glow}08, transparent 50%)`,
              }}
            />
          )}

          {/* Image */}
          <div className="relative mx-4 mt-4 rounded-xl overflow-hidden">
            <LazyImage
              src={partner.image}
              fallback="/image/placeholder.webp"
              inView={true}
              alt={partner.name}
              ratio={16 / 9}
              className="transition-all duration-700 group-hover:scale-105"
            />

            {/* Subtle vignette for depth */}
            <div
              className="absolute inset-0 pointer-events-none rounded-xl"
              style={{
                boxShadow: "inset 0 0 30px rgba(0,0,0,0.06)",
              }}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
            {/* Company row: monogram + name + category */}
            <div className="flex items-start gap-3 mb-3">
              {/* Monogram circle */}
              <div
                className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: theme.gradient,
                  boxShadow: `0 4px 12px -2px ${theme.glow}40`,
                }}
              >
                {initial}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-extrabold text-[#1C1F2E] leading-tight truncate group-hover:text-[#111] transition-colors duration-300">
                  {partner.name}
                </h3>
                {/* Category badge */}
                <span
                  className="inline-block mt-1 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md"
                  style={{
                    background: theme.badge,
                    color: theme.text,
                    border: `1px solid ${theme.ring}`,
                  }}
                >
                  {partner.category}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-[#e5e5e5] via-[#e5e5e5] to-transparent mb-3" />

            {/* Description */}
            <p className="text-[13px] text-[#6B7280] leading-[1.65] line-clamp-3 mb-4">
              {partner.description}
            </p>

            {/* CTA */}
            <div className="mt-auto flex items-center justify-between">
              <div
                className="inline-flex items-center gap-2 text-[13px] font-bold transition-all duration-300"
                style={{ color: isHovered ? theme.glow : "#9CA3AF" }}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Visit website</span>
              </div>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{
                  background: isHovered ? theme.gradient : "#F3F4F6",
                  boxShadow: isHovered ? `0 4px 12px -2px ${theme.glow}40` : "none",
                }}
              >
                <ArrowUpRight
                  className="w-4 h-4 transition-all duration-300"
                  style={{ color: isHovered ? "#fff" : "#9CA3AF" }}
                />
              </div>
            </div>
          </div>
        </a>
      </div>
    </motion.div>
  );
}
