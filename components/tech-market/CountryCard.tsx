"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CountryMarketData } from "@/lib/data/market-data";

interface CountryCardProps {
  country: CountryMarketData;
  index: number;
}

export function CountryCard({ country, index }: CountryCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/ecosystem/tech-market-overview/${country.slug}`}
        className="group block h-full"
      >
        <div className="relative h-full bg-white rounded-2xl border border-[#e2e0dc] p-6 transition-all duration-300 hover:shadow-lg hover:border-[#2563EB]/30 hover:-translate-y-1">
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#2563EB] to-[#22C55E] opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{country.flag}</span>
            <div>
              <h3 className="font-heading font-bold text-lg text-[#1a2b5e] group-hover:text-[#2563EB] transition-colors">
                {country.name}
              </h3>
              <p className="text-sm text-[#6b7280]">{country.tagline}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {country.highDemandSectors.slice(0, 3).map((sector) => (
              <span
                key={sector}
                className="text-xs px-2.5 py-1 rounded-full bg-[#f0f4ff] text-[#2563EB] font-medium"
              >
                {sector}
              </span>
            ))}
          </div>

          {country.highlights.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mb-4">
              {country.highlights.slice(0, 2).map((h) => (
                <div key={h.label} className="text-center bg-[#f7f6f4] rounded-lg py-2 px-2">
                  <p className="text-[#22C55E] font-bold text-sm">{h.value}</p>
                  <p className="text-[#6b7280] text-xs">{h.label}</p>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center text-sm font-medium text-[#2563EB] group-hover:gap-2 gap-1 transition-all">
            Explore Market
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
