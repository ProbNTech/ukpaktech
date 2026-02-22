"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Hero } from "@/components/Hero";
import { NewsCard } from "@/components/NewsCard";
import { ChevronRight } from "lucide-react";
import { articles } from "@/data/articles";
import { featuredEvents } from "@/data/featured-events";

const SponsorMarquee = dynamic(() =>
  import("@/components/SponsorMarquee").then((m) => ({ default: m.SponsorMarquee }))
);
const JoinUPTECHBackground = dynamic(() =>
  import("@/components/JoinUPTECHBackground").then((m) => ({
    default: m.JoinUPTECHBackground,
  }))
);
const ImpactStats = dynamic(() =>
  import("@/components/ImpactStats").then((m) => ({ default: m.ImpactStats }))
);

/* Top 15 articles for the homepage news grid — 5 rows × 3 columns */
const homepageArticles = articles.slice(0, 15);

/* 9 events — 3 rows × 3 columns on the homepage */
const homepageEvents = featuredEvents.slice(0, 9);

/* ─── Shared section header: label + large title + full-width rule ─── */
const bannerThemes = {
  blue: { bg: "linear-gradient(135deg, #1a2b5e 0%, #0f1a3a 100%)", accent: "#3b82f6", accentTo: "#1a2b5e", label: "#60a5fa" },
  red: { bg: "linear-gradient(135deg, #C41E3A 0%, #8b1525 100%)", accent: "#E74C5E", accentTo: "#C41E3A", label: "#F9A8B4" },
  green: { bg: "linear-gradient(135deg, #0d6b3a 0%, #064e2b 100%)", accent: "#22c55e", accentTo: "#0d6b3a", label: "#86efac" },
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
    <div className="mb-10 lg:mb-12">
      <div className="relative overflow-hidden rounded mb-5 -mx-2 sm:-mx-4" style={{ background: theme.bg }}>
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(to bottom, ${theme.accent}, ${theme.accentTo})` }} />
        <div className="absolute top-0 right-0 w-40 h-full opacity-[0.06]" style={{ background: "radial-gradient(circle at 80% 30%, white 0%, transparent 70%)" }} />
        <div className="py-5 px-7 sm:px-10 pl-8 sm:pl-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5" style={{ color: theme.label }}>{label}</p>
          <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-[2.2rem] leading-tight">
            {title}
          </h2>
        </div>
      </div>
      {body && (
        <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed max-w-3xl">{body}</p>
      )}
    </div>
  );
}

/* ─── Editorial "pill" button matching ukproptech dark rounded style ─── */
function PillButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1C1F2E] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors duration-300"
    >
      {children}
      <ChevronRight className="w-4 h-4" />
    </Link>
  );
}

/* ─── Event filter tabs for homepage ─── */
type EventFilter = "All" | "London" | "Pakistan" | "Summit" | "Expo" | "Conference" | "Past Events";
const EVENT_FILTERS: EventFilter[] = ["All", "London", "Pakistan", "Summit", "Expo", "Conference", "Past Events"];

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

  const filtered = homepageEvents.filter((e) => {
    if (filter === "All") return true;
    if (filter === "Past Events") return isEventPast(e.date);
    if (filter === "London") return e.location?.toLowerCase().includes("london");
    if (filter === "Pakistan") return e.location?.toLowerCase().includes("pakistan") || e.location?.toLowerCase().includes("karachi") || e.location?.toLowerCase().includes("islamabad") || e.location?.toLowerCase().includes("lahore");
    return e.tag === filter;
  });

  return (
    <section className="relative z-[1] py-16 lg:py-20" style={{ backgroundColor: "#EEECEA" }}>
      <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
        <AnimatedSection>
          <SectionHeader
            label="Attend an event"
            title="Upcoming events"
            body="Our upcoming events span bilateral summits, investor dialogues, webinars, and trade delegations. All events are open to UPTECH members and selected guests."
            color="blue"
          />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {EVENT_FILTERS.map((tab) => {
              const count = tab === "All" ? homepageEvents.length
                : tab === "Past Events" ? homepageEvents.filter((e) => isEventPast(e.date)).length
                : tab === "London" ? homepageEvents.filter((e) => e.location?.toLowerCase().includes("london")).length
                : tab === "Pakistan" ? homepageEvents.filter((e) => e.location?.toLowerCase().includes("pakistan") || e.location?.toLowerCase().includes("karachi") || e.location?.toLowerCase().includes("islamabad") || e.location?.toLowerCase().includes("lahore")).length
                : homepageEvents.filter((e) => e.tag === tab).length;
              return (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wide border transition-colors duration-200 rounded-sm ${
                    filter === tab
                      ? "bg-[#1a2b5e] text-white border-[#1a2b5e]"
                      : "bg-white text-[#3D4152] border-[#D8D5CF] hover:border-[#1a2b5e] hover:text-[#1a2b5e]"
                  }`}
                >
                  {tab} <span className="ml-1 opacity-60">{count}</span>
                </button>
              );
            })}
          </div>

          {/* 3-column event card grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-10">
              {filtered.map((event) => (
                <Link key={event.id} href="/events" className="group flex flex-col bg-white border border-[#D8D5CF] rounded overflow-hidden hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-[16/9] bg-[#1C1F2E] relative overflow-hidden">
                    {event.image ? (
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/25 text-[10px] font-semibold uppercase tracking-widest">{event.tag}</span>
                      </div>
                    )}
                    <span className="absolute top-3 left-3 px-3 py-1 bg-[#1C1F2E]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">{event.tag}</span>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-2 text-xs text-[#7A7E8F] mb-3">
                      <time className="font-medium">{event.date}</time>
                      {event.location && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-[#7A7E8F]" />
                          <span>{event.location}</span>
                        </>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base leading-snug mb-3 line-clamp-2 group-hover:text-[#2563EB] transition-colors duration-200">{event.title}</h3>
                    <p className="text-[#3D4152] text-sm leading-relaxed line-clamp-3 mb-4">{event.shortDescription}</p>
                    <div className="mt-auto pt-3 border-t border-[#D8D5CF]">
                      <span className="text-sm font-semibold text-[#1C1F2E] group-hover:text-[#2563EB] transition-colors duration-200 inline-flex items-center gap-1">
                        Learn more <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
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
    <div>
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
      <section className="relative z-[1] py-16 lg:py-20" style={{ backgroundColor: "#EEECEA" }}>
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left — text content */}
              <div>
                <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-3">About the Council</p>
                <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-[2.2rem] leading-[1.3] mb-6">
                  The UK–Pakistan Tech Council is a bilateral technology platform established in 2026.
                </h2>
                <p className="text-[#3D4152] text-base sm:text-lg leading-[1.75] mb-5 text-justify">
                  UPTECH bridges the United Kingdom and Pakistan through structured programmes of investment facilitation, policy dialogue, innovation partnership, and cross-border trade. The Council brings together technology companies, venture capital, government bodies, academic institutions, and enterprise leaders to drive long-term bilateral growth.
                </p>
                <p className="text-[#3D4152] text-base sm:text-lg leading-[1.75] mb-8 text-justify">
                  From flagship summits to regulatory frameworks, from AI innovation hubs to seed investment programmes — our work creates the institutional infrastructure that bilateral tech collaboration requires.
                </p>
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
           WHO CAN JOIN — horizontal scroll of member types
           Matches the ukproptech "Who can join?" horizontal card row
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative z-[1] py-14 lg:py-18" style={{ backgroundColor: "#E8E6E3" }}>
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            {/* Section header with red banner */}
            <div className="relative overflow-hidden rounded mb-5 -mx-2 sm:-mx-4" style={{ background: bannerThemes.blue.bg }}>
              <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(to bottom, ${bannerThemes.blue.accent}, ${bannerThemes.blue.accentTo})` }} />
              <div className="absolute top-0 right-0 w-40 h-full opacity-[0.06]" style={{ background: "radial-gradient(circle at 80% 30%, white 0%, transparent 70%)" }} />
              <div className="py-5 px-7 sm:px-10 pl-8 sm:pl-12">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5" style={{ color: bannerThemes.blue.label }}>Membership</p>
                <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-[2.2rem] leading-tight">
                  Who can join?
                </h2>
              </div>
            </div>
            <p className="text-[#3D4152] text-base sm:text-lg mb-8 max-w-2xl">
              We offer different memberships based on whether you are a technology company, investor, institution, or individual professional.
            </p>

            {/* Horizontal scrollable cards — 4 columns on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  title: "IT Companies",
                  image: "/image/Who%20can%20join/IT_Companies.webp",
                },
                {
                  title: "Investors & VCs",
                  image: "/image/Who%20can%20join/Investors_VCs.webp",
                },
                {
                  title: "Academic & Research",
                  image: "/image/Who%20can%20join/Academic_Research.webp",
                },
                {
                  title: "Individual Professionals",
                  image: "/image/Who%20can%20join/Individual_Professionals.webp",
                },
              ].map((item) => (
                <Link key={item.title} href="/membership" className="group flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#D8D5CF] mb-3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-sm sm:text-base leading-snug group-hover:text-[#2563EB] transition-colors duration-200 mb-3">
                    {item.title}
                  </h3>
                  <div className="h-px bg-[#1C1F2E]/20 group-hover:bg-[#2563EB]/50 transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
           EVENT HIGHLIGHTS — YouTube video embeds
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative z-[1] py-16 lg:py-20" style={{ backgroundColor: "#EEECEA" }}>
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader
              label="Watch & learn"
              title="Recent Event Highlights"
              body="Key moments from recent bilateral summits, innovation forums, and technology dialogues shaping the UK–Pakistan digital corridor."
              color="red"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
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
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base sm:text-lg leading-snug mb-2">
                      {video.title}
                    </h3>
                    <p className="text-[#3D4152] text-sm leading-relaxed">
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
      <section className="relative z-[1] py-16 lg:py-20" style={{ backgroundColor: "#E8E6E3" }}>
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader
              label="Stay informed"
              title="News &amp; Insights"
              body="Investment deals, policy developments, innovation spotlights, and bilateral progress — what's shaping the UK–Pakistan technology corridor."
              color="green"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-10">
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
           PARTNER / MEMBER LOGOS — slim marquee strip
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative z-[1] py-14" style={{ background: "linear-gradient(135deg, #15803d 0%, #22C55E 100%)" }}>
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <h2 className="text-center text-lg sm:text-xl font-bold uppercase tracking-[0.2em] text-white/80 mb-10">
            Leading Organisations
          </h2>
          <SponsorMarquee />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
           IMPACT NUMBERS — 4 stat cards on white bg
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative z-[1] py-16 lg:py-20" style={{ backgroundColor: "#EEECEA" }}>
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
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
           JOIN CTA — dark section with animated background
           Matches ukproptech's dark "BPF Futures" image section
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative z-[2] overflow-hidden bg-[#0B0F1A] text-white py-20 md:py-24">
        <Image
          src="/image/home/join_uptech_bg.jpg"
          alt=""
          fill
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="relative z-10 px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">
                Join UPTECH
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                UPTECH is a trusted network of over 120 members, shaping the future of UK–Pakistan technology.
              </h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                Membership opens access to bilateral investment introductions, exclusive summits, policy briefings, and the UK–Pakistan tech community.
              </p>
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-[#1C1F2E] transition-colors duration-300"
              >
                Become a Member
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
