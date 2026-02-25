"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  BookOpen,
  Zap,
  Cpu,
  Building2,
  Car,
  Globe2,
  Microscope,
  HeartPulse,
  Wheat,
  ArrowUpRight,
} from "lucide-react";

const techFocusAreas = [
  { icon: BookOpen, title: "Driving Digital Literacy", desc: "Empowering communities across Pakistan with digital skills, coding education, and technology awareness programmes to bridge the digital divide.", color: "#2563EB" },
  { icon: Zap, title: "Energy Solutions", desc: "Leveraging technology to develop renewable energy solutions, smart grids, and efficient power management systems for Pakistan's growing energy needs.", color: "#22C55E" },
  { icon: Cpu, title: "Fusion Technology", desc: "Exploring cutting-edge fusion technology research and development through UK–Pakistan academic and industry collaboration.", color: "#8b5cf6" },
  { icon: Building2, title: "Smart Buildings & Infrastructure", desc: "Developing IoT-enabled smart building solutions, sustainable construction technology, and intelligent infrastructure management systems.", color: "#f59e0b" },
  { icon: Car, title: "Electric Vehicles & Mobility", desc: "Supporting the electric vehicle ecosystem through technology transfer, charging infrastructure development, and sustainable mobility solutions.", color: "#C41E3A" },
  { icon: Globe2, title: "Internet Access & Connectivity", desc: "Bridging connectivity gaps with broadband expansion, satellite internet solutions, and digital infrastructure development across underserved regions.", color: "#ef4444" },
  { icon: Microscope, title: "Microchip & Biotech", desc: "Advancing semiconductor design, microchip manufacturing capabilities, and biotechnology research through bilateral partnerships and knowledge exchange.", color: "#06b6d4" },
  { icon: HeartPulse, title: "Body Mapping & Health Tech", desc: "Pioneering digital health solutions including AI-powered body mapping, telemedicine platforms, and health data analytics for improved patient outcomes.", color: "#22C55E" },
  { icon: Wheat, title: "Agriculture & AgriTech", desc: "Transforming Pakistan's agriculture sector through precision farming, drone technology, supply chain digitalisation, and climate-smart agriculture solutions.", color: "#f59e0b" },
];

const programs = [
  {
    title: "IT/AI Services Company",
    description: "A collective entity providing AI and IT services, leveraging shared resources and expertise to deliver world-class solutions.",
    features: ["Enterprise AI solutions", "Cloud infrastructure services", "Cross-border tech delivery"],
  },
  {
    title: "Collective Company Model",
    description: "A collaborative business structure that combines individual expertise into a unified, powerful entity, maximising impact and opportunities.",
    features: ["Shared resources & infrastructure", "Unified expertise pool", "Amplified market presence"],
  },
  {
    title: "Company Objectives",
    description: "Focused on driving innovation, creating sustainable growth, and building bridges between UK and Pakistani tech ecosystems.",
    features: ["Innovation acceleration", "Sustainable growth models", "UK-Pakistan tech bridges"],
  },
  {
    title: "AI Collective Startups",
    description: "Innovative startup models that pool resources, knowledge, and networks to accelerate AI-driven business development.",
    features: ["Resource pooling", "Knowledge sharing networks", "AI-driven acceleration"],
  },
  {
    title: "Collective Startup Model",
    description: "A revolutionary approach where multiple entrepreneurs collaborate under a shared structure, reducing risk and amplifying success.",
    features: ["Risk reduction", "Shared infrastructure", "Collaborative success"],
  },
  {
    title: "How It Works",
    description: "A streamlined process connecting talent, resources, and opportunities to create sustainable tech ventures and career pathways.",
    features: ["Talent connection", "Resource optimisation", "Career pathway creation"],
  },
];

const steps = [
  { number: "01", title: "Join the Program", description: "Become a member and access our comprehensive AI and tech programs.", color: "#2563EB" },
  { number: "02", title: "Assessment & Placement", description: "Complete skill assessments and get matched with the right program track.", color: "#22C55E" },
  { number: "03", title: "Training & Development", description: "Participate in certifications, training, and skill development programs.", color: "#8b5cf6" },
  { number: "04", title: "Collective Startup Formation", description: "Join or form collective startups leveraging shared resources, expertise, and collaborative models.", color: "#f59e0b" },
  { number: "05", title: "Launch & Scale", description: "Launch your venture with ongoing support and cross-border market access.", color: "#C41E3A" },
];

export default function AITechProgramsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#0B0F1A]">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <Image
          src="/image/london-images/data-security-privacy.jpg"
          alt="AI & Tech Programs"
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
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #2563EB 50%, #8b5cf6 100%)",
                }}
              >
                AI &amp; Tech Programs
              </span>
            </h1>
            <div className="max-w-2xl backdrop-blur-md bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 mb-8">
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
                Driving AI innovation and tech leadership between the UK and Pakistan through comprehensive training, certifications, and collaborative startup models.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>
                Become a Member
              </Button>
              <Button href="/initiatives" variant="glass" size="lg" showArrow>
                Explore Initiatives
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="relative bg-[#0E1221]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">
                Our Vision
              </p>
              <p className="font-heading font-extrabold text-white/90 text-xl sm:text-2xl lg:text-3xl leading-snug mb-8">
                UPTECH&apos;s AI and Tech Programs bridge the UK and Pakistan through cutting-edge AI services, collective company models, and innovative startup ecosystems.
              </p>
              <div className="h-px bg-gradient-to-r from-[#2563EB]/40 via-[#8b5cf6]/20 to-transparent mb-8" />
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-5">
                Our programs are designed to accelerate technology adoption, build world-class AI capabilities, and create sustainable pathways for innovation across both nations through collective business models and collaborative startup ecosystems.
              </p>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                Through strategic partnerships, shared resources, and innovative collective structures, we&apos;re building a future where UK and Pakistani tech talent drives global AI innovation and technology leadership.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Programs Grid ── */}
      <section className="relative bg-[#0B0F1A]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#22C55E] mb-4">
                Our Programs
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Program Areas
              </h2>
              <div className="h-px bg-gradient-to-r from-[#22C55E]/40 via-[#22C55E]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">
                Comprehensive initiatives designed to accelerate AI and technology adoption across the UK–Pakistan corridor.
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
                  className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: "linear-gradient(to right, #2563EB, #2563EB60)" }}
                  />
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-[#2563EB] transition-colors duration-200">
                      {program.title}
                    </h3>
                    <div className="h-px bg-white/10 mb-3" />
                    <p className="text-white/50 text-sm leading-relaxed mb-4">{program.description}</p>
                    <ul className="space-y-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                          <span className="text-white/60 text-sm">{feature}</span>
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

      {/* ── How It Works ── */}
      <section className="relative bg-[#131942]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5cf6] mb-4">
                Process
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                How It Works
              </h2>
              <div className="h-px bg-gradient-to-r from-[#8b5cf6]/40 via-[#8b5cf6]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">
                A step-by-step journey from concept to successful AI and tech venture.
              </p>
            </div>
            <div className="space-y-0">
              {steps.map((step, i) => (
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
                    <h3 className="font-heading font-bold text-white text-base sm:text-lg mb-1.5 group-hover:text-[#2563EB] transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Technology Focus Areas ── */}
      <section className="relative bg-[#0E1221]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f59e0b] mb-4">
                What We Do
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Technology Focus Areas
              </h2>
              <div className="h-px bg-gradient-to-r from-[#f59e0b]/40 via-[#f59e0b]/10 to-transparent mb-4 max-w-xs" />
              <p className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed">
                UPTECH drives innovation across key technology sectors that are transforming both nations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techFocusAreas.map((area, i) => {
                const Icon = area.icon;
                return (
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
                      <div className="flex items-center justify-between mb-5">
                        <div className="relative">
                          <div
                            className="absolute inset-[-8px] rounded-xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500"
                            style={{ background: area.color }}
                          />
                          <div
                            className="relative w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{
                              background: `${area.color}15`,
                              border: `1px solid ${area.color}30`,
                              boxShadow: `0 0 20px ${area.color}10`,
                            }}
                          >
                            <Icon className="w-5 h-5" style={{ color: area.color }} strokeWidth={1.5} />
                          </div>
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-[#2563EB] transition-colors duration-200">
                        {area.title}
                      </h3>
                      <div className="h-px bg-white/10 mb-3" />
                      <p className="text-white/50 text-sm leading-relaxed">{area.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Next Steps / CTA ── */}
      <section className="relative bg-[#0B0F1A] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-[#2563EB]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15 bg-[#8b5cf6]" />
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
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB] mb-5">
                Get Involved
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Start Building With UPTECH
              </h2>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
                Whether you are an entrepreneur, student, or technology professional, our programmes provide structured pathways to training, collaboration, and market access across the UK–Pakistan technology corridor.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/membership" variant="primary" size="lg" showArrow>
                  Become a Member
                </Button>
                <Button href="/initiatives" variant="glass" size="lg" showArrow>
                  Explore Initiatives
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
