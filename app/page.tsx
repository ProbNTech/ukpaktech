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
import { ChevronRight, ArrowUpRight, Cpu, Briefcase, GraduationCap, Globe2, Shield, Handshake, Users, Building2, MapPin, Scale, Lightbulb, TrendingUp } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TechMeshBackground } from "@/components/TechMeshBackground";
const RadialOrbitalTimeline = dynamic(() => import("@/components/ui/radial-orbital-timeline"), { ssr: false });
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

/* ─── What We Do — orbital timeline wrapper ─── */
const whatWeDoData = [
  { id: 1, title: "AI & Tech Programs", content: "Driving AI innovation through training, certifications, and collaborative startup models across key sectors.", icon: Cpu, href: "/programs/ai-tech-programs", color: "#2563EB", relatedIds: [2, 3], status: "completed" as const, energy: 95 },
  { id: 2, title: "Services", content: "Business networks, SME hub, digital marketing, overseas employment, and business support for your tech venture.", icon: Briefcase, href: "/services", color: "#22C55E", relatedIds: [1, 3], status: "completed" as const, energy: 85 },
  { id: 3, title: "Skill Development", content: "Practical training pathways, professional certifications, and mentorship for the modern tech workforce.", icon: GraduationCap, href: "/programs/skill-development-center", color: "#EAB308", relatedIds: [1, 2], status: "in-progress" as const, energy: 70 },
  { id: 4, title: "UK–Pakistan Technology Partnership", content: "Bilateral framework underpinning joint ventures, policy dialogue, and shared R&D investment.", icon: Globe2, href: "/ecosystem/uk-pakistan-technology-partnership", color: "#C41E3A", relatedIds: [5, 6], status: "completed" as const, energy: 90 },
  { id: 5, title: "Leadership & Governance", content: "Transparent governance, ethical oversight, and accountability ensuring UPTECH operates to the highest standards.", icon: Shield, href: "/about/management-team", color: "#2563EB", relatedIds: [4, 6], status: "completed" as const, energy: 80 },
  { id: 6, title: "Trade Delegations", content: "Curated business missions, international trade expos, and pavilion programmes placing members on the world stage.", icon: Handshake, href: "/ecosystem/trade-delegations-and-exhibitions", color: "#22C55E", relatedIds: [4, 5], status: "in-progress" as const, energy: 65 },
];

function WhatWeDoOrbital() {
  return <RadialOrbitalTimeline timelineData={whatWeDoData} />;
}

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

/* Helper to check if an event date is in the past */
function isEventPast(dateStr: string): boolean {
  const now = new Date();
  // Extract year from the date string
  const yearMatch = dateStr.match(/(\d{4})/);
  if (!yearMatch) return false;
  const year = parseInt(yearMatch[1]);

  // Map month names to numbers
  const months: Record<string, number> = {
    january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
  };

  const monthMatch = dateStr.toLowerCase().match(/^(january|february|march|april|may|june|july|august|september|october|november|december)/);
  if (!monthMatch) return false;
  const month = months[monthMatch[1]];

  // Extract day(s) — use the last day if it's a range
  const dayMatch = dateStr.match(/(\d{1,2})(?:[–-](\d{1,2}))?(?:,|\s)/);
  const day = dayMatch ? parseInt(dayMatch[2] || dayMatch[1]) : 28; // default to end of month

  const eventEnd = new Date(year, month, day, 23, 59, 59);
  return eventEnd < now;
}

function HomeEventsSection() {
  const [filter, setFilter] = useState<EventFilter>("All");

  /* Memoize filter function to avoid re-filtering on every render */
  const filterEvent = useCallback((e: typeof homepageEvents[0], tab: EventFilter) => {
    if (tab === "All") return true;
    if (tab === "Past Events") return isEventPast(e.date);
    if (tab === "London") return e.location?.toLowerCase().includes("london");
    if (tab === "Pakistan") {
      const loc = e.location?.toLowerCase() ?? "";
      return loc.includes("pakistan") || loc.includes("karachi") || loc.includes("islamabad") || loc.includes("lahore");
    }
    return e.tag === tab;
  }, []);

  const filtered = useMemo(() => homepageEvents.filter((e) => filterEvent(e, filter)), [filter, filterEvent]);

  /* Pre-compute tab counts once */
  const tabCounts = useMemo(() => {
    const counts: Record<EventFilter, number> = {} as Record<EventFilter, number>;
    for (const tab of EVENT_FILTERS) {
      counts[tab] = homepageEvents.filter((e) => filterEvent(e, tab)).length;
    }
    return counts;
  }, [filterEvent]);

  return (
    <section className="relative z-[1] py-6 lg:py-8">
      <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
        <AnimatedSection>
          <SectionHeader
            label="Attend an event"
            title="Upcoming events"
            body="Our upcoming events span bilateral summits, investor dialogues, webinars, and trade delegations. All events are open to UPTECH members and selected guests."
            color="blue"
          />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-5">
            {EVENT_FILTERS.map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 text-base font-bold uppercase tracking-wide border transition-colors duration-200 rounded-sm ${
                  filter === tab
                    ? "bg-[#1a2b5e] text-white border-[#1a2b5e]"
                    : "bg-white text-[#3D4152] border-[#D8D5CF] hover:border-[#1a2b5e] hover:text-[#1a2b5e]"
                }`}
              >
                {tab} <span className="ml-1 opacity-60">{tabCounts[tab]}</span>
              </button>
            ))}
          </div>

          {/* 3-column event card grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {filtered.map((event) => (
                <HomeEventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-[#3D4152] mb-10">
              <p className="text-base">No events found for this filter.</p>
            </div>
          )}

          <div className="flex justify-center">
            <PillButton href="/events">Find out more</PillButton>
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
      <section className="relative z-[1] py-6 lg:py-8">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left — text content */}
              <div>
                <p className="text-base font-semibold text-[#2563EB] uppercase tracking-wider mb-3">About the Council</p>
                <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-[2.2rem] leading-[1.3] mb-6">
                  The UK–Pakistan Tech Council is a bilateral technology platform established in 2026.
                </h2>
                <div className="content-body">
                <p className="text-[#3D4152] text-base sm:text-lg leading-[1.75] mb-5">
                  UPTECH bridges the United Kingdom and Pakistan through structured programmes of investment facilitation, policy dialogue, innovation partnership, and cross-border trade. The Council brings together technology companies, venture capital, government bodies, academic institutions, and enterprise leaders to drive long-term bilateral growth.
                </p>
                <p className="text-[#3D4152] text-base sm:text-lg leading-[1.75] mb-8">
                  From flagship summits to regulatory frameworks, from AI innovation hubs to seed investment programmes — our work creates the institutional infrastructure that bilateral tech collaboration requires.
                </p>
                </div>
                <PillButton href="/about">About Us</PillButton>
              </div>

              {/* Right — image */}
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src="/image/home/about_section.jpg"
                    alt="UK–Pakistan Tech Council"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Accent bar */}
                <div className="absolute -bottom-3 -right-3 w-2/3 h-[4px] bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#C41E3A] rounded-full" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
           WHO CAN JOIN — overlay image cards
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative z-[1] py-6 lg:py-8">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionHeader
              label="Membership"
              title="Who can join?"
              body="We offer different memberships based on whether you are a technology company, investor, institution, or individual professional."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "IT Companies",
                  desc: "Software houses, SaaS providers, and tech service firms from both nations.",
                  image: "/image/Who%20can%20join/IT_Companies.webp",
                  icon: Cpu,
                  color: "#2563EB",
                },
                {
                  title: "Investors & VCs",
                  desc: "Venture capital funds, angel investors, and private equity firms seeking cross-border deals.",
                  image: "/image/Who%20can%20join/Investors_VCs.webp",
                  icon: TrendingUp,
                  color: "#22C55E",
                },
                {
                  title: "Academic & Research",
                  desc: "Universities, research centres, and academic institutions driving tech innovation.",
                  image: "/image/Who%20can%20join/Academic_Research.webp",
                  icon: GraduationCap,
                  color: "#EAB308",
                },
                {
                  title: "Individual Professionals",
                  desc: "Engineers, founders, consultants, and tech leaders building their careers.",
                  image: "/image/Who%20can%20join/Individual_Professionals.webp",
                  icon: Users,
                  color: "#C41E3A",
                },
              ].map((item) => {
                return (
                  <Link key={item.title} href="/membership" className="group relative block rounded-2xl overflow-hidden h-[340px]">
                    {/* Background image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* White gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <h3 className="font-heading font-bold text-[#2563EB] text-lg leading-snug mb-1.5">{item.title}</h3>
                      <p className="text-[#3D4152] text-sm leading-relaxed">{item.desc}</p>
                      <div className="mt-3 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider" style={{ color: item.color }}>
                        <span>Learn more</span>
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
           OUR FOCUS — 3 Strategic Pillars
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative z-[1] py-6 lg:py-8">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionHeader
              label="Our Focus"
              title="What Drives Us"
              body="We work across three strategic pillars to build a stronger, more connected UK-Pakistan technology ecosystem."
              color="red"
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Scale,
                  title: "Shaping Policy & Regulation",
                  desc: "We work at the intersection of technology and government to help develop supportive policies for bilateral tech trade, digital economy agreements, and tech-friendly regulations. Our council advocates for frameworks that enable efficient trade, protect data, and encourage investment.",
                  color: "#2563EB",
                },
                {
                  icon: Lightbulb,
                  title: "Accelerating Innovation",
                  desc: "We champion emerging technologies including AI, cloud computing, cybersecurity, fintech, and green tech by convening research partnerships, innovation hubs, and collaborative initiatives that harness the best of UK and Pakistani tech talent.",
                  color: "#22C55E",
                },
                {
                  icon: TrendingUp,
                  title: "Developing Markets",
                  desc: "We identify sectors where technology can drive progress — from health and education to financial services, smart infrastructure, and digital government. We help our members understand market needs, build competitive offerings, and enter new international markets.",
                  color: "#C41E3A",
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="group rounded-lg border border-[#D8D5CF]/60 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center">
                    <div className="flex flex-col space-y-1.5 p-6 pb-3">
                      {/* Grid-dot decorator */}
                      <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: `linear-gradient(to right, ${card.color} 1px, transparent 1px), linear-gradient(to bottom, ${card.color} 1px, transparent 1px)`,
                            backgroundSize: "24px 24px",
                          }}
                        />
                        <div className="absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l bg-white" style={{ borderColor: `${card.color}30` }}>
                          <Icon className="size-6" style={{ color: card.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="mt-6 font-heading font-bold text-[#1C1F2E] text-lg">{card.title}</h3>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="text-sm text-[#3D4152] leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
           WHAT WE DO — Radial Orbital Timeline
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative z-[1] py-6 lg:py-8 overflow-hidden">
        {/* Brand-colored particles background */}
        <Particles className="absolute inset-0 z-0" quantity={60} size={0.6} ease={80} color="#2563EB" staticity={40} />
        <Particles className="absolute inset-0 z-0" quantity={40} size={0.5} ease={90} color="#22C55E" staticity={50} />
        <Particles className="absolute inset-0 z-0" quantity={30} size={0.4} ease={100} color="#C41E3A" staticity={60} />
        <div className="relative z-[1] px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionHeader
              label="Explore our work"
              title="What We Do"
              body="From AI innovation to bilateral trade, from startup incubation to skill development — discover how UPTECH is building the future."
              color="blue"
            />
            <WhatWeDoOrbital />
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
           MORE FROM UPTECH — 4-column Card Grid
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative z-[1] py-6 lg:py-8">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionHeader
              label="Discover more"
              title="More from UPTECH"
              body="Explore our platforms, meeting facilities, organisational structure, and flagship initiatives."
              color="green"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/products", icon: Cpu, title: "Our Products", desc: "People AI Platform and TechMart Global — technology platforms connecting talent and enabling cross-border trade.", color: "#22C55E" },
                { href: "/services/mentorship", icon: Users, title: "Mentorship", desc: "Connect with experienced mentors for guidance, career development, and business growth across both nations.", color: "#2563EB" },
                { href: "/meeting-space", icon: MapPin, title: "London Meeting Space", desc: "Professional meeting facilities in central London for members and partners.", color: "#C41E3A" },
                { href: "/about/management-team", icon: Building2, title: "Structure & Procedure", desc: "Our governance framework, organisational roles, and operating procedures.", color: "#1C1F2E" },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="relative rounded-2xl border border-[#D8D5CF]/60 p-px h-full">
                    <Link href={card.href} className="relative h-full block bg-white rounded-2xl overflow-hidden">
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
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
           EVENT HIGHLIGHTS — YouTube video embeds
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative z-[1] py-6 lg:py-8">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader
              label="Watch & learn"
              title="Recent Event Highlights"
              body="Key moments from recent bilateral summits, innovation forums, and technology dialogues shaping the UK–Pakistan digital corridor."
              color="red"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                {
                  id: "NnKZrypT_tE",
                  title: "Indus AI Week Sparks Pakistan's Journey to a Digital Future",
                  description: "A look inside Indus AI Week — Pakistan's flagship artificial intelligence conference driving national digital transformation.",
                },
                {
                  id: "CyE9Mde6d_E",
                  title: "Pakistan Business Summit 2026 | Davos, Switzerland",
                  description: "Global leaders convene in Davos to explore trade, investment, and technology opportunities with Pakistan's emerging digital economy.",
                },
                {
                  id: "K49VP4KJ2vk",
                  title: "Pakistan Pushes AI & Digital Collaboration at London Event",
                  description: "Pakistan's delegation outlines its vision for AI-driven partnerships and digital cooperation at a landmark London gathering.",
                },
                {
                  id: "pXI-qz33PoA",
                  title: "UK–Pakistan Business Summit 2025",
                  description: "Highlights from the UK–Pakistan Business Summit bringing together entrepreneurs, policymakers, and investors from both nations.",
                },
              ].map((video) => (
                <div key={video.id} className="bg-white rounded overflow-hidden border border-[#D8D5CF]">
                  <LiteYouTube id={video.id} title={video.title} />
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base sm:text-lg leading-snug mb-2">
                      {video.title}
                    </h3>
                    <p className="text-[#3D4152] text-base leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
           RESOURCES / NEWS & INSIGHTS — 3 column editorial cards
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative z-[1] py-6 lg:py-8">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionHeader
              label="Stay informed"
              title="News &amp; Insights"
              body="Investment deals, policy developments, innovation spotlights, and bilateral progress — what's shaping the UK–Pakistan technology corridor."
              color="green"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mb-6">
              {homepageArticles.map((article, i) => (
                <NewsCard
                  key={article.slug}
                  slug={article.slug}
                  title={article.title}
                  category={article.category}
                  date={article.date}
                  image={article.image}
                  excerpt={article.excerpt}
                  index={i}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <PillButton href="/events">View all news &amp; events</PillButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
           ATTEND AN EVENT — filtered event cards
      ═══════════════════════════════════════════════════════════ */}
      <HomeEventsSection />

      {/* ════════════════════════════════════════════════════════════
           PARTNER / MEMBER LOGOS — animated carousel
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative z-[1] py-10 lg:py-14" style={{ background: "linear-gradient(135deg, #0f1a3a 0%, #1a2b5e 100%)" }}>
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2563EB]/70 mb-2">Trusted by</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Leading Organisations
            </h2>
          </div>
          <LogoCarousel columnCount={5} logos={sponsorCarouselLogos} />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
           IMPACT NUMBERS — 4 stat cards on white bg
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative z-[1] py-6 lg:py-8">
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
