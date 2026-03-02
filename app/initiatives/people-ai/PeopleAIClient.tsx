"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion } from "framer-motion";
import { GlobalCTA } from "@/components/GlobalCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
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
      <PageHero
        label="UPTECH Initiative"
        title="People AI Platform"
        subtitle="Empowering people and organisations through human-centric AI support systems that integrate technology with professional services."
        image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=2400&q=85&auto=format&fit=crop"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership/apply">Get Started</ShinyButton>
          <Button href="/contact" variant="glass" size="lg">
            Learn More
          </Button>
        </div>
      </PageHero>

      {/* ── Stats Bar ── */}
      <section className="bg-[#EEECEA]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl" style={{ background: `linear-gradient(to right, ${stat.color}, ${stat.color}60)` }} />
                <div
                  className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <p className="text-[#5A5F72] text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="relative bg-[#EEECEA]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <div>
              <SectionHeader
                label="Our Vision"
                title="People AI Platform"
                color="blue"
              />
              <p className="max-w-3xl text-[#5A5F72] text-lg leading-relaxed mb-5">
                We focus on creating inclusive AI solutions that support workforce enablement, skills development, and cross-border collaboration between the UK and Pakistan.
              </p>
              <p className="max-w-3xl text-[#5A5F72] text-lg leading-relaxed">
                Through a human-centric approach, we bridge technology and professional services to enable sustainable workforce transformation across sectors.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Platform Capabilities ── */}
      <section className="relative bg-white">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="Capabilities"
              title="Platform Capabilities"
              subtitle="Comprehensive AI-powered tools and services designed to transform how people work, learn, and collaborate."
              color="green"
            />

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
                          className="text-base font-bold tracking-[0.2em] uppercase"
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
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="Your Journey"
              title="How It Works"
              subtitle="A simple, structured approach to integrating AI into your organisation and workflows."
              color="blue"
            />

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
                            className="relative w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-bold border"
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
                        <span className="text-base font-semibold" style={{ color: step.color }}>
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
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              label="Impact"
              title="Use Cases"
              subtitle="Real-world applications driving transformation across industries and sectors."
              color="red"
            />

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
      <GlobalCTA
        label="Get Started"
        title="Join the People AI Platform"
        subtitle="Be part of a transformative movement reshaping how people and organisations work with AI across the UK and Pakistan."
        primaryButtonText="Get Started"
        primaryButtonLink="/membership/apply"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
