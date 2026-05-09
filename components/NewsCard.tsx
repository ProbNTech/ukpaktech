"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LazyImage } from "@/components/ui/lazy-image";

export interface NewsCardProps {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  index?: number;
}

/* Brand-color mapping for category dots */
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
  const color = getCategoryColor(category);

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.4), ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/news/${slug}`}
        className="group flex h-full flex-col gap-2 rounded-lg p-2 duration-75 hover:bg-[#E8E6E3]/60 active:bg-[#E8E6E3]"
      >
        <LazyImage
          src={image}
          inView={false}
          alt={title}
          ratio={16 / 9}
          className="transition-all duration-500 group-hover:scale-105"
          AspectRatioClassName="border-[#D8D5CF]"
        />
        <div className="space-y-2 px-2 pb-2">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#7A7E8F]">
            <p>{category}</p>
            <div className="size-1 rounded-full" style={{ background: color }} />
            <p>{date}</p>
          </div>
          <h2 className="line-clamp-2 text-lg leading-5 font-semibold tracking-tight text-[#1C1F2E]">
            {title}
          </h2>
          <p className="line-clamp-3 text-sm text-[#3D4152]/70">
            {excerpt}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
