"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2 } from "lucide-react";

const capabilities = [
  { title: "AI-Powered Insights", description: "Intelligent analytics and recommendations to enhance decision-making and productivity." },
  { title: "Workforce Enablement", description: "Tools and platforms that empower teams to work smarter and achieve better outcomes." },
  { title: "Skills Development", description: "Personalised learning paths and AI-assisted training to build future-ready capabilities." },
  { title: "Collaboration Tools", description: "Seamless cross-border collaboration platforms connecting UK and Pakistan professionals." },
  { title: "AI Governance", description: "Ethical frameworks and compliance tools ensuring responsible AI deployment." },
  { title: "Automation & Efficiency", description: "Streamline workflows and automate routine tasks to focus on high-value work." },
];

const howItWorks = [
  { number: "01", title: "Assess & Plan", description: "Evaluate your organisation&apos;s needs and develop a tailored AI integration strategy.", outcome: "Personalised AI roadmap" },
  { number: "02", title: "Implement & Train", description: "Deploy AI tools and provide comprehensive training to your team across all levels.", outcome: "Operational AI capability" },
  { number: "03", title: "Optimise & Scale", description: "Continuously refine AI applications and scale successful implementations.", outcome: "Measurable productivity gains" },
  { number: "04", title: "Collaborate & Grow", description: "Leverage cross-border networks and partnerships to expand your AI impact.", outcome: "Sustained innovation culture" },
];

const useCases = [
  { title: "Workforce Enablement", description: "Empower employees with AI tools that augment capabilities and accelerate performance across organisations." },
  { title: "Skills Development", description: "Personalised learning experiences that adapt to individual needs and career goals for future-readiness." },
  { title: "AI Inclusion", description: "Democratise access to AI technologies, ensuring no one is left behind in the digital transformation." },
  { title: "Policy & Ecosystem Collaboration", description: "Foster cross-border partnerships and policy frameworks that support responsible AI adoption." },
];

const stats = [
  { value: "6", label: "sectors covered" },
  { value: "76%", label: "average adoption rate" },
  { value: "79%", label: "average efficiency gain" },
  { value: "Cross-border", label: "UK–Pakistan delivery" },
];

export default function PeopleAIClient() {
  return (
    <div>
      <PageHero
        title="People AI Platform"
        subtitle="Empowering people and organisations through human-centric AI support systems that integrate technology with professional services."
        image="/image/london-images/careers-financial-district.jpg"
      />

      {/* Intro */}
      <Section variant="light">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl leading-snug mb-6">
              The People AI Platform is designed to democratise access to AI capabilities, ensuring that individuals and organisations can leverage artificial intelligence to enhance productivity, develop skills, and drive innovation.
            </p>
            <p className="text-[#3D4152] text-base leading-relaxed mb-5">
              We focus on creating inclusive AI solutions that support workforce enablement, skills development, and cross-border collaboration between the UK and Pakistan.
            </p>
            <p className="text-[#3D4152] text-base leading-relaxed">
              Through a human-centric approach, we bridge technology and professional services to enable sustainable workforce transformation across sectors.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Platform Capabilities */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Capabilities"
            title="Platform Capabilities"
            subtitle="Comprehensive AI-powered tools and services designed to transform how people work, learn, and collaborate."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{cap.title}</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-3" />
                <p className="text-[#3D4152] text-sm leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* How It Works */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Your Journey"
            title="How It Works"
            subtitle="A simple, structured approach to integrating AI into your organisation and workflows."
          />
          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((step) => (
              <div key={step.number} className="border-t-2 border-[#2563EB] pt-5">
                <span className="text-xs font-bold text-[#2563EB] tabular-nums block mb-2">{step.number}</span>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">{step.title}</h3>
                <p className="text-[#3D4152] text-sm leading-relaxed mb-3">{step.description}</p>
                <span className="text-xs font-semibold text-[#2563EB]">→ {step.outcome}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Impact & Use Cases */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Impact"
            title="Use Cases"
            subtitle="Real-world applications driving transformation across industries and sectors."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300 flex gap-4">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                <div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-1">{useCase.title}</h3>
                  <p className="text-[#3D4152] text-sm leading-relaxed">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Stats */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Platform Impact"
            title="Metrics and Reach"
            subtitle="Illustrative metrics demonstrating the transformative power of AI across key sectors."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t-2 border-[#2563EB] pt-4">
                <div className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl mb-1">{stat.value}</div>
                <p className="text-[#3D4152] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#7A7E8F]">Sample metrics for illustration. Updated as programs scale.</p>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Get Started</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Join the People AI Platform
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Be part of a transformative movement that&apos;s reshaping how people and organisations work with AI across the UK and Pakistan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Get Started</Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>Contact Us</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
