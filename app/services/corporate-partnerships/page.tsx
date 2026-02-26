"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import {
  Rocket,
  Lightbulb,
  Users,
  TrendingUp,
  Handshake,
  Zap,
  Target,
  Globe,
  Building2,
  CheckCircle2,
  ArrowUpRight,
  BarChart3,
  Cpu,
  Briefcase,
  PenTool,
  Megaphone,
  Code2,
  Database,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

/* ─── Data ──────────────────────────────────────────────────────────── */

const stats = [
  { value: "50+", label: "Corporate Partners", color: "#2563EB" },
  { value: "120+", label: "Startups Accelerated", color: "#22C55E" },
  { value: "30+", label: "Accelerator Programs", color: "#8b5cf6" },
  { value: "£40M+", label: "Investment Facilitated", color: "#f59e0b" },
];

const founderBenefits = [
  {
    icon: Rocket,
    title: "Accelerate with Rapid Technical Development",
    description:
      "We help you get your AI/IT product to market quickly with hands-on support from MVP builds to scaling your tech stack.",
    color: "#2563EB",
  },
  {
    icon: Users,
    title: "Continuous Support from Experienced Entrepreneurs",
    description: "Get advice from people who\u2019ve actually done it.",
    color: "#22C55E",
  },
  {
    icon: Handshake,
    title: "Holistic Growth Support",
    description: "Our investment comes with hands-on help.",
    color: "#8b5cf6",
  },
  {
    icon: Lightbulb,
    title: "Expert Mentorship",
    description:
      "You\u2019ll be guided by experienced entrepreneurs and advisors who have built and exited high-growth companies.",
    color: "#f59e0b",
  },
  {
    icon: TrendingUp,
    title: "Pathway to Fast Growth",
    description:
      "Our aim is to invest in companies that demonstrate potential to 10x their growth.",
    color: "#C41E3A",
  },
];

const operationalAreas = [
  { name: "Product & Design", icon: PenTool, color: "#2563EB" },
  { name: "Fundraising", icon: BarChart3, color: "#22C55E" },
  { name: "Growth", icon: TrendingUp, color: "#8b5cf6" },
  { name: "Talent", icon: Users, color: "#f59e0b" },
  { name: "Data Science", icon: Database, color: "#C41E3A" },
  { name: "Strategic Partnerships", icon: Handshake, color: "#2563EB" },
  { name: "PR and Communications", icon: Megaphone, color: "#22C55E" },
  { name: "Engineering", icon: Code2, color: "#8b5cf6" },
];

const acceleratorBenefits = [
  {
    icon: Globe,
    title: "Global Expansion Made Easy",
    description:
      "Get access to all the resources you need to reach new horizons.",
    color: "#2563EB",
  },
  {
    icon: Users,
    title: "A Network Beyond What Money Can Buy",
    description:
      "Our industry focus allows founders to get valuable introductions.",
    color: "#22C55E",
  },
  {
    icon: Building2,
    title: "Corporate Partnerships",
    description:
      "Access to leading innovators in the world\u2019s most influential companies.",
    color: "#8b5cf6",
  },
];

const acceleratorDetails = [
  "Connecting founders with senior executives for strategic guidance",
  "Data and insights teams for market intelligence",
  "Mentorship from industry leaders and domain experts",
  "Product distribution channels through corporate networks",
  "Commercial pilots with enterprise customers",
  "Capital investment for scaling operations",
];

const investorBenefits = [
  {
    text: "We provide investors with the ability to invest in the tech winners of tomorrow, today.",
    color: "#2563EB",
  },
  {
    text: "Each investment gives access to a portfolio of startups with leading edge technologies.",
    color: "#22C55E",
  },
  {
    text: "We back AI-first companies solving real problems in sectors like FinTech, MedTech, Agri Tech and beyond.",
    color: "#8b5cf6",
  },
];

const partnerOfferings = [
  {
    icon: Lightbulb,
    title: "Engage and Position Yourself at the Heart of Innovation",
    description:
      "Work directly with early-stage startups and learn from top change makers.",
    color: "#2563EB",
  },
  {
    icon: Cpu,
    title: "Work with Tech Visionaries",
    description:
      "Collaborate with founders building the future of technology.",
    color: "#22C55E",
  },
  {
    icon: Target,
    title: "Invest in Startups with Proven Technology and Business Models",
    description:
      "Identify high-potential ventures with validated products and market fit.",
    color: "#8b5cf6",
  },
];

/* ─── Component ─────────────────────────────────────────────────────── */

export default function CorporatePartnershipsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#0B0F1A]">
      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <Image
          src="/image/london-images/partnership-collaboration.jpg"
          alt="Corporate and Accelerator Partnerships"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0B0F1A]/90 to-[#0B0F1A]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-[#0B0F1A]/40" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-[#8b5cf6]/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 py-32">
          <motion.div
            className="max-w-3xl"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 backdrop-blur-sm mb-6"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span className="text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
                Services / Partnerships
              </span>
            </motion.div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6">
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Corporate &amp;{" "}
              </span>
              <span className="bg-gradient-to-r from-[#2563EB] via-[#8b5cf6] to-[#22C55E] bg-clip-text text-transparent">
                Accelerator
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">
                Partnerships
              </span>
            </h1>

            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 max-w-2xl">
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                The UK-Pakistan Tech Council fosters strategic partnerships between technology startups, scale-ups, corporates, and accelerator programs across the UK and Pakistan. These collaborations help members access resources, mentorship, market opportunities, and industry expertise to accelerate growth and innovation.
              </p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button href="/membership" variant="glass" showArrow>
                Become a Partner
              </Button>
              <Button
                href="/contact"
                variant="ghost"
                className="!text-white/70 !decoration-white/30 hover:!text-[#2563EB]"
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0E1221] to-transparent" />
      </section>

      {/* ================================================================
          STATS BAR
          ================================================================ */}
      <section className="relative z-[1] bg-[#0E1221]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="relative text-center backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 overflow-hidden group hover:bg-white/[0.06] transition-all duration-500"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: `linear-gradient(to right, ${stat.color}, ${stat.color}00)` }}
                />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-[40px] opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: stat.color }}
                />
                <p
                  className="relative font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="relative text-white/50 text-xs sm:text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FOUNDERS SECTION
          ================================================================ */}
      <section className="relative bg-[#0B0F1A] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-28">
          <AnimatedSection>
            <div className="max-w-4xl mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span className="text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
                  For Founders
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-snug mb-6">
                Start Your Journey with a{" "}
                <span className="bg-gradient-to-r from-[#2563EB] to-[#8b5cf6] bg-clip-text text-transparent">
                  Unique Advantage
                </span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-5">
                We provide entrepreneurs with pre-seed capital, support from a dedicated team, access to our corporate partners and membership to our global founder community.
              </p>
              <p className="text-white/50 text-base leading-relaxed">
                You&apos;ll be part of a network of founders, investors, and partners who are all building the future of AI/IT Globally.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {founderBenefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="group relative backdrop-blur-md bg-white/[0.03] rounded-2xl border border-white/[0.06] p-6 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div
                      className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}30, transparent 50%, ${item.color}15)`,
                      }}
                    />
                    <div
                      className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                      style={{ background: item.color }}
                    />
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}00)` }}
                    />
                    <div className="relative z-[1]">
                      <div
                        className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                      >
                        <div
                          className="absolute inset-[-8px] rounded-xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500"
                          style={{ background: item.color }}
                        />
                        <Icon className="w-6 h-6 relative z-[1]" style={{ color: item.color }} />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-white mb-2">
                        {item.title}
                      </h3>
                      <div className="h-px bg-white/10 mb-3" />
                      <p className="text-sm text-white/50 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          STARTUPS SECTION
          ================================================================ */}
      <section className="relative bg-[#0E1221] overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22C55E]/5 rounded-full blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-28">
          <AnimatedSection>
            <div className="max-w-4xl mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#22C55E]/20 bg-[#22C55E]/5 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                <span className="text-[#22C55E] text-xs font-semibold uppercase tracking-wider">
                  For Startups
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-snug mb-6">
                Elevate Your Startup with the{" "}
                <span className="bg-gradient-to-r from-[#22C55E] to-[#2563EB] bg-clip-text text-transparent">
                  Backing of Our Team
                </span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-5">
                Elevate your startup with the backing of our team and partners. We&apos;re co-pilots on your entrepreneurial journey.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "#22C55E15", border: "1px solid #22C55E25" }}
                    >
                      <BarChart3 className="w-5 h-5 text-[#22C55E]" />
                    </div>
                    <h3 className="font-heading font-bold text-white text-base">
                      Raise Capital
                    </h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    We invest capital together with a program of hands-on operational support.
                  </p>
                </div>
                <div className="backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "#8b5cf615", border: "1px solid #8b5cf625" }}
                    >
                      <Briefcase className="w-5 h-5 text-[#8b5cf6]" />
                    </div>
                    <h3 className="font-heading font-bold text-white text-base">
                      Operational Support
                    </h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Receive six months 1:1 support from a dedicated team of experts.
                  </p>
                </div>
              </div>
            </div>

            {/* WE ARE HERE TO HELP YOU headline */}
            <div className="text-center mb-10">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl leading-snug">
                <span className="bg-gradient-to-r from-[#22C55E] via-[#2563EB] to-[#8b5cf6] bg-clip-text text-transparent">
                  WE ARE HERE TO HELP YOU GO FURTHER, FASTER
                </span>
              </h3>
            </div>

            {/* Operational areas grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {operationalAreas.map((area, i) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.name}
                    className="group relative backdrop-blur-md bg-white/[0.03] rounded-2xl border border-white/[0.06] p-5 text-center hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${area.color}, ${area.color}00)` }}
                    />
                    <div
                      className="relative w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                      style={{ background: `${area.color}15`, border: `1px solid ${area.color}25` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: area.color }} />
                    </div>
                    <p className="text-white/60 text-sm font-medium">{area.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          ACCELERATORS SECTION
          ================================================================ */}
      <section className="relative bg-[#131942] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8b5cf6]/5 rounded-full blur-[150px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-28">
          <AnimatedSection>
            <div className="max-w-4xl mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/5 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                <span className="text-[#8b5cf6] text-xs font-semibold uppercase tracking-wider">
                  Accelerators
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-snug mb-6">
                Designed to Help Ambitious Founders{" "}
                <span className="bg-gradient-to-r from-[#8b5cf6] to-[#22C55E] bg-clip-text text-transparent">
                  Scale Beyond Limits
                </span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                Accelerators are designed with one goal in mind to help ambitious founders scale beyond limits.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {acceleratorBenefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="group relative backdrop-blur-md bg-white/[0.03] rounded-2xl border border-white/[0.06] p-7 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}40)` }}
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(ellipse at top, ${item.color}0a, transparent 70%)` }}
                    />
                    <div className="relative z-[1]">
                      <div className="relative mb-5">
                        <div
                          className="absolute inset-[-8px] rounded-xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 pointer-events-none"
                          style={{ background: item.color }}
                        />
                        <div
                          className="relative w-13 h-13 rounded-xl flex items-center justify-center"
                          style={{ background: `${item.color}10`, border: `1px solid ${item.color}15` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-white text-base mb-3">
                        {item.title}
                      </h3>
                      <div className="h-px bg-white/[0.06] mb-3" />
                      <p className="text-white/45 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Accelerator details list */}
            <div className="backdrop-blur-md bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8">
              <div className="absolute -top-px left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#8b5cf6]/50 to-transparent" />
              <h3 className="font-heading font-bold text-white text-lg mb-5">
                What Our Accelerator Partners Provide
              </h3>
              <div className="h-px bg-white/10 mb-5" />
              <div className="grid md:grid-cols-2 gap-4">
                {acceleratorDetails.map((detail, i) => (
                  <motion.div
                    key={detail}
                    className="flex items-start gap-3"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                  >
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: ["#2563EB", "#22C55E", "#8b5cf6", "#f59e0b", "#C41E3A", "#2563EB"][i] }}
                    />
                    <span className="text-white/55 text-sm leading-relaxed">
                      {detail}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          INVESTORS SECTION
          ================================================================ */}
      <section className="relative bg-[#0B0F1A] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#f59e0b]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-28">
          <AnimatedSection>
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/5 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                  <span className="text-[#f59e0b] text-xs font-semibold uppercase tracking-wider">
                    For Investors
                  </span>
                </div>
                <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-snug mb-6">
                  Invest in the Tech Winners of{" "}
                  <span className="bg-gradient-to-r from-[#f59e0b] to-[#22C55E] bg-clip-text text-transparent">
                    Tomorrow, Today
                  </span>
                </h2>

                <div className="space-y-5">
                  {investorBenefits.map((benefit, i) => (
                    <motion.div
                      key={benefit.text}
                      className="relative flex items-start gap-3 pl-4"
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <div
                        className="absolute top-0 bottom-0 left-0 w-1 rounded-r-full"
                        style={{ background: `linear-gradient(to bottom, ${benefit.color}, ${benefit.color}40)` }}
                      />
                      <div
                        className="relative flex-shrink-0 mt-0.5"
                      >
                        <div
                          className="relative w-7 h-7 rounded-xl flex items-center justify-center"
                          style={{ background: `${benefit.color}15`, border: `1px solid ${benefit.color}30` }}
                        >
                          <CheckCircle2 className="w-4 h-4" style={{ color: benefit.color }} strokeWidth={2} />
                        </div>
                      </div>
                      <p className="text-white/55 text-sm leading-relaxed">
                        {benefit.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2">
                <div className="backdrop-blur-md bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 sticky top-8 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#f59e0b] via-[#22C55E] to-[#2563EB]" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-gradient-to-b from-[#f59e0b]/10 to-transparent blur-xl pointer-events-none" />
                  <h3 className="relative font-heading font-bold text-white text-lg mb-5">
                    Why Invest Through UPTECH
                  </h3>
                  <div className="relative h-px bg-white/[0.06] mb-6" />
                  <ul className="relative space-y-4">
                    <li className="flex items-start gap-3 text-white/50 text-sm leading-relaxed">
                      <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#f59e0b]" />
                      <span>Access curated portfolios of high-growth technology companies</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/50 text-sm leading-relaxed">
                      <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#22C55E]" />
                      <span>AI-first companies solving real problems across multiple sectors</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/50 text-sm leading-relaxed">
                      <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#2563EB]" />
                      <span>Cross-border investment opportunities in FinTech, MedTech, Agri Tech and beyond</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          PARTNERS SECTION
          ================================================================ */}
      <section className="relative bg-[#0E1221] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#22C55E]/5 rounded-full blur-[150px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-28">
          <AnimatedSection>
            <div className="max-w-4xl mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C41E3A]/20 bg-[#C41E3A]/5 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C41E3A]" />
                <span className="text-[#C41E3A] text-xs font-semibold uppercase tracking-wider">
                  For Partners
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-snug mb-6">
                Learn, Engage, Work with the{" "}
                <span className="bg-gradient-to-r from-[#C41E3A] to-[#f59e0b] bg-clip-text text-transparent">
                  Tech of Tomorrow, Today
                </span>
              </h2>
              <div className="backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 mb-6">
                <h3 className="font-heading font-bold text-white text-base mb-3 uppercase tracking-wide">
                  Harness the Power of Early-Stage Startups &amp; Learn from Top Change Makers
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Our goal is to foster an inclusive ecosystem where everyone can partake in and reap the rewards from entrepreneurial successes.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {partnerOfferings.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="group relative backdrop-blur-md bg-white/[0.03] rounded-2xl border border-white/[0.06] p-7 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}40)` }}
                    />
                    <div
                      className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}30, transparent 50%, ${item.color}15)`,
                      }}
                    />
                    <div className="relative z-[1]">
                      <div className="relative mb-5">
                        <div
                          className="absolute inset-[-8px] rounded-xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 pointer-events-none"
                          style={{ background: item.color }}
                        />
                        <div
                          className="relative w-13 h-13 rounded-xl flex items-center justify-center"
                          style={{ background: `${item.color}10`, border: `1px solid ${item.color}15` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-white text-base mb-3">
                        {item.title}
                      </h3>
                      <div className="h-px bg-white/[0.06] mb-3" />
                      <p className="text-white/45 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          CTA SECTION
          ================================================================ */}
      <section className="relative bg-[#131942] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-[#2563EB]/8 blur-[200px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/6 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#22C55E]/5 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-24 lg:py-32">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 backdrop-blur-sm mb-6"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                <span className="text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
                  Partner With Us
                </span>
              </motion.div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                  Ready to Build the Future of{" "}
                </span>
                <span className="bg-gradient-to-r from-[#2563EB] via-[#8b5cf6] to-[#22C55E] bg-clip-text text-transparent">
                  Tech Together?
                </span>
              </h2>

              <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Whether you&apos;re a founder, startup, investor, or corporate partner, we&apos;re here to help you go further, faster.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  href="/membership"
                  variant="primary"
                  size="lg"
                  showArrow
                  className="!bg-gradient-to-r !from-[#2563EB] !to-[#8b5cf6] hover:!shadow-[0_0_40px_rgba(37,99,235,0.3)]"
                >
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
