"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2, Building2, User, ChevronDown, Globe, Briefcase, Shield, TrendingUp, Clock, Award } from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "500+", label: "Placements Made" },
  { value: "120+", label: "Partner Companies" },
  { value: "15+", label: "Countries Covered" },
  { value: "95%", label: "Satisfaction Rate" },
];

const employerBenefits = [
  { title: "Skilled Professionals", description: "Access skilled technology professionals for contract-based roles" },
  { title: "Flexible Teams", description: "Build flexible, high-performing teams without long-term commitments" },
  { title: "Fast Matching", description: "Save time and connect with pre-qualified talent networks" },
  { title: "Outsourcing Options", description: "Explore outsourcing and managed service partnerships" },
  { title: "International Expertise", description: "Expand your business with international expertise and collaboration" },
];

const professionalBenefits = [
  { title: "Global Opportunities", description: "Discover exciting international contract opportunities" },
  { title: "Cutting-Edge Projects", description: "Gain exposure to international and cutting-edge global technology projects" },
  { title: "Network Building", description: "Build your network and experience Cross-border industry networks" },
  { title: "Skill Development", description: "Develop skills while working with top-tier companies" },
  { title: "Career Pathways", description: "Professional development pathways" },
];

const processSteps = [
  { number: "01", title: "Register", description: "Create your profile as an employer or professional. Share your requirements, skills, and preferences.", outcome: "Profile activated" },
  { number: "02", title: "Match", description: "Our team uses AI-assisted matching and manual curation to find the best fit for both parties.", outcome: "Shortlist prepared" },
  { number: "03", title: "Interview", description: "Facilitated introductions and interviews between matched employers and professionals.", outcome: "Candidates selected" },
  { number: "04", title: "Onboard", description: "We handle contracts, compliance, and onboarding to ensure a smooth start for all parties.", outcome: "Placement confirmed" },
];

const sectors = [
  { icon: Globe, title: "Software Development", description: "Full-stack, frontend, backend, mobile, and cloud engineering professionals." },
  { icon: Shield, title: "Cybersecurity", description: "Security analysts, penetration testers, and compliance specialists." },
  { icon: TrendingUp, title: "Data & AI", description: "Data scientists, ML engineers, and AI specialists for advanced analytics projects." },
  { icon: Briefcase, title: "Product & Design", description: "Product managers, UX designers, and UI engineers for digital products." },
  { icon: Clock, title: "DevOps & Cloud", description: "DevOps engineers, cloud architects, and infrastructure specialists." },
  { icon: Award, title: "FinTech & HealthTech", description: "Domain specialists for regulated industries including finance and healthcare." },
];

const faqs = [
  { question: "What types of contracts are available?", answer: "We facilitate fixed-term contracts (3\u201312 months), project-based engagements, and contract-to-hire arrangements. Contract terms are flexible and can be tailored to the needs of both employers and professionals." },
  { question: "How is compliance handled?", answer: "We manage all compliance aspects including work permits, tax obligations, employment law, and contractual agreements. Our legal team ensures all placements comply with UK and Pakistan employment regulations." },
  { question: "What skill levels are available?", answer: "Our talent pool ranges from mid-level professionals with 3+ years of experience to senior specialists and technical leads with 10+ years. We also support graduate placements through our partnership programs." },
  { question: "How long does the matching process take?", answer: "Typical matching takes 2\u20134 weeks from requirement submission to candidate shortlist. For urgent requirements, we offer an expedited process that can deliver candidates within 5\u20137 business days." },
  { question: "What are the costs for employers?", answer: "Employer fees are based on the contract value and duration. UPTECH members receive preferential rates. Contact us for a detailed pricing structure tailored to your requirements." },
];

export default function OverseasEmploymentPage() {
  return (
    <div>
      <PageHero
        title="Overseas Contract Employment Opportunities"
        subtitle="The UK-Pakistan Tech Council facilitates skilled technology professionals with high-value overseas contract opportunities, helping both employers and talent thrive in global markets."
        image="/image/london-images/global-workforce.jpg"
      >
        <div className="flex flex-wrap gap-4 mt-2">
          <Button href="/membership" variant="glass" showArrow>Get Connected</Button>
          <Button href="/contact" variant="ghost">Learn More</Button>
        </div>
      </PageHero>

      {/* Stats Bar */}
      <section className="relative z-[1] bg-[#1C1F2E]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl mb-1">{stat.value}</p>
                <p className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <Section variant="light">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-3">Overview</p>
            <h2 className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl lg:text-3xl leading-snug mb-6">
              Our Focus
            </h2>
            <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed mb-5">
              We support ethical, compliant, and commercially viable pathways that connect skilled professionals with long-term, short-term and project-based opportunities across UK, Europe, Middle East and Pakistan.
            </p>
            <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed">
              We prioritise transparency, compliance, and long-term relationship building. Our goal is to create structured, sustainable talent mobility between the UK, Europe, Middle East and Pakistan&apos;s technology sectors. By enabling overseas contract employment, we strengthen collaboration, accelerate knowledge exchange, and support innovation across both ecosystems.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* For Employers & For Professionals */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Employers */}
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-7 h-7 text-[#2563EB]" />
                <h3 className="font-heading font-bold text-xl text-[#1C1F2E]">For Employers</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <p className="text-sm text-[#3D4152] leading-relaxed mb-5">
                Find the Right Talent, Fast &mdash; We help organisations:
              </p>
              <div className="space-y-4">
                {employerBenefits.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-[#1C1F2E] text-sm">{item.title}</h4>
                      <p className="text-xs text-[#3D4152] leading-relaxed mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professionals */}
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-7 h-7 text-[#22C55E]" />
                <h3 className="font-heading font-bold text-xl text-[#1C1F2E]">For Professionals</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <p className="text-sm text-[#3D4152] leading-relaxed mb-5">
                Grow Your Career Globally &mdash; We provide access to:
              </p>
              <div className="space-y-4">
                {professionalBenefits.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-[#1C1F2E] text-sm">{item.title}</h4>
                      <p className="text-xs text-[#3D4152] leading-relaxed mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* How It Works */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="How It Works"
            subtitle="A structured, compliant process from registration to placement."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="border-t-2 border-[#2563EB] pt-5">
                <span className="text-xs font-bold text-[#2563EB] tabular-nums block mb-2">{step.number}</span>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{step.title}</h3>
                <p className="text-[#3D4152] text-sm leading-relaxed mb-3">{step.description}</p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                  <span className="text-xs font-semibold text-[#22C55E]">{step.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Technology Sectors */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Sectors"
            title="Technology Sectors We Cover"
            subtitle="Our talent pool spans the full spectrum of modern technology disciplines."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div key={sector.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#2563EB] mb-4" />
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{sector.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed">{sector.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* FAQ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about overseas contract employment."
          />
          <FAQSection faqs={faqs} />
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Get Started</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Get connected. Access opportunities. Grow your impact.
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Overseas contract employment through the Council provides a trusted, compliant, and efficient way to connect talent with opportunity. Our goal is to accelerate growth, enhance careers, and strengthen the UK-Pakistan tech ecosystem through high-quality contract placements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Get Connected</Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>Contact Us</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}

function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={faq.question} className="border-t border-[#1C1F2E]/15 last:border-b">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-5 text-left gap-4"
          >
            <span className="font-heading font-semibold text-[#1C1F2E] text-base">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-[#7A7E8F] flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          {openIndex === index && (
            <div className="pb-5 text-[#3D4152] text-sm leading-relaxed">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
