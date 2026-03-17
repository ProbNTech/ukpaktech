"use client";

import { useState, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface WhatWeDoItem {
  id: number;
  title: string;
  content: string;
  icon: React.ElementType;
  href: string;
  color: string;
  image?: string;
}

interface WhatWeDoCardsProps {
  items: WhatWeDoItem[];
}

/* ────────────────────────────────────────────
   Single 3D card with mouse-tracking tilt,
   cursor glow, shimmer sweep, animated border
   ──────────────────────────────────────────── */
function Card3D({ item, index }: { item: WhatWeDoItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setTilt({ x: (y - 0.5) * -14, y: (x - 0.5) * 14 });
      setGlowPos({ x: x * 100, y: y * 100 });
    },
    [],
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  const Icon = item.icon;
  const floatDelay = index * 0.6;

  return (
    <div
      ref={cardRef}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{ perspective: "900px" }}
    >
      {/* Outer wrapper — 3D tilt + float */}
      <div
        className="relative rounded-3xl"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? "scale(1.03)" : "scale(1)"}`,
          transition: isHovered
            ? "transform 0.08s ease-out, box-shadow 0.4s ease"
            : "transform 0.6s cubic-bezier(.25,.8,.25,1), box-shadow 0.4s ease",
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? `0 30px 60px -15px ${item.color}30, 0 0 50px ${item.color}08`
            : "0 4px 20px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.04)",
          animation: `wwdFloat 5s ease-in-out ${floatDelay}s infinite`,
        }}
      >
        {/* Animated gradient border ring */}
        <div
          className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `conic-gradient(from var(--wwd-border-angle, 0deg) at 50% 50%, ${item.color}, ${item.color}30, transparent 40%, transparent 60%, ${item.color}30, ${item.color})`,
            animation: isHovered ? "wwdBorderSpin 3s linear infinite" : "none",
            filter: "blur(1.5px)",
          }}
        />

        {/* ── Card surface ── */}
        <div className="relative rounded-3xl bg-white/95 backdrop-blur-xl border border-[#E8E6E1]/70 group-hover:border-transparent p-8 lg:p-10 h-full overflow-hidden transition-colors duration-500">
          {/* Cursor-following radial glow */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(500px circle at ${glowPos.x}% ${glowPos.y}%, ${item.color}14 0%, transparent 50%)`,
            }}
          />

          {/* Light shimmer sweep */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.6) 45%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.6) 55%, transparent 65%)",
                animation: isHovered ? "wwdShimmer 1.8s ease-in-out forwards" : "none",
              }}
            />
          </div>

          {/* Top accent bar */}
          <div
            className="absolute top-0 inset-x-0 h-[3px] rounded-t-3xl transition-opacity duration-300"
            style={{
              background: `linear-gradient(90deg, transparent 5%, ${item.color}90, ${item.color}, ${item.color}90, transparent 95%)`,
              opacity: isHovered ? 1 : 0.3,
            }}
          />

          {/* ── Icon/Image ── */}
          <div
            className="relative w-[76px] h-[76px] rounded-2xl overflow-hidden mb-7 transition-all duration-400"
            style={{
              boxShadow: isHovered
                ? `0 16px 48px ${item.color}40, 0 0 0 6px ${item.color}08`
                : `0 6px 20px ${item.color}25`,
              transform: isHovered ? "translateY(-6px) scale(1.05)" : "translateY(0) scale(1)",
            }}
          >
            {item.image ? (
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="76px" />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ background: `linear-gradient(145deg, ${item.color}, ${item.color}cc)` }}>
                <Icon size={34} className="text-white" strokeWidth={1.5} />
              </div>
            )}
          </div>

          {/* ── Title ── */}
          <h3 className="text-[22px] font-extrabold mb-3 text-[#1C1F2E] tracking-tight leading-tight">
            {item.title}
          </h3>

          {/* ── Description ── */}
          <p className="text-[15px] text-[#5A5F72] leading-[1.7] mb-8">
            {item.content}
          </p>

          {/* ── CTA link ── */}
          <Link
            href={item.href}
            className="inline-flex items-center gap-2 font-bold text-[15px] transition-all duration-200 group/link"
            style={{ color: item.color }}
          >
            <span className="relative">
              Explore
              <span
                className="absolute -bottom-0.5 left-0 w-0 group-hover/link:w-full h-[2px] transition-all duration-300 rounded-full"
                style={{ background: item.color }}
              />
            </span>
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover/link:translate-x-1.5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Grid wrapper
   ──────────────────────────────────────────── */
export default function WhatWeDoCards({ items }: WhatWeDoCardsProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-9 mt-4">
        {items.map((item, index) => (
          <Card3D key={item.id} item={item} index={index} />
        ))}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @property --wwd-border-angle {
              syntax: "<angle>";
              inherits: false;
              initial-value: 0deg;
            }
            @keyframes wwdBorderSpin {
              to { --wwd-border-angle: 360deg; }
            }
            @keyframes wwdShimmer {
              0%   { transform: translateX(-120%); }
              100% { transform: translateX(120%); }
            }
            @keyframes wwdFloat {
              0%, 100% { translate: 0 0; }
              50%      { translate: 0 -6px; }
            }
          `,
        }}
      />
    </>
  );
}
