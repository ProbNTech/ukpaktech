// UPTECH Forum - Home page
"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PillButton } from "@/components/ui/PillButton";
import { Hero } from "@/components/Hero";
import { LiteYouTube } from "@/components/LiteYouTube";
import { ProductsIcon, MentorshipIcon, MeetingSpaceIcon, StructureIcon } from "@/components/ui/premium-icons";
const WhatWeDoCards = dynamic(() => import("@/components/WhatWeDoCards"), {
  loading: () => <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6" aria-busy="true">{Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-64 bg-[#f7f8fa] rounded-xl animate-pulse" />)}</div>,
});
import { articles } from "@/data/articles";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { sponsorLogos } from "@/data/sponsor-logos";
const ImpactStats = dynamic(() =>
  import("@/components/ImpactStats").then((m) => ({ default: m.ImpactStats })),
  { loading: () => <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" aria-busy="true">{Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-[360px] bg-white/[0.06] rounded-xl animate-pulse" />)}</div> }
);
import { GlobalCTA } from "@/components/GlobalCTA";
import BoardOfAdvisors from "@/components/BoardOfAdvisors";
import { countryData } from "@/lib/data/market-data";
import { ContinuousCarousel } from "@/components/tech-market/CountryCarousel";
import StatsCounter from "@/components/tech-market/StatsCounter";
import MembershipSection, { WhatDrivesUs } from "@/components/tech-market/MembershipSection";
import NewsCarousel from "@/components/NewsCarousel";
const PakistanTopCompaniesShowcase = dynamic(() => import("@/components/PakistanTopCompaniesShowcase"), {
  loading: () => <div className="py-20 bg-white" aria-busy="true"><div className="px-6 sm:px-10 lg:px-16 xl:px-20"><div className="h-48 bg-[#f7f8fa] rounded-xl animate-pulse" /></div></div>,
});
const PartnerSolutionsSection = dynamic(() => import("@/components/PartnerSolutionsSection"), {
  loading: () => <div className="py-20 bg-gradient-to-b from-[#f0f7ff] via-[#e8f1fb] to-[#dfeaf7]" aria-busy="true"><div className="px-6 sm:px-10 lg:px-16 xl:px-20"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{Array.from({ length: 3 }).map((_, i) => <div key={i} className="h-96 bg-white rounded-2xl animate-pulse" />)}</div></div></div>,
});
import HomeEventsSection from "@/components/events/HomeEventsSection";
import FeaturedEventShowcase from "@/components/events/FeaturedEventShowcase";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";

const homepageArticles = articles.slice(0, 15);

const sponsorCarouselLogos = sponsorLogos.map((logo, i) => ({
  name: logo.alt,
  id: i + 1,
  src: logo.src,
}));

/* ─── Our Services — bilateral two-row grid ─── */
const ukServicesData = [
  { id: 1, title: "Research & Innovation Delivery", content: "Engage Pakistan-based research and engineering teams for market research, R&D, data analytics, and regulatory work — typically at a fraction of UK cost.", image: "/image/icons/research.png", href: "/services/research-innovation", color: "#2563EB" },
  { id: 2, title: "Remote Hiring & Technical Talent", content: "Hire Pakistani software engineers, AI specialists, and operations talent on contract or permanent terms — with compliance and payroll handled.", image: "/image/icons/hiring.png", href: "/services/overseas-employment", color: "#2563EB" },
  { id: 3, title: "Pakistan Market Entry", content: "Enter Pakistan's 251M-person market through structured trade missions, exhibitions, partner introductions, and on-the-ground support.", image: "/image/icons/trade-delegations.png", href: "/ecosystem/trade-delegations-and-exhibitions", color: "#2563EB" },
  { id: 4, title: "Verified Partner Sourcing", content: "Source vetted Pakistani technology partners through Trusted Partner Certification and the UPTECH member directory — reviewed against published criteria.", image: "/image/icons/leadership.png", href: "/initiatives/trusted-partner-certification", color: "#2563EB" },
];

const pakistanServicesData = [
  { id: 5, title: "Marketing Presence", content: "Promote your products and services into UK, European, Middle East and African markets through UPTECH's digital marketing hub.", image: "/image/icons/seo.png", href: "/services/digital-marketing", color: "#22C55E" },
  { id: 6, title: "Product Sales", content: "Reach UK buyers through TechMart Global and Trusted Partner Certification — verified profiles, B2B matchmaking, secure procurement.", image: "/image/icons/sale.png", href: "/products", color: "#22C55E" },
  { id: 7, title: "Remote Hiring", content: "Place engineers, contractors, and full teams into UK and European companies under compliant overseas employment frameworks.", image: "/image/icons/hired.png", href: "/services/overseas-employment", color: "#22C55E" },
  { id: 8, title: "Startup Funding", content: "Access UK and European angel and VC investors through pitch events, investor matchmaking, and the UPTECH funding network.", image: "/image/icons/startup.png", href: "/ecosystem/startup-funding", color: "#22C55E" },
];

export default function Home() {
  return (
    <div className="relative">
      <ScrollProgressBar />
      {/* 1. HERO */}
      <Hero />

      {/* 2. ABOUT */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(900px circle at 10% -10%, rgba(37,99,235,0.08), transparent 50%), radial-gradient(800px circle at 95% 110%, rgba(34,197,94,0.07), transparent 50%), #FFFFFF",
        }}
        aria-labelledby="about-heading"
      >
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #1C1F2E 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />
        <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <SectionLabel label="About the Forum" title="A bilateral technology platform, headquartered in London." color="#2563EB" />
                <div className="content-body">
                  <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed mb-5">
                    UPTECH is the UK–Pakistan Tech Forum. Our work is to make hiring, sourcing, market entry, and investment between UK and Pakistani technology companies workable in practice — through services, a member directory, and a published governance framework.
                  </p>
                  <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed mb-8">
                    UPTECH acts as an introducer, intermediary, or contracting party depending on the engagement. The form differs by deal; the published standards do not.
                  </p>
                </div>
                <PillButton href="/about">About Us</PillButton>
              </div>
              <div className="relative">
                <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_25px_60px_-12px_rgba(37,99,235,0.15)]">
                  <Image src="/image/home/kikogifs.gif" alt="Animated overview of UK–Pakistan Tech Forum activities and events" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-white/60">
                    <p className="font-heading font-extrabold text-[#2563EB] text-lg leading-none">1996</p>
                    <p className="text-[#5A5F72] text-xs mt-0.5">UK Arbitration Act</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-28 h-28 rounded-xl bg-[#2563EB]/20 z-0" aria-hidden="true" />
                <div className="absolute -top-4 -right-4 w-36 h-36 rounded-full bg-[#22C55E]/20 z-0" aria-hidden="true" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. MEMBERSHIP */}
      <MembershipSection />

      {/* 4. OUR SERVICES — bilateral two-row grid */}
      <section
        id="services"
        className="relative z-[1] py-20 lg:py-28 scroll-mt-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(1100px circle at 0% 0%, rgba(34,197,94,0.07), transparent 55%), radial-gradient(1000px circle at 100% 100%, rgba(37,99,235,0.08), transparent 55%), radial-gradient(700px circle at 50% 50%, rgba(255,255,255,0.6), transparent 70%), #F8FAFC",
        }}
        aria-labelledby="services-heading"
      >
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionLabel
              label="Our Services"
              title="Services on both sides of the corridor"
              body="Concrete engagements for UK companies engaging Pakistan's technology base, and for Pakistani companies reaching UK and European markets."
              color="#2563EB"
              align="center"
            />

            {/* Row 1 — For Pakistani companies */}
            <div id="for-pakistani-companies" className="scroll-mt-24">
              <WhatWeDoCards
                items={pakistanServicesData}
                eyebrow="Services"
                audience="Pakistani companies"
                context="Reaching UK and European markets — marketing, sales, hiring, and growth capital."
                accentColor="#22C55E"
              />
            </div>

            {/* Row 2 — For UK companies */}
            <div id="for-uk-companies" className="mt-14 lg:mt-16 scroll-mt-24">
              <WhatWeDoCards
                items={ukServicesData}
                eyebrow="Services"
                audience="UK companies"
                context="Engaging Pakistan's technology base — research, hiring, market entry, and verified sourcing."
                accentColor="#2563EB"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. MORE FROM UPTECH */}
      <section
        className="relative z-[1] py-20 lg:py-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(1100px circle at 0% 0%, rgba(37,99,235,0.22), transparent 50%), radial-gradient(900px circle at 100% 100%, rgba(34,197,94,0.15), transparent 50%), radial-gradient(700px circle at 50% 50%, rgba(99,102,241,0.08), transparent 70%), #0f1a3a",
        }}
        aria-labelledby="more-heading"
      >
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
        <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionLabel label="Discover More" title="More from UPTECH" body="Platforms, meeting facilities, organisational structure, and member resources." color="#86efac" align="center" light />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { href: "/products", icon: ProductsIcon, color: "#2563EB", title: "Our Products", desc: "People AI, TechMart Global, and Trusted Partner Certification — the products that operate beneath the services." },
                { href: "/services/mentorship", icon: MentorshipIcon, color: "#22C55E", title: "Mentorship", desc: "One-to-one guidance from operators and investors active across the UK–Pakistan corridor." },
                { href: "/meeting-space", icon: MeetingSpaceIcon, color: "#EAB308", title: "London Meeting Space", desc: "Boardrooms and meeting facilities in central London, available to members." },
                { href: "/arbitration/framework", icon: StructureIcon, color: "#6366F1", title: "Governance & Arbitration", desc: "The published rulebook — Code of Conduct and dispute resolution under the UK Arbitration Act 1996." },
              ].map((card, index) => {
                const CardIcon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    className="h-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                  <Link
                    href={card.href}
                    className="group relative flex h-full flex-col rounded-2xl p-6 lg:p-7 overflow-hidden hover:-translate-y-2 transition-[transform,box-shadow,background] duration-300 ease-out [transform:translateZ(0)]"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 20px 50px -10px ${card.color}55, 0 0 0 1px ${card.color}30 inset, inset 0 1px 0 rgba(255,255,255,0.1)`;
                      e.currentTarget.style.background = `linear-gradient(180deg, ${card.color}1A 0%, rgba(255,255,255,0.03) 100%)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)";
                      e.currentTarget.style.background = "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)";
                    }}
                  >
                    {/* Top accent gradient bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      aria-hidden="true"
                      style={{ background: `linear-gradient(90deg, ${card.color}, ${card.color}80, transparent)` }}
                    />
                    {/* Radial accent glow on hover */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      aria-hidden="true"
                      style={{ background: `radial-gradient(400px circle at top left, ${card.color}25 0%, transparent 55%)` }}
                    />
                    <div className="relative flex flex-1 flex-col">
                      <div className="mb-4 flex items-center">
                        <div
                          className="rounded-xl p-2.5 group-hover:scale-105 transition-all duration-300"
                          style={{
                            backgroundColor: `${card.color}22`,
                            boxShadow: `0 0 0 1px ${card.color}33 inset`,
                          }}
                        >
                          <CardIcon className="w-[100px] h-[100px]" />
                        </div>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <h3
                          className="font-heading font-bold text-white text-[1.15rem] mb-2 transition-colors duration-300 group-hover:text-[var(--card-color)]"
                          style={{ "--card-color": card.color } as React.CSSProperties}
                        >
                          {card.title}
                        </h3>
                        <ArrowUpRight
                          className="w-5 h-5 shrink-0 mt-1 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          style={{ color: card.color }}
                        />
                      </div>
                      <p className="text-gray-300/90 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  </Link>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. PAKISTAN'S TOP AI & IT COMPANIES */}
      <PakistanTopCompaniesShowcase />

      {/* 7. PARTNER SOLUTIONS */}
      <PartnerSolutionsSection />

      {/* 8. WHAT DRIVES US */}
      <WhatDrivesUs />

      {/* 9. IMPACT STATS — Corridor Signals */}
      <section
        className="relative z-[1] py-20 lg:py-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(1000px circle at 100% 0%, rgba(96,165,250,0.20), transparent 50%), radial-gradient(900px circle at 0% 100%, rgba(34,197,94,0.13), transparent 50%), #0f1a3a",
        }}
        aria-labelledby="impact-heading"
      >
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
        <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionLabel label="Corridor Signals" title="Where the corridor is, in numbers" body="Trade, talent demand, and market access figures that frame UPTECH's work — sourced from the State Bank of Pakistan, the UK Department for Business and Trade, and the Migration Advisory Committee." color="#60a5fa" align="center" light />
            <ImpactStats />
          </AnimatedSection>
        </div>
      </section>

      {/* 10. TECH MARKET OVERVIEW — Market Intelligence */}
      <section
        className="relative z-[1] py-20 lg:py-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(900px circle at 5% 0%, rgba(37,99,235,0.08), transparent 50%), radial-gradient(800px circle at 95% 100%, rgba(196,30,58,0.06), transparent 50%), radial-gradient(700px circle at 50% 50%, rgba(34,197,94,0.04), transparent 60%), #F8FAFC",
        }}
        aria-labelledby="market-heading"
      >
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionLabel label="Market Intelligence" title="UK, European & Pakistani tech markets" color="#2563EB" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: 10, label: "Countries Covered", color: "#2563EB", suffix: "+" },
                    { value: 500, label: "Combined IT Market", color: "#22C55E", prefix: "$", suffix: "B+" },
                    { value: 40, label: "Sectors Analysed", color: "#C41E3A", suffix: "+" },
                    { value: 2030, label: "Forecast Horizon", color: "#d97706" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="group relative bg-white rounded-xl border border-[#E5E7EB] p-5 hover:shadow-md transition-all duration-300 overflow-hidden"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="absolute top-0 left-0 w-full h-[3px]" aria-hidden="true" style={{ background: `linear-gradient(to right, ${stat.color}, transparent)` }} />
                      <p className="font-heading font-extrabold text-2xl sm:text-3xl leading-tight mb-1" style={{ color: stat.color }}>
                        {stat.prefix}<StatsCounter end={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="text-[#5A5F72] text-xs sm:text-sm">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-3">
                <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed mb-4">
                  UPTECH publishes sector intelligence covering the UK, key European markets, and Pakistan. The same briefs are read by Pakistani exporters planning UK entry and by UK buyers planning Pakistan-side procurement and partnerships.
                </p>
                <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed">
                  Country profiles cover the UK, Germany, France, the Netherlands, and Poland on the European side, alongside Pakistan-side sector data — market valuations, regulatory landscapes, and entry routes for members on either side of the corridor.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <ContinuousCarousel countryData={countryData} />
            </div>

            <AnimatedSection animation="fade-up">
              <div className="mt-10 relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0f1a3a] to-[#2563EB]">
                <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)" }} />
                <div className="relative px-8 sm:px-10 py-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="flex-1 max-w-2xl">
                      <h3 className="font-heading font-bold text-white text-xl sm:text-2xl leading-snug mb-2">Explore the full corridor intelligence platform</h3>
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed">Interactive country map, sector breakdowns, and entry routes for the UK, European markets, and Pakistan.</p>
                    </div>
                    <Link href="/ecosystem/tech-market-overview" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-[#0f1a3a] text-sm font-bold hover:bg-[#22C55E] hover:text-white transition-colors duration-300 shadow-lg whitespace-nowrap">
                      Explore markets <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* 11. BOARD OF ADVISORS */}
      <BoardOfAdvisors />

      {/* 12. NEWS & INSIGHTS */}
      <section
        className="relative z-[1] py-20 lg:py-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(1000px circle at 0% 0%, rgba(134,239,172,0.13), transparent 50%), radial-gradient(900px circle at 100% 100%, rgba(37,99,235,0.18), transparent 50%), #0f1a3a",
        }}
        aria-labelledby="news-heading"
      >
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
        <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 flex flex-col justify-center">
                <SectionLabel label="Stay Informed" title="News & Insights" color="#86efac" light />
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Policy developments, deal announcements, and ecosystem updates relevant to the UK–Pakistan technology corridor — useful for members on either side.
                </p>
              </div>
              <div className="lg:col-span-8 w-full min-w-0">
                <NewsCarousel
                  articles={homepageArticles}
                  light
                  cta={<PillButton href="/events" variant="white">View all news & events</PillButton>}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 13. EVENT HIGHLIGHTS */}
      <section
        className="relative z-[1] py-20 lg:py-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(800px circle at 90% 0%, rgba(37,99,235,0.07), transparent 50%), radial-gradient(700px circle at 10% 100%, rgba(196,30,58,0.05), transparent 50%), #FFFFFF",
        }}
        aria-labelledby="highlights-heading"
      >
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #1C1F2E 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />
        <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionLabel label="Watch & Learn" title="Recent Event Highlights" body="Recordings from UPTECH-hosted and UPTECH-participating events on both sides of the corridor." color="#2563EB" align="center" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { id: "NnKZrypT_tE", title: "Indus AI Week — Digital Future" },
                { id: "CyE9Mde6d_E", title: "Pakistan Business Summit — Davos 2026" },
                { id: "K49VP4KJ2vk", title: "AI & Digital Collaboration — London" },
                { id: "pXI-qz33PoA", title: "UK–Pakistan Business Summit 2025" },
              ].map((video, index) => (
                <motion.div
                  key={video.id}
                  className="group"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="rounded-xl border border-[#E5E7EB] overflow-hidden shadow-lg shadow-black/5">
                    <LiteYouTube id={video.id} title={video.title} />
                  </div>
                  <h3 className="font-semibold text-sm mt-4 text-[#1C1F2E] leading-snug">{video.title}</h3>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 13.5 FEATURED EVENT SHOWCASE — scrolling gallery */}
      <FeaturedEventShowcase />

      {/* 14. EVENTS */}
      <HomeEventsSection />

      {/* 15. PAKISTAN ECOSYSTEM NETWORK */}
      <section
        className="relative z-[1] py-14 lg:py-20 overflow-hidden"
        style={{
          background:
            "radial-gradient(1000px circle at 50% 0%, rgba(34,197,94,0.16), transparent 55%), radial-gradient(700px circle at 0% 100%, rgba(96,165,250,0.12), transparent 50%), radial-gradient(700px circle at 100% 100%, rgba(196,30,58,0.10), transparent 50%), #0f1a3a",
        }}
        aria-labelledby="network-heading"
      >
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
        <div className="relative text-center px-6 sm:px-10 lg:px-16 xl:px-20">
          <SectionLabel label="Pakistan ecosystem" title="Pakistan's institutional organisations" body="Public and industry bodies that shape Pakistan's technology, trade, and regulatory environment." color="#60a5fa" align="center" light />
          <LogoCarousel columnCount={5} logos={sponsorCarouselLogos} />
        </div>
      </section>

      {/* 16. GLOBAL CTA */}
      <GlobalCTA
        label="Join UPTECH"
        title="Equal access for organisations on both sides of the corridor."
        subtitle="Whether you are a UK company looking into Pakistan or a Pakistani company looking into the UK, membership opens services, the directory, the Trusted Partner programme, and the governance framework."
        primaryButtonText="Apply for membership"
        primaryButtonLink="/membership#apply"
        secondaryButtonText="Talk to the team"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
