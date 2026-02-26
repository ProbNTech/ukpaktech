"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { motion, useReducedMotion } from "framer-motion";
import {
  Rocket,
  Building2,
  ShoppingCart,
  TrendingUp,
  Globe2,
  Handshake,
  Shield,
  Search,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

/* ── Stats bar data ──────────────────────────────────────────────── */
const stats = [
  { value: "500+", label: "Companies" },
  { value: "12", label: "Sectors" },
  { value: "3", label: "Continents" },
  { value: "Verified", label: "Network" },
];

/* ── Audience data ───────────────────────────────────────────────── */
const audiences = [
  {
    title: "Tech Startups",
    description: "Early-stage technology companies seeking market access, partnerships, and growth opportunities in international markets.",
    icon: Rocket,
    color: "#2563EB",
  },
  {
    title: "Scale-ups and SMEs",
    description: "Growing technology businesses ready to expand their reach and establish strategic relationships with global buyers and partners.",
    icon: Building2,
    color: "#22C55E",
  },
  {
    title: "Enterprises and Buyers",
    description: "Organisations looking to discover, evaluate, and engage with qualified technology vendors and service providers.",
    icon: ShoppingCart,
    color: "#C41E3A",
  },
  {
    title: "Investors and Partners",
    description: "Investment firms, strategic partners, and institutions interested in connecting with high-potential technology companies.",
    icon: TrendingUp,
    color: "#2563EB",
  },
];

/* ── Feature data ────────────────────────────────────────────────── */
const features = [
  {
    title: "Cross-border B2B Matchmaking",
    tag: "Intelligent Matching",
    description: "Curated introductions connect Pakistani tech companies with relevant UK and international buyers based on capabilities, needs, and strategic fit.",
    icon: Handshake,
    color: "#2563EB",
  },
  {
    title: "Market Access and Discovery",
    tag: "Market Discovery",
    description: "Comprehensive company profiles, service catalogs, and capability showcases enable buyers to discover and evaluate technology solutions efficiently.",
    icon: Search,
    color: "#22C55E",
  },
  {
    title: "Strategic Partnerships",
    tag: "Partnerships",
    description: "Facilitation of joint ventures, technology licensing, co-development agreements, and long-term strategic alliances between companies.",
    icon: Globe2,
    color: "#C41E3A",
  },
  {
    title: "Trade, Procurement, and Outsourcing",
    tag: "Global Trade",
    description: "Direct access to procurement opportunities, outsourcing projects, and trade facilitation services that streamline cross-border transactions.",
    icon: ArrowUpRight,
    color: "#2563EB",
  },
];

/* ── How It Works data ───────────────────────────────────────────── */
const howItWorks = [
  {
    number: "01",
    title: "Discover",
    description: "Browse company profiles, service catalogues, and capability showcases to identify potential partners, vendors, or buyers.",
    outcome: "Identified opportunities",
    icon: Search,
    color: "#2563EB",
  },
  {
    number: "02",
    title: "Connect",
    description: "Initiate contact through the platform\u2019s communication tools or request introductions to relevant participants.",
    outcome: "Verified introductions",
    icon: Handshake,
    color: "#22C55E",
  },
  {
    number: "03",
    title: "Validate",
    description: "Engage in due diligence, capability assessments, and preliminary discussions to ensure mutual fit before proceeding.",
    outcome: "Confirmed alignment",
    icon: Shield,
    color: "#C41E3A",
  },
  {
    number: "04",
    title: "Scale",
    description: "Execute agreements, launch partnerships, and leverage platform resources to scale relationships and achieve long-term objectives.",
    outcome: "Partnership launched",
    icon: TrendingUp,
    color: "#2563EB",
  },
];

/* ── UK Pathway data ─────────────────────────────────────────────── */
const ukPathway = [
  "UK market entry strategy and guidance",
  "Compliance and regulatory navigation support",
  "Introductions to UK-based buyers and partners",
  "Access to UK industry associations and networks",
  "Credibility building with UK institutions",
];

/* ── Alignment data ──────────────────────────────────────────────── */
const alignment = [
  {
    label: "Transparency",
    description: "Clear and fair processes with full visibility.",
    icon: Search,
    color: "#2563EB",
  },
  {
    label: "Verification",
    description: "All participants are verified for quality assurance.",
    icon: Shield,
    color: "#22C55E",
  },
  {
    label: "Fair Process",
    description: "Merit-based matching and dispute resolution.",
    icon: Handshake,
    color: "#C41E3A",
  },
];

/* ── Stat color map ──────────────────────────────────────────────── */
const statColors = ["#2563EB", "#22C55E", "#C41E3A", "#2563EB"];

export default function TechMartGlobalClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#EEECEA]">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/image/london-images/techmart-exhibition.jpg"
          alt="TechMart Global Exhibition"
          fill
          className="object-cover"
          priority
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A]/80 via-[#0B0F1A]/70 to-[#0B0F1A]" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Accent glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#2563EB]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#22C55E]/8 blur-[100px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Label badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-sm font-semibold text-white/60 uppercase tracking-widest">
                Official UPTECH Initiative
              </span>
            </div>

            {/* Gradient title */}
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] mb-6">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #2563EB 50%, #22C55E 100%)",
                }}
              >
                TechMart Global
              </span>
            </h1>

            {/* Subtitle in glass card */}
            <div className="max-w-3xl">
              <div className="backdrop-blur-md bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 mb-8">
                <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                  A global B2B technology marketplace and collaboration platform connecting Pakistani tech companies with UK and international buyers, partners, investors, and institutions.
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Button href="/membership/apply" variant="primary" size="lg" showArrow>
                Get Started
              </Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0F1A] to-transparent" />
      </section>

      {/* ── Stats Bar ──────────────────────────────────────────────── */}
      <section className="relative bg-[#1C1F2E]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative backdrop-blur-md bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 text-center overflow-hidden group"
              >
                {/* Subtle glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at center, ${statColors[i]}10 0%, transparent 70%)`,
                  }}
                />
                <div className="relative">
                  <div
                    className="font-heading font-extrabold text-3xl sm:text-4xl mb-1"
                    style={{ color: statColors[i] }}
                  >
                    {stat.value}
                  </div>
                  <p className="text-white/40 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What is TechMart Global ────────────────────────────────── */}
      <section className="relative bg-[#EEECEA]">
        <div className="relative max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <AnimatedSection>
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Text content - 3 cols */}
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="h-px w-8 bg-[#2563EB]" />
                  <span className="text-sm font-semibold text-[#2563EB] uppercase tracking-widest">
                    About the Platform
                  </span>
                </div>
                <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
                  What is TechMart Global?
                </h2>
                <p className="text-[#3D4152] text-lg leading-relaxed mb-5">
                  TechMart Global is a comprehensive B2B technology marketplace powered by the UK-Pakistan Tech Council, enabling Pakistani technology companies to showcase their capabilities to a global audience.
                </p>
                <p className="text-[#5A5F72] text-lg leading-relaxed mb-5">
                  Through structured matchmaking, transparent processes, and strategic support, TechMart Global facilitates cross-border partnerships, procurement opportunities, and long-term business relationships that drive innovation and economic growth.
                </p>
                <p className="text-[#5A5F72] text-lg leading-relaxed">
                  The platform serves as a trusted intermediary, ensuring that every connection made is verified, purposeful, and built on a foundation of accountability.
                </p>
              </div>

              {/* Glass sidebar card - 2 cols */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="lg:col-span-2 relative"
              >
                <div className="relative bg-white border border-[#D8D5CF] rounded-2xl overflow-hidden shadow-sm">
                  {/* Top gradient accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: "linear-gradient(to right, #2563EB, #22C55E)" }}
                  />

                  <div className="relative p-8">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-5">
                      Platform Snapshot
                    </h3>
                    <div className="h-px bg-[#D8D5CF] mb-5" />
                    <ul className="space-y-4">
                      {[
                        "B2B Marketplace",
                        "UK-Pakistan Corridor",
                        "Verified Connections",
                        "Structured Matchmaking",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2
                            className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0"
                            strokeWidth={2}
                          />
                          <span className="text-[#3D4152] text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Who It's For ───────────────────────────────────────────── */}
      <section className="relative bg-white">
        <div className="relative max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <AnimatedSection>
            {/* Section header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4 justify-center">
                <span className="h-px w-8 bg-[#22C55E]" />
                <span className="text-sm font-semibold text-[#22C55E] uppercase tracking-widest">
                  Who It&apos;s For
                </span>
                <span className="h-px w-8 bg-[#22C55E]" />
              </div>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Who TechMart Global Serves
              </h2>
              <p className="text-[#7A7E8F] text-base sm:text-lg max-w-2xl mx-auto">
                Designed to serve diverse stakeholders across the technology ecosystem.
              </p>
            </div>

            {/* Audience cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {audiences.map((audience, i) => {
                const Icon = audience.icon;
                return (
                  <motion.div
                    key={audience.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg border border-[#D8D5CF] hover:border-[#2563EB]/30"
                  >
                    {/* Top glow line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{
                        background: `linear-gradient(to right, transparent, ${audience.color}, transparent)`,
                      }}
                    />

                    <div className="relative p-6">
                      {/* Icon */}
                      <div className="relative mb-5">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            background: `${audience.color}15`,
                            border: `1px solid ${audience.color}30`,
                          }}
                        >
                          <Icon className="w-5 h-5" style={{ color: audience.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">
                        {audience.title}
                      </h3>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-[#7A7E8F] text-base leading-relaxed">{audience.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── What It Enables / Features ─────────────────────────────── */}
      <section className="relative bg-[#E8E6E3]">
        <div className="relative max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <AnimatedSection>
            {/* Section header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4 justify-center">
                <span className="h-px w-8 bg-[#C41E3A]" />
                <span className="text-sm font-semibold text-[#C41E3A] uppercase tracking-widest">
                  Capabilities
                </span>
                <span className="h-px w-8 bg-[#C41E3A]" />
              </div>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                What TechMart Global Enables
              </h2>
              <p className="text-[#7A7E8F] text-base sm:text-lg max-w-2xl mx-auto">
                Key capabilities and opportunities facilitated through the platform.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-lg border border-[#D8D5CF] hover:border-[#2563EB]/30"
                  >
                    {/* Top glow line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{
                        background: `linear-gradient(to right, ${feature.color}, ${feature.color}40)`,
                      }}
                    />

                    <div className="relative p-6 flex gap-5">
                      {/* Icon */}
                      <div className="relative flex-shrink-0">
                        <div
                          className="absolute inset-[-8px] rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                          style={{ background: feature.color }}
                        />
                        <div
                          className="relative w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            background: `${feature.color}15`,
                            border: `1px solid ${feature.color}30`,
                          }}
                        >
                          <Icon className="w-5 h-5" style={{ color: feature.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-heading font-bold text-[#1C1F2E] text-base flex-1 pr-3">
                            {feature.title}
                          </h3>
                          <span
                            className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                            style={{
                              color: feature.color,
                              background: `${feature.color}15`,
                              border: `1px solid ${feature.color}25`,
                            }}
                          >
                            {feature.tag}
                          </span>
                        </div>
                        <div className="h-px bg-[#D8D5CF] mb-3" />
                        <p className="text-[#7A7E8F] text-base leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── UK Market Access ───────────────────────────────────────── */}
      <section className="relative bg-white">
        <div className="relative max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <AnimatedSection>
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Text content */}
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="h-px w-8 bg-[#2563EB]" />
                  <span className="text-sm font-semibold text-[#2563EB] uppercase tracking-widest">
                    UK Market
                  </span>
                </div>
                <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                  UK Market Access Focus
                </h2>
                <p className="text-[#7A7E8F] text-base sm:text-lg mb-8 max-w-xl">
                  Supporting Pakistani technology companies in entering and succeeding in the UK market.
                </p>
                <p className="text-[#5A5F72] text-lg leading-relaxed mb-5">
                  TechMart Global places particular emphasis on facilitating entry into the UK market, recognising its strategic importance as a gateway to broader international opportunities.
                </p>
                <p className="text-[#5A5F72] text-lg leading-relaxed">
                  Through partnerships with UK-based organisations, industry associations, and regulatory bodies, TechMart Global helps Pakistani tech companies understand market dynamics and build relationships with UK buyers.
                </p>
              </div>

              {/* Glass sidebar card */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="lg:col-span-2 relative"
              >
                <div className="relative bg-white border border-[#D8D5CF] rounded-2xl overflow-hidden shadow-sm">
                  {/* Left accent */}
                  <div
                    className="absolute top-4 bottom-4 left-0 w-[3px] rounded-r-full"
                    style={{ background: "linear-gradient(to bottom, #2563EB, #22C55E)" }}
                  />

                  <div className="relative p-8 pl-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: "#2563EB15",
                          border: "1px solid #2563EB30",
                        }}
                      >
                        <Globe2 className="w-4 h-4 text-[#2563EB]" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-base">UK Entry Pathway</h3>
                    </div>
                    <div className="h-px bg-[#D8D5CF] mb-5" />
                    <ul className="space-y-3">
                      {ukPathway.map((item, i) => (
                        <motion.li
                          key={item}
                          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.15 + i * 0.06 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0"
                            strokeWidth={2}
                          />
                          <span className="text-[#5A5F72] text-base leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────────────── */}
      <section className="relative bg-[#EEECEA]">
        <div className="relative max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <AnimatedSection>
            {/* Section header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4 justify-center">
                <span className="h-px w-8 bg-[#C41E3A]" />
                <span className="text-sm font-semibold text-[#C41E3A] uppercase tracking-widest">
                  Process
                </span>
                <span className="h-px w-8 bg-[#C41E3A]" />
              </div>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                How TechMart Global Works
              </h2>
              <p className="text-[#7A7E8F] text-base sm:text-lg max-w-2xl mx-auto">
                A structured process designed to facilitate meaningful connections and successful outcomes.
              </p>
            </div>

            {/* Step cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg border border-[#D8D5CF] hover:border-[#2563EB]/30"
                  >
                    <div className="relative p-6">
                      {/* Number circle + icon row */}
                      <div className="flex items-center justify-between mb-5">
                        {/* Glowing number circle */}
                        <div className="relative">
                          <div
                            className="absolute inset-[-4px] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                            style={{ background: step.color }}
                          />
                          <div
                            className="relative w-11 h-11 rounded-full flex items-center justify-center font-heading font-extrabold text-sm text-white"
                            style={{
                              background: `linear-gradient(135deg, ${step.color}, ${step.color}90)`,
                              boxShadow: `0 0 20px ${step.color}20`,
                            }}
                          >
                            {step.number}
                          </div>
                        </div>
                        {/* Icon */}
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            background: `${step.color}15`,
                            border: `1px solid ${step.color}25`,
                          }}
                        >
                          <Icon className="w-5 h-5" style={{ color: step.color }} strokeWidth={1.5} />
                        </div>
                      </div>

                      <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#7A7E8F] text-base leading-relaxed mb-4">{step.description}</p>

                      {/* Outcome badge */}
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                        style={{
                          background: `${step.color}10`,
                          border: `1px solid ${step.color}20`,
                        }}
                      >
                        <CheckCircle2
                          className="w-3.5 h-3.5 flex-shrink-0"
                          style={{ color: step.color }}
                          strokeWidth={2}
                        />
                        <span className="text-xs font-semibold" style={{ color: step.color }}>
                          {step.outcome}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Council Alignment ──────────────────────────────────────── */}
      <section className="relative bg-[#E8E6E3]">
        <div className="relative max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <AnimatedSection>
            {/* Section header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4 justify-center">
                <span className="h-px w-8 bg-[#C41E3A]" />
                <span className="text-sm font-semibold text-[#C41E3A] uppercase tracking-widest">
                  Official Initiative
                </span>
                <span className="h-px w-8 bg-[#C41E3A]" />
              </div>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Alignment With UPTECH
              </h2>
              <p className="text-[#7A7E8F] text-base sm:text-lg max-w-2xl mx-auto">
                TechMart Global as a strategic initiative supporting council objectives and ecosystem development.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Text */}
              <div>
                <p className="text-[#5A5F72] text-lg leading-relaxed mb-5">
                  TechMart Global is an official initiative of the UK-Pakistan Tech Council, designed to advance the council&apos;s mission of fostering collaboration, innovation, and economic growth between the UK and Pakistan technology sectors.
                </p>
                <p className="text-[#7A7E8F] text-lg leading-relaxed">
                  The platform operates with a commitment to transparency, credibility, and ethical business practices. All participants benefit from the council&apos;s governance framework, which ensures fair processes, dispute resolution mechanisms, and ongoing support.
                </p>
              </div>

              {/* Alignment cards */}
              <div className="space-y-4">
                {alignment.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-lg border border-[#D8D5CF] hover:border-[#2563EB]/30"
                    >
                      {/* Left accent */}
                      <div
                        className="absolute top-3 bottom-3 left-0 w-[3px] rounded-r-full"
                        style={{
                          background: `linear-gradient(to bottom, ${item.color}, ${item.color}40)`,
                        }}
                      />

                      <div className="relative p-5 pl-5 flex items-start gap-4">
                        <div className="relative flex-shrink-0">
                          <div
                            className="absolute inset-[-6px] rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"
                            style={{ background: item.color }}
                          />
                          <div
                            className="relative w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{
                              background: `${item.color}15`,
                              border: `1px solid ${item.color}30`,
                            }}
                          >
                            <Icon
                              className="w-5 h-5"
                              style={{ color: item.color }}
                              strokeWidth={1.5}
                            />
                          </div>
                        </div>
                        <div>
                          <span className="font-heading font-bold text-[#1C1F2E] text-base">
                            {item.label}
                          </span>
                          <p className="text-[#7A7E8F] text-base leading-relaxed mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0B0F1A] overflow-hidden">
        {/* Gradient glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2563EB]/8 blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#22C55E]/6 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-[#22C55E]/5 blur-[100px] pointer-events-none" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              {/* Label */}
              <div className="inline-flex items-center gap-2 mb-6 justify-center">
                <span className="inline-block w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-sm font-semibold text-[#22C55E] uppercase tracking-widest">
                  Join the Platform
                </span>
              </div>

              {/* Gradient heading */}
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #ffffff 0%, #2563EB 60%, #22C55E 100%)",
                  }}
                >
                  Join TechMart Global
                </span>
              </h2>

              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Connect with the global technology marketplace and unlock new opportunities for growth and cross-border collaboration.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href="/membership/apply" variant="primary" size="lg" showArrow>
                  Get Started
                </Button>
                <Button href="/contact" variant="glass" size="lg" showArrow>
                  Learn About Membership
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
