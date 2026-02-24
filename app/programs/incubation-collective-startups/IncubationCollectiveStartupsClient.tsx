"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2 } from "lucide-react";

const focusAreas = [
  { title: "AI & Data Products", description: "Building intelligent solutions that transform industries through data-driven innovation." },
  { title: "FinTech & Digital Payments", description: "Revolutionising financial services with secure, scalable payment technologies." },
  { title: "HealthTech & MedTech", description: "Advancing healthcare delivery through cutting-edge medical technologies and digital health solutions." },
  { title: "Cloud, SaaS & Enterprise Software", description: "Delivering scalable software solutions that power modern businesses and enterprises." },
  { title: "Cybersecurity & Digital Infrastructure", description: "Protecting digital assets and building resilient infrastructure for the modern economy." },
  { title: "EdTech & Future Skills", description: "Transforming education and workforce development through innovative learning platforms." },
];

const timelineSteps = [
  { number: "01", title: "Ideation & Validation", outcomes: ["Market research and opportunity assessment", "Concept validation and feasibility analysis"] },
  { number: "02", title: "Product & Market Fit", outcomes: ["MVP development and testing support", "Customer discovery and market positioning"] },
  { number: "03", title: "Compliance & Readiness", outcomes: ["Legal structure and regulatory guidance", "Intellectual property and compliance frameworks"] },
  { number: "04", title: "Market Access & Partnerships", outcomes: ["UK and Pakistan market entry strategies", "Strategic partnership and distribution channels"] },
  { number: "05", title: "Investment & Scale", outcomes: ["Funding rounds and investor introductions", "Scaling strategies and operational excellence"] },
];

const audiences = [
  {
    title: "Early-Stage Founders",
    description: "For entrepreneurs with innovative ideas seeking validation, mentorship, and initial support to transform concepts into viable businesses.",
    gains: ["Idea validation and market research support", "Access to mentorship and advisory networks", "Initial infrastructure and workspace"],
  },
  {
    title: "Growth-Stage Startups",
    description: "For established startups looking to scale operations, expand market reach, and access advanced resources and partnerships.",
    gains: ["Scaling strategies and growth frameworks", "Market expansion and partnership opportunities", "Advanced funding and investor connections"],
  },
  {
    title: "Corporate & Institutional Partners",
    description: "For organisations seeking to collaborate with innovative startups, access new technologies, and drive digital transformation.",
    gains: ["Access to curated startup portfolios", "Innovation partnerships and co-development", "Cross-border market entry support"],
  },
];

const resources = [
  { label: "Mentorship & advisory", badge: "Cross-border" },
  { label: "Legal & compliance guidance", badge: "UK" },
  { label: "UK market entry support", badge: "UK" },
  { label: "Investor & VC access", badge: "Cross-border" },
  { label: "Product & technical advisory", badge: "Cross-border" },
  { label: "Policy and ecosystem connections", badge: "Pakistan" },
];

const stats = [
  { value: "50+", label: "startups supported" },
  { value: "200+", label: "partnerships enabled" },
  { value: "15+", label: "markets accessed" },
  { value: "£5M+", label: "funding facilitated" },
];

export default function IncubationCollectiveStartupsClient() {
  return (
    <div>
      <PageHero
        title="Incubation and Collective Startups"
        subtitle="Nurturing the next generation of tech startups and innovators through collaborative models and comprehensive support."
        image="/image/london-images/night-skyline-shard.jpg"
      />

      {/* Intro */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl leading-snug mb-6">
                UPTECH&apos;s Incubation Centre provides a comprehensive ecosystem for startups to grow, scale, and succeed through collective models and collaborative structures.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed mb-6">
                Our Incubation Centre offers mentorship, resources, funding connections, and a collaborative environment where innovation thrives. Through our collective startup model, entrepreneurs can leverage shared infrastructure, expertise, and networks.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed">
                We accelerate the journey from idea to market-ready product, connecting UK and Pakistani entrepreneurs with global opportunities.
              </p>
            </div>
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-5">Program Snapshot</h3>
              <div className="h-px bg-[#1C1F2E]/15 mb-5" />
              <ul className="space-y-3">
                {["Mentorship & Operators Network", "Shared Infrastructure & Tooling", "Funding & Investor Connections", "UK–Pakistan Market Access"].map((item) => (
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

      {/* Focus Areas */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="What We Incubate"
            title="Focus Areas"
            subtitle="Specialised support for high-impact tech sectors driving innovation across the UK and Pakistan."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <div key={area.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{area.title}</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-3" />
                <p className="text-[#3D4152] text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Incubation Model */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Our Model"
            title="Incubation Pathway"
            subtitle="A structured pathway from concept to market-ready venture with comprehensive support at every stage."
          />
          <div className="space-y-0">
            {timelineSteps.map((step) => (
              <div key={step.number} className="flex gap-8 py-6 border-t border-[#1C1F2E]/15 last:border-b">
                <span className="text-sm font-semibold text-[#2563EB] tabular-nums w-8 flex-shrink-0 pt-0.5">{step.number}</span>
                <div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base sm:text-lg mb-2">{step.title}</h3>
                  <ul className="space-y-1">
                    {step.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                        <span className="text-[#3D4152] text-sm leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Collective Startup Approach */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="max-w-3xl">
            <SectionHeader
              label="Collective Model"
              title="The Collective Startup Approach"
              subtitle="A model that transforms how startups collaborate, share resources, and scale together."
            />
            <p className="text-[#3D4152] text-base leading-relaxed mb-5">
              Our collective startup model emphasises collaboration over competition, enabling entrepreneurs to pool resources, share infrastructure, and reduce individual risk while amplifying collective success.
            </p>
            <p className="text-[#3D4152] text-base leading-relaxed">
              By combining expertise, networks, and market access, collective startups can tackle larger opportunities, enter new markets faster, and build sustainable ventures that benefit from sector-driven solutions and cross-border partnerships.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Who Should Join */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Who It&apos;s For"
            title="Who Should Join"
            subtitle="Our programs are designed for founders, startups, and partners at different stages of growth."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((audience) => (
              <div key={audience.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300 flex flex-col">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{audience.title}</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-4" />
                <p className="text-[#3D4152] text-sm leading-relaxed mb-5 flex-1">{audience.description}</p>
                <p className="text-xs font-bold text-[#7A7E8F] uppercase tracking-wider mb-3">What they gain</p>
                <ul className="space-y-2">
                  {audience.gains.map((gain) => (
                    <li key={gain} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-[#3D4152] text-sm">{gain}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Resources */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Support"
            title="What Participants Receive"
            subtitle="Comprehensive resources and support designed to accelerate your startup journey."
          />
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {resources.map((resource) => (
              <div key={resource.label} className="flex items-center justify-between py-4 border-b border-[#1C1F2E]/10">
                <span className="text-[#1C1F2E] text-sm font-medium">{resource.label}</span>
                <span className="text-xs font-semibold text-[#2563EB] bg-[#2563EB]/10 px-3 py-1">
                  {resource.badge}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Outcomes */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Impact"
            title="Outcomes That Matter"
            subtitle="Measurable impact that demonstrates the value of our incubation and collective startup programs."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t-2 border-[#2563EB] pt-4">
                <div className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl mb-1">{stat.value}</div>
                <p className="text-[#3D4152] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#7A7E8F]">Metrics shown are indicative and updated as programs scale.</p>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Get Involved</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Build, Scale, and Expand With UPTECH
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Join our incubation program and become part of a collaborative ecosystem driving innovation across the UK and Pakistan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Apply for Incubation</Button>
              <Button href="/membership" variant="glass" size="lg" showArrow>Partner With Us</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
