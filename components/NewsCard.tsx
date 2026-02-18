"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Tag } from "lucide-react";
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

export function NewsCard({ slug, title, category, date, image, excerpt, index = 0 }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <Link
        href={`/news/${slug}`}
        className="group flex flex-col h-full rounded-2xl bg-white border border-gray-100 hover:border-[#2563EB]/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        {/* Top gradient bar */}
        <div className="h-[2px] bg-gradient-to-r from-[#2563EB] to-[#22C55E]" />

        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-[#F0F4F8]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Category badge — top-left */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm">
              <Tag className="w-3 h-3 text-[#22C55E]" />
              <span className="text-xs font-bold text-[#1F2937] tracking-wide uppercase">
                {category}
              </span>
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          {/* Title */}
          <h3 className="font-heading font-bold text-lg text-[#1F2937] leading-snug mb-3 line-clamp-2 group-hover:text-[#2563EB] transition-colors duration-300">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-[#4B5563] leading-relaxed line-clamp-3 mb-5 flex-1">
            {excerpt}
          </p>

          {/* Footer row: date + read more */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#94A3B8]" />
              <span className="text-xs text-[#94A3B8]">{date}</span>
            </div>
            <span className="text-xs font-semibold text-[#2563EB] group-hover:gap-2 flex items-center gap-1 transition-all duration-300">
              Read more
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>

        {/* Bottom green bar */}
        <div className="h-[2px] bg-[#22C55E] mt-auto" />
      </Link>
    </motion.div>
  );
}
