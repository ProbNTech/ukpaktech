"use client";

import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import {
  Rocket,
  Lightbulb,
  Users,
  TrendingUp,
  Handshake,
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
  { value: "30+", label: "Accelerator Programs", color: "#C41E3A" },
  { value: "£40M+", label: "Investment Facilitated", color: "#2563EB" },
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
    color: "#C41E3A",
  },
  {
    icon: Lightbulb,
    title: "Expert Mentorship",
    description:
      "You\u2019ll be guided by experienced entrepreneurs and advisors who have built and exited high-growth companies.",
    color: "#2563EB",
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
  { name: "Growth", icon: TrendingUp, color: "#C41E3A" },
  { name: "Talent", icon: Users, color: "#2563EB" },
  { name: "Data Science", icon: Database, color: "#C41E3A" },
  { name: "Strategic Partnerships", icon: Handshake, color: "#2563EB" },
  { name: "PR and Communications", icon: Megaphone, color: "#22C55E" },
  { name: "Engineering", icon: Code2, color: "#C41E3A" },
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
    color: "#C41E3A",
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
    color: "#C41E3A",
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
    color: "#C41E3A",
  },
];

/* ─── Component ─────────────────────────────────────────────────────── */

export default function CorporatePartnershipsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* ── Hero Section ── */}
      <PageHero
        label="UPTECH Service"
        title="Corporate & Accelerator Partnerships"
        subtitle="The UK-Pakistan Tech Council fosters strategic partnerships between technology startups, scale-ups, corporates, and accelerator programs across the UK and Pakistan. These collaborations help members access resources, mentorship, market opportunities, and industry expertise to accelerate growth and innovation."
        image="/image/london-images/partnership-collaboration.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/membership" variant="glass" showArrow>Become a Partner</Button>
          <Button href="/contact" variant="glass" showArrow>Get in Touch</Button>
        </div>
      </PageHero>

      {/* ================================================================
          STATS BAR
          ================================================================ */}
      <section className="relative bg-[#EEECEA]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
                  style={{ background: `linear-gradient(to right, ${stat.color}, ${stat.color}60)` }}
                />
                <div
                  className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <p className="text-[#5A5F72] text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FOUNDERS SECTION
          ================================================================ */}
      <section className="relative bg-[#EEECEA] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="max-w-4xl mb-8">
              <SectionHeader label="For Founders" title="Start Your Journey with a Unique Advantage" color="blue" />
              <p className="text-[#5A5F72] text-lg leading-relaxed mb-4">
                We provide entrepreneurs with pre-seed capital, support from a dedicated team, access to our corporate partners and membership to our global founder community.
              </p>
              <p className="text-[#5A5F72] text-lg leading-relaxed">
                You&apos;ll be part of a network of founders, investors, and partners who are all building the future of AI/IT Globally.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {founderBenefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="group relative bg-white rounded-2xl border border-[#D8D5CF] p-6 hover:-translate-y-1 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#2563EB]/30"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}00)` }}
                    />
                    <div className="relative z-[1]">
                      <div
                        className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                      >
                        <Icon className="w-6 h-6 relative z-[1]" style={{ color: item.color }} />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">
                        {item.title}
                      </h3>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-base text-[#5A5F72] leading-relaxed">
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
      <section className="relative bg-white overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22C55E]/5 rounded-full blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="max-w-4xl mb-8">
              <SectionHeader label="For Startups" title="Elevate Your Startup with the Backing of Our Team" subtitle="Elevate your startup with the backing of our team and partners. We're co-pilots on your entrepreneurial journey." color="green" />

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-[#D8D5CF] rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "#22C55E15", border: "1px solid #22C55E25" }}
                    >
                      <BarChart3 className="w-5 h-5 text-[#22C55E]" />
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base">
                      Raise Capital
                    </h3>
                  </div>
                  <p className="text-[#5A5F72] text-base leading-relaxed">
                    We invest capital together with a program of hands-on operational support.
                  </p>
                </div>
                <div className="bg-white border border-[#D8D5CF] rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "#C41E3A15", border: "1px solid #C41E3A25" }}
                    >
                      <Briefcase className="w-5 h-5 text-[#C41E3A]" />
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base">
                      Operational Support
                    </h3>
                  </div>
                  <p className="text-[#5A5F72] text-base leading-relaxed">
                    Receive six months 1:1 support from a dedicated team of experts.
                  </p>
                </div>
              </div>
            </div>

            {/* WE ARE HERE TO HELP YOU headline */}
            <div className="text-center mb-6">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl leading-snug">
                <span className="bg-gradient-to-r from-[#22C55E] via-[#2563EB] to-[#C41E3A] bg-clip-text text-transparent">
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
                    className="group relative bg-white rounded-2xl border border-[#D8D5CF] p-5 text-center hover:-translate-y-1 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#2563EB]/30"
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
                    <p className="text-[#3D4152] text-base font-medium">{area.name}</p>
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
      <section className="relative bg-[#EEECEA] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C41E3A]/5 rounded-full blur-[150px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="max-w-4xl mb-8">
              <SectionHeader label="Accelerators" title="Designed to Help Ambitious Founders Scale Beyond Limits" subtitle="Accelerators are designed with one goal in mind to help ambitious founders scale beyond limits." color="red" />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {acceleratorBenefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="group relative bg-white rounded-2xl border border-[#D8D5CF] p-7 hover:-translate-y-1 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#2563EB]/30"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}40)` }}
                    />
                    <div className="relative z-[1]">
                      <div className="relative mb-5">
                        <div
                          className="relative w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: `${item.color}10`, border: `1px solid ${item.color}15` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-3">
                        {item.title}
                      </h3>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-[#5A5F72] text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Accelerator details list */}
            <div className="bg-white border border-[#D8D5CF] rounded-2xl p-8 shadow-sm relative">
              <div className="absolute -top-px left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#C41E3A]/50 to-transparent" />
              <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">
                What Our Accelerator Partners Provide
              </h3>
              <div className="h-px bg-[#D8D5CF] mb-5" />
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
                      style={{ color: ["#2563EB", "#22C55E", "#C41E3A", "#2563EB", "#C41E3A", "#22C55E"][i] }}
                    />
                    <span className="text-[#5A5F72] text-base leading-relaxed">
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
      <section className="relative bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-3">
                <SectionHeader label="For Investors" title="Invest in the Tech Winners of Tomorrow, Today" color="blue" />

                <div className="space-y-4">
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
                      <p className="text-[#5A5F72] text-base leading-relaxed">
                        {benefit.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-[#D8D5CF] rounded-2xl p-8 shadow-md sticky top-8 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#C41E3A]" />
                  <h3 className="relative font-heading font-bold text-[#1C1F2E] text-lg mb-5">
                    Why Invest Through UPTECH
                  </h3>
                  <div className="relative h-px bg-[#D8D5CF] mb-6" />
                  <ul className="relative space-y-4">
                    <li className="flex items-start gap-3 text-[#5A5F72] text-base leading-relaxed">
                      <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#2563EB]" />
                      <span>Access curated portfolios of high-growth technology companies</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#5A5F72] text-base leading-relaxed">
                      <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#22C55E]" />
                      <span>AI-first companies solving real problems across multiple sectors</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#5A5F72] text-base leading-relaxed">
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
      <section className="relative bg-[#EEECEA] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#22C55E]/5 rounded-full blur-[150px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="max-w-4xl mb-8">
              <SectionHeader label="For Partners" title="Learn, Engage, Work with the Tech of Tomorrow, Today" color="red" />
              <div className="bg-white border border-[#D8D5CF] rounded-2xl p-6 mb-6 shadow-sm">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-3 uppercase tracking-wide">
                  Harness the Power of Early-Stage Startups &amp; Learn from Top Change Makers
                </h3>
                <p className="text-[#5A5F72] text-base leading-relaxed">
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
                    className="group relative bg-white rounded-2xl border border-[#D8D5CF] p-7 hover:-translate-y-1 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#2563EB]/30"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}40)` }}
                    />
                    <div className="relative z-[1]">
                      <div className="relative mb-5">
                        <div
                          className="relative w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: `${item.color}10`, border: `1px solid ${item.color}15` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-3">
                        {item.title}
                      </h3>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-[#5A5F72] text-base leading-relaxed">
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
      <section className="relative bg-[#131942]/80 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image src="/image/london-images/partnership-collaboration.jpg" alt="Corporate Partnerships background" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-[#2563EB]/8 blur-[200px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C41E3A]/6 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#22C55E]/5 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
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
                <span className="bg-gradient-to-r from-[#2563EB] via-[#C41E3A] to-[#22C55E] bg-clip-text text-transparent">
                  Tech Together?
                </span>
              </h2>

              <p className="text-white/50 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                Whether you&apos;re a founder, startup, investor, or corporate partner, we&apos;re here to help you go further, faster.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  href="/membership"
                  variant="primary"
                  size="lg"
                  showArrow
                  className="!bg-gradient-to-r !from-[#2563EB] !to-[#22C55E] hover:!shadow-[0_0_40px_rgba(37,99,235,0.3)]"
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
