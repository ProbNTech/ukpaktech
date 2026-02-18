"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { 
  GraduationCap,
  Award,
  BookOpen,
  Users2,
  Briefcase,
  Lightbulb,
  CheckCircle2,
  Target,
  TrendingUp,
  Brain,
  Globe,
  Code,
  Database,
  Shield,
  Clock,
  BarChart3,
  Linkedin,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Network,
  Zap,
  Rocket
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function SkillDevelopmentCenterPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Skill Development Center"
        subtitle="Comprehensive training programs designed to build world-class tech capabilities and accelerate your career."
      />

      {/* Trust Strip */}
      <Section variant="alt" className="py-12">
        <AnimatedSection>
          <TrustStrip shouldReduceMotion={shouldReduceMotion} />
        </AnimatedSection>
      </Section>

      {/* Intro Section */}
      <Section>
        <AnimatedSection>
          <SectionHeader
            title="Building World-Class Tech Capabilities"
            subtitle="UPTECH's Skill Development Center provides comprehensive training programs designed to build world-class tech capabilities across the UK and Pakistan."
          />
          <div className="space-y-4 text-[#3D4152] leading-relaxed">
            <p>
              Our Skill Development Center offers industry-recognized certifications, specialized training, and personalized mentorship to empower individuals and organizations with cutting-edge technology skills.
            </p>
            <p>
              Through strategic partnerships with leading tech companies and educational institutions, we deliver programs that bridge the skills gap and create pathways for career advancement.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Programs Grid */}
      <Section  id="programs" className="relative overflow-hidden">
        <ProgramsBackground shouldReduceMotion={shouldReduceMotion} />
        <AnimatedSection>
          
            <SectionHeader
              title="Our Training Programs"
              subtitle="Comprehensive skill development initiatives designed to accelerate your tech career."
             
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <DetailedProgramCard
                icon={Award}
                title="AI & Tech Certifications"
                subtitle="Industry-recognized vendor-aligned certification tracks"
                bullets={[
                  "Vendor aligned tracks",
                  "Hands on labs",
                  "Final assessment and badge"
                ]}
                color="blue"
                shouldReduceMotion={shouldReduceMotion}
              />
              <DetailedProgramCard
                icon={BookOpen}
                title="Sector Specific Skill Training"
                subtitle="Specialized programs for key industries"
                bullets={[
                  "Healthcare, fintech, logistics, public sector, manufacturing",
                  "Use cases and toolkits",
                  "Mini capstone per sector"
                ]}
                color="green"
                shouldReduceMotion={shouldReduceMotion}
              />
              <DetailedProgramCard
                icon={Users2}
                title="Student Tutoring Services"
                subtitle="Personalized learning support for students"
                bullets={[
                  "Fundamentals to advanced",
                  "Code reviews and debugging help",
                  "Weekly learning plans"
                ]}
                color="red"
                shouldReduceMotion={shouldReduceMotion}
              />
              <DetailedProgramCard
                icon={GraduationCap}
                title="Competitive Exam Support"
                subtitle="Comprehensive preparation for exams and interviews"
                bullets={[
                  "GRE, IELTS, tech interviews, CS fundamentals",
                  "Mock tests and feedback",
                  "Resource library"
                ]}
                color="blue"
                shouldReduceMotion={shouldReduceMotion}
              />
              <DetailedProgramCard
                icon={Briefcase}
                title="Internship Programs"
                subtitle="Real-world experience with leading companies"
                bullets={[
                  "Partner placements",
                  "Portfolio projects",
                  "Reference ready mentorship"
                ]}
                color="green"
                shouldReduceMotion={shouldReduceMotion}
              />
            </div>
        </AnimatedSection>
      </Section>

      {/* Learning Path Timeline */}
      <Section id="pathway">
        <AnimatedSection>
          
            <SectionHeader
              title="Your Learning Pathway"
              subtitle="A structured journey from assessment to career launch."
             
            />
            <LearningPathTimeline shouldReduceMotion={shouldReduceMotion} />
        </AnimatedSection>
      </Section>

      {/* Flagship Tracks */}
      <Section  id="tracks" className="relative overflow-hidden">
        <ProgramsBackground shouldReduceMotion={shouldReduceMotion} />
        <AnimatedSection>
          
            <SectionHeader
              title="Flagship Training Tracks"
              subtitle="Intensive programs designed to build expertise in high-demand tech domains."
             
            />
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <TrackCard
                icon={Brain}
                title="AI Engineering Track"
                duration="12 weeks"
                level="Intermediate to Advanced"
                commitment="15-20 hours/week"
                build="Build production-ready AI models and deploy ML pipelines"
                color="blue"
                shouldReduceMotion={shouldReduceMotion}
              />
              <TrackCard
                icon={Database}
                title="Data and Automation Track"
                duration="10 weeks"
                level="Beginner to Intermediate"
                commitment="12-15 hours/week"
                build="Build data pipelines, automation scripts, and analytics dashboards"
                color="green"
                shouldReduceMotion={shouldReduceMotion}
              />
              <TrackCard
                icon={Shield}
                title="Cloud and Cyber Foundations"
                duration="8 weeks"
                level="Beginner"
                commitment="10-12 hours/week"
                build="Build secure cloud infrastructure and implement security best practices"
                color="red"
                shouldReduceMotion={shouldReduceMotion}
              />
            </div>
        </AnimatedSection>
      </Section>

      {/* Outcomes and Metrics */}
      <Section>
        <AnimatedSection>
          
            <SectionHeader
              title="Program Outcomes"
              subtitle="Measurable results that accelerate your career growth."
             
            />
            <OutcomesMetrics shouldReduceMotion={shouldReduceMotion} />
        </AnimatedSection>
      </Section>

      {/* Mentors and Partners */}
      <Section  className="relative overflow-hidden">
        <ProgramsBackground shouldReduceMotion={shouldReduceMotion} />
        <AnimatedSection>
          
            <SectionHeader
              title="Our Mentors and Partners"
              subtitle="Learn from industry leaders and collaborate with leading organizations."
             
            />
            <MentorsPartners shouldReduceMotion={shouldReduceMotion} />
        </AnimatedSection>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <AnimatedSection>
          
            <SectionHeader
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about our programs."
             
            />
            <FAQSection shouldReduceMotion={shouldReduceMotion} />
        </AnimatedSection>
      </Section>

      {/* Final CTA */}
      <Section  className="relative overflow-hidden">
        <CTABackground shouldReduceMotion={shouldReduceMotion} />
        <AnimatedSection>
          
            <SectionHeader
              title="Ready to Transform Your Career?"
              subtitle="Join UPTECH's Skill Development Center and unlock your potential in the tech industry. Start your journey today with world-class training and mentorship."
             
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button href="/membership" variant="primary" size="lg" showArrow>
                Apply for Training
              </Button>
              <Button href="/membership" variant="glass" size="lg" showArrow>
                Partner with UPTECH
              </Button>
            </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}


type TrustStripItemType = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: "blue" | "green" | "red";
};

function TrustStripItem({
  item,
  index,
  shouldReduceMotion,
}: {
  item: TrustStripItemType;
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = item.icon;
  const colorConfig = {
    blue: "text-[#2D5BFF] bg-[#2D5BFF]/10",
    green: "text-[#22C55E] bg-[#22C55E]/10",
    red: "text-[#2563EB] bg-[#2563EB]/10",
  };

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-gray-200"
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${colorConfig[item.color]}`}>
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-sm font-medium text-[#475569]">{item.label}</span>
    </motion.div>
  );
}

function TrustStrip({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const items: TrustStripItemType[] = [
    { icon: Globe, label: "UK aligned curriculum", color: "blue" },
    { icon: Users2, label: "Industry mentors", color: "green" },
    { icon: Code, label: "Practical projects", color: "red" },
    { icon: Briefcase, label: "Career support", color: "blue" },
    { icon: Network, label: "Cross border collaboration", color: "green" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {items.map((item, index) => (
        <TrustStripItem key={item.label} item={item} index={index} shouldReduceMotion={shouldReduceMotion} />
      ))}
    </div>
  );
}

function DetailedProgramCard({
  icon: Icon,
  title,
  subtitle,
  bullets,
  color,
  shouldReduceMotion,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  bullets: string[];
  color: "blue" | "green" | "red";
  shouldReduceMotion: boolean | null;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  const colorConfig = {
    blue: {
      gradient: "from-[#2D5BFF] to-[#2563EB]",
      bg: "bg-[#2D5BFF]/10",
      border: "border-[#2D5BFF]/30",
      iconBg: "bg-[#2D5BFF]/20",
      iconColor: "text-[#2D5BFF]",
      glow: "shadow-[0_0_30px_rgba(45,91,255,0.3)]",
    },
    green: {
      gradient: "from-[#22C55E] to-[#16A34A]",
      bg: "bg-[#22C55E]/10",
      border: "border-[#22C55E]/30",
      iconBg: "bg-[#22C55E]/20",
      iconColor: "text-[#22C55E]",
      glow: "shadow-[0_0_30px_rgba(0,177,64,0.3)]",
    },
    red: {
      gradient: "from-[#2563EB] to-[#BE123C]",
      bg: "bg-[#2563EB]/10",
      border: "border-[#2563EB]/30",
      iconBg: "bg-[#2563EB]/20",
      iconColor: "text-[#2563EB]",
      glow: "shadow-[0_0_30px_rgba(225,29,72,0.3)]",
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
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-20 blur-xl`}
        animate={isHovered && !shouldReduceMotion ? { opacity: 0.2, scale: 1.1 } : { opacity: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
      />
      <div className={`relative rounded-2xl border ${config.border} ${config.bg} backdrop-blur-md p-8 h-full flex flex-col overflow-hidden group-hover:${config.glow} transition-all duration-500`}>
        <motion.div
          className={`h-1 bg-gradient-to-r ${config.gradient} rounded-full mb-6`}
          initial={{ width: "0%" }}
          animate={shouldReduceMotion || isInView ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.div
          className={`relative z-10 w-16 h-16 rounded-xl ${config.iconBg} ${config.iconColor} flex items-center justify-center mb-6`}
          whileHover={shouldReduceMotion ? {} : { rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
        <div className="relative z-10 flex-1">
          <h3 className="font-heading font-bold text-xl mb-2 text-[#0F172A] group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[#64748B] mb-6 leading-relaxed">
            {subtitle}
          </p>
          <div className="space-y-3">
            {bullets.map((bullet, index) => (
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
                <span className="text-xs text-[#64748B]">{bullet}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

type LearningPathStep = {
  title: string;
  description: string;
  outcome: string;
  color: "blue" | "green" | "red";
  icon: React.ComponentType<{ className?: string }>;
};

function LearningPathStepCard({
  step,
  index,
  shouldReduceMotion,
  colorConfig,
}: {
  step: LearningPathStep;
  index: number;
  shouldReduceMotion: boolean | null;
  colorConfig: {
    blue: { gradient: string; bg: string; glow: string; borderAccent: string };
    green: { gradient: string; bg: string; glow: string; borderAccent: string };
    red: { gradient: string; bg: string; glow: string; borderAccent: string };
  };
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = step.icon;
  const config = colorConfig[step.color];

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div
        className="bg-white rounded-xl border-l-4 border border-gray-200 hover:border-l-4 transition-all duration-300 p-6 h-full group"
        style={{
          borderLeftColor: step.color === "blue" ? "#2D5BFF" : step.color === "green" ? "#22C55E" : "#2563EB",
        }}
      >
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            className={`w-12 h-12 rounded-full bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-lg`}
            whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
              Step {index + 1}
            </div>
            <h3 className="font-heading font-bold text-lg text-[#0F172A]">{step.title}</h3>
          </div>
        </div>
        <p className="text-sm text-[#475569] mb-4 leading-relaxed">{step.description}</p>
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${config.bg}/10 border ${config.borderAccent}`}>
          <CheckCircle2
            className={`w-4 h-4 ${
              step.color === "blue" ? "text-[#2D5BFF]" : step.color === "green" ? "text-[#22C55E]" : "text-[#2563EB]"
            }`}
          />
          <span
            className={`text-xs font-medium ${
              step.color === "blue" ? "text-[#2D5BFF]" : step.color === "green" ? "text-[#22C55E]" : "text-[#2563EB]"
            }`}
          >
            {step.outcome}
          </span>
        </div>
        <motion.div
          className={`absolute inset-0 rounded-xl bg-gradient-to-r ${config.gradient} opacity-0 group-hover:opacity-5 pointer-events-none`}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

function LearningPathTimeline({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const steps: LearningPathStep[] = [
    {
      title: "Assess",
      description: "Complete skill assessments and identify your learning goals and current proficiency level.",
      outcome: "Personalized learning roadmap",
      color: "blue",
      icon: Target,
    },
    {
      title: "Train",
      description: "Participate in structured training programs with hands-on labs and expert mentorship.",
      outcome: "Industry-relevant skills",
      color: "green",
      icon: GraduationCap,
    },
    {
      title: "Build",
      description: "Create portfolio projects and capstone assignments that demonstrate your capabilities.",
      outcome: "Portfolio-ready projects",
      color: "red",
      icon: Code,
    },
    {
      title: "Launch",
      description: "Access career support, internship placements, and job readiness programs.",
      outcome: "Career-ready profile",
      color: "blue",
      icon: Rocket,
    },
  ];

  const colorConfig = {
    blue: {
      gradient: "from-[#2D5BFF] to-[#2563EB]",
      bg: "bg-[#2D5BFF]",
      glow: "bg-[#2D5BFF]",
      borderAccent: "border-[#2D5BFF]/20",
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
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <LearningPathStepCard
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

function TrackCard({
  icon: Icon,
  title,
  duration,
  level,
  commitment,
  build,
  color,
  shouldReduceMotion,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  duration: string;
  level: string;
  commitment: string;
  build: string;
  color: "blue" | "green" | "red";
  shouldReduceMotion: boolean | null;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  const colorConfig = {
    blue: {
      gradient: "from-[#2D5BFF] to-[#2563EB]",
      bg: "bg-[#2D5BFF]/10",
      border: "border-[#2D5BFF]/30",
      iconBg: "bg-[#2D5BFF]/20",
      iconColor: "text-[#2D5BFF]",
    },
    green: {
      gradient: "from-[#22C55E] to-[#16A34A]",
      bg: "bg-[#22C55E]/10",
      border: "border-[#22C55E]/30",
      iconBg: "bg-[#22C55E]/20",
      iconColor: "text-[#22C55E]",
    },
    red: {
      gradient: "from-[#2563EB] to-[#BE123C]",
      bg: "bg-[#2563EB]/10",
      border: "border-[#2563EB]/30",
      iconBg: "bg-[#2563EB]/20",
      iconColor: "text-[#2563EB]",
    },
  };

  const config = colorConfig[color];

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -8, transition: { duration: 0.3 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-20 blur-xl`}
        animate={isHovered && !shouldReduceMotion ? { opacity: 0.2, scale: 1.1 } : { opacity: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
      />
      <div className={`relative rounded-2xl border ${config.border} ${config.bg} backdrop-blur-md p-8 h-full flex flex-col overflow-hidden`}>
        <div className="relative z-10 mb-6">
          <motion.div
            className={`w-16 h-16 rounded-xl ${config.iconBg} ${config.iconColor} flex items-center justify-center mb-6`}
            whileHover={shouldReduceMotion ? {} : { rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
          <h3 className="font-heading font-bold text-2xl mb-4 text-[#0F172A] group-hover:text-white transition-colors">
            {title}
          </h3>
        </div>
        <div className="relative z-10 flex-1 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-[#64748B]">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#64748B]">
              <TrendingUp className="w-4 h-4" />
              <span>{level}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#64748B]">
              <BarChart3 className="w-4 h-4" />
              <span>{commitment}</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <div className="text-xs font-semibold text-[rgba(234,242,255,0.6)] uppercase mb-2">What you build</div>
            <p className="text-sm text-[#64748B] leading-relaxed">
              {build}
            </p>
          </div>
        </div>
        <div className="relative z-10 mt-6">
          <Button href="#tracks" variant="ghost" size="sm" className="w-full">
            View Track Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

type OutcomeMetric = {
  value: number;
  value2?: number;
  suffix: string;
  label: string;
  color: "blue" | "green" | "red";
};

function OutcomeMetricCard({
  metric,
  index,
  shouldReduceMotion,
  colorConfig,
}: {
  metric: OutcomeMetric;
  index: number;
  shouldReduceMotion: boolean | null;
  colorConfig: {
    blue: { gradient: string; text: string };
    green: { gradient: string; text: string };
    red: { gradient: string; text: string };
  };
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const config = colorConfig[metric.color];
  const [count, setCount] = useState(0);
  const reduceMotion = Boolean(shouldReduceMotion);

  useEffect(() => {
    if (!isInView || reduceMotion) {
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = metric.value / steps;
    const stepDuration = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= metric.value) {
        setCount(metric.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [isInView, reduceMotion, metric.value]);

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl border border-gray-200 p-6 text-center"
    >
      <div className={`text-4xl font-bold mb-2 bg-gradient-to-br ${config.gradient} bg-clip-text text-transparent`}>
        {(reduceMotion || !isInView ? metric.value : count)}
        {metric.suffix}
        {metric.value2 ? `${metric.value2}` : ""}
      </div>
      <p className="text-sm text-[#475569]">{metric.label}</p>
    </motion.div>
  );
}

function OutcomesMetrics({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const metrics: OutcomeMetric[] = [
    { value: 30, suffix: "+", label: "mentor hours per cohort", color: "blue" },
    { value: 6, suffix: " to ", value2: 10, label: "projects per learner", color: "green" },
    { value: 8, suffix: " week", label: "job readiness sprint", color: "red" },
    { value: 100, suffix: "+", label: "cross border mentor network", color: "blue" },
  ];

  const colorConfig = {
    blue: { gradient: "from-[#2D5BFF] to-[#2563EB]", text: "text-[#2D5BFF]" },
    green: { gradient: "from-[#22C55E] to-[#16A34A]", text: "text-[#22C55E]" },
    red: { gradient: "from-[#2563EB] to-[#BE123C]", text: "text-[#2563EB]" },
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {metrics.map((metric, index) => (
        <OutcomeMetricCard
          key={metric.label}
          metric={metric}
          index={index}
          shouldReduceMotion={shouldReduceMotion}
          colorConfig={colorConfig}
        />
      ))}
    </div>
  );
}

type Mentor = {
  name: string;
  role: string;
  domain: string;
  color: "blue" | "green" | "red";
};

function MentorCard({
  mentor,
  index,
  shouldReduceMotion,
}: {
  mentor: Mentor;
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const colorConfig = {
    blue: { bg: "bg-[#2D5BFF]/20", text: "text-[#2D5BFF]", border: "border-[#2D5BFF]/30" },
    green: { bg: "bg-[#22C55E]/20", text: "text-[#22C55E]", border: "border-[#22C55E]/30" },
    red: { bg: "bg-[#2563EB]/20", text: "text-[#2563EB]", border: "border-[#2563EB]/30" },
  };
  const config = colorConfig[mentor.color];

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
      className={`p-6 rounded-xl border ${config.border} bg-white backdrop-blur-sm hover:bg-[#F8FAFC] transition-all duration-300`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${config.bg} ${config.text}`}>
          <Users2 className="w-6 h-6" />
        </div>
        <Linkedin className="w-5 h-5 text-[rgba(234,242,255,0.5)]" />
      </div>
      <h4 className="font-heading font-semibold text-lg mb-1 text-[#0F172A]">{mentor.name}</h4>
      <p className="text-xs text-[#64748B] mb-1">{mentor.role}</p>
      <p className="text-xs text-[rgba(234,242,255,0.5)]">{mentor.domain}</p>
    </motion.div>
  );
}

function PartnerLogoCard({
  index,
  shouldReduceMotion,
}: {
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="aspect-square bg-white/10 rounded-lg border border-gray-200 flex items-center justify-center backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
    >
      <div className="w-16 h-16 bg-[rgba(234,242,255,0.1)] rounded" />
    </motion.div>
  );
}

function MentorsPartners({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const mentors: Mentor[] = [
    { name: "Dr. Sarah Ahmed", role: "AI Research Lead", domain: "Machine Learning", color: "blue" },
    { name: "James Mitchell", role: "Cloud Architect", domain: "Cloud Infrastructure", color: "green" },
    { name: "Ayesha Khan", role: "Data Science Director", domain: "Data Analytics", color: "red" },
    { name: "David Thompson", role: "Cybersecurity Expert", domain: "Security", color: "blue" },
  ];

  return (
    <div className="mt-12 space-y-16">
      <div>
        <h3 className="font-heading font-semibold text-xl mb-8 text-center text-[#0F172A]">Expert Mentors</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <MentorCard key={mentor.name} mentor={mentor} index={index} shouldReduceMotion={shouldReduceMotion} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-heading font-semibold text-xl mb-8 text-center text-[#0F172A]">Partner Organizations</h3>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <PartnerLogoCard key={index} index={index} shouldReduceMotion={shouldReduceMotion} />
          ))}
        </div>
      </div>
    </div>
  );
}

type FaqItem = {
  question: string;
  answer: string;
};

function FAQItemCard({
  faq,
  index,
  isOpen,
  shouldReduceMotion,
  onToggle,
}: {
  faq: FaqItem;
  index: number;
  isOpen: boolean;
  shouldReduceMotion: boolean | null;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[rgba(11,18,32,0.02)] transition-colors"
      >
        <h3 className="font-heading font-semibold text-lg text-[#0F172A] pr-4">{faq.question}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
          <ChevronDown className="w-5 h-5 text-[#64748B]" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4 text-[#475569] leading-relaxed">{faq.answer}</div>
      </motion.div>
    </motion.div>
  );
}

function FAQSection({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "Who is this program for?",
      answer:
        "Our programs are designed for students, professionals, and career changers looking to build or enhance their tech skills. Whether you're a beginner or looking to advance your career, we have tracks suited to your level.",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "No prior experience is required for our beginner tracks. We offer programs for all skill levels, from fundamentals to advanced specialization. Our assessment process helps match you with the right program.",
    },
    {
      question: "Are programs online or onsite?",
      answer:
        "We offer both online and hybrid learning options to accommodate different schedules and locations. Most programs include live sessions, recorded content, and hands-on labs accessible remotely.",
    },
    {
      question: "What is the value of certifications?",
      answer:
        "Our certifications are industry-recognized and aligned with vendor standards. They demonstrate practical skills and are valued by employers in both UK and Pakistani tech markets. Many programs include portfolio projects that showcase your capabilities.",
    },
    {
      question: "How do I become eligible for internships?",
      answer:
        "Internship eligibility is based on program completion, performance in assessments, and portfolio quality. We work with partner organizations to match qualified candidates with relevant opportunities.",
    },
    {
      question: "What about pricing and scholarships?",
      answer:
        "We offer various pricing tiers and scholarship opportunities for eligible candidates. Please contact us through the portal or membership application to discuss options and financial support programs.",
    },
  ];

  return (
    <div className="mt-12 space-y-4">
      {faqs.map((faq, index) => (
        <FAQItemCard
          key={faq.question}
          faq={faq}
          index={index}
          isOpen={openIndex === index}
          shouldReduceMotion={shouldReduceMotion}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

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
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#22C55E] rounded-full opacity-[0.06] blur-[140px]"
        animate={shouldReduceMotion ? {} : {
          x: [0, -25, 20, 0],
          y: [0, 25, -20, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/2 w-[450px] h-[450px] bg-[#2563EB] rounded-full opacity-[0.05] blur-[130px]"
        animate={shouldReduceMotion ? {} : {
          x: [0, 20, -25, 0],
          y: [0, -20, 25, 0],
          scale: [1, 1.2, 0.85, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

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
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-[800px] h-[800px] bg-[#22C55E] rounded-full opacity-[0.1] blur-[180px]"
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.4, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-[700px] h-[700px] bg-[#2563EB] rounded-full opacity-[0.08] blur-[170px]"
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.35, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
