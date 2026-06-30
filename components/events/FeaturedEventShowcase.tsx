"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getEventBySlug } from "@/data/events";

/* Two London Tech Week 2026 events power this showcase. */
const PRIMARY_SLUG = "london-tech-week-2026-highlights";
const SECONDARY_SLUG = "uk-pakistan-tech-forum-london-2026";

const primary = getEventBySlug(PRIMARY_SLUG);
const secondary = getEventBySlug(SECONDARY_SLUG);

/* Interleave both galleries so the strip mixes the conference + forum imagery. */
function buildStrip(): string[] {
  const a = primary?.gallery ?? [];
  const b = secondary?.gallery ?? [];
  const max = Math.max(a.length, b.length);
  const out: string[] = [];
  for (let i = 0; i < max; i++) {
    if (a[i]) out.push(a[i]);
    if (b[i]) out.push(b[i]);
  }
  return out;
}

const strip = buildStrip();

export default function FeaturedEventShowcase() {
  if (!primary || strip.length === 0) return null;

  // Duplicate the strip so the marquee loops seamlessly.
  const loop = [...strip, ...strip];

  return (
    <section
      className="relative z-[1] overflow-hidden py-8 lg:py-12"
      style={{
        background:
          "radial-gradient(900px circle at 12% 0%, rgba(96,165,250,0.14), transparent 55%), radial-gradient(800px circle at 100% 100%, rgba(196,30,58,0.14), transparent 50%), #0a1430",
      }}
      aria-labelledby="featured-event-heading"
    >
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)", backgroundSize: "30px 30px" }} />

      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Top: copy + headline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column, about the event */}
          <div className="relative pl-5 sm:pl-6">
            <span className="absolute left-0 top-1 h-[88%] w-[3px] rounded-full bg-gradient-to-b from-[#C41E3A] via-[#C41E3A] to-[#22C55E]" aria-hidden="true" />
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#9fb4d8]">About The Event</p>
            <h2 id="featured-event-heading" className="mt-2 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] text-white">
              London Tech Week 2026
              <span className="block text-[#e2342f] mt-1">Highlights</span>
            </h2>
            <div className="mt-4 flex items-center gap-2" aria-hidden="true">
              <span className="h-[3px] w-8 rounded-full bg-[#C41E3A]" />
              <span className="h-[3px] w-16 rounded-full bg-[#22C55E]" />
            </div>
            <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-[#c8d3e8]">
              {primary.excerpt}
            </p>
            <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#9fb4d8]">
              {secondary?.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/events/${PRIMARY_SLUG}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#C41E3A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#a8172e]"
              >
                Explore the highlights <ArrowUpRight className="h-4 w-4" />
              </Link>
              {secondary && (
                <Link
                  href={`/events/${SECONDARY_SLUG}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  UK–Pakistan Tech Forum
                </Link>
              )}
            </div>
          </div>

          {/* Right column, impact line */}
          <div className="relative lg:pl-8">
            <div className="relative pl-5 sm:pl-6">
              <span className="absolute left-0 top-1 h-[80%] w-[3px] rounded-full bg-gradient-to-b from-[#C41E3A] to-transparent" aria-hidden="true" />
              <p className="text-base sm:text-lg font-semibold text-white">
                An incredibly productive few days for the UK–Pakistan technology community.
              </p>
              <p className="mt-1 text-[#e2342f] text-sm font-bold uppercase tracking-wide">
                Olympia London · June 8–12, 2026
              </p>
            </div>
            <dl className="mt-7 grid grid-cols-3 gap-4">
              {[
                { value: "16+", label: "Pakistani companies" },
                { value: "#200", label: "Grand Hall pavilion" },
                { value: "5", label: "Days at Olympia" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center">
                  <dt className="text-2xl font-bold text-white">{stat.value}</dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-wide text-[#9fb4d8]">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Bottom: horizontal scrolling gallery, pauses on hover */}
      <div className="relative mt-12 lg:mt-16">
        {/* edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-28 bg-gradient-to-r from-[#0a1430] to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-28 bg-gradient-to-l from-[#0a1430] to-transparent" aria-hidden="true" />

        <div className="group overflow-hidden">
          <ul className="flex w-max gap-4 px-4 fes-marquee group-hover:[animation-play-state:paused]">
            {loop.map((src, i) => (
              <li key={`${src}-${i}`} className="relative h-60 w-80 sm:h-72 sm:w-[28rem] shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-black/30">
                <Image
                  src={src}
                  alt="London Tech Week 2026 highlights"
                  fill
                  sizes="(min-width: 640px) 448px, 320px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  aria-hidden={i >= strip.length}
                />
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-center text-sm text-[#9fb4d8] px-6">
          Explore key discussions, trade insights, and strategic moments from London Tech Week 2026.
        </p>
      </div>

      <style jsx>{`
        @keyframes fes-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .fes-marquee {
          animation: fes-scroll 110s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .fes-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
