"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Target,
  Lightbulb,
  Users,
  Globe,
  CheckCircle2,
  ArrowUpRight,
  Presentation,
  Award,
  Shield,
  Mic2,
  Sparkles,
  Building2,
} from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────────────── */

const stats = [
  { value: "100+", label: "Startups Funded", color: "#2563EB" },
  { value: "£30M+", label: "Capital Raised", color: "#22C55E" },
  { value: "50+", label: "Investor Partners", color: "#8b5cf6" },
  { value: "12+", label: "Pitch Events Annually", color: "#f59e0b" },
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
    color: "#8b5cf6",
  },
  {
    icon: Globe,
    title: "Market Credibility",
    description:
      "Build credibility and visibility in both UK and Europe markets.",
    color: "#f59e0b",
  },
  {
    icon: Mic2,
    title: "Pitch Coaching",
    description:
      "Pitch coaching and presentation readiness support.",
    color: "#C41E3A",
  },
  {
    icon: Users,
    title: "Investor Matchmaking",
    description:
      "Themed networking dinners, panels, and roundtables for targeted investor-startup matchmaking.",
    color: "#2563EB",
  },
];

const vipFeatures = [
  {
    text: "VIP investor experiences and private pitch sessions",
    color: "#8b5cf6",
  },
  {
    text: "Exclusive access to high-value investor networks",
    color: "#22C55E",
  },
  {
    text: "One-to-one investor introductions and relationship building",
    color: "#f59e0b",
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
    color: "#8b5cf6",
  },
  {
    icon: Building2,
    title: "Startup Summits & Expos",
    description:
      "Large-scale events highlighting emerging technologies, disruptive ideas, business models and scalable ventures.",
    color: "#f59e0b",
  },
];

const whyItMattersPoints = [
  { text: "Accelerate product development", color: "#2563EB" },
  { text: "Scale operations efficiently", color: "#22C55E" },
  { text: "Enter new markets with confidence", color: "#8b5cf6" },
  { text: "Access the most promising technology ventures across the UK and Pakistan", color: "#f59e0b" },
];

/* ─── Component ─────────────────────────────────────────────────────── */

export default function StartupFundingPage() {
  return (
    <>
      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <PageHero
        image="/image/london-images/investment-finance-meeting.jpg"
        title="Startup Funding Opportunities"
        subtitle="The UK-Pakistan Tech Council supports early-stage technology startups in accessing funding, investment networks, and growth capital to turn innovative ideas into scalable businesses. We connect founders with investors, venture capital firms, corporate partners, and government-backed funding programs across the UK and Pakistan, helping startups navigate the fundraising process with confidence."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/membership" variant="primary" showArrow>
            Access Funding
          </Button>
          <Button href="/contact" variant="ghost" className="!text-white/80 hover:!text-white">
            Speak to Our Team
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
          STARTUP FUNDING EVENTS
          ================================================================ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="For Startups"
            title="Startup Funding Events & Opportunities"
            subtitle="Connect with angel investors, venture capital firms, and corporate partners through our curated events and programs."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {startupBenefits.map((item) => {
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
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">
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

          {/* VIP Features */}
          <div className="bg-white border border-[#D8D5CF] rounded p-8">
            <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">
              Exclusive Access
            </h3>
            <div className="h-px bg-[#D8D5CF] mb-5" />
            <div className="space-y-4">
              {vipFeatures.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-start gap-3 pl-4 relative"
                >
                  <div
                    className="absolute top-0 bottom-0 left-0 w-1 rounded-r-full"
                    style={{ background: feature.color }}
                  />
                  <Award className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: feature.color }} />
                  <span className="text-[#3D4152] text-sm leading-relaxed">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ================================================================
          FOR INVESTORS
          ================================================================ */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="For Investors"
            title="Discover the Next Big Thing"
            subtitle="Access curated, high-potential startups and engage directly with founders across the UK and Pakistan tech ecosystem."
          />

          <div className="grid md:grid-cols-2 gap-7">
            {investorBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-[#D8D5CF] rounded p-8 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ background: `${item.color}12` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: item.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="h-px bg-[#D8D5CF] mb-5" />
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
          WHY IT MATTERS
          ================================================================ */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <SectionHeader
                label="Why It Matters"
                title="Funding is a Critical Enabler for Innovation"
                subtitle="Funding is a critical enabler for innovation. By facilitating investment connections, the Council helps startups accelerate product development, scale operations, and enter new markets, while giving investors access to the most promising technology ventures across the UK and Pakistan."
              />

              <div className="space-y-4">
                {whyItMattersPoints.map((point) => (
                  <div
                    key={point.text}
                    className="bg-white border border-[#D8D5CF] rounded p-5 flex items-start gap-4 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${point.color}12` }}
                    >
                      <CheckCircle2 className="w-5 h-5" style={{ color: point.color }} strokeWidth={1.5} />
                    </div>
                    <span className="text-[#3D4152] text-sm leading-relaxed pt-2">
                      {point.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#D8D5CF] rounded p-8 sticky top-8">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">
                  What We Provide
                </h3>
                <div className="h-px bg-[#D8D5CF] mb-6" />
                <ul className="space-y-5">
                  {[
                    { title: "Investment Networks", desc: "Connections to angel investors, VCs, and corporate partners.", color: "#2563EB" },
                    { title: "Growth Capital", desc: "Access to funding programs and government-backed initiatives.", color: "#22C55E" },
                    { title: "Fundraising Support", desc: "Strategy guidance, pitch coaching, and valuation advisory.", color: "#8b5cf6" },
                    { title: "Cross-Border Access", desc: "Investment opportunities spanning UK and Pakistan markets.", color: "#f59e0b" },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3.5">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                        style={{ background: `${item.color}12` }}
                      >
                        <ArrowUpRight className="w-4 h-4" style={{ color: item.color }} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="font-semibold text-[#1C1F2E] text-sm">{item.title}</span>
                        <p className="text-[#3D4152] text-xs leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ================================================================
          CTA SECTION
          ================================================================ */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-[#22C55E] mb-4 tracking-wide uppercase">
              Get Started
            </p>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white mb-6">
              Empowering Startups. Connecting Investors. Driving Cross-Border Growth.
            </h2>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you&apos;re a startup seeking investment or an investor looking for the next breakthrough, the UK-Pakistan Tech Council is your gateway to cross-border opportunity.
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
