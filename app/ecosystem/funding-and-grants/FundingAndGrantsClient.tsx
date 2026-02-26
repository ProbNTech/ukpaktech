"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* --- Data ---------------------------------------------------------------- */

const stats = [
  { value: "\u00A350M+", label: "Funding Facilitated" },
  { value: "150+", label: "Companies Funded" },
  { value: "85%", label: "Success Rate" },
  { value: "3", label: "Funding Stages" },
];

const overviewItems = [
  {
    title: "Startup Funding",
    description: "Seed and early-stage funding for innovative technology startups with cross-border potential.",
  },
  {
    title: "Research Grants",
    description: "Support for academic research and technology development projects driving bilateral innovation.",
  },
  {
    title: "Growth Capital",
    description: "Investment opportunities for scaling technology businesses across the UK\u2013Pakistan corridor.",
  },
];

const opportunities = [
  { title: "Innovation Grants", description: "Funding for innovative technology projects that demonstrate potential for cross-border impact." },
  { title: "Startup Accelerator", description: "Comprehensive support including funding, mentorship, and access to networks." },
  { title: "Bilateral Projects", description: "Grants for collaborative projects between UK and Pakistan organisations." },
  { title: "Research & Development", description: "Support for R&D initiatives in emerging technologies and digital transformation." },
  { title: "Enterprise Partnerships", description: "Funding opportunities for established companies expanding cross-border operations." },
  { title: "Skills Development", description: "Grants for programs that enhance technology skills and workforce capabilities." },
];

const fundingGrantsIntro = {
  heading: "Bridging the Funding Gap for Early-Stage Companies",
  description: "Pakistan\u2019s policy framework already offers vital support for early-stage companies, but we can enhance this further by introducing:",
};

const fundingStages = [
  {
    stage: "Pre-Seed & Seed",
    title: "Startup Funding",
    description: "We provide entrepreneurs with pre-seed capital, support from a dedicated team, access to corporate partners and membership to our global founder community.",
    features: ["Pre-seed capital investment", "Dedicated support team", "Corporate partner introductions", "Global founder community access"],
  },
  {
    stage: "Sophisticated Investor",
    title: "Sophisticated Investor",
    description: "Currently, to participate in early-stage investment syndicates, individuals must qualify as sophisticated investors based on an income of \u00A3250K or assets worth \u00A31 million. This rule excludes many knowledgeable and experienced individuals, like startup employees and senior leaders, who might have lower salaries due to equity-based compensation. By broadening the criteria, we can include more of these potential investors and strengthen support for early-stage startups.",
    features: ["Broaden qualification criteria beyond income thresholds", "Include experienced startup employees and senior leaders", "Support equity-based compensation holders", "Strengthen early-stage startup investment syndicates"],
  },
  {
    stage: "Series A & B",
    title: "Growth Capital",
    description: "For companies that demonstrate potential to 10x their growth. By aligning with our expertise, network, and capital, your startup will be well-positioned to scale rapidly.",
    features: ["Raise capital with operational support", "Pitch at flagship investor days", "Warm introductions to top-tier funds", "Six months 1:1 expert support"],
  },
  {
    stage: "R&D",
    title: "Research & Development Incentives",
    description: "At UK-Pakistan Tech Council (UPTECH), we highly value the current R&D tax incentive, recognizing the pivotal role that research and development play in driving technological advancements. With the launch of this initiative in Pakistan, we aim to further bolster the tech sector by making the R&D tax incentive more transparent and accessible, for digital literacy, healthcare sector, energy solutions and infusion technologies. We appreciate ongoing efforts to clarify the application of these incentives and are committed to collaborating closely with experts in the field to provide clearer guidance. Our goal is to ensure that the intent and application of this incentive are well understood and effectively implemented by both industry leaders and administrators. Through this initiative, we are paving the way for a robust, innovation-driven future in Pakistan.",
    features: ["Digital literacy R&D incentives", "Healthcare sector innovation support", "Energy solutions R&D programmes", "Infusion technologies advancement"],
  },
];

const eligibilityCriteria = [
  "Technology-focused projects with clear innovation potential",
  "Alignment with UK\u2013Pakistan technology partnership objectives",
  "Demonstrated commitment to cross-border collaboration",
  "Viable business model or research proposal",
  "Experienced team with relevant expertise",
];

const applicationSteps = [
  { number: "01", title: "Submit Application", description: "Complete the online application form with project details and objectives.", outcome: "Application logged" },
  { number: "02", title: "Review Process", description: "Expert panel evaluates your proposal against eligibility and impact criteria.", outcome: "Proposal scored" },
  { number: "03", title: "Due Diligence", description: "Shortlisted applicants undergo a thorough due diligence and reference check process.", outcome: "Validation complete" },
  { number: "04", title: "Funding Decision", description: "Notification of outcome and disbursement of approved funds with milestone tracking.", outcome: "Funds released" },
];

const benefits = [
  { title: "Financial Support", description: "Access to capital for project development, scaling, and cross-border expansion." },
  { title: "Mentorship", description: "Guidance from experienced industry leaders, investors, and domain experts." },
  { title: "Networking", description: "Connect with investors, corporate partners, and potential collaborators across borders." },
  { title: "Market Access", description: "Opportunities to expand into UK, Pakistan, and international markets." },
];

const faqs = [
  { question: "What types of funding are available?", answer: "We offer pre-seed and seed investment, Series A/B growth capital facilitation, R&D grants, innovation grants, and bilateral project funding. The type of funding depends on your stage, sector, and project objectives." },
  { question: "How long does the application process take?", answer: "Initial applications are reviewed within 2\u20134 weeks. The full process \u2014 including due diligence and funding decision \u2014 typically takes 6\u201312 weeks depending on the funding type and complexity of the proposal." },
  { question: "Is funding available for non-tech companies?", answer: "Our primary focus is technology-focused companies and projects. However, companies in adjacent sectors that demonstrate significant technology innovation or digital transformation may also be eligible." },
  { question: "Can I apply for multiple funding streams?", answer: "Yes, you can apply for multiple funding streams simultaneously, provided you meet the eligibility criteria for each. Our team can advise on the most appropriate funding mix for your needs." },
  { question: "What are the reporting requirements?", answer: "Funded companies are required to provide quarterly progress reports, financial updates, and milestone tracking. We work collaboratively with funded companies to ensure success and accountability." },
];

/* --- Component ----------------------------------------------------------- */

export default function FundingAndGrantsClient() {
  return (
    <div>
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

      {/* Overview */}
      <Section variant="light">
        <AnimatedSection>
          <div className="max-w-3xl mb-10">
            <p className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl leading-snug mb-6">
              Funding Programs Designed for the UK\u2013Pakistan Tech Corridor
            </p>
            <p className="text-[#3D4152] text-base leading-relaxed mb-5">
              UPTECH provides access to funding opportunities and grants designed to support technology innovation, startup growth, and cross-border collaboration between the UK and Pakistan.
            </p>
            <p className="text-[#3D4152] text-base leading-relaxed">
              Our funding programs enable entrepreneurs, researchers, and organisations to turn innovative ideas into reality. Whether you&apos;re a startup seeking seed funding, a researcher looking for grant support, or an enterprise exploring partnership opportunities, we connect you with the right funding sources and resources.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {overviewItems.map((item) => (
              <div key={item.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{item.title}</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-3" />
                <p className="text-[#3D4152] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Opportunities */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Funding"
            title="Available Opportunities"
            subtitle="Explore our range of funding programs designed to support technology innovation and cross-border collaboration."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp) => (
              <div key={opp.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{opp.title}</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-3" />
                <p className="text-[#3D4152] text-sm leading-relaxed">{opp.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Funding Grants Intro */}
      <Section variant="light">
        <AnimatedSection>
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-[#2563EB] mb-2 tracking-wide uppercase">Funding Grants</p>
            <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-snug mb-6">
              {fundingGrantsIntro.heading}
            </h2>
            <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed">
              {fundingGrantsIntro.description}
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Funding Stages */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Stages"
            title="Funding by Growth Stage"
            subtitle="Tailored funding support from pre-seed through to Series B and R&D incentives."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {fundingStages.map((item) => (
              <div key={item.stage} className="bg-white border border-[#D8D5CF] rounded p-8 flex flex-col hover:border-[#2563EB]/40 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.stage}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-3">{item.title}</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-4" />
                <p className="text-[#3D4152] text-sm leading-relaxed mb-5">{item.description}</p>
                <ul className="space-y-3 mt-auto">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#3D4152]">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Application Process */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="Application Process"
            subtitle="A transparent, structured pathway from application to funding."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((step) => (
              <div key={step.number} className="border-t-2 border-[#2563EB] pt-5">
                <span className="text-xs font-bold text-[#2563EB] tabular-nums block mb-2">{step.number}</span>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{step.title}</h3>
                <p className="text-[#3D4152] text-sm leading-relaxed mb-3">{step.description}</p>
                <span className="text-xs font-semibold text-[#2563EB]">{step.outcome}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Eligibility + Benefits */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Eligibility */}
            <div className="lg:col-span-3">
              <SectionHeader
                label="Eligibility"
                title="Eligibility Criteria"
                subtitle="Understanding the requirements for funding and grant applications."
              />
              <div className="space-y-0">
                {eligibilityCriteria.map((item) => (
                  <div key={item} className="flex items-start gap-3 py-4 border-b border-[#1C1F2E]/10 last:border-b-0">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#3D4152] text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#D8D5CF] rounded p-8 sticky top-8">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-5">Why Apply Through UPTECH</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-5" />
                <ul className="space-y-5">
                  {benefits.map((benefit) => (
                    <li key={benefit.title} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <div>
                        <span className="font-heading font-bold text-[#1C1F2E] text-sm">{benefit.title}</span>
                        <p className="text-[#3D4152] text-xs leading-relaxed mt-1">{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* FAQ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about funding and grants."
          />
          <FAQSection faqs={faqs} />
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Apply Now</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Ready to Secure Funding for Your Innovation?
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Explore funding opportunities and take your technology innovation to the next level with UPTECH&apos;s funding and grants programs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow className="!bg-[#2563EB] hover:!bg-[#1d4ed8]">
                Become a Member
              </Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>
                Contact Us
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}

/* --- FAQ Accordion ------------------------------------------------------- */

function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className="border-t border-[#1C1F2E]/10 last:border-b"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between py-5 text-left gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded flex-shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-heading font-semibold text-[#1C1F2E] text-base">{faq.question}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#3D4152] flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="pb-5 pl-12 text-[#3D4152] text-sm leading-relaxed">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
