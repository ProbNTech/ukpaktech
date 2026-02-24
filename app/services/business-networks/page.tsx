"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2 } from "lucide-react";

const whyChooseUs = [
  { title: "Strategic Connections", description: "Every event brings together the right founders and the right investors who can help them scale." },
  { title: "Comprehensive Support", description: "From event design to investor outreach, branding, post-event follow-up and deal tracking — we handle every step." },
  { title: "Proven Results", description: "Our track record of funding success speaks for itself across multiple markets." },
  { title: "Global Ecosystem", description: "A growing network of VCs, angels, incubators, and ecosystem partners across continents." },
  { title: "Data-Driven Insights", description: "We use analytics to identify high-potential startups and investor interests." },
  { title: "Cross-Border Expertise", description: "Deep understanding of both UK and Pakistan markets, regulations, and business cultures." },
];

const partners = [
  "Venture Capital & Private Equity Firms",
  "Angel Networks & Family Offices",
  "Government Startup Missions",
  "University Incubators & Accelerators",
  "Corporate Innovation & R&D Divisions",
];

const targetMarket = [
  "Early-stage startups (Seed to Series A)",
  "Venture capital firms, angel investors, and family offices",
  "Accelerators, incubators, and innovation hubs",
  "Corporate innovation and CSR programs",
  "Government and development agencies supporting entrepreneurship",
];

export default function BusinessNetworksPage() {
  return (
    <div>
      <PageHero
        title="Business Networks"
        subtitle="Access the world's largest business network with strategic connections, comprehensive advice, and tailored market support across the UK and international markets."
        image="/image/london-images/tower-bridge-wide.jpg"
      >
        <div className="flex flex-wrap gap-4 mt-2">
          <Button href="/membership" variant="glass" showArrow>Become a Member</Button>
          <Button href="/contact" variant="ghost">Get in Touch</Button>
        </div>
      </PageHero>

      {/* Intro */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader label="Overview" title="The World's Largest Business Network" />
              <p className="text-[#3D4152] leading-relaxed mb-4">
                Our specialists provide access to comprehensive and tailored advice covering both the UK and international markets. They build on a heritage of collaboration with the Enterprise Europe Network, the most extensive association of innovation and growth support organisations around the world.
              </p>
              <p className="text-[#3D4152] leading-relaxed">
                This advice ranges from sourcing and establishing connections with new collaborators and potential partners, to information on local regulations and market entry strategies.
              </p>
            </div>
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-4">Enterprise Europe Network</h3>
              <p className="text-sm text-[#3D4152] leading-relaxed mb-4">
                Access live global partnering opportunities through the Enterprise Europe Network — the most extensive association of innovation and growth support organisations worldwide.
              </p>
              <Button href="/contact" variant="secondary" showArrow>Explore Opportunities</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Why Choose Us */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Advantages" title="Why Choose Us" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white border border-[#D8D5CF] rounded p-6">
                <h3 className="font-heading font-bold text-[#1C1F2E] mb-2">{item.title}</h3>
                <div className="h-px bg-[#D8D5CF] mb-3" />
                <p className="text-sm text-[#3D4152] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Partners & Target Market */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader label="Collaborations" title="Our Partners" />
              <div className="space-y-3">
                {partners.map((partner, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white border border-[#D8D5CF] rounded p-4">
                    <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3D4152]">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader label="Audience" title="Target Market" />
              <div className="space-y-3">
                {targetMarket.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white border border-[#D8D5CF] rounded p-4">
                    <CheckCircle2 className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3D4152]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-2xl text-[#1C1F2E] mb-4">Ready to Expand Your Network?</h2>
            <p className="text-[#3D4152] leading-relaxed mb-6">
              Join the UPTECH business network and unlock strategic connections, market insights, and partnership opportunities across continents.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/membership" variant="primary" showArrow>Become a Member</Button>
              <Button href="/contact" variant="secondary">Contact Us</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
