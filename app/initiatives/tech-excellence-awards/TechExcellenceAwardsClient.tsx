"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

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
  { number: "01", title: "Nominations", description: "Nominations through industry bodies, and partner organizations.", outcome: "Nominations received", color: "#2563EB" },
  { number: "02", title: "Committee Review", description: "Review by a joint committee comprising representatives and industry experts.", outcome: "Reviewed and scored", color: "#22C55E" },
  { number: "03", title: "Final Approval", description: "Final approval of awardees by joint committee.", outcome: "Awardees confirmed", color: "#C41E3A" },
];

const objectives = [
  "Recognize outstanding achievements in Pakistan\u2019s IT & digital services sector.",
  "Highlight success stories to international investors and partners",
  "Reinforce Pakistan\u2019s image as a competitive global technology destination",
  "Motivate continued excellence and export-led growth within the IT industry",
];

const faqs = [
  { question: "Who can nominate?", answer: "Nominations are open to individuals, organisations, and institutions with knowledge of exceptional achievements in UK–Pakistan technology collaboration. Self-nominations are also welcome." },
  { question: "Who is eligible?", answer: "Eligibility varies by category. Generally, nominees should have demonstrated significant contributions to technology innovation, cross-border collaboration, or digital leadership within the UK–Pakistan tech ecosystem." },
  { question: "Is this invite-only?", answer: "No, the awards are open to all eligible nominations. We encourage submissions from across the UK–Pakistan tech community." },
  { question: "How are winners selected?", answer: "Winners are selected through a transparent evaluation process by an independent jury of 6–10 senior experts from both the UK and Pakistan, using merit-based scoring across multiple criteria." },
  { question: "When will nominations close?", answer: "Nomination deadlines will be announced soon. Please check back for updates or contact us for the latest information." },
];

const tagColors: Record<string, string> = {
  Company: "#2563EB",
  Professional: "#22C55E",
  "Special Recognition": "#C41E3A",
};

export default function TechExcellenceAwardsClient() {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#EEECEA]">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <Image
          src="/image/london-images/awards-trophy.jpg"
          alt="Tech Excellence Awards"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,14,30,0.85)] via-[rgba(10,14,30,0.7)] to-[#0B0F1A]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C41E3A] mb-5">
              UPTECH Initiative
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] mb-6">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #2563EB 50%, #C41E3A 100%)",
                }}
              >
                UPTECH Awards
              </span>
            </h1>
            <div className="max-w-2xl backdrop-blur-md bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 mb-8">
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                Achievement is a wonderful thing. But what makes it even more wonderful is being publicly acclaimed for it&#8212;especially in the presence of one&apos;s peers.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>
                Submit a Nomination
              </Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="relative bg-[#EEECEA]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C41E3A] mb-5">
                  About the Awards
                </p>
                <p className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl lg:text-3xl leading-snug mb-8">
                  UPTECH Awards
                </p>
                <div className="h-px bg-gradient-to-r from-[#C41E3A]/40 via-[#C41E3A]/10 to-transparent mb-8" />
                <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed mb-5">
                  Achievement is a wonderful thing. But what makes it even more wonderful is being publicly acclaimed for it&#8212;especially in the presence of one&apos;s peers. That&apos;s why UPTECH has instituted awards in several categories. Also, members with many years of significant contribution to the IT industry are made Fellows of the Council. It is regarded as one of the most prestigious titles that an IT professional can receive in the country today.
                </p>
                <p className="text-[#5A5F72] text-base sm:text-lg leading-relaxed">
                  Awards will be honorary in nature and presented during a high-impact ceremony /annual Black Tie Gala dinner in UK and other prominent locations.
                </p>
              </div>
              <div className="bg-white border border-[#D8D5CF] rounded-xl p-8 shadow-sm">
                <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-5">Objectives</h3>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <ul className="space-y-4">
                  {objectives.map((objective, i) => {
                    const colors = ["#C41E3A", "#2563EB", "#22C55E", "#C41E3A"];
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors[i % colors.length] }} strokeWidth={2} />
                        <p className="text-[#5A5F72] text-sm leading-relaxed">{objective}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Company Awards ── */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-4">
                Proposed Award Categories
              </p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Company Awards
              </h2>
              <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#2563EB]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-[#7A7E8F] text-base sm:text-lg max-w-2xl leading-relaxed">
                Recognising excellence in IT exports, innovation, and technology leadership at the company level.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyAwards.map((category, i) => {
                const tagColor = tagColors[category.tag] || "#2563EB";
                return (
                  <motion.div
                    key={category.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 shadow-sm flex flex-col"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{ background: `linear-gradient(to right, ${tagColor}, ${tagColor}60)` }}
                    />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-heading font-bold text-[#1C1F2E] text-sm flex-1 pr-3 group-hover:text-[#2563EB] transition-colors duration-200">
                          {category.title}
                        </h3>
                        <span
                          className="text-xs font-semibold px-2 py-0.5 flex-shrink-0 rounded"
                          style={{ color: tagColor, background: `${tagColor}15` }}
                        >
                          {category.tag}
                        </span>
                      </div>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-[#7A7E8F] text-sm leading-relaxed flex-1">{category.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Professional Awards ── */}
      <section className="relative bg-[#EEECEA]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-4">
                Proposed Award Categories
              </p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Professional Awards
              </h2>
              <div className="h-px bg-gradient-to-r from-[#22C55E]/40 via-[#22C55E]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-[#7A7E8F] text-base sm:text-lg max-w-2xl leading-relaxed">
                Recognising individual excellence, leadership, and contributions to the IT industry.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionalAwards.map((category, i) => {
                const tagColor = tagColors[category.tag] || "#22C55E";
                return (
                  <motion.div
                    key={category.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 shadow-sm flex flex-col"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{ background: `linear-gradient(to right, ${tagColor}, ${tagColor}60)` }}
                    />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-heading font-bold text-[#1C1F2E] text-sm flex-1 pr-3 group-hover:text-[#2563EB] transition-colors duration-200">
                          {category.title}
                        </h3>
                        <span
                          className="text-xs font-semibold px-2 py-0.5 flex-shrink-0 rounded"
                          style={{ color: tagColor, background: `${tagColor}15` }}
                        >
                          {category.tag}
                        </span>
                      </div>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-[#7A7E8F] text-sm leading-relaxed flex-1">{category.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Nomination Process ── */}
      <section className="relative bg-[#E8E6E3]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-4">
                Nomination Process
              </p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Award Selection Process
              </h2>
              <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#2563EB]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-[#7A7E8F] text-base sm:text-lg max-w-2xl leading-relaxed">
                A transparent, structured process designed to identify and celebrate true excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {nominationSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 shadow-sm"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: `linear-gradient(to right, ${step.color}, ${step.color}60)` }}
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-5">
                      <div className="relative">
                        <div
                          className="absolute inset-[-4px] rounded-full opacity-20 group-hover:opacity-40 blur-md transition-opacity duration-500"
                          style={{ background: step.color }}
                        />
                        <div
                          className="relative w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold border"
                          style={{
                            background: `${step.color}25`,
                            borderColor: `${step.color}50`,
                            boxShadow: `0 0 20px ${step.color}20`,
                          }}
                        >
                          {step.number}
                        </div>
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#2563EB] transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-[#7A7E8F] text-sm leading-relaxed mb-4">{step.description}</p>
                    <div className="flex items-center gap-2 pt-3 border-t border-[#D8D5CF]">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: step.color }} strokeWidth={2} />
                      <span className="text-xs font-semibold" style={{ color: step.color }}>
                        {step.outcome}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Objectives ── */}
      <section className="relative bg-[#F5F4F2]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-4">
                  Purpose
                </p>
                <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                  Objectives
                </h2>
                <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#2563EB]/10 to-transparent mb-4 max-w-xs" />
                <p className="text-[#7A7E8F] text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
                  The UPTECH Awards programme is designed to achieve the following key objectives.
                </p>
                <ul className="space-y-0">
                  {objectives.map((objective, i) => (
                    <li key={i} className="flex items-start gap-3 py-3 border-b border-[#D8D5CF] last:border-b-0">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-[#5A5F72] text-sm">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white border border-[#D8D5CF] rounded-xl p-6 sticky top-8 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl bg-gradient-to-r from-[#C41E3A] to-[#C41E3A60]" />
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-3">Fellowship</h3>
                  <div className="h-px bg-[#D8D5CF] mb-4" />
                  <p className="text-[#7A7E8F] text-sm leading-relaxed mb-4">
                    Members with many years of significant contribution to the IT industry are made Fellows of the Council. It is regarded as one of the most prestigious titles that an IT professional can receive in the country today.
                  </p>
                  <p className="text-xs text-[#7A7E8F] italic">Honorary awards presented at the annual Black Tie Gala dinner</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative bg-[#EEECEA]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-4">
                FAQ
              </p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Frequently Asked Questions
              </h2>
              <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#2563EB]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-[#7A7E8F] text-base sm:text-lg max-w-2xl leading-relaxed">
                Common questions about the UK–Pakistan Tech Excellence Awards.
              </p>
            </div>
            <div className="max-w-3xl">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="border-t border-[#D8D5CF] last:border-b"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-5 text-left gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#C41E3A] bg-[#C41E3A]/10 px-2 py-0.5 rounded flex-shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading font-semibold text-[#1C1F2E] text-base">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#7A7E8F] flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 pl-12 text-[#5A5F72] text-sm leading-relaxed">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[#0B0F1A] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-[#C41E3A]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15 bg-[#C41E3A]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C41E3A] mb-5">
                Submit a Nomination
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Nominate the Innovators Shaping the UK–Pakistan Tech Corridor
              </h2>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
                Help us recognise exceptional individuals and organisations driving technology excellence and cross-border collaboration.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/membership" variant="primary" size="lg" showArrow>
                  Submit a Nomination
                </Button>
                <Button href="/contact" variant="glass" size="lg" showArrow>
                  Contact Us
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
