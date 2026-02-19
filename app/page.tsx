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

/* Top 3 articles for the homepage news grid */
const homepageArticles = articles.slice(0, 3);

/* Top 4 events — matching ukproptech 4-column layout */
const homepageEvents = featuredEvents.slice(0, 4);

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
            {/* Large editorial intro text — spans most of the width */}
            <div className="max-w-4xl mb-8">
              <p className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl leading-snug mb-6">
                The UK–Pakistan Tech Council is a bilateral technology platform established in 2024.
              </p>
              <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed mb-6">
                UPTECH bridges the United Kingdom and Pakistan through structured programmes of investment facilitation, policy dialogue, innovation partnership, and cross-border trade. The Council brings together technology companies, venture capital, government bodies, academic institutions, and enterprise leaders to drive long-term bilateral growth.
              </p>
              <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed mb-8">
                From flagship summits to regulatory frameworks, from AI innovation hubs to seed investment programmes — our work creates the institutional infrastructure that bilateral tech collaboration requires.
              </p>
              <PillButton href="/about">About Us</PillButton>
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
                  // Tech startup team in a modern open-plan office
                  title: "Technology Companies",
                  image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=85&fit=crop&auto=format",
                },
                {
                  // Professional business handshake / investor meeting
                  title: "Investors & VCs",
                  image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=85&fit=crop&auto=format",
                },
                {
                  // Grand university library — academic research setting
                  title: "Academic & Research",
                  image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=85&fit=crop&auto=format",
                },
                {
                  // Confident professional woman — individual industry leader
                  title: "Individual Professionals",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85&fit=crop&auto=format",
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

            {/* 4-column event grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-10">
              {homepageEvents.map((event) => (
                <Link key={event.id} href="/events" className="group flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#D8D5CF] mb-4">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  {/* Title */}
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-sm sm:text-base leading-snug mb-4 line-clamp-3 group-hover:text-[#2563EB] transition-colors duration-200">
                    {event.title}
                  </h3>
                  {/* Thin dark underline */}
                  <div className="h-px w-full bg-[#1C1F2E]/20 group-hover:bg-[#2563EB]/50 transition-colors duration-300 mt-auto" />
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
