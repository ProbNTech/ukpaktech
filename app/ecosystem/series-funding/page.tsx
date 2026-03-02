"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import {
  Rocket,
  TrendingUp,
  Globe,
  Target,
  CheckCircle2,
  ArrowUpRight,
  Shield,
  Sparkles,
  Building2,
  BarChart3,
  Users,
  Briefcase,
  Eye,
  Lightbulb,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";

/* ─── Data ──────────────────────────────────────────────────────────── */

const stats = [
  { value: "£75M+", label: "Series Funding Facilitated", color: "#2563EB" },
  { value: "40+", label: "Companies Scaled", color: "#22C55E" },
  { value: "30+", label: "VC & PE Partners", color: "#C41E3A" },
  { value: "15+", label: "Markets Accessed", color: "#2563EB" },
];

const scalingBenefits = [
  {
    icon: Target,
    title: "Series A & B Investor Access",
    description:
      "Access investors specializing in Series A and B funding across the UK and Europe.",
    color: "#2563EB",
  },
  {
    icon: Lightbulb,
    title: "Fundraising Strategy",
    description:
      "Receive guidance on fundraising strategy, valuation, and investor pitching.",
    color: "#22C55E",
  },
  {
    icon: Globe,
    title: "Cross-Border Expansion",
    description:
      "Explore cross-border investment opportunities for market expansion.",
    color: "#C41E3A",
  },
  {
    icon: Eye,
    title: "Global Visibility",
    description:
      "Build credibility and visibility among global investors and corporates.",
    color: "#2563EB",
  },
];

const investorBenefits = [
  {
    icon: Sparkles,
    title: "High-Potential Scaling Companies",
    description:
      "Discover high-potential, scaling technology companies ready for growth capital.",
    color: "#2563EB",
  },
  {
    icon: Shield,
    title: "Curated Opportunities",
    description:
      "Gain early access to curated investment opportunities across software, fintech, AI, cybersecurity, and digital innovation.",
    color: "#22C55E",
  },
  {
    icon: Users,
    title: "Direct Founder Access",
    description:
      "Engage directly with founders and executive teams for strategic partnerships.",
    color: "#C41E3A",
  },
];

const whyItMattersPoints = [
  { text: "Scale efficiently and strengthen market position", color: "#2563EB" },
  { text: "Move beyond early-stage validation into rapid growth", color: "#22C55E" },
  { text: "Expand across borders with strategic investor backing", color: "#C41E3A" },
  { text: "Access tailored guidance for Series A and B rounds", color: "#2563EB" },
];

const fundingProcess = [
  {
    number: "01",
    title: "Assessment",
    description: "We evaluate your growth stage, market position, and funding needs to develop a tailored strategy.",
    outcome: "Strategy defined",
    color: "#2563EB",
  },
  {
    number: "02",
    title: "Preparation",
    description: "Receive guidance on pitch decks, financial modelling, valuation, and investor-ready documentation.",
    outcome: "Investor-ready",
    color: "#22C55E",
  },
  {
    number: "03",
    title: "Matching",
    description: "We connect you with the right VCs, PE firms, and corporate investors aligned to your sector and stage.",
    outcome: "Investors matched",
    color: "#C41E3A",
  },
  {
    number: "04",
    title: "Closing",
    description: "Support through due diligence, term sheets, and deal closing to secure your Series A or B round.",
    outcome: "Round closed",
    color: "#2563EB",
  },
];

/* ─── Component ─────────────────────────────────────────────────────── */

export default function SeriesFundingPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#EEECEA]">
      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <PageHero
        label="Ecosystem / Series Funding"
        title="Series A & B Funding Opportunities"
        subtitle="The UK-Pakistan Tech Council supports high-growth technology companies in securing Series A and B funding to scale operations, expand into new markets, and accelerate innovation."
        image="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=2400&q=85&auto=format&fit=crop"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership">Access Series Funding</ShinyButton>
          <Button href="/contact" variant="glass">
            Speak to Our Team
          </Button>
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
                className="relative text-center bg-white border border-[#D8D5CF] rounded-xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
                  style={{ background: `linear-gradient(to right, ${stat.color}, ${stat.color}60)` }}
                />
                <p
                  className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="text-[#5A5F72] text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FOR SCALING COMPANIES
          ================================================================ */}
      <section className="relative bg-[#EEECEA] overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader label="For Scaling Companies" title="Scale Your Business with Strategic Funding" subtitle="Access the capital, connections, and guidance needed to take your company from growth-stage to market leader." color="blue" />

            <div className="grid md:grid-cols-2 gap-7">
              {scalingBenefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="group relative rounded-2xl border border-[#D8D5CF] bg-white shadow-sm p-8 flex flex-col hover:-translate-y-1.5 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-500 overflow-hidden"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}40)` }}
                    />

                    <div className="relative flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div
                          className="relative w-14 h-14 rounded-xl flex items-center justify-center"
                          style={{ background: `${item.color}12`, border: `1px solid ${item.color}20` }}
                        >
                          <Icon className="w-7 h-7" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">
                        {item.title}
                      </h3>
                    </div>

                    <div className="relative h-px bg-[#D8D5CF] mb-5" />
                    <p className="relative text-base text-[#5A5F72] leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          FOR INVESTORS
          ================================================================ */}
      <section className="relative bg-white overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader label="For Investors" title="Invest in Growth-Stage Winners" subtitle="Access curated, high-growth technology companies that have proven their market fit and are ready for significant scale." color="green" />

            <div className="grid md:grid-cols-3 gap-6">
              {investorBenefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="group relative bg-white rounded-2xl border border-[#D8D5CF] shadow-sm p-7 hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-500 overflow-hidden"
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
          FUNDING PROCESS
          ================================================================ */}
      <section className="relative bg-[#E8E6E3] overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader label="Process" title="How We Help You Close Your Round" subtitle="A structured pathway from assessment to closing your Series A or B funding round." color="red" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fundingProcess.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="group relative bg-white rounded-2xl border border-[#D8D5CF] shadow-sm p-6 hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-500 overflow-hidden"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: `linear-gradient(to right, ${step.color}, ${step.color}00)` }}
                  />

                  <div className="relative z-[1]">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="relative">
                        <div
                          className="relative w-12 h-12 rounded-full flex items-center justify-center text-white text-base font-bold border-2"
                          style={{
                            background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                            borderColor: `${step.color}60`,
                            color: step.color,
                          }}
                        >
                          {step.number}
                        </div>
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#5A5F72] text-base leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                      style={{ background: `${step.color}12`, border: `1px solid ${step.color}25` }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" style={{ color: step.color }} />
                      <span className="text-base font-semibold" style={{ color: step.color }}>
                        {step.outcome}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          WHY IT MATTERS
          ================================================================ */}
      <section className="relative bg-[#EEECEA] overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-3">
                <SectionHeader label="Why It Matters" title="Critical Funding for Rapid Growth" color="red" />
                <p className="text-[#5A5F72] text-lg leading-relaxed mb-6">
                  Series A and B funding is critical for companies moving beyond early-stage validation into rapid growth. By facilitating access to these funding rounds, the Council helps high-growth startups scale efficiently, strengthen their market position, and expand across borders.
                </p>

                <div className="space-y-4">
                  {whyItMattersPoints.map((point, i) => (
                    <motion.div
                      key={point.text}
                      className="group relative rounded-xl border border-[#D8D5CF] bg-white shadow-sm p-5 flex items-start gap-4 hover:-translate-y-0.5 hover:shadow-md hover:border-[#2563EB]/30 transition-all duration-500 overflow-hidden"
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.07 }}
                    >
                      <div
                        className="absolute top-3 bottom-3 left-0 w-1 rounded-r-full"
                        style={{ background: `linear-gradient(to bottom, ${point.color}, ${point.color}40)` }}
                      />
                      <div
                        className="relative flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ml-2"
                        style={{ background: `${point.color}10`, border: `1px solid ${point.color}15` }}
                      >
                        <CheckCircle2 className="w-5 h-5" style={{ color: point.color }} strokeWidth={1.5} />
                      </div>
                      <span className="relative text-[#3D4152] text-base leading-relaxed pt-2">
                        {point.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-[#D8D5CF] bg-white shadow-md p-8 sticky top-8 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#C41E3A]" />

                  <h3 className="relative font-heading font-bold text-[#1C1F2E] text-lg mb-5">
                    UPTECH Advantage
                  </h3>
                  <div className="relative h-px bg-[#D8D5CF] mb-6" />
                  <ul className="relative space-y-5">
                    {[
                      { title: "VC & PE Networks", desc: "Direct access to venture capital and private equity firms specializing in growth-stage investment.", color: "#2563EB" },
                      { title: "Cross-Border Funding", desc: "Investment networks spanning UK, Pakistan, Europe, and beyond.", color: "#22C55E" },
                      { title: "Strategic Guidance", desc: "Expert advisory on valuation, deal structuring, and investor engagement.", color: "#C41E3A" },
                      { title: "Market Expansion", desc: "Support for cross-border market entry alongside your funding round.", color: "#2563EB" },
                    ].map((item, i) => (
                      <motion.li
                        key={item.title}
                        className="relative flex items-start gap-3.5 pl-4"
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.08 }}
                      >
                        <div
                          className="absolute top-1 bottom-1 left-0 w-1 rounded-r-full"
                          style={{ background: `linear-gradient(to bottom, ${item.color}, ${item.color}30)` }}
                        />
                        <div
                          className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                          style={{ background: `${item.color}10`, border: `1px solid ${item.color}15` }}
                        >
                          <ArrowUpRight className="w-4 h-4" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                        <div>
                          <span className="font-semibold text-[#1C1F2E] text-base">{item.title}</span>
                          <p className="text-[#7A7E8F] text-base leading-relaxed mt-1">{item.desc}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          CTA SECTION
          ================================================================ */}
      <GlobalCTA
        label="Scale Now"
        title="Fuel Growth. Expand Markets. Transform the Tech Ecosystem."
        subtitle="Whether you are a scaling company seeking Series A or B funding, or an investor looking for growth-stage opportunities, the UK–Pakistan Tech Council is your partner in driving cross-border innovation."
        primaryButtonText="Apply for Membership"
        primaryButtonLink="/membership/apply"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
