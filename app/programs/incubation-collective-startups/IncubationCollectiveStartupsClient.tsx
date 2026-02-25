"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const focusAreas = [
  { title: "AI & Data Products", description: "Building intelligent solutions that transform industries through data-driven innovation.", color: "#2563EB" },
  { title: "FinTech & Digital Payments", description: "Revolutionising financial services with secure, scalable payment technologies.", color: "#22C55E" },
  { title: "HealthTech & MedTech", description: "Advancing healthcare delivery through cutting-edge medical technologies and digital health solutions.", color: "#8b5cf6" },
  { title: "Cloud, SaaS & Enterprise Software", description: "Delivering scalable software solutions that power modern businesses and enterprises.", color: "#f59e0b" },
  { title: "Cybersecurity & Digital Infrastructure", description: "Protecting digital assets and building resilient infrastructure for the modern economy.", color: "#C41E3A" },
  { title: "EdTech & Future Skills", description: "Transforming education and workforce development through innovative learning platforms.", color: "#06b6d4" },
];

const timelineSteps = [
  { number: "01", title: "Ideation & Validation", outcomes: ["Market research and opportunity assessment", "Concept validation and feasibility analysis"], color: "#2563EB" },
  { number: "02", title: "Product & Market Fit", outcomes: ["MVP development and testing support", "Customer discovery and market positioning"], color: "#22C55E" },
  { number: "03", title: "Compliance & Readiness", outcomes: ["Legal structure and regulatory guidance", "Intellectual property and compliance frameworks"], color: "#8b5cf6" },
  { number: "04", title: "Market Access & Partnerships", outcomes: ["UK and Pakistan market entry strategies", "Strategic partnership and distribution channels"], color: "#f59e0b" },
  { number: "05", title: "Investment & Scale", outcomes: ["Funding rounds and investor introductions", "Scaling strategies and operational excellence"], color: "#C41E3A" },
];

const audiences = [
  {
    title: "Early-Stage Founders",
    description: "For entrepreneurs with innovative ideas seeking validation, mentorship, and initial support to transform concepts into viable businesses.",
    gains: ["Idea validation and market research support", "Access to mentorship and advisory networks", "Initial infrastructure and workspace"],
    color: "#2563EB",
  },
  {
    title: "Growth-Stage Startups",
    description: "For established startups looking to scale operations, expand market reach, and access advanced resources and partnerships.",
    gains: ["Scaling strategies and growth frameworks", "Market expansion and partnership opportunities", "Advanced funding and investor connections"],
    color: "#22C55E",
  },
  {
    title: "Corporate & Institutional Partners",
    description: "For organisations seeking to collaborate with innovative startups, access new technologies, and drive digital transformation.",
    gains: ["Access to curated startup portfolios", "Innovation partnerships and co-development", "Cross-border market entry support"],
    color: "#8b5cf6",
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
  { value: "50+", label: "startups supported", color: "#2563EB" },
  { value: "200+", label: "partnerships enabled", color: "#22C55E" },
  { value: "15+", label: "markets accessed", color: "#8b5cf6" },
  { value: "£5M+", label: "funding facilitated", color: "#f59e0b" },
];

export default function IncubationCollectiveStartupsClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#0B0F1A]">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <Image
          src="/image/london-images/startup-coworking.jpg"
          alt="Incubation & Startups"
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
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-5">
              UPTECH Programs
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] mb-6">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #22C55E 50%, #2563EB 100%)",
                }}
              >
                Incubation &amp; Startups
              </span>
            </h1>
            <div className="max-w-2xl backdrop-blur-md bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 mb-8">
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                Nurturing the next generation of tech startups and innovators through collaborative models and comprehensive support.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>
                Apply for Incubation
              </Button>
              <Button href="/membership" variant="glass" size="lg" showArrow>
                Partner With Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="relative bg-[#0E1221]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative backdrop-blur-md bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
                  style={{ background: `linear-gradient(to right, ${stat.color}, ${stat.color}60)` }}
                />
                <div
                  className="absolute -top-1 left-4 right-4 h-4 rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500"
                  style={{ background: stat.color }}
                />
                <div
                  className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                  style={{
                    color: stat.color,
                    textShadow: `0 0 30px ${stat.color}40`,
                  }}
                >
                  {stat.value}
                </div>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="relative bg-[#0B0F1A]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">
                  Our Mission
                </p>
                <p className="font-heading font-extrabold text-white/90 text-xl sm:text-2xl lg:text-3xl leading-snug mb-8">
                  UPTECH&apos;s Incubation Centre provides a comprehensive ecosystem for startups to grow, scale, and succeed through collective models and collaborative structures.
                </p>
                <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#8b5cf6]/20 to-transparent mb-8" />
                <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-5">
                  Our Incubation Centre offers mentorship, resources, funding connections, and a collaborative environment where innovation thrives. Through our collective startup model, entrepreneurs can leverage shared infrastructure, expertise, and networks.
                </p>
                <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                  We accelerate the journey from idea to market-ready product, connecting UK and Pakistani entrepreneurs with global opportunities.
                </p>
              </div>
              <div className="backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl p-8">
                <h3 className="font-heading font-bold text-white text-base mb-5">Program Snapshot</h3>
                <div className="h-px bg-white/10 mb-5" />
                <ul className="space-y-3">
                  {["Mentorship & Operators Network", "Shared Infrastructure & Tooling", "Funding & Investor Connections", "UK–Pakistan Market Access"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Focus Areas ── */}
      <section className="relative bg-[#0E1221]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-4">
                What We Incubate
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Focus Areas
              </h2>
              <div className="h-px bg-gradient-to-r from-[#22C55E]/40 via-[#22C55E]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">
                Specialised support for high-impact tech sectors driving innovation across the UK and Pakistan.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: `linear-gradient(to right, ${area.color}, ${area.color}60)` }}
                  />
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-[#2563EB] transition-colors duration-200">
                      {area.title}
                    </h3>
                    <div className="h-px bg-white/10 mb-3" />
                    <p className="text-white/50 text-sm leading-relaxed">{area.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Incubation Pathway ── */}
      <section className="relative bg-[#131942]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5cf6] mb-4">
                Our Model
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Incubation Pathway
              </h2>
              <div className="h-px bg-gradient-to-r from-[#8b5cf6]/40 via-[#8b5cf6]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">
                A structured pathway from concept to market-ready venture with comprehensive support at every stage.
              </p>
            </div>
            <div className="space-y-0">
              {timelineSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex gap-8 py-6 border-t border-white/[0.08] last:border-b"
                >
                  <div className="relative flex-shrink-0">
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
                  <div>
                    <h3 className="font-heading font-bold text-white text-base sm:text-lg mb-2 group-hover:text-[#2563EB] transition-colors duration-200">
                      {step.title}
                    </h3>
                    <ul className="space-y-1">
                      {step.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: step.color }} strokeWidth={2} />
                          <span className="text-white/60 text-sm leading-relaxed">{outcome}</span>
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

      {/* ── Collective Startup Approach ── */}
      <section className="relative bg-[#0B0F1A]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f59e0b] mb-4">
                Collective Model
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                The Collective Startup Approach
              </h2>
              <div className="h-px bg-gradient-to-r from-[#f59e0b]/40 via-[#f59e0b]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
                A model that transforms how startups collaborate, share resources, and scale together.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-5">
                Our collective startup model emphasises collaboration over competition, enabling entrepreneurs to pool resources, share infrastructure, and reduce individual risk while amplifying collective success.
              </p>
              <p className="text-white/60 text-base leading-relaxed">
                By combining expertise, networks, and market access, collective startups can tackle larger opportunities, enter new markets faster, and build sustainable ventures that benefit from sector-driven solutions and cross-border partnerships.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Corporate & Accelerator Partnerships ── */}
      <section className="relative bg-[#0E1221]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-4">
                Partnerships
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Corporate &amp; Accelerator Partnerships
              </h2>
              <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#2563EB]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">
                Strategic partnerships between startups, scale-ups, corporates, and accelerator programs across the UK and Pakistan.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  tag: "Founders",
                  title: "Start Your Journey",
                  desc: "Pre-seed capital, dedicated team support, access to corporate partners, and membership to our global founder community.",
                  items: ["Rapid technical development", "Holistic growth support", "Expert mentorship", "Pathway to 10x growth"],
                  color: "#2563EB",
                },
                {
                  tag: "Startups",
                  title: "Elevate Your Startup",
                  desc: "Capital investment with hands-on operational support. Pitch at flagship investor days with warm introductions to top-tier funds.",
                  items: ["Raise capital", "Six months 1:1 expert support", "Product & design", "Strategic partnerships"],
                  color: "#22C55E",
                },
                {
                  tag: "Accelerators",
                  title: "Partner With Us",
                  desc: "Co-build acceleration programs with cross-border reach, shared deal flow, and access to the UK–Pakistan tech corridor.",
                  items: ["Co-branded programs", "Shared deal flow", "Cross-border market access", "Investor network access"],
                  color: "#8b5cf6",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.tag}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: `linear-gradient(to right, ${card.color}, ${card.color}60)` }}
                  />
                  <div className="p-6">
                    <span
                      className="text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded mb-3 inline-block"
                      style={{ color: card.color, background: `${card.color}15` }}
                    >
                      {card.tag}
                    </span>
                    <h3 className="font-heading font-bold text-white mb-2 group-hover:text-[#2563EB] transition-colors duration-200">
                      {card.title}
                    </h3>
                    <div className="h-px bg-white/10 mb-3" />
                    <p className="text-sm text-white/50 leading-relaxed mb-4">{card.desc}</p>
                    <ul className="space-y-2">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: card.color }} />
                          <span>{item}</span>
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

      {/* ── Who Should Join ── */}
      <section className="relative bg-[#131942]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-4">
                Who It&apos;s For
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Who Should Join
              </h2>
              <div className="h-px bg-gradient-to-r from-[#22C55E]/40 via-[#22C55E]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">
                Our programs are designed for founders, startups, and partners at different stages of growth.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {audiences.map((audience, i) => (
                <motion.div
                  key={audience.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300 flex flex-col"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: `linear-gradient(to right, ${audience.color}, ${audience.color}60)` }}
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-[#2563EB] transition-colors duration-200">
                      {audience.title}
                    </h3>
                    <div className="h-px bg-white/10 mb-4" />
                    <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">{audience.description}</p>
                    <p className="text-xs font-bold text-white/30 uppercase tracking-wider mb-3">What they gain</p>
                    <ul className="space-y-2">
                      {audience.gains.map((gain) => (
                        <li key={gain} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: audience.color }} strokeWidth={2} />
                          <span className="text-white/60 text-sm">{gain}</span>
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

      {/* ── Resources ── */}
      <section className="relative bg-[#0B0F1A]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f59e0b] mb-4">
                Support
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                What Participants Receive
              </h2>
              <div className="h-px bg-gradient-to-r from-[#f59e0b]/40 via-[#f59e0b]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">
                Comprehensive resources and support designed to accelerate your startup journey.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
              {resources.map((resource) => (
                <div key={resource.label} className="flex items-center justify-between py-4 border-b border-white/[0.08]">
                  <span className="text-white/80 text-sm font-medium">{resource.label}</span>
                  <span className="text-xs font-semibold text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded">
                    {resource.badge}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/30 mt-6">Metrics shown are indicative and updated as programs scale.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[#0E1221] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-[#22C55E]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15 bg-[#2563EB]" />
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
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-5">
                Get Involved
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Build, Scale, and Expand With UPTECH
              </h2>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
                Join our incubation program and become part of a collaborative ecosystem driving innovation across the UK and Pakistan.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/membership" variant="primary" size="lg" showArrow>
                  Apply for Incubation
                </Button>
                <Button href="/membership" variant="glass" size="lg" showArrow>
                  Partner With Us
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
