"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { TrendingUp, Wallet, Users, Gift } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Generating Sales",
    description:
      "Get exclusive insights and expert tips to help your tech SME grow in private and public sector markets across the UK, Europe, Middle East and Africa.",
  },
  {
    icon: Wallet,
    title: "Access to Finance",
    description:
      "Specialist insight from investors, finance experts, and founders on accessing finance to grow your business. Find the latest funding and partnership opportunities.",
  },
  {
    icon: Users,
    title: "Talent",
    description:
      "Find support and insights for accessing the talent you need to scale your business — from hiring strategies to workforce development.",
  },
  {
    icon: Gift,
    title: "Member Offers",
    description:
      "Get the latest exclusive benefits for UPTECH members only — including discounts, priority access, and partner deals.",
  },
];

export default function SMEHubPage() {
  return (
    <div>
      <PageHero
        title="SME Hub"
        subtitle="Whether you're growing your business, entering new markets, securing contracts, or boosting sales — SME Hub provides the support, connections, and insights you need."
        image="/image/london-images/careers-financial-district.jpg"
      >
        <div className="flex flex-wrap gap-4 mt-2">
          <Button href="/membership" variant="glass" showArrow>Join the Hub</Button>
          <Button href="/contact" variant="ghost">Learn More</Button>
        </div>
      </PageHero>

      {/* Intro */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Your one-stop shop"
            title="Support for Growing Tech SMEs"
            subtitle="Our hub helps you overcome challenges and unlock new opportunities across multiple markets."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="bg-white border border-[#D8D5CF] rounded p-6 flex flex-col">
                  <Icon className="w-7 h-7 text-[#2563EB] mb-4" />
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">{pillar.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed flex-1">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Markets */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Markets" title="Where We Operate" subtitle="Helping tech SMEs grow across key global markets." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["United Kingdom", "Europe", "Middle East", "Africa"].map((market) => (
              <div key={market} className="bg-white border border-[#D8D5CF] rounded p-5 text-center">
                <p className="font-heading font-bold text-[#1C1F2E]">{market}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="light">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-2xl text-[#1C1F2E] mb-4">Ready to Grow Your Business?</h2>
            <p className="text-[#3D4152] leading-relaxed mb-6">
              Join the SME Hub and gain access to sales insights, finance opportunities, talent networks, and exclusive member benefits.
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
