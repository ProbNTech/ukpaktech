"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion, useReducedMotion } from "framer-motion";
import { EventGrid } from "@/components/events/EventGrid";
import { EventsCTA } from "@/components/events/EventsCTA";
import { ChevronRight } from "lucide-react";
import { events } from "@/data/events";

/* ------------------------------------------------------------------ */
/*  Filter tabs                                                        */
/* ------------------------------------------------------------------ */
type FilterTab = "All" | "Upcoming" | "Past" | "London" | "Pakistan" | "UPTECH";
const FILTER_TABS: FilterTab[] = [
  "All",
  "Upcoming",
  "Past",
  "London",
  "Pakistan",
  "UPTECH",
];

/* ------------------------------------------------------------------ */
/*  Tab colour mapping for glow effects                                */
/* ------------------------------------------------------------------ */
const TAB_COLORS: Record<FilterTab, string> = {
  All: "#2563EB",
  Upcoming: "#22C55E",
  Past: "#C41E3A",
  London: "#2563EB",
  Pakistan: "#22C55E",
  UPTECH: "#C41E3A",
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
function isUpcoming(dateISO: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(dateISO) >= today;
}

function getTabCount(tab: FilterTab): number {
  if (tab === "All") return events.length;
  if (tab === "Upcoming") return events.filter((e) => isUpcoming(e.dateISO)).length;
  if (tab === "Past") return events.filter((e) => !isUpcoming(e.dateISO)).length;
  return events.filter((e) => e.category === tab).length;
}

/* ------------------------------------------------------------------ */
/*  Events page                                                        */
/* ------------------------------------------------------------------ */
export default function EventsPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");

  /* Filtering */
  const filteredEvents = events.filter((e) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Upcoming") return isUpcoming(e.dateISO);
    if (activeFilter === "Past") return !isUpcoming(e.dateISO);
    return e.category === activeFilter;
  });

  /* Sort newest first */
  const sortedEvents = [...filteredEvents].sort((a, b) =>
    b.dateISO.localeCompare(a.dateISO)
  );

  const gridEvents = sortedEvents.map((e) => ({
    slug: e.slug,
    title: e.title,
    date: e.date,
    image: e.image,
    summary: e.excerpt,
    location: e.location,
    tag: e.tag,
  }));

  /* Stat counts */
  const upcomingCount = events.filter((e) => isUpcoming(e.dateISO)).length;
  const pastCount = events.filter((e) => !isUpcoming(e.dateISO)).length;
  const londonCount = events.filter((e) => e.category === "London").length;
  const pakistanCount = events.filter((e) => e.category === "Pakistan").length;
  const uptechCount = events.filter((e) => e.category === "UPTECH").length;

  const stats = [
    { label: "Total Events", value: events.length, color: "#2563EB" },
    { label: "Upcoming", value: upcomingCount, color: "#22C55E" },
    { label: "Past", value: pastCount, color: "#C41E3A" },
    { label: "London", value: londonCount, color: "#2563EB" },
    { label: "Pakistan", value: pakistanCount, color: "#22C55E" },
    { label: "UPTECH", value: uptechCount, color: "#C41E3A" },
  ];

  return (
    <div className="bg-[#EEECEA]">
      {/* ============================================================ */}
      {/*  HERO — dark futuristic with glass morphism                   */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden min-h-[540px]">
        {/* Background image */}
        <Image
          src="/image/london-images/international-conference.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,14,30,0.92) 0%, rgba(28,31,46,0.80) 50%, rgba(10,14,30,0.88) 100%)",
          }}
        />

        {/* Grid overlay pattern */}
        <div
          className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient orbs for futuristic feel */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] z-[2] pointer-events-none opacity-20 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] z-[2] pointer-events-none opacity-15 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.35) 0%, transparent 70%)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 pt-20 pb-20">
          {/* Breadcrumb */}
          <motion.nav
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li>
                <Link
                  href="/"
                  className="hover:text-white/80 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5" />
              <li className="text-white/70 font-medium">Events</li>
            </ol>
          </motion.nav>

          {/* Accent label */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-4"
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border"
              style={{
                color: "#22C55E",
                borderColor: "rgba(34,197,94,0.3)",
                background: "rgba(34,197,94,0.08)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#22C55E" }}
              />
              Programme Calendar
            </span>
          </motion.div>

          {/* Title with gradient text */}
          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] leading-[1.05] mb-6 max-w-4xl"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #e0e7ff 40%, #93c5fd 70%, #2563EB 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Events &amp; Engagements
          </motion.h1>

          {/* Divider with glow */}
          <motion.div
            initial={shouldReduceMotion ? {} : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="origin-left mb-6"
          >
            <div
              className="h-px max-w-md"
              style={{
                background:
                  "linear-gradient(90deg, #2563EB 0%, rgba(34,197,94,0.5) 60%, transparent 100%)",
              }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg sm:text-xl text-white/50 max-w-2xl leading-relaxed mb-0"
          >
            UPTECH flagship summits, key London and Pakistan tech events,
            and bilateral engagements connecting both nations&apos; technology
            ecosystems.
          </motion.p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  STATS BAR — glass morphism (stays dark)                      */}
      {/* ============================================================ */}
      <section className="relative z-20 -mt-1">
        <div
          className="border-y"
          style={{
            background:
              "linear-gradient(135deg, rgba(28,31,46,0.95) 0%, rgba(15,18,32,0.98) 100%)",
            borderColor: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-6">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 + i * 0.06 }}
                  className="relative group flex flex-col items-center text-center rounded-lg px-4 py-4 border transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    borderColor: "rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `rgba(${stat.color === "#2563EB" ? "37,99,235" : stat.color === "#22C55E" ? "34,197,94" : "196,30,58"},0.08)`;
                    e.currentTarget.style.borderColor = `${stat.color}33`;
                    e.currentTarget.style.boxShadow = `0 0 20px ${stat.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span
                    className="text-2xl sm:text-3xl font-extrabold font-heading leading-none mb-1"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/40">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  EVENTS GRID WITH FILTERS — light theme                       */}
      {/* ============================================================ */}
      <section className="relative bg-[#EEECEA]">
        <div className="relative z-10 px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-20">
          <AnimatedSection>
            {/* Section header */}
            <div className="mb-12">
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3"
                style={{ color: "#2563EB" }}
              >
                Programme
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-3 text-[#1C1F2E]">
                Events Calendar
              </h2>
              <p className="text-base text-[#5A5F72] max-w-2xl">
                Key engagements, summits, and activities from the UK-Pakistan
                technology corridor.
              </p>
            </div>

            {/* Filter tabs — light theme */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
              {FILTER_TABS.map((tab) => {
                const isActive = activeFilter === tab;
                const color = TAB_COLORS[tab];
                const count = getTabCount(tab);

                return (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveFilter(tab)}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                    className="relative px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg border transition-all duration-300 cursor-pointer"
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${color}15 0%, ${color}08 100%)`
                        : "#FFFFFF",
                      borderColor: isActive ? `${color}55` : "#D8D5CF",
                      color: isActive ? color : "#5A5F72",
                      boxShadow: isActive
                        ? `0 0 20px ${color}12, inset 0 1px 0 ${color}10`
                        : "0 1px 2px rgba(0,0,0,0.04)",
                    }}
                  >
                    {/* Active glow indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeFilterGlow"
                        className="absolute inset-0 rounded-lg pointer-events-none"
                        style={{
                          boxShadow: `0 0 30px ${color}08`,
                        }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {tab}
                      <span
                        className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded text-[10px] font-bold"
                        style={{
                          background: isActive
                            ? `${color}18`
                            : "#F5F4F2",
                          color: isActive ? color : "#7A7E8F",
                        }}
                      >
                        {count}
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Events grid or empty state */}
            {gridEvents.length > 0 ? (
              <EventGrid hideBadge={false} events={gridEvents} />
            ) : (
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 rounded-xl border bg-white border-[#D8D5CF] shadow-sm"
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-[#F5F4F2]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9A9EAF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <p className="text-base text-[#5A5F72] font-medium">
                  No events found for this filter.
                </p>
                <button
                  onClick={() => setActiveFilter("All")}
                  className="mt-4 text-sm font-semibold transition-colors duration-200"
                  style={{ color: "#2563EB" }}
                >
                  View all events
                </button>
              </motion.div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                          */}
      {/* ============================================================ */}
      <EventsCTA />
    </div>
  );
}
