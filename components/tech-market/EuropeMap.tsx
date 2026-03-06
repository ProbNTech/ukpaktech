"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

interface CountryRegion {
  slug: string;
  name: string;
  flag: string;
  d: string;
  labelX: number;
  labelY: number;
  labelText: string;
}

// Simplified but geographically accurate SVG paths for European countries
const countries: CountryRegion[] = [
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "\uD83C\uDDEC\uD83C\uDDE7",
    d: "M158,128 L162,118 L168,112 L175,108 L180,112 L184,106 L188,110 L186,118 L190,126 L192,136 L188,148 L192,156 L190,168 L186,176 L180,182 L174,178 L170,184 L164,180 L160,172 L156,164 L154,152 L156,140 Z M170,186 L178,186 L182,192 L178,198 L172,196 L168,190 Z",
    labelX: 174,
    labelY: 150,
    labelText: "UK",
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    flag: "\uD83C\uDDF3\uD83C\uDDF1",
    d: "M232,148 L244,144 L252,146 L256,152 L254,160 L248,164 L240,162 L234,158 L230,154 Z",
    labelX: 244,
    labelY: 155,
    labelText: "NL",
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "\uD83C\uDDE9\uD83C\uDDEA",
    d: "M252,146 L264,138 L278,134 L292,136 L304,142 L310,152 L312,166 L308,180 L302,190 L292,196 L280,198 L268,194 L258,188 L250,180 L248,168 L248,160 L254,154 Z",
    labelX: 280,
    labelY: 168,
    labelText: "Germany",
  },
  {
    slug: "france",
    name: "France",
    flag: "\uD83C\uDDEB\uD83C\uDDF7",
    d: "M196,196 L212,188 L228,184 L244,188 L256,192 L264,200 L268,214 L272,228 L268,244 L260,256 L248,264 L234,268 L220,264 L208,256 L200,244 L194,232 L192,218 L192,206 Z",
    labelX: 232,
    labelY: 230,
    labelText: "France",
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    flag: "\uD83C\uDDE8\uD83C\uDDED",
    d: "M258,204 L272,200 L284,202 L290,210 L286,220 L276,226 L264,224 L256,216 L254,210 Z",
    labelX: 272,
    labelY: 213,
    labelText: "CH",
  },
  {
    slug: "spain",
    name: "Spain",
    flag: "\uD83C\uDDEA\uD83C\uDDF8",
    d: "M162,280 L184,268 L208,264 L228,268 L240,276 L244,292 L240,308 L232,320 L218,328 L200,330 L184,326 L172,316 L164,304 L160,292 Z",
    labelX: 202,
    labelY: 298,
    labelText: "Spain",
  },
  {
    slug: "poland",
    name: "Poland",
    flag: "\uD83C\uDDF5\uD83C\uDDF1",
    d: "M308,132 L324,126 L342,124 L358,128 L370,136 L374,148 L372,162 L366,174 L354,180 L340,182 L326,178 L316,170 L310,158 L306,146 Z",
    labelX: 340,
    labelY: 154,
    labelText: "Poland",
  },
  {
    slug: "baltic-states",
    name: "Baltic States",
    flag: "\uD83C\uDDEA\uD83C\uDDEA\uD83C\uDDF1\uD83C\uDDF9\uD83C\uDDF1\uD83C\uDDFB",
    d: "M340,80 L358,74 L374,76 L384,84 L386,96 L384,108 L378,118 L368,124 L356,126 L344,122 L336,114 L332,104 L334,92 Z",
    labelX: 360,
    labelY: 100,
    labelText: "Baltics",
  },
];

export function EuropeMap() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const hoveredCountry = countries.find((c) => c.slug === hoveredSlug);

  return (
    <div className="relative">
      {/* Tooltip */}
      {hoveredCountry && (
        <motion.div
          className="absolute top-4 right-4 bg-[#1a2b5e] rounded-xl shadow-xl px-5 py-3.5 z-10 pointer-events-none"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">{hoveredCountry.flag}</span>
            <div>
              <span className="font-semibold text-white text-sm">
                {hoveredCountry.name}
              </span>
              <p className="text-xs text-white/60">Click to explore market data</p>
            </div>
          </div>
        </motion.div>
      )}

      <svg
        viewBox="100 60 320 290"
        className="w-full max-w-3xl mx-auto"
        style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.06))" }}
      >
        {/* Water / background */}
        <rect x="100" y="60" width="320" height="290" fill="#f0f7ff" rx="12" />

        {/* Grid dots for visual texture */}
        {Array.from({ length: 15 }).map((_, row) =>
          Array.from({ length: 15 }).map((_, col) => (
            <circle
              key={`dot-${row}-${col}`}
              cx={120 + col * 20}
              cy={75 + row * 18}
              r="0.5"
              fill="#c4d8f0"
            />
          ))
        )}

        {/* Country shapes */}
        {countries.map((country) => {
          const isHovered = hoveredSlug === country.slug;
          return (
            <g key={country.slug} className="cursor-pointer">
              {/* Shadow under shape */}
              <path
                d={country.d}
                fill="rgba(0,0,0,0.04)"
                transform="translate(2,2)"
              />
              {/* Country fill */}
              <motion.path
                d={country.d}
                fill={isHovered ? "#2563EB" : "#c7d9f5"}
                stroke={isHovered ? "#1d4ed8" : "#8fb4ed"}
                strokeWidth={isHovered ? 2.5 : 1.5}
                strokeLinejoin="round"
                onMouseEnter={() => setHoveredSlug(country.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                onClick={() =>
                  router.push(
                    `/ecosystem/tech-market-overview/${country.slug}`
                  )
                }
                initial={false}
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: isHovered ? 1.04 : 1,
                        filter: isHovered
                          ? "drop-shadow(0 4px 8px rgba(37,99,235,0.3))"
                          : "drop-shadow(0 0px 0px rgba(0,0,0,0))",
                      }
                }
                style={{
                  transformOrigin: `${country.labelX}px ${country.labelY}px`,
                }}
                transition={{ duration: 0.2 }}
              />
              {/* Country label */}
              <text
                x={country.labelX}
                y={country.labelY + 4}
                textAnchor="middle"
                className="text-[11px] font-bold pointer-events-none select-none"
                fill={isHovered ? "#fff" : "#1a2b5e"}
              >
                {country.labelText}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="text-center text-xs text-[#6b7280] mt-3">
        Click on a country to explore its tech market data
      </p>
    </div>
  );
}
