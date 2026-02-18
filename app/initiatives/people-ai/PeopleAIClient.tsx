"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Brain,
  Users,
  Target,
  Zap,
  GraduationCap,
  Network,
  Shield,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Globe,
  Lightbulb,
  Activity,
  Clock,
  DollarSign,
  UserCheck,
} from "lucide-react";

export default function PeopleAIClient() {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <PageHero
        title="People AI Platform"
        subtitle="Empowering people and organizations through human-centric AI support systems that integrate technology with professional services."
      />

      {/* Vision Section */}
      <Section>
        <AnimatedSection>
          
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  title="Empowering People Through AI"
                  subtitle="A human-centric platform that bridges technology and professional services to enable workforce transformation."
                 
                />
                <div className="space-y-5 text-[rgba(11,18,32,0.68)] leading-relaxed mt-8 text-base">
                  <p>
                    The People AI Platform is designed to democratize access to AI capabilities, ensuring that individuals and organizations can leverage artificial intelligence to enhance productivity, develop skills, and drive innovation.
                  </p>
                  <p>
                    We focus on creating inclusive AI solutions that support workforce enablement, skills development, and cross-border collaboration between the UK and Pakistan.
                  </p>
                </div>
              </div>
              <div className="relative">
                <HeroKPIPanel />
              </div>
            </div>
        </AnimatedSection>
      </Section>

      {/* Data-Driven Insights Section */}
      <Section variant="dark" className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#1E40AF] rounded-full opacity-[0.06] blur-[180px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#00B140] rounded-full opacity-[0.04] blur-[150px]" />
        </div>
        <AnimatedSection>
          
            <SectionHeader
              title="Platform Impact & Insights"
              subtitle="Illustrative metrics demonstrating the transformative power of AI across key sectors."
             
            />
            <div className="mt-4 mb-8">
              <p className="text-center text-xs text-[rgba(234,242,255,0.5)] uppercase tracking-wider">
                Sample Metrics • For Demonstration
              </p>
            </div>
            <PeopleAIInsights />
        </AnimatedSection>
      </Section>

      {/* Platform Capabilities */}
      <Section variant="dark" className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#1E40AF] rounded-full opacity-[0.08] blur-[180px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#00B140] rounded-full opacity-[0.06] blur-[150px]" />
        </div>
        <AnimatedSection>
          
            <SectionHeader
              title="Platform Capabilities"
              subtitle="Comprehensive AI-powered tools and services designed to transform how people work, learn, and collaborate."
             
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <CapabilityCard
                icon={Brain}
                title="AI-Powered Insights"
                description="Intelligent analytics and recommendations to enhance decision-making and productivity."
                index={0}
              />
              <CapabilityCard
                icon={Users}
                title="Workforce Enablement"
                description="Tools and platforms that empower teams to work smarter and achieve better outcomes."
                index={1}
              />
              <CapabilityCard
                icon={GraduationCap}
                title="Skills Development"
                description="Personalized learning paths and AI-assisted training to build future-ready capabilities."
                index={2}
              />
              <CapabilityCard
                icon={Network}
                title="Collaboration Tools"
                description="Seamless cross-border collaboration platforms connecting UK and Pakistan professionals."
                index={3}
              />
              <CapabilityCard
                icon={Shield}
                title="AI Governance"
                description="Ethical frameworks and compliance tools ensuring responsible AI deployment."
                index={4}
              />
              <CapabilityCard
                icon={Zap}
                title="Automation & Efficiency"
                description="Streamline workflows and automate routine tasks to focus on high-value work."
                index={5}
              />
            </div>
        </AnimatedSection>
      </Section>

      {/* How It Works */}
      <Section>
        <AnimatedSection>
          
            <SectionHeader
              title="How It Works"
              subtitle="A simple, structured approach to integrating AI into your organization and workflows."
             
            />
            <div className="mt-12">
              <HowItWorksSteps />
            </div>
        </AnimatedSection>
      </Section>

      {/* Impact & Use Cases */}
      <Section variant="dark" className="relative overflow-hidden">
        <AnimatedSection>
          
            <SectionHeader
              title="Impact & Use Cases"
              subtitle="Real-world applications driving transformation across industries and sectors."
             
            />
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <UseCaseCard
                icon={TrendingUp}
                title="Workforce Enablement"
                description="Empower employees with AI tools that augment capabilities and accelerate performance."
                color="blue"
                index={0}
              />
              <UseCaseCard
                icon={GraduationCap}
                title="Skills Development"
                description="Personalized learning experiences that adapt to individual needs and career goals."
                color="green"
                index={1}
              />
              <UseCaseCard
                icon={Brain}
                title="AI Inclusion"
                description="Democratize access to AI technologies, ensuring no one is left behind in the digital transformation."
                color="red"
                index={2}
              />
              <UseCaseCard
                icon={Globe}
                title="Policy & Ecosystem Collaboration"
                description="Foster cross-border partnerships and policy frameworks that support responsible AI adoption."
                color="blue"
                index={3}
              />
            </div>
        </AnimatedSection>
      </Section>

      {/* Call To Action */}
      <Section>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#1E40AF] via-[#00B140] to-[#1E40AF] rounded-full opacity-[0.1] blur-[200px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <AnimatedSection>
          
            <SectionHeader
              title="Join the People AI Platform"
              subtitle="Be part of a transformative movement that's reshaping how people and organizations work with AI."
             
            />
            <div className="mt-10">
              <Button href="/membership" variant="primary" size="lg" showArrow>
                Get Started
              </Button>
            </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}


function HeroKPIPanel() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const kpis = [
    { icon: Users, label: "Active Users", value: "12.5K", trend: "+18%" },
    { icon: Activity, label: "Platform Uptime", value: "99.8%", trend: "+0.2%" },
    { icon: TrendingUp, label: "Adoption Rate", value: "87%", trend: "+12%" },
  ];

  const sparklineData = [45, 52, 48, 61, 55, 67, 64, 72, 68, 75, 82, 79];

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95, y: 20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
      className="group relative rounded-2xl bg-white/95 backdrop-blur-xl border border-[rgba(11,18,32,0.10)] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Border Glow on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1E40AF]/20 via-[#00B140]/10 to-[#1E40AF]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E40AF] via-[#00B140] to-[#1E40AF] rounded-t-2xl" />

      <div className="relative z-10">
        <h3 className="font-heading font-bold text-lg mb-6 text-[#0B1220]">Platform Metrics</h3>
        
        {/* KPI Cards */}
        <div className="space-y-4 mb-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                animate={shouldReduceMotion || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-[#1E40AF]/5 to-transparent border border-[#1E40AF]/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1E40AF]/10 text-[#1E40AF] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[rgba(11,18,32,0.5)] uppercase tracking-wider">{kpi.label}</div>
                    <div className="text-lg font-bold text-[#0B1220]">{kpi.value}</div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-[#00B140]">{kpi.trend}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Mini Sparkline Chart */}
        <div className="pt-4 border-t border-[rgba(11,18,32,0.10)]">
          <div className="text-xs text-[rgba(11,18,32,0.5)] uppercase tracking-wider mb-3">Growth Trend</div>
          <div className="h-16 relative">
            <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
              <defs>
                <linearGradient id="sparklineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#1E40AF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d={`M 0,${60 - (sparklineData[0] / 100) * 60} ${sparklineData.map((val, i) => `L ${(i * 200) / (sparklineData.length - 1)},${60 - (val / 100) * 60}`).join(" ")}`}
                fill="url(#sparklineGradient)"
                initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                animate={shouldReduceMotion || isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.path
                d={`M 0,${60 - (sparklineData[0] / 100) * 60} ${sparklineData.map((val, i) => `L ${(i * 200) / (sparklineData.length - 1)},${60 - (val / 100) * 60}`).join(" ")}`}
                stroke="#1E40AF"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                animate={shouldReduceMotion || isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CapabilityCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
      className="group relative p-6 rounded-xl border border-[rgba(234,242,255,0.14)] bg-[rgba(255,255,255,0.06)] backdrop-blur-sm hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(234,242,255,0.25)] transition-all duration-300"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1E40AF] via-[#00B140] to-[#1E40AF] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.div
        whileHover={shouldReduceMotion ? {} : { scale: 1.1, transition: { duration: 0.3 } }}
        className="w-12 h-12 rounded-lg bg-[#1E40AF]/20 text-[#1E40AF] flex items-center justify-center mb-4"
      >
        <Icon className="w-6 h-6" />
      </motion.div>
      <h3 className="font-heading font-semibold text-lg mb-2 text-[#EAF2FF] group-hover:text-white transition-colors">{title}</h3>
      <p className="text-sm text-[rgba(234,242,255,0.75)] leading-relaxed">{description}</p>
    </motion.div>
  );
}

function HowItWorksSteps() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Assess & Plan",
      description: "Evaluate your organization's needs and develop a tailored AI integration strategy.",
      icon: Target,
      color: "#1E40AF",
    },
    {
      number: "02",
      title: "Implement & Train",
      description: "Deploy AI tools and provide comprehensive training to your team.",
      icon: Zap,
      color: "#00B140",
    },
    {
      number: "03",
      title: "Optimize & Scale",
      description: "Continuously refine AI applications and scale successful implementations.",
      icon: TrendingUp,
      color: "#1E40AF",
    },
    {
      number: "04",
      title: "Collaborate & Grow",
      description: "Leverage cross-border networks and partnerships to expand impact.",
      icon: Network,
      color: "#2563EB",
    },
  ];

  return (
    <div ref={containerRef} className="relative">
      {/* Animated Connecting Line (Desktop Only) */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 z-0">
        <motion.div
          className="h-full bg-gradient-to-r from-[#1E40AF] via-[#00B140] to-[#1E40AF] opacity-20"
          initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
          animate={shouldReduceMotion || isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        />
        {/* Animated Progress Dots */}
        {steps.map((_, index) => (
          <motion.div
            key={`dot-${index}`}
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#00B140] shadow-lg"
            style={{
              left: `${(index * 100) / (steps.length - 1)}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            animate={shouldReduceMotion || isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl border border-[rgba(11,18,32,0.10)] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Background Glow on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${step.color}15, transparent 70%)`,
                }}
              />

              {/* Top Accent Line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ backgroundColor: step.color, transformOrigin: "left" }}
                initial={{ scaleX: 0 }}
                animate={shouldReduceMotion || isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.3, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Corner Accent */}
              <div
                className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top right, ${step.color}20, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Step Number Badge */}
                <motion.div
                  className="relative mb-6"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1, transition: { duration: 0.3 } }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                    }}
                  >
                    {step.number}
                  </div>
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                    style={{ backgroundColor: step.color }}
                  />
                </motion.div>

                {/* Icon Container */}
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                  style={{
                    backgroundColor: `${step.color}15`,
                    color: step.color,
                  }}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.15, rotate: 5, transition: { duration: 0.3 } }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>

                {/* Content */}
                <h3 className="font-heading font-bold text-xl mb-3 text-[#0B1220] group-hover:text-[#1E40AF] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-[rgba(11,18,32,0.68)] leading-relaxed">
                  {step.description}
                </p>

                {/* Subtle Arrow Indicator (on hover) */}
                <motion.div
                  className="mt-4 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: step.color }}
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function UseCaseCard({
  icon: Icon,
  title,
  description,
  color,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: "blue" | "green" | "red";
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const colorConfig = {
    blue: {
      bg: "bg-[#1E40AF]/20",
      text: "text-[#1E40AF]",
      border: "border-[#1E40AF]/30",
      gradient: "from-[#1E40AF]/10 to-transparent",
    },
    green: {
      bg: "bg-[#00B140]/20",
      text: "text-[#00B140]",
      border: "border-[#00B140]/30",
      gradient: "from-[#00B140]/10 to-transparent",
    },
    red: {
      bg: "bg-[#2563EB]/20",
      text: "text-[#2563EB]",
      border: "border-[#2563EB]/30",
      gradient: "from-[#2563EB]/10 to-transparent",
    },
  };

  const config = colorConfig[color];

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
      className="group relative bg-[rgba(255,255,255,0.06)] backdrop-blur-sm rounded-xl border border-[rgba(234,242,255,0.14)] p-6 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(234,242,255,0.25)] transition-all duration-300 overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${config.gradient} rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="relative z-10">
        <motion.div
          whileHover={shouldReduceMotion ? {} : { scale: 1.1, transition: { duration: 0.3 } }}
          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${config.bg} ${config.text}`}
        >
          <Icon className="w-6 h-6" />
        </motion.div>
        <h3 className="font-heading font-bold text-lg mb-2 text-[#EAF2FF] group-hover:text-white transition-colors">{title}</h3>
        <p className="text-sm text-[rgba(234,242,255,0.75)] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function PlatformFlowInteractive({ 
  shouldReduceMotion, 
  isInView 
}: { 
  shouldReduceMotion: boolean | null; 
  isInView: boolean;
}) {
  const [selectedRole, setSelectedRole] = useState<string>("consumers");

  const roles = [
    {
      id: "consumers",
      label: "Consumers",
      icon: Users,
      description: "Individuals and organizations accessing AI-powered services and tools through the platform.",
      responsibilities: [
        "Submit service requests and access AI tools tailored to sector needs",
        "Receive support from cross-border teams of UK and Pakistan professionals",
        "Track service delivery and provide feedback on platform effectiveness",
        "Access sector-specific resources and knowledge bases"
      ],
      outcome: "Improved service delivery and faster resolution of sector-specific challenges through coordinated UK-Pakistan expertise."
    },
    {
      id: "support",
      label: "Support Providers",
      icon: Shield,
      description: "Professional service teams delivering technical assistance and operational support across sectors.",
      responsibilities: [
        "Respond to consumer requests with technical expertise and sector knowledge",
        "Coordinate with managers to ensure service quality and compliance standards",
        "Document interactions and outcomes for platform learning and improvement",
        "Facilitate knowledge transfer between UK and Pakistan service teams"
      ],
      outcome: "Standardized service delivery processes that leverage combined UK-Pakistan capabilities for consistent outcomes."
    },
    {
      id: "managers",
      label: "Managers",
      icon: Target,
      description: "Oversight and coordination layer ensuring service quality, compliance, and strategic alignment.",
      responsibilities: [
        "Monitor service delivery metrics and ensure governance standards are met",
        "Allocate resources and coordinate between support providers and sector specialists",
        "Review and approve sector-specific solutions before deployment",
        "Maintain compliance with UK and Pakistan regulatory requirements"
      ],
      outcome: "Effective governance framework ensuring ethical, compliant, and measurable service delivery across all sectors."
    },
    {
      id: "specialists",
      label: "Sector Specialists",
      icon: Brain,
      description: "Domain experts providing deep sector knowledge and developing specialized solutions.",
      responsibilities: [
        "Develop sector-specific AI solutions and service frameworks",
        "Provide expert consultation on complex cross-border technical challenges",
        "Contribute to platform knowledge base with UK-Pakistan best practices",
        "Collaborate with managers to ensure solutions meet governance and quality standards"
      ],
      outcome: "Specialized solutions that address sector-specific needs while maintaining cross-border collaboration standards."
    }
  ];

  const selectedRoleData = roles.find(r => r.id === selectedRole) || roles[0];

  return (
    <div className="relative bg-[rgba(255,255,255,0.06)] backdrop-blur-sm rounded-2xl border border-[rgba(234,242,255,0.14)] p-8 min-h-[500px]">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Role List */}
        <div className="space-y-4">
          {roles.map((role, index) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;
            return (
              <motion.button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                onMouseEnter={() => setSelectedRole(role.id)}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                animate={shouldReduceMotion || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  isSelected
                    ? "bg-[rgba(255,255,255,0.12)] border-[#1E40AF]/40 shadow-lg shadow-[#1E40AF]/10"
                    : "bg-[rgba(255,255,255,0.04)] border-[rgba(234,242,255,0.14)] hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(234,242,255,0.25)]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] text-white scale-110"
                      : "bg-[#1E40AF]/20 text-[#1E40AF]"
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className={`text-lg font-semibold transition-colors duration-300 ${
                    isSelected ? "text-[#EAF2FF]" : "text-[rgba(234,242,255,0.8)]"
                  }`}>
                    {role.label}
                  </div>
                </div>
                {/* Accent line on selected */}
                {isSelected && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1E40AF] via-[#00B140] to-[#1E40AF] rounded-l-xl"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Right: Role Content */}
        <motion.div
          key={selectedRole}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-sm rounded-xl border border-[rgba(234,242,255,0.14)] p-6"
        >
          {/* Top accent gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E40AF] via-[#00B140] to-[#1E40AF] rounded-t-xl" />
          
          <div className="space-y-6">
            {/* Role Title */}
            <div>
              <h4 className="font-heading font-bold text-2xl mb-2 text-[#EAF2FF]">
                {selectedRoleData.label}
              </h4>
              <p className="text-[rgba(234,242,255,0.85)] leading-relaxed">
                {selectedRoleData.description}
              </p>
            </div>

            {/* Responsibilities */}
            <div>
              <h5 className="font-semibold text-sm text-[rgba(234,242,255,0.6)] uppercase tracking-wider mb-3">
                Platform Responsibilities
              </h5>
              <ul className="space-y-3">
                {selectedRoleData.responsibilities.map((responsibility, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00B140] mt-2 flex-shrink-0" />
                    <span className="text-[rgba(234,242,255,0.85)] leading-relaxed text-sm">
                      {responsibility}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div className="pt-4 border-t border-[rgba(234,242,255,0.1)]">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-[#1E40AF]/10 via-[#00B140]/5 to-transparent border border-[rgba(234,242,255,0.1)]">
                <div className="w-1 h-full bg-gradient-to-b from-[#1E40AF] to-[#00B140] rounded-full flex-shrink-0" />
                <div>
                  <div className="text-xs text-[rgba(234,242,255,0.5)] uppercase tracking-wider mb-2">
                    Ecosystem Impact
                  </div>
                  <p className="text-[rgba(234,242,255,0.9)] leading-relaxed text-sm font-medium">
                    {selectedRoleData.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function PeopleAIInsights() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Mock data
  const sectors = [
    { name: "Healthcare", adoption: 78, responseTime: 65, costEfficiency: 82, humanSupport: 91 },
    { name: "Education", adoption: 72, responseTime: 58, costEfficiency: 75, humanSupport: 88 },
    { name: "Finance", adoption: 85, responseTime: 72, costEfficiency: 88, humanSupport: 79 },
    { name: "Public Services", adoption: 68, responseTime: 61, costEfficiency: 71, humanSupport: 85 },
    { name: "Local Services", adoption: 74, responseTime: 67, costEfficiency: 76, humanSupport: 83 },
    { name: "Workforce", adoption: 81, responseTime: 69, costEfficiency: 84, humanSupport: 87 },
  ];

  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);
  const [counters, setCounters] = useState({
    totalSectors: 0,
    avgAdoption: 0,
    avgEfficiency: 0,
  });

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      setCounters({ totalSectors: 6, avgAdoption: 76, avgEfficiency: 79 });
      return;
    }

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        totalSectors: Math.floor(6 * progress),
        avgAdoption: Math.floor(76 * progress),
        avgEfficiency: Math.floor(79 * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, shouldReduceMotion]);

  const maxValue = 100;
  const chartWidth = 100;
  const chartHeight = 60;

  return (
    <div ref={containerRef} className="mt-12">
      {/* Animated Counters */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { label: "Sectors Covered", value: counters.totalSectors, suffix: "", icon: Network },
          { label: "Avg. Adoption", value: counters.avgAdoption, suffix: "%", icon: TrendingUp },
          { label: "Avg. Efficiency", value: counters.avgEfficiency, suffix: "%", icon: Zap },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[rgba(255,255,255,0.06)] backdrop-blur-sm rounded-xl border border-[rgba(234,242,255,0.14)] p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#1E40AF]/20 text-[#1E40AF] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[rgba(234,242,255,0.5)] uppercase tracking-wider">{stat.label}</div>
                  <div className="text-2xl font-bold text-[#EAF2FF]">
                    {stat.value}{stat.suffix}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Platform Flow - Interactive */}
      <div className="mb-12">
        <h3 className="font-heading font-bold text-xl mb-6 text-[#EAF2FF] text-center">Platform Flow</h3>
        <PlatformFlowInteractive shouldReduceMotion={shouldReduceMotion} isInView={isInView} />
      </div>

      {/* Sector Coverage Chart */}
      <div>
        <h3 className="font-heading font-bold text-xl mb-6 text-[#EAF2FF] text-center">Sector Performance</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[rgba(255,255,255,0.06)] backdrop-blur-sm rounded-xl border border-[rgba(234,242,255,0.14)] p-6 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(234,242,255,0.25)] transition-all duration-300 group"
              onMouseEnter={() => setHoveredMetric(sector.name)}
              onMouseLeave={() => setHoveredMetric(null)}
            >
              <h4 className="font-heading font-semibold text-lg mb-4 text-[#EAF2FF]">{sector.name}</h4>
              
              {/* Segmented Bar Chart */}
              <div className="space-y-3">
                {[
                  { label: "Adoption", value: sector.adoption, color: "#1E40AF" },
                  { label: "Response Time", value: sector.responseTime, color: "#00B140" },
                  { label: "Cost Efficiency", value: sector.costEfficiency, color: "#1E40AF" },
                  { label: "Human Support", value: sector.humanSupport, color: "#2563EB" },
                ].map((metric, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-[rgba(234,242,255,0.6)]">{metric.label}</span>
                      <span className="text-xs font-semibold text-[#EAF2FF]">{metric.value}%</span>
                    </div>
                    <div className="h-2 bg-[rgba(234,242,255,0.1)] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: metric.color }}
                        initial={shouldReduceMotion ? { width: "100%" } : { width: 0 }}
                        animate={shouldReduceMotion || isInView ? { width: `${metric.value}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tooltip */}
              {hoveredMetric === sector.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#0B1220] border border-[rgba(234,242,255,0.2)] rounded-lg p-3 shadow-xl z-20 min-w-[200px]"
                >
                  <div className="text-sm font-semibold text-[#EAF2FF] mb-2">{sector.name} Metrics</div>
                  <div className="space-y-1 text-xs text-[rgba(234,242,255,0.75)]">
                    <div>Adoption: {sector.adoption}%</div>
                    <div>Response Time: {sector.responseTime}% improvement</div>
                    <div>Cost Efficiency: {sector.costEfficiency}%</div>
                    <div>Human Support: {sector.humanSupport}% retention</div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
