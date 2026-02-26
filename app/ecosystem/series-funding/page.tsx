"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
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

/* ─── Data ──────────────────────────────────────────────────────────── */

const stats = [
  { value: "£75M+", label: "Series Funding Facilitated", color: "#2563EB" },
  { value: "40+", label: "Companies Scaled", color: "#22C55E" },
  { value: "30+", label: "VC & PE Partners", color: "#8b5cf6" },
  { value: "15+", label: "Markets Accessed", color: "#f59e0b" },
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
    color: "#8b5cf6",
  },
  {
    icon: Eye,
    title: "Global Visibility",
    description:
      "Build credibility and visibility among global investors and corporates.",
    color: "#f59e0b",
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
    color: "#8b5cf6",
  },
];

const whyItMattersPoints = [
  { text: "Scale efficiently and strengthen market position", color: "#2563EB" },
  { text: "Move beyond early-stage validation into rapid growth", color: "#22C55E" },
  { text: "Expand across borders with strategic investor backing", color: "#8b5cf6" },
  { text: "Access tailored guidance for Series A and B rounds", color: "#f59e0b" },
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
    color: "#8b5cf6",
  },
  {
    number: "04",
    title: "Closing",
    description: "Support through due diligence, term sheets, and deal closing to secure your Series A or B round.",
    outcome: "Round closed",
    color: "#f59e0b",
  },
];

/* ─── Component ─────────────────────────────────────────────────────── */

export default function SeriesFundingPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#0B0F1A]">
      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <Image
          src="/image/london-images/innovation-ideas.jpg"
          alt="Series A and B Funding Opportunities"
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
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#8b5cf6]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-[#2563EB]/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 py-32">
          <motion.div
            className="max-w-3xl"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 backdrop-blur-sm mb-6"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse" />
              <span className="text-[#8b5cf6] text-xs font-semibold uppercase tracking-wider">
                Ecosystem / Series Funding
              </span>
            </motion.div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6">
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Series A &amp; B{" "}
              </span>
              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#2563EB] to-[#22C55E] bg-clip-text text-transparent">
                Funding
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">
                Opportunities
              </span>
            </h1>

            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 max-w-2xl">
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                The UK-Pakistan Tech Council supports high-growth technology companies in securing Series A and B funding to scale operations, expand into new markets, and accelerate innovation. We connect scaling startups and scale-ups with venture capitalists, private equity firms, corporate investors, and cross-border funding networks, providing the guidance and access needed to close strategic investment rounds.
              </p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button href="/membership" variant="glass" showArrow>
                Access Series Funding
              </Button>
              <Button
                href="/contact"
                variant="ghost"
                className="!text-white/70 !decoration-white/30 hover:!text-[#8b5cf6]"
              >
                Speak to Our Team
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
          FOR SCALING COMPANIES
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
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span className="text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
                  For Scaling Companies
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-snug mb-6">
                Scale Your Business with{" "}
                <span className="bg-gradient-to-r from-[#2563EB] to-[#8b5cf6] bg-clip-text text-transparent">
                  Strategic Funding
                </span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                Access the capital, connections, and guidance needed to take your company from growth-stage to market leader.
              </p>
            </div>

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
                    className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm p-8 flex flex-col hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}40)` }}
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(ellipse at top, ${item.color}0c, transparent 70%)` }}
                    />
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ boxShadow: `inset 0 0 0 1px ${item.color}25, 0 0 40px -10px ${item.color}20` }}
                    />

                    <div className="relative flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div
                          className="absolute inset-[-8px] rounded-xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 pointer-events-none"
                          style={{ background: item.color }}
                        />
                        <div
                          className="relative w-14 h-14 rounded-xl flex items-center justify-center"
                          style={{ background: `${item.color}12`, border: `1px solid ${item.color}20` }}
                        >
                          <Icon className="w-7 h-7" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-white">
                        {item.title}
                      </h3>
                    </div>

                    <div className="relative h-px bg-white/[0.06] mb-5" />
                    <p className="relative text-sm text-white/45 leading-relaxed">
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
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#22C55E]/20 bg-[#22C55E]/5 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                <span className="text-[#22C55E] text-xs font-semibold uppercase tracking-wider">
                  For Investors
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-snug mb-4">
                Invest in{" "}
                <span className="bg-gradient-to-r from-[#22C55E] to-[#f59e0b] bg-clip-text text-transparent">
                  Growth-Stage Winners
                </span>
              </h2>
              <p className="text-white/45 text-base leading-relaxed">
                Access curated, high-growth technology companies that have proven their market fit and are ready for significant scale.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {investorBenefits.map((item, i) => {
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
                    <div
                      className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                      style={{ background: item.color }}
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
          FUNDING PROCESS
          ================================================================ */}
      <section className="relative bg-[#131942] overflow-hidden">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none hidden lg:block" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-28">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/5 mb-5 mx-auto">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                <span className="text-[#f59e0b] text-xs font-semibold uppercase tracking-wider">
                  Process
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-snug mb-4">
                How We Help You{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] to-[#22C55E] bg-clip-text text-transparent">
                  Close Your Round
                </span>
              </h2>
              <p className="text-white/50 text-base max-w-2xl mx-auto">
                A structured pathway from assessment to closing your Series A or B funding round.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fundingProcess.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="group relative backdrop-blur-md bg-white/[0.03] rounded-2xl border border-white/[0.06] p-6 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
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
                          className="absolute inset-[-4px] rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                          style={{ background: step.color }}
                        />
                        <div
                          className="relative w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold border-2"
                          style={{
                            background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                            borderColor: `${step.color}60`,
                          }}
                        >
                          {step.number}
                        </div>
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-white text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                      style={{ background: `${step.color}12`, border: `1px solid ${step.color}25` }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" style={{ color: step.color }} />
                      <span className="text-xs font-semibold" style={{ color: step.color }}>
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
      <section className="relative bg-[#0B0F1A] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-28">
          <AnimatedSection>
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C41E3A]/20 bg-[#C41E3A]/5 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C41E3A]" />
                  <span className="text-[#C41E3A] text-xs font-semibold uppercase tracking-wider">
                    Why It Matters
                  </span>
                </div>
                <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-snug mb-6">
                  Critical Funding for{" "}
                  <span className="bg-gradient-to-r from-[#C41E3A] to-[#8b5cf6] bg-clip-text text-transparent">
                    Rapid Growth
                  </span>
                </h2>
                <p className="text-white/50 text-base leading-relaxed mb-8">
                  Series A and B funding is critical for companies moving beyond early-stage validation into rapid growth. By facilitating access to these funding rounds, the Council helps high-growth startups scale efficiently, strengthen their market position, and expand across borders.
                </p>

                <div className="space-y-4">
                  {whyItMattersPoints.map((point, i) => (
                    <motion.div
                      key={point.text}
                      className="group relative rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-5 flex items-start gap-4 hover:-translate-y-0.5 transition-all duration-500 overflow-hidden"
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
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: `radial-gradient(ellipse at left, ${point.color}08, transparent 60%)` }}
                      />
                      <div
                        className="relative flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ml-2"
                        style={{ background: `${point.color}10`, border: `1px solid ${point.color}15` }}
                      >
                        <CheckCircle2 className="w-5 h-5" style={{ color: point.color }} strokeWidth={1.5} />
                      </div>
                      <span className="relative text-white/55 text-sm leading-relaxed pt-2">
                        {point.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm p-8 sticky top-8 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8b5cf6] via-[#2563EB] to-[#22C55E]" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-gradient-to-b from-[#8b5cf6]/10 to-transparent blur-xl pointer-events-none" />

                  <h3 className="relative font-heading font-bold text-white text-lg mb-5">
                    UPTECH Advantage
                  </h3>
                  <div className="relative h-px bg-white/[0.06] mb-6" />
                  <ul className="relative space-y-5">
                    {[
                      { title: "VC & PE Networks", desc: "Direct access to venture capital and private equity firms specializing in growth-stage investment.", color: "#2563EB" },
                      { title: "Cross-Border Funding", desc: "Investment networks spanning UK, Pakistan, Europe, and beyond.", color: "#22C55E" },
                      { title: "Strategic Guidance", desc: "Expert advisory on valuation, deal structuring, and investor engagement.", color: "#8b5cf6" },
                      { title: "Market Expansion", desc: "Support for cross-border market entry alongside your funding round.", color: "#f59e0b" },
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
                          <span className="font-semibold text-white text-sm">{item.title}</span>
                          <p className="text-white/40 text-xs leading-relaxed mt-1">{item.desc}</p>
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
      <section className="relative bg-[#0E1221] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#8b5cf6]/10 rounded-full blur-[120px]" />
          <div className="absolute top-10 right-0 w-[350px] h-[350px] bg-[#2563EB]/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-[#22C55E]/5 rounded-full blur-[80px]" />
        </div>
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 backdrop-blur-sm mb-6"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse" />
                <span className="text-[#8b5cf6] text-xs font-semibold uppercase tracking-wider">
                  Scale Now
                </span>
              </motion.div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                  Fuel Growth.{" "}
                </span>
                <span className="bg-gradient-to-r from-[#8b5cf6] via-[#2563EB] to-[#22C55E] bg-clip-text text-transparent">
                  Expand Markets.
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">
                  Transform the Tech Ecosystem.
                </span>
              </h2>

              <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Whether you&apos;re a scaling company seeking Series A or B funding, or an investor looking for growth-stage opportunities, the UK-Pakistan Tech Council is your partner in driving cross-border innovation.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  href="/membership"
                  variant="primary"
                  size="lg"
                  showArrow
                  className="!bg-gradient-to-r !from-[#8b5cf6] !to-[#2563EB] hover:!shadow-[0_0_40px_rgba(139,92,246,0.3)]"
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
