"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
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
  return (
    <>
      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <PageHero
        image="/image/london-images/partnership-collaboration.jpg"
        title="Corporate & Accelerator Partnerships"
        subtitle="The UK-Pakistan Tech Council fosters strategic partnerships between technology startups, scale-ups, corporates, and accelerator programs across the UK and Pakistan. These collaborations help members access resources, mentorship, market opportunities, and industry expertise to accelerate growth and innovation."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/membership" variant="primary" showArrow>
            Become a Partner
          </Button>
          <Button href="/contact" variant="ghost" className="!text-white/80 hover:!text-white">
            Get in Touch
          </Button>
        </div>
      </PageHero>

      {/* ================================================================
          STATS BAR
          ================================================================ */}
      <section className="bg-[#1C1F2E]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FOUNDERS SECTION
          ================================================================ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="For Founders"
            title="Start Your Journey with a Unique Advantage"
            subtitle="We provide entrepreneurs with pre-seed capital, support from a dedicated team, access to our corporate partners and membership to our global founder community. You'll be part of a network of founders, investors, and partners who are all building the future of AI/IT Globally."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {founderBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-[#D8D5CF] rounded p-6 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${item.color}12` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">
                    {item.title}
                  </h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ================================================================
          STARTUPS SECTION
          ================================================================ */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="For Startups"
            title="Elevate Your Startup with the Backing of Our Team"
            subtitle="Elevate your startup with the backing of our team and partners. We're co-pilots on your entrepreneurial journey."
          />

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white border border-[#D8D5CF] rounded p-6">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "#22C55E12" }}
                >
                  <BarChart3 className="w-5 h-5 text-[#22C55E]" />
                </div>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base">
                  Raise Capital
                </h3>
              </div>
              <p className="text-[#3D4152] text-sm leading-relaxed">
                We invest capital together with a program of hands-on operational support.
              </p>
            </div>
            <div className="bg-white border border-[#D8D5CF] rounded p-6">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "#8b5cf612" }}
                >
                  <Briefcase className="w-5 h-5 text-[#8b5cf6]" />
                </div>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base">
                  Operational Support
                </h3>
              </div>
              <p className="text-[#3D4152] text-sm leading-relaxed">
                Receive six months 1:1 support from a dedicated team of experts.
              </p>
            </div>
          </div>

          {/* WE ARE HERE TO HELP YOU headline */}
          <div className="text-center mb-10">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#1C1F2E] leading-snug">
              WE ARE HERE TO HELP YOU GO FURTHER, FASTER
            </h3>
          </div>

          {/* Operational areas grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {operationalAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.name}
                  className="bg-white border border-[#D8D5CF] rounded p-5 text-center hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: `${area.color}12` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: area.color }} />
                  </div>
                  <p className="text-[#3D4152] text-sm font-medium">{area.name}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ================================================================
          ACCELERATORS SECTION
          ================================================================ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Accelerators"
            title="Designed to Help Ambitious Founders Scale Beyond Limits"
            subtitle="Accelerators are designed with one goal in mind to help ambitious founders scale beyond limits."
          />

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {acceleratorBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-[#D8D5CF] rounded p-8 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${item.color}12` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-3">
                    {item.title}
                  </h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-[#3D4152] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Accelerator details list */}
          <div className="bg-white border border-[#D8D5CF] rounded p-8">
            <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">
              What Our Accelerator Partners Provide
            </h3>
            <div className="h-px bg-[#D8D5CF] mb-5" />
            <div className="grid md:grid-cols-2 gap-4">
              {acceleratorDetails.map((detail, i) => (
                <div key={detail} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: ["#2563EB", "#22C55E", "#8b5cf6", "#f59e0b", "#C41E3A", "#2563EB"][i] }}
                  />
                  <span className="text-[#3D4152] text-sm leading-relaxed">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ================================================================
          INVESTORS SECTION
          ================================================================ */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <SectionHeader
                label="For Investors"
                title="Invest in the Tech Winners of Tomorrow, Today"
              />

              <div className="space-y-5">
                {investorBenefits.map((benefit) => (
                  <div
                    key={benefit.text}
                    className="relative flex items-start gap-3 pl-4"
                  >
                    <div
                      className="absolute top-0 bottom-0 left-0 w-1 rounded-r-full"
                      style={{ background: benefit.color }}
                    />
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded-xl flex items-center justify-center mt-0.5"
                      style={{ background: `${benefit.color}12` }}
                    >
                      <CheckCircle2 className="w-4 h-4" style={{ color: benefit.color }} strokeWidth={2} />
                    </div>
                    <p className="text-[#3D4152] text-sm leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#D8D5CF] rounded p-8 sticky top-8">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">
                  Why Invest Through UPTECH
                </h3>
                <div className="h-px bg-[#D8D5CF] mb-6" />
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[#3D4152] text-sm leading-relaxed">
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#f59e0b]" />
                    <span>Access curated portfolios of high-growth technology companies</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#3D4152] text-sm leading-relaxed">
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#22C55E]" />
                    <span>AI-first companies solving real problems across multiple sectors</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#3D4152] text-sm leading-relaxed">
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#2563EB]" />
                    <span>Cross-border investment opportunities in FinTech, MedTech, Agri Tech and beyond</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ================================================================
          PARTNERS SECTION
          ================================================================ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="For Partners"
            title="Learn, Engage, Work with the Tech of Tomorrow, Today"
          />

          <div className="bg-white border border-[#D8D5CF] rounded p-6 mb-10">
            <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-3 uppercase tracking-wide">
              Harness the Power of Early-Stage Startups &amp; Learn from Top Change Makers
            </h3>
            <p className="text-[#3D4152] text-sm leading-relaxed">
              Our goal is to foster an inclusive ecosystem where everyone can partake in and reap the rewards from entrepreneurial successes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partnerOfferings.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-[#D8D5CF] rounded p-8 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${item.color}12` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-3">
                    {item.title}
                  </h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-[#3D4152] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ================================================================
          CTA SECTION
          ================================================================ */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-[#2563EB] mb-4 tracking-wide uppercase">
              Partner With Us
            </p>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white mb-6">
              Ready to Build the Future of Tech Together?
            </h2>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you&apos;re a founder, startup, investor, or corporate partner, we&apos;re here to help you go further, faster.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>
                Become a Member
              </Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>
                Contact Us
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
