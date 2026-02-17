"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedUnderline } from "@/components/AnimatedUnderline";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Shield, CheckCircle2, Users, Eye, FileText, Download, AlertTriangle, Gavel, Scale, Heart, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "summary", label: "Summary" },
  { id: "principles", label: "Ethical Principles" },
  { id: "responsibilities", label: "Member Responsibilities" },
  { id: "reporting", label: "Reporting & Enforcement" },
];

export default function CodeOfConductPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<string>("summary");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      // Check sections in reverse order to get the topmost visible one
      const reversedSections = [...sections].reverse();
      for (const section of reversedSections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsMobileNavOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <CodeOfConductHero shouldReduceMotion={shouldReduceMotion} />

      {/* Main Content Section */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            {/* Sticky Left Navigation */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <nav className="space-y-2">
                  <div className="text-sm font-semibold text-[#475569] mb-4 uppercase tracking-wider">
                    On this page
                  </div>
                  {sections.map((section) => (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeSection === section.id
                          ? "bg-[#2D5BFF]/10 text-[#2D5BFF] border-l-2 border-[#2D5BFF]"
                          : "text-[#475569] hover:bg-gray-100"
                      }`}
                      whileHover={shouldReduceMotion ? {} : { x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {section.label}
                    </motion.button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Mobile Navigation */}
            <div className="lg:hidden mb-8">
              <button
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                className="w-full px-4 py-3 rounded-lg bg-white border border-[rgba(15,23,42,0.10)] text-left font-medium text-[#0F172A] flex items-center justify-between"
              >
                <span>Contents</span>
                <motion.span
                  animate={{ rotate: isMobileNavOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ↓
                </motion.span>
              </button>
              {isMobileNavOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 space-y-1 bg-white border border-[rgba(15,23,42,0.10)] rounded-lg p-2"
                >
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm ${
                        activeSection === section.id
                          ? "bg-[#2D5BFF]/10 text-[#2D5BFF]"
                          : "text-[rgba(15,23,42,0.68)]"
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Download Button */}
              <div className="flex justify-end">
                <motion.button
                  disabled
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2D5BFF]/10 text-[#2D5BFF] border border-[#2D5BFF]/20 text-sm font-medium opacity-60 cursor-not-allowed"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                >
                  <Download className="w-4 h-4" />
                  Download PDF (Coming Soon)
                </motion.button>
              </div>

              {/* Summary Section */}
              <ContentCard id="summary" title="Summary">
                <p className="text-lg text-[rgba(15,23,42,0.68)] leading-relaxed">
                  UPTECH is committed to maintaining the highest standards of ethical conduct, transparency, and accountability in all our activities.
                </p>
              </ContentCard>

              {/* Principles Grid */}
              <ContentCard id="principles" title="Ethical Principles">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  <PrincipleCard
                    icon={Shield}
                    title="Integrity"
                    description="Honesty in all dealings"
                    color="blue"
                    shouldReduceMotion={shouldReduceMotion}
                  />
                  <PrincipleCard
                    icon={Users}
                    title="Respect"
                    description="Diversity and inclusion"
                    color="green"
                    shouldReduceMotion={shouldReduceMotion}
                  />
                  <PrincipleCard
                    icon={Eye}
                    title="Transparency"
                    description="Open governance and operations"
                    color="blue"
                    shouldReduceMotion={shouldReduceMotion}
                  />
                  <PrincipleCard
                    icon={FileText}
                    title="Accountability"
                    description="Responsible to members and stakeholders"
                    color="blue"
                    shouldReduceMotion={shouldReduceMotion}
                  />
                  <PrincipleCard
                    icon={Zap}
                    title="Responsible Tech"
                    description="Ethical technology development"
                    color="green"
                    shouldReduceMotion={shouldReduceMotion}
                  />
                </div>
              </ContentCard>

              {/* Member Responsibilities */}
              <ContentCard id="responsibilities" title="Member Responsibilities">
                <p className="text-[rgba(15,23,42,0.68)] mb-6">
                  Detailed member responsibilities and guidelines will be available soon.
                </p>
                <div className="space-y-4">
                  <ResponsibilityItem
                    text="Uphold UPTECH's ethical principles in all activities"
                    shouldReduceMotion={shouldReduceMotion}
                  />
                  <ResponsibilityItem
                    text="Act with integrity and transparency in all dealings"
                    shouldReduceMotion={shouldReduceMotion}
                  />
                  <ResponsibilityItem
                    text="Respect diversity and promote inclusive practices"
                    shouldReduceMotion={shouldReduceMotion}
                  />
                  <ResponsibilityItem
                    text="Report violations of this code of conduct"
                    shouldReduceMotion={shouldReduceMotion}
                  />
                </div>
              </ContentCard>

              {/* Reporting & Enforcement Callout */}
              <ReportingEnforcementCallout shouldReduceMotion={shouldReduceMotion} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Hero Component
function CodeOfConductHero({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#F8FAFC] pt-20">
      {/* Animated Background */}
      <HeroBackground shouldReduceMotion={shouldReduceMotion} />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Title and Summary */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#0F172A]">
              <span className="relative inline-block">
                Code of Conduct
                <AnimatedUnderline />
              </span>
            </h1>
            <p className="text-xl text-[rgba(15,23,42,0.85)] leading-relaxed">
              UPTECH is committed to maintaining the highest standards of ethical conduct, transparency, and accountability in all our activities.
            </p>
          </motion.div>

          {/* Right: Governance Visual Panel */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <GovernanceVisualPanel shouldReduceMotion={shouldReduceMotion} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Hero Background Animation
function HeroBackground({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Radial glows */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[#2D5BFF] rounded-full opacity-[0.15] blur-[200px]"
        animate={shouldReduceMotion ? {} : {
          x: [0, 50, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-[600px] h-[600px] bg-[#22C55E] rounded-full opacity-[0.08] blur-[160px]"
        animate={shouldReduceMotion ? {} : {
          x: [0, -60, 50, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.25, 0.85, 1],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/2 w-[550px] h-[550px] bg-[#2563EB] rounded-full opacity-[0.06] blur-[150px]"
        animate={shouldReduceMotion ? {} : {
          x: [0, 40, -50, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8FAFC]/60 pointer-events-none" />
    </div>
  );
}

// Governance Visual Panel
function GovernanceVisualPanel({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="relative rounded-2xl bg-[rgba(255,255,255,0.06)] border border-[rgba(15,23,42,0.14)] p-8 backdrop-blur-sm overflow-hidden">
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: shouldReduceMotion
            ? "linear-gradient(90deg, #2D5BFF, #22C55E, #2563EB, #2D5BFF)"
            : undefined,
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                background: [
                  "linear-gradient(90deg, #2D5BFF, #22C55E, #2563EB, #2D5BFF)",
                  "linear-gradient(180deg, #2D5BFF, #22C55E, #2563EB, #2D5BFF)",
                  "linear-gradient(270deg, #2D5BFF, #22C55E, #2563EB, #2D5BFF)",
                  "linear-gradient(360deg, #2D5BFF, #22C55E, #2563EB, #2D5BFF)",
                ],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="absolute inset-[2px] rounded-2xl bg-[#F8FAFC]" />

      <div className="relative z-10">
        {/* Principles Chips */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Integrity", color: "blue" },
            { label: "Respect", color: "green" },
            { label: "Transparency", color: "blue" },
          ].map((chip, index) => (
            <motion.div
              key={chip.label}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className={`p-3 rounded-lg border ${
                chip.color === "blue"
                  ? "border-[#2D5BFF]/40 bg-[#2D5BFF]/15"
                  : "border-[#22C55E]/40 bg-[#22C55E]/15"
              } text-center`}
            >
              <div
                className={`text-xs font-semibold ${
                  chip.color === "blue" ? "text-[#2D5BFF]" : "text-[#22C55E]"
                }`}
              >
                {chip.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shield Icon */}
        <div className="flex justify-center">
          <motion.div
            initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200 }}
            className="relative"
          >
            <Shield className="w-24 h-24 text-[#2D5BFF]" />
            <motion.div
              className="absolute inset-0 bg-[#2D5BFF] rounded-full blur-xl opacity-30"
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        {/* Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 300">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2D5BFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {[
            { x1: 50, y1: 50, x2: 200, y2: 150 },
            { x1: 350, y1: 50, x2: 200, y2: 150 },
            { x1: 200, y1: 150, x2: 200, y2: 250 },
            { x1: 50, y1: 250, x2: 200, y2: 150 },
            { x1: 350, y1: 250, x2: 200, y2: 150 },
          ].map((line, index) => (
            <motion.line
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={shouldReduceMotion ? { pathLength: 1, opacity: 0.3 } : { pathLength: 0, opacity: 0 }}
              animate={shouldReduceMotion ? {} : { pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

// Content Card Component
function ContentCard({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-24"
    >
      <div className="bg-white rounded-2xl border border-[rgba(15,23,42,0.10)] p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Top gradient divider */}
        <div className="h-[2px] bg-gradient-to-r from-[#2D5BFF] via-[#22C55E] to-[#2563EB] mb-6 rounded-full" />
        
        <h2 className="font-heading font-bold text-3xl mb-6 text-[#0F172A]">{title}</h2>
        {children}
      </div>
    </motion.div>
  );
}

// Principle Card Component
function PrincipleCard({
  icon: Icon,
  title,
  description,
  color,
  shouldReduceMotion,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: "blue" | "green";
  shouldReduceMotion: boolean | null;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
      className="p-6 rounded-xl border border-[rgba(15,23,42,0.10)] bg-white hover:border-[#2D5BFF]/40 hover:shadow-[0_4px_12px_rgba(45,91,255,0.1)] transition-all duration-300"
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
          color === "blue"
            ? "bg-[#2D5BFF]/10 text-[#2D5BFF]"
            : "bg-[#22C55E]/10 text-[#22C55E]"
        }`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-heading font-semibold text-lg mb-2 text-[#0F172A]">{title}</h3>
      <p className="text-sm text-[rgba(15,23,42,0.68)]">{description}</p>
    </motion.div>
  );
}

// Responsibility Item Component
function ResponsibilityItem({
  text,
  shouldReduceMotion,
}: {
  text: string;
  shouldReduceMotion: boolean | null;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-start gap-3"
    >
      <CheckCircle2 className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
      <span className="text-[rgba(15,23,42,0.68)] leading-relaxed">{text}</span>
    </motion.div>
  );
}

// Reporting & Enforcement Callout
function ReportingEnforcementCallout({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      id="reporting"
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-24"
    >
      <div className="bg-gradient-to-br from-[#2563EB]/5 to-[#2563EB]/10 rounded-2xl border-2 border-[#2563EB]/30 p-8 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/40 flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-[#2563EB]" />
          </div>
          <div className="flex-1">
            <h2 className="font-heading font-bold text-2xl mb-4 text-[#0F172A] flex items-center gap-2">
              Reporting & Enforcement
            </h2>
            <div className="space-y-4 text-[rgba(15,23,42,0.68)]">
              <p>
                UPTECH takes violations of this code of conduct seriously. Members are encouraged to report any concerns or violations through appropriate channels.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Gavel className="w-5 h-5 text-[#2563EB] mt-0.5 flex-shrink-0" />
                  <span>All reports will be reviewed by the governance committee</span>
                </div>
                <div className="flex items-start gap-2">
                  <Scale className="w-5 h-5 text-[#2563EB] mt-0.5 flex-shrink-0" />
                  <span>Fair and transparent investigation process</span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-[#2563EB] mt-0.5 flex-shrink-0" />
                  <span>Zero tolerance for violations of ethical standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
