"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

const trustItems = ["UK aligned curriculum", "Industry mentors", "Practical projects", "Career support", "Cross-border collaboration"];

const programs = [
  { title: "AI & Tech Certifications", subtitle: "Industry-recognised vendor-aligned certification tracks", bullets: ["Vendor aligned tracks", "Hands on labs", "Final assessment and badge"] },
  { title: "Sector Specific Skill Training", subtitle: "Specialised programs for key industries", bullets: ["Healthcare, fintech, logistics, public sector, manufacturing", "Use cases and toolkits", "Mini capstone per sector"] },
  { title: "Student Tutoring Services", subtitle: "Personalised learning support for students", bullets: ["Fundamentals to advanced", "Code reviews and debugging help", "Weekly learning plans"] },
  { title: "Competitive Exam Support", subtitle: "Comprehensive preparation for exams and interviews", bullets: ["GRE, IELTS, tech interviews, CS fundamentals", "Mock tests and feedback", "Resource library"] },
  { title: "Internship Programs", subtitle: "Real-world experience with leading companies", bullets: ["Partner placements", "Portfolio projects", "Reference ready mentorship"] },
];

const pathwaySteps = [
  { number: "01", title: "Assess", description: "Complete skill assessments and identify your learning goals and current proficiency level.", outcome: "Personalised learning roadmap", color: "#2563EB" },
  { number: "02", title: "Train", description: "Participate in structured training programs with hands-on labs and expert mentorship.", outcome: "Industry-relevant skills", color: "#22C55E" },
  { number: "03", title: "Build", description: "Create portfolio projects and capstone assignments that demonstrate your capabilities.", outcome: "Portfolio-ready projects", color: "#C41E3A" },
  { number: "04", title: "Launch", description: "Access career support, internship placements, and job readiness programs.", outcome: "Career-ready profile", color: "#2563EB" },
];

const tracks = [
  { title: "AI Engineering Track", duration: "12 weeks", level: "Intermediate to Advanced", commitment: "15–20 hours/week", build: "Build production-ready AI models and deploy ML pipelines", color: "#2563EB" },
  { title: "Data and Automation Track", duration: "10 weeks", level: "Beginner to Intermediate", commitment: "12–15 hours/week", build: "Build data pipelines, automation scripts, and analytics dashboards", color: "#22C55E" },
  { title: "Cloud and Cyber Foundations", duration: "8 weeks", level: "Beginner", commitment: "10–12 hours/week", build: "Build secure cloud infrastructure and implement security best practices", color: "#C41E3A" },
];

const outcomes = [
  { value: "30+", label: "mentor hours per cohort", color: "#2563EB" },
  { value: "6–10", label: "projects per learner", color: "#22C55E" },
  { value: "8 week", label: "job readiness sprint", color: "#C41E3A" },
  { value: "100+", label: "cross border mentor network", color: "#2563EB" },
];

const faqs = [
  { question: "Who is this program for?", answer: "Our programs are designed for students, professionals, and career changers looking to build or enhance their tech skills. Whether you're a beginner or looking to advance your career, we have tracks suited to your level." },
  { question: "Do I need prior experience?", answer: "No prior experience is required for our beginner tracks. We offer programs for all skill levels, from fundamentals to advanced specialisation. Our assessment process helps match you with the right program." },
  { question: "Are programs online or onsite?", answer: "We offer both online and hybrid learning options to accommodate different schedules and locations. Most programs include live sessions, recorded content, and hands-on labs accessible remotely." },
  { question: "What is the value of certifications?", answer: "Our certifications are industry-recognised and aligned with vendor standards. They demonstrate practical skills and are valued by employers in both UK and Pakistani tech markets." },
  { question: "How do I become eligible for internships?", answer: "Internship eligibility is based on program completion, performance in assessments, and portfolio quality. We work with partner organisations to match qualified candidates with relevant opportunities." },
  { question: "What about pricing and scholarships?", answer: "We offer various pricing tiers and scholarship opportunities for eligible candidates. Please contact us through the portal or membership application to discuss options and financial support programs." },
];

export default function SkillDevelopmentCenterPage() {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#EEECEA]">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <Image
          src="/image/london-images/training-education.jpg"
          alt="Skill Development Centre"
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
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">
              UPTECH Programs
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] mb-6">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #2563EB 50%, #22C55E 100%)",
                }}
              >
                Skill Development Centre
              </span>
            </h1>
            <div className="max-w-2xl backdrop-blur-md bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 mb-8">
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                Comprehensive training programs designed to build world-class tech capabilities and accelerate your career.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership/apply" variant="primary" size="lg" showArrow>
                Apply for Training
              </Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>
                Partner with UPTECH
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <section className="relative bg-[#1C1F2E] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-wrap gap-6 items-center">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/50">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0" strokeWidth={2} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="relative bg-[#EEECEA]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">
                Our Mission
              </p>
              <p className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl lg:text-3xl leading-snug mb-5">
                UPTECH&apos;s Skill Development Center provides comprehensive training programs designed to build world-class tech capabilities across the UK and Pakistan.
              </p>
              <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#22C55E]/20 to-transparent mb-5" />
              <p className="text-[#5A5F72] text-lg leading-relaxed mb-5">
                Our Skill Development Center offers industry-recognised certifications, specialised training, and personalised mentorship to empower individuals and organisations with cutting-edge technology skills.
              </p>
              <p className="text-[#5A5F72] text-lg leading-relaxed">
                Through strategic partnerships with leading tech companies and educational institutions, we deliver programs that bridge the skills gap and create pathways for career advancement.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Programs Grid ── */}
      <section className="relative bg-white" id="programs">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-4">
                Training Programs
              </p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Our Programs
              </h2>
              <div className="h-px bg-gradient-to-r from-[#22C55E]/40 via-[#22C55E]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-[#7A7E8F] text-base sm:text-lg max-w-2xl leading-relaxed">
                Comprehensive skill development initiatives designed to accelerate your tech career.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program, i) => (
                <motion.div
                  key={program.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 shadow-sm"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: "linear-gradient(to right, #22C55E, #22C55E60)" }}
                  />
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-1 group-hover:text-[#22C55E] transition-colors duration-200">
                      {program.title}
                    </h3>
                    <p className="text-[#7A7E8F] text-sm mb-3">{program.subtitle}</p>
                    <div className="h-px bg-[#D8D5CF] mb-4" />
                    <ul className="space-y-2 flex-1">
                      {program.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                          <span className="text-[#5A5F72] text-base">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Learning Pathway ── */}
      <section className="relative bg-[#E8E6E3]" id="pathway">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-4">
                Your Journey
              </p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Learning Pathway
              </h2>
              <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#2563EB]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-[#7A7E8F] text-base sm:text-lg max-w-2xl leading-relaxed">
                A structured journey from assessment to career launch.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {pathwaySteps.map((step, i) => (
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
                    <p className="text-[#7A7E8F] text-base leading-relaxed mb-4">{step.description}</p>
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

      {/* ── Flagship Tracks ── */}
      <section className="relative bg-[#EEECEA]" id="tracks">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C41E3A] mb-4">
                Flagship Tracks
              </p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Intensive Training Tracks
              </h2>
              <div className="h-px bg-gradient-to-r from-[#C41E3A]/40 via-[#C41E3A]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-[#7A7E8F] text-base sm:text-lg max-w-2xl leading-relaxed">
                Intensive programs designed to build expertise in high-demand tech domains.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {tracks.map((track, i) => (
                <motion.div
                  key={track.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 shadow-sm"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: `linear-gradient(to right, ${track.color}, ${track.color}60)` }}
                  />
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-4 group-hover:text-[#2563EB] transition-colors duration-200">
                      {track.title}
                    </h3>
                    <div className="space-y-2 mb-5">
                      <div className="flex justify-between text-sm border-b border-[#D8D5CF] pb-2">
                        <span className="text-[#7A7E8F]">Duration</span>
                        <span className="text-[#3D4152] font-medium">{track.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm border-b border-[#D8D5CF] pb-2">
                        <span className="text-[#7A7E8F]">Level</span>
                        <span className="text-[#3D4152] font-medium">{track.level}</span>
                      </div>
                      <div className="flex justify-between text-sm border-b border-[#D8D5CF] pb-2">
                        <span className="text-[#7A7E8F]">Commitment</span>
                        <span className="text-[#3D4152] font-medium">{track.commitment}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#7A7E8F] uppercase tracking-wider mb-1">What you build</p>
                      <p className="text-[#5A5F72] text-base leading-relaxed">{track.build}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Outcomes / Stats Bar ── */}
      <section className="relative bg-[#1C1F2E]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-4">
                Results
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Program Outcomes
              </h2>
              <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#2563EB]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-white/50 text-base sm:text-lg max-w-2xl leading-relaxed">
                Measurable results that accelerate your career growth.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {outcomes.map((outcome, i) => (
                <motion.div
                  key={outcome.label}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative backdrop-blur-md bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
                    style={{ background: `linear-gradient(to right, ${outcome.color}, ${outcome.color}60)` }}
                  />
                  <div
                    className="absolute -top-1 left-4 right-4 h-4 rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500"
                    style={{ background: outcome.color }}
                  />
                  <div
                    className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                    style={{
                      color: outcome.color,
                      textShadow: `0 0 30px ${outcome.color}40`,
                    }}
                  >
                    {outcome.value}
                  </div>
                  <p className="text-white/50 text-sm">{outcome.label}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative bg-[#E8E6E3]" id="faq">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-4">
                FAQ
              </p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Frequently Asked Questions
              </h2>
              <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#2563EB]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-[#7A7E8F] text-base sm:text-lg max-w-2xl leading-relaxed">
                Everything you need to know about our programs.
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
                      <span className="text-xs font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded flex-shrink-0">
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
                        <div className="pb-5 pl-12 text-[#5A5F72] text-base leading-relaxed">{faq.answer}</div>
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
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-[#2563EB]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15 bg-[#22C55E]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">
                Get Started
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl">
                Join UPTECH&apos;s Skill Development Center and unlock your potential in the tech industry. Start your journey today with world-class training and mentorship.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/membership/apply" variant="primary" size="lg" showArrow>
                  Apply for Training
                </Button>
                <Button href="/contact" variant="glass" size="lg" showArrow>
                  Partner with UPTECH
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
