"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import {
  Rocket,
  Lightbulb,
  Users,
  TrendingUp,
  Target,
  Globe,
  CheckCircle2,
  ArrowUpRight,
  Briefcase,
  Presentation,
  Award,
  Shield,
  Eye,
  Mic2,
  Sparkles,
  Building2,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

/* ─── Data ──────────────────────────────────────────────────────────── */

const stats = [
  { value: "100+", label: "Startups Funded", color: "#2563EB" },
  { value: "£30M+", label: "Capital Raised", color: "#22C55E" },
  { value: "50+", label: "Investor Partners", color: "#C41E3A" },
  { value: "12+", label: "Pitch Events Annually", color: "#2563EB" },
];

const startupBenefits = [
  {
    icon: Target,
    title: "Angel & VC Funding Access",
    description:
      "Gain access to angel investors, venture capital, and corporate funding opportunities.",
    color: "#2563EB",
  },
  {
    icon: Presentation,
    title: "Pitch Events & Showcases",
    description:
      "Participate in pitch events, investor forums, demo days and startup showcases.",
    color: "#22C55E",
  },
  {
    icon: Lightbulb,
    title: "Funding Strategy Guidance",
    description:
      "Receive guidance on funding strategy, valuation, and investor engagement.",
    color: "#C41E3A",
  },
  {
    icon: Globe,
    title: "Market Credibility",
    description:
      "Build credibility and visibility in both UK and Europe markets.",
    color: "#2563EB",
  },
  {
    icon: Mic2,
    title: "Pitch Coaching",
    description:
      "Pitch coaching and presentation readiness support.",
    color: "#22C55E",
  },
  {
    icon: Users,
    title: "Investor Matchmaking",
    description:
      "Themed networking dinners, panels, and roundtables for targeted investor-startup matchmaking.",
    color: "#C41E3A",
  },
];

const vipFeatures = [
  {
    text: "VIP investor experiences and private pitch sessions",
    color: "#2563EB",
  },
  {
    text: "Exclusive access to high-value investor networks",
    color: "#22C55E",
  },
  {
    text: "One-to-one investor introductions and relationship building",
    color: "#C41E3A",
  },
];

const investorBenefits = [
  {
    icon: Sparkles,
    title: "High-Potential Startups",
    description:
      "Discover high-potential startups in software, fintech, AI, cybersecurity, and digital innovation.",
    color: "#2563EB",
  },
  {
    icon: Shield,
    title: "Pre-Screened Opportunities",
    description:
      "Access pre-screened, investment-ready opportunities.",
    color: "#22C55E",
  },
  {
    icon: Globe,
    title: "Cross-Border Founders",
    description:
      "Engage with emerging tech founders driving cross-border growth.",
    color: "#C41E3A",
  },
  {
    icon: Building2,
    title: "Startup Summits & Expos",
    description:
      "Large-scale events highlighting emerging technologies, disruptive ideas, business models and scalable ventures.",
    color: "#2563EB",
  },
];

const whyItMattersPoints = [
  { text: "Accelerate product development", color: "#2563EB" },
  { text: "Scale operations efficiently", color: "#22C55E" },
  { text: "Enter new markets with confidence", color: "#C41E3A" },
  { text: "Access the most promising technology ventures across the UK and Pakistan", color: "#2563EB" },
];

/* ─── Component ─────────────────────────────────────────────────────── */

export default function StartupFundingPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#EEECEA]">
      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <PageHero
        label="Ecosystem / Startup Funding"
        title="Startup Funding Opportunities"
        subtitle="The UK-Pakistan Tech Council supports early-stage technology startups in accessing funding, investment networks, and growth capital to turn innovative ideas into scalable businesses."
        image="/image/london-images/investment-finance-meeting.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/membership" variant="glass" showArrow>
            Access Funding
          </Button>
          <Button href="/contact" variant="glass" showArrow>
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
                <p className="text-[#5A5F72] text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          STARTUP FUNDING EVENTS
          ================================================================ */}
      <section className="relative bg-[#EEECEA] overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader label="For Startups" title="Startup Funding Events & Opportunities" subtitle="Connect with angel investors, venture capital firms, and corporate partners through our curated events and programs." color="blue" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {startupBenefits.map((item, i) => {
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
                          style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                        >
                          <Icon className="w-6 h-6 relative z-[1]" style={{ color: item.color }} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">
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

            {/* VIP Features */}
            <div className="bg-white border border-[#D8D5CF] shadow-md rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#C41E3A]" />
              <h3 className="relative font-heading font-bold text-[#1C1F2E] text-lg mb-5">
                Exclusive Access
              </h3>
              <div className="relative h-px bg-[#D8D5CF] mb-5" />
              <div className="relative space-y-4">
                {vipFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.text}
                    className="flex items-start gap-3 pl-4 relative"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                  >
                    <div
                      className="absolute top-0 bottom-0 left-0 w-1 rounded-r-full"
                      style={{ background: `linear-gradient(to bottom, ${feature.color}, ${feature.color}40)` }}
                    />
                    <Award className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: feature.color }} />
                    <span className="text-[#3D4152] text-base leading-relaxed">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
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
            <SectionHeader label="For Investors" title="Discover the Next Big Thing" subtitle="Access curated, high-potential startups and engage directly with founders across the UK and Pakistan tech ecosystem." color="green" />

            <div className="grid md:grid-cols-2 gap-7">
              {investorBenefits.map((item, i) => {
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
          WHY IT MATTERS
          ================================================================ */}
      <section className="relative bg-[#E8E6E3] overflow-hidden">
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-3">
                <SectionHeader label="Why It Matters" title="Funding is a Critical Enabler for Innovation" color="blue" />
                <p className="text-[#5A5F72] text-lg leading-relaxed mb-6">
                  Funding is a critical enabler for innovation. By facilitating investment connections, the Council helps startups accelerate product development, scale operations, and enter new markets, while giving investors access to the most promising technology ventures across the UK and Pakistan.
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
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#22C55E] via-[#2563EB] to-[#C41E3A]" />

                  <h3 className="relative font-heading font-bold text-[#1C1F2E] text-lg mb-5">
                    What We Provide
                  </h3>
                  <div className="relative h-px bg-[#D8D5CF] mb-6" />
                  <ul className="relative space-y-5">
                    {[
                      { title: "Investment Networks", desc: "Connections to angel investors, VCs, and corporate partners.", color: "#2563EB" },
                      { title: "Growth Capital", desc: "Access to funding programs and government-backed initiatives.", color: "#22C55E" },
                      { title: "Fundraising Support", desc: "Strategy guidance, pitch coaching, and valuation advisory.", color: "#C41E3A" },
                      { title: "Cross-Border Access", desc: "Investment opportunities spanning UK and Pakistan markets.", color: "#2563EB" },
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
                          <p className="text-[#7A7E8F] text-sm leading-relaxed mt-1">{item.desc}</p>
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
      <section className="relative bg-[#0B0F1A]/80 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image src="/image/london-images/startup-coworking.jpg" alt="Startup Funding background" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#22C55E]/10 rounded-full blur-[120px]" />
          <div className="absolute top-10 right-0 w-[350px] h-[350px] bg-[#2563EB]/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-[#C41E3A]/5 rounded-full blur-[80px]" />
        </div>
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/10 backdrop-blur-sm mb-6"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-[#22C55E] text-xs font-semibold uppercase tracking-wider">
                  Get Started
                </span>
              </motion.div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
                <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                  Empowering Startups.{" "}
                </span>
                <span className="bg-gradient-to-r from-[#22C55E] via-[#2563EB] to-[#C41E3A] bg-clip-text text-transparent">
                  Connecting Investors.
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">
                  Driving Cross-Border Growth.
                </span>
              </h2>

              <p className="text-white/50 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                Whether you&apos;re a startup seeking investment or an investor looking for the next breakthrough, the UK-Pakistan Tech Council is your gateway to cross-border opportunity.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  href="/membership/apply"
                  variant="primary"
                  size="lg"
                  showArrow
                  className="!bg-gradient-to-r !from-[#22C55E] !to-[#2563EB] hover:!shadow-[0_0_40px_rgba(34,197,94,0.3)]"
                >
                  Apply for Membership
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
