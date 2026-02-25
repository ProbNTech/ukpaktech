"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { CheckCircle2, Users, Crown, Briefcase, Shield, Target, Award, Network, BookOpen, Building2, Layers, ArrowRight } from "lucide-react";

const orgChart = [
  {
    title: "Chairman",
    icon: Crown,
    level: "Executive Leadership",
    responsibilities: [
      "Provide strategic direction and vision for UPTECH",
      "Chair Board meetings and ensure effective governance",
      "Represent UPTECH at the highest levels with governments and international bodies",
      "Approve major partnerships, initiatives, and strategic decisions",
      "Serve as the principal ambassador for the Council",
    ],
  },
  {
    title: "Chief Executive Officer (CEO)",
    icon: Target,
    level: "Executive Leadership",
    responsibilities: [
      "Lead day-to-day operations and strategic execution",
      "Manage organisational resources and financial performance",
      "Drive membership growth and stakeholder engagement",
      "Oversee programme delivery and service quality",
      "Report to the Board on organisational performance and progress",
      "Build and maintain key relationships with partners and sponsors",
    ],
  },
  {
    title: "Senior Vice President (SVP)",
    icon: Award,
    level: "Senior Management",
    responsibilities: [
      "Support the CEO in strategic planning and execution",
      "Oversee multiple departments and cross-functional initiatives",
      "Lead special projects and bilateral programme delivery",
      "Deputise for the CEO when required",
      "Ensure alignment between departments and strategic objectives",
    ],
  },
  {
    title: "Vice President (VP)",
    icon: Briefcase,
    level: "Senior Management",
    responsibilities: [
      "Manage specific functional areas and departmental operations",
      "Lead team development and capacity building",
      "Drive innovation and process improvement within departments",
      "Coordinate with other VPs for cross-departmental collaboration",
      "Report on departmental performance and milestones",
    ],
  },
  {
    title: "President",
    icon: Shield,
    level: "Governance",
    responsibilities: [
      "Preside over general meetings and member assemblies",
      "Ensure compliance with the Constitution and governance policies",
      "Facilitate democratic decision-making processes",
      "Mediate disputes and ensure fair representation",
      "Serve as a senior ambassador for UPTECH in formal settings",
    ],
  },
  {
    title: "General Secretary",
    icon: BookOpen,
    level: "Operations",
    responsibilities: [
      "Maintain official records, minutes, and documentation",
      "Manage internal and external communications",
      "Coordinate meetings, agendas, and follow-up actions",
      "Ensure compliance with legal and regulatory requirements",
      "Oversee membership records and administrative processes",
    ],
  },
  {
    title: "Treasurer",
    icon: Network,
    level: "Operations",
    responsibilities: [
      "Manage financial accounts and budgets",
      "Oversee financial reporting and audit processes",
      "Ensure transparency and accountability in financial matters",
      "Advise the Board on financial strategy and sustainability",
      "Manage membership fee collection and financial systems",
    ],
  },
  {
    title: "Regional Directors",
    icon: Users,
    level: "Regional Leadership",
    responsibilities: [
      "Lead UPTECH activities and membership engagement in assigned regions",
      "Coordinate local events, meetups, and networking sessions",
      "Identify and develop regional partnerships and opportunities",
      "Report on regional performance and member feedback",
      "Represent UPTECH at regional forums and conferences",
    ],
  },
];

const operatingProcedures = [
  { title: "Board Meetings", desc: "The Board of Directors meets quarterly to review performance, approve budgets, and set strategic direction. Emergency meetings may be called by the Chairman or CEO." },
  { title: "General Assembly", desc: "An Annual General Meeting (AGM) is held for all members to review the year's progress, elect officers, and vote on major resolutions." },
  { title: "Committee Formation", desc: "Standing and ad-hoc committees are formed for specific functions such as events, membership, technology, and governance. Each committee has a defined terms of reference." },
  { title: "Decision Making", desc: "Decisions at Board level require a simple majority. Constitutional amendments require a two-thirds majority at a General Assembly." },
  { title: "Financial Procedures", desc: "All expenditures above a defined threshold require dual authorisation. Annual accounts are independently audited and presented at the AGM." },
  { title: "Membership Processes", desc: "Applications are reviewed within 5 working days. Approved members receive onboarding materials, access to the portal, and are assigned to relevant committees and regional groups." },
];

const levelColors: Record<string, string> = {
  "Executive Leadership": "#2563EB",
  "Senior Management": "#22C55E",
  "Governance": "#8b5cf6",
  "Operations": "#f59e0b",
  "Regional Leadership": "#C41E3A",
};

const procedureColors = ["#2563EB", "#22C55E", "#8b5cf6", "#C41E3A", "#f59e0b", "#2563EB"];

const stats = [
  { value: "8", label: "Leadership Roles" },
  { value: "5", label: "Governance Levels" },
  { value: "6", label: "Operating Procedures" },
  { value: "100%", label: "Transparency" },
];

export default function StructurePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[520px]">
        <Image
          src="/image/london-images/business-operations-desk.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: "linear-gradient(135deg, rgba(10,14,30,0.92) 0%, rgba(10,14,30,0.72) 50%, rgba(10,14,30,0.50) 100%)",
          }}
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 z-[2] opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 pt-20 pb-16">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/60">Governance Framework</span>
            </div>
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-white mb-6 max-w-3xl"
          >
            Structure &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60a5fa]">
              Procedure
            </span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-lg text-white/50 max-w-2xl leading-relaxed mb-10"
          >
            A transparent governance framework that ensures accountability, effectiveness, and member representation at every level.
          </motion.p>

          {/* Stats Bar — Floating glass cards */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-xl p-5 text-center"
              >
                <p className="font-heading font-extrabold text-white text-2xl sm:text-3xl mb-1">{stat.value}</p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Overview — Dark section ────────────────────────────────── */}
      <section className="relative bg-[#0B0F1A] py-16 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-3">Our Framework</p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Organisational Structure
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-transparent mb-4" />
              <p className="text-white/40 text-base max-w-2xl">
                UPTECH operates through a clearly defined hierarchy with defined roles, responsibilities, and reporting lines to ensure effective governance and delivery.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">Governance Model</h3>
                </div>
                <div className="h-px bg-white/[0.06] mb-5" />
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  Our organisational structure combines strategic leadership with operational excellence. Each role has clearly defined responsibilities, and all office bearers are accountable to the Board and the membership through transparent reporting and regular review.
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  The structure ensures that decisions are made collaboratively, resources are managed responsibly, and every member has a voice in the direction of the Council.
                </p>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-[#22C55E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">Governance Levels</h3>
                </div>
                <div className="h-px bg-white/[0.06] mb-5" />
                <div className="space-y-3">
                  {Object.entries(levelColors).map(([level, color]) => (
                    <div key={level} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                      <span className="text-sm text-white/60 font-medium">{level}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Org Chart — Dark alt section ───────────────────────────── */}
      <section className="relative py-16 overflow-hidden" style={{ backgroundColor: "#0E1221" }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "60px 60px" }} />
        {/* Glowing orb accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #2563EB, transparent 60%)" }} />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #8b5cf6, transparent 60%)" }} />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8b5cf6] mb-3">Leadership Roles</p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Key Positions & Responsibilities
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#8b5cf6] to-transparent mb-4" />
              <p className="text-white/40 text-base max-w-xl">
                Each role within UPTECH has defined responsibilities and accountability lines.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {orgChart.map((role, i) => {
                const Icon = role.icon;
                const color = levelColors[role.level] || "#2563EB";
                return (
                  <motion.div
                    key={role.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
                  >
                    {/* Left accent */}
                    <div
                      className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full transition-opacity duration-300 opacity-40 group-hover:opacity-100"
                      style={{ background: `linear-gradient(to bottom, ${color}, ${color}40)` }}
                    />

                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="relative w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${color}10`, border: `1px solid ${color}20` }}
                      >
                        <div
                          className="absolute inset-[-6px] rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"
                          style={{ backgroundColor: color }}
                        />
                        <Icon className="relative z-10 w-5 h-5" style={{ color }} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base text-white">{role.title}</h3>
                        <span
                          className="text-[10px] font-bold tracking-[0.15em] uppercase"
                          style={{ color }}
                        >
                          {role.level}
                        </span>
                      </div>
                    </div>
                    <div className="h-px bg-white/[0.06] mb-4" />
                    <ul className="space-y-2.5">
                      {role.responsibilities.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                          <span className="text-sm text-white/50 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Operating Procedures — Dark section ────────────────────── */}
      <section className="relative bg-[#131942] py-16 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/30 to-transparent" />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.04]" style={{ background: "radial-gradient(circle, #22C55E, transparent 50%)" }} />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#22C55E] mb-3">How We Operate</p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Operating Procedures
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#22C55E] to-transparent mb-4" />
              <p className="text-white/40 text-base max-w-xl">
                Key processes and procedures that ensure transparent and effective operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {operatingProcedures.map((item, i) => {
                const color = procedureColors[i];
                return (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 overflow-hidden"
                  >
                    {/* Top accent */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${color}, ${color}40)` }}
                    />

                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${color}10`, border: `1px solid ${color}20` }}
                    >
                      <span className="text-xs font-bold tabular-nums" style={{ color }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-base text-white mb-2">{item.title}</h3>
                    <div className="h-px bg-white/[0.06] mb-3" />
                    <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA — Gradient dark section ──────────────────────────────── */}
      <section className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, #0B0F1A 0%, #131942 50%, #0B0F1A 100%)" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
        {/* Glow orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05]" style={{ background: "radial-gradient(circle, #2563EB, transparent 50%)" }} />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-4">Get Involved</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Transparent Governance, Collective Impact
              </h2>
              <p className="text-white/40 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
                Our structure ensures every member has a voice. Learn more about how you can contribute to UPTECH&apos;s mission.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/membership" variant="primary" size="lg" showArrow>Become a Member</Button>
                <Button href="/leadership" variant="glass" size="lg" showArrow>Leadership & Governance</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
