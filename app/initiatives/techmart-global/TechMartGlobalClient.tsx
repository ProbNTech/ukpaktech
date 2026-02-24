"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2 } from "lucide-react";

const audiences = [
  {
    title: "Tech Startups",
    description: "Early-stage technology companies seeking market access, partnerships, and growth opportunities in international markets.",
  },
  {
    title: "Scale-ups and SMEs",
    description: "Growing technology businesses ready to expand their reach and establish strategic relationships with global buyers and partners.",
  },
  {
    title: "Enterprises and Buyers",
    description: "Organisations looking to discover, evaluate, and engage with qualified technology vendors and service providers.",
  },
  {
    title: "Investors and Partners",
    description: "Investment firms, strategic partners, and institutions interested in connecting with high-potential technology companies.",
  },
];

const features = [
  { title: "Cross-border B2B Matchmaking", tag: "Intelligent Matching", description: "Curated introductions connect Pakistani tech companies with relevant UK and international buyers based on capabilities, needs, and strategic fit." },
  { title: "Market Access and Discovery", tag: "Market Discovery", description: "Comprehensive company profiles, service catalogs, and capability showcases enable buyers to discover and evaluate technology solutions efficiently." },
  { title: "Strategic Partnerships", tag: "Partnerships", description: "Facilitation of joint ventures, technology licensing, co-development agreements, and long-term strategic alliances between companies." },
  { title: "Trade, Procurement, and Outsourcing", tag: "Global Trade", description: "Direct access to procurement opportunities, outsourcing projects, and trade facilitation services that streamline cross-border transactions." },
];

const howItWorks = [
  { number: "01", title: "Discover", description: "Browse company profiles, service catalogues, and capability showcases to identify potential partners, vendors, or buyers.", outcome: "Identified opportunities" },
  { number: "02", title: "Connect", description: "Initiate contact through the platform&apos;s communication tools or request introductions to relevant participants.", outcome: "Verified introductions" },
  { number: "03", title: "Validate", description: "Engage in due diligence, capability assessments, and preliminary discussions to ensure mutual fit before proceeding.", outcome: "Confirmed alignment" },
  { number: "04", title: "Scale", description: "Execute agreements, launch partnerships, and leverage platform resources to scale relationships and achieve long-term objectives.", outcome: "Partnership launched" },
];

const ukPathway = [
  "UK market entry strategy and guidance",
  "Compliance and regulatory navigation support",
  "Introductions to UK-based buyers and partners",
  "Access to UK industry associations and networks",
  "Credibility building with UK institutions",
];

const alignment = [
  { label: "Transparency", description: "Clear and fair processes with full visibility." },
  { label: "Verification", description: "All participants are verified for quality assurance." },
  { label: "Fair Process", description: "Merit-based matching and dispute resolution." },
];

export default function TechMartGlobalClient() {
  return (
    <div>
      <PageHero
        title="TechMart Global"
        subtitle="A global B2B technology marketplace and collaboration platform connecting Pakistani tech companies with UK and international buyers, partners, investors, and institutions."
        image="/image/london-images/careers-financial-district.jpg"
      />

      {/* What is TechMart Global */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl leading-snug mb-6">
                TechMart Global is a comprehensive B2B technology marketplace powered by the UK–Pakistan Tech Council, enabling Pakistani technology companies to showcase their capabilities to a global audience.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                Through structured matchmaking, transparent processes, and strategic support, TechMart Global facilitates cross-border partnerships, procurement opportunities, and long-term business relationships that drive innovation and economic growth.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed">
                The platform serves as a trusted intermediary, ensuring that every connection made is verified, purposeful, and built on a foundation of accountability.
              </p>
            </div>
            <div className="bg-white border border-[#D8D5CF] p-8">
              <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-5">Platform Snapshot</h3>
              <div className="h-px bg-[#1C1F2E]/15 mb-5" />
              <ul className="space-y-3">
                {["B2B Marketplace", "UK–Pakistan Corridor", "Verified Connections", "Structured Matchmaking"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#3D4152] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Who It&apos;s For */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Who It&apos;s For"
            title="Who TechMart Global Serves"
            subtitle="Designed to serve diverse stakeholders across the technology ecosystem."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience) => (
              <div key={audience.title} className="bg-white border border-[#D8D5CF] p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{audience.title}</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-3" />
                <p className="text-[#3D4152] text-sm leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* What It Enables */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Capabilities"
            title="What TechMart Global Enables"
            subtitle="Key capabilities and opportunities facilitated through the platform."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white border border-[#D8D5CF] p-6 hover:border-[#2563EB]/40 transition-colors duration-300 flex gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base flex-1 pr-3">{feature.title}</h3>
                    <span className="text-xs font-semibold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 flex-shrink-0">{feature.tag}</span>
                  </div>
                  <div className="h-px bg-[#1C1F2E]/15 mb-3" />
                  <p className="text-[#3D4152] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* UK Market Access */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                label="UK Market"
                title="UK Market Access Focus"
                subtitle="Supporting Pakistani technology companies in entering and succeeding in the UK market."
              />
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                TechMart Global places particular emphasis on facilitating entry into the UK market, recognising its strategic importance as a gateway to broader international opportunities.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed">
                Through partnerships with UK-based organisations, industry associations, and regulatory bodies, TechMart Global helps Pakistani tech companies understand market dynamics and build relationships with UK buyers.
              </p>
            </div>
            <div className="bg-white border border-[#D8D5CF] p-8">
              <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-5">UK Entry Pathway</h3>
              <div className="h-px bg-[#1C1F2E]/15 mb-5" />
              <ul className="space-y-3">
                {ukPathway.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#3D4152] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* How It Works */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="How TechMart Global Works"
            subtitle="A structured process designed to facilitate meaningful connections and successful outcomes."
          />
          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((step) => (
              <div key={step.number} className="border-t-2 border-[#2563EB] pt-5">
                <span className="text-xs font-bold text-[#2563EB] tabular-nums block mb-2">{step.number}</span>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{step.title}</h3>
                <p className="text-[#3D4152] text-sm leading-relaxed mb-3">{step.description}</p>
                <span className="text-xs font-semibold text-[#2563EB]">→ {step.outcome}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Council Alignment */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Official Initiative"
            title="Alignment With UPTECH"
            subtitle="TechMart Global as a strategic initiative supporting council objectives and ecosystem development."
          />
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                TechMart Global is an official initiative of the UK–Pakistan Tech Council, designed to advance the council&apos;s mission of fostering collaboration, innovation, and economic growth between the UK and Pakistan technology sectors.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed">
                The platform operates with a commitment to transparency, credibility, and ethical business practices. All participants benefit from the council&apos;s governance framework, which ensures fair processes, dispute resolution mechanisms, and ongoing support.
              </p>
            </div>
            <div className="space-y-0">
              {alignment.map((item) => (
                <div key={item.label} className="flex items-start gap-4 py-4 border-b border-[#1C1F2E]/10 last:border-b-0">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <div>
                    <span className="font-heading font-bold text-[#1C1F2E] text-sm">{item.label}</span>
                    <p className="text-[#3D4152] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Join the Platform</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Join TechMart Global
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Connect with the global technology marketplace and unlock new opportunities for growth and cross-border collaboration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Get Started</Button>
              <Button href="/membership" variant="glass" size="lg" showArrow>Learn About Membership</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
