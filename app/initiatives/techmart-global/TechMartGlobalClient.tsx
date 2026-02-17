"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedUnderline } from "@/components/AnimatedUnderline";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  Users,
  Briefcase,
  TrendingUp,
  Search,
  HeartHandshake,
  Shield,
  CheckCircle2,
  Globe,
  ArrowRight,
  Network,
  Target,
  Zap,
  FileCheck,
  Rocket,
} from "lucide-react";

export default function TechMartGlobalClient() {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <PageHero
        title={
          <span className="relative inline-block">
            TechMart Global
            <AnimatedUnderline />
          </span>
        }
        subtitle="A global B2B technology marketplace and collaboration platform connecting Pakistani tech companies with UK and international buyers, partners, investors, and institutions."
      >
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button variant="primary" size="lg" className="bg-gradient-to-r from-[#2D5BFF] to-[#1E3A8A]">
              Get Started
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button variant="glass" size="lg">
              Learn More
            </Button>
          </motion.div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <TrustChip label="B2B Marketplace" />
          <TrustChip label="UK–Pakistan Corridor" />
          <TrustChip label="Verified Connections" />
        </div>
      </PageHero>

      {/* What is TechMart Global */}
      <Section variant="dark">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#2D5BFF]/10 border border-[#2D5BFF]/20 text-[#2D5BFF] text-xs font-semibold uppercase tracking-wider mb-4">
                  Initiative
                </div>
                <SectionHeader
                  title="What is TechMart Global"
                  subtitle="A strategic platform designed to bridge technology ecosystems and facilitate meaningful business connections."
                  align="left"
                />
                <div className="space-y-5 text-[rgba(234,242,255,0.85)] leading-relaxed text-base">
                  <p>
                    TechMart Global is a comprehensive B2B technology marketplace powered by the UK–Pakistan Tech Council. The platform serves as a{" "}
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#2D5BFF]/10 border border-[#2D5BFF]/20 text-[#2D5BFF] text-sm font-medium">
                      trusted intermediary
                    </span>
                    , enabling Pakistani technology companies to showcase their capabilities, products, and services to a global audience.
                  </p>
                  <p>
                    Through{" "}
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#00B140]/10 border border-[#00B140]/20 text-[#00B140] text-sm font-medium">
                      structured matchmaking
                    </span>
                    , transparent processes, and strategic support, TechMart Global facilitates cross-border partnerships, procurement opportunities, and long-term business relationships that drive innovation and economic growth.
                  </p>
                </div>
              </div>
              <div className="relative">
                <MarketplaceVisual />
              </div>
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
      </Section>

      {/* Who TechMart Global Is For */}
      <Section>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2D5BFF]/20 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Who TechMart Global Is For"
              subtitle="Designed to serve diverse stakeholders across the technology ecosystem."
              align="center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AudienceCard
                icon={Rocket}
                title="Tech Startups"
                description="Early-stage technology companies seeking market access, partnerships, and growth opportunities in international markets."
                accentColor="#2D5BFF"
                index={0}
              />
              <AudienceCard
                icon={TrendingUp}
                title="Scale-ups and SMEs"
                description="Growing technology businesses ready to expand their reach and establish strategic relationships with global buyers and partners."
                accentColor="#00B140"
                index={1}
              />
              <AudienceCard
                icon={Building2}
                title="Enterprises and Buyers"
                description="Organizations looking to discover, evaluate, and engage with qualified technology vendors and service providers."
                accentColor="#2D5BFF"
                index={2}
              />
              <AudienceCard
                icon={Briefcase}
                title="Investors and Partners"
                description="Investment firms, strategic partners, and institutions interested in connecting with high-potential technology companies."
                accentColor="#2563EB"
                index={3}
              />
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2D5BFF]/20 to-transparent" />
      </Section>

      {/* What TechMart Global Enables */}
      <Section variant="dark">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="What TechMart Global Enables"
              subtitle="Key capabilities and opportunities facilitated through the platform."
              align="center"
            />
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <FeatureBlock
                icon={Network}
                title="Cross-border B2B Matchmaking"
                description="Intelligent matching algorithms and curated introductions connect Pakistani tech companies with relevant UK and international buyers based on capabilities, needs, and strategic fit."
                tag="Intelligent Matching"
                index={0}
              />
              <FeatureBlock
                icon={Search}
                title="Market Access and Discovery"
                description="Comprehensive company profiles, service catalogs, and capability showcases enable buyers to discover and evaluate technology solutions efficiently."
                tag="Market Discovery"
                index={1}
              />
              <FeatureBlock
                icon={HeartHandshake}
                title="Strategic Partnerships"
                description="Facilitation of joint ventures, technology licensing, co-development agreements, and long-term strategic alliances between companies."
                tag="Partnerships"
                index={2}
              />
              <FeatureBlock
                icon={Globe}
                title="Trade, Procurement, and Outsourcing"
                description="Direct access to procurement opportunities, outsourcing projects, and trade facilitation services that streamline cross-border transactions."
                tag="Global Trade"
                index={3}
              />
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
      </Section>

      {/* UK Market Access Focus */}
      <Section>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2D5BFF]/20 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  title="UK Market Access Focus"
                  subtitle="Supporting Pakistani technology companies in entering and succeeding in the UK market."
                  align="left"
                />
                <div className="space-y-5 text-[rgba(11,18,32,0.68)] leading-relaxed text-base">
                  <p>
                    TechMart Global places particular emphasis on facilitating entry into the UK market, recognizing its strategic importance as a gateway to broader international opportunities. The platform provides structured support for companies navigating UK market requirements, compliance standards, and business practices.
                  </p>
                  <p>
                    Through partnerships with UK-based organizations, industry associations, and regulatory bodies, TechMart Global helps Pakistani tech companies understand market dynamics, establish credibility, and build relationships with UK buyers, partners, and institutions.
                  </p>
                </div>
              </div>
              <div className="relative">
                <UKMarketPathway />
              </div>
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2D5BFF]/20 to-transparent" />
      </Section>

      {/* How TechMart Global Works */}
      <Section variant="dark">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="How TechMart Global Works"
              subtitle="A structured process designed to facilitate meaningful connections and successful outcomes."
              align="center"
            />
            <HowItWorksSteps />
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
      </Section>

      {/* Alignment With UK–Pakistan Tech Council */}
      <Section>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2D5BFF]/20 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Alignment With UK–Pakistan Tech Council"
              subtitle="TechMart Global as a strategic initiative supporting council objectives and ecosystem development."
              align="center"
            />
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex flex-wrap gap-3 justify-center">
                <div className="px-4 py-2 rounded-full bg-[#2D5BFF]/10 border border-[#2D5BFF]/20 text-[#2D5BFF] text-sm font-semibold flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Transparency
                </div>
                <div className="px-4 py-2 rounded-full bg-[#00B140]/10 border border-[#00B140]/20 text-[#00B140] text-sm font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Verification
                </div>
                <div className="px-4 py-2 rounded-full bg-[#2D5BFF]/10 border border-[#2D5BFF]/20 text-[#2D5BFF] text-sm font-semibold flex items-center gap-2">
                  <FileCheck className="w-4 h-4" />
                  Fair Process
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#2D5BFF]/10 to-[#00B140]/5 border border-[#2D5BFF]/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#2D5BFF]/20 text-[#2D5BFF] flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2 text-[#0B1220]">Official Initiative</h3>
                    <p className="text-[rgba(11,18,32,0.68)] leading-relaxed">
                      TechMart Global is an official initiative of the UK–Pakistan Tech Council, designed to advance the council&apos;s mission of fostering collaboration, innovation, and economic growth between the UK and Pakistan technology sectors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-5 text-[rgba(11,18,32,0.68)] leading-relaxed text-base">
                <p>
                  The platform operates with a commitment to transparency, credibility, and ethical business practices. All participants benefit from the council&apos;s governance framework, which ensures fair processes, dispute resolution mechanisms, and ongoing support throughout the engagement lifecycle.
                </p>
                <p>
                  By aligning with the UK–Pakistan Tech Council, TechMart Global provides participants with access to a trusted ecosystem, policy insights, regulatory guidance, and strategic connections that extend beyond simple transactional matchmaking. The platform serves as a cornerstone of the council&apos;s efforts to build a sustainable, mutually beneficial technology partnership between the UK and Pakistan.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2D5BFF]/20 to-transparent" />
      </Section>

      {/* Call to Action */}
      <Section variant="dark">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#2D5BFF] via-[#00B140] to-[#2D5BFF] rounded-full opacity-[0.08] blur-[200px]" />
        </div>
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <SectionHeader
              title="Join TechMart Global"
              subtitle="Connect with the global technology marketplace and unlock new opportunities for growth and collaboration."
              align="center"
            />
            <div className="mt-10 flex flex-col items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="primary" size="lg" className="relative">
                  Get Started
                </Button>
              </motion.div>
              <a
                href="/membership"
                className="text-[rgba(234,242,255,0.75)] hover:text-[#EAF2FF] text-sm font-medium transition-colors flex items-center gap-1"
              >
                Learn more about Membership
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}


// Trust Chip Component
function TrustChip({ label }: { label: string }) {
  return (
    <div className="px-4 py-2 rounded-full bg-[rgba(255,255,255,0.08)] backdrop-blur-sm border border-[rgba(234,242,255,0.15)] text-[rgba(234,242,255,0.85)] text-sm font-medium">
      {label}
    </div>
  );
}

// Marketplace Visual Component - Premium Animated Network
function MarketplaceVisual() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Network nodes configuration
  const centralNode = { x: 200, y: 200 };
  const outerNodes = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 360) / 12;
    const radius = 140;
    return {
      x: centralNode.x + radius * Math.cos((angle * Math.PI) / 180),
      y: centralNode.y + radius * Math.sin((angle * Math.PI) / 180),
      angle,
    };
  });

  // Secondary connections between outer nodes
  const secondaryConnections = [
    [0, 2], [1, 3], [2, 5], [3, 6], [4, 7], [5, 8],
    [6, 9], [7, 10], [8, 11], [9, 0], [10, 1], [11, 4]
  ];

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.04)] backdrop-blur-xl border border-[rgba(234,242,255,0.15)] p-12 overflow-hidden min-h-[500px] group"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#2D5BFF]/15 via-transparent to-[#00B140]/10"
        animate={shouldReduceMotion ? {} : {
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating orbs */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#2D5BFF] rounded-full blur-2xl opacity-20"
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-[#00B140] rounded-full blur-xl opacity-15"
            animate={{
              x: [0, -25, 15, 0],
              y: [0, 25, -15, 0],
              scale: [1, 1.3, 0.8, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </>
      )}

      {/* Network SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D5BFF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#00B140" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2D5BFF" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D5BFF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00B140" stopOpacity="0.15" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Secondary connections between outer nodes */}
        {secondaryConnections.map(([start, end], idx) => {
          const startNode = outerNodes[start];
          const endNode = outerNodes[end];
          return (
            <motion.line
              key={`secondary-${idx}`}
              x1={startNode.x}
              y1={startNode.y}
              x2={endNode.x}
              y2={endNode.y}
              stroke="url(#secondaryGradient)"
              strokeWidth="0.5"
              strokeDasharray="2,2"
              initial={shouldReduceMotion ? { pathLength: 1, opacity: 0.3 } : { pathLength: 0, opacity: 0 }}
              animate={shouldReduceMotion || isInView ? { pathLength: 1, opacity: 0.3 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 1, delay: idx * 0.05 + 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          );
        })}

        {/* Primary connections from center to outer nodes */}
        {outerNodes.map((node, i) => (
          <g key={`primary-${i}`}>
            <motion.line
              x1={centralNode.x}
              y1={centralNode.y}
              x2={node.x}
              y2={node.y}
              stroke="url(#networkGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={shouldReduceMotion ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
              animate={shouldReduceMotion || isInView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.8, delay: i * 0.08 + 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Animated pulse along connection */}
            {!shouldReduceMotion && (
              <motion.circle
                r="2"
                fill="#00B140"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  cx: [centralNode.x, node.x],
                  cy: [centralNode.y, node.y],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.15 + 1,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              />
            )}
          </g>
        ))}

        {/* Outer nodes */}
        {outerNodes.map((node, i) => (
          <g key={`node-${i}`}>
            {/* Outer glow */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="12"
              fill={i % 3 === 0 ? "#2D5BFF" : i % 3 === 1 ? "#00B140" : "#2563EB"}
              opacity="0.2"
              initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
              animate={shouldReduceMotion || isInView ? { scale: [1, 1.3, 1] } : { scale: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.5, repeat: Infinity, repeatDelay: 4 }}
            />
            {/* Node */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill={i % 3 === 0 ? "#2D5BFF" : i % 3 === 1 ? "#00B140" : "#2563EB"}
              filter="url(#glow)"
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          </g>
        ))}

        {/* Central hub node */}
        <g>
          {/* Outer rings */}
          <motion.circle
            cx={centralNode.x}
            cy={centralNode.y}
            r="20"
            fill="none"
            stroke="#2D5BFF"
            strokeWidth="1"
            opacity="0.3"
            initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
            animate={shouldReduceMotion || isInView ? { scale: [1, 1.5, 1] } : { scale: 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx={centralNode.x}
            cy={centralNode.y}
            r="16"
            fill="none"
            stroke="#00B140"
            strokeWidth="1"
            opacity="0.3"
            initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
            animate={shouldReduceMotion || isInView ? { scale: [1, 1.4, 1] } : { scale: 0 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          {/* Central node */}
          <motion.circle
            cx={centralNode.x}
            cy={centralNode.y}
            r="14"
            fill="url(#networkGradient)"
            filter="url(#glow)"
            initial={shouldReduceMotion ? { opacity: 0.8 } : { opacity: 0, scale: 0 }}
            animate={shouldReduceMotion || isInView ? { opacity: [0.8, 1, 0.8], scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 0 }}
          />
        </g>
      </svg>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[400px]">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <Network className="w-20 h-20 text-[#2D5BFF] opacity-90" />
              <motion.div
                className="absolute inset-0 bg-[#2D5BFF] rounded-full blur-xl opacity-30"
                animate={shouldReduceMotion ? {} : { scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
          <h3 className="font-heading font-bold text-lg mb-2 text-[#EAF2FF]">Global Marketplace Network</h3>
          <p className="text-sm text-[rgba(234,242,255,0.6)]">Connecting businesses across borders</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Audience Card Component
function AudienceCard({
  icon: Icon,
  title,
  description,
  accentColor,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  accentColor: string;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
      className="group relative bg-[#F6F8FC] rounded-xl border-2 border-[rgba(11,18,32,0.10)] p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
        style={{ backgroundColor: accentColor }}
      />
      <div className="relative z-10">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
          style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
        >
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-heading font-bold text-lg mb-3 text-[#0B1220]">{title}</h3>
        <p className="text-sm text-[rgba(11,18,32,0.68)] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// Feature Block Component
function FeatureBlock({
  icon: Icon,
  title,
  description,
  tag,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tag: string;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -4, borderColor: "rgba(234,242,255,0.3)", transition: { duration: 0.3 } }}
      className="group relative bg-[rgba(255,255,255,0.06)] backdrop-blur-sm rounded-xl border border-[rgba(234,242,255,0.14)] p-6 hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#2D5BFF]/20 text-[#2D5BFF] flex items-center justify-center">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-heading font-bold text-lg text-[#EAF2FF]">{title}</h3>
            <span className="px-2 py-0.5 rounded-md bg-[#2D5BFF]/10 border border-[#2D5BFF]/20 text-[#2D5BFF] text-xs font-medium">
              {tag}
            </span>
          </div>
          <p className="text-sm text-[rgba(234,242,255,0.75)] leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// UK Market Pathway Component
function UKMarketPathway() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const steps = [
    { label: "Market Entry", icon: Target },
    { label: "Compliance", icon: Shield },
    { label: "Partnership", icon: HeartHandshake },
  ];

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-gradient-to-br from-[#F6F8FC] to-white rounded-2xl border-2 border-[rgba(11,18,32,0.10)] p-8 shadow-lg"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#2563EB]/10 to-transparent rounded-tr-2xl" />
      <h3 className="font-heading font-bold text-lg mb-6 text-[#0B1220]">UK Entry Pathway</h3>
      <div className="space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#2D5BFF]/10 text-[#2D5BFF] flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-sm font-semibold text-[#0B1220]">{step.label}</div>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-6 pt-6 border-t border-[rgba(11,18,32,0.10)]">
        <p className="text-xs text-[rgba(11,18,32,0.5)] italic">Structured support for UK market requirements</p>
      </div>
    </motion.div>
  );
}

// How It Works Steps Component
function HowItWorksSteps() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const steps = [
    { number: 1, title: "Discover", description: "Browse company profiles, service catalogs, and capability showcases to identify potential partners, vendors, or buyers that match your needs.", icon: Search },
    { number: 2, title: "Connect", description: "Initiate contact through the platform's communication tools, request introductions, or respond to opportunities posted by other members.", icon: Network },
    { number: 3, title: "Validate", description: "Engage in due diligence, capability assessments, and preliminary discussions to ensure alignment and mutual fit before proceeding.", icon: FileCheck },
    { number: 4, title: "Scale", description: "Execute agreements, launch partnerships, and leverage platform resources to scale relationships and achieve long-term business objectives.", icon: Rocket },
  ];

  return (
    <div ref={containerRef} className="relative mt-12">
      {/* Connecting Line (Desktop Only) */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 z-0">
        <motion.div
          className="h-full bg-gradient-to-r from-[#2D5BFF] via-[#00B140] to-[#2D5BFF] opacity-20"
          initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
          animate={shouldReduceMotion || isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative bg-[rgba(255,255,255,0.06)] backdrop-blur-sm rounded-2xl border border-[rgba(234,242,255,0.14)] p-6 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(234,242,255,0.25)] transition-all duration-500 overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ backgroundColor: index % 2 === 0 ? "#2D5BFF" : "#00B140" }}
              />
              <motion.div
                className="relative mb-6"
                whileHover={shouldReduceMotion ? {} : { scale: 1.1, transition: { duration: 0.3 } }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg bg-gradient-to-br from-[#2D5BFF] to-[#1E3A8A]">
                  {step.number}
                </div>
                <motion.div
                  className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ backgroundColor: "#2D5BFF" }}
                />
              </motion.div>
              <div className="w-10 h-10 rounded-lg bg-[#2D5BFF]/20 text-[#2D5BFF] flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-3 text-[#EAF2FF]">{step.title}</h3>
              <p className="text-sm text-[rgba(234,242,255,0.75)] leading-relaxed">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
