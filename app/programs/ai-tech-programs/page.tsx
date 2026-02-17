"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedUnderline } from "@/components/AnimatedUnderline";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { 
  Building2, 
  Target, 
  Rocket, 
  Users, 
  TrendingUp,
  GraduationCap,
  Network,
  Cpu,
  Zap,
  Code,
  Globe,
  BarChart3,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useRef, useState } from "react";
import type { ComponentType } from "react";
import { siteConfig } from "@/config/site";

export default function AITechProgramsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <AITechHero shouldReduceMotion={shouldReduceMotion} />

      {/* Intro Narrative */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E8F0F8] py-24 md:py-28 lg:py-32">
        {/* Subtle top divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(15,23,42,0.08)] to-transparent" />
        
        {/* Frosted gradient backdrop with brand glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle noise overlay */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Brand colored radial glows */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#2D5BFF] rounded-full opacity-[0.04] blur-[120px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.15, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#22C55E] rounded-full opacity-[0.03] blur-[100px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.2, 1],
              x: [0, -25, 0],
              y: [0, 25, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <AnimatedSection>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_450px] gap-16 items-center">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                {/* Badge/Pill */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-block p-[1px] rounded-full bg-gradient-to-r from-[#2D5BFF] via-[#22C55E] to-[#2563EB]"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#2D5BFF] via-[#22C55E] to-[#2563EB]" />
                    <span className="text-xs font-semibold text-[#64748B] tracking-wide uppercase">AI and Tech Programs</span>
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-heading font-bold text-[clamp(2rem,5vw,3rem)] leading-[1.1] tracking-tight text-[#0F172A]"
                >
                  Driving AI Innovation and Tech Leadership
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg md:text-xl text-[#64748B] leading-[1.7] max-w-2xl"
                >
                  UPTECH&apos;s AI and Tech Programs bridge the UK and Pakistan through cutting-edge AI services, collective company models, and innovative startup ecosystems that empower the next generation of tech leaders.
                </motion.p>

                {/* Body paragraphs */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-6 text-[#475569] leading-[1.75] max-w-3xl"
                >
                  <p>
                    Our AI and Tech Programs are designed to accelerate technology adoption, build world-class AI capabilities, and create sustainable pathways for innovation across both nations through collective business models and collaborative startup ecosystems.
                  </p>
                  <p>
                    Through strategic partnerships, shared resources, and innovative collective structures, we&apos;re building a future where UK and Pakistani tech talent drives global AI innovation and technology leadership.
                  </p>
                </motion.div>
              </motion.div>

              {/* Visual Card */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <IntroVisualPanel shouldReduceMotion={shouldReduceMotion} />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Program Blocks - Premium Core Section */}
      <Section className="relative overflow-hidden" id="programs">
        {/* Animated Background Glows */}
        <ProgramsBackground shouldReduceMotion={shouldReduceMotion} />
        
        <AnimatedSection>
          <div className="max-w-7xl mx-auto relative z-10">
            <SectionHeader
              title="Our Programs"
              subtitle="Comprehensive initiatives designed to accelerate AI and technology adoption across the UK–Pakistan corridor."
              align="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <PremiumProgramCard
                icon={Building2}
                title="IT/AI Services Company"
                description="A collective entity providing AI and IT services, leveraging shared resources and expertise to deliver world-class solutions."
                features={[
                  "Enterprise AI solutions",
                  "Cloud infrastructure services",
                  "Cross-border tech delivery"
                ]}
                color="blue"
                visualType="circuit"
                shouldReduceMotion={shouldReduceMotion}
              />
              <PremiumProgramCard
                icon={Users}
                title="Collective Company Model"
                description="A collaborative business structure that combines individual expertise into a unified, powerful entity, maximizing impact and opportunities."
                features={[
                  "Shared resources & infrastructure",
                  "Unified expertise pool",
                  "Amplified market presence"
                ]}
                color="green"
                visualType="network"
                shouldReduceMotion={shouldReduceMotion}
              />
              <PremiumProgramCard
                icon={Target}
                title="Company Objectives"
                description="Focused on driving innovation, creating sustainable growth, and building bridges between UK and Pakistani tech ecosystems."
                features={[
                  "Innovation acceleration",
                  "Sustainable growth models",
                  "UK-Pakistan tech bridges"
                ]}
                color="red"
                visualType="target"
                shouldReduceMotion={shouldReduceMotion}
              />
              <PremiumProgramCard
                icon={Rocket}
                title="AI Collective Startups"
                description="Innovative startup models that pool resources, knowledge, and networks to accelerate AI-driven business development."
                features={[
                  "Resource pooling",
                  "Knowledge sharing networks",
                  "AI-driven acceleration"
                ]}
                color="green"
                visualType="rocket"
                shouldReduceMotion={shouldReduceMotion}
              />
              <PremiumProgramCard
                icon={Network}
                title="Collective Startup Model"
                description="A revolutionary approach where multiple entrepreneurs collaborate under a shared structure, reducing risk and amplifying success."
                features={[
                  "Risk reduction",
                  "Shared infrastructure",
                  "Collaborative success"
                ]}
                color="blue"
                visualType="network"
                shouldReduceMotion={shouldReduceMotion}
              />
              <PremiumProgramCard
                icon={Zap}
                title="How It Works"
                description="A streamlined process connecting talent, resources, and opportunities to create sustainable tech ventures and career pathways."
                features={[
                  "Talent connection",
                  "Resource optimization",
                  "Career pathway creation"
                ]}
                color="red"
                visualType="lightning"
                shouldReduceMotion={shouldReduceMotion}
              />
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* How It Works Timeline */}
      <Section>
        <AnimatedSection>
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="How It Works"
              subtitle="A step-by-step journey from concept to successful AI and tech venture."
              align="center"
            />
            <HowItWorksTimeline shouldReduceMotion={shouldReduceMotion} />
          </div>
        </AnimatedSection>
      </Section>

      {/* Call to Action */}
      <Section className="relative overflow-hidden">
        <CTABackground shouldReduceMotion={shouldReduceMotion} />
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <SectionHeader
              title="Ready to Transform Your Tech Career?"
              subtitle="Join UPTECH&apos;s AI and Tech Programs and become part of a global network driving innovation between the UK and Pakistan."
              align="center"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button href="/membership" variant="primary" size="lg" showArrow>
                Become a Member
              </Button>
              <Button href={siteConfig.portalUrl} variant="glass" size="lg" showArrow>
                Access Portal
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}

// Hero Component
function AITechHero({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#F8FAFC] pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[#2D5BFF] rounded-full opacity-[0.15] blur-[200px]"
          animate={shouldReduceMotion ? {} : {
            x: [0, 50, -40, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[600px] h-[600px] bg-[#22C55E] rounded-full opacity-[0.08] blur-[160px]"
          animate={shouldReduceMotion ? {} : {
            x: [0, -60, 50, 0],
            y: [0, 60, -40, 0],
            scale: [1, 1.25, 0.85, 1],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-[550px] h-[550px] bg-[#2563EB] rounded-full opacity-[0.06] blur-[150px]"
          animate={shouldReduceMotion ? {} : {
            x: [0, 40, -50, 0],
            y: [0, -40, 50, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ duration: 42, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#0F172A]">
            <span className="relative inline-block">
              AI and Tech Programs
              <AnimatedUnderline />
            </span>
          </h1>
          <p className="text-xl text-[#475569] leading-relaxed">
            Driving AI innovation and tech leadership between the UK and Pakistan through comprehensive training, certifications, and collaborative startup models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button href="#programs" variant="primary" size="lg" showArrow>
              Explore Programs
            </Button>
            <Button href="/membership" variant="glass" size="lg" showArrow>
              Become a Member
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Intro Visual Panel
function IntroVisualPanel({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group rounded-3xl bg-white/60 backdrop-blur-xl border border-[rgba(45,91,255,0.15)] p-10 overflow-hidden h-[450px] shadow-lg"
      style={{
        boxShadow: "0 20px 60px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5) inset",
      }}
      animate={shouldReduceMotion ? {} : {
        y: [0, -8, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={shouldReduceMotion ? {} : {
        scale: 1.02,
        y: -12,
        transition: { duration: 0.3 },
      }}
    >
      {/* Animated shine sweep on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: "linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.4) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
          animation: isHovered ? "shimmer 1.5s ease-in-out" : "none",
        }}
      />
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2D5BFF] via-[#22C55E] to-[#2563EB] rounded-t-3xl" />

      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#2D5BFF]/8 via-[#22C55E]/6 to-[#2563EB]/5"
        animate={
          shouldReduceMotion
            ? {}
            : {
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Accent glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2D5BFF]/20 via-[#22C55E]/15 to-[#2563EB]/20 opacity-0 group-hover:opacity-100 blur-2xl -z-10"
        animate={isHovered && !shouldReduceMotion ? {
          opacity: 0.3,
          scale: 1.1,
        } : {
          opacity: 0,
          scale: 1,
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 200 }}
          whileHover={shouldReduceMotion ? {} : {
            scale: 1.1,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.5 },
          }}
        >
          <div className="relative">
            <Cpu className="w-20 h-20 text-[#2D5BFF] mb-6 drop-shadow-lg" />
            <motion.div
              className="absolute inset-0 bg-[#2D5BFF] rounded-full blur-2xl opacity-20"
              animate={shouldReduceMotion ? {} : {
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="font-heading font-bold text-2xl text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors duration-300">
            Innovation Hub
          </h3>
          <p className="text-base text-[#64748B] leading-relaxed group-hover:text-[#475569] transition-colors duration-300">
            Connecting talent and technology
          </p>
        </motion.div>
      </div>

      {/* Enhanced shadow on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          boxShadow: "0 25px 80px -12px rgba(45, 91, 255, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5) inset",
        }}
        animate={isHovered && !shouldReduceMotion ? {
          opacity: 1,
        } : {
          opacity: 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// Premium Program Card Component
function PremiumProgramCard({
  icon: Icon,
  title,
  description,
  features,
  color,
  visualType,
  shouldReduceMotion,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  color: "blue" | "green" | "red";
  visualType: "circuit" | "network" | "target" | "rocket" | "lightning";
  shouldReduceMotion: boolean | null;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  const colorConfig = {
    blue: {
      gradient: "from-[#2563EB] to-[#1D4ED8]",
      bg: "bg-[#2563EB]/10",
      border: "border-[#2563EB]/30",
      iconBg: "bg-[#2563EB]/20",
      iconColor: "text-[#2563EB]",
      glow: "shadow-[0_0_30px_rgba(37,99,235,0.3)]",
      accent: "#2563EB",
    },
    green: {
      gradient: "from-[#22C55E] to-[#16A34A]",
      bg: "bg-[#22C55E]/10",
      border: "border-[#22C55E]/30",
      iconBg: "bg-[#22C55E]/20",
      iconColor: "text-[#22C55E]",
      glow: "shadow-[0_0_30px_rgba(34,197,94,0.3)]",
      accent: "#22C55E",
    },
    red: {
      gradient: "from-[#2563EB] to-[#BE123C]",
      bg: "bg-[#2563EB]/10",
      border: "border-[#2563EB]/30",
      iconBg: "bg-[#2563EB]/20",
      iconColor: "text-[#2563EB]",
      glow: "shadow-[0_0_30px_rgba(225,29,72,0.3)]",
      accent: "#2563EB",
    },
  };

  const config = colorConfig[color];

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02, transition: { duration: 0.3 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Animated gradient border */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-20 blur-xl`}
        animate={isHovered && !shouldReduceMotion ? { opacity: 0.2, scale: 1.1 } : { opacity: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
      />
      
      <div className={`relative rounded-2xl border ${config.border} ${config.bg} backdrop-blur-md p-8 h-full flex flex-col overflow-hidden group-hover:${config.glow} transition-all duration-500`}>
        {/* Background Tech Visual */}
        <TechVisual type={visualType} color={config.accent} isHovered={isHovered} shouldReduceMotion={shouldReduceMotion} />
        
        {/* Top gradient accent line */}
        <motion.div
          className={`h-1 bg-gradient-to-r ${config.gradient} rounded-full mb-6`}
          initial={{ width: "0%" }}
          animate={shouldReduceMotion || isInView ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        
        {/* Icon */}
        <motion.div
          className={`relative z-10 w-16 h-16 rounded-xl ${config.iconBg} ${config.iconColor} flex items-center justify-center mb-6`}
          whileHover={shouldReduceMotion ? {} : { rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-8 h-8" />
          <motion.div
            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-30 blur-md`}
            animate={isHovered && !shouldReduceMotion ? { opacity: 0.3 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex-1">
          <h3 className="font-heading font-bold text-xl mb-3 text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[#475569] mb-6 leading-relaxed">
            {description}
          </p>
          
          {/* Features List */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                animate={shouldReduceMotion || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <motion.div
                  className={`mt-1 w-1.5 h-1.5 rounded-full ${config.iconBg} ${config.iconColor} flex-shrink-0`}
                  animate={isHovered && !shouldReduceMotion ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
                <span className="text-xs text-[#64748B]">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom accent arrow */}
        <motion.div
          className="relative z-10 mt-6 flex items-center gap-2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: config.accent }}
        >
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  );
}

// Tech Visual Component for Cards
function TechVisual({ 
  type, 
  color, 
  isHovered, 
  shouldReduceMotion 
}: { 
  type: string; 
  color: string; 
  isHovered: boolean; 
  shouldReduceMotion: boolean | null;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {type === "circuit" && (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
          <defs>
            <linearGradient id={`circuitGrad-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.6" />
              <stop offset="100%" stopColor={color} stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {[
            { x1: 20, y1: 40, x2: 80, y2: 40 },
            { x1: 80, y1: 40, x2: 80, y2: 80 },
            { x1: 80, y1: 80, x2: 120, y2: 80 },
            { x1: 120, y1: 80, x2: 120, y2: 120 },
            { x1: 120, y1: 120, x2: 180, y2: 120 },
            { x1: 40, y1: 100, x2: 80, y2: 100 },
          ].map((line, index) => (
            <motion.line
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke={`url(#circuitGrad-${color})`}
              strokeWidth="2"
              strokeLinecap="round"
              initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
              animate={shouldReduceMotion || isHovered ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1, delay: index * 0.1, repeat: Infinity, repeatDelay: 2 }}
            />
          ))}
          {[40, 80, 120, 160].map((x, index) => (
            <motion.circle
              key={index}
              cx={x}
              cy={60 + index * 30}
              r="4"
              fill={color}
              initial={shouldReduceMotion ? { opacity: 0.6 } : { opacity: 0, scale: 0 }}
              animate={shouldReduceMotion || isHovered ? { opacity: [0.6, 1, 0.6], scale: [1, 1.2, 1] } : { opacity: 0, scale: 0 }}
              transition={{ duration: 1.5, delay: index * 0.2, repeat: Infinity }}
            />
          ))}
        </svg>
      )}
      
      {type === "network" && (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
          {[
            { x: 50, y: 50 },
            { x: 150, y: 50 },
            { x: 100, y: 100 },
            { x: 50, y: 150 },
            { x: 150, y: 150 },
          ].map((node, index) => (
            <g key={index}>
              {index < 4 && (
                <motion.line
                  x1={node.x}
                  y1={node.y}
                  x2={index === 0 ? 100 : index === 1 ? 100 : index === 2 ? 50 : 150}
                  y2={index === 0 ? 100 : index === 1 ? 100 : index === 2 ? 150 : 150}
                  stroke={color}
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={shouldReduceMotion || isHovered ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              )}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="6"
                fill={color}
                fillOpacity="0.6"
                initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
                animate={shouldReduceMotion || isHovered ? { scale: [1, 1.3, 1] } : { scale: 0 }}
                transition={{ duration: 1, delay: index * 0.15, repeat: Infinity, repeatDelay: 1 }}
              />
            </g>
          ))}
        </svg>
      )}
      
      {type === "target" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-32 h-32" viewBox="0 0 100 100">
            {[20, 35, 50].map((radius, index) => (
              <motion.circle
                key={index}
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke={color}
                strokeWidth="1.5"
                strokeOpacity="0.4"
                initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                animate={shouldReduceMotion || isHovered ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            ))}
            <motion.circle
              cx="50"
              cy="50"
              r="8"
              fill={color}
              fillOpacity="0.8"
              animate={shouldReduceMotion || isHovered ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </svg>
        </div>
      )}
      
      {type === "rocket" && (
        <div className="absolute bottom-0 right-0 w-24 h-24 opacity-30">
          <motion.div
            animate={shouldReduceMotion || isHovered ? { y: [0, -10, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Rocket className="w-full h-full" style={{ color }} />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-8"
            animate={shouldReduceMotion || isHovered ? { opacity: [0.3, 0.7, 0.3], scaleY: [1, 1.2, 1] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-full h-full bg-gradient-to-t" style={{ background: `linear-gradient(to top, ${color}, transparent)` }} />
          </motion.div>
        </div>
      )}
      
      {type === "lightning" && (
        <div className="absolute top-1/2 right-4 w-16 h-20">
          <motion.svg
            viewBox="0 0 50 70"
            className="w-full h-full"
            animate={shouldReduceMotion || isHovered ? { opacity: [0.3, 0.8, 0.3] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <path
              d="M25 5 L15 35 L25 35 L20 65 L35 35 L25 35 Z"
              fill={color}
              fillOpacity="0.6"
            />
          </motion.svg>
        </div>
      )}
    </div>
  );
}

// Programs Background Component
function ProgramsBackground({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#2D5BFF] rounded-full opacity-[0.08] blur-[150px]"
        animate={shouldReduceMotion ? {} : {
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#22C55E] rounded-full opacity-[0.06] blur-[140px]"
        animate={shouldReduceMotion ? {} : {
          x: [0, -25, 20, 0],
          y: [0, 25, -20, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/2 w-[450px] h-[450px] bg-[#2563EB] rounded-full opacity-[0.05] blur-[130px]"
        animate={shouldReduceMotion ? {} : {
          x: [0, 20, -25, 0],
          y: [0, -20, 25, 0],
          scale: [1, 1.2, 0.85, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

type TimelineStep = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  color: "blue" | "green" | "red";
};

type TimelineColorConfig = {
  blue: {
    gradient: string;
    bg: string;
    glow: string;
    borderAccent: string;
  };
  green: {
    gradient: string;
    bg: string;
    glow: string;
    borderAccent: string;
  };
  red: {
    gradient: string;
    bg: string;
    glow: string;
    borderAccent: string;
  };
};

function HowItWorksStep({
  step,
  index,
  shouldReduceMotion,
  colorConfig,
}: {
  step: TimelineStep;
  index: number;
  shouldReduceMotion: boolean | null;
  colorConfig: TimelineColorConfig;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = step.icon;
  const config = colorConfig[step.color];

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6 items-start"
    >
      {/* Timeline dot */}
      <div className="relative z-10 flex-shrink-0">
        <motion.div
          className={`w-16 h-16 rounded-full bg-gradient-to-br ${config.gradient} flex items-center justify-center border-4 border-white shadow-lg`}
          whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>
        <motion.div
          className={`absolute inset-0 rounded-full ${config.glow} opacity-30`}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0, 0.3],
                }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 pt-2">
        <motion.div
          className={`bg-white rounded-xl border-l-4 ${config.borderAccent} border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 group`}
          whileHover={shouldReduceMotion ? {} : { x: 4 }}
        >
          <div className="flex items-start gap-3 mb-3">
            <h3 className="font-heading font-semibold text-xl text-[#0F172A] flex-1">{step.title}</h3>
            <motion.div
              className={`w-2 h-2 rounded-full ${config.bg} opacity-60`}
              animate={shouldReduceMotion ? {} : { scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            />
          </div>
          <p className="text-[#475569] leading-relaxed">{step.description}</p>

          {/* Subtle gradient accent on hover */}
          <motion.div
            className={`absolute inset-0 rounded-xl bg-gradient-to-r ${config.gradient} opacity-0 group-hover:opacity-5 pointer-events-none`}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

// How It Works Timeline
function HowItWorksTimeline({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const steps: TimelineStep[] = [
    {
      title: "Join the Program",
      description: "Become a member and access our comprehensive AI and tech programs.",
      icon: Users,
      color: "blue",
    },
    {
      title: "Assessment & Placement",
      description: "Complete skill assessments and get matched with the right program track.",
      icon: Target,
      color: "green",
    },
    {
      title: "Training & Development",
      description: "Participate in certifications, training, and skill development programs.",
      icon: GraduationCap,
      color: "red",
    },
    {
      title: "Collective Startup Formation",
      description: "Join or form collective startups leveraging shared resources, expertise, and collaborative models.",
      icon: Rocket,
      color: "blue",
    },
    {
      title: "Launch & Scale",
      description: "Launch your venture with ongoing support and cross-border market access.",
      icon: TrendingUp,
      color: "green",
    },
  ];

  const colorConfig = {
    blue: {
      gradient: "from-[#2563EB] to-[#1D4ED8]",
      bg: "bg-[#2563EB]",
      glow: "bg-[#2563EB]",
      borderAccent: "border-[#2563EB]/20",
    },
    green: {
      gradient: "from-[#22C55E] to-[#16A34A]",
      bg: "bg-[#22C55E]",
      glow: "bg-[#22C55E]",
      borderAccent: "border-[#22C55E]/20",
    },
    red: {
      gradient: "from-[#2563EB] to-[#BE123C]",
      bg: "bg-[#2563EB]",
      glow: "bg-[#2563EB]",
      borderAccent: "border-[#2563EB]/20",
    },
  };

  return (
    <div className="relative mt-12">
      {/* Timeline line with all three colors */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2563EB] via-[#22C55E] via-[#2563EB] via-[#2563EB] to-[#22C55E]" />
      </div>
      
      <div className="space-y-8">
        {steps.map((step, index) => (
          <HowItWorksStep
            key={step.title}
            step={step}
            index={index}
            shouldReduceMotion={shouldReduceMotion}
            colorConfig={colorConfig}
          />
        ))}
      </div>
    </div>
  );
}

// CTA Background
function CTABackground({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-[#2D5BFF] rounded-full opacity-[0.15] blur-[200px]"
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-[800px] h-[800px] bg-[#22C55E] rounded-full opacity-[0.1] blur-[180px]"
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.4, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
