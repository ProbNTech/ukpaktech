"use client";

import { Calendar, Tag } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface NewsItem {
  title: string;
  date: string;
  category: string;
  summary: string;
}

interface NewsUpdatesProps {
  items: NewsItem[];
}

export function NewsUpdates({ items }: NewsUpdatesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.article
          key={index}
          initial={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.5,
            delay: index * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group"
        >
          <div className="relative h-full rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-[#2563EB]/20 transition-all duration-300">
            {/* Top accent gradient */}
            <div className="h-[2px] bg-gradient-to-r from-[#2563EB] to-[#22C55E]" />

            <div className="p-6">
              {/* Category badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#22C55E]/8 border border-[#22C55E]/15 mb-4">
                <Tag className="w-3 h-3 text-[#22C55E]" />
                <span className="text-xs font-semibold text-[#22C55E]">
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-lg mb-3 text-[#1F2937] group-hover:text-[#2563EB] transition-colors duration-300 line-clamp-2 leading-snug">
                {item.title}
              </h3>

              {/* Summary */}
              <p
                className="text-sm mb-5 leading-relaxed line-clamp-3"
                style={{ color: "#4B5563" }}
              >
                {item.summary}
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.date}</span>
              </div>
            </div>

            {/* Bottom green border */}
            <div className="h-[2px] w-full bg-[#22C55E] mt-auto" />
          </div>
        </motion.article>
      ))}
    </div>
  );
}
