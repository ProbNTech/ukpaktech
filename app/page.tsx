"use client";

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
function SectionHeader({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mb-10 lg:mb-12">
      <p className="text-sm font-semibold text-[#2563EB] mb-2 tracking-wide">{label}</p>
      <div className="flex items-center gap-5 mb-5">
        <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-[2.6rem] leading-none shrink-0 whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-px bg-[#1C1F2E]/25 min-w-0" />
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

export default function Home() {
  return (
    <div className="bg-[#EEECEA]">
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
      <section className="bg-[#EEECEA] py-16 lg:py-20">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left — text content */}
              <div>
                <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-3">About the Council</p>
                <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-[2.2rem] leading-snug mb-6">
                  The UK–Pakistan Tech Council is a bilateral technology platform established in 2026.
                </h2>
                <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed mb-5">
                  UPTECH bridges the United Kingdom and Pakistan through structured programmes of investment facilitation, policy dialogue, innovation partnership, and cross-border trade. The Council brings together technology companies, venture capital, government bodies, academic institutions, and enterprise leaders to drive long-term bilateral growth.
                </p>
                <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed mb-8">
                  From flagship summits to regulatory frameworks, from AI innovation hubs to seed investment programmes — our work creates the institutional infrastructure that bilateral tech collaboration requires.
                </p>
                <PillButton href="/about">About Us</PillButton>
              </div>

              {/* Right — image */}
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src="/image/about page/About_Council.webp"
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
      <section className="bg-[#E8E6E3] py-14 lg:py-18">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            {/* Section header with full-width rule */}
            <div className="flex items-center gap-5 mb-3">
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl leading-none shrink-0">
                Who can join?
              </h2>
              <div className="flex-1 h-px bg-[#1C1F2E]/25" />
            </div>
            <p className="text-[#3D4152] text-base mb-8 max-w-2xl">
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
           ATTEND AN EVENT — 4 column event cards
           Exact ukproptech pattern: label → h2+rule → 4 image cards
           → "Find out more" pill button centered below
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#EEECEA] py-16 lg:py-20">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader
              label="Attend an event"
              title="Upcoming events"
              body="Our upcoming events span bilateral summits, investor dialogues, webinars, and trade delegations. All events are open to UPTECH members and selected guests."
            />

            {/* 3-column event card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-10">
              {homepageEvents.map((event) => (
                <Link key={event.id} href="/events" className="group flex flex-col bg-white border border-[#D8D5CF] rounded overflow-hidden hover:-translate-y-1 transition-all duration-300">
                  {/* Image */}
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
                        <span className="text-white/25 text-[10px] font-semibold uppercase tracking-widest">
                          {event.tag}
                        </span>
                      </div>
                    )}
                    {/* Tag badge */}
                    <span className="absolute top-3 left-3 px-3 py-1 bg-[#1C1F2E]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      {event.tag}
                    </span>
                  </div>
                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-5">
                    {/* Date & location */}
                    <div className="flex items-center gap-2 text-xs text-[#7A7E8F] mb-3">
                      <time className="font-medium">{event.date}</time>
                      {event.location && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-[#7A7E8F]" />
                          <span>{event.location}</span>
                        </>
                      )}
                    </div>
                    {/* Title */}
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base leading-snug mb-3 line-clamp-2 group-hover:text-[#2563EB] transition-colors duration-200">
                      {event.title}
                    </h3>
                    {/* Description */}
                    <p className="text-[#3D4152] text-sm leading-relaxed line-clamp-3 mb-4">
                      {event.shortDescription}
                    </p>
                    {/* Learn more link */}
                    <div className="mt-auto pt-3 border-t border-[#D8D5CF]">
                      <span className="text-sm font-semibold text-[#1C1F2E] group-hover:text-[#2563EB] transition-colors duration-200 inline-flex items-center gap-1">
                        Learn more <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Centered pill button */}
            <div className="flex justify-center">
              <PillButton href="/events">Find out more</PillButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
           RESOURCES / NEWS & INSIGHTS — 3 column editorial cards
           Exact ukproptech "Resources" pattern: date → title → tags → rule
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#E8E6E3] py-16 lg:py-20">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader
              label="Stay informed"
              title="News &amp; Insights"
              body="Investment deals, policy developments, innovation spotlights, and bilateral progress — what's shaping the UK–Pakistan technology corridor."
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
           PARTNER / MEMBER LOGOS — slim marquee strip
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#EEECEA] border-t border-[#1C1F2E]/10 py-12">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#7A7E8F] mb-8">
            Trusted by Leading Organisations
          </p>
          <SponsorMarquee />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
           IMPACT NUMBERS — 4 stat cards on white bg
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#EEECEA] py-16 lg:py-20">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader
              label="Our impact"
              title="Impact Momentum"
              body="A modern technology council engineered to scale collaboration, talent, and investment across the UK–Pakistan corridor."
            />
            <ImpactStats />
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
           JOIN CTA — dark section with animated background
           Matches ukproptech's dark "BPF Futures" image section
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#1C1F2E] text-white py-20 md:py-24">
        <JoinUPTECHBackground />
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
