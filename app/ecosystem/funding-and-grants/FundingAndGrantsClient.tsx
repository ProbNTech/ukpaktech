"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import {
  Rocket,
  Lightbulb,
  Globe2,
  Cpu,
  Building2,
  GraduationCap,
  TrendingUp,
  BookOpen,
  Banknote,
  Users,
  Shield,
  FileText,
  CheckCircle2,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

/* ─── Data ──────────────────────────────────────────────────────────── */

const stats = [
  { value: "£50M+", label: "Funding Facilitated" },
  { value: "150+", label: "Companies Funded" },
  { value: "85%", label: "Success Rate" },
  { value: "3", label: "Funding Stages" },
];

const overviewItems = [
  {
    title: "Startup Funding",
    description: "Seed and early-stage funding for innovative technology startups with cross-border potential.",
    icon: Rocket,
    color: "#2563EB",
  },
  {
    title: "Research Grants",
    description: "Support for academic research and technology development projects driving bilateral innovation.",
    icon: BookOpen,
    color: "#8b5cf6",
  },
  {
    title: "Growth Capital",
    description: "Investment opportunities for scaling technology businesses across the UK–Pakistan corridor.",
    icon: TrendingUp,
    color: "#22C55E",
  },
];

const opportunities = [
  { title: "Innovation Grants", description: "Funding for innovative technology projects that demonstrate potential for cross-border impact.", icon: Lightbulb, color: "#f59e0b" },
  { title: "Startup Accelerator", description: "Comprehensive support including funding, mentorship, and access to networks.", icon: Rocket, color: "#2563EB" },
  { title: "Bilateral Projects", description: "Grants for collaborative projects between UK and Pakistan organisations.", icon: Globe2, color: "#22C55E" },
  { title: "Research & Development", description: "Support for R&D initiatives in emerging technologies and digital transformation.", icon: Cpu, color: "#8b5cf6" },
  { title: "Enterprise Partnerships", description: "Funding opportunities for established companies expanding cross-border operations.", icon: Building2, color: "#C41E3A" },
  { title: "Skills Development", description: "Grants for programs that enhance technology skills and workforce capabilities.", icon: GraduationCap, color: "#ef4444" },
];

const fundingGrantsIntro = {
  heading: "BRIDGING THE FUNDING GAP FOR EARLY-STAGE COMPANIES",
  description: "Pakistan\u2019s policy framework already offers vital support for early-stage companies, but we can enhance this further by introducing:",
};

const fundingStages = [
  {
    stage: "Pre-Seed & Seed",
    title: "Startup Funding",
    description: "We provide entrepreneurs with pre-seed capital, support from a dedicated team, access to corporate partners and membership to our global founder community.",
    features: ["Pre-seed capital investment", "Dedicated support team", "Corporate partner introductions", "Global founder community access"],
    icon: Rocket,
    color: "#2563EB",
  },
  {
    stage: "Sophisticated Investor",
    title: "Sophisticated Investor",
    description: "Currently, to participate in early-stage investment syndicates, individuals must qualify as sophisticated investors based on an income of \u00A3250K or assets worth \u00A31 million. This rule excludes many knowledgeable and experienced individuals, like startup employees and senior leaders, who might have lower salaries due to equity-based compensation. By broadening the criteria, we can include more of these potential investors and strengthen support for early-stage startups.",
    features: ["Broaden qualification criteria beyond income thresholds", "Include experienced startup employees and senior leaders", "Support equity-based compensation holders", "Strengthen early-stage startup investment syndicates"],
    icon: Users,
    color: "#f59e0b",
  },
  {
    stage: "Series A & B",
    title: "Growth Capital",
    description: "For companies that demonstrate potential to 10x their growth. By aligning with our expertise, network, and capital, your startup will be well-positioned to scale rapidly.",
    features: ["Raise capital with operational support", "Pitch at flagship investor days", "Warm introductions to top-tier funds", "Six months 1:1 expert support"],
    icon: TrendingUp,
    color: "#22C55E",
  },
  {
    stage: "R&D",
    title: "Research & Development Incentives",
    description: "At UK-Pakistan Tech Council (UPTECH), we highly value the current R&D tax incentive, recognizing the pivotal role that research and development play in driving technological advancements. With the launch of this initiative in Pakistan, we aim to further bolster the tech sector by making the R&D tax incentive more transparent and accessible, for digital literacy, healthcare sector, energy solutions and infusion technologies. We appreciate ongoing efforts to clarify the application of these incentives and are committed to collaborating closely with experts in the field to provide clearer guidance. Our goal is to ensure that the intent and application of this incentive are well understood and effectively implemented by both industry leaders and administrators. Through this initiative, we are paving the way for a robust, innovation-driven future in Pakistan.",
    features: ["Digital literacy R&D incentives", "Healthcare sector innovation support", "Energy solutions R&D programmes", "Infusion technologies advancement"],
    icon: Cpu,
    color: "#8b5cf6",
  },
];

const eligibilityCriteria = [
  { text: "Technology-focused projects with clear innovation potential", icon: Lightbulb, color: "#2563EB" },
  { text: "Alignment with UK–Pakistan technology partnership objectives", icon: Globe2, color: "#22C55E" },
  { text: "Demonstrated commitment to cross-border collaboration", icon: Users, color: "#8b5cf6" },
  { text: "Viable business model or research proposal", icon: FileText, color: "#f59e0b" },
  { text: "Experienced team with relevant expertise", icon: Shield, color: "#C41E3A" },
];

const applicationSteps = [
  { number: "01", title: "Submit Application", description: "Complete the online application form with project details and objectives.", outcome: "Application logged", icon: FileText, color: "#2563EB" },
  { number: "02", title: "Review Process", description: "Expert panel evaluates your proposal against eligibility and impact criteria.", outcome: "Proposal scored", icon: Shield, color: "#22C55E" },
  { number: "03", title: "Due Diligence", description: "Shortlisted applicants undergo a thorough due diligence and reference check process.", outcome: "Validation complete", icon: CheckCircle2, color: "#8b5cf6" },
  { number: "04", title: "Funding Decision", description: "Notification of outcome and disbursement of approved funds with milestone tracking.", outcome: "Funds released", icon: Banknote, color: "#f59e0b" },
];

const benefits = [
  { title: "Financial Support", description: "Access to capital for project development, scaling, and cross-border expansion.", icon: Banknote, color: "#2563EB" },
  { title: "Mentorship", description: "Guidance from experienced industry leaders, investors, and domain experts.", icon: Users, color: "#22C55E" },
  { title: "Networking", description: "Connect with investors, corporate partners, and potential collaborators across borders.", icon: Globe2, color: "#8b5cf6" },
  { title: "Market Access", description: "Opportunities to expand into UK, Pakistan, and international markets.", icon: ArrowUpRight, color: "#f59e0b" },
];

const faqs = [
  { question: "What types of funding are available?", answer: "We offer pre-seed and seed investment, Series A/B growth capital facilitation, R&D grants, innovation grants, and bilateral project funding. The type of funding depends on your stage, sector, and project objectives." },
  { question: "How long does the application process take?", answer: "Initial applications are reviewed within 2–4 weeks. The full process — including due diligence and funding decision — typically takes 6–12 weeks depending on the funding type and complexity of the proposal." },
  { question: "Is funding available for non-tech companies?", answer: "Our primary focus is technology-focused companies and projects. However, companies in adjacent sectors that demonstrate significant technology innovation or digital transformation may also be eligible." },
  { question: "Can I apply for multiple funding streams?", answer: "Yes, you can apply for multiple funding streams simultaneously, provided you meet the eligibility criteria for each. Our team can advise on the most appropriate funding mix for your needs." },
  { question: "What are the reporting requirements?", answer: "Funded companies are required to provide quarterly progress reports, financial updates, and milestone tracking. We work collaboratively with funded companies to ensure success and accountability." },
];

/* ─── Helpers ───────────────────────────────────────────────────────── */

const faqColors = ["#2563EB", "#22C55E", "#8b5cf6", "#f59e0b", "#C41E3A"];

const statColors = ["#2563EB", "#22C55E", "#8b5cf6", "#f59e0b"];

/* ─── Component ─────────────────────────────────────────────────────── */

export default function FundingAndGrantsClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#EEECEA]">
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/image/london-images/investment-finance-meeting.jpg"
          alt="Funding and Grants"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A]/80 via-[#0B0F1A]/70 to-[#0B0F1A]" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#2563EB]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/8 blur-[100px] pointer-events-none" />

        {/* Hero content */}
        <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 py-32 md:py-40">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            {/* Glass morphism label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
              <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">Ecosystem / Funding &amp; Grants</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Funding and{" "}
              </span>
              <span className="bg-gradient-to-r from-[#2563EB] via-[#8b5cf6] to-[#22C55E] bg-clip-text text-transparent">
                Grants
              </span>
            </h1>

            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
              Access funding opportunities to drive technology innovation and cross-border collaboration between the UK and Pakistan.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow className="!bg-[#2563EB] hover:!bg-[#1d4ed8]">
                Become a Member
              </Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────── */}
      <section className="relative z-[1] bg-[#0B0F1A]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, i) => {
              const color = statColors[i % statColors.length];
              return (
                <motion.div
                  key={stat.label}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative text-center rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm px-6 py-7 overflow-hidden group hover:border-white/[0.12] transition-all duration-500"
                >
                  {/* Colored top border */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }}
                  />
                  {/* Subtle glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at center, ${color}08, transparent 70%)` }}
                  />
                  <p
                    className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-2 relative"
                    style={{ color }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-xs sm:text-sm font-medium uppercase tracking-wider relative">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ──────────────────────────────────────────────── */}
      <section className="relative bg-[#EEECEA] overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-28">
          <AnimatedSection>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span className="text-[#2563EB] text-xs font-semibold uppercase tracking-wider">Overview</span>
              </div>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-snug mb-6">
                Funding Programs Designed for the{" "}
                <span className="bg-gradient-to-r from-[#2563EB] to-[#8b5cf6] bg-clip-text text-transparent">
                  UK–Pakistan Tech Corridor
                </span>
              </h2>
              <p className="text-[#5A5F72] text-base leading-relaxed mb-5">
                UPTECH provides access to funding opportunities and grants designed to support technology innovation, startup growth, and cross-border collaboration between the UK and Pakistan.
              </p>
              <p className="text-[#5A5F72] text-base leading-relaxed">
                Our funding programs enable entrepreneurs, researchers, and organisations to turn innovative ideas into reality. Whether you&apos;re a startup seeking seed funding, a researcher looking for grant support, or an enterprise exploring partnership opportunities, we connect you with the right funding sources and resources.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {overviewItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group relative rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-7 hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-500 overflow-hidden"
                  >
                    {/* Gradient top border */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}40)` }}
                    />
                    {/* Icon */}
                    <div className="relative mb-5">
                      <div
                        className="relative w-13 h-13 rounded-xl flex items-center justify-center"
                        style={{ background: `${item.color}10`, border: `1px solid ${item.color}15` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="relative font-heading font-bold text-[#1C1F2E] text-base mb-3">{item.title}</h3>
                    <div className="relative h-px bg-[#D8D5CF] mb-3" />
                    <p className="relative text-[#5A5F72] text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── OPPORTUNITIES ─────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-28">
          <AnimatedSection>
            {/* Section header */}
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#22C55E]/20 bg-[#22C55E]/5 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                <span className="text-[#22C55E] text-xs font-semibold uppercase tracking-wider">Funding</span>
              </div>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-snug mb-4">
                Available Opportunities
              </h2>
              <p className="text-[#5A5F72] text-base leading-relaxed">
                Explore our range of funding programs designed to support technology innovation and cross-border collaboration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunities.map((opp, i) => {
                const Icon = opp.icon;
                return (
                  <motion.div
                    key={opp.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-7 hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-500 overflow-hidden"
                  >
                    {/* Gradient top border */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${opp.color}, ${opp.color}40)` }}
                    />
                    {/* Icon */}
                    <div className="relative mb-5">
                      <div
                        className="relative w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${opp.color}10`, border: `1px solid ${opp.color}15` }}
                      >
                        <Icon className="w-5.5 h-5.5" style={{ color: opp.color }} strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="relative font-heading font-bold text-[#1C1F2E] text-base mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                      {opp.title}
                    </h3>
                    <div className="relative h-px bg-[#D8D5CF] mb-3" />
                    <p className="relative text-[#5A5F72] text-sm leading-relaxed">{opp.description}</p>
                    {/* Arrow hint on hover */}
                    <div
                      className="relative mt-5 flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: opp.color }}
                    >
                      <span>Learn more</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FUNDING GRANTS INTRO ────────────────────────────────────── */}
      <section className="relative bg-[#EEECEA] overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-28">
          <AnimatedSection>
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/5 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                <span className="text-[#f59e0b] text-xs font-semibold uppercase tracking-wider">Funding Grants</span>
              </div>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-snug mb-6">
                {fundingGrantsIntro.heading}
              </h2>
              <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed">
                {fundingGrantsIntro.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FUNDING STAGES — PREMIUM ──────────────────────────────── */}
      <section className="relative bg-[#E8E6E3] overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-28">
          <AnimatedSection>
            {/* Section header */}
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/5 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                <span className="text-[#8b5cf6] text-xs font-semibold uppercase tracking-wider">Stages</span>
              </div>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-snug mb-4">
                Funding by{" "}
                <span className="bg-gradient-to-r from-[#8b5cf6] to-[#2563EB] bg-clip-text text-transparent">
                  Growth Stage
                </span>
              </h2>
              <p className="text-[#5A5F72] text-base leading-relaxed">
                Tailored funding support from pre-seed through to Series B and R&amp;D incentives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-7">
              {fundingStages.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.stage}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="group relative rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-8 flex flex-col hover:-translate-y-1.5 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-500 overflow-hidden"
                  >
                    {/* Gradient top border */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}40)` }}
                    />

                    {/* Stage label + icon row */}
                    <div className="relative flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div
                          className="relative w-14 h-14 rounded-xl flex items-center justify-center"
                          style={{ background: `${item.color}12`, border: `1px solid ${item.color}20` }}
                        >
                          <Icon className="w-7 h-7" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <div>
                        {/* Glowing badge */}
                        <span
                          className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-1.5"
                          style={{
                            background: `${item.color}15`,
                            color: item.color,
                            border: `1px solid ${item.color}30`,
                          }}
                        >
                          {item.stage}
                        </span>
                        <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">{item.title}</h3>
                      </div>
                    </div>

                    <div className="relative h-px bg-[#D8D5CF] mb-5" />
                    <p className="relative text-sm text-[#5A5F72] leading-relaxed mb-6">{item.description}</p>
                    <ul className="relative space-y-3 mt-auto">
                      {item.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-[#3D4152]">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── APPLICATION PROCESS ────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-28">
          <AnimatedSection>
            {/* Section header */}
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/5 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                <span className="text-[#f59e0b] text-xs font-semibold uppercase tracking-wider">Process</span>
              </div>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-snug mb-4">
                Application Process
              </h2>
              <p className="text-[#5A5F72] text-base leading-relaxed">
                A transparent, structured pathway from application to funding.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applicationSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group relative rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-7 hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-500 overflow-hidden"
                  >
                    {/* Gradient top border */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${step.color}, ${step.color}40)` }}
                    />

                    {/* Numbered glowing circle + icon */}
                    <div className="relative flex items-center gap-3 mb-5">
                      <div className="relative">
                        <div
                          className="relative w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                          style={{
                            background: `linear-gradient(135deg, ${step.color}, ${step.color}90)`,
                            boxShadow: `0 0 20px -5px ${step.color}50`,
                          }}
                        >
                          {step.number}
                        </div>
                      </div>
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: `${step.color}10`, border: `1px solid ${step.color}15` }}
                      >
                        <Icon className="w-4.5 h-4.5" style={{ color: step.color }} strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="relative font-heading font-bold text-[#1C1F2E] text-base mb-2">{step.title}</h3>
                    <p className="relative text-[#5A5F72] text-sm leading-relaxed mb-5">{step.description}</p>

                    {/* Outcome badge */}
                    <div
                      className="relative inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{
                        background: `${step.color}10`,
                        color: step.color,
                        border: `1px solid ${step.color}20`,
                      }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{step.outcome}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ELIGIBILITY + BENEFITS SIDEBAR ─────────────────────────── */}
      <section className="relative bg-[#EEECEA] overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-28">
          <AnimatedSection>
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Eligibility */}
              <div className="lg:col-span-3">
                <div className="mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C41E3A]/20 bg-[#C41E3A]/5 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C41E3A]" />
                    <span className="text-[#C41E3A] text-xs font-semibold uppercase tracking-wider">Eligibility</span>
                  </div>
                  <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-snug mb-4">
                    Eligibility Criteria
                  </h2>
                  <p className="text-[#5A5F72] text-base leading-relaxed">
                    Understanding the requirements for funding and grant applications.
                  </p>
                </div>
                <div className="space-y-4">
                  {eligibilityCriteria.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.text}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.35, delay: i * 0.07 }}
                        className="group relative rounded-xl border border-[#D8D5CF] bg-white shadow-sm p-5 flex items-start gap-4 hover:-translate-y-0.5 hover:shadow-md hover:border-[#2563EB]/30 transition-all duration-500 overflow-hidden"
                      >
                        {/* Left accent border */}
                        <div
                          className="absolute top-3 bottom-3 left-0 w-1 rounded-r-full"
                          style={{ background: `linear-gradient(to bottom, ${item.color}, ${item.color}40)` }}
                        />
                        <div
                          className="relative flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ml-2"
                          style={{ background: `${item.color}10`, border: `1px solid ${item.color}15` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                        <span className="relative text-[#3D4152] text-sm leading-relaxed pt-2">{item.text}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Benefits Sidebar */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-[#D8D5CF] bg-white shadow-md p-8 sticky top-8 overflow-hidden relative">
                  {/* Subtle top glow */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2563EB] via-[#8b5cf6] to-[#22C55E]" />

                  <h3 className="relative font-heading font-bold text-[#1C1F2E] text-lg mb-5">Why Apply Through UPTECH</h3>
                  <div className="relative h-px bg-[#D8D5CF] mb-6" />
                  <ul className="relative space-y-6">
                    {benefits.map((benefit, i) => {
                      const Icon = benefit.icon;
                      return (
                        <motion.li
                          key={benefit.title}
                          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-30px" }}
                          transition={{ duration: 0.3, delay: i * 0.08 }}
                          className="relative flex items-start gap-3.5 pl-4"
                        >
                          {/* Left accent */}
                          <div
                            className="absolute top-1 bottom-1 left-0 w-1 rounded-r-full"
                            style={{ background: `linear-gradient(to bottom, ${benefit.color}, ${benefit.color}30)` }}
                          />
                          <div
                            className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                            style={{ background: `${benefit.color}10`, border: `1px solid ${benefit.color}15` }}
                          >
                            <Icon className="w-4.5 h-4.5" style={{ color: benefit.color }} strokeWidth={1.5} />
                          </div>
                          <div>
                            <span className="font-semibold text-[#1C1F2E] text-sm">{benefit.title}</span>
                            <p className="text-[#7A7E8F] text-xs leading-relaxed mt-1">{benefit.description}</p>
                          </div>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-28">
          <AnimatedSection>
            {/* Section header */}
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span className="text-[#2563EB] text-xs font-semibold uppercase tracking-wider">FAQ</span>
              </div>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-snug mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[#5A5F72] text-base leading-relaxed">
                Common questions about funding and grants.
              </p>
            </div>

            <FAQSection faqs={faqs} shouldReduceMotion={shouldReduceMotion} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="relative bg-[#131942] overflow-hidden">
        {/* Gradient glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-[#2563EB]/8 blur-[200px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/6 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#22C55E]/5 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-24 lg:py-32">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span className="text-[#2563EB] text-xs font-semibold uppercase tracking-wider">Apply Now</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                  Ready to Secure Funding for Your{" "}
                </span>
                <span className="bg-gradient-to-r from-[#2563EB] via-[#8b5cf6] to-[#22C55E] bg-clip-text text-transparent">
                  Innovation?
                </span>
              </h2>
              <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
                Explore funding opportunities and take your technology innovation to the next level with UPTECH&apos;s funding and grants programs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/membership" variant="primary" size="lg" showArrow className="!bg-[#2563EB] hover:!bg-[#1d4ed8]">
                  Become a Member
                </Button>
                <Button href="/contact" variant="glass" size="lg" showArrow>
                  Contact Us
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

/* ─── FAQ Section (light theme accordion) ─────────────────────────────── */

function FAQSection({
  faqs,
  shouldReduceMotion,
}: {
  faqs: { question: string; answer: string }[];
  shouldReduceMotion: boolean | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const color = faqColors[index % faqColors.length];
        return (
          <motion.div
            key={faq.question}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`rounded-xl border overflow-hidden transition-all duration-500 ${
              isOpen
                ? "border-[#D8D5CF] bg-[#F5F4F2] shadow-md"
                : "border-[#D8D5CF] bg-white hover:shadow-sm"
            }`}
            style={isOpen ? { borderLeft: `3px solid ${color}` } : {}}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center gap-4 p-5 lg:p-6 text-left"
            >
              <span
                className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300"
                style={
                  isOpen
                    ? {
                        background: color,
                        color: "#fff",
                        boxShadow: `0 0 15px -3px ${color}50`,
                      }
                    : { background: `${color}12`, color }
                }
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-heading font-semibold text-[#1C1F2E] text-base flex-1">
                {faq.question}
              </span>
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                style={isOpen ? { background: `${color}15` } : { background: "transparent" }}
              >
                <ChevronDown
                  className="w-4.5 h-4.5 transition-transform duration-300"
                  style={{
                    color: isOpen ? color : "#7A7E8F",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 lg:px-6 pb-5 lg:pb-6 pl-[4.25rem] lg:pl-[4.75rem]">
                    <div className="h-px bg-[#D8D5CF] mb-4" />
                    <p className="text-[#5A5F72] text-sm leading-[1.8]">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
