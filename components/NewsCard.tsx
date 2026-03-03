"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface NewsCardProps {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  index?: number;
}

/* Brand-color mapping for category badges */
const categoryColors: Record<string, string> = {
  Policy: "#2563EB",
  Events: "#C41E3A",
  Investment: "#22C55E",
  Leadership: "#1C1F2E",
  Technology: "#2563EB",
  Industry: "#EAB308",
  Innovation: "#22C55E",
  Cybersecurity: "#C41E3A",
  Funding: "#EAB308",
  Research: "#2563EB",
  Awards: "#EAB308",
  Regulation: "#C41E3A",
};

function getCategoryColor(category: string): string {
  return categoryColors[category] || "#2563EB";
}

export function NewsCard({ slug, title, category, date, image, excerpt, index = 0 }: NewsCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const color = getCategoryColor(category);

  const detailVariants = {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      marginTop: "0.75rem",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      className="cursor-pointer"
    >
      <Link
        href={`/news/${slug}`}
        className="group block h-full overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl border border-[#D8D5CF]/40"
      >
        {/* Image with gradient overlay */}
        <div className="relative h-44 w-full overflow-hidden bg-[#1C1F2E]">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
                backgroundSize: "12px 12px",
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Category badge on image */}
          <span
            className="absolute top-3 left-3 px-3 py-1 text-white text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm"
            style={{ background: `${color}CC` }}
          >
            {category}
          </span>
        </div>

        {/* Card body */}
        <div className="p-5">
          {/* Date + status row */}
          <div className="flex items-center gap-2 text-xs text-[#7A7E8F] mb-2">
            <span>{date}</span>
            <span>&bull;</span>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
              <span>Published</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-heading font-bold text-[1.05rem] leading-snug text-[#1C1F2E] line-clamp-2 group-hover:text-[#2563EB] transition-colors duration-200">
            {title}
          </h3>

          {/* Animated excerpt reveal on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                key="excerpt"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={detailVariants}
                className="overflow-hidden"
              >
                <p className="text-sm text-[#3D4152] leading-relaxed line-clamp-3">{excerpt}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                    style={{ background: `${color}15`, color, borderColor: `${color}30` }}
                  >
                    {category}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#D8D5CF]/60 px-5 py-3">
          <span className="text-xs font-semibold text-[#2563EB] inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
            Read article <ChevronRight className="w-3.5 h-3.5" />
          </span>
          <div
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: color }}
          />
        </div>
      </Link>
    </motion.div>
  );
}
