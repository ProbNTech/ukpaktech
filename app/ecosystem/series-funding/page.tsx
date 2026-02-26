"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Target,
  Globe,
  CheckCircle2,
  ArrowUpRight,
  Shield,
  Sparkles,
  Users,
  Eye,
  Lightbulb,
} from "lucide-react";

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
  return (
    <>
      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <PageHero
        image="/image/london-images/innovation-ideas.jpg"
        title="Series A & B Funding Opportunities"
        subtitle="The UK-Pakistan Tech Council supports high-growth technology companies in securing Series A and B funding to scale operations, expand into new markets, and accelerate innovation. We connect scaling startups and scale-ups with venture capitalists, private equity firms, corporate investors, and cross-border funding networks, providing the guidance and access needed to close strategic investment rounds."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/membership" variant="primary" showArrow>
            Access Series Funding
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
          FOR SCALING COMPANIES
          ================================================================ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="For Scaling Companies"
            title="Scale Your Business with Strategic Funding"
            subtitle="Access the capital, connections, and guidance needed to take your company from growth-stage to market leader."
          />

          <div className="grid md:grid-cols-2 gap-7">
            {scalingBenefits.map((item) => {
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
          FOR INVESTORS
          ================================================================ */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="For Investors"
            title="Invest in Growth-Stage Winners"
            subtitle="Access curated, high-growth technology companies that have proven their market fit and are ready for significant scale."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {investorBenefits.map((item) => {
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
          FUNDING PROCESS
          ================================================================ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="How We Help You Close Your Round"
            subtitle="A structured pathway from assessment to closing your Series A or B funding round."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fundingProcess.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-[#D8D5CF] rounded p-6 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: step.color }}
                  >
                    {step.number}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-[#3D4152] text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{ background: `${step.color}12` }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: step.color }} />
                  <span className="text-xs font-semibold" style={{ color: step.color }}>
                    {step.outcome}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ================================================================
          WHY IT MATTERS
          ================================================================ */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <SectionHeader
                label="Why It Matters"
                title="Critical Funding for Rapid Growth"
                subtitle="Series A and B funding is critical for companies moving beyond early-stage validation into rapid growth. By facilitating access to these funding rounds, the Council helps high-growth startups scale efficiently, strengthen their market position, and expand across borders."
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
                  UPTECH Advantage
                </h3>
                <div className="h-px bg-[#D8D5CF] mb-6" />
                <ul className="space-y-5">
                  {[
                    { title: "VC & PE Networks", desc: "Direct access to venture capital and private equity firms specializing in growth-stage investment.", color: "#2563EB" },
                    { title: "Cross-Border Funding", desc: "Investment networks spanning UK, Pakistan, Europe, and beyond.", color: "#22C55E" },
                    { title: "Strategic Guidance", desc: "Expert advisory on valuation, deal structuring, and investor engagement.", color: "#8b5cf6" },
                    { title: "Market Expansion", desc: "Support for cross-border market entry alongside your funding round.", color: "#f59e0b" },
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
            <p className="text-sm font-semibold text-[#8b5cf6] mb-4 tracking-wide uppercase">
              Scale Now
            </p>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white mb-6">
              Fuel Growth. Expand Markets. Transform the Tech Ecosystem.
            </h2>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you&apos;re a scaling company seeking Series A or B funding, or an investor looking for growth-stage opportunities, the UK-Pakistan Tech Council is your partner in driving cross-border innovation.
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
