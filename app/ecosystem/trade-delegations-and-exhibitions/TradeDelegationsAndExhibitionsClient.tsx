"use client";

import Image from "next/image";
import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { CheckCircle2 } from "lucide-react";

/* --- Data ---------------------------------------------------------------- */

const tradeDelegationIntro = "The UK-Pakistan Tech Council organises trade delegations to connect technology companies with key stakeholders, potential partners, investors, and government representatives in both the UK and Pakistan. These delegations provide members with a strategic platform to explore new markets, forge partnerships, and drive business growth.";

const tradeDelegationBenefits = [
  { title: "Market Access", description: "Gain first-hand exposure to emerging opportunities in cross-border technology markets." },
  { title: "Business Development", description: "Meet corporates, investors, regulators, and policymakers to explore collaborations and partnerships." },
  { title: "Networking Opportunities", description: "Build relationships with industry leaders, innovators, and decision-makers." },
  { title: "Insights & Intelligence", description: "Learn about local market trends, regulatory frameworks, and business opportunities." },
];

const exhibitionIntro = "The UK-Pakistan Tech Council organises and participates in high-impact exhibition events to showcase innovation, foster collaboration, and create business opportunities across the UK and Pakistan. These events provide members with a platform to present their technology solutions, connect with potential clients and partners, and gain visibility in key markets.";

const exhibitionBenefits = [
  { title: "Showcase Your Solutions", description: "Present software, platforms, and digital products to a targeted audience of corporates, investors, and industry leaders." },
  { title: "Network & Collaborate", description: "Meet decision-makers, potential partners, and cross-border stakeholders." },
  { title: "Gain Market Insights", description: "Stay updated on emerging trends, technologies, and opportunities in both markets." },
  { title: "Build Brand Visibility", description: "Increase awareness of your company\u2019s expertise and innovation capabilities." },
];

const exhibitionWhyItMatters = "Exhibition events create a dynamic environment where innovation meets opportunity. By participating, members can accelerate business growth, forge strategic partnerships, and strengthen their presence in the UK-Pakistan technology corridor. Connect. Showcase. Grow.";

const offerItems = [
  { title: "Event Organisation", description: "End-to-end planning and execution of trade delegations and technology exhibitions." },
  { title: "Participant Matching", description: "Strategic matching of UK and Pakistan businesses for meaningful partnerships." },
  { title: "Venue Coordination", description: "Premium venues and facilities for exhibitions and networking events." },
  { title: "Business Development", description: "Support for B2B meetings and partnership development opportunities." },
  { title: "Market Insights", description: "Access to market intelligence and cross-border business opportunities." },
  { title: "Growth Opportunities", description: "Platforms to showcase products and expand into new markets." },
];

const participationBenefits = [
  "Direct access to key decision-makers and industry leaders",
  "Opportunities to showcase products and services to targeted audiences",
  "Strategic networking with potential partners and clients",
  "Market insights and cross-border business intelligence",
  "Platform for establishing thought leadership",
];

const howItWorks = [
  { number: "01", title: "Register Interest", description: "Express your interest in upcoming delegations and exhibitions through the portal.", outcome: "Interest registered" },
  { number: "02", title: "Get Matched", description: "We connect you with relevant participants and opportunities aligned to your goals.", outcome: "Matched to opportunities" },
  { number: "03", title: "Participate", description: "Join delegations and exhibitions to build partnerships and explore new markets.", outcome: "Partnerships formed" },
];

const stats = [
  { value: "20+", label: "Delegations Facilitated" },
  { value: "500+", label: "Participants Connected" },
  { value: "12+", label: "Exhibitions Supported" },
  { value: "2", label: "Bilateral Markets" },
];

/* --- Component ----------------------------------------------------------- */

export default function TradeDelegationsAndExhibitionsClient() {
  return (
    <div>
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

      {/* Trade Delegations */}
      <Section variant="light">
        <AnimatedSection>
          <div className="max-w-4xl mb-10">
            <p className="text-sm font-semibold text-[#2563EB] mb-2 tracking-wide uppercase">Trade Delegations</p>
            <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-snug mb-6">
              Connecting Technology Companies Across Borders
            </h2>
            <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed">
              {tradeDelegationIntro}
            </p>
          </div>

          <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-6">For Members</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {tradeDelegationBenefits.map((item) => (
              <div key={item.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                <h4 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{item.title}</h4>
                <div className="h-px bg-[#1C1F2E]/15 mb-3" />
                <p className="text-[#3D4152] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Exhibition Events */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="max-w-4xl mb-10">
            <p className="text-sm font-semibold text-[#2563EB] mb-2 tracking-wide uppercase">Exhibition Events</p>
            <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-snug mb-6">
              High-Impact Exhibition Events
            </h2>
            <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed">
              {exhibitionIntro}
            </p>
          </div>

          <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-6">For Members</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {exhibitionBenefits.map((item) => (
              <div key={item.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                <h4 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{item.title}</h4>
                <div className="h-px bg-[#1C1F2E]/15 mb-3" />
                <p className="text-[#3D4152] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Why It Matters */}
          <div className="bg-white border border-[#D8D5CF] rounded p-8">
            <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-4">Why It Matters</h3>
            <div className="h-px bg-[#1C1F2E]/15 mb-4" />
            <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed">
              {exhibitionWhyItMatters}
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* What We Offer */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="What We Offer"
            title="Services and Support"
            subtitle="Comprehensive support for trade delegations and technology exhibitions from planning to execution."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerItems.map((item) => (
              <div key={item.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{item.title}</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-3" />
                <p className="text-[#3D4152] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Benefits & How It Works */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                label="Participation"
                title="Benefits of Participating"
                subtitle="Why join our trade delegations and exhibitions."
              />
              <ul className="space-y-0">
                {participationBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-4 border-b border-[#1C1F2E]/10 last:border-b-0">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#3D4152] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader
                label="Process"
                title="How It Works"
                subtitle="Three simple steps to join our delegations and exhibitions."
              />
              <div className="space-y-0">
                {howItWorks.map((step) => (
                  <div key={step.number} className="border-t-2 border-[#2563EB] pt-5 pb-6">
                    <span className="text-xs font-bold text-[#2563EB] tabular-nums block mb-2">{step.number}</span>
                    <h4 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{step.title}</h4>
                    <p className="text-[#3D4152] text-sm leading-relaxed mb-2">{step.description}</p>
                    <span className="text-xs font-semibold text-[#2563EB]">{step.outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* CEO at Summit */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-[#2563EB] mb-2 tracking-wide uppercase">On the Ground</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl leading-tight mb-6">
                Leading From the Front
              </h2>
              <p className="text-[#3D4152] text-base leading-relaxed">
                UPTECH Founder &amp; CEO Khalil Choudhary personally leads trade delegations and represents the Council at international summits, ensuring our members have direct access to decision-makers and opportunities at the highest level.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded border border-[#D8D5CF]">
              <Image src="/image/ceo/khalil-choudhary-summit.jpg" alt="Khalil Choudhary at international business summit" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Get Involved</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Join Our Next Delegation
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Connect with technology leaders and explore cross-border opportunities through UPTECH&apos;s trade delegations and exhibitions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/events" variant="primary" size="lg" showArrow className="!bg-[#2563EB] hover:!bg-[#1d4ed8]">
                View Events
              </Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>
                Contact Us
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
