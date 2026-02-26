"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* --- Data ---------------------------------------------------------------- */

const companyAwards = [
  { title: "Excellence in IT Exports", tag: "Company", description: "Recognising outstanding achievement in IT export growth and international market development." },
  { title: "Innovation in Software & Digital Products", tag: "Company", description: "Celebrating innovative software solutions and digital products driving industry advancement." },
  { title: "High-Growth Technology Company", tag: "Company", description: "Honouring technology companies demonstrating exceptional growth and scalability." },
  { title: "Excellence in AI / Emerging Technologies", tag: "Company", description: "Recognising excellence in artificial intelligence and emerging technology domains." },
  { title: "Global Market Expansion Award", tag: "Company", description: "Celebrating companies successfully expanding into global markets." },
  { title: "E-Governance Awards", tag: "Company", description: "Honouring outstanding contributions to e-governance solutions and digital government services." },
];

const professionalAwards = [
  { title: "IT Professional of the Year", tag: "Professional", description: "Recognising an outstanding IT professional for exceptional contributions to the industry." },
  { title: "Emerging Tech Leader Award", tag: "Professional", description: "Celebrating rising leaders making significant impact in the technology sector." },
  { title: "Excellence in Engineering & Product Development", tag: "Professional", description: "Honouring exceptional achievement in engineering and product development." },
  { title: "Women in Technology Excellence Award", tag: "Professional", description: "Celebrating outstanding women leaders driving technology transformation." },
  { title: "Young IT Professionals Awards", tag: "Professional", description: "Recognising promising young IT professionals making significant contributions." },
  { title: "Academic Excellence Awards", tag: "Professional", description: "Honouring outstanding academic contributions to IT education and research." },
  { title: "Fellowship and Hon. Fellowship Awards", tag: "Special Recognition", description: "Members with many years of significant contribution to the IT industry are made Fellows of the Council." },
  { title: "Lifetime Achievement Award", tag: "Special Recognition", description: "Celebrating lifelong dedication and transformative contributions to the technology industry." },
];

const nominationSteps = [
  { number: "01", title: "Nominations", description: "Nominations through industry bodies, and partner organizations.", outcome: "Nominations received" },
  { number: "02", title: "Committee Review", description: "Review by a joint committee comprising representatives and industry experts.", outcome: "Reviewed and scored" },
  { number: "03", title: "Final Approval", description: "Final approval of awardees by joint committee.", outcome: "Awardees confirmed" },
];

const objectives = [
  "Recognize outstanding achievements in Pakistan\u2019s IT & digital services sector.",
  "Highlight success stories to international investors and partners",
  "Reinforce Pakistan\u2019s image as a competitive global technology destination",
  "Motivate continued excellence and export-led growth within the IT industry",
];

const faqs = [
  { question: "Who can nominate?", answer: "Nominations are open to individuals, organisations, and institutions with knowledge of exceptional achievements in UK\u2013Pakistan technology collaboration. Self-nominations are also welcome." },
  { question: "Who is eligible?", answer: "Eligibility varies by category. Generally, nominees should have demonstrated significant contributions to technology innovation, cross-border collaboration, or digital leadership within the UK\u2013Pakistan tech ecosystem." },
  { question: "Is this invite-only?", answer: "No, the awards are open to all eligible nominations. We encourage submissions from across the UK\u2013Pakistan tech community." },
  { question: "How are winners selected?", answer: "Winners are selected through a transparent evaluation process by an independent jury of 6\u201310 senior experts from both the UK and Pakistan, using merit-based scoring across multiple criteria." },
  { question: "When will nominations close?", answer: "Nomination deadlines will be announced soon. Please check back for updates or contact us for the latest information." },
];

const tagColors: Record<string, string> = {
  Company: "#2563EB",
  Professional: "#22C55E",
  "Special Recognition": "#f59e0b",
};

/* --- Component ----------------------------------------------------------- */

export default function TechExcellenceAwardsClient() {
  return (
    <div>
      {/* About the Awards */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-semibold text-[#2563EB] mb-2 tracking-wide uppercase">About the Awards</p>
              <p className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl lg:text-3xl leading-snug mb-6">
                UPTECH Awards
              </p>
              <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed mb-5">
                Achievement is a wonderful thing. But what makes it even more wonderful is being publicly acclaimed for it&#8212;especially in the presence of one&apos;s peers. That&apos;s why UPTECH has instituted awards in several categories. Also, members with many years of significant contribution to the IT industry are made Fellows of the Council. It is regarded as one of the most prestigious titles that an IT professional can receive in the country today.
              </p>
              <p className="text-[#3D4152] text-base sm:text-lg leading-relaxed">
                Awards will be honorary in nature and presented during a high-impact ceremony /annual Black Tie Gala dinner in UK and other prominent locations.
              </p>
            </div>
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-5">Objectives</h3>
              <div className="h-px bg-[#1C1F2E]/15 mb-5" />
              <ul className="space-y-4">
                {objectives.map((objective, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <p className="text-[#3D4152] text-sm leading-relaxed">{objective}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Company Awards */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Proposed Award Categories"
            title="Company Awards"
            subtitle="Recognising excellence in IT exports, innovation, and technology leadership at the company level."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyAwards.map((category) => {
              const tagColor = tagColors[category.tag] || "#2563EB";
              return (
                <div key={category.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-sm flex-1 pr-3">{category.title}</h3>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 flex-shrink-0 rounded"
                      style={{ color: tagColor, background: `${tagColor}15` }}
                    >
                      {category.tag}
                    </span>
                  </div>
                  <div className="h-px bg-[#1C1F2E]/15 mb-3" />
                  <p className="text-[#3D4152] text-sm leading-relaxed flex-1">{category.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Professional Awards */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Proposed Award Categories"
            title="Professional Awards"
            subtitle="Recognising individual excellence, leadership, and contributions to the IT industry."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalAwards.map((category) => {
              const tagColor = tagColors[category.tag] || "#22C55E";
              return (
                <div key={category.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-sm flex-1 pr-3">{category.title}</h3>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 flex-shrink-0 rounded"
                      style={{ color: tagColor, background: `${tagColor}15` }}
                    >
                      {category.tag}
                    </span>
                  </div>
                  <div className="h-px bg-[#1C1F2E]/15 mb-3" />
                  <p className="text-[#3D4152] text-sm leading-relaxed flex-1">{category.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Nomination Process */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Nomination Process"
            title="Award Selection Process"
            subtitle="A transparent, structured process designed to identify and celebrate true excellence."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {nominationSteps.map((step) => (
              <div key={step.number} className="border-t-2 border-[#2563EB] pt-5">
                <span className="text-xs font-bold text-[#2563EB] tabular-nums block mb-2">{step.number}</span>
                <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">{step.title}</h3>
                <p className="text-[#3D4152] text-sm leading-relaxed mb-3">{step.description}</p>
                <div className="flex items-center gap-2 pt-3 border-t border-[#1C1F2E]/10">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0" strokeWidth={2} />
                  <span className="text-xs font-semibold text-[#2563EB]">{step.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Objectives + Fellowship sidebar */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeader
                label="Purpose"
                title="Objectives"
                subtitle="The UPTECH Awards programme is designed to achieve the following key objectives."
              />
              <ul className="space-y-0">
                {objectives.map((objective, i) => (
                  <li key={i} className="flex items-start gap-3 py-3 border-b border-[#1C1F2E]/10 last:border-b-0">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#3D4152] text-sm">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white border border-[#D8D5CF] rounded p-6 sticky top-8">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-3">Fellowship</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-4" />
                <p className="text-[#3D4152] text-sm leading-relaxed mb-4">
                  Members with many years of significant contribution to the IT industry are made Fellows of the Council. It is regarded as one of the most prestigious titles that an IT professional can receive in the country today.
                </p>
                <p className="text-xs text-[#7A7E8F] italic">Honorary awards presented at the annual Black Tie Gala dinner</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* FAQ */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions about the UK\u2013Pakistan Tech Excellence Awards."
          />
          <FAQSection faqs={faqs} />
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Submit a Nomination</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Nominate the Innovators Shaping the UK\u2013Pakistan Tech Corridor
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Help us recognise exceptional individuals and organisations driving technology excellence and cross-border collaboration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow className="!bg-[#2563EB] hover:!bg-[#1d4ed8]">
                Submit a Nomination
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
