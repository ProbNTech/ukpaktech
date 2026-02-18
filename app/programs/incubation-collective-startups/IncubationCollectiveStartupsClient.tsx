"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Rocket,
  Users,
  Network,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  Building2,
  Target,
  Zap,
  Brain,
  Database,
  Shield,
  CreditCard,
  Heart,
  Cloud,
  GraduationCap,
  ArrowRight,
  Globe,
  Briefcase,
  FileText,
  HeartHandshake
} from "lucide-react";

export default function IncubationCollectiveStartupsClient() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Incubation and Collective Startups"
        subtitle="Nurturing the next generation of tech startups and innovators through collaborative models and comprehensive support."
      />

      {/* Section 1: Intro / Purpose */}
      <Section>
        <AnimatedSection>
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">
            <div>
              <SectionHeader
                title="Nurturing Innovation and Collaboration"
                subtitle="UPTECH's Incubation Center provides a comprehensive ecosystem for startups to grow, scale, and succeed through collective models and collaborative structures."
              />
              <div className="space-y-5 text-[#3D4152] leading-relaxed text-base">
                <p>
                  Our Incubation Center offers mentorship, resources, funding connections, and a collaborative environment where innovation thrives. Through our collective startup model, entrepreneurs can leverage shared infrastructure, expertise, and networks.
                </p>
                <p>
                  We accelerate the journey from idea to market-ready product, connecting UK and Pakistani entrepreneurs with global opportunities.
                </p>
              </div>
            </div>
            <div className="relative lg:sticky lg:top-24">
              <ProgramSnapshotCard />
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Section 2: Focus Areas */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            title="What We Incubate"
            subtitle="Specialized support for high-impact tech sectors driving innovation across the UK and Pakistan."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <FocusAreaCard icon={Brain} title="AI & Data Products" description="Building intelligent solutions that transform industries through data-driven innovation." color="blue" index={0} />
            <FocusAreaCard icon={CreditCard} title="FinTech & Digital Payments" description="Revolutionizing financial services with secure, scalable payment technologies." color="green" index={1} />
            <FocusAreaCard icon={Heart} title="HealthTech & MedTech" description="Advancing healthcare delivery through cutting-edge medical technologies and digital health solutions." color="red" index={2} />
            <FocusAreaCard icon={Cloud} title="Cloud, SaaS & Enterprise Software" description="Delivering scalable software solutions that power modern businesses and enterprises." color="blue" index={3} />
            <FocusAreaCard icon={Shield} title="Cybersecurity & Digital Infrastructure" description="Protecting digital assets and building resilient infrastructure for the modern economy." color="green" index={4} />
            <FocusAreaCard icon={GraduationCap} title="EdTech & Future Skills" description="Transforming education and workforce development through innovative learning platforms." color="red" index={5} />
          </div>
        </AnimatedSection>
      </Section>

      {/* Section 3: Incubation Model */}
      <Section>
        <AnimatedSection>
          <SectionHeader
            title="Our Incubation Model"
            subtitle="A structured pathway from concept to market-ready venture with comprehensive support at every stage."
          />
          <div className="mt-12">
            <IncubationTimeline />
          </div>
        </AnimatedSection>
      </Section>

      {/* Section 4: Collective Startups */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="The Collective Startup Approach"
                subtitle="A revolutionary model that transforms how startups collaborate, share resources, and scale together."
              />
              <div className="space-y-4 text-[#3D4152] leading-relaxed mt-6">
                <p>
                  Our collective startup model emphasizes collaboration over competition, enabling entrepreneurs to pool resources, share infrastructure, and reduce individual risk while amplifying collective success.
                </p>
                <p>
                  By combining expertise, networks, and market access, collective startups can tackle larger opportunities, enter new markets faster, and build sustainable ventures that benefit from sector-driven solutions and cross-border partnerships.
                </p>
              </div>
            </div>
            <div className="relative">
              <CollectiveStartupVisual />
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Section 5: Who It's For */}
      <Section>
        <AnimatedSection>
          
            <SectionHeader
              title="Who Should Join"
              subtitle="Our programs are designed for founders, startups, and partners at different stages of growth."
             
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <AudienceCard
                icon={Lightbulb}
                title="Early-Stage Founders"
                description="For entrepreneurs with innovative ideas seeking validation, mentorship, and initial support to transform concepts into viable businesses."
                gains={[
                  "Idea validation and market research support",
                  "Access to mentorship and advisory networks",
                  "Initial infrastructure and workspace"
                ]}
                color="blue"
                index={0}
              />
              <AudienceCard
                icon={TrendingUp}
                title="Growth-Stage Startups"
                description="For established startups looking to scale operations, expand market reach, and access advanced resources and partnerships."
                gains={[
                  "Scaling strategies and growth frameworks",
                  "Market expansion and partnership opportunities",
                  "Advanced funding and investor connections"
                ]}
                color="green"
                index={1}
              />
              <AudienceCard
                icon={Building2}
                title="Corporate & Institutional Partners"
                description="For organizations seeking to collaborate with innovative startups, access new technologies, and drive digital transformation."
                gains={[
                  "Access to curated startup portfolios",
                  "Innovation partnerships and co-development",
                  "Cross-border market entry support"
                ]}
                color="red"
                index={2}
              />
            </div>
        </AnimatedSection>
      </Section>

      {/* Section 6: Support & Resources */}
      <Section  className="relative overflow-hidden">
        <AnimatedSection>
          
            <SectionHeader
              title="What Participants Receive"
              subtitle="Comprehensive resources and support designed to accelerate your startup journey."
             
            />
            <SupportResourcesList />
        </AnimatedSection>
      </Section>

      {/* Section 7: Outcomes & Impact */}
      <Section>
        <AnimatedSection>
          
            <SectionHeader
              title="Outcomes That Matter"
              subtitle="Measurable impact that demonstrates the value of our incubation and collective startup programs."
             
            />
            <OutcomesStats />
            <p className="text-center text-sm text-[rgba(11,18,32,0.5)] mt-6">
              Metrics shown are indicative and updated as programs scale.
            </p>
        </AnimatedSection>
      </Section>

      {/* Section 8: Final CTA */}
      <Section  className="relative overflow-hidden">
        {/* Enhanced background glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#2D5BFF] rounded-full opacity-[0.15] blur-[200px]" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-[#2563EB] rounded-full opacity-[0.1] blur-[180px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-[#00B140] rounded-full opacity-[0.08] blur-[150px]" />
        </div>
        <AnimatedSection>
          
          <SectionHeader
            title="Build, Scale, and Expand With UPTECH"
            subtitle="Join our incubation program and become part of a collaborative ecosystem driving innovation across the UK and Pakistan."
           
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button href="/membership" variant="primary" size="lg" showArrow>
              Apply for Incubation
            </Button>
            <Button href="/membership" variant="glass" size="lg" showArrow>
              Partner With Us
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}


function ProgramSnapshotCard() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
      className="relative rounded-2xl bg-white border border-[rgba(11,18,32,0.10)] p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D5BFF]/5 via-transparent to-[#00B140]/5 opacity-50" />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2D5BFF] via-[#00B140] to-[#2563EB] rounded-t-2xl" />
      
      <div className="relative z-10">
        <h3 className="font-heading font-bold text-xl mb-6 text-[#0B1220]">Program Snapshot</h3>
        <div className="space-y-4">
          {[
            "Mentorship & Operators Network",
            "Shared Infrastructure & Tooling",
            "Funding & Investor Connections",
            "UK–Pakistan Market Access"
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-3 group"
            >
              <div className="mt-0.5 flex-shrink-0">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <CheckCircle2 className="w-5 h-5 text-[#2D5BFF]" />
                </motion.div>
              </div>
              <span className="text-sm text-[rgba(11,18,32,0.68)] leading-relaxed group-hover:text-[#0B1220] transition-colors">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function FocusAreaCard({
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
      bg: "bg-[#2D5BFF]/20", 
      text: "text-[#2D5BFF]", 
      border: "border-[#2D5BFF]/30",
      gradient: "from-[#2D5BFF]/20 to-[#2D5BFF]/5",
      glow: "group-hover:shadow-[0_0_20px_rgba(45,91,255,0.3)]"
    },
    green: { 
      bg: "bg-[#00B140]/20", 
      text: "text-[#00B140]", 
      border: "border-[#00B140]/30",
      gradient: "from-[#00B140]/20 to-[#00B140]/5",
      glow: "group-hover:shadow-[0_0_20px_rgba(0,177,64,0.3)]"
    },
    red: { 
      bg: "bg-[#2563EB]/20", 
      text: "text-[#2563EB]", 
      border: "border-[#2563EB]/30",
      gradient: "from-[#2563EB]/20 to-[#2563EB]/5",
      glow: "group-hover:shadow-[0_0_20px_rgba(225,29,72,0.3)]"
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
      className={`group relative p-6 rounded-xl border ${config.border} bg-gradient-to-br ${config.gradient} backdrop-blur-sm hover:border-opacity-60 transition-all duration-300 ${config.glow}`}
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${config.gradient} rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <motion.div
        whileHover={shouldReduceMotion ? {} : { scale: 1.1, transition: { duration: 0.3 } }}
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${config.bg} ${config.text}`}
      >
        <Icon className="w-6 h-6" />
      </motion.div>
      <h3 className="font-heading font-semibold text-lg mb-2 text-[#EAF2FF] group-hover:text-white transition-colors">{title}</h3>
      <p className="text-sm text-[rgba(234,242,255,0.75)] leading-relaxed">{description}</p>
    </motion.div>
  );
}

function IncubationTimeline() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const steps = [
    {
      title: "Ideation & Validation",
      outcomes: [
        "Market research and opportunity assessment",
        "Concept validation and feasibility analysis"
      ],
      icon: Lightbulb,
      color: "blue",
    },
    {
      title: "Product & Market Fit",
      outcomes: [
        "MVP development and testing support",
        "Customer discovery and market positioning"
      ],
      icon: Target,
      color: "green",
    },
    {
      title: "Compliance & Readiness",
      outcomes: [
        "Legal structure and regulatory guidance",
        "Intellectual property and compliance frameworks"
      ],
      icon: Shield,
      color: "red",
    },
    {
      title: "Market Access & Partnerships",
      outcomes: [
        "UK and Pakistan market entry strategies",
        "Strategic partnership and distribution channels"
      ],
      icon: Network,
      color: "blue",
    },
    {
      title: "Investment & Scale",
      outcomes: [
        "Funding rounds and investor introductions",
        "Scaling strategies and operational excellence"
      ],
      icon: TrendingUp,
      color: "green",
    },
  ];

  return (
    <div ref={containerRef} className="relative space-y-8">
      {/* Vertical connector line with animation */}
      <motion.div
        className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-[#2D5BFF]/30 via-[#00B140]/30 via-[#2563EB]/30 via-[#2D5BFF]/30 to-[#00B140]/30"
        initial={shouldReduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
        animate={shouldReduceMotion || isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "top" }}
      />
      
      {steps.map((step, index) => {
        const Icon = step.icon;
        const colorConfig = {
          blue: { 
            gradient: "from-[#2D5BFF] to-[#1E40AF]", 
            bg: "bg-[#2D5BFF]", 
            border: "border-[#2D5BFF]/30",
            accent: "text-[#2D5BFF]"
          },
          green: { 
            gradient: "from-[#00B140] to-[#008030]", 
            bg: "bg-[#00B140]", 
            border: "border-[#00B140]/30",
            accent: "text-[#00B140]"
          },
          red: { 
            gradient: "from-[#2563EB] to-[#BE123C]", 
            bg: "bg-[#2563EB]", 
            border: "border-[#2563EB]/30",
            accent: "text-[#2563EB]"
          },
        };
        const config = colorConfig[step.color as keyof typeof colorConfig];

        return (
          <motion.div
            key={index}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
            animate={shouldReduceMotion || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex gap-6 items-start"
          >
            <div className="relative z-10 flex-shrink-0">
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.1, transition: { duration: 0.3 } }}
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${config.gradient} flex items-center justify-center border-4 border-white shadow-lg`}
              >
                <Icon className="w-7 h-7 text-white" />
              </motion.div>
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`} />
            </div>
            <div className="flex-1 pt-2">
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -2, transition: { duration: 0.3 } }}
                className={`bg-white rounded-xl border-l-4 ${config.border} border border-[rgba(11,18,32,0.10)] p-6 shadow-sm hover:shadow-md transition-all duration-300 group`}
              >
                <h3 className="font-heading font-bold text-xl mb-4 text-[#0B1220]">{step.title}</h3>
                <ul className="space-y-2.5">
                  {step.outcomes.map((outcome, idx) => (
                    <motion.li
                      key={idx}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                      animate={shouldReduceMotion || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: index * 0.15 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-start gap-2.5 text-[rgba(11,18,32,0.68)]"
                    >
                      <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${config.bg} flex-shrink-0`} />
                      <span className="leading-relaxed">{outcome}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function CollectiveStartupVisual() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <div className="relative rounded-2xl bg-[rgba(255,255,255,0.06)] border border-[rgba(234,242,255,0.14)] p-8 backdrop-blur-sm overflow-hidden min-h-[450px]">
      {/* Background gradient glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#2D5BFF]/10 via-[#00B140]/5 to-[#2563EB]/10 opacity-50"
        animate={shouldReduceMotion ? {} : {
          opacity: [0.5, 0.6, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-2xl opacity-30">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2D5BFF] via-[#00B140] to-[#2563EB] blur-sm" />
      </div>
      <div className="absolute inset-[1px] rounded-2xl bg-[#050B14]" />
      
      <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D5BFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00B140" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="nodeGlow">
            <stop offset="0%" stopColor="#2D5BFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#2D5BFF" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[
          { x1: 100, y1: 100, x2: 200, y2: 150 },
          { x1: 300, y1: 100, x2: 200, y2: 150 },
          { x1: 200, y1: 150, x2: 200, y2: 250 },
          { x1: 100, y1: 300, x2: 200, y2: 250 },
          { x1: 300, y1: 300, x2: 200, y2: 250 },
        ].map((line, index) => (
          <motion.line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="url(#networkGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={shouldReduceMotion ? { opacity: 0.4 } : { opacity: 0, pathLength: 0 }}
            animate={shouldReduceMotion ? { opacity: 0.4 } : { opacity: 0.4, pathLength: 1 }}
            transition={{ duration: 1, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
        {[
          { x: 100, y: 100, color: "#2D5BFF" },
          { x: 300, y: 100, color: "#00B140" },
          { x: 200, y: 150, color: "#2D5BFF" },
          { x: 100, y: 300, color: "#2563EB" },
          { x: 300, y: 300, color: "#00B140" },
          { x: 200, y: 250, color: "#2D5BFF" },
        ].map((node, index) => (
          <g key={index}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="10"
              fill={node.color}
              initial={shouldReduceMotion ? { opacity: 0.9 } : { opacity: 0, scale: 0 }}
              animate={shouldReduceMotion ? { opacity: 0.9 } : { opacity: 0.9, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="16"
              fill={node.color}
              fillOpacity="0.2"
              animate={shouldReduceMotion ? {} : {
                r: [16, 20, 16],
                fillOpacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="24"
              fill={node.color}
              fillOpacity="0.1"
            />
          </g>
        ))}
      </svg>
      <div className="relative z-20 h-full flex items-center justify-center">
        <motion.div
          className="text-center"
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Network className="w-20 h-20 text-[#2D5BFF] opacity-60 mx-auto mb-3" />
          <p className="text-xs text-[rgba(234,242,255,0.5)] uppercase tracking-wider">Collective Network</p>
        </motion.div>
      </div>
    </div>
  );
}

function AudienceCard({
  icon: Icon,
  title,
  description,
  gains,
  color,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gains: string[];
  color: "blue" | "green" | "red";
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const colorConfig = {
    blue: { 
      bg: "bg-[#2D5BFF]/20", 
      text: "text-[#2D5BFF]", 
      border: "border-[#2D5BFF]/30",
      gradient: "from-[#2D5BFF]/10 to-transparent",
      accent: "text-[#2D5BFF]"
    },
    green: { 
      bg: "bg-[#00B140]/20", 
      text: "text-[#00B140]", 
      border: "border-[#00B140]/30",
      gradient: "from-[#00B140]/10 to-transparent",
      accent: "text-[#00B140]"
    },
    red: { 
      bg: "bg-[#2563EB]/20", 
      text: "text-[#2563EB]", 
      border: "border-[#2563EB]/30",
      gradient: "from-[#2563EB]/10 to-transparent",
      accent: "text-[#2563EB]"
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
      className="group relative bg-white rounded-xl border border-[rgba(11,18,32,0.10)] p-6 shadow-sm hover:shadow-lg hover:border-opacity-40 transition-all duration-300 overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${config.gradient} rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        <motion.div
          whileHover={shouldReduceMotion ? {} : { scale: 1.1, transition: { duration: 0.3 } }}
          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${config.bg} ${config.text}`}
        >
          <Icon className="w-6 h-6" />
        </motion.div>
        <h3 className="font-heading font-bold text-lg mb-2 text-[#0B1220]">{title}</h3>
        <p className="text-sm text-[rgba(11,18,32,0.68)] mb-5 leading-relaxed">{description}</p>
        <div className="space-y-2.5 mb-5">
          <div className="text-xs font-semibold text-[rgba(11,18,32,0.5)] uppercase tracking-wider mb-2">What they gain</div>
          {gains.map((gain, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-[rgba(11,18,32,0.68)]">
              <CheckCircle2 className={`w-4 h-4 ${config.accent} mt-0.5 flex-shrink-0`} />
              <span className="leading-relaxed">{gain}</span>
            </div>
          ))}
        </div>
        <a href="#contact" className={`text-sm font-medium ${config.accent} hover:underline inline-flex items-center gap-1.5 group-hover:gap-2 transition-all`}>
          Learn more <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

function SupportResourcesList() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  
  const resources = [
    { icon: Users, label: "Mentorship & advisory", badge: "Cross-border" },
    { icon: FileText, label: "Legal & compliance guidance", badge: "UK" },
    { icon: Globe, label: "UK market entry support", badge: "UK" },
    { icon: Briefcase, label: "Investor & VC access", badge: "Cross-border" },
    { icon: Zap, label: "Product & technical advisory", badge: "Cross-border" },
    { icon: HeartHandshake, label: "Policy and ecosystem connections", badge: "Pakistan" },
  ];

  return (
    <div ref={containerRef} className="grid md:grid-cols-2 gap-4 mt-12">
      {resources.map((resource, index) => {
        const Icon = resource.icon;
        const badgeColors = {
          "UK": "bg-[#2D5BFF]/15 text-[#2D5BFF] border-[#2D5BFF]/30",
          "Pakistan": "bg-[#00B140]/15 text-[#00B140] border-[#00B140]/30",
          "Cross-border": "bg-[#2563EB]/15 text-[#2563EB] border-[#2563EB]/30",
        };

        return (
          <motion.div
            key={index}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
            className="group flex items-start gap-4 p-5 bg-[rgba(255,255,255,0.06)] backdrop-blur-sm rounded-xl border border-[rgba(234,242,255,0.14)] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(234,242,255,0.25)] transition-all duration-300"
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.1, transition: { duration: 0.3 } }}
              className="w-12 h-12 rounded-lg bg-[#2D5BFF]/20 text-[#2D5BFF] flex items-center justify-center flex-shrink-0"
            >
              <Icon className="w-5 h-5" />
            </motion.div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-[#EAF2FF]">{resource.label}</span>
                <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${badgeColors[resource.badge as keyof typeof badgeColors]}`}>
                  {resource.badge}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function OutcomesStats() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  
  const stats = [
    { value: "50+", label: "startups supported", color: "blue" },
    { value: "200+", label: "partnerships enabled", color: "green" },
    { value: "15+", label: "markets accessed", color: "red" },
    { value: "£5M+", label: "funding facilitated", color: "blue" },
  ];

  const colorConfig = {
    blue: { 
      gradient: "from-[#2D5BFF] to-[#1E40AF]", 
      text: "text-[#2D5BFF]",
      bg: "bg-[#2D5BFF]/10",
      border: "border-[#2D5BFF]/20"
    },
    green: { 
      gradient: "from-[#00B140] to-[#008030]", 
      text: "text-[#00B140]",
      bg: "bg-[#00B140]/10",
      border: "border-[#00B140]/20"
    },
    red: { 
      gradient: "from-[#2563EB] to-[#BE123C]", 
      text: "text-[#2563EB]",
      bg: "bg-[#2563EB]/10",
      border: "border-[#2563EB]/20"
    },
  };

  return (
    <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {stats.map((stat, index) => {
        const config = colorConfig[stat.color as keyof typeof colorConfig];
        return (
          <motion.div
            key={index}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-xl border border-[rgba(11,18,32,0.10)] p-6 text-center hover:shadow-lg hover:border-opacity-40 transition-all duration-300 overflow-hidden"
          >
            {/* Subtle gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${config.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            {/* Top accent line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${config.gradient} rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            <div className="relative z-10">
              <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-br ${config.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <p className="text-sm text-[rgba(11,18,32,0.68)] font-medium">{stat.label}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
