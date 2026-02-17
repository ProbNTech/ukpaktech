"use client";

import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedUnderline } from "@/components/AnimatedUnderline";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Shield, Users, Award, Briefcase, CheckCircle2, Gavel, Eye, FileText, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function LeadershipPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<string | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }
    const hash = window.location.hash.slice(1);
    return hash || null;
  });

  useEffect(() => {
    if (!activeSection) {
      return;
    }
    const element = document.getElementById(activeSection);
    if (!element) {
      return;
    }
    const timeout = setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => clearTimeout(timeout);
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <PageHero
        title={
          <span className="relative inline-block">
            Leadership and Governance
            <AnimatedUnderline />
          </span>
        }
        subtitle="UPTECH operates under a defined governance structure ensuring transparency, ethics, and accountability across all initiatives and operations."
      >
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          {[
            { 
              icon: Shield, 
              text: "Ethical Governance", 
              color: "border-[#2563EB]/40 bg-[#2563EB]/15",
              iconColor: "text-[#2563EB]",
            },
            { 
              icon: Eye, 
              text: "Transparency", 
              color: "border-[#22C55E]/50 bg-[#22C55E]/20",
              iconColor: "text-[#22C55E]",
            },
            { 
              icon: FileText, 
              text: "Accountability", 
              color: "border-[#2563EB]/50 bg-[#2563EB]/20",
              iconColor: "text-[#2563EB]",
            },
          ].map((chip, index) => {
            const Icon = chip.icon;
            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border ${chip.color} backdrop-blur-sm`}
              >
                <Icon className={`w-4 h-4 ${chip.iconColor}`} />
                <span className="text-sm font-medium text-[#0F172A]/90">{chip.text}</span>
              </motion.div>
            );
          })}
        </div>
      </PageHero>

      {/* Navigation Cards Grid */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <PremiumGovernanceGrid
            scrollToSection={scrollToSection}
            shouldReduceMotion={shouldReduceMotion}
          />
        </div>
      </Section>

      {/* Detailed Sections */}
      <GovernanceStructureSection shouldReduceMotion={shouldReduceMotion} />
      <BoardOfDirectorsSection shouldReduceMotion={shouldReduceMotion} />
      <AdvisoryCouncilSection shouldReduceMotion={shouldReduceMotion} />
      <ExecutiveLeadershipSection shouldReduceMotion={shouldReduceMotion} />
    </div>
  );
}


// Premium Governance Grid Component
function PremiumGovernanceGrid({
  scrollToSection,
  shouldReduceMotion,
}: {
  scrollToSection: (id: string) => void;
  shouldReduceMotion: boolean | null;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards: Array<{
    id: string;
    title: string;
    description: string;
    chips: string[];
    icon: "governance" | "board" | "advisory" | "executive";
  }> = [
    {
      id: "governance-structure",
      title: "Governance Structure",
      description: "Our framework for accountability, transparency, and ethical oversight.",
      chips: ["Ethics", "Accountability"],
      icon: "governance",
    },
    {
      id: "board-of-directors",
      title: "Board of Directors",
      description: "Strategic oversight and decision-making at the highest level.",
      chips: ["Oversight", "Strategy"],
      icon: "board",
    },
    {
      id: "advisory-council",
      title: "Advisory Council",
      description: "Expert guidance and strategic counsel from industry leaders.",
      chips: ["Expertise", "Guidance"],
      icon: "advisory",
    },
    {
      id: "executive-leadership",
      title: "Executive Leadership",
      description: "Day-to-day operations and strategic execution of UPTECH initiatives.",
      chips: ["Execution", "Operations"],
      icon: "executive",
    },
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
      {cards.map((card, index) => (
        <PremiumGovernanceCard
          key={card.id}
          {...card}
          onClick={() => scrollToSection(card.id)}
          shouldReduceMotion={shouldReduceMotion}
          index={index}
          isInView={isInView}
        />
      ))}
    </div>
  );
}

// Premium Governance Card Component
function PremiumGovernanceCard({
  id,
  title,
  description,
  chips,
  icon,
  onClick,
  shouldReduceMotion,
  index,
  isInView,
}: {
  id: string;
  title: string;
  description: string;
  chips: string[];
  icon: "governance" | "board" | "advisory" | "executive";
  onClick: () => void;
  shouldReduceMotion: boolean | null;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      animate={
        shouldReduceMotion || isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 30 }
      }
      transition={{
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={shouldReduceMotion ? {} : { y: -6, transition: { duration: 0.3 } }}
      className="h-full"
    >
      <div
        onClick={onClick}
        className="group h-full cursor-pointer relative bg-white rounded-2xl border border-gray-200 p-8 overflow-hidden transition-all duration-300 hover:border-[#2563EB]/40 hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)]"
      >
        {/* Top Accent Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2D5BFF] via-[#22C55E] to-[#2D5BFF] opacity-60 group-hover:opacity-100 transition-opacity" />

        {/* Background Texture */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(45, 91, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(45, 91, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Corner Glow (blue) */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2D5BFF]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Icon with Gradient Stroke */}
          <div className="mb-6">
            <PremiumIcon
              type={icon}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>

          {/* Title and Chips */}
          <div className="mb-4">
            <h3 className="font-heading font-semibold text-2xl mb-3 text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-300">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {chips.map((chip, chipIndex) => (
                <span
                  key={chipIndex}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#2563EB]/8 text-[#2563EB] border border-[#2563EB]/20"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-[#475569] leading-relaxed mb-6 text-[15px]">
            {description}
          </p>

          {/* Premium Learn More Link */}
          <PremiumLearnMoreLink shouldReduceMotion={shouldReduceMotion} />
        </div>
      </div>
    </motion.div>
  );
}

// Premium Icon Component with Gradient Stroke
function PremiumIcon({
  type,
  shouldReduceMotion,
}: {
  type: "governance" | "board" | "advisory" | "executive";
  shouldReduceMotion: boolean | null;
}) {
  const iconConfig = {
    governance: {
      viewBox: "0 0 24 24",
      paths: [
        "M12 2L4 6v6c0 5.523 4.477 10 10 10s10-4.477 10-10V6l-8-4z",
        "M9 12h6M9 15h6",
      ],
    },
    board: {
      viewBox: "0 0 24 24",
      paths: [
        "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
        "M13 7a4 4 0 1 0-8 0 4 4 0 0 0 8 0z",
        "M21 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0z",
        "M23 21v-2a4 4 0 0 0-3-3.87",
      ],
    },
    advisory: {
      viewBox: "0 0 24 24",
      paths: [
        "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
      ],
    },
    executive: {
      viewBox: "0 0 24 24",
      paths: [
        "M3 7h18M3 12h18M3 17h12",
        "M3 5h18v14H3V5z",
      ],
    },
  };

  const config = iconConfig[type];

  return (
    <motion.div
      className="relative inline-block"
      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-14 h-14">
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-full h-full"
        >
          <defs>
            <linearGradient id={`gradient-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="1" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0.8" />
            </linearGradient>
            <filter id={`glow-${type}`}>
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {config.paths.map((path, index) => (
            <motion.path
              key={index}
              d={path}
              stroke={`url(#gradient-${type})`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter={`url(#glow-${type})`}
              initial={shouldReduceMotion ? {} : { pathLength: 0, opacity: 0 }}
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      pathLength: 1,
                      opacity: 1,
                    }
              }
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            />
          ))}
        </svg>
        {/* Subtle glow behind icon */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#2563EB]/20 rounded-full blur-xl -z-0"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}

// Premium Learn More Link Component
function PremiumLearnMoreLink({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null;
}) {
  return (
    <div className="pt-6 border-t border-gray-200 group-hover:border-[#2563EB]/20 transition-colors">
      <motion.div
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] group-hover:gap-3 transition-all"
        whileHover={shouldReduceMotion ? {} : { x: 2 }}
      >
        <span>Learn more</span>
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 4, 0],
                }
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </div>
  );
}

// Governance Structure Section
function GovernanceStructureSection({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="governance-structure" className="scroll-mt-24">
      <Section variant="alt">
        <div className="max-w-7xl mx-auto">
          <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left on desktop, top on mobile */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-[#0F172A]">
                Governance Structure
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed mb-8">
                A comprehensive framework ensuring accountability, transparency, and ethical decision-making across all UPTECH operations.
              </p>

              {/* Key Responsibilities */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200">
                <h4 className="font-heading font-semibold text-lg mb-4 text-[#0F172A]">Key Responsibilities</h4>
                <ul className="space-y-3">
                  {[
                    "Establish and maintain ethical standards",
                    "Oversee strategic direction and planning",
                    "Ensure legal and regulatory compliance",
                    "Provide transparent reporting",
                    "Manage conflicts of interest",
                    "Facilitate stakeholder engagement",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                      animate={shouldReduceMotion || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                      <span className="text-[#475569] text-[15px]">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Image - Right on desktop, above on mobile */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2 relative group flex items-center justify-center"
            >
              {/* Brand glow ring behind image with enhanced red */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[90%] h-[90%] rounded-full bg-gradient-to-br from-[#2563EB]/20 via-[#22C55E]/12 to-[#2563EB]/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Subtle corner glows with red accents */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#2563EB]/15 to-transparent rounded-bl-full opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#22C55E]/8 to-transparent rounded-tr-full opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-[#2563EB]/12 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-[#2563EB]/10 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
              
              {/* Image - no border, enlarged */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                className="relative z-10 w-full max-h-[550px]"
                style={{
                  filter: 'drop-shadow(0 8px 24px rgba(37,99,235,0.25)) drop-shadow(0 4px 12px rgba(225,29,72,0.15))',
                }}
              >
                <Image
                  src="/image/leadership/Governance Structure.jpg"
                  alt="UPTECH Governance Structure"
                  width={800}
                  height={550}
                  className="w-full h-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>
    </section>
  );
}

// Board of Directors Section
function BoardOfDirectorsSection({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="board-of-directors" className="scroll-mt-24">
      <Section>
        <div className="max-w-7xl mx-auto">
          <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image - Left on desktop, above on mobile */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-1 relative group flex items-center justify-center"
            >
              {/* Brand glow ring behind image with enhanced red */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[90%] h-[90%] rounded-full bg-gradient-to-br from-[#2563EB]/15 via-[#22C55E]/10 to-[#2563EB]/12 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Subtle corner glows with red accents */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#2563EB]/12 to-transparent rounded-bl-full opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#22C55E]/6 to-transparent rounded-tr-full opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-[#2563EB]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-[#2563EB]/8 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
              
              {/* Image - no border, enlarged */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                className="relative z-10 w-full max-h-[550px]"
                style={{
                  filter: 'drop-shadow(0 8px 24px rgba(37,99,235,0.2)) drop-shadow(0 4px 12px rgba(225,29,72,0.12))',
                }}
              >
                <Image
                  src="/image/leadership/Board of Directors.jpg"
                  alt="UPTECH Board of Directors"
                  width={800}
                  height={550}
                  className="w-full h-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>

            {/* Text Content - Right on desktop, below on mobile */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-2"
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-[#0F172A]">
                Board of Directors
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed mb-8">
                Strategic oversight and governance at the highest level, ensuring UPTECH&apos;s mission and values guide all decisions.
              </p>

              {/* Key Responsibilities */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <h4 className="font-heading font-semibold text-lg mb-4 text-[#0F172A]">Key Responsibilities</h4>
                <ul className="space-y-3">
                  {[
                    "Approve strategic plans and major initiatives",
                    "Oversee financial management and resources",
                    "Appoint and evaluate executive leadership",
                    "Ensure compliance with governance policies",
                    "Review and approve annual reports",
                    "Provide strategic guidance on partnerships",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 10 }}
                      animate={shouldReduceMotion || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                      <span className="text-[#475569] text-[15px]">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </section>
  );
}

// Advisory Council Section
function AdvisoryCouncilSection({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="advisory-council" className="scroll-mt-24">
      <Section variant="alt">
        <div className="max-w-7xl mx-auto">
          <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left on desktop, top on mobile */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-[#0F172A]">
                Advisory Council
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed mb-8">
                Expert guidance and strategic counsel from distinguished leaders across technology, business, and policy.
              </p>

              {/* Key Responsibilities */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200">
                <h4 className="font-heading font-semibold text-lg mb-4 text-[#0F172A]">Key Responsibilities</h4>
                <ul className="space-y-3">
                  {[
                    "Provide expert guidance on technology trends",
                    "Offer strategic counsel on program development",
                    "Facilitate connections with key stakeholders",
                    "Review and provide feedback on initiatives",
                    "Serve as ambassadors for UPTECH&apos;s mission",
                    "Contribute to thought leadership and knowledge sharing",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                      animate={shouldReduceMotion || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                      <span className="text-[#475569] text-[15px]">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Image - Right on desktop, below on mobile */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2 relative group flex items-center justify-center"
            >
              {/* Brand glow ring behind image with enhanced red */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[90%] h-[90%] rounded-full bg-gradient-to-br from-[#2563EB]/20 via-[#22C55E]/12 to-[#2563EB]/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Subtle corner glows with red accents */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#2563EB]/15 to-transparent rounded-bl-full opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#22C55E]/8 to-transparent rounded-tr-full opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-[#2563EB]/12 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-[#2563EB]/10 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
              
              {/* Image - no border, enlarged */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                className="relative z-10 w-full max-h-[550px]"
                style={{
                  filter: 'drop-shadow(0 8px 24px rgba(37,99,235,0.25)) drop-shadow(0 4px 12px rgba(225,29,72,0.15))',
                }}
              >
                <Image
                  src="/image/leadership/Advisory Council.jpg"
                  alt="UPTECH Advisory Council"
                  width={800}
                  height={550}
                  className="w-full h-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>
    </section>
  );
}

// Executive Leadership Section
function ExecutiveLeadershipSection({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="executive-leadership" className="scroll-mt-24">
      <Section>
        <div className="max-w-7xl mx-auto">
          <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image - Left on desktop, above on mobile */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-1 relative group flex items-center justify-center"
            >
              {/* Brand glow ring behind image with enhanced red */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[90%] h-[90%] rounded-full bg-gradient-to-br from-[#2563EB]/15 via-[#22C55E]/10 to-[#2563EB]/12 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Subtle corner glows with red accents */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#2563EB]/12 to-transparent rounded-bl-full opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#22C55E]/6 to-transparent rounded-tr-full opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-[#2563EB]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-[#2563EB]/8 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
              
              {/* Image - no border, enlarged */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                className="relative z-10 w-full max-h-[550px]"
                style={{
                  filter: 'drop-shadow(0 8px 24px rgba(37,99,235,0.2)) drop-shadow(0 4px 12px rgba(225,29,72,0.12))',
                }}
              >
                <Image
                  src="/image/leadership/Executive Leadership.jpg"
                  alt="UPTECH Executive Leadership"
                  width={800}
                  height={550}
                  className="w-full h-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>

            {/* Text Content - Right on desktop, below on mobile */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-2"
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-[#0F172A]">
                Executive Leadership
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed mb-8">
                Day-to-day operations and strategic execution of UPTECH&apos;s programs, initiatives, and member services.
              </p>

              {/* Key Responsibilities */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <h4 className="font-heading font-semibold text-lg mb-4 text-[#0F172A]">Key Responsibilities</h4>
                <ul className="space-y-3">
                  {[
                    "Execute strategic plans and initiatives",
                    "Manage day-to-day operations and delivery",
                    "Build and maintain stakeholder partnerships",
                    "Oversee financial management and resources",
                    "Provide regular reporting to the Board",
                    "Ensure compliance with policies and procedures",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 10 }}
                      animate={shouldReduceMotion || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                      <span className="text-[#475569] text-[15px]">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </section>
  );
}
