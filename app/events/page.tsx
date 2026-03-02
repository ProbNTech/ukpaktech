"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion, useReducedMotion } from "framer-motion";
import { EventGrid } from "@/components/events/EventGrid";
import { EventsCTA } from "@/components/events/EventsCTA";
import { events } from "@/data/events";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";

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
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <PageHero
        label="Programme Calendar"
        title="Events & Engagements"
        subtitle="UPTECH flagship summits, key London and Pakistan tech events, and bilateral engagements connecting both nations' technology ecosystems."
        image="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=2400&q=85&auto=format&fit=crop"
      />

      {/* ============================================================ */}
      {/*  STATS BAR                                                    */}
      {/* ============================================================ */}
      <section className="bg-[#EEECEA]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl" style={{ background: `linear-gradient(to right, ${stat.color}, ${stat.color}60)` }} />
                <div
                  className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <p className="text-[#5A5F72] text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  EVENTS GRID WITH FILTERS — light theme                       */}
      {/* ============================================================ */}
      <section className="relative bg-[#EEECEA]">
        <div className="relative z-10 px-8 sm:px-12 lg:px-16 xl:px-20 py-10 lg:py-14">
          <AnimatedSection>
            {/* Section header */}
            <SectionHeader
              label="Programme"
              title="Events Calendar"
              subtitle="Key engagements, summits, and activities from the UK-Pakistan technology corridor."
              color="blue"
            />

            {/* Filter tabs — light theme */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
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
                    className="relative px-5 py-2.5 text-base font-bold uppercase tracking-wider rounded-lg border transition-all duration-300 cursor-pointer"
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
                        className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded text-base font-bold"
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
                  className="mt-4 text-base font-semibold transition-colors duration-200"
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
