"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2 } from "lucide-react";

const overviewItems = [
  { title: "Startup Funding", description: "Seed and early-stage funding for innovative technology startups." },
  { title: "Research Grants", description: "Support for academic research and technology development projects." },
  { title: "Growth Capital", description: "Investment opportunities for scaling technology businesses." },
];

const opportunities = [
  { title: "Innovation Grants", description: "Funding for innovative technology projects that demonstrate potential for cross-border impact." },
  { title: "Startup Accelerator", description: "Comprehensive support including funding, mentorship, and access to networks." },
  { title: "Bilateral Projects", description: "Grants for collaborative projects between UK and Pakistan organisations." },
  { title: "Research & Development", description: "Support for R&D initiatives in emerging technologies and digital transformation." },
  { title: "Enterprise Partnerships", description: "Funding opportunities for established companies expanding cross-border operations." },
  { title: "Skills Development", description: "Grants for programs that enhance technology skills and workforce capabilities." },
];

const eligibilityCriteria = [
  "Technology-focused projects with clear innovation potential",
  "Alignment with UK–Pakistan technology partnership objectives",
  "Demonstrated commitment to cross-border collaboration",
  "Viable business model or research proposal",
  "Experienced team with relevant expertise",
];

const applicationSteps = [
  { number: "01", title: "Submit Application", description: "Complete the online application form with project details and objectives." },
  { number: "02", title: "Review Process", description: "Expert panel evaluates your proposal against eligibility and impact criteria." },
  { number: "03", title: "Funding Decision", description: "Notification of outcome and disbursement of approved funds." },
];

const benefits = [
  { title: "Financial Support", description: "Access to capital for project development and scaling." },
  { title: "Mentorship", description: "Guidance from experienced industry leaders and experts." },
  { title: "Networking", description: "Connect with investors, partners, and potential collaborators." },
  { title: "Market Access", description: "Opportunities to expand into UK and Pakistan markets." },
];

export default function FundingAndGrantsClient() {
  return (
    <div>
      <PageHero
        title="Funding and Grants"
        subtitle="Access funding opportunities to drive technology innovation and cross-border collaboration between the UK and Pakistan."
      />

      {/* Intro */}
      <Section variant="light">
        <AnimatedSection>
          <div className="max-w-3xl mb-10">
            <p className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl leading-snug mb-6">
              UPTECH provides access to funding opportunities and grants designed to support technology innovation, startup growth, and cross-border collaboration between the UK and Pakistan.
            </p>
            <p className="text-[#3D4152] text-base leading-relaxed mb-5">
              Our funding programs enable entrepreneurs, researchers, and organisations to turn innovative ideas into reality. Whether you&apos;re a startup seeking seed funding, a researcher looking for grant support, or an enterprise exploring partnership opportunities, we connect you with the right funding sources and resources.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {overviewItems.map((item) => (
              <div key={item.title} className="bg-white border border-[#D8D5CF] p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{item.title}</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-3" />
                <p className="text-[#3D4152] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Available Opportunities */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Funding"
            title="Available Opportunities"
            subtitle="Explore our range of funding programs designed to support technology innovation and cross-border collaboration."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp) => (
              <div key={opp.title} className="bg-white border border-[#D8D5CF] p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{opp.title}</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-3" />
                <p className="text-[#3D4152] text-sm leading-relaxed">{opp.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Eligibility & Application Process */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                label="Eligibility"
                title="Eligibility Criteria"
                subtitle="Understanding the requirements for funding and grant applications."
              />
              <ul className="space-y-0">
                {eligibilityCriteria.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-3 border-b border-[#1C1F2E]/10 last:border-b-0">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#3D4152] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader
                label="Process"
                title="Application Process"
                subtitle="Simple and streamlined steps to secure funding."
              />
              <div className="space-y-0">
                {applicationSteps.map((step) => (
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

      {/* Benefits */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Benefits"
            title="Why Apply Through UPTECH"
            subtitle="Beyond financial support, we provide comprehensive resources to help you succeed."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="border-t-2 border-[#2563EB] pt-4">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{benefit.title}</h3>
                <p className="text-[#3D4152] text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Apply Now</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Ready to Secure Funding?
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Explore funding opportunities and take your technology innovation to the next level.
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
