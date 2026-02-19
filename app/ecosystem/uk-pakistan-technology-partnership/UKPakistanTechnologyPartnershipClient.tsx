"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  { title: "Governments", description: "Facilitating policy alignment and bilateral technology cooperation between UK and Pakistani government bodies." },
  { title: "Enterprises & Investors", description: "Supporting cross-border trade, investment facilitation, and market access for businesses and capital." },
  { title: "Startups & Academia", description: "Fostering innovation, talent development, and research collaboration between both nations." },
];

const whyJoin = [
  "Exclusive network of leading technology professionals",
  "Strategic partnerships and collaboration opportunities",
  "Access to funding, resources, and market insights",
  "Platform for thought leadership and industry influence",
  "Cross-border innovation and knowledge exchange",
];

const recognitionItems = [
  { title: "Innovation", description: "Celebrating exceptional achievements in technology innovation and cross-border development." },
  { title: "Collaboration", description: "Recognising successful partnerships that strengthen the UK–Pakistan tech corridor." },
  { title: "Leadership", description: "Honouring individuals and organisations driving digital transformation." },
];

const benefits = [
  { title: "Connect with Leading Minds", description: "Access an exclusive network of tech leaders, founders, and executives across both nations." },
  { title: "Launch New Products", description: "Platform to showcase innovations and reach key stakeholders across the corridor." },
  { title: "Establish Thought Leadership", description: "Position your organisation as a leader in the UK–Pakistan tech ecosystem." },
  { title: "Boost Brand Awareness", description: "Increase visibility and recognition across both markets simultaneously." },
];

const attendees = [
  "C-suite executives and senior management",
  "Chief technology officers and tech leads",
  "Startup founders and entrepreneurs",
  "Venture capitalists and angel investors",
  "Senior technology directors and professionals",
  "Thought leaders and domain experts",
  "Corporate innovation and strategy heads",
  "Business development and partnership directors",
];

const partnerLogos = [
  "/image/sponsor-logos/7.png",
  "/image/sponsor-logos/8.png",
  "/image/sponsor-logos/9.png",
  "/image/sponsor-logos/10.png",
  "/image/sponsor-logos/11.png",
  "/image/sponsor-logos/12.png",
];

export default function UKPakistanTechnologyPartnershipClient() {
  return (
    <div>
      <PageHero
        title="UK–Pakistan Technology Partnership"
        subtitle="Strengthening bilateral technology collaboration between the United Kingdom and Pakistan."
      />

      {/* Intro */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl leading-snug mb-6">
                The UK–Pakistan Technology Partnership is a strategic collaboration framework designed to strengthen technology, innovation, and digital trade between the United Kingdom and Pakistan.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                By connecting governments, enterprises, investors, startups, and academia, we create a powerful network that enables technology-led growth, fosters innovation, and builds lasting bridges between our two nations.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed">
                This partnership facilitates cross-border cooperation, knowledge exchange, and joint initiatives that drive sustainable growth in both nations&apos; technology ecosystems.
              </p>
            </div>
            <div className="bg-white border border-[#D8D5CF] p-8">
              <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-5">Partnership Pillars</h3>
              <div className="h-px bg-[#1C1F2E]/15 mb-5" />
              <ul className="space-y-3">
                {["Governments", "Enterprises & Investors", "Startups & Academia"].map((item) => (
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

      {/* Pillars */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Partnership Overview"
            title="Who We Connect"
            subtitle="Connecting governments, enterprises, investors, startups, and academia to drive technology-led growth."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-white border border-[#D8D5CF] p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{pillar.title}</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-3" />
                <p className="text-[#3D4152] text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Recognition */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Recognition Program"
            title="Recognising Excellence"
            subtitle="Celebrating Pakistan&apos;s contributions to the UK tech sector through prestigious recognition."
          />
          <p className="text-[#3D4152] text-base leading-relaxed mb-8 max-w-3xl">
            Our recognition program celebrates exceptional achievements in technology innovation, cross-border collaboration, and leadership that strengthens the UK–Pakistan tech corridor.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {recognitionItems.map((item) => (
              <div key={item.title} className="border-t-2 border-[#2563EB] pt-4">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{item.title}</h3>
                <p className="text-[#3D4152] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Why Partner */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Why Partner With Us"
            title="Unlock Opportunities"
            subtitle="Benefits of joining the UK–Pakistan Technology Partnership."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white border border-[#D8D5CF] p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{benefit.title}</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-3" />
                <p className="text-[#3D4152] text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Why Join / Community */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                label="Membership"
                title="Why UK–Pakistan Tech Council"
                subtitle="An invite-only community of UK-based Pakistan tech leaders, founders, investors, and executives."
              />
              <ul className="space-y-0">
                {whyJoin.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-4 border-b border-[#1C1F2E]/10 last:border-b-0">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#3D4152] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader
                label="Community"
                title="Typical Attendees"
                subtitle="Join a community of distinguished technology leaders and innovators."
              />
              <ul className="space-y-0">
                {attendees.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-3 border-b border-[#1C1F2E]/10 last:border-b-0">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0" />
                    <span className="text-[#3D4152] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Partners */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Partners"
            title="Our Partners Make Us Stronger"
            subtitle="Collaborating with leading organisations to drive innovation and strengthen the UK–Pakistan tech corridor."
          />
          <p className="text-[#3D4152] text-base leading-relaxed mb-8 max-w-3xl">
            Our strategic partnerships with governments, enterprises, investors, and academic institutions enable us to create meaningful impact and drive sustainable growth across both nations.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {partnerLogos.map((logo, i) => (
              <div key={logo} className="aspect-square bg-white border border-[#D8D5CF] flex items-center justify-center p-3">
                <div className="relative w-full h-full">
                  <Image src={logo} alt={`Partner logo ${i + 1}`} fill className="object-contain" sizes="120px" />
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Join the Partnership</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Strengthen the Corridor. Build the Future.
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Join us in building a stronger technology partnership between the UK and Pakistan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Become a Member</Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>Contact Us</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
