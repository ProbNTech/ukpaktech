"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2 } from "lucide-react";

const offerings = [
  { title: "Product & Solutions Showcase", description: "Feature your software products, digital platforms, and services through Council channels, events, and curated industry showcases." },
  { title: "Cross-Border Promotion", description: "Reach new audiences in the UK, Europe, Middle East, and Africa through targeted marketing campaigns and strategic partnerships." },
  { title: "Content & Thought Leadership", description: "Publish articles, case studies, and insights to position your company as an industry leader." },
  { title: "Event Marketing", description: "Promote your brand at Council events, exhibitions, and trade delegations with premium visibility packages." },
  { title: "Digital Campaigns", description: "Leverage Council digital channels including email, social media, and the web platform for targeted outreach." },
  { title: "Market Intelligence", description: "Access insights on buyer preferences, competitive landscape, and market trends to refine your marketing strategy." },
];

const steps = [
  { number: "01", title: "Onboard", description: "Join the hub and share your product portfolio, target markets, and growth objectives." },
  { number: "02", title: "Strategy", description: "We develop a tailored cross-border marketing strategy aligned with your business goals." },
  { number: "03", title: "Execute", description: "Launch campaigns across Council channels, events, and partner networks." },
  { number: "04", title: "Grow", description: "Track results, optimise performance, and scale your international presence." },
];

export default function DigitalMarketingPage() {
  return (
    <div>
      <PageHero
        title="Digital Product Marketing Hub"
        subtitle="Promote your software solutions, platforms, and technology services across the UK, Europe, Middle East and Africa. Accelerate cross-border growth with practical, results-driven marketing support."
        image="/image/london-images/night-skyline-shard.jpg"
      >
        <div className="flex flex-wrap gap-4 mt-2">
          <Button href="/membership" variant="glass" showArrow>Get Started</Button>
          <Button href="/contact" variant="ghost">Learn More</Button>
        </div>
      </PageHero>

      {/* What We Offer */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Capabilities" title="What We Offer" subtitle="Practical, results-driven marketing support tailored for tech SMEs, scale-ups, and established firms." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, index) => (
              <div key={index} className="bg-white border border-[#D8D5CF] rounded p-6">
                <h3 className="font-heading font-bold text-[#1C1F2E] mb-2">{item.title}</h3>
                <div className="h-px bg-[#D8D5CF] mb-3" />
                <p className="text-sm text-[#3D4152] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* How It Works */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Process" title="How It Works" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white border border-[#D8D5CF] rounded p-6">
                <p className="text-3xl font-heading font-bold text-[#2563EB] mb-4">{step.number}</p>
                <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">{step.title}</h3>
                <div className="h-px bg-[#D8D5CF] mb-3" />
                <p className="text-sm text-[#3D4152] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Target Audience */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="For you" title="Who Is This For" />
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Tech SMEs looking to expand into international markets",
              "Scale-ups seeking brand visibility and lead generation",
              "Established firms promoting new products or entering new regions",
              "SaaS companies targeting UK, European, and Middle Eastern buyers",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white border border-[#D8D5CF] rounded p-4">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#3D4152]">{item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-2xl text-[#1C1F2E] mb-4">Ready to Grow Your Market Presence?</h2>
            <p className="text-[#3D4152] leading-relaxed mb-6">
              Join the Digital Product Marketing Hub and start promoting your technology solutions to a global audience.
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
