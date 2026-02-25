"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const offerItems = [
  { title: "Event Organisation", description: "End-to-end planning and execution of trade delegations and technology exhibitions." },
  { title: "Participant Matching", description: "Strategic matching of UK and Pakistan businesses for meaningful partnerships." },
  { title: "Venue Coordination", description: "Premium venues and facilities for exhibitions and networking events." },
  { title: "Business Development", description: "Support for B2B meetings and partnership development opportunities." },
  { title: "Market Insights", description: "Access to market intelligence and cross-border business opportunities." },
  { title: "Growth Opportunities", description: "Platforms to showcase products and expand into new markets." },
];

const benefits = [
  "Direct access to key decision-makers and industry leaders",
  "Opportunities to showcase products and services to targeted audiences",
  "Strategic networking with potential partners and clients",
  "Market insights and cross-border business intelligence",
  "Platform for establishing thought leadership",
];

const howItWorks = [
  { number: "01", title: "Register Interest", description: "Express your interest in upcoming delegations and exhibitions through the portal." },
  { number: "02", title: "Get Matched", description: "We connect you with relevant participants and opportunities aligned to your goals." },
  { number: "03", title: "Participate", description: "Join delegations and exhibitions to build partnerships and explore new markets." },
];

const stats = [
  { value: "20+", label: "delegations facilitated" },
  { value: "500+", label: "participants connected" },
  { value: "12+", label: "exhibitions supported" },
  { value: "2", label: "bilateral markets" },
];

export default function TradeDelegationsAndExhibitionsClient() {
  return (
    <div>
      <PageHero
        title="Trade Delegations and Exhibitions"
        subtitle="Facilitating cross-border trade delegations and technology exhibitions to strengthen UK–Pakistan partnerships."
        image="/image/london-images/international-conference.jpg"
      />

      {/* Intro */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl leading-snug mb-6">
                UPTECH organises and facilitates trade delegations and technology exhibitions that bring together businesses, investors, startups, and technology leaders from the UK and Pakistan.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                These events create opportunities for networking, collaboration, and knowledge exchange. Through strategic delegations and exhibitions, we enable cross-border partnerships, showcase innovation, and drive technology-led growth across both nations.
              </p>
            </div>
            <div className="bg-white border border-[#D8D5CF] p-8">
              <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-5">What We Facilitate</h3>
              <div className="h-px bg-[#1C1F2E]/15 mb-5" />
              <ul className="space-y-3">
                {["Trade Delegations", "Technology Exhibitions", "Networking Events", "B2B Meetings"].map((item) => (
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

      {/* What We Offer */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="What We Offer"
            title="Services and Support"
            subtitle="Comprehensive support for trade delegations and technology exhibitions from planning to execution."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerItems.map((item) => (
              <div key={item.title} className="bg-white border border-[#D8D5CF] p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{item.title}</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-3" />
                <p className="text-[#3D4152] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Benefits */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                label="Participation"
                title="Benefits of Participating"
                subtitle="Why join our trade delegations and exhibitions."
              />
              <ul className="space-y-0">
                {benefits.map((item) => (
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
                  <div key={step.number} className="flex gap-6 py-5 border-t border-[#1C1F2E]/15 last:border-b">
                    <span className="text-sm font-semibold text-[#2563EB] tabular-nums w-8 flex-shrink-0 pt-0.5">{step.number}</span>
                    <div>
                      <h4 className="font-heading font-bold text-[#1C1F2E] text-sm mb-1">{step.title}</h4>
                      <p className="text-[#3D4152] text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* CEO at Summit */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-3">On the Ground</p>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C1F2E] mb-4 leading-tight">
                Leading From the Front
              </h2>
              <div className="h-px bg-[#1C1F2E]/20 mb-5 max-w-xs" />
              <p className="text-[#3D4152] text-base leading-relaxed">
                UPTECH Founder & CEO Khalil Choudhary personally leads trade delegations and represents the Council at international summits, ensuring our members have direct access to decision-makers and opportunities at the highest level.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded">
              <Image src="/image/ceo/khalil-choudhary-summit.jpg" alt="Khalil Choudhary at international business summit" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Stats */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Impact"
            title="Our Track Record"
            subtitle="Measurable results from our trade delegation and exhibition programs."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t-2 border-[#2563EB] pt-4">
                <div className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl mb-1">{stat.value}</div>
                <p className="text-[#3D4152] text-sm">{stat.label}</p>
              </div>
            ))}
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
              <Button href="/events" variant="primary" size="lg" showArrow>View Events</Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>Contact Us</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
