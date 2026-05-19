"use client";

import { useState, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface WhatWeDoItem {
  id: number;
  title: string;
  content: string;
  icon?: React.ElementType;
  href: string;
  color: string;
  image?: string;
}

interface WhatWeDoCardsProps {
  items: WhatWeDoItem[];
  /** Eyebrow label above the row heading (e.g. "Services"). Optional. */
  eyebrow?: string;
  /** The audience name displayed in the row heading — coloured in accent. */
  audience?: string;
  /** Single-line supporting copy beneath the heading. Optional. */
  context?: string;
  /** Accent colour applied to the rule, eyebrow, and audience name. */
  accentColor?: string;
}

/* ────────────────────────────────────────────
   Single card with cursor-following glow,
   gradient glass background, premium shadows,
   and smooth hover lift
   ──────────────────────────────────────────── */
function Card({ item }: { item: WhatWeDoItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setGlowPos({ x: x * 100, y: y * 100 });
    },
    [],
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      {/* ── Card surface ── */}
      <div
        className="relative rounded-2xl overflow-hidden p-8 lg:p-10 h-full"
        style={{
          background: `linear-gradient(135deg, white 60%, ${item.color}08 100%)`,
          border: `1px solid ${item.color}${isHovered ? "30" : "15"}`,
          backdropFilter: isHovered ? "blur(8px)" : "none",
          WebkitBackdropFilter: isHovered ? "blur(8px)" : "none",
          transform: isHovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: isHovered
            ? `0 20px 60px -15px ${item.color}25, 0 8px 24px -8px rgba(0,0,0,0.08)`
            : "0 4px 20px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03)",
          transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        {/* Cursor-following radial glow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(500px circle at ${glowPos.x}% ${glowPos.y}%, ${item.color}14 0%, transparent 50%)`,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Top accent gradient bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
          style={{
            background: `linear-gradient(90deg, ${item.color}, ${item.color}60, transparent)`,
            opacity: isHovered ? 1 : 0.45,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* ── Icon / Image ── */}
        <div className="relative mb-5">
          {item.image ? (
            <div className="relative w-[76px] h-[76px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
                sizes="76px"
              />
            </div>
          ) : item.icon ? (
            <div
              className="inline-flex items-center justify-center w-[72px] h-[72px] rounded-full"
              style={{ background: `${item.color}14` }}
            >
              {(() => { const Icon = item.icon!; return <Icon className="w-9 h-9" style={{ color: item.color }} />; })()}
            </div>
          ) : null}
        </div>

        {/* ── Title ── */}
        <h4 className="text-[22px] font-extrabold mb-3 text-[#1C1F2E] tracking-tight leading-tight">
          {item.title}
        </h4>

        {/* ── Description ── */}
        <p className="text-[15px] text-[#5A5F72] leading-[1.7] mb-8">
          {item.content}
        </p>

        {/* ── CTA link with animated underline ── */}
        <Link
          href={item.href}
          className="inline-flex items-center gap-2 font-bold text-[15px]"
          style={{ color: item.color }}
          onMouseEnter={() => setIsLinkHovered(true)}
          onMouseLeave={() => setIsLinkHovered(false)}
        >
          <span className="relative">
            Explore
            <span
              className="absolute -bottom-0.5 left-0 h-[2px] rounded-full"
              style={{
                background: item.color,
                width: isLinkHovered ? "100%" : "0%",
                transition: "width 0.3s ease",
              }}
            />
          </span>
          <ArrowRight
            size={18}
            style={{
              transform: isLinkHovered ? "translateX(6px)" : "translateX(0)",
              transition: "transform 0.2s ease",
            }}
          />
        </Link>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Grid wrapper
   ──────────────────────────────────────────── */
export default function WhatWeDoCards({
  items,
  eyebrow,
  audience,
  context,
  accentColor,
}: WhatWeDoCardsProps) {
  const hasHeader = Boolean((eyebrow || audience) && accentColor);

  return (
    <div>
      {hasHeader && (
        <div className="mb-8 lg:mb-10">
          {eyebrow && (
            <div className="flex items-center gap-3 mb-3">
              <span
                className="block w-12 h-[3px] rounded-full"
                style={{ background: accentColor }}
                aria-hidden="true"
              />
              <p
                className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em]"
                style={{ color: accentColor }}
              >
                {eyebrow}
              </p>
            </div>
          )}
          {audience && (
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[2rem] text-[#1C1F2E] leading-[1.15] tracking-tight">
              For{" "}
              <span style={{ color: accentColor }}>{audience}</span>
            </h3>
          )}
          {context && (
            <p className="mt-3 text-[#5A5F72] text-base sm:text-lg leading-relaxed max-w-2xl">
              {context}
            </p>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 lg:gap-9 mt-4">
        {items.map((item, index) => (
          <Card key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
