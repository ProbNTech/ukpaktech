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
   Single card with cursor-following glow
   and subtle hover lift + shadow
   ──────────────────────────────────────────── */
function Card({ item }: { item: WhatWeDoItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

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

  const Icon = item.icon;

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
        className="relative rounded-xl bg-white/95 backdrop-blur-xl border border-[#E8E6E1]/70 p-8 lg:p-10 h-full overflow-hidden transition-all duration-300"
        style={{
          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: isHovered
            ? "0 20px 40px -12px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)"
            : "0 4px 20px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.04)",
        }}
      >
        {/* Cursor-following radial glow */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(500px circle at ${glowPos.x}% ${glowPos.y}%, ${item.color}14 0%, transparent 50%)`,
          }}
        />

        {/* Top accent bar */}
        <div
          className="absolute top-0 inset-x-0 h-[3px] rounded-t-xl transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, transparent 5%, ${item.color}90, ${item.color}, ${item.color}90, transparent 95%)`,
            opacity: isHovered ? 1 : 0.3,
          }}
        />

        {/* ── Icon/Image ── */}
        <div className="relative mb-5">
          {item.image ? (
            <div
              className="relative w-[76px] h-[76px] rounded-2xl overflow-hidden"
              style={{
                boxShadow: `0 6px 20px ${item.color}25`,
              }}
            >
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="76px" />
            </div>
          ) : (
            <Icon className="w-[130px] h-[130px]" />
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
  );
}

/* ────────────────────────────────────────────
   Grid wrapper
   ──────────────────────────────────────────── */
export default function WhatWeDoCards({ items }: WhatWeDoCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-9 mt-4">
      {items.map((item, index) => (
        <Card key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
