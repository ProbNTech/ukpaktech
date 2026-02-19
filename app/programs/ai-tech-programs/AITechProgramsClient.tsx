"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

const programs = [
  {
    title: "IT/AI Services Company",
    description: "A collective entity providing AI and IT services, leveraging shared resources and expertise to deliver world-class solutions.",
    features: ["Enterprise AI solutions", "Cloud infrastructure services", "Cross-border tech delivery"],
  },
  {
    title: "Collective Company Model",
    description: "A collaborative business structure that combines individual expertise into a unified, powerful entity, maximising impact and opportunities.",
    features: ["Shared resources & infrastructure", "Unified expertise pool", "Amplified market presence"],
  },
  {
    title: "Company Objectives",
    description: "Focused on driving innovation, creating sustainable growth, and building bridges between UK and Pakistani tech ecosystems.",
    features: ["Innovation acceleration", "Sustainable growth models", "UK-Pakistan tech bridges"],
  },
  {
    title: "AI Collective Startups",
    description: "Innovative startup models that pool resources, knowledge, and networks to accelerate AI-driven business development.",
    features: ["Resource pooling", "Knowledge sharing networks", "AI-driven acceleration"],
  },
  {
    title: "Collective Startup Model",
    description: "A revolutionary approach where multiple entrepreneurs collaborate under a shared structure, reducing risk and amplifying success.",
    features: ["Risk reduction", "Shared infrastructure", "Collaborative success"],
  },
  {
    title: "How It Works",
    description: "A streamlined process connecting talent, resources, and opportunities to create sustainable tech ventures and career pathways.",
    features: ["Talent connection", "Resource optimisation", "Career pathway creation"],
  },
];

const steps = [
  { number: "01", title: "Join the Program", description: "Become a member and access our comprehensive AI and tech programs." },
  { number: "02", title: "Assessment & Placement", description: "Complete skill assessments and get matched with the right program track." },
  { number: "03", title: "Training & Development", description: "Participate in certifications, training, and skill development programs." },
  { number: "04", title: "Collective Startup Formation", description: "Join or form collective startups leveraging shared resources, expertise, and collaborative models." },
  { number: "05", title: "Launch & Scale", description: "Launch your venture with ongoing support and cross-border market access." },
];

export default function AITechProgramsPage() {
  return (
    <div>
      <PageHero
        title="AI and Tech Programs"
        subtitle="Driving AI innovation and tech leadership between the UK and Pakistan through comprehensive training, certifications, and collaborative startup models."
      />

      {/* Intro */}
      <Section variant="light">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl leading-snug mb-6">
              UPTECH&apos;s AI and Tech Programs bridge the UK and Pakistan through cutting-edge AI services, collective company models, and innovative startup ecosystems.
            </p>
            <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed mb-6">
              Our programs are designed to accelerate technology adoption, build world-class AI capabilities, and create sustainable pathways for innovation across both nations through collective business models and collaborative startup ecosystems.
            </p>
            <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed">
              Through strategic partnerships, shared resources, and innovative collective structures, we&apos;re building a future where UK and Pakistani tech talent drives global AI innovation and technology leadership.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Programs Grid */}
      <Section variant="alt" id="programs">
        <AnimatedSection>
          <SectionHeader
            label="Our Programs"
            title="Program Areas"
            subtitle="Comprehensive initiatives designed to accelerate AI and technology adoption across the UK–Pakistan corridor."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div key={program.title} className="bg-white border border-[#D8D5CF] p-6 flex flex-col hover:border-[#2563EB]/40 transition-colors duration-300">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{program.title}</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-4" />
                <p className="text-[#3D4152] text-sm leading-relaxed mb-4 flex-1">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-[#3D4152] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* How It Works */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="How It Works"
            subtitle="A step-by-step journey from concept to successful AI and tech venture."
          />
          <div className="space-y-0">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-8 py-6 border-t border-[#1C1F2E]/15 last:border-b">
                <span className="text-sm font-semibold text-[#2563EB] tabular-nums w-8 flex-shrink-0 pt-0.5">{step.number}</span>
                <div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base sm:text-lg mb-1.5">{step.title}</h3>
                  <p className="text-[#3D4152] text-sm leading-relaxed">{step.description}</p>
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
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Join UPTECH</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Ready to Transform Your Tech Career?
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Join UPTECH&apos;s AI and Tech Programs and become part of a global network driving innovation between the UK and Pakistan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Become a Member</Button>
              <Button href={siteConfig.portalUrl} variant="glass" size="lg" showArrow>Access Portal</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
