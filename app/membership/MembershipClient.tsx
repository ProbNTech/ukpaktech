"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import {
  Users,
  Network,
  Award,
  TrendingUp,
  Building2,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Target,
  Send,
  User,
  Mail,
  Phone,
  Linkedin,
  MessageSquare,
  ChevronDown,
  Sparkles,
  Shield,
  Star,
  Zap,
  Globe,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";

/* ─── Shared animation variants ─── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─── Grid pattern SVG for background textures ─── */
const gridPatternStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
  backgroundSize: "40px 40px",
};

export default function MembershipClient() {
  const shouldReduceMotion = useReducedMotion();

  const keyBenefits = [
    {
      icon: Network,
      title: "Exclusive Networking",
      description:
        "Connect with leading technology professionals, founders, and executives across UK and Pakistan.",
      color: "#2563EB",
    },
    {
      icon: Award,
      title: "Recognition & Visibility",
      description:
        "Gain recognition in the UK\u2013Pakistan technology ecosystem through our platforms and events.",
      color: "#22C55E",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description:
        "Access funding, resources, market insights, and collaboration opportunities.",
      color: "#8b5cf6",
    },
    {
      icon: Target,
      title: "Strategic Partnerships",
      description:
        "Build strategic partnerships and explore cross-border business opportunities.",
      color: "#f59e0b",
    },
  ];

  const eligibilityPoints = [
    "Professionals working in technology, innovation, or related sectors",
    "Organizations with interest in UK\u2013Pakistan technology collaboration",
    "Academic institutions and research organizations",
    "Startups and enterprises seeking cross-border opportunities",
  ];

  const whoCanJoin = [
    {
      icon: Briefcase,
      title: "Technology Professionals",
      description: "CTOs, tech leaders, engineers, and technology executives.",
      color: "#2563EB",
    },
    {
      icon: Building2,
      title: "Enterprises & Organizations",
      description:
        "Companies seeking UK\u2013Pakistan technology partnerships.",
      color: "#22C55E",
    },
    {
      icon: GraduationCap,
      title: "Academic Institutions",
      description: "Universities and research organizations.",
      color: "#8b5cf6",
    },
    {
      icon: Users,
      title: "Startups & Entrepreneurs",
      description: "Founders and early-stage companies.",
      color: "#f59e0b",
    },
  ];

  const membershipTiers = [
    {
      name: "Strategic Partner",
      highlight: true,
      description:
        "For leading organisations and anchor partners driving the UK\u2013Pakistan tech corridor.",
      features: [
        "Unlimited event access & priority booking",
        "Board-level introductions & advocacy",
        "Logo placement across UPTECH platforms",
        "Access to executive boardroom & meeting spaces",
        "Dedicated account manager",
        "Thought leadership & speaking slots",
        "Custom bilateral programme design",
      ],
    },
    {
      name: "Corporate",
      highlight: false,
      description:
        "For established companies seeking cross-border technology partnerships and growth.",
      features: [
        "20 hours meeting room access per month",
        "Priority event registration & networking",
        "Company profile on UPTECH platform",
        "Partnership matching services",
        "Market access & trade delegation support",
        "Industry reports & strategic insights",
      ],
    },
    {
      name: "SME",
      highlight: false,
      description:
        "For small and medium enterprises looking to scale through the UK\u2013Pakistan corridor.",
      features: [
        "10 hours meeting room access per month",
        "Member portal & directory listing",
        "Networking events & workshops",
        "Business support & advisory services",
        "Access to SME Hub resources",
        "Collaboration opportunities",
      ],
    },
    {
      name: "Startup / Associate",
      highlight: false,
      description:
        "For startups, founders, and individual professionals entering the ecosystem.",
      features: [
        "5 hours meeting room access per month",
        "Member portal access",
        "Exclusive events & networking sessions",
        "Mentorship programme access",
        "Incubation & accelerator referrals",
        "Newsletter & industry updates",
      ],
    },
    {
      name: "Government / Institutional",
      highlight: false,
      description:
        "For government bodies, academic institutions, and research organisations.",
      features: [
        "Custom allocation & partnership terms",
        "Priority bilateral & policy event access",
        "Full meeting & event space access",
        "Dedicated coordination support",
        "Research collaboration programmes",
        "Student & talent pipeline initiatives",
      ],
    },
  ];

  const procedureSteps = [
    {
      step: "01",
      title: "Review Eligibility",
      description:
        "Ensure you meet the membership criteria for your chosen category.",
      color: "#2563EB",
    },
    {
      step: "02",
      title: "Submit Application",
      description:
        "Complete the membership application form through our portal.",
      color: "#22C55E",
    },
    {
      step: "03",
      title: "Review Process",
      description:
        "Our team reviews your application and verifies information.",
      color: "#8b5cf6",
    },
    {
      step: "04",
      title: "Approval & Onboarding",
      description:
        "Upon approval, complete onboarding and gain access to member benefits.",
      color: "#f59e0b",
    },
  ];

  const benefitsGroups = [
    {
      title: "Networking & Events",
      icon: Globe,
      color: "#2563EB",
      items: [
        "Exclusive member-only events",
        "Networking sessions with industry leaders",
        "Annual UK\u2013Pakistan Business Summit access",
        "Regional meetups and workshops",
      ],
    },
    {
      title: "Platform & Resources",
      icon: Zap,
      color: "#22C55E",
      items: [
        "Member portal access",
        "Industry reports and insights",
        "Market research and analysis",
        "Resource library and tools",
      ],
    },
    {
      title: "Partnership & Collaboration",
      icon: Shield,
      color: "#8b5cf6",
      items: [
        "Partnership matching services",
        "Cross-border collaboration opportunities",
        "Strategic partnership facilitation",
        "Joint venture support",
      ],
    },
    {
      title: "Recognition & Visibility",
      icon: Star,
      color: "#f59e0b",
      items: [
        "Company profile on UPTECH platform",
        "Thought leadership opportunities",
        "Awards and recognition programs",
        "Media and press opportunities",
      ],
    },
  ];

  return (
    <div>
      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION - Custom full-width with glassmorphism
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/image/london-images/partnership-collaboration.jpg"
          alt="UK Pakistan Tech Council partnership and collaboration"
          fill
          className="object-cover"
          priority
          quality={90}
        />

        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A]/90 via-[#0B0F1A]/80 to-[#0B0F1A]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/10 via-transparent to-[#8b5cf6]/10" />

        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={gridPatternStyle}
        />

        {/* Corner glow effects */}
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle at 0% 0%, #2563EB, transparent 50%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle at 100% 100%, #8b5cf6, transparent 50%)",
          }}
        />

        {/* Horizontal scan lines */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)", backgroundSize: "100% 4px" }} />

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Label badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60">
                Join Our Network
              </span>
            </motion.div>

            {/* Main title with gradient text */}
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] mb-6">
              <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                Become a
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#2563EB] via-[#8b5cf6] to-[#22C55E] bg-clip-text text-transparent">
                Member
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-10"
            >
              Join a trusted network shaping the future of UK\u2013Pakistan
              technology collaboration.
            </motion.p>

            {/* Glass morphism CTA buttons */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="#membership-form"
                className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-heading font-bold text-sm text-white bg-gradient-to-r from-[#2563EB] to-[#1a4fd4] hover:from-[#3b82f6] hover:to-[#2563EB] transition-all duration-300 shadow-[0_4px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_40px_rgba(37,99,235,0.45)]"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
              <a
                href="#tiers"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-heading font-bold text-sm text-white/70 border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.08] hover:text-white hover:border-white/20 transition-all duration-300"
              >
                View Tiers
              </a>
            </motion.div>
          </motion.div>

          {/* Bottom decorative line */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-16 mx-auto w-48 h-px bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent"
          />
        </div>

        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0F1A] to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          APPLICATION FORM SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section id="membership-form" className="relative bg-[#0B0F1A] overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={gridPatternStyle} />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle at 100% 0%, #2563EB, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <AnimatedSection>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
              {/* Left column - info */}
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-7 h-7 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
                    <Send className="w-3.5 h-3.5 text-[#2563EB]" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB]">
                    Apply Now
                  </span>
                </div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] text-white mb-4">
                  Membership{" "}
                  <span className="bg-gradient-to-r from-[#2563EB] to-[#8b5cf6] bg-clip-text text-transparent">
                    Application
                  </span>
                </h2>
                <div className="h-px bg-gradient-to-r from-white/10 to-transparent mb-6" />
                <p className="text-white/40 text-sm leading-relaxed mb-8">
                  Fill in your details and our team will review your application
                  within 3\u20135 business days.
                </p>

                {/* Steps */}
                <div className="space-y-5">
                  {[
                    { step: "01", text: "Submit your application below", color: "#2563EB" },
                    { step: "02", text: "Our team reviews your profile", color: "#22C55E" },
                    { step: "03", text: "Receive approval & onboard", color: "#8b5cf6" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                        style={{
                          backgroundColor: `${item.color}15`,
                          border: `1px solid ${item.color}30`,
                          color: item.color,
                        }}
                      >
                        {item.step}
                      </div>
                      <span className="text-sm text-white/50 leading-relaxed pt-1.5">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column - form */}
              <MembershipForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          KEY BENEFITS SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#0E1221] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={gridPatternStyle} />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle at 0% 100%, #22C55E, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <AnimatedSection>
            {/* Section header */}
            <div className="mb-16">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-7 h-7 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center">
                  <Star className="w-3.5 h-3.5 text-[#22C55E]" />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#22C55E]">
                  Why Join
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] text-white mb-4">
                Key{" "}
                <span className="bg-gradient-to-r from-[#22C55E] to-[#2563EB] bg-clip-text text-transparent">
                  Benefits
                </span>
              </h2>
              <div className="h-px bg-gradient-to-r from-white/10 to-transparent max-w-md mb-4" />
              <p className="text-white/40 text-sm leading-relaxed max-w-xl">
                Unlock opportunities to connect, grow, and lead in the
                UK\u2013Pakistan technology ecosystem.
              </p>
            </div>

            {/* Benefits grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: 20 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="relative h-full bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.12]">
                      {/* Icon glow */}
                      <div
                        className="absolute top-6 left-6 w-16 h-16 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                        style={{ backgroundColor: `${benefit.color}20` }}
                      />
                      <div
                        className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                        style={{
                          backgroundColor: `${benefit.color}12`,
                          border: `1px solid ${benefit.color}25`,
                        }}
                      >
                        <Icon
                          className="w-5 h-5"
                          style={{ color: benefit.color }}
                        />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-white mb-2">
                        {benefit.title}
                      </h3>
                      <div className="h-px bg-white/[0.06] mb-3" />
                      <p className="text-sm text-white/40 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ELIGIBILITY SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#0B0F1A] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={gridPatternStyle} />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <AnimatedSection>
            <div className="mb-16">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-7 h-7 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-[#8b5cf6]" />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8b5cf6]">
                  Criteria
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] text-white mb-4">
                Eligibility
              </h2>
              <div className="h-px bg-gradient-to-r from-white/10 to-transparent max-w-md mb-4" />
              <p className="text-white/40 text-sm leading-relaxed">
                Who can become a UPTECH member.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {eligibilityPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, x: -16 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                  </div>
                  <span className="text-base text-white/60 leading-relaxed pt-1">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHO CAN JOIN SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#131942] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={gridPatternStyle} />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle at 100% 0%, #8b5cf6, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <AnimatedSection>
            <div className="mb-16">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-7 h-7 rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center">
                  <Users className="w-3.5 h-3.5 text-[#f59e0b]" />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#f59e0b]">
                  Open To
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] text-white mb-4">
                Who Can{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] to-[#C41E3A] bg-clip-text text-transparent">
                  Join
                </span>
              </h2>
              <div className="h-px bg-gradient-to-r from-white/10 to-transparent max-w-md mb-4" />
              <p className="text-white/40 text-sm leading-relaxed">
                Membership is open to a diverse range of stakeholders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whoCanJoin.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: 20 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-px">
                      <div className="w-full h-full rounded-2xl bg-[#131942]" />
                    </div>

                    <div className="relative h-full bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.12]">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                        style={{
                          backgroundColor: `${item.color}12`,
                          border: `1px solid ${item.color}25`,
                        }}
                      >
                        <Icon
                          className="w-5 h-5"
                          style={{ color: item.color }}
                        />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-white mb-2">
                        {item.title}
                      </h3>
                      <div
                        className="h-px mb-3"
                        style={{
                          background: `linear-gradient(to right, ${item.color}30, transparent)`,
                        }}
                      />
                      <p className="text-sm text-white/40 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MEMBERSHIP TIERS SECTION - SPECTACULAR
      ═══════════════════════════════════════════════════════════════ */}
      <section id="tiers" className="relative bg-[#0B0F1A] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={gridPatternStyle} />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, #2563EB, transparent 50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
                  Tiers
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] text-white mb-4">
                Membership Tiers &{" "}
                <span className="bg-gradient-to-r from-[#2563EB] via-[#8b5cf6] to-[#22C55E] bg-clip-text text-transparent">
                  Benefits
                </span>
              </h2>
              <div className="mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent mb-4" />
              <p className="text-white/40 text-sm leading-relaxed max-w-xl mx-auto">
                Choose the membership tier that best fits your organisation and
                goals.
              </p>
            </div>

            {/* Tiers grid - first row: Strategic Partner + Corporate + SME, second row: Startup + Government */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {membershipTiers.slice(0, 3).map((tier, index) => (
                <TierCard
                  key={index}
                  tier={tier}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-[calc(66.666%+0.75rem)] mx-auto">
              {membershipTiers.slice(3).map((tier, index) => (
                <TierCard
                  key={index + 3}
                  tier={tier}
                  index={index + 3}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PROCEDURE SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#0E1221] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={gridPatternStyle} />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <AnimatedSection>
            <div className="mb-16">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-7 h-7 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center">
                  <Target className="w-3.5 h-3.5 text-[#22C55E]" />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#22C55E]">
                  Process
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] text-white mb-4">
                Membership{" "}
                <span className="bg-gradient-to-r from-[#22C55E] to-[#2563EB] bg-clip-text text-transparent">
                  Procedure
                </span>
              </h2>
              <div className="h-px bg-gradient-to-r from-white/10 to-transparent max-w-md mb-4" />
              <p className="text-white/40 text-sm leading-relaxed">
                A straightforward process to join UPTECH.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {procedureSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 20 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="group relative"
                >
                  <div className="relative h-full bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.12]">
                    {/* Numbered circle with glow */}
                    <div className="relative mb-6">
                      <div
                        className="absolute inset-0 w-14 h-14 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                        style={{ backgroundColor: step.color }}
                      />
                      <div
                        className="relative w-14 h-14 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: `${step.color}12`,
                          border: `2px solid ${step.color}35`,
                          boxShadow: `0 0 20px ${step.color}15`,
                        }}
                      >
                        <span
                          className="text-xl font-heading font-bold"
                          style={{ color: step.color }}
                        >
                          {step.step}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-white mb-2">
                      {step.title}
                    </h3>
                    <div
                      className="h-px mb-3"
                      style={{
                        background: `linear-gradient(to right, ${step.color}30, transparent)`,
                      }}
                    />
                    <p className="text-sm text-white/40 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Connecting arrow for non-last items */}
                    {index < procedureSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 -right-3 z-10">
                        <ArrowRight
                          className="w-5 h-5 text-white/10"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          COMPLETE BENEFITS OVERVIEW
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#131942] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={gridPatternStyle} />
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle at 0% 0%, #2563EB, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle at 100% 100%, #22C55E, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl mb-6">
                <Award className="w-3.5 h-3.5 text-[#8b5cf6]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
                  Benefits
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] text-white mb-4">
                Complete Benefits{" "}
                <span className="bg-gradient-to-r from-[#8b5cf6] to-[#2563EB] bg-clip-text text-transparent">
                  Overview
                </span>
              </h2>
              <div className="mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/40 to-transparent mb-4" />
              <p className="text-white/40 text-sm leading-relaxed max-w-xl mx-auto">
                Comprehensive benefits available to all UPTECH members.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefitsGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <motion.div
                    key={index}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: 20 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="relative h-full bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.12]">
                      {/* Top color accent bar */}
                      <div
                        className="absolute top-0 left-6 right-6 h-px"
                        style={{
                          background: `linear-gradient(to right, transparent, ${group.color}30, transparent)`,
                        }}
                      />

                      <div className="flex items-center gap-3 mb-5">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            backgroundColor: `${group.color}12`,
                            border: `1px solid ${group.color}25`,
                          }}
                        >
                          <Icon
                            className="w-4 h-4"
                            style={{ color: group.color }}
                          />
                        </div>
                        <h3 className="font-heading font-bold text-lg text-white">
                          {group.title}
                        </h3>
                      </div>

                      <div className="h-px bg-white/[0.06] mb-5" />

                      <ul className="space-y-3.5">
                        {group.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2
                              className="w-4 h-4 flex-shrink-0 mt-0.5"
                              style={{ color: group.color }}
                            />
                            <span className="text-sm text-white/50 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#0B0F1A] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={gridPatternStyle} />

        {/* Central glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-[0.08]"
          style={{
            background:
              "radial-gradient(ellipse, #2563EB, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <AnimatedSection>
            <div className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-12 lg:p-16 backdrop-blur-sm overflow-hidden">
              {/* Card inner glows */}
              <div
                className="absolute top-0 left-0 w-64 h-64 opacity-[0.06]"
                style={{
                  background:
                    "radial-gradient(circle at 0% 0%, #2563EB, transparent 50%)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.06]"
                style={{
                  background:
                    "radial-gradient(circle at 100% 100%, #22C55E, transparent 50%)",
                }}
              />

              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

              <div className="relative max-w-2xl">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#22C55E]">
                    Apply Today
                  </span>
                </div>

                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] text-white mb-5">
                  Ready to Join{" "}
                  <span className="bg-gradient-to-r from-[#2563EB] to-[#22C55E] bg-clip-text text-transparent">
                    UPTECH?
                  </span>
                </h2>

                <div className="h-px bg-gradient-to-r from-white/10 to-transparent mb-6" />

                <p className="text-lg text-white/40 leading-relaxed mb-10 max-w-xl">
                  Apply for membership today and become part of a trusted
                  network shaping the future of UK\u2013Pakistan technology
                  collaboration.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    href={siteConfig.portalUrl}
                    variant="primary"
                    size="lg"
                    showArrow
                    className="!bg-gradient-to-r !from-[#2563EB] !to-[#1a4fd4] hover:!from-[#3b82f6] hover:!to-[#2563EB] !shadow-[0_4px_30px_rgba(37,99,235,0.3)] hover:!shadow-[0_8px_40px_rgba(37,99,235,0.45)]"
                  >
                    Apply for Membership
                  </Button>
                  <Button href="/contact" variant="glass" size="lg">
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TIER CARD COMPONENT
═══════════════════════════════════════════════════════════════ */

function TierCard({
  tier,
  index,
  shouldReduceMotion,
}: {
  tier: {
    name: string;
    highlight: boolean;
    description: string;
    features: string[];
  };
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  const tierColors: Record<string, string> = {
    "Strategic Partner": "#2563EB",
    Corporate: "#22C55E",
    SME: "#8b5cf6",
    "Startup / Associate": "#f59e0b",
    "Government / Institutional": "#C41E3A",
  };

  const color = tierColors[tier.name] || "#2563EB";

  return (
    <motion.div
      initial={
        shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Animated gradient border for Strategic Partner */}
      {tier.highlight && (
        <>
          {/* Outer glow */}
          <div
            className="absolute -inset-[1px] rounded-2xl opacity-60"
            style={{
              background: `linear-gradient(135deg, #2563EB, #8b5cf6, #22C55E, #2563EB)`,
              backgroundSize: "300% 300%",
              animation: "gradient-shift 4s ease infinite",
            }}
          />
          {/* Blue glow effect */}
          <div
            className="absolute -inset-2 rounded-3xl blur-xl opacity-20"
            style={{ backgroundColor: "#2563EB" }}
          />
        </>
      )}

      <div
        className={`relative h-full rounded-2xl p-7 flex flex-col backdrop-blur-sm transition-all duration-500 ${
          tier.highlight
            ? "bg-[#0B0F1A] border-2 border-[#2563EB]/50 shadow-[0_0_40px_rgba(37,99,235,0.15)]"
            : "bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12]"
        }`}
      >
        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
          style={{
            background: tier.highlight
              ? `linear-gradient(90deg, #2563EB, #8b5cf6, #22C55E)`
              : `linear-gradient(90deg, transparent, ${color}40, transparent)`,
          }}
        />

        {/* Highlight badge */}
        {tier.highlight && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 mb-4 self-start">
            <Star className="w-3 h-3 text-[#2563EB]" />
            <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#2563EB]">
              Recommended
            </span>
          </div>
        )}

        <h3
          className="font-heading font-bold text-xl mb-2"
          style={{ color: tier.highlight ? "white" : color }}
        >
          {tier.name}
        </h3>
        <p className="text-sm text-white/40 mb-5 leading-relaxed">
          {tier.description}
        </p>

        <div
          className="h-px mb-5"
          style={{
            background: tier.highlight
              ? "linear-gradient(to right, rgba(37,99,235,0.3), transparent)"
              : `linear-gradient(to right, ${color}20, transparent)`,
          }}
        />

        <ul className="space-y-3 flex-1 mb-7">
          {tier.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm">
              <CheckCircle2
                className="w-4 h-4 flex-shrink-0 mt-0.5"
                style={{ color: tier.highlight ? "#22C55E" : color }}
              />
              <span className="text-white/50">{feature}</span>
            </li>
          ))}
        </ul>

        {tier.highlight ? (
          <a
            href="#membership-form"
            className="group/btn relative inline-flex items-center justify-center gap-2.5 w-full px-7 py-3.5 rounded-xl font-heading font-bold text-sm text-white bg-gradient-to-r from-[#2563EB] to-[#1a4fd4] hover:from-[#3b82f6] hover:to-[#2563EB] transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)]"
          >
            Apply Now
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
          </a>
        ) : (
          <a
            href="#membership-form"
            className="inline-flex items-center justify-center gap-2.5 w-full px-7 py-3.5 rounded-xl font-heading font-bold text-sm border border-white/10 text-white/60 bg-white/[0.03] hover:bg-white/[0.06] hover:text-white hover:border-white/20 transition-all duration-300"
          >
            Apply Now
          </a>
        )}
      </div>

      {/* Keyframes for animated gradient border */}
      {tier.highlight && (
        <style jsx>{`
          @keyframes gradient-shift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MEMBERSHIP FORM - Dark glass design
═══════════════════════════════════════════════════════════════ */

type FormState = "idle" | "submitting" | "success" | "error";

function MembershipForm() {
  const [state, setState] = useState<FormState>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    jobTitle: "",
    membershipType: "",
    linkedin: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  };

  /* ─── Success state ─── */
  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative overflow-hidden"
      >
        <div className="relative bg-[#0B0F1A] rounded-2xl border border-white/10 overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-[#22C55E] via-[#2563EB] to-[#22C55E]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={gridPatternStyle}
          />

          <div className="relative px-10 py-20 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="relative inline-flex items-center justify-center mb-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: [0, 0.6, 0.3],
                  scale: [0.5, 1.2, 1],
                }}
                transition={{ delay: 0.4, duration: 1.2 }}
                className="absolute w-24 h-24 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)",
                }}
              />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#22C55E]/20 to-[#22C55E]/5 flex items-center justify-center border border-[#22C55E]/30 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                <CheckCircle2
                  className="w-8 h-8 text-[#22C55E]"
                  strokeWidth={1.8}
                />
              </div>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="font-heading font-bold text-2xl text-white mb-3"
            >
              Application Received
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="text-white/50 text-sm leading-relaxed max-w-sm mx-auto"
            >
              Thank you for applying. Our team will review your application and
              be in touch within 3\u20135 business days.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-[#22C55E]/40 to-transparent"
            />
          </div>
        </div>
      </motion.div>
    );
  }

  /* ─── Form state ─── */
  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden"
    >
      <div className="relative bg-[#0B0F1A] rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/20">
        {/* Top gradient accent */}
        <div className="h-1 w-full bg-gradient-to-r from-[#2563EB] via-[#8b5cf6] to-[#2563EB]" />

        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={gridPatternStyle}
        />

        {/* Corner glow */}
        <div
          className="absolute top-0 right-0 w-64 h-64 opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle at 100% 0%, #2563EB, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle at 0% 100%, #8b5cf6, transparent 60%)",
          }}
        />

        {/* ─── Personal Details Section ─── */}
        <div className="relative px-7 pt-8 pb-2">
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2.5 mb-6"
          >
            <div className="w-6 h-6 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
              <User className="w-3 h-3 text-[#2563EB]" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
              Personal Details
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="mem-name"
                className={`block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 transition-colors duration-300 ${
                  focusedField === "name" ? "text-[#2563EB]" : "text-white/40"
                }`}
              >
                Full Name <span className="text-[#C41E3A]">*</span>
              </label>
              <div className="relative group">
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                    focusedField === "name"
                      ? "shadow-[0_0_20px_rgba(37,99,235,0.15)]"
                      : ""
                  }`}
                />
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-full transition-all duration-300 ${
                    focusedField === "name"
                      ? "bg-[#2563EB] opacity-100"
                      : "bg-transparent opacity-0"
                  }`}
                />
                <User
                  className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                    focusedField === "name"
                      ? "text-[#2563EB]"
                      : "text-white/20"
                  }`}
                />
                <input
                  id="mem-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="relative w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#2563EB]/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-[#2563EB]/20"
                />
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="mem-email"
                className={`block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 transition-colors duration-300 ${
                  focusedField === "email" ? "text-[#2563EB]" : "text-white/40"
                }`}
              >
                Email Address <span className="text-[#C41E3A]">*</span>
              </label>
              <div className="relative group">
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                    focusedField === "email"
                      ? "shadow-[0_0_20px_rgba(37,99,235,0.15)]"
                      : ""
                  }`}
                />
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-full transition-all duration-300 ${
                    focusedField === "email"
                      ? "bg-[#2563EB] opacity-100"
                      : "bg-transparent opacity-0"
                  }`}
                />
                <Mail
                  className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                    focusedField === "email"
                      ? "text-[#2563EB]"
                      : "text-white/20"
                  }`}
                />
                <input
                  id="mem-email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="relative w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#2563EB]/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-[#2563EB]/20"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section divider */}
        <div className="mx-7 my-5">
          <div className="h-px bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent" />
        </div>

        {/* ─── Organisation Details Section ─── */}
        <div className="relative px-7 pb-2">
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2.5 mb-6"
          >
            <div className="w-6 h-6 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center">
              <Building2 className="w-3 h-3 text-[#22C55E]" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
              Organisation Details
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Phone */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="mem-phone"
                className={`block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 transition-colors duration-300 ${
                  focusedField === "phone"
                    ? "text-[#22C55E]"
                    : "text-white/40"
                }`}
              >
                Phone Number
              </label>
              <div className="relative group">
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-full transition-all duration-300 ${
                    focusedField === "phone"
                      ? "bg-[#22C55E] opacity-100"
                      : "bg-transparent opacity-0"
                  }`}
                />
                <Phone
                  className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                    focusedField === "phone"
                      ? "text-[#22C55E]"
                      : "text-white/20"
                  }`}
                />
                <input
                  id="mem-phone"
                  name="phone"
                  type="tel"
                  placeholder="+44 7000 000000"
                  value={form.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className="relative w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#22C55E]/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-[#22C55E]/20"
                />
              </div>
            </motion.div>

            {/* Organisation */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="mem-organisation"
                className={`block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 transition-colors duration-300 ${
                  focusedField === "organisation"
                    ? "text-[#22C55E]"
                    : "text-white/40"
                }`}
              >
                Organisation
              </label>
              <div className="relative group">
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-full transition-all duration-300 ${
                    focusedField === "organisation"
                      ? "bg-[#22C55E] opacity-100"
                      : "bg-transparent opacity-0"
                  }`}
                />
                <Building2
                  className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                    focusedField === "organisation"
                      ? "text-[#22C55E]"
                      : "text-white/20"
                  }`}
                />
                <input
                  id="mem-organisation"
                  name="organisation"
                  type="text"
                  placeholder="Your company or institution"
                  value={form.organisation}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("organisation")}
                  onBlur={() => setFocusedField(null)}
                  className="relative w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#22C55E]/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-[#22C55E]/20"
                />
              </div>
            </motion.div>

            {/* Job Title */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="mem-jobTitle"
                className={`block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 transition-colors duration-300 ${
                  focusedField === "jobTitle"
                    ? "text-[#22C55E]"
                    : "text-white/40"
                }`}
              >
                Job Title / Role
              </label>
              <div className="relative group">
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-full transition-all duration-300 ${
                    focusedField === "jobTitle"
                      ? "bg-[#22C55E] opacity-100"
                      : "bg-transparent opacity-0"
                  }`}
                />
                <Briefcase
                  className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                    focusedField === "jobTitle"
                      ? "text-[#22C55E]"
                      : "text-white/20"
                  }`}
                />
                <input
                  id="mem-jobTitle"
                  name="jobTitle"
                  type="text"
                  placeholder="e.g. CTO, Founder, Director"
                  value={form.jobTitle}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("jobTitle")}
                  onBlur={() => setFocusedField(null)}
                  className="relative w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#22C55E]/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-[#22C55E]/20"
                />
              </div>
            </motion.div>

            {/* Membership Type */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="mem-membershipType"
                className={`block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 transition-colors duration-300 ${
                  focusedField === "membershipType"
                    ? "text-[#22C55E]"
                    : "text-white/40"
                }`}
              >
                Membership Type <span className="text-[#C41E3A]">*</span>
              </label>
              <div className="relative group">
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-full transition-all duration-300 ${
                    focusedField === "membershipType"
                      ? "bg-[#22C55E] opacity-100"
                      : "bg-transparent opacity-0"
                  }`}
                />
                <Sparkles
                  className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                    focusedField === "membershipType"
                      ? "text-[#22C55E]"
                      : "text-white/20"
                  }`}
                />
                <ChevronDown
                  className={`absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none transition-colors duration-300 ${
                    focusedField === "membershipType"
                      ? "text-[#22C55E]"
                      : "text-white/15"
                  }`}
                />
                <select
                  id="mem-membershipType"
                  name="membershipType"
                  required
                  value={form.membershipType}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("membershipType")}
                  onBlur={() => setFocusedField(null)}
                  className="relative w-full bg-white/[0.04] border border-white/[0.08] text-white text-sm pl-11 pr-10 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#22C55E]/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-[#22C55E]/20 appearance-none cursor-pointer [&>option]:bg-[#1C1F2E] [&>option]:text-white"
                >
                  <option value="" disabled className="text-white/40">
                    Select a tier
                  </option>
                  <option value="Strategic Partner">Strategic Partner</option>
                  <option value="Corporate">Corporate</option>
                  <option value="SME">SME</option>
                  <option value="Startup / Associate">
                    Startup / Associate
                  </option>
                  <option value="Government / Institutional">
                    Government / Institutional
                  </option>
                </select>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section divider */}
        <div className="mx-7 my-5">
          <div className="h-px bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent" />
        </div>

        {/* ─── LinkedIn & Message Section ─── */}
        <div className="relative px-7 pb-7">
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2.5 mb-6"
          >
            <div className="w-6 h-6 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center">
              <MessageSquare className="w-3 h-3 text-[#8b5cf6]" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
              Additional Information
            </span>
          </motion.div>

          {/* LinkedIn */}
          <motion.div variants={itemVariants} className="mb-5">
            <label
              htmlFor="mem-linkedin"
              className={`block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 transition-colors duration-300 ${
                focusedField === "linkedin"
                  ? "text-[#8b5cf6]"
                  : "text-white/40"
              }`}
            >
              LinkedIn Profile URL
            </label>
            <div className="relative group">
              <div
                className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-full transition-all duration-300 ${
                  focusedField === "linkedin"
                    ? "bg-[#8b5cf6] opacity-100"
                    : "bg-transparent opacity-0"
                }`}
              />
              <Linkedin
                className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                  focusedField === "linkedin"
                    ? "text-[#8b5cf6]"
                    : "text-white/20"
                }`}
              />
              <input
                id="mem-linkedin"
                name="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/yourprofile"
                value={form.linkedin}
                onChange={handleChange}
                onFocus={() => setFocusedField("linkedin")}
                onBlur={() => setFocusedField(null)}
                className="relative w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#8b5cf6]/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-[#8b5cf6]/20"
              />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants}>
            <label
              htmlFor="mem-message"
              className={`block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 transition-colors duration-300 ${
                focusedField === "message"
                  ? "text-[#8b5cf6]"
                  : "text-white/40"
              }`}
            >
              Why do you want to join UPTECH?{" "}
              <span className="text-[#C41E3A]">*</span>
            </label>
            <div className="relative group">
              <div
                className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                  focusedField === "message"
                    ? "shadow-[0_0_20px_rgba(139,92,246,0.1)]"
                    : ""
                }`}
              />
              <div
                className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-full transition-all duration-300 ${
                  focusedField === "message"
                    ? "bg-[#8b5cf6] opacity-100"
                    : "bg-transparent opacity-0"
                }`}
              />
              <MessageSquare
                className={`absolute left-3.5 top-4 w-4 h-4 transition-colors duration-300 ${
                  focusedField === "message"
                    ? "text-[#8b5cf6]"
                    : "text-white/20"
                }`}
              />
              <textarea
                id="mem-message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about yourself and your interest in the UK\u2013Pakistan tech ecosystem..."
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className="relative w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#8b5cf6]/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-[#8b5cf6]/20 resize-none"
              />
            </div>
          </motion.div>
        </div>

        {/* ─── Footer ─── */}
        <motion.div
          variants={itemVariants}
          className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/[0.06] bg-white/[0.02] px-7 py-5"
        >
          <p className="text-[11px] text-white/30 leading-relaxed max-w-xs">
            We review all applications within 3\u20135 business days.{" "}
            <span className="text-[#C41E3A]">*</span> Required fields.
          </p>
          <button
            type="submit"
            disabled={state === "submitting"}
            className="group relative shrink-0 inline-flex items-center gap-2.5 px-7 py-3 rounded-xl font-heading font-bold text-sm text-white bg-gradient-to-r from-[#2563EB] to-[#1a4fd4] hover:from-[#3b82f6] hover:to-[#2563EB] transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state === "submitting" ? (
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                  }}
                  className="inline-block w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full"
                />
                Submitting...
              </span>
            ) : (
              <>
                Submit Application
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </>
            )}
          </button>
        </motion.div>
      </div>
    </motion.form>
  );
}
