"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export interface NewsCardProps {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  index?: number;
}

/**
 * Editorial news card — flat style matching ukproptech.com pattern:
 * image → date (muted) → bold title → category tags → thin rule at bottom
 * No card borders, no box shadows, no rounded corners on the card itself.
 */
export function NewsCard({ slug, title, category, date, image, excerpt, index = 0 }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/news/${slug}`}
        className="group flex flex-col h-full"
      >
        {/* Image — 16:9, slight zoom on hover */}
        <div className="relative aspect-[16/9] overflow-hidden bg-[#1C1F2E] mb-5 flex items-center justify-center">
          {image ? (
            <>
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[#2563EB]/0 group-hover:bg-[#2563EB]/10 transition-colors duration-500 z-10" />
            </>
          ) : (
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
                backgroundSize: "12px 12px",
              }}
            />
          )}
        </div>

        {/* Date */}
        <p className="text-base text-[#7A7E8F] mb-2">{date}</p>

        {/* Title */}
        <h3 className="font-heading font-bold text-[1.05rem] leading-snug text-[#1C1F2E] mb-3 line-clamp-3 group-hover:text-[#2563EB] transition-colors duration-200">
          {title}
        </h3>

        {/* Excerpt — shown on hover/always, 2 lines */}
        <p className="text-base text-[#3D4152] leading-relaxed line-clamp-2 mb-4 flex-1">
          {excerpt}
        </p>

        {/* Category tag — orange-red style matching reference */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1 text-base font-semibold text-[#2563EB] group-hover:text-[#1D4ED8] transition-colors duration-200">
            <ChevronRight className="w-3 h-3" />
            {category}
          </span>
        </div>

        {/* Bottom rule — animated fill on hover */}
        <div className="h-px w-full bg-[#1C1F2E]/20 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-[#2563EB] w-0 group-hover:w-full transition-all duration-500" />
        </div>
      </Link>
    </motion.div>
  );
}
