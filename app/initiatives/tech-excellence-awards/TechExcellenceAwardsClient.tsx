"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

const categories = [
  { title: "Innovator of the Year", tag: "Individual", description: "Recognising exceptional innovation and breakthrough contributions to technology." },
  { title: "Woman in Tech Leadership Award", tag: "Individual", description: "Celebrating outstanding female leaders driving technology transformation." },
  { title: "Emerging Young Technologist", tag: "Individual", description: "Honouring promising young talent making significant impact in tech." },
  { title: "Tech Educator / Mentor of the Year", tag: "Individual", description: "Recognising educators and mentors shaping the next generation of tech leaders." },
  { title: "Emerging AI / FinTech Leader", tag: "Individual", description: "Celebrating leaders at the forefront of AI and financial technology." },
  { title: "Startup of the Year", tag: "Startup", description: "Recognising exceptional startups from Pakistan, UK, or joint ventures." },
  { title: "Best UK–Pakistan Collaboration Project", tag: "Collaboration", description: "Honouring outstanding collaborative projects between both nations." },
  { title: "Excellence in AI / FinTech / HealthTech / EdTech", tag: "Sector", description: "Recognising sector-specific excellence across key technology domains." },
  { title: "R&D Excellence Award", tag: "Research", description: "Celebrating groundbreaking research and development achievements." },
  { title: "Tech for Social Impact", tag: "Impact", description: "Honouring technology solutions that create positive social change." },
  { title: "Outstanding Digital Export Achievement", tag: "Achievement", description: "Recognising exceptional success in digital exports and international growth." },
  { title: "Lifetime Contribution to Tech Diplomacy", tag: "Special Recognition", description: "Celebrating lifelong dedication to strengthening UK–Pakistan tech relations." },
];

const nominationSteps = [
  { number: "01", title: "Eligibility", description: "Review category requirements and ensure nominee meets eligibility criteria.", outcome: "Confirmed eligibility", color: "#2563EB" },
  { number: "02", title: "Submission", description: "Complete nomination form with supporting documentation and evidence of achievement.", outcome: "Submission received", color: "#22C55E" },
  { number: "03", title: "Evaluation", description: "Independent jury reviews and scores nominations based on established merit criteria.", outcome: "Scored and ranked", color: "#8b5cf6" },
  { number: "04", title: "Recognition", description: "Winners announced and celebrated at the annual UK–Pakistan Tech Excellence Awards ceremony.", outcome: "Publicly recognised", color: "#f59e0b" },
];

const evaluationCriteria = [
  "Innovation and originality of contribution",
  "Impact and scalability of the work",
  "Cross-border collaboration and inclusivity",
  "Sustainability and export potential",
];

const faqs = [
  { question: "Who can nominate?", answer: "Nominations are open to individuals, organisations, and institutions with knowledge of exceptional achievements in UK–Pakistan technology collaboration. Self-nominations are also welcome." },
  { question: "Who is eligible?", answer: "Eligibility varies by category. Generally, nominees should have demonstrated significant contributions to technology innovation, cross-border collaboration, or digital leadership within the UK–Pakistan tech ecosystem." },
  { question: "Is this invite-only?", answer: "No, the awards are open to all eligible nominations. We encourage submissions from across the UK–Pakistan tech community." },
  { question: "How are winners selected?", answer: "Winners are selected through a transparent evaluation process by an independent jury of 6–10 senior experts from both the UK and Pakistan, using merit-based scoring across multiple criteria." },
  { question: "When will nominations close?", answer: "Nomination deadlines will be announced soon. Please check back for updates or contact us for the latest information." },
];

const tagColors: Record<string, string> = {
  Individual: "#2563EB",
  Startup: "#22C55E",
  Collaboration: "#8b5cf6",
  Sector: "#f59e0b",
  Research: "#06b6d4",
  Impact: "#C41E3A",
  Achievement: "#ef4444",
  "Special Recognition": "#f59e0b",
};

export default function TechExcellenceAwardsClient() {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#0B0F1A]">
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
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f59e0b] mb-5">
              UPTECH Initiative
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] mb-6">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #f59e0b 50%, #C41E3A 100%)",
                }}
              >
                Tech Excellence Awards
              </span>
            </h1>
            <div className="max-w-2xl backdrop-blur-md bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 mb-8">
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                Celebrating Innovation, Partnership, and Digital Leadership across Two Nations.
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
      <section className="relative bg-[#0E1221]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f59e0b] mb-5">
                  About the Awards
                </p>
                <p className="font-heading font-extrabold text-white/90 text-xl sm:text-2xl lg:text-3xl leading-snug mb-8">
                  The UK–Pakistan Tech Excellence Awards celebrate the outstanding achievements of individuals, teams, and organisations driving innovation and digital transformation across both nations.
                </p>
                <div className="h-px bg-gradient-to-r from-[#f59e0b]/40 via-[#f59e0b]/10 to-transparent mb-8" />
                <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-5">
                  These awards recognise excellence in technology development, cross-border collaboration, and leadership that strengthens the UK–Pakistan tech corridor.
                </p>
                <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                  By honouring innovators, educators, startups, and established companies, the awards program highlights the transformative power of technology partnerships and inspires the next generation of tech leaders.
                </p>
              </div>
              <div className="backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl p-8">
                <h3 className="font-heading font-bold text-white text-base mb-5">What the Awards Stand For</h3>
                <div className="h-px bg-white/10 mb-5" />
                <ul className="space-y-4">
                  {[
                    { title: "Recognition", desc: "Celebrating outstanding achievements in technology and innovation across both nations.", color: "#f59e0b" },
                    { title: "Bilateral Collaboration", desc: "Highlighting successful partnerships that strengthen UK–Pakistan tech relations.", color: "#2563EB" },
                    { title: "Global Visibility", desc: "Elevating award winners to international recognition and new opportunities.", color: "#22C55E" },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: item.color }} strokeWidth={2} />
                      <div>
                        <span className="font-semibold text-white text-sm">{item.title}</span>
                        <p className="text-white/50 text-xs leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Award Categories ── */}
      <section className="relative bg-[#0B0F1A]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f59e0b] mb-4">
                Award Categories
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Categories
              </h2>
              <div className="h-px bg-gradient-to-r from-[#f59e0b]/40 via-[#f59e0b]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">
                Recognising excellence across diverse dimensions of technology innovation and leadership.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, i) => {
                const tagColor = tagColors[category.tag] || "#2563EB";
                return (
                  <motion.div
                    key={category.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{ background: `linear-gradient(to right, ${tagColor}, ${tagColor}60)` }}
                    />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-heading font-bold text-white text-sm flex-1 pr-3 group-hover:text-[#f59e0b] transition-colors duration-200">
                          {category.title}
                        </h3>
                        <span
                          className="text-xs font-semibold px-2 py-0.5 flex-shrink-0 rounded"
                          style={{ color: tagColor, background: `${tagColor}15` }}
                        >
                          {category.tag}
                        </span>
                      </div>
                      <div className="h-px bg-white/10 mb-3" />
                      <p className="text-white/50 text-sm leading-relaxed flex-1">{category.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Nomination Process ── */}
      <section className="relative bg-[#131942]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5cf6] mb-4">
                Nomination Process
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                How to Nominate
              </h2>
              <div className="h-px bg-gradient-to-r from-[#8b5cf6]/40 via-[#8b5cf6]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">
                A transparent, structured process designed to identify and celebrate true excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {nominationSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: `linear-gradient(to right, ${step.color}, ${step.color}60)` }}
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-5">
                      <div className="relative">
                        <div
                          className="absolute inset-[-4px] rounded-full opacity-30 group-hover:opacity-60 blur-md transition-opacity duration-500"
                          style={{ background: step.color }}
                        />
                        <div
                          className="relative w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold border"
                          style={{
                            background: `${step.color}25`,
                            borderColor: `${step.color}50`,
                            boxShadow: `0 0 20px ${step.color}30`,
                          }}
                        >
                          {step.number}
                        </div>
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-white text-lg mb-2 group-hover:text-[#f59e0b] transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">{step.description}</p>
                    <div className="flex items-center gap-2 pt-3 border-t border-white/10">
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

      {/* ── Judging / Evaluation ── */}
      <section className="relative bg-[#0E1221]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-4">
                  Judging
                </p>
                <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                  Evaluation Process
                </h2>
                <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#2563EB]/10 to-transparent mb-4 max-w-xs" />
                <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
                  Transparent, merit-based scoring by an independent jury of senior experts.
                </p>
                <p className="text-white/60 text-base leading-relaxed mb-5">
                  All nominations are evaluated by an independent jury of 6–10 senior experts from both the UK and Pakistan. The judging process is designed to be transparent, merit-based, and free from bias.
                </p>
                <p className="text-white/60 text-base leading-relaxed mb-6">
                  Our jury members bring decades of combined experience in technology, innovation, business, and cross-border collaboration.
                </p>
                <h3 className="font-heading font-bold text-white/80 text-sm uppercase tracking-wide mb-4">Evaluation Criteria</h3>
                <ul className="space-y-0">
                  {evaluationCriteria.map((criterion) => (
                    <li key={criterion} className="flex items-start gap-3 py-3 border-b border-white/[0.08] last:border-b-0">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-white/60 text-sm">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-1">
                <div className="backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 sticky top-8">
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl bg-gradient-to-r from-[#f59e0b] to-[#f59e0b60]" />
                  <h3 className="font-heading font-bold text-white text-base mb-3">Independent Jury</h3>
                  <div className="h-px bg-white/10 mb-4" />
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    6–10 senior experts from both the UK and Pakistan with decades of combined experience in technology, innovation, and cross-border collaboration.
                  </p>
                  <p className="text-xs text-white/30 italic">Transparent, merit-based evaluation process</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative bg-[#0B0F1A]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5cf6] mb-4">
                FAQ
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Frequently Asked Questions
              </h2>
              <div className="h-px bg-gradient-to-r from-[#8b5cf6]/40 via-[#8b5cf6]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">
                Common questions about the UK–Pakistan Tech Excellence Awards.
              </p>
            </div>
            <div className="max-w-3xl">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="border-t border-white/[0.08] last:border-b"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-5 text-left gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#f59e0b] bg-[#f59e0b]/10 px-2 py-0.5 rounded flex-shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading font-semibold text-white text-base">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-white/40 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
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
                        <div className="pb-5 pl-12 text-white/50 text-sm leading-relaxed">{faq.answer}</div>
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
      <section className="relative bg-[#0E1221] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-[#f59e0b]" />
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
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f59e0b] mb-5">
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
