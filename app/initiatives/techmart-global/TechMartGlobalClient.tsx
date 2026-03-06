"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion } from "framer-motion";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
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
  { value: "500+", label: "Companies", color: "#2563EB" },
  { value: "12", label: "Sectors", color: "#22C55E" },
  { value: "3", label: "Continents", color: "#C41E3A" },
  { value: "Verified", label: "Network", color: "#2563EB" },
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
    description: "Curated introductions connect Pakistani tech companies with relevant UK and international buyers based on capabilities, needs, and strategic fit.",
    icon: Handshake,
    color: "#2563EB",
  },
  {
    title: "Market Access and Discovery",
    description: "Comprehensive company profiles, service catalogs, and capability showcases enable buyers to discover and evaluate technology solutions efficiently.",
    icon: Search,
    color: "#22C55E",
  },
  {
    title: "Strategic Partnerships",
    description: "Facilitation of joint ventures, technology licensing, co-development agreements, and long-term strategic alliances between companies.",
    icon: Globe2,
    color: "#C41E3A",
  },
  {
    title: "Trade, Procurement, and Outsourcing",
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
    color: "#2563EB",
  },
  {
    number: "02",
    title: "Connect",
    description: "Initiate contact through the platform\u2019s communication tools or request introductions to relevant participants.",
    outcome: "Verified introductions",
    color: "#22C55E",
  },
  {
    number: "03",
    title: "Validate",
    description: "Engage in due diligence, capability assessments, and preliminary discussions to ensure mutual fit before proceeding.",
    outcome: "Confirmed alignment",
    color: "#C41E3A",
  },
  {
    number: "04",
    title: "Scale",
    description: "Execute agreements, launch partnerships, and leverage platform resources to scale relationships and achieve long-term objectives.",
    outcome: "Partnership launched",
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

export default function TechMartGlobalClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="content-body">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <PageHero
        label="UPTECH Initiative"
        title="TechMart Global"
        subtitle="A global B2B technology marketplace and collaboration platform connecting Pakistani tech companies with UK and international buyers, partners, investors, and institutions."
        image="/image/banners/banner24.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership/apply">Get Started</ShinyButton>
          <Button href="/contact" variant="glass" size="lg">
            Learn More
          </Button>
        </div>
      </PageHero>

      {/* ── Stats Bar ──────────────────────────────────────────────── */}
      <Section variant="light">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-xl border border-[#D8D5CF]/60 p-px h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className="relative h-full text-center bg-white rounded-xl p-6">
                <p
                  className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="text-[#5A5F72] text-base">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── What is TechMart Global ────────────────────────────────── */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Text content - 3 cols */}
            <div className="lg:col-span-3">
              <SectionHeader
                label="About the Platform"
                title="What is TechMart Global?"
                color="blue"
              />
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

            {/* Sidebar card - 2 cols */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-8 sticky top-8">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">
                  Platform Snapshot
                </h3>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <ul className="space-y-4">
                  {[
                    { title: "B2B Marketplace", desc: "Connect technology vendors with global buyers.", color: "#2563EB" },
                    { title: "UK-Pakistan Corridor", desc: "Cross-border trade and partnership facilitation.", color: "#22C55E" },
                    { title: "Verified Connections", desc: "All participants are vetted for quality assurance.", color: "#C41E3A" },
                    { title: "Structured Matchmaking", desc: "Curated introductions based on capabilities and needs.", color: "#2563EB" },
                  ].map((item, i) => (
                    <motion.li
                      key={item.title}
                      className="flex items-start gap-3.5"
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                    >
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                        style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}
                      >
                        <ArrowUpRight className="w-4 h-4" style={{ color: item.color }} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="font-semibold text-[#1C1F2E] text-base">{item.title}</span>
                        <p className="text-[#5A5F72] text-base leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Who It's For ───────────────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Who It's For"
            title="Who TechMart Global Serves"
            subtitle="Designed to serve diverse stakeholders across the technology ecosystem."
            color="green"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience, i) => {
              const Icon = audience.icon;
              return (
                <motion.div
                  key={audience.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl p-7">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${audience.color}12`, border: `1px solid ${audience.color}25` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: audience.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">
                      {audience.title}
                    </h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed">{audience.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── What It Enables / Features ─────────────────────────────── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Capabilities"
            title="What TechMart Global Enables"
            subtitle="Key capabilities and opportunities facilitated through the platform."
            color="red"
          />

          <div className="grid md:grid-cols-2 gap-7">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group relative h-full rounded-2xl border border-[#D8D5CF]/60 p-px hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                  <div className="relative h-full bg-white rounded-2xl p-8 flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ background: `${feature.color}12`, border: `1px solid ${feature.color}25` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: feature.color }} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">
                        {feature.title}
                      </h3>
                    </div>

                    <div className="h-px bg-[#D8D5CF] mb-5" />
                    <p className="text-base text-[#5A5F72] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── UK Market Access ───────────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Text content */}
            <div className="lg:col-span-3">
              <SectionHeader
                label="UK Market"
                title="UK Market Access Focus"
                subtitle="Supporting Pakistani technology companies in entering and succeeding in the UK market."
                color="blue"
              />
              <p className="text-[#5A5F72] text-lg leading-relaxed mb-5">
                TechMart Global places particular emphasis on facilitating entry into the UK market, recognising its strategic importance as a gateway to broader international opportunities.
              </p>
              <p className="text-[#5A5F72] text-lg leading-relaxed">
                Through partnerships with UK-based organisations, industry associations, and regulatory bodies, TechMart Global helps Pakistani tech companies understand market dynamics and build relationships with UK buyers.
              </p>
            </div>

            {/* Sidebar card */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-8 sticky top-8">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "#2563EB10", border: "1px solid #2563EB20" }}
                  >
                    <Globe2 className="w-4 h-4 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-lg">UK Entry Pathway</h3>
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
            </motion.div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── How It Works ───────────────────────────────────────────── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="How TechMart Global Works"
            subtitle="A structured process designed to facilitate meaningful connections and successful outcomes."
            color="red"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative h-full bg-white rounded-2xl border border-[#D8D5CF] shadow-sm p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold border-2"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                      borderColor: `${step.color}60`,
                      color: step.color,
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-[#5A5F72] text-base leading-relaxed mb-4">{step.description}</p>

                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{ background: `${step.color}12`, border: `1px solid ${step.color}25` }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: step.color }} />
                  <span className="text-base font-semibold" style={{ color: step.color }}>
                    {step.outcome}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Council Alignment ──────────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Official Initiative"
            title="Alignment With UPTECH"
            subtitle="TechMart Global as a strategic initiative supporting council objectives and ecosystem development."
            color="red"
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Text */}
            <div>
              <p className="text-[#5A5F72] text-lg leading-relaxed mb-5">
                TechMart Global is an official initiative of the UK-Pakistan Tech Council, designed to advance the council&apos;s mission of fostering collaboration, innovation, and economic growth between the UK and Pakistan technology sectors.
              </p>
              <p className="text-[#5A5F72] text-lg leading-relaxed">
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
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-4 bg-white border border-[#D8D5CF] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-[#1C1F2E] text-base">
                        {item.label}
                      </span>
                      <p className="text-[#5A5F72] text-base leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <GlobalCTA
        label="Join the Platform"
        title="Join TechMart Global"
        subtitle="Connect with the global technology marketplace and unlock new opportunities for growth and cross-border collaboration."
        primaryButtonText="Get Started"
        primaryButtonLink="/membership/apply"
        secondaryButtonText="Learn About Membership"
        secondaryButtonLink="/membership"
      />
    </div>
  );
}
