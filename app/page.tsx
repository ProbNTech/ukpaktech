// UPTECH Council - Home page
"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PillButton } from "@/components/ui/PillButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { Hero } from "@/components/Hero";
import { LiteYouTube } from "@/components/LiteYouTube";
import { AITechIcon, ServicesIcon, SkillDevIcon, PartnershipIcon, GovernanceIcon, TradeDelegationsIcon, ProductsIcon, MentorshipIcon, MeetingSpaceIcon, StructureIcon } from "@/components/ui/premium-icons";
const WhatWeDoCards = dynamic(() => import("@/components/WhatWeDoCards"), {
  loading: () => <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" aria-busy="true">{Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-64 bg-[#f7f8fa] rounded-xl animate-pulse" />)}</div>,
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
const FeaturedPartnersCarousel = dynamic(() => import("@/components/FeaturedPartnersCarousel"), {
  loading: () => <div className="py-20 bg-white" aria-busy="true"><div className="px-6 sm:px-10 lg:px-16 xl:px-20"><div className="h-48 bg-[#f7f8fa] rounded-xl animate-pulse" /></div></div>,
});
import HomeEventsSection from "@/components/events/HomeEventsSection";

const homepageArticles = articles.slice(0, 15);

const sponsorCarouselLogos = sponsorLogos.map((logo, i) => ({
  name: logo.alt,
  id: i + 1,
  src: logo.src,
}));

/* ─── What We Do data ─── */
const whatWeDoData = [
  { id: 1, title: "AI & Tech Programs", content: "Driving AI innovation through training, certifications, and collaborative startup models across key sectors.", icon: AITechIcon, href: "/programs/ai-tech-programs", color: "#2563EB" },
  { id: 2, title: "Services", content: "Business networks, SME hub, digital marketing, overseas employment, and business support for your tech venture.", icon: ServicesIcon, href: "/services", color: "#22C55E" },
  { id: 3, title: "Skill Development", content: "Practical training pathways, professional certifications, and mentorship for the modern tech workforce.", icon: SkillDevIcon, href: "/programs/skill-development-center", color: "#EAB308" },
  { id: 4, title: "UK-Pakistan Tech Partnership", content: "Bilateral framework underpinning joint ventures, policy dialogue, and shared R&D investment.", icon: PartnershipIcon, href: "/ecosystem/uk-pakistan-technology-partnership", color: "#C41E3A" },
  { id: 5, title: "Leadership & Governance", content: "Transparent governance, ethical oversight, and accountability ensuring UPTECH operates to the highest standards.", icon: GovernanceIcon, href: "/about/management-team", color: "#6366F1" },
  { id: 6, title: "Trade Delegations", content: "Curated business missions, international trade expos, and pavilion programmes placing members on the world stage.", icon: TradeDelegationsIcon, href: "/ecosystem/trade-delegations-and-exhibitions", color: "#0EA5E9" },
];

export default function Home() {
  return (
    <div className="relative">
      {/* 1. HERO */}
      <Hero />

      {/* 2. ABOUT */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden" aria-labelledby="about-heading">
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #1C1F2E 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />
        <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <SectionLabel label="About the Council" title="A bilateral technology platform bridging the UK and Pakistan." color="#2563EB" />
                <div className="content-body">
                  <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed mb-5">
                    UPTECH bridges the United Kingdom and Pakistan through structured programmes of investment facilitation, policy dialogue, innovation partnership, and cross-border trade.
                  </p>
                  <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed mb-8">
                    From flagship summits to regulatory frameworks, from AI innovation hubs to seed investment programmes — our work creates the institutional infrastructure that bilateral tech collaboration requires.
                  </p>
                </div>
                <PillButton href="/about">About Us</PillButton>
              </div>
              <div className="relative">
                <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_25px_60px_-12px_rgba(37,99,235,0.15)]">
                  <Image src="/image/home/kikogifs.gif" alt="Animated overview of UK–Pakistan Tech Council activities and events" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-white/60">
                    <p className="font-heading font-extrabold text-[#2563EB] text-lg leading-none">120+</p>
                    <p className="text-[#5A5F72] text-xs mt-0.5">Member Organisations</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-28 h-28 rounded-xl bg-[#2563EB]/20 z-0" aria-hidden="true" />
                <div className="absolute -top-4 -right-4 w-36 h-36 rounded-full bg-[#22C55E]/20 z-0" aria-hidden="true" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. TECH MARKET OVERVIEW */}
      <section className="relative z-[1] py-20 lg:py-28 bg-[#eef1f5]" aria-labelledby="market-heading">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionLabel label="Market Intelligence" title="UK & European Tech Markets" color="#2563EB" />

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
                  UPTECH provides Pakistani IT companies with deep market intelligence across Europe&apos;s most dynamic technology economies. Our research covers sector-level data, regulatory landscapes, growth forecasts, and actionable entry strategies.
                </p>
                <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed">
                  From the UK&apos;s AI-driven economy to Germany&apos;s enterprise IT powerhouse, from France&apos;s deep-tech growth to Poland&apos;s rapidly expanding outsourcing market — each profile includes market valuations, projections, and opportunities for Pakistani firms.
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
                      <h3 className="font-heading font-bold text-white text-xl sm:text-2xl leading-snug mb-2">Explore the full market intelligence platform</h3>
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed">Access our interactive European map, sector breakdowns, Pakistan IT scope analysis, and country-level deep dives.</p>
                    </div>
                    <Link href="/ecosystem/tech-market-overview" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-[#0f1a3a] text-sm font-bold hover:bg-[#22C55E] hover:text-white transition-colors duration-300 shadow-lg whitespace-nowrap">
                      Explore All Markets <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. MEMBERSHIP */}
      <MembershipSection />

      {/* 5. WHAT WE DO */}
      <section className="relative z-[1] py-20 lg:py-28 bg-white" aria-labelledby="expertise-heading">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
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

      {/* 6. IMPACT STATS */}
      <section className="relative z-[1] py-20 lg:py-24 bg-[#0f1a3a] overflow-hidden" aria-labelledby="impact-heading">
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
        <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionLabel label="Our Impact" title="Impact Momentum" body="A modern technology council engineered to scale collaboration, talent, and investment across the UK–Pakistan corridor." color="#60a5fa" align="center" light />
            <ImpactStats />
          </AnimatedSection>
        </div>
      </section>

      {/* 7. WHAT DRIVES US */}
      <WhatDrivesUs />

      {/* 8. BOARD OF ADVISORS */}
      <BoardOfAdvisors />

      {/* 9. NEWS & INSIGHTS */}
      <section className="relative z-[1] py-20 lg:py-28 bg-white" aria-labelledby="news-heading">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 flex flex-col justify-center">
                <SectionLabel label="Stay Informed" title="News & Insights" color="#22C55E" />
                <p className="text-[#5A5F72] text-sm sm:text-base leading-relaxed">
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

      {/* 10. MORE FROM UPTECH */}
      <section className="relative z-[1] py-20 lg:py-28 bg-[#eef1f5]" aria-labelledby="more-heading">
        <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection animation="blur-in">
            <SectionLabel label="Discover More" title="More from UPTECH" body="Explore our platforms, meeting facilities, organisational structure, and flagship initiatives." color="#22C55E" align="center" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { href: "/products", icon: ProductsIcon, color: "#2563EB", title: "Our Products", desc: "People AI Platform, TechMart Global, and Trusted Partner Certification — connecting talent and enabling trade." },
                { href: "/services/mentorship", icon: MentorshipIcon, color: "#22C55E", title: "Mentorship", desc: "Connect with experienced mentors for guidance, career development, and business growth across both nations." },
                { href: "/meeting-space", icon: MeetingSpaceIcon, color: "#EAB308", title: "London Meeting Space", desc: "Professional meeting facilities in central London for members and partners." },
                { href: "/about/management-team", icon: StructureIcon, color: "#6366F1", title: "Structure & Procedure", desc: "Our governance framework, organisational roles, and operating procedures." },
              ].map((card, index) => {
                const CardIcon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                  <Link
                    href={card.href}
                    className="group relative block bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 p-6 lg:p-7 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                    style={{ borderTop: `2px solid ${card.color}`, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 12px 32px -8px ${card.color}33`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'; }}
                  >
                    {/* Gradient hover overlay */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(135deg, ${card.color}08 0%, ${card.color}03 100%)` }}
                    />
                    <div className="relative">
                      <div className="mb-4 flex items-center">
                        <div className="rounded-xl p-2.5 group-hover:scale-105 transition-transform duration-300" style={{ backgroundColor: `${card.color}0F` }}>
                          <CardIcon className="w-[100px] h-[100px]" />
                        </div>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <h3
                          className="font-heading font-bold text-[#1C1F2E] text-[1.15rem] mb-2 transition-colors duration-300 group-hover:text-[var(--card-color)]"
                          style={{ "--card-color": card.color } as React.CSSProperties}
                        >
                          {card.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 shrink-0 mt-1 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: card.color }} />
                      </div>
                      <p className="text-[#5A5F72] text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  </Link>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 11. EVENT HIGHLIGHTS */}
      <section className="relative z-[1] py-20 lg:py-24 bg-[#0f1a3a] overflow-hidden" aria-labelledby="highlights-heading">
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
        <div className="relative px-6 sm:px-10 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionLabel label="Watch & Learn" title="Recent Event Highlights" color="#60a5fa" align="center" light />
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
                  <div className="rounded-xl border border-white/10 overflow-hidden shadow-lg shadow-black/20">
                    <LiteYouTube id={video.id} title={video.title} />
                  </div>
                  <h3 className="font-semibold text-sm mt-4 text-white/85 leading-snug">{video.title}</h3>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 12. EVENTS */}
      <HomeEventsSection />

      {/* 13. PARTNERS & NETWORK (merged) */}
      <FeaturedPartnersCarousel />

      <section className="relative z-[1] py-14 lg:py-20 bg-[#0f1a3a] overflow-hidden" aria-labelledby="network-heading">
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
        <div className="relative text-center px-6 sm:px-10 lg:px-16 xl:px-20">
          <SectionLabel label="Our Network" title="Leading Organisations" color="#60a5fa" align="center" light />
          <LogoCarousel columnCount={5} logos={sponsorCarouselLogos} />
        </div>
      </section>

      {/* 14. GLOBAL CTA */}
      <GlobalCTA
        label="Join UPTECH"
        title="Join 120+ organisations shaping the future of UK–Pakistan technology."
        subtitle="Membership opens access to bilateral investment introductions, exclusive summits, policy briefings, and the UK–Pakistan tech community."
        primaryButtonText="Start Your Membership"
        primaryButtonLink="/membership/apply"
      />

      <BackToTop />
    </div>
  );
}
