"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2, Building2, User } from "lucide-react";

const employerBenefits = [
  "Access skilled technology professionals for contract-based roles",
  "Build flexible, high-performing teams without long-term commitments",
  "Save time and connect with pre-qualified talent networks",
  "Explore outsourcing and managed service partnerships",
  "Expand your business with international expertise and collaboration",
];

const professionalBenefits = [
  "Discover exciting international contract opportunities",
  "Gain exposure to cutting-edge global technology projects",
  "Build your network across cross-border industry networks",
  "Develop skills while working with top-tier companies",
  "Access professional development pathways",
];

export default function OverseasEmploymentPage() {
  return (
    <div>
      <PageHero
        title="Overseas Contract Employment"
        subtitle="Connecting skilled technology professionals with international contract opportunities, strengthening collaboration and innovation across the UK–Pakistan tech ecosystem."
        image="/image/london-images/about-london-skyline.jpg"
      >
        <div className="flex flex-wrap gap-4 mt-2">
          <Button href="/membership" variant="glass" showArrow>Get Connected</Button>
          <Button href="/contact" variant="ghost">Learn More</Button>
        </div>
      </PageHero>

      {/* Intro */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Overview"
            title="Bridging Talent with Opportunity"
            subtitle="By enabling overseas contract employment, we strengthen collaboration, accelerate knowledge exchange, and support innovation across both ecosystems."
          />
        </AnimatedSection>
      </Section>

      {/* For Employers & For Professionals */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Employers */}
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-7 h-7 text-[#2563EB]" />
                <h3 className="font-heading font-bold text-xl text-[#1C1F2E]">For Employers</h3>
              </div>
              <p className="text-sm text-[#3D4152] leading-relaxed mb-5">
                Find the right talent, fast. We help organisations build flexible teams with skilled tech professionals.
              </p>
              <div className="space-y-3">
                {employerBenefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3D4152]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professionals */}
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-7 h-7 text-[#2563EB]" />
                <h3 className="font-heading font-bold text-xl text-[#1C1F2E]">For Professionals</h3>
              </div>
              <p className="text-sm text-[#3D4152] leading-relaxed mb-5">
                Grow your career globally. We provide access to international contract opportunities and development pathways.
              </p>
              <div className="space-y-3">
                {professionalBenefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3D4152]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Why Join */}
      <Section variant="light">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-2xl text-[#1C1F2E] mb-4">Why Join</h2>
            <p className="text-[#3D4152] leading-relaxed mb-2">
              Overseas contract employment through the Council provides a trusted, compliant, and efficient way to connect talent with opportunity.
            </p>
            <p className="text-[#3D4152] leading-relaxed mb-8">
              Our goal is to accelerate growth, enhance careers, and strengthen the UK–Pakistan tech ecosystem through high-quality contract placements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/membership" variant="primary" showArrow>Get Connected</Button>
              <Button href="/contact" variant="secondary">Contact Us</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
