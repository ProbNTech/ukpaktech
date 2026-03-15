// UPTECH Council - Home page
"use client";

import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { LazyImage } from "@/components/ui/lazy-image";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Hero } from "@/components/Hero";
import { NewsCard } from "@/components/NewsCard";
import { LiteYouTube } from "@/components/LiteYouTube";
import { ChevronRight, ChevronDown, ArrowUpRight, Cpu, Briefcase, GraduationCap, Globe2, Shield, Handshake, Users, Building2, MapPin, Scale, Lightbulb, TrendingUp } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TechMeshBackground } from "@/components/TechMeshBackground";
const WhatWeDoCards = dynamic(() => import("@/components/WhatWeDoCards"), { ssr: false });
const Particles = dynamic(() => import("@/components/ui/particles").then(m => ({ default: m.Particles })), { ssr: false });
import { articles } from "@/data/articles";
import { featuredEvents } from "@/data/featured-events";

import { LogoCarousel } from "@/components/ui/logo-carousel";
import { sponsorLogos } from "@/data/sponsor-logos";
const ImpactStats = dynamic(() =>
  import("@/components/ImpactStats").then((m) => ({ default: m.ImpactStats })),
  { ssr: false }
);
import { GlobalCTA } from "@/components/GlobalCTA";
import { CountryCard } from "@/components/tech-market/CountryCard";
import { countryData } from "@/lib/data/market-data";
import { ContinuousCarousel } from "@/components/tech-market/CountryCarousel";
import StatsCounter from "@/components/tech-market/StatsCounter";
import MembershipSection from "@/components/tech-market/MembershipSection";
import NewsCarousel from "@/components/NewsCarousel";
// import { CountryCarousel } from "@/components/tech-market/CountryCarousel";

/* Top 15 articles for the homepage news grid — 5 rows × 3 columns */
const homepageArticles = articles.slice(0, 15);

/* 9 events — 3 rows × 3 columns on the homepage */
const homepageEvents = featuredEvents.slice(0, 9);

/* Sponsor logos adapted for the LogoCarousel component */
const sponsorCarouselLogos = sponsorLogos.map((logo, i) => ({
  name: logo.alt,
  id: i + 1,
  src: logo.src,
}));

/* ─── Shared section header: label + large title + full-width rule ─── */
const bannerThemes = {
  blue: { bg: "linear-gradient(135deg, #1a2b5e 0%, #0f1a3a 100%)", accent: "#3b82f6", accentTo: "#1a2b5e", label: "#60a5fa" },
  red: { bg: "linear-gradient(135deg, #C41E3A 0%, #8b1525 100%)", accent: "#E74C5E", accentTo: "#C41E3A", label: "#F9A8B4" },
  green: { bg: "linear-gradient(135deg, #15803d 0%, #22C55E 100%)", accent: "#22c55e", accentTo: "#15803d", label: "#86efac" },
};

function SectionHeader({
  label,
  title,
  body,
  color = "blue",
}: {
  label: string;
  title: string;
  body?: string;
  color?: "blue" | "red" | "green";
}) {
  const theme = bannerThemes[color];
  return (
    <div className="mb-4 lg:mb-5">
      <div className="relative overflow-hidden rounded mb-3 -mx-2 sm:-mx-4" style={{ background: theme.bg }}>
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(to bottom, ${theme.accent}, ${theme.accentTo})` }} />
        <div className="absolute top-0 right-0 w-40 h-full opacity-[0.06]" style={{ background: "radial-gradient(circle at 80% 30%, white 0%, transparent 70%)" }} />
        <div className="py-5 px-7 sm:px-10 pl-8 sm:pl-12">
          <p className="text-base font-bold uppercase tracking-[0.2em] mb-1.5" style={{ color: theme.label }}>{label}</p>
          <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-[2.2rem] leading-tight">
            {title}
          </h2>
        </div>
      </div>
      {body && (
        <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed">{body}</p>
      )}
    </div>
  );
}

/* ─── Editorial "pill" button matching ukproptech dark rounded style ─── */
function PillButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1C1F2E] text-white text-base font-semibold hover:bg-[#2563EB] transition-colors duration-300"
    >
      {children}
      <ChevronRight className="w-4 h-4" />
    </Link>
  );
}

/* ─── Event filter tabs for homepage ─── */
type EventFilter = "All" | "London" | "Pakistan" | "Summit" | "Expo" | "Conference" | "Past Events";
const EVENT_FILTERS: EventFilter[] = ["All", "London", "Pakistan", "Summit", "Expo", "Conference", "Past Events"];

/** Dynamic check using dateISO */
function isEventUpcomingISO(dateISO: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(dateISO) >= today;
}

/* ─── Brand-color mapping for event tags ─── */
const tagColors: Record<string, string> = {
  Summit: "#2563EB",
  Expo: "#22C55E",
  Conference: "#C41E3A",
  Workshop: "#EAB308",
  Webinar: "#2563EB",
  Forum: "#22C55E",
};

function getTagColor(tag: string): string {
  return tagColors[tag] || "#2563EB";
}

/* ─── What We Do — 3D card grid data ─── */
const whatWeDoData = [
  { id: 1, title: "AI & Tech Programs", content: "Driving AI innovation through training, certifications, and collaborative startup models across key sectors.", icon: Cpu, href: "/programs/ai-tech-programs", color: "#2563EB" },
  { id: 2, title: "Services", content: "Business networks, SME hub, digital marketing, overseas employment, and business support for your tech venture.", icon: Briefcase, href: "/services", color: "#22C55E" },
  { id: 3, title: "Skill Development", content: "Practical training pathways, professional certifications, and mentorship for the modern tech workforce.", icon: GraduationCap, href: "/programs/skill-development-center", color: "#EAB308" },
  { id: 4, title: "UK-Pakistan Tech Partnership", content: "Bilateral framework underpinning joint ventures, policy dialogue, and shared R&D investment.", icon: Globe2, href: "/ecosystem/uk-pakistan-technology-partnership", color: "#C41E3A" },
  { id: 5, title: "Leadership & Governance", content: "Transparent governance, ethical oversight, and accountability ensuring UPTECH operates to the highest standards.", icon: Shield, href: "/about/management-team", color: "#6366F1" },
  { id: 6, title: "Trade Delegations", content: "Curated business missions, international trade expos, and pavilion programmes placing members on the world stage.", icon: Handshake, href: "/ecosystem/trade-delegations-and-exhibitions", color: "#0EA5E9" },
];

/* ─── Workflow-style event card for homepage ─── */
function HomeEventCard({ event }: { event: typeof homepageEvents[0] }) {
  const color = getTagColor(event.tag);

  return (
    <Link href="/events" className="group flex flex-col gap-2 rounded-lg p-2 duration-75 hover:bg-[#E8E6E3]/60 active:bg-[#E8E6E3]">
      <LazyImage
        src={event.image}
        fallback="/image/placeholder.webp"
        inView={true}
        alt={event.title}
        ratio={16 / 9}
        className="transition-all duration-500 group-hover:scale-105"
        AspectRatioClassName="border-[#D8D5CF]"
      />
      <div className="space-y-2 px-2 pb-2">
        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#7A7E8F]">
          <p>{event.tag}</p>
          <div className="size-1 rounded-full" style={{ background: color }} />
          <p>{event.date}</p>
          {event.location && (
            <>
              <div className="size-1 rounded-full bg-[#7A7E8F]" />
              <p className="line-clamp-1">{event.location}</p>
            </>
          )}
        </div>
        <h2 className="line-clamp-2 text-lg leading-5 font-semibold tracking-tight text-[#1C1F2E]">
          {event.title}
        </h2>
        <p className="line-clamp-3 text-sm text-[#3D4152]/70">
          {event.shortDescription}
        </p>
      </div>
    </Link>
  );
}


function HomeEventsSection() {
  const [showPast, setShowPast] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [monthFilter, setMonthFilter] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<string>("nearest");

  /* Split upcoming/past dynamically using dateISO */
  const upcomingCount = useMemo(() =>
    homepageEvents.filter((e) => isEventUpcomingISO(e.dateISO)).length, []
  );
  const pastCount = useMemo(() =>
    homepageEvents.filter((e) => !isEventUpcomingISO(e.dateISO)).length, []
  );

  /* Get month-year from dateISO */
  const getMonthYear = (dateISO: string) => {
    const d = new Date(dateISO);
    return d.toLocaleString("en-GB", { month: "long", year: "numeric" });
  };

  /* Available months */
  const availableMonths = useMemo(() => {
    const source = homepageEvents.filter((e) =>
      showPast ? !isEventUpcomingISO(e.dateISO) : isEventUpcomingISO(e.dateISO)
    );
    const months = Array.from(new Set(source.map((e) => getMonthYear(e.dateISO))));
    return months.sort((a, b) => {
      const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      const [mA, yA] = a.split(" ");
      const [mB, yB] = b.split(" ");
      const diff = parseInt(yA) - parseInt(yB);
      if (diff !== 0) return showPast ? -diff : diff;
      return showPast ? MONTHS.indexOf(mB) - MONTHS.indexOf(mA) : MONTHS.indexOf(mA) - MONTHS.indexOf(mB);
    });
  }, [showPast]);

  /* Category counts */
  const getCatCount = useCallback((cat: string) => {
    return homepageEvents.filter((e) => {
      const isUp = isEventUpcomingISO(e.dateISO);
      if (showPast ? isUp : !isUp) return false;
      if (cat === "All") return true;
      if (cat === "London") return e.location?.toLowerCase().includes("london");
      if (cat === "Pakistan") {
        const loc = e.location?.toLowerCase() ?? "";
        return loc.includes("pakistan") || loc.includes("karachi") || loc.includes("islamabad") || loc.includes("lahore");
      }
      return e.tag === cat;
    }).length;
  }, [showPast]);

  /* Filtered + sorted */
  const filtered = useMemo(() => {
    let result = homepageEvents.filter((e) => {
      const isUp = isEventUpcomingISO(e.dateISO);
      if (showPast ? isUp : !isUp) return false;

      // Category
      if (categoryFilter !== "All") {
        if (categoryFilter === "London" && !e.location?.toLowerCase().includes("london")) return false;
        if (categoryFilter === "Pakistan") {
          const loc = e.location?.toLowerCase() ?? "";
          if (!loc.includes("pakistan") && !loc.includes("karachi") && !loc.includes("islamabad") && !loc.includes("lahore")) return false;
        }
        if (["Summit", "Expo", "Conference"].includes(categoryFilter) && e.tag !== categoryFilter) return false;
      }

      // Month
      if (monthFilter !== "All" && getMonthYear(e.dateISO) !== monthFilter) return false;

      return true;
    });

    // Sort
    if (sortOrder === "nearest") {
      result = showPast
        ? result.sort((a, b) => b.dateISO.localeCompare(a.dateISO))
        : result.sort((a, b) => a.dateISO.localeCompare(b.dateISO));
    } else if (sortOrder === "newest") {
      result = result.sort((a, b) => b.dateISO.localeCompare(a.dateISO));
    } else {
      result = result.sort((a, b) => a.dateISO.localeCompare(b.dateISO));
    }

    return result;
  }, [showPast, categoryFilter, monthFilter, sortOrder]);

  const CATEGORY_OPTIONS = ["All", "London", "Pakistan", "Summit", "Expo", "Conference"];
  const catColors: Record<string, string> = { All: "#2563EB", London: "#2563EB", Pakistan: "#22C55E", Summit: "#2563EB", Expo: "#22C55E", Conference: "#C41E3A" };

  return (
   <section className="relative z-[1] py-6 lg:py-8 bg-white">
  <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
    <AnimatedSection>
      <div className="flex justify-center">
        <span className="inline-block text-center bg-[#1a2b5e] px-8 py-8 rounded-lg">
          <p className="text-lg sm:text-xl uppercase font-bold text-[#16a34a] mb-2">
            Attend an event
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {showPast ? "Past Events" : "Upcoming Events"}
          </h2>
          <p className="text-base text-white max-w-3xl mx-auto">
            Our events span bilateral summits, investor dialogues, webinars, and trade delegations. All events are open to UPTECH members and selected guests.
          </p>
        </span>
      </div>

      {/* ── Filter Controls ── */}
      <div className="flex flex-col gap-4 mt-8 mb-6">
        {/* Row 1: Upcoming/Past toggle + Category pills */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Upcoming / Past toggle */}
          <div className="flex rounded-lg border border-[#D8D5CF] overflow-hidden mr-2">
            <button
              onClick={() => { setShowPast(false); setMonthFilter("All"); setCategoryFilter("All"); }}
              className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                !showPast ? "bg-[#22C55E] text-white" : "bg-white text-[#5A5F72] hover:bg-gray-50"
              }`}
            >
              Upcoming ({upcomingCount})
            </button>
            <button
              onClick={() => { setShowPast(true); setMonthFilter("All"); setCategoryFilter("All"); }}
              className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                showPast ? "bg-[#C41E3A] text-white" : "bg-white text-[#5A5F72] hover:bg-gray-50"
              }`}
            >
              Past ({pastCount})
            </button>
          </div>

          {/* Category pills */}
          {CATEGORY_OPTIONS.map((cat) => {
            const isActive = categoryFilter === cat;
            const color = catColors[cat] || "#2563EB";
            const count = getCatCount(cat);
            return (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className="px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-lg border transition-all duration-200"
                style={{
                  background: isActive ? `${color}12` : "#FFFFFF",
                  borderColor: isActive ? `${color}55` : "#D8D5CF",
                  color: isActive ? color : "#5A5F72",
                }}
              >
                {cat} <span className="ml-1 opacity-70">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Row 2: Month + Sort dropdowns */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <select
              value={monthFilter}
              onChange={(e) => setMonthFilter(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2.5 text-sm font-semibold rounded-lg border border-[#D8D5CF] bg-white text-[#3D4152] cursor-pointer hover:border-[#2563EB] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
            >
              <option value="All">All Months</option>
              {availableMonths.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7E8F] pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2.5 text-sm font-semibold rounded-lg border border-[#D8D5CF] bg-white text-[#3D4152] cursor-pointer hover:border-[#2563EB] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
            >
              <option value="nearest">Nearest First</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7E8F] pointer-events-none" />
          </div>

          <span className="text-sm text-[#7A7E8F] ml-auto">
            {filtered.length} event{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* ── Event Cards ── */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {filtered.map((event) => (
            <HomeEventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-[#3D4152] mb-10">
          <p className="text-base">No events found for this filter.</p>
          <button
            onClick={() => { setCategoryFilter("All"); setMonthFilter("All"); }}
            className="mt-3 text-sm font-semibold text-[#2563EB]"
          >
            Clear filters
          </button>
        </div>
      )}

      <div className="flex justify-center mt-4">
        <PillButton href="/events">View all events</PillButton>
      </div>
    </AnimatedSection>
  </div>
</section>
  );
}

export default function Home() {
  return (
    <div className="relative">
      {/* <TechMeshBackground /> */}
      {/* ──────────────────────────────────────────────────────────── */}
      {/*  HERO                                                        */}
      {/* ──────────────────────────────────────────────────────────── */}
      <Hero />

      {/* ════════════════════════════════════════════════════════════
           ABOUT THE COUNCIL
           Background: warm off-white (body bg)
           Layout: full-width text paragraph + About Us button
           Matches ukproptech.com "intro" section structure exactly
      ═══════════════════════════════════════════════════════════ */}
     <section className="relative py-10 lg:py-14 bg-fixed bg-cover bg-center"
style={{
  backgroundImage:
    "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')",
}}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#0b1f4d]/80"></div>

  <div className="relative z-10 px-8 sm:px-12 lg:px-16 xl:px-20">
    <AnimatedSection animation="blur-in">
      <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-center">

        {/* Left — text content */}
        <div>
          <div className="bg-[] p-4 rounded-lg">
            <p className="text-base font-extrabold text-[#c41e3a] uppercase tracking-wider mb-3">
              About the Council
            </p>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[2.2rem] leading-[1.3] mb-6 text-white">
  The UK–Pakistan Tech Council is a bilateral technology platform established in 2026.
</h2>
          </div>

          <div className="content-body">
            <p className="text-gray-200 text-base sm:text-lg leading-[1.75] my-5">
              UPTECH bridges the United Kingdom and Pakistan through structured programmes of investment facilitation, policy dialogue, innovation partnership, and cross-border trade.
            </p>

            <p className="text-gray-200 text-base sm:text-lg leading-[1.75] mb-8">
              From flagship summits to regulatory frameworks, from AI innovation hubs to seed investment programmes — our work creates the institutional infrastructure that bilateral tech collaboration requires.
            </p>
          </div>

          <PillButton href="/about">About Us</PillButton>
        </div>

        {/* Right — AI GIF */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/20 shadow-xl">

            <Image
      src="/image/home/kikogifs.gif"
      alt="UK–Pakistan Tech Council"
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 50vw"
    />

          </div>

          {/* Gradient Frame */}
          <div className="absolute -top-3 left-0 w-full h-[4px] bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#C41E3A] rounded-full"></div>
          <div className="absolute -bottom-3 left-0 w-full h-[4px] bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#C41E3A] rounded-full"></div>
          <div className="absolute top-0 -left-3 h-full w-[4px] bg-gradient-to-b from-[#2563EB] via-[#22C55E] to-[#C41E3A] rounded-full"></div>
          <div className="absolute top-0 -right-3 h-full w-[4px] bg-gradient-to-b from-[#2563EB] via-[#22C55E] to-[#C41E3A] rounded-full"></div>
        </div>

      </div>
    </AnimatedSection>
  </div>
</section>

      {/* ════════════════════════════════════════════════════════════
           TECH MARKET OVERVIEW — country cards showcase
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative z-[1] py-6 lg:py-8 bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
             <div className="text-center">
  <span className="inline-block">
    <SectionHeader
      label="Market Intelligence"
      title="UK & European Tech Markets"
      color="blue"
    />
  </span>
</div>

 <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 items-start">

  {/* Left Side Stats */}
  <div className="lg:col-span-2">
    <div className="grid grid-cols-2 gap-6">
      {[
        { value: 10, label: "Countries Covered", color: "#2563EB", suffix: "+" },
        { value: 500, label: "Combined IT Market", color: "#22C55E", prefix: "$", suffix: "B+" },
        { value: 40, label: "Sectors Analysed", color: "#C41E3A", suffix: "+" },
        { value: 2030, label: "Forecast Horizon", color: "#d97706" },
      ].map((stat) => (
        <div
          key={stat.label}
          className="group relative bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          <div
            className="absolute top-0 left-0 w-full h-[4px]"
            style={{
              background: `linear-gradient(to right, ${stat.color}, transparent)`
            }}
          />

          <p
            className="font-heading font-extrabold text-3xl leading-tight mb-2"
            style={{ color: stat.color }}
          >
            {stat.prefix}
            <StatsCounter end={stat.value} suffix={stat.suffix} />
          </p>

          <p className="text-[#6b7280] text-sm">
            {stat.label}
          </p>

          <div
            className="absolute -bottom-10 -right-10 w-32 h-32 opacity-0 group-hover:opacity-20 blur-2xl transition"
            style={{ background: stat.color }}
          />
        </div>
      ))}
    </div>
  </div>


  {/* Right Side Text */}
  <div className="lg:col-span-4">
    <p className="text-[#3D4152] text-base sm:text-lg leading-[1.8] mb-4">
      UPTECH provides Pakistani IT companies with deep market intelligence
      across Europe's most dynamic technology economies. Our research covers
      sector-level data, regulatory landscapes, growth forecasts, and
      actionable entry strategies — everything needed to expand
      internationally with confidence.
    </p>

    <p className="text-[#3D4152] text-base sm:text-lg leading-[1.8]">
      From the UK's AI-driven economy to Germany's enterprise IT powerhouse,
      from France's deep-tech growth to Poland's rapidly expanding outsourcing
      market — each country profile includes current market valuations,
      future projections, high-demand sectors, and specific opportunities for
      Pakistani firms.
    </p>
  </div>

</div>
          {/* Top 4 countries carousel */}
<ContinuousCarousel countryData={countryData} />

           

            {/* CTA banner */}
           <AnimatedSection animation="fade-up">
  <div
    className="mt-8 relative overflow-hidden rounded-xl bg-cover bg-center"
    style={{ backgroundImage: "url('/image/about/movepro.webp')" }}
  >
    
    {/* Blue Light Overlay */}
    <div className="absolute inset-0 bg-blue-600/90"></div>

    {/* Existing pattern */}
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)",
      }}
    />

    <div className="relative px-8 py-7 sm:py-6">
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
    
    {/* Left Side */}
    <div className="flex-1 max-w-3xl">
      <h3 className="font-heading font-bold text-white text-2xl sm:text-3xl lg:text-3xl leading-snug">
        Explore the full market intelligence platform
      </h3>

      <p className="text-blue-100 text-md sm:text-md mt-2 leading-relaxed">
        Access our interactive European map, detailed sector breakdowns, Pakistan IT scope analysis, talent statistics, and country-level deep dives — all in one place.
      </p>
    </div>

    {/* Right Side */}
    <div className="flex-none">
      <Link
        href="/ecosystem/tech-market-overview"
        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-white text-[#1a2b5e] text-base font-bold hover:bg-[#22C55E] hover:text-white transition-colors duration-300 shadow-lg"
      >
        Explore All Markets
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>

  </div>
</div>

  </div>
</AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

    <div>
      <MembershipSection/>
    </div>

      {/* ════════════════════════════════════════════════════════════
           WHAT WE DO — Radial Orbital Timeline
      ═══════════════════════════════════════════════════════════ */}
 <section className="relative py-14 lg:py-20 overflow-hidden">

  {/* Parallax Background */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
    style={{ backgroundImage: "url('/image/home/newai.png')" }}
  />

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/40 z-0"></div>

  {/* Content */}
  <div className="relative z-10 px-6 sm:px-10 lg:px-16 xl:px-20">
    <AnimatedSection animation="blur-in">

      {/* Section Header with Glass Effect */}
      
    <div className="flex items-center justify-center">
  <span className="inline-block text-center bg-[#1a2b5e] px-6 py-6 rounded-lg">
    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Our Expertise</h4>
    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Innovation & Technology</h2>
    <p className="text-white text-md">
      We drive growth through AI, startups, and skill development — shaping the future of tech.
    </p>
  </span>
</div>


      {/* Cards */}
      <WhatWeDoCards items={whatWeDoData} />

    </AnimatedSection>
  </div>

</section>



      {/* ════════════════════════════════════════════════════════════
           MORE FROM UPTECH — 4-column Card Grid
      ═══════════════════════════════════════════════════════════ */}
    <section className="relative z-[1] py-6 lg:py-8 bg-white">
  <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
    <AnimatedSection animation="blur-in">
      {/* Custom grid fractions: left smaller, right larger */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
        {/* Left Side - Custom Heading */}
        <div className="flex items-center justify-center">
          <div className="text-center bg-[#22C55E] px-6 py-6 rounded-2xl">
            <h4 className="text-lg sm:text-2xl font-semibold text-white mb-2">Discover more</h4>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">More from UPTECH</h2>
            <p className="text-white text-md">
              Explore our platforms, meeting facilities, organisational structure, and flagship initiatives.
            </p>
          </div>
        </div>

        {/* Right Side - Cards 2x2 */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { href: "/products", icon: Cpu, title: "Our Products", desc: "People AI Platform and TechMart Global — technology platforms connecting talent and enabling cross-border trade.", color: "#22C55E" },
            { href: "/services/mentorship", icon: Users, title: "Mentorship", desc: "Connect with experienced mentors for guidance, career development, and business growth across both nations.", color: "#2563EB" },
            { href: "/meeting-space", icon: MapPin, title: "London Meeting Space", desc: "Professional meeting facilities in central London for members and partners.", color: "#C41E3A" },
            { href: "/about/management-team", icon: Building2, title: "Structure & Procedure", desc: "Our governance framework, organisational roles, and operating procedures.", color: "#1C1F2E" },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="relative rounded-2xl p-px h-full">
                <Link href={card.href} className="relative h-full block bg-transparent rounded-2xl overflow-hidden">
                  <div className="p-6 lg:p-7">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${card.color}10`, border: `1px solid ${card.color}15` }}>
                        <Icon className="w-6 h-6" style={{ color: card.color }} strokeWidth={1.5} />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#D8D5CF]" />
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">{card.title}</h3>
                    <p className="text-[#3D4152] text-base leading-relaxed">{card.desc}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  </div>
</section>




      {/* ════════════════════════════════════════════════════════════
           EVENT HIGHLIGHTS — YouTube video embeds
      ═══════════════════════════════════════════════════════════ */}
    <section className="relative z-[1] py-8 lg:py-12 bg-[#1a2b5e] text-white">
  <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
    <AnimatedSection>
      {/* Header */}
      <div className="text-center mb-8">
        <h4 className="text-sm sm:text-base font-semibold text-red-400 mb-1">Watch & learn</h4>
        <h2 className="text-xl sm:text-2xl font-bold text-white">Recent Event Highlights</h2>
      </div>

      {/* 4 Videos in a Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            id: "NnKZrypT_tE",
            title: "Indus AI Week — Digital Future",
          },
          {
            id: "CyE9Mde6d_E",
            title: "Pakistan Business Summit — Davos 2026",
          },
          {
            id: "K49VP4KJ2vk",
            title: "AI & Digital Collaboration — London",
          },
          {
            id: "pXI-qz33PoA",
            title: "UK–Pakistan Business Summit 2025",
          },
        ].map((video) => (
          <div key={video.id} className="group">
            <div className="rounded-lg border border-gray-600 overflow-hidden shadow-md shadow-blue-900/30">
              <LiteYouTube id={video.id} title={video.title} />
            </div>
            <h3 className="font-semibold text-sm mt-2 text-white/90 leading-snug">
              {video.title}
            </h3>
          </div>
        ))}
      </div>
    </AnimatedSection>
  </div>
</section>


      {/* ════════════════════════════════════════════════════════════
           RESOURCES / NEWS & INSIGHTS — 3 column editorial cards
      ═══════════════════════════════════════════════════════════ */}
  <section className="relative z-[1] py-6 lg:py-10 bg-white">
  <div className="px-8 sm:px-12 lg:px-16 xl:px-20">

    <AnimatedSection animation="blur-in">

      <div className="grid lg:grid-cols-12 gap-10 items-center">

        {/* Left Side */}
        <div className="lg:col-span-4 flex flex-col justify-center">

          <span className="inline-block text-lg sm:text-2xl font-bold text-green-600 mb-2">
            Stay informed
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1F2E] mb-4">
            News & Insights
          </h2>

          <p className="text-[#3D4152]/80 text-sm sm:text-base leading-relaxed">
            Investment deals, policy developments, innovation spotlights,
            and bilateral progress — what's shaping the UK–Pakistan
            technology corridor.
          </p>

        </div>

        {/* Right Side */}
        <div className="lg:col-span-8 w-full">

          <NewsCarousel articles={homepageArticles} />

          <div className="flex justify-center mt-4">
            <PillButton href="/events">
              View all news & events
            </PillButton>
          </div>

        </div>

      </div>

    </AnimatedSection>

  </div>
</section>

      {/* ════════════════════════════════════════════════════════════
           ATTEND AN EVENT — filtered event cards
      ═══════════════════════════════════════════════════════════ */}
      <HomeEventsSection />

      {/* ════════════════════════════════════════════════════════════
           IMPACT NUMBERS — 4 stat cards on white bg
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative z-[1] py-6 lg:py-8 bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionHeader
              label="Our impact"
              title="Impact Momentum"
              body="A modern technology council engineered to scale collaboration, talent, and investment across the UK–Pakistan corridor."
              color="red"
            />
            <ImpactStats />
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
           PARTNER / MEMBER LOGOS — animated carousel
      ═══════════════════════════════════════════════════════════ */}
     <section
  className="relative z-[1] py-10 lg:py-14 rounded-xl overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('/image/about/movepro.webp')" }}
>
  {/* Optional overlay for better text contrast */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative text-center px-8 sm:px-12 lg:px-16 xl:px-20">
   <div className="text-center mb-8 inline-block px-6 py-4 rounded-lg bg-black/30 backdrop-blur-md">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
    Leading Organisations
  </h2>
</div>
    <LogoCarousel columnCount={5} logos={sponsorCarouselLogos} />
  </div>
</section>

      <GlobalCTA
        label="Join UPTECH"
        title="UPTECH is a trusted network of over 120 members, shaping the future of UK–Pakistan technology."
        subtitle="Membership opens access to bilateral investment introductions, exclusive summits, policy briefings, and the UK–Pakistan tech community."
        primaryButtonText="Apply for Membership"
        primaryButtonLink="/membership/apply"
      />
    </div>
  );
}
