"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { motion, useReducedMotion } from "framer-motion";
import {
  Brain,
  Cpu,
  GraduationCap,
  Users,
  Shield,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Lightbulb,
  Globe2,
} from "lucide-react";

const capabilities = [
  { title: "AI-Powered Insights", description: "Intelligent analytics and recommendations to enhance decision-making and productivity.", icon: Brain, color: "#2563EB", num: "01" },
  { title: "Workforce Enablement", description: "Tools and platforms that empower teams to work smarter and achieve better outcomes.", icon: Cpu, color: "#22C55E", num: "02" },
  { title: "Skills Development", description: "Personalised learning paths and AI-assisted training to build future-ready capabilities.", icon: GraduationCap, color: "#C41E3A", num: "03" },
  { title: "Collaboration Tools", description: "Seamless cross-border collaboration platforms connecting UK and Pakistan professionals.", icon: Users, color: "#2563EB", num: "04" },
  { title: "AI Governance", description: "Ethical frameworks and compliance tools ensuring responsible AI deployment.", icon: Shield, color: "#C41E3A", num: "05" },
  { title: "Automation & Efficiency", description: "Streamline workflows and automate routine tasks to focus on high-value work.", icon: Zap, color: "#ef4444", num: "06" },
];

const howItWorks = [
  { number: "01", title: "Assess & Plan", description: "Evaluate your organisation\u2019s needs and develop a tailored AI integration strategy.", outcome: "Personalised AI roadmap", icon: Lightbulb, color: "#2563EB" },
  { number: "02", title: "Implement & Train", description: "Deploy AI tools and provide comprehensive training to your team across all levels.", outcome: "Operational AI capability", icon: Cpu, color: "#22C55E" },
  { number: "03", title: "Optimise & Scale", description: "Continuously refine AI applications and scale successful implementations.", outcome: "Measurable productivity gains", icon: Zap, color: "#C41E3A" },
  { number: "04", title: "Collaborate & Grow", description: "Leverage cross-border networks and partnerships to expand your AI impact.", outcome: "Sustained innovation culture", icon: Globe2, color: "#2563EB" },
];

const useCases = [
  { title: "Workforce Enablement", description: "Empower employees with AI tools that augment capabilities and accelerate performance across organisations.", icon: Users, color: "#2563EB" },
  { title: "Skills Development", description: "Personalised learning experiences that adapt to individual needs and career goals for future-readiness.", icon: GraduationCap, color: "#22C55E" },
  { title: "AI Inclusion", description: "Democratise access to AI technologies, ensuring no one is left behind in the digital transformation.", icon: Globe2, color: "#C41E3A" },
  { title: "Policy & Ecosystem Collaboration", description: "Foster cross-border partnerships and policy frameworks that support responsible AI adoption.", icon: Shield, color: "#2563EB" },
];

const stats = [
  { value: "6", label: "sectors covered", color: "#2563EB" },
  { value: "76%", label: "average adoption rate", color: "#22C55E" },
  { value: "79%", label: "average efficiency gain", color: "#C41E3A" },
  { value: "Cross-border", label: "UK\u2013Pakistan delivery", color: "#2563EB" },
];

export default function PeopleAIClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#EEECEA]">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/image/london-images/ai-futuristic-tech.jpg"
          alt="AI Futuristic Technology"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A]/80 via-[#0B0F1A]/60 to-[#0B0F1A]" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">
              UPTECH Initiative
            </p>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] mb-6">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #2563EB 50%, #22C55E 100%)",
                }}
              >
                People AI Platform
              </span>
            </h1>

            {/* Glass morphism subtitle card */}
            <div className="max-w-2xl backdrop-blur-md bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 mb-8">
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                Empowering people and organisations through human-centric AI support systems that integrate technology with professional services.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/membership/apply" variant="primary" size="lg" showArrow>
                Get Started
              </Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="relative bg-[#1C1F2E]">
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
                {/* Colored top border */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
                  style={{ background: `linear-gradient(to right, ${stat.color}, ${stat.color}60)` }}
                />
                {/* Glow effect on hover */}
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
      <section className="relative bg-[#EEECEA]">
        <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">
                Our Vision
              </p>
              <p className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl lg:text-3xl leading-snug mb-5">
                The People AI Platform is designed to democratise access to AI capabilities, ensuring that individuals and organisations can leverage artificial intelligence to enhance productivity, develop skills, and drive innovation.
              </p>
              <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#22C55E]/20 to-transparent mb-5" />
              <p className="text-[#5A5F72] text-lg leading-relaxed mb-5">
                We focus on creating inclusive AI solutions that support workforce enablement, skills development, and cross-border collaboration between the UK and Pakistan.
              </p>
              <p className="text-[#5A5F72] text-lg leading-relaxed">
                Through a human-centric approach, we bridge technology and professional services to enable sustainable workforce transformation across sectors.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Platform Capabilities ── */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <AnimatedSection>
            {/* Section header */}
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-4">
                Capabilities
              </p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Platform Capabilities
              </h2>
              <p className="text-[#7A7E8F] text-base sm:text-lg max-w-2xl leading-relaxed">
                Comprehensive AI-powered tools and services designed to transform how people work, learn, and collaborate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={cap.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 shadow-sm"
                  >
                    {/* Colored top border */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{ background: `linear-gradient(to right, ${cap.color}, ${cap.color}60)` }}
                    />

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-5">
                        {/* Icon with colored glow */}
                        <div className="relative">
                          <div
                            className="absolute inset-[-8px] rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                            style={{ background: cap.color }}
                          />
                          <div
                            className="relative w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{
                              background: `${cap.color}15`,
                              border: `1px solid ${cap.color}30`,
                            }}
                          >
                            <Icon className="w-5 h-5" style={{ color: cap.color }} strokeWidth={1.5} />
                          </div>
                        </div>
                        {/* Numbered label */}
                        <span
                          className="text-[10px] font-bold tracking-[0.2em] uppercase"
                          style={{ color: `${cap.color}60` }}
                        >
                          {cap.num}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2 group-hover:text-[#2563EB] transition-colors duration-200">
                        {cap.title}
                      </h3>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-[#7A7E8F] text-base leading-relaxed">{cap.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="relative bg-[#E8E6E3]">
        <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <AnimatedSection>
            {/* Section header */}
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-4">
                Your Journey
              </p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                How It Works
              </h2>
              <p className="text-[#7A7E8F] text-base sm:text-lg max-w-2xl leading-relaxed">
                A simple, structured approach to integrating AI into your organisation and workflows.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 shadow-sm"
                  >
                    {/* Colored top border */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{ background: `linear-gradient(to right, ${step.color}, ${step.color}60)` }}
                    />

                    <div className="p-6">
                      {/* Glowing number circle and icon */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="relative">
                          {/* Glow behind circle */}
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
                        {/* Icon with glow */}
                        <div className="relative">
                          <div
                            className="absolute inset-[-6px] rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                            style={{ background: step.color }}
                          />
                          <div
                            className="relative w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{
                              background: `${step.color}15`,
                              border: `1px solid ${step.color}30`,
                            }}
                          >
                            <Icon className="w-5 h-5" style={{ color: step.color }} strokeWidth={1.5} />
                          </div>
                        </div>
                      </div>

                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#2563EB] transition-colors duration-200">
                        {step.title}
                      </h3>
                      <p className="text-[#7A7E8F] text-base leading-relaxed mb-4">{step.description}</p>

                      {/* Outcome */}
                      <div className="flex items-center gap-2 pt-3 border-t border-[#D8D5CF]">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: step.color }} strokeWidth={2} />
                        <span className="text-xs font-semibold" style={{ color: step.color }}>
                          {step.outcome}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="relative bg-[#F5F4F2]">
        <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <AnimatedSection>
            {/* Section header */}
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C41E3A] mb-4">
                Impact
              </p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Use Cases
              </h2>
              <p className="text-[#7A7E8F] text-base sm:text-lg max-w-2xl leading-relaxed">
                Real-world applications driving transformation across industries and sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, i) => {
                const Icon = useCase.icon;
                return (
                  <motion.div
                    key={useCase.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 shadow-sm"
                  >
                    {/* Colored left accent */}
                    <div
                      className="absolute top-4 bottom-4 left-0 w-1 rounded-r-full"
                      style={{ background: `linear-gradient(to bottom, ${useCase.color}, ${useCase.color}30)` }}
                    />

                    <div className="p-6 pl-7 flex items-start gap-5">
                      {/* Icon with glow */}
                      <div className="relative flex-shrink-0">
                        <div
                          className="absolute inset-[-6px] rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                          style={{ background: useCase.color }}
                        />
                        <div
                          className="relative w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            background: `${useCase.color}15`,
                            border: `1px solid ${useCase.color}30`,
                          }}
                        >
                          <Icon className="w-5 h-5" style={{ color: useCase.color }} strokeWidth={1.5} />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-1 group-hover:text-[#2563EB] transition-colors duration-200">
                          {useCase.title}
                        </h3>
                        <p className="text-[#7A7E8F] text-base leading-relaxed">{useCase.description}</p>
                      </div>

                      <ArrowUpRight className="w-4 h-4 text-[#D8D5CF] group-hover:text-[#2563EB] transition-colors duration-300 flex-shrink-0 mt-1" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative bg-[#0B0F1A] overflow-hidden">
        {/* Gradient glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-[#2563EB]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15 bg-[#22C55E]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">
                Get Started
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Join the People AI Platform
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl">
                Be part of a transformative movement that&apos;s reshaping how people and organisations work with AI across the UK and Pakistan.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/membership/apply" variant="primary" size="lg" showArrow>
                  Get Started
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
