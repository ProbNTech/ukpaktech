// UPTECH Council - Home page
"use client";

import { useState, useMemo, useCallback } from "react";
import { LazyImage } from "@/components/ui/lazy-image";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Hero } from "@/components/Hero";
import { LiteYouTube } from "@/components/LiteYouTube";
import { ChevronRight, ChevronDown, ArrowUpRight } from "lucide-react";
import { AITechIcon, ServicesIcon, SkillDevIcon, PartnershipIcon, GovernanceIcon, TradeDelegationsIcon, ProductsIcon, MentorshipIcon, MeetingSpaceIcon, StructureIcon } from "@/components/ui/premium-icons";
const WhatWeDoCards = dynamic(() => import("@/components/WhatWeDoCards"), { ssr: false });
import { articles } from "@/data/articles";
import { featuredEvents } from "@/data/featured-events";

import { LogoCarousel } from "@/components/ui/logo-carousel";
import { sponsorLogos } from "@/data/sponsor-logos";
const ImpactStats = dynamic(() =>
  import("@/components/ImpactStats").then((m) => ({ default: m.ImpactStats })),
  { ssr: false }
);
import { GlobalCTA } from "@/components/GlobalCTA";
import BoardOfAdvisors from "@/components/BoardOfAdvisors";
import { countryData } from "@/lib/data/market-data";
import { ContinuousCarousel } from "@/components/tech-market/CountryCarousel";
import StatsCounter from "@/components/tech-market/StatsCounter";
import MembershipSection, { WhatDrivesUs } from "@/components/tech-market/MembershipSection";
import NewsCarousel from "@/components/NewsCarousel";
const FeaturedPartnersCarousel = dynamic(() => import("@/components/FeaturedPartnersCarousel"), { ssr: false });
// import { CountryCarousel } from "@/components/tech-market/CountryCarousel";

/* Top 15 articles for the homepage news grid — 5 rows × 3 columns */
const homepageArticles = articles.slice(0, 15);

/* Homepage events — exclude March, max 9 */
const homepageEvents = featuredEvents.filter(e => new Date(e.dateISO).getMonth() !== 2);

/* Sponsor logos adapted for the LogoCarousel component */
const sponsorCarouselLogos = sponsorLogos.map((logo, i) => ({
  name: logo.alt,
  id: i + 1,
  src: logo.src,
}));

/* ─── Section label: small colored label + large title ─── */
function SectionLabel({
  label,
  title,
  body,
  color = "#2563EB",
  align = "left",
  light = false,
}: {
  label: string;
  title: string;
  body?: string;
  color?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  const alignClass = align === "center" ? "text-center" : "";
  return (
    <div className={`mb-10 lg:mb-12 ${alignClass}`}>
      <div className="flex items-center gap-3 mb-4" style={align === "center" ? { justifyContent: "center" } : {}}>
        <div className="w-8 h-[3px] rounded-full" style={{ background: color }} />
        <p className="text-sm font-bold uppercase tracking-[0.22em]" style={{ color }}>{label}</p>
      </div>
      <h2 className={`font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.1] ${light ? "text-white" : "text-[#1C1F2E]"}`}>
        {title}
      </h2>
      {body && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed max-w-3xl ${light ? "text-gray-300" : "text-[#5A5F72]"} ${align === "center" ? "mx-auto" : ""}`}>
          {body}
        </p>
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
  { id: 1, title: "AI & Tech Programs", content: "Driving AI innovation through training, certifications, and collaborative startup models across key sectors.", icon: AITechIcon, href: "/programs/ai-tech-programs", color: "#2563EB" },
  { id: 2, title: "Services", content: "Business networks, SME hub, digital marketing, overseas employment, and business support for your tech venture.", icon: ServicesIcon, href: "/services", color: "#22C55E" },
  { id: 3, title: "Skill Development", content: "Practical training pathways, professional certifications, and mentorship for the modern tech workforce.", icon: SkillDevIcon, href: "/programs/skill-development-center", color: "#EAB308" },
  { id: 4, title: "UK-Pakistan Tech Partnership", content: "Bilateral framework underpinning joint ventures, policy dialogue, and shared R&D investment.", icon: PartnershipIcon, href: "/ecosystem/uk-pakistan-technology-partnership", color: "#C41E3A" },
  { id: 5, title: "Leadership & Governance", content: "Transparent governance, ethical oversight, and accountability ensuring UPTECH operates to the highest standards.", icon: GovernanceIcon, href: "/about/management-team", color: "#6366F1" },
  { id: 6, title: "Trade Delegations", content: "Curated business missions, international trade expos, and pavilion programmes placing members on the world stage.", icon: TradeDelegationsIcon, href: "/ecosystem/trade-delegations-and-exhibitions", color: "#0EA5E9" },
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

    // Sort by date
    if (sortOrder === "nearest") {
      result = showPast
        ? result.sort((a, b) => b.dateISO.localeCompare(a.dateISO))
        : result.sort((a, b) => a.dateISO.localeCompare(b.dateISO));
    } else if (sortOrder === "newest") {
      result = result.sort((a, b) => b.dateISO.localeCompare(a.dateISO));
    } else {
      result = result.sort((a, b) => a.dateISO.localeCompare(b.dateISO));
    }

    // Group: UK/London events on top, Pakistan events on bottom
    const isUK = (e: typeof result[0]) => {
      const loc = e.location?.toLowerCase() ?? "";
      return loc.includes("london") || loc.includes("westminster") || loc.includes("excel");
    };
    const isPK = (e: typeof result[0]) => {
      const loc = e.location?.toLowerCase() ?? "";
      return loc.includes("pakistan") || loc.includes("karachi") || loc.includes("islamabad") || loc.includes("lahore");
    };
    const ukEvents = result.filter(isUK);
    const pkEvents = result.filter(isPK);
    const otherEvents = result.filter(e => !isUK(e) && !isPK(e));
    result = [...ukEvents, ...otherEvents, ...pkEvents];

    return result.slice(0, 9);
  }, [showPast, categoryFilter, monthFilter, sortOrder]);

  const CATEGORY_OPTIONS = ["All", "London", "Pakistan", "Summit", "Expo", "Conference"];
  const catColors: Record<string, string> = { All: "#2563EB", London: "#2563EB", Pakistan: "#22C55E", Summit: "#2563EB", Expo: "#22C55E", Conference: "#C41E3A" };

  return (
   <section className="relative z-[1] py-20 lg:py-28 bg-white">
  <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
    <AnimatedSection>
      <SectionLabel
        label="Attend an Event"
        title={showPast ? "Past Events" : "Upcoming Events"}
        body="Our events span bilateral summits, investor dialogues, webinars, and trade delegations. All events are open to UPTECH members and selected guests."
        color="#22C55E"
        align="center"
      />

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
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           1. HERO — Full-screen video (dark)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Hero />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           2. ABOUT — White bg, clean corporate intro
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #1C1F2E 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <SectionLabel label="About the Council" title="A bilateral technology platform bridging the UK and Pakistan." color="#2563EB" />
                <div className="content-body -mt-4">
                  <p className="text-[#5A5F72] text-base sm:text-lg leading-[1.85] mb-5">
                    UPTECH bridges the United Kingdom and Pakistan through structured programmes of investment facilitation, policy dialogue, innovation partnership, and cross-border trade.
                  </p>
                  <p className="text-[#5A5F72] text-base sm:text-lg leading-[1.85] mb-8">
                    From flagship summits to regulatory frameworks, from AI innovation hubs to seed investment programmes — our work creates the institutional infrastructure that bilateral tech collaboration requires.
                  </p>
                </div>
                <PillButton href="/about">About Us</PillButton>
              </div>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <Image src="/image/home/kikogifs.gif" alt="UK–Pakistan Tech Council" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-[#2563EB]/10 -z-10" />
                <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-[#22C55E]/8 -z-10" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           3. TECH MARKET OVERVIEW — Light gray bg (moved up per client request)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative z-[1] py-20 lg:py-28 bg-[#f7f8fa]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionLabel label="Market Intelligence" title="UK & European Tech Markets" color="#2563EB" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: 10, label: "Countries Covered", color: "#2563EB", suffix: "+" },
                    { value: 500, label: "Combined IT Market", color: "#22C55E", prefix: "$", suffix: "B+" },
                    { value: 40, label: "Sectors Analysed", color: "#C41E3A", suffix: "+" },
                    { value: 2030, label: "Forecast Horizon", color: "#d97706" },
                  ].map((stat) => (
                    <div key={stat.label} className="group relative bg-white rounded-xl border border-[#E5E7EB] p-5 hover:shadow-md transition-all duration-300 overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: `linear-gradient(to right, ${stat.color}, transparent)` }} />
                      <p className="font-heading font-extrabold text-2xl sm:text-3xl leading-tight mb-1" style={{ color: stat.color }}>
                        {stat.prefix}<StatsCounter end={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="text-[#7A7E8F] text-xs sm:text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-3">
                <p className="text-[#5A5F72] text-base sm:text-lg leading-[1.85] mb-4">
                  UPTECH provides Pakistani IT companies with deep market intelligence across Europe&apos;s most dynamic technology economies. Our research covers sector-level data, regulatory landscapes, growth forecasts, and actionable entry strategies.
                </p>
                <p className="text-[#5A5F72] text-base sm:text-lg leading-[1.85]">
                  From the UK&apos;s AI-driven economy to Germany&apos;s enterprise IT powerhouse, from France&apos;s deep-tech growth to Poland&apos;s rapidly expanding outsourcing market — each profile includes market valuations, projections, and opportunities for Pakistani firms.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <ContinuousCarousel countryData={countryData} />
            </div>

            <AnimatedSection animation="fade-up">
              <div className="mt-10 relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1a2b5e] to-[#2563EB]">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)" }} />
                <div className="relative px-8 sm:px-10 py-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="flex-1 max-w-2xl">
                      <h3 className="font-heading font-bold text-white text-xl sm:text-2xl leading-snug mb-2">Explore the full market intelligence platform</h3>
                      <p className="text-blue-200 text-sm sm:text-base leading-relaxed">Access our interactive European map, sector breakdowns, Pakistan IT scope analysis, and country-level deep dives.</p>
                    </div>
                    <Link href="/ecosystem/tech-market-overview" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-[#1a2b5e] text-sm font-bold hover:bg-[#22C55E] hover:text-white transition-colors duration-300 shadow-lg whitespace-nowrap">
                      Explore All Markets <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           4. MEMBERSHIP — Component-level dark styling (right after Tech Market)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <MembershipSection />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           5. WHAT WE DO — White bg (services & expertise)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative z-[1] py-20 lg:py-28 bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionLabel
              label="Our Expertise"
              title="What We Do"
              body="We drive growth through AI, startups, and skill development — shaping the future of UK–Pakistan tech collaboration."
              color="#2563EB"
              align="center"
            />
            <WhatWeDoCards items={whatWeDoData} />
          </AnimatedSection>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           6. IMPACT STATS — Dark navy
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative z-[1] py-20 lg:py-24 bg-[#0f1a3a] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionLabel label="Our Impact" title="Impact Momentum" body="A modern technology council engineered to scale collaboration, talent, and investment across the UK–Pakistan corridor." color="#60a5fa" align="center" light />
            <ImpactStats />
          </AnimatedSection>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           7. BOARD OF ADVISORS — White bg
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <BoardOfAdvisors />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           8. WHAT DRIVES US — Dark navy (strategic pillars)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <WhatDrivesUs />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           9. NEWS & INSIGHTS — White bg
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative z-[1] py-20 lg:py-28 bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 flex flex-col justify-center">
                <SectionLabel label="Stay Informed" title="News & Insights" color="#22C55E" />
                <p className="text-[#5A5F72] text-sm sm:text-base leading-relaxed -mt-6">
                  Investment deals, policy developments, innovation spotlights, and bilateral progress — what&apos;s shaping the UK–Pakistan technology corridor.
                </p>
              </div>
              <div className="lg:col-span-8 w-full">
                <NewsCarousel articles={homepageArticles} />
                <div className="flex justify-center mt-8">
                  <PillButton href="/events">View all news & events</PillButton>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           9. MORE FROM UPTECH — Light gray bg
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative z-[1] py-20 lg:py-28 bg-[#f7f8fa]">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionLabel label="Discover More" title="More from UPTECH" body="Explore our platforms, meeting facilities, organisational structure, and flagship initiatives." color="#22C55E" align="center" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { href: "/products", icon: ProductsIcon, color: "#2563EB", title: "Our Products", desc: "People AI Platform, TechMart Global, and Trusted Partner Certification — connecting talent and enabling trade." },
                { href: "/services/mentorship", icon: MentorshipIcon, color: "#22C55E", title: "Mentorship", desc: "Connect with experienced mentors for guidance, career development, and business growth across both nations." },
                { href: "/meeting-space", icon: MeetingSpaceIcon, color: "#EAB308", title: "London Meeting Space", desc: "Professional meeting facilities in central London for members and partners." },
                { href: "/about/management-team", icon: StructureIcon, color: "#6366F1", title: "Structure & Procedure", desc: "Our governance framework, organisational roles, and operating procedures." },
              ].map((card) => {
                const CardIcon = card.icon;
                return (
                  <Link key={card.title} href={card.href} className="group block bg-white rounded-2xl border border-[#E5E7EB] p-6 lg:p-7 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                    <div className="mb-4 group-hover:scale-105 transition-transform duration-300 overflow-visible">
                      <CardIcon className="w-[100px] h-[100px]" />
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">{card.title}</h3>
                      <ArrowUpRight className="w-4 h-4 text-[#D8D5CF] group-hover:text-[#2563EB] transition-colors shrink-0 mt-1" />
                    </div>
                    <p className="text-[#5A5F72] text-sm leading-relaxed">{card.desc}</p>
                  </Link>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           10. EVENT HIGHLIGHTS — Dark navy
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative z-[1] py-20 lg:py-24 bg-[#0f1a3a] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionLabel label="Watch & Learn" title="Recent Event Highlights" color="#60a5fa" align="center" light />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { id: "NnKZrypT_tE", title: "Indus AI Week — Digital Future" },
                { id: "CyE9Mde6d_E", title: "Pakistan Business Summit — Davos 2026" },
                { id: "K49VP4KJ2vk", title: "AI & Digital Collaboration — London" },
                { id: "pXI-qz33PoA", title: "UK–Pakistan Business Summit 2025" },
              ].map((video) => (
                <div key={video.id} className="group">
                  <div className="rounded-xl border border-white/10 overflow-hidden shadow-lg shadow-black/20">
                    <LiteYouTube id={video.id} title={video.title} />
                  </div>
                  <h3 className="font-semibold text-sm mt-4 text-white/85 leading-snug">{video.title}</h3>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           11. ATTEND AN EVENT — White bg
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <HomeEventsSection />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           12. FEATURED PARTNERS — White bg
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <FeaturedPartnersCarousel />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           13. LEADING ORGANISATIONS — Dark navy (closing dark pair with CTA)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative z-[1] py-16 lg:py-20 bg-[#0f1a3a] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
        <div className="relative text-center px-8 sm:px-12 lg:px-16 xl:px-20">
          <SectionLabel label="Our Network" title="Leading Organisations" color="#60a5fa" align="center" light />
          <LogoCarousel columnCount={5} logos={sponsorCarouselLogos} />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           14. GLOBAL CTA — TubesCTA dark
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
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
