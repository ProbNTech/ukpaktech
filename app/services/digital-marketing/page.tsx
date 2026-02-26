"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2, ChevronDown, Megaphone, Globe, PenTool, Calendar, Mail } from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "150+", label: "Products Promoted" },
  { value: "12M+", label: "Audience Reach" },
  { value: "40+", label: "Campaign Launches" },
  { value: "8x", label: "Avg. ROI" },
];

const offerings = [
  { icon: Megaphone, title: "Product & Solutions Showcase", description: "Feature your software products, digital platforms, and services through Council channels, events, and curated industry spotlights." },
  { icon: Globe, title: "Market Visibility & Promotion", description: "Gain exposure through newsletters, digital campaigns, industry roundtables, trade missions, and strategic introductions to potential partners and customers." },
  { icon: PenTool, title: "Go-to-Market Support", description: "Receive guidance on positioning, messaging, and market entry strategies tailored to the UK and Europe technology ecosystems." },
  { icon: Calendar, title: "Thought Leadership Opportunities", description: "Position your organisation as an industry leader through speaking opportunities, panel discussions, policy forums, and published insights." },
  { icon: Mail, title: "Cross-Border Business Development", description: "Access networks of policymakers, regulators, investors, and corporate buyers to support partnership building and commercial growth." },
];

const steps = [
  { number: "01", title: "Onboard", description: "Join the hub and share your product portfolio, target markets, and growth objectives.", outcome: "Strategy brief prepared" },
  { number: "02", title: "Strategy", description: "We develop a tailored cross-border marketing strategy aligned with your business goals.", outcome: "Campaign plan approved" },
  { number: "03", title: "Execute", description: "Launch campaigns across Council channels, events, and partner networks.", outcome: "Campaigns live" },
  { number: "04", title: "Grow", description: "Track results, optimise performance, and scale your international presence.", outcome: "ROI measured & scaled" },
];

const whyItMatters = [
  "Increase brand credibility",
  "Enter new markets with confidence",
  "Build strategic partnerships",
  "Generate commercial opportunities",
  "Strengthen their international presence",
];

const faqs = [
  { question: "What types of products can be promoted?", answer: "We promote software products, digital platforms, SaaS solutions, technology services, and hardware products from our member companies. The product must be from a Council member or partner organisation." },
  { question: "How much does it cost?", answer: "Core marketing services are included in UPTECH membership. Premium packages \u2014 including dedicated campaigns, event sponsorship, and bespoke content creation \u2014 are available as add-ons with transparent pricing." },
  { question: "What channels do you use for promotion?", answer: "We use Council email newsletters (10,000+ subscribers), social media channels, the UPTECH website, partner networks, and our events program including summits, exhibitions, and trade delegations." },
  { question: "How do you measure campaign success?", answer: "We provide detailed analytics including impressions, click-through rates, lead generation, and ROI metrics. Monthly reports track campaign performance against agreed KPIs." },
];

export default function DigitalMarketingPage() {
  return (
    <div>
      <PageHero
        title="Digital Product Marketing Hub"
        subtitle="The Digital Product Marketing Hub supports members in promoting their software solutions, platforms, and technology services across the UK, Europe, Middle East & African continents. We help technology companies strengthen their market presence, reach new audiences, and accelerate cross-border growth."
        image="/image/london-images/digital-marketing-dashboard.jpg"
      >
        <div className="flex flex-wrap gap-4 mt-2">
          <Button href="/membership" variant="glass" showArrow>Get Started</Button>
          <Button href="/contact" variant="ghost">Learn More</Button>
        </div>
      </PageHero>

      {/* Stats Bar */}
      <section className="relative z-[1] bg-[#1C1F2E]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl mb-1">{stat.value}</p>
                <p className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <Section variant="light">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-3">Capabilities</p>
            <h2 className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl lg:text-3xl leading-snug mb-6">
              Practical, Results-Driven Marketing for Technology Companies
            </h2>
            <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed mb-5">
              The Digital Product Marketing Hub supports members in promoting their software solutions, platforms, and technology services across the UK, Europe, Middle East &amp; African continents. We help technology companies strengthen their market presence, reach new audiences, and accelerate cross-border growth.
            </p>
            <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed">
              Our Hub is designed to provide practical, results-driven marketing support tailored to the needs of tech SMEs, scale-ups, and established firms looking to expand into new markets.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* What We Offer */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Services"
            title="What We Offer"
            subtitle="Five core marketing services tailored for tech SMEs, scale-ups, and established firms."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300 flex flex-col">
                  <Icon className="w-7 h-7 text-[#2563EB] mb-4" />
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{item.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed flex-1">{item.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* How It Works */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="How It Works"
            subtitle="From onboarding to measurable growth &mdash; a clear four-step process."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="border-t-2 border-[#2563EB] pt-5">
                <span className="text-xs font-bold text-[#2563EB] tabular-nums block mb-2">{step.number}</span>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{step.title}</h3>
                <p className="text-[#3D4152] text-sm leading-relaxed mb-3">{step.description}</p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                  <span className="text-xs font-semibold text-[#22C55E]">{step.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Why It Matters */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Impact"
            title="Why It Matters"
            subtitle="The UK and Pakistan technology sectors present significant opportunities for collaboration, outsourcing, innovation partnerships, and product expansion. The Digital Product Marketing Hub helps members:"
          />
          <ul className="space-y-0">
            {whyItMatters.map((item) => (
              <li key={item} className="flex items-start gap-3 py-4 border-b border-[#1C1F2E]/10 last:border-b-0">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span className="text-[#3D4152] text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </Section>

      {/* FAQ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about the Digital Product Marketing Hub."
          />
          <FAQSection faqs={faqs} />
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Get Started</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Ready to Grow Your Market Presence Globally?
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Whether you are launching a new software solution, scaling into new territories, or seeking strategic partnerships, the Digital Product Marketing Hub provides the platform and support to help you grow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Join the Hub</Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>Contact Us</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}

function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={faq.question} className="border-t border-[#1C1F2E]/15 last:border-b">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-5 text-left gap-4"
          >
            <span className="font-heading font-semibold text-[#1C1F2E] text-base">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-[#7A7E8F] flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          {openIndex === index && (
            <div className="pb-5 text-[#3D4152] text-sm leading-relaxed">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
