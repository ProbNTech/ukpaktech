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
  Briefcase,
  CheckCircle2,
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
  Globe,
  ArrowRight,
  DollarSign,
  Lightbulb,
  Eye,
  Megaphone,
  Rocket,
  BadgePercent,
  MapPin,
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

  const membershipBenefits = [
    {
      icon: Globe,
      title: "Industry Access",
      description:
        "Engage with key decision-makers, regulators, and thought leaders across the UK, Europe and Pakistan.",
      color: "#2563EB",
    },
    {
      icon: Network,
      title: "Networking & Collaboration",
      description:
        "Connect with startups, scale-ups, corporates, and accelerators.",
      color: "#22C55E",
    },
    {
      icon: Eye,
      title: "Market Visibility",
      description:
        "Promote your products, services, and solutions through Council channels, digital campaigns, and cross-border events.",
      color: "#8b5cf6",
    },
    {
      icon: DollarSign,
      title: "Funding & Investment Support",
      description:
        "Receive guidance and access to startup funding, Series A and B investment, and accelerator programs.",
      color: "#f59e0b",
    },
    {
      icon: Users,
      title: "Talent & Employment Opportunities",
      description:
        "Leverage overseas contract employment programs to access global tech talent.",
      color: "#C41E3A",
    },
    {
      icon: Lightbulb,
      title: "Thought Leadership",
      description:
        "Position your organisation as a leader in technology through speaking opportunities, published insights, and policy engagement.",
      color: "#2563EB",
    },
    {
      icon: Building2,
      title: "Business Incubation Centres",
      description:
        "Members have access to shared boardrooms, office space, and other resources in our London office. Additional fees may apply.",
      color: "#22C55E",
    },
    {
      icon: Megaphone,
      title: "Sponsorships",
      description:
        "To increase exposure in both markets and demonstrate commitment to the bilateral relationship, CCBC offers sponsorship opportunities exclusive to our member companies.",
      color: "#8b5cf6",
    },
  ];

  const suitableFor = [
    "Technology companies (SMEs and large enterprises)",
    "Innovation centres and incubators",
    "Investors and venture funds",
    "Government agencies and public sector bodies",
    "Academic and research institution",
  ];

  const whoShouldJoin = [
    {
      icon: Rocket,
      title: "Startups & Scale-ups",
      description:
        "Access funding, mentorship, market entry support, and collaboration opportunities.",
      color: "#2563EB",
    },
    {
      icon: Briefcase,
      title: "SMEs & Technology Firms",
      description:
        "Grow your network, promote solutions, and explore cross-border opportunities.",
      color: "#22C55E",
    },
    {
      icon: TrendingUp,
      title: "Corporates & Investors",
      description:
        "Discover high-potential startups, engage in partnerships, and participate in innovation programs",
      color: "#f59e0b",
    },
  ];

  const whoCanBecomeMembers = [
    "IT Professionals with computer and related education",
    "12+ education and graduation in any field for support service professionals",
    "Contract and consulting employees",
    "AI/IT professionals or freelancers",
    "Functional and related industry professionals",
    "IT enabled support Services providers",
    "Students: IT, management and related fields",
  ];

  const eligibilityMethods = [
    {
      title: "By Nomination",
      description:
        "Any Pakistani IT professional or student residing in Pakistan and UK shall be eligible to hold the membership status of UPTECH.",
      color: "#2563EB",
    },
    {
      title: "Nominated by two Existing Members",
      description:
        "Referrals will be reviewed by the UPTECH team to ensure alignment with UPTECH values.",
      color: "#22C55E",
    },
    {
      title: "By Application",
      description:
        "Holding the title: Founder, Chairperson, Managing Director, Managing Partner, C-Suite or equivalent title: Age criterion: 30 \u2013 55 years Revenue: USD 1 million or above",
      color: "#8b5cf6",
    },
  ];

  const membershipTiers = [
    {
      name: "Chairman\u2019s Circle Membership",
      highlight: true,
      description:
        "For established corporates, venture capitalists, and institutional investors",
      features: [
        "Access to senior-level members of UPTECH",
        "A seat on UPTECH board of directors",
        "Priority invitations to CEO-level briefings and bilateral meetings",
        "Leadership opportunities in executive trade missions, annual meetings, and events",
        "Increased visibility for company branding",
        "Participation in setting Council\u2019s advocacy goals and strategic planning",
        "Advocacy assistance to resolve company-specific trade or investment issues",
        "All Corporate Membership benefits listed below",
      ],
    },
    {
      name: "Corporate Membership",
      highlight: false,
      description:
        "Any Company, Corporation, Firm, Concern or other legal business entity in UK and Pakistan actively engaged in the AI & Information Technology industry",
      features: [
        "Participation on the Council\u2019s policy task forces",
        "Assistance with securing appointments for company executives visiting UK",
        "Opportunities to participate in Council members-only events, executive trade missions, and briefings",
        "Policy papers and sector-specific advocacy updates",
        "UPTECH economy and policy updates",
      ],
    },
    {
      name: "SME / Scale-up Membership",
      highlight: false,
      description: "For growing technology businesses",
      features: [
        "Full access to industry forums, funding opportunities, overseas contract programs, and marketing support",
        "Inclusion in cross-border collaborations and accelerator programs",
      ],
    },
    {
      name: "Startup Membership",
      highlight: false,
      description: "Designed for early-stage technology companies",
      features: [
        "Access to funding programs, SME Connect, and digital promotion channels",
        "Participation in networking events and mentorship programs",
      ],
    },
    {
      name: "Associates",
      highlight: false,
      description:
        "Any Company, Association, Council shall apply for membership in the \u2018Associate\u2019 Category.",
      features: [],
    },
    {
      name: "Academic Institutions",
      highlight: false,
      description:
        "Any Institution, Academy, Company, Corporation, Firm actively engaged in Information Technology",
      features: [],
    },
    {
      name: "Individual Membership",
      highlight: false,
      description:
        "Those who are working in advancing the theory or application of Computer Science, Information Technology or other related disciplines.",
      features: [
        "Extensive Networking Opportunities",
        "Collaborate Nationwide",
        "Leadership Development",
        "Stay Ahead in Technology",
        "Share Your Expertise",
        "Fellowships recognition",
      ],
    },
  ];

  const membershipDiscounts = [
    {
      title: "Early-Bird Discount",
      description:
        "Reduced fees for members who join within a specified period.",
      color: "#2563EB",
    },
    {
      title: "Startup & SME Discount",
      description:
        "Special rates for early-stage and small to medium-sized technology businesses.",
      color: "#22C55E",
    },
    {
      title: "Group / Corporate Discount",
      description:
        "Reduced rates for multiple memberships within the same organisation or group.",
      color: "#8b5cf6",
    },
    {
      title: "Cross-Border Collaboration Discount",
      description:
        "Incentives for organisations actively engaging in UK-Pakistan technology partnerships.",
      color: "#f59e0b",
    },
  ];

  const pakistanToUkServices = [
    "Individual Consultations",
    "Government Relations",
    "Partners and Channels",
    "Delegations and Missions",
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
          className="absolute inset-0 opacity-[0.02]"
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
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D8D5CF] bg-white shadow-sm mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60">
                Membership Means Business
              </span>
            </motion.div>

            {/* Main title with gradient text */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] mb-6">
              <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                At UK Pakistan Tech Council,
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#2563EB] via-[#8b5cf6] to-[#22C55E] bg-clip-text text-transparent">
                membership means business.
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-3xl mx-auto mb-10"
            >
              Whether your priorities are to network with the industry and key stakeholders, to help shape policy, or to have access to insights that help your business to grow, UPTECH membership will positively impact your organisation in whatever way matters most to you.
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
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-heading font-bold text-sm text-white/70 border border-[#D8D5CF] bg-white shadow-sm hover:bg-white/[0.08] hover:text-white hover:border-white/20 transition-all duration-300"
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
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#EEECEA] to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          INTRO SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#EEECEA] overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#D8D5CF] bg-white shadow-sm mb-8">
                <Globe className="w-3.5 h-3.5 text-[#2563EB]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5A5F72]">
                  About UPTECH Membership
                </span>
              </div>
              <p className="text-lg sm:text-xl text-[#3D4152] leading-relaxed mb-10">
                UPTECH is a non-governmental, results-focused business council that is committed to your organization&#39;s bilateral success in Technology, business, trade, and investment. We offer a range of both universal as well as custom-built services to our UK and Pakistani corporate members, including on-the-ground UK market support for Pakistani businesses; policy guidelines and regulatory analysis; and one-stop-shop Business Incubation Centre packages.
              </p>

              {/* Suitable For */}
              <div className="mt-12">
                <h3 className="font-heading font-bold text-2xl text-[#1C1F2E] mb-8">
                  Membership is{" "}
                  <span className="bg-gradient-to-r from-[#2563EB] to-[#22C55E] bg-clip-text text-transparent">
                    suitable for
                  </span>
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  {suitableFor.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 1 }
                          : { opacity: 0, y: 12 }
                      }
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="flex items-start gap-3 bg-white border border-[#D8D5CF] rounded-xl p-4 shadow-sm hover:shadow-md hover:border-[#D8D5CF] transition-all duration-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#5A5F72] leading-relaxed">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHO SHOULD JOIN SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='black' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: "40px 40px" }} />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.02]"
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
                  Who Should Join
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] text-[#1C1F2E] mb-4">
                Who Should{" "}
                <span className="bg-gradient-to-r from-[#f59e0b] to-[#C41E3A] bg-clip-text text-transparent">
                  Join
                </span>
              </h2>
              <div className="h-px bg-gradient-to-r from-[#D8D5CF] to-transparent max-w-md mb-4" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {whoShouldJoin.map((item, index) => {
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
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D8D5CF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-px">
                      <div className="w-full h-full rounded-2xl bg-white" />
                    </div>

                    <div className="relative h-full bg-white border border-[#D8D5CF] rounded-2xl p-7 shadow-sm transition-all duration-500 hover:shadow-md hover:border-[#D8D5CF]">
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
                      <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">
                        {item.title}
                      </h3>
                      <div
                        className="h-px mb-3"
                        style={{
                          background: `linear-gradient(to right, ${item.color}30, transparent)`,
                        }}
                      />
                      <p className="text-sm text-[#5A5F72] leading-relaxed">
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
          MEMBERSHIP BENEFITS SECTION (8 items)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#EEECEA] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='black' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: "40px 40px" }} />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.02]"
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
                  Membership Benefits
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] text-[#1C1F2E] mb-4">
                Membership{" "}
                <span className="bg-gradient-to-r from-[#22C55E] to-[#2563EB] bg-clip-text text-transparent">
                  Benefits
                </span>
              </h2>
              <div className="h-px bg-gradient-to-r from-[#D8D5CF] to-transparent max-w-md mb-4" />
            </div>

            {/* Benefits grid - 8 items in 4-col layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {membershipBenefits.map((benefit, index) => {
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
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group relative"
                  >
                    <div className="relative h-full bg-white border border-[#D8D5CF] rounded-2xl p-7 shadow-sm transition-all duration-500 hover:shadow-md hover:border-[#D8D5CF]">
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
                      <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">
                        {benefit.title}
                      </h3>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-sm text-[#5A5F72] leading-relaxed">
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
          MEMBERSHIP TIERS SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section id="tiers" className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='black' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: "40px 40px" }} />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.02]"
          style={{
            background:
              "radial-gradient(circle, #2563EB, transparent 50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#D8D5CF] bg-white shadow-sm mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5A5F72]">
                  Membership Levels
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] text-[#1C1F2E] mb-4">
                Membership Tiers &{" "}
                <span className="bg-gradient-to-r from-[#2563EB] via-[#8b5cf6] to-[#22C55E] bg-clip-text text-transparent">
                  Benefits
                </span>
              </h2>
              <div className="mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent mb-4" />
              <p className="text-[#5A5F72] text-sm leading-relaxed max-w-xl mx-auto">
                Choose the membership tier that best fits your organisation and
                goals.
              </p>
            </div>

            {/* Tiers grid - first row: Chairman's Circle + Corporate + SME/Scale-up, second row: Startup + Associates + Academic */}
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {membershipTiers.slice(3, 6).map((tier, index) => (
                <TierCard
                  key={index + 3}
                  tier={tier}
                  index={index + 3}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
            {/* Individual Membership - centered */}
            <div className="grid md:grid-cols-1 gap-6 max-w-md mx-auto">
              {membershipTiers.slice(6).map((tier, index) => (
                <TierCard
                  key={index + 6}
                  tier={tier}
                  index={index + 6}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ELIGIBILITY SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#EEECEA] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='black' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: "40px 40px" }} />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <AnimatedSection>
            <div className="mb-16">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-7 h-7 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-[#8b5cf6]" />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8b5cf6]">
                  Eligibility
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] text-[#1C1F2E] mb-4">
                Eligibility{" "}
                <span className="bg-gradient-to-r from-[#8b5cf6] to-[#2563EB] bg-clip-text text-transparent">
                  Criteria
                </span>
              </h2>
              <div className="h-px bg-gradient-to-r from-[#D8D5CF] to-transparent max-w-md mb-4" />
            </div>

            {/* Eligibility Methods */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {eligibilityMethods.map((method, index) => (
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
                  className="relative bg-white border border-[#D8D5CF] rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-[#D8D5CF] transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${method.color}40, transparent)`,
                    }}
                  />
                  <h3
                    className="font-heading font-bold text-lg mb-3"
                    style={{ color: method.color }}
                  >
                    {method.title}
                  </h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#5A5F72] leading-relaxed">
                    {method.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Who Can Become Members */}
            <div>
              <h3 className="font-heading font-bold text-2xl text-[#1C1F2E] mb-8">
                Who can become{" "}
                <span className="bg-gradient-to-r from-[#22C55E] to-[#2563EB] bg-clip-text text-transparent">
                  Members
                </span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {whoCanBecomeMembers.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, x: -16 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex items-start gap-4 bg-white border border-[#D8D5CF] rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#D8D5CF] transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                    </div>
                    <span className="text-base text-[#5A5F72] leading-relaxed pt-1">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MEMBERSHIP FEES SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#E8E6E3] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='black' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: "40px 40px" }} />
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.02]"
          style={{
            background:
              "radial-gradient(circle at 0% 0%, #2563EB, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#D8D5CF] bg-white shadow-sm mb-6">
                  <DollarSign className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5A5F72]">
                    Membership Fees
                  </span>
                </div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] text-[#1C1F2E] mb-4">
                  Membership{" "}
                  <span className="bg-gradient-to-r from-[#f59e0b] to-[#C41E3A] bg-clip-text text-transparent">
                    Fees
                  </span>
                </h2>
                <div className="mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent mb-6" />
              </div>

              <div className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 lg:p-10 shadow-sm">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/30 to-transparent" />

                <p className="text-base text-[#3D4152] leading-relaxed mb-6">
                  The UK-Pakistan Tech Council offers flexible membership plans designed to suit technology startups, SMEs, scale-ups, and corporates. Our membership fees provide access to a wealth of benefits, including networking, industry insights, cross-border opportunities, funding support, and promotional platforms.
                </p>

                <div className="relative bg-white/[0.04] border border-[#f59e0b]/20 rounded-xl p-6 mb-6">
                  <p className="text-lg text-[#5A5F72] leading-relaxed font-medium text-center">
                    Invest in your growth. Gain access to cross-border opportunities, funding, and strategic networks.
                  </p>
                </div>

                <p className="text-sm text-[#5A5F72] leading-relaxed">
                  The first step towards membership is always a meeting with our Membership team where we can determine your annual fee. For further information please contact{" "}
                  <a
                    href="mailto:membership@uptech.org.uk"
                    className="text-[#2563EB] hover:text-[#3b82f6] transition-colors underline underline-offset-2"
                  >
                    membership@uptech.org.uk
                  </a>{" "}
                  or complete the online enquiry form and the Membership team will be in touch to set up a meeting.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MEMBERSHIP DISCOUNTS SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#EEECEA] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='black' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: "40px 40px" }} />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.02]"
          style={{
            background:
              "radial-gradient(circle at 100% 100%, #22C55E, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <AnimatedSection>
            <div className="mb-16">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-7 h-7 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center">
                  <BadgePercent className="w-3.5 h-3.5 text-[#22C55E]" />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#22C55E]">
                  Discounts
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] text-[#1C1F2E] mb-4">
                Membership{" "}
                <span className="bg-gradient-to-r from-[#22C55E] to-[#2563EB] bg-clip-text text-transparent">
                  Discounts
                </span>
              </h2>
              <div className="h-px bg-gradient-to-r from-[#D8D5CF] to-transparent max-w-md mb-4" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {membershipDiscounts.map((discount, index) => (
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
                  <div className="relative h-full bg-white border border-[#D8D5CF] rounded-2xl p-7 shadow-sm transition-all duration-500 hover:shadow-md hover:border-[#D8D5CF]">
                    <div
                      className="absolute top-0 left-6 right-6 h-px"
                      style={{
                        background: `linear-gradient(to right, transparent, ${discount.color}30, transparent)`,
                      }}
                    />
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${discount.color}12`,
                          border: `1px solid ${discount.color}25`,
                        }}
                      >
                        <BadgePercent
                          className="w-4 h-4"
                          style={{ color: discount.color }}
                        />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-white">
                        {discount.title}
                      </h3>
                    </div>
                    <div className="h-px bg-[#D8D5CF] mb-4" />
                    <p className="text-sm text-[#5A5F72] leading-relaxed">
                      {discount.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CROSS-BORDER SECTION (Pakistan to UK + UK to Pakistan)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='black' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: "40px 40px" }} />
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.02]"
          style={{
            background:
              "radial-gradient(circle at 0% 0%, #8b5cf6, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.02]"
          style={{
            background:
              "radial-gradient(circle at 100% 100%, #2563EB, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#D8D5CF] bg-white shadow-sm mb-6">
                <MapPin className="w-3.5 h-3.5 text-[#8b5cf6]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5A5F72]">
                  Cross-Border Support
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] text-[#1C1F2E] mb-4">
                Cross-Border{" "}
                <span className="bg-gradient-to-r from-[#8b5cf6] to-[#2563EB] bg-clip-text text-transparent">
                  Market Entry
                </span>
              </h2>
              <div className="mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/40 to-transparent mb-4" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Pakistan Companies entering UK */}
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, x: -20 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-[#D8D5CF] transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-[#22C55E]/40 to-transparent" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#22C55E]/10 border border-[#22C55E]/25">
                    <ArrowRight className="w-4 h-4 text-[#22C55E]" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white">
                    For Pakistan Companies entering UK
                  </h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <p className="text-sm text-[#5A5F72] leading-relaxed mb-6">
                  Launching and maintaining momentum in UK/Europe is key for organizations investing in these regions. UPTECH offers practical solutions for Pakistani organizations entering UK/European that are designed to meet your needs.
                </p>
                <ul className="space-y-3">
                  {pakistanToUkServices.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#22C55E]" />
                      <span className="text-[#3D4152]">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* UK Companies entering Pakistan */}
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, x: 20 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-[#D8D5CF] transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#2563EB]/10 border border-[#2563EB]/25">
                    <ArrowRight className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white">
                    For UK Companies entering Pakistan
                  </h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <p className="text-sm text-[#5A5F72] leading-relaxed">
                  UK/Europe companies entering Pakistani take many forms, such as greenfield investment and technology partnerships. UPTECH is a critical partner when entering Pakistan.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY MEMBERSHIP MATTERS SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#E8E6E3] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='black' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: "40px 40px" }} />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-[0.02]"
          style={{
            background:
              "radial-gradient(ellipse, #22C55E, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#D8D5CF] bg-white shadow-sm mb-8">
                <Award className="w-3.5 h-3.5 text-[#22C55E]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5A5F72]">
                  Why It Matters
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] text-[#1C1F2E] mb-6">
                Why Membership{" "}
                <span className="bg-gradient-to-r from-[#22C55E] to-[#2563EB] bg-clip-text text-transparent">
                  Matters
                </span>
              </h2>
              <div className="mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#22C55E]/40 to-transparent mb-8" />
              <p className="text-lg text-[#3D4152] leading-relaxed">
                Membership with the Council provides more than just networking, it&#39;s a gateway to growth, visibility, and influence in the UK-Pakistan technology corridor. Our members gain practical support, strategic connections, and market insights that accelerate business success and cross-border collaboration. Join today. Connect, grow, and lead the future of UK-Pakistan technology.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          APPLICATION FORM SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section id="membership-form" className="relative bg-[#EEECEA] overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='black' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: "40px 40px" }} />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.02]"
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
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] text-[#1C1F2E] mb-4">
                  Membership{" "}
                  <span className="bg-gradient-to-r from-[#2563EB] to-[#8b5cf6] bg-clip-text text-transparent">
                    Application
                  </span>
                </h2>
                <div className="h-px bg-gradient-to-r from-[#D8D5CF] to-transparent mb-6" />
                <p className="text-[#5A5F72] text-sm leading-relaxed mb-8">
                  Fill in your details and our team will review your application
                  within 3{"\u2013"}5 business days.
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
                      <span className="text-sm text-[#3D4152] leading-relaxed pt-1.5">
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
          CTA SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='black' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: "40px 40px" }} />

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
            <div className="relative bg-white border border-[#D8D5CF] shadow-sm rounded-2xl p-12 lg:p-16 backdrop-blur-sm overflow-hidden">
              {/* Card inner glows */}
              <div
                className="absolute top-0 left-0 w-64 h-64 opacity-[0.02]"
                style={{
                  background:
                    "radial-gradient(circle at 0% 0%, #2563EB, transparent 50%)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.02]"
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
                    Join Today
                  </span>
                </div>

                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.05] text-[#1C1F2E] mb-5">
                  Ready to Join{" "}
                  <span className="bg-gradient-to-r from-[#2563EB] to-[#22C55E] bg-clip-text text-transparent">
                    UPTECH?
                  </span>
                </h2>

                <div className="h-px bg-gradient-to-r from-[#D8D5CF] to-transparent mb-6" />

                <p className="text-lg text-[#5A5F72] leading-relaxed mb-10 max-w-xl">
                  Membership with the Council provides more than just networking, it&#39;s a gateway to growth, visibility, and influence in the UK-Pakistan technology corridor. Join today. Connect, grow, and lead the future of UK-Pakistan technology.
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
    "Chairman\u2019s Circle Membership": "#2563EB",
    "Corporate Membership": "#22C55E",
    "SME / Scale-up Membership": "#8b5cf6",
    "Startup Membership": "#f59e0b",
    Associates: "#C41E3A",
    "Academic Institutions": "#2563EB",
    "Individual Membership": "#22C55E",
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
      {/* Animated gradient border for Chairman's Circle */}
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
            : "bg-white border border-[#D8D5CF] shadow-sm hover:shadow-md hover:border-[#D8D5CF]"
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
              Premium
            </span>
          </div>
        )}

        <h3
          className="font-heading font-bold text-xl mb-2"
          style={{ color: tier.highlight ? "white" : color }}
        >
          {tier.name}
        </h3>
        <p className="text-sm text-[#5A5F72] mb-5 leading-relaxed">
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

        {tier.features.length > 0 && (
          <ul className="space-y-3 flex-1 mb-7">
            {tier.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  style={{ color: tier.highlight ? "#22C55E" : color }}
                />
                <span className="text-[#3D4152]">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {tier.features.length === 0 && <div className="flex-1 mb-7" />}

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
            className="inline-flex items-center justify-center gap-2.5 w-full px-7 py-3.5 rounded-xl font-heading font-bold text-sm border border-[#D8D5CF] text-[#3D4152] bg-[#F5F4F2] hover:bg-[#EEECEA] hover:text-[#1C1F2E] hover:border-[#D8D5CF] transition-all duration-300"
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
        <div className="relative bg-white rounded-2xl border border-[#D8D5CF] overflow-hidden shadow-md">
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
              className="font-heading font-bold text-2xl text-[#1C1F2E] mb-3"
            >
              Application Received
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="text-[#3D4152] text-sm leading-relaxed max-w-sm mx-auto"
            >
              Thank you for applying. Our team will review your application and
              be in touch within 3{"\u2013"}5 business days.
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
      <div className="relative bg-white rounded-2xl border border-[#D8D5CF] overflow-hidden shadow-lg">
        {/* Top gradient accent */}
        <div className="h-1 w-full bg-gradient-to-r from-[#2563EB] via-[#8b5cf6] to-[#2563EB]" />

        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={gridPatternStyle}
        />

        {/* Corner glow */}
        <div
          className="absolute top-0 right-0 w-64 h-64 opacity-[0.02]"
          style={{
            background:
              "radial-gradient(circle at 100% 0%, #2563EB, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.02]"
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
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#7A7E8F]">
              Personal Details
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="mem-name"
                className={`block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 transition-colors duration-300 ${
                  focusedField === "name" ? "text-[#2563EB]" : "text-[#5A5F72]"
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
                      : "text-[#9A9EAF]"
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
                  className="relative w-full bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder-[#9A9EAF] text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#2563EB]/50 focus:bg-[#F5F4F2] focus:ring-1 focus:ring-[#2563EB]/20"
                />
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="mem-email"
                className={`block text-[10px] font-bold tracking-[0.18em] uppercase mb-2.5 transition-colors duration-300 ${
                  focusedField === "email" ? "text-[#2563EB]" : "text-[#5A5F72]"
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
                      : "text-[#9A9EAF]"
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
                  className="relative w-full bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder-[#9A9EAF] text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#2563EB]/50 focus:bg-[#F5F4F2] focus:ring-1 focus:ring-[#2563EB]/20"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section divider */}
        <div className="mx-7 my-5">
          <div className="h-px bg-gradient-to-r from-[#D8D5CF] via-[#E8E6E3] to-transparent" />
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
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#7A7E8F]">
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
                    : "text-[#5A5F72]"
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
                      : "text-[#9A9EAF]"
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
                  className="relative w-full bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder-[#9A9EAF] text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#22C55E]/50 focus:bg-[#F5F4F2] focus:ring-1 focus:ring-[#22C55E]/20"
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
                    : "text-[#5A5F72]"
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
                      : "text-[#9A9EAF]"
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
                  className="relative w-full bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder-[#9A9EAF] text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#22C55E]/50 focus:bg-[#F5F4F2] focus:ring-1 focus:ring-[#22C55E]/20"
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
                    : "text-[#5A5F72]"
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
                      : "text-[#9A9EAF]"
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
                  className="relative w-full bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder-[#9A9EAF] text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#22C55E]/50 focus:bg-[#F5F4F2] focus:ring-1 focus:ring-[#22C55E]/20"
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
                    : "text-[#5A5F72]"
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
                      : "text-[#9A9EAF]"
                  }`}
                />
                <ChevronDown
                  className={`absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none transition-colors duration-300 ${
                    focusedField === "membershipType"
                      ? "text-[#22C55E]"
                      : "text-[#9A9EAF]"
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
                  className="relative w-full bg-white/[0.04] border border-white/[0.08] text-white text-sm pl-11 pr-10 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#22C55E]/50 focus:bg-[#F5F4F2] focus:ring-1 focus:ring-[#22C55E]/20 appearance-none cursor-pointer [[&>option]:bg-[#1C1F2E] [&>option]:text-white>option]:bg-white [[&>option]:bg-[#1C1F2E] [&>option]:text-white>option]:text-[#1C1F2E]"
                >
                  <option value="" disabled className="text-[#5A5F72]">
                    Select a tier
                  </option>
                  <option value="Chairman's Circle Membership">Chairman&#39;s Circle Membership</option>
                  <option value="Corporate Membership">Corporate Membership</option>
                  <option value="SME / Scale-up Membership">SME / Scale-up Membership</option>
                  <option value="Startup Membership">Startup Membership</option>
                  <option value="Associates">Associates</option>
                  <option value="Academic Institutions">Academic Institutions</option>
                  <option value="Individual Membership">Individual Membership</option>
                </select>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section divider */}
        <div className="mx-7 my-5">
          <div className="h-px bg-gradient-to-r from-[#D8D5CF] via-[#E8E6E3] to-transparent" />
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
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#7A7E8F]">
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
                  : "text-[#5A5F72]"
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
                    : "text-[#9A9EAF]"
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
                className="relative w-full bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder-[#9A9EAF] text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#8b5cf6]/50 focus:bg-[#F5F4F2] focus:ring-1 focus:ring-[#8b5cf6]/20"
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
                  : "text-[#5A5F72]"
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
                    : "text-[#9A9EAF]"
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
                className="relative w-full bg-white border border-[#D8D5CF] text-[#1C1F2E] placeholder-[#9A9EAF] text-sm pl-11 pr-4 py-3.5 rounded-xl transition-all duration-300 outline-none focus:border-[#8b5cf6]/50 focus:bg-[#F5F4F2] focus:ring-1 focus:ring-[#8b5cf6]/20 resize-none"
              />
            </div>
          </motion.div>
        </div>

        {/* ─── Footer ─── */}
        <motion.div
          variants={itemVariants}
          className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#D8D5CF] bg-[#F5F4F2] px-7 py-5"
        >
          <p className="text-[11px] text-[#7A7E8F] leading-relaxed max-w-xs">
            We review all applications within 3{"\u2013"}5 business days.{" "}
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
