"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import type { CountryMarketData } from "@/lib/data/market-data";

const flagMap: Record<string, string> = {
  GB: "/image/flags/gb.svg",
  DE: "/image/flags/de.svg",
  FR: "/image/flags/fr.svg",
  ES: "/image/flags/es.svg",
  NL: "/image/flags/nl.svg",
  CH: "/image/flags/ch.svg",
  PL: "/image/flags/pl.svg",
  EE: "/image/flags/ee.svg",
};

interface CountryCardProps {
  country: CountryMarketData;
  index: number;
}

export function CountryCard({ country, index }: CountryCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const flagSrc = flagMap[country.countryCode] ?? flagMap["GB"];

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/ecosystem/tech-market-overview/${country.slug}`}
        className="group block h-full"
      >
        <div className="relative h-full bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
          {/* Blue banner header */}
          <div className="relative bg-gradient-to-r from-[#1a2b5e] to-[#2563EB] px-5 pt-5 pb-10">
            <div className="absolute top-0 right-0 w-32 h-full opacity-[0.08]" style={{ background: "radial-gradient(circle at 80% 30%, white, transparent 70%)" }} />
            <h3 className="font-heading font-bold text-white text-lg leading-snug pr-16">
              {country.name}
            </h3>
            <p className="text-blue-200 text-sm mt-0.5 leading-snug">{country.tagline}</p>
          </div>

          {/* Circular flag image overlapping the banner */}
          <div className="absolute right-5 top-[52px] w-[72px] h-[72px] rounded-full border-[3px] border-white shadow-lg overflow-hidden bg-white z-10">
            <Image
              src={flagSrc}
              alt={`${country.name} flag`}
              fill
              className="object-cover"
              sizes="72px"
            />
          </div>

          {/* Content area */}
          <div className="px-5 pt-4 pb-5">
            {/* Sector tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {country.highDemandSectors.slice(0, 3).map((sector) => (
                <span
                  key={sector}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-[#f0f4ff] text-[#2563EB] font-semibold border border-[#2563EB]/10"
                >
                  {sector}
                </span>
              ))}
            </div>

            {/* Current market stats */}
            <div className="grid grid-cols-2 gap-2 mb-2">
              {country.highlights.slice(0, 2).map((h) => (
                <div key={h.label} className="bg-gradient-to-br from-[#f8fafc] to-[#f0f4ff] rounded-lg py-2.5 px-3 border border-[#e2e8f0]">
                  <p className="text-[#22C55E] font-bold text-sm leading-tight">{h.value}</p>
                  <p className="text-[#6b7280] text-[11px] mt-0.5">{h.label}</p>
                </div>
              ))}
            </div>

            {/* Projection stats */}
            {country.projections && country.projections.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mb-4">
                {country.projections.slice(0, 2).map((p) => (
                  <div key={p.label} className="bg-gradient-to-br from-[#fefce8] to-[#fef9c3] rounded-lg py-2.5 px-3 border border-[#fde68a]/50">
                    <div className="flex items-center gap-1 mb-0.5">
                      <TrendingUp className="w-3 h-3 text-[#d97706]" />
                      <span className="text-[10px] font-semibold text-[#d97706] uppercase tracking-wide">Forecast</span>
                    </div>
                    <p className="text-[#92400e] font-bold text-sm leading-tight">{p.value}</p>
                    <p className="text-[#a16207] text-[11px] mt-0.5">{p.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="flex items-center text-sm font-semibold text-[#2563EB] group-hover:gap-2.5 gap-1.5 transition-all pt-2.5 border-t border-gray-100">
              Explore Market
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
