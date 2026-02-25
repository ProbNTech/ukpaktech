"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import {
  Shield, CheckCircle2, Users, Heart, Scale, Lightbulb,
  BookOpen, Award, Briefcase, MessageCircle, AlertTriangle,
  Gavel, Ban, GraduationCap,
} from "lucide-react";
import { useState } from "react";

const navSections = [
  { id: "principles", label: "Principles" },
  { id: "whatsapp-rules", label: "WhatsApp Rules" },
  { id: "disciplinary", label: "Disciplinary Procedure" },
];

const principles = [
  { icon: Shield, title: "Integrity", description: "Members shall act with honesty, fairness, and transparency in all professional dealings. Upholding truthfulness and sincerity in every interaction with fellow members, partners, and stakeholders." },
  { icon: Users, title: "Respect & Equality", description: "Treat all individuals with dignity and respect regardless of background, nationality, gender, religion, or status. Foster a culture of equality and mutual understanding within the community." },
  { icon: Award, title: "Competence", description: "Maintain and continuously improve professional knowledge and skills. Deliver services and advice only within areas of genuine expertise and seek to raise the standard of the profession." },
  { icon: Heart, title: "Loyalty", description: "Demonstrate loyalty to the Council's mission, values, and objectives. Act in the best interests of UPTECH and the broader Pakistani technology community in the UK." },
  { icon: Scale, title: "Impartiality", description: "Exercise objective and unbiased judgement in all professional matters. Avoid favouritism and ensure decisions are made on merit, evidence, and the best interests of the community." },
  { icon: Lightbulb, title: "Ethical Conduct", description: "Adhere to the highest standards of ethical behaviour in business and personal conduct. Reject corruption, bribery, and any form of dishonest practice." },
  { icon: Ban, title: "Non-discrimination", description: "Actively oppose discrimination in all forms. Ensure equal opportunity and access for all members regardless of ethnicity, age, disability, gender identity, or socioeconomic background." },
  { icon: GraduationCap, title: "Continuous Development", description: "Commit to lifelong learning and professional growth. Stay current with emerging technologies, industry trends, and best practices to contribute meaningfully to the profession." },
  { icon: Briefcase, title: "Professionalism", description: "Maintain the highest standards of professional conduct at all times. Represent UPTECH and the Pakistani technology community with distinction, dignity, and excellence." },
];

const whatsappRules = [
  { number: "01", rule: "All members must maintain a respectful and professional tone in all group communications. Personal attacks, offensive language, or disrespectful behaviour will not be tolerated." },
  { number: "02", rule: "Share only content that is relevant to the group's purpose — technology, innovation, business opportunities, events, and professional development. Avoid unrelated political, religious, or controversial topics." },
  { number: "03", rule: "Do not share unverified news, rumours, or misleading information. Always verify facts before posting and provide credible sources where applicable." },
  { number: "04", rule: "Respect the privacy of all group members. Do not share personal information, screenshots, or conversations from the group without explicit consent from the individuals involved." },
  { number: "05", rule: "No spam, excessive self-promotion, or unsolicited advertising. Members may share business opportunities and achievements in a professional manner with prior approval from group administrators." },
  { number: "06", rule: "Constructive criticism and healthy debate are encouraged; however, all discussions must remain civil and solution-oriented. Avoid arguments, trolling, or provocative behaviour." },
  { number: "07", rule: "Do not forward chain messages, irrelevant videos, memes, or content that does not add value to the group's professional objectives." },
  { number: "08", rule: "Respect the time and attention of other members. Avoid excessive messaging, voice notes, or large file shares that may disrupt the group experience." },
  { number: "09", rule: "Group administrators reserve the right to remove messages that violate these rules and take appropriate action against repeat offenders, including temporary or permanent removal from the group." },
];

const disciplinarySteps = [
  { step: "01", title: "Complaint Receipt", description: "A formal complaint or report of a breach of the Code of Conduct is received by the UPTECH governance team through the designated reporting channel." },
  { step: "02", title: "Initial Assessment", description: "The governance team conducts a preliminary review to determine whether the complaint falls within the scope of the Code of Conduct and warrants further investigation." },
  { step: "03", title: "Acknowledgement", description: "The complainant receives written acknowledgement within 5 working days, confirming that their report has been received and is being assessed." },
  { step: "04", title: "Investigation Panel", description: "An independent investigation panel of three members is appointed, including at least one Board member, to conduct a fair and thorough investigation." },
  { step: "05", title: "Evidence Gathering", description: "The panel gathers evidence including written statements, documentation, and testimony from all relevant parties. Both the complainant and the respondent are given the opportunity to present their case." },
  { step: "06", title: "Right to Respond", description: "The member under investigation is formally notified of the allegations and given a minimum of 14 days to provide a written response and any supporting evidence." },
  { step: "07", title: "Panel Hearing", description: "Where appropriate, a formal hearing is held where both parties may present their case. The hearing follows a structured format ensuring procedural fairness." },
  { step: "08", title: "Determination", description: "The panel reaches a determination based on the balance of evidence. Findings and recommendations are documented in a formal report." },
  { step: "09", title: "Sanctions", description: "If the complaint is upheld, appropriate sanctions are imposed. These may range from a formal warning, suspension of membership, removal from leadership positions, to permanent expulsion from UPTECH." },
  { step: "10", title: "Appeals Process", description: "The respondent has the right to appeal the decision within 21 days of receiving the outcome. Appeals are reviewed by a separate appeals committee that was not involved in the original investigation." },
  { step: "11", title: "Final Resolution", description: "The appeals committee reviews the case and issues a final decision, which is binding. All parties are notified in writing, and the matter is formally closed and recorded." },
];

const principleColors = ["#2563EB", "#22C55E", "#8b5cf6", "#C41E3A", "#f59e0b", "#2563EB", "#22C55E", "#8b5cf6", "#C41E3A"];

export default function CodeOfConductPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("principles");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[520px]">
        <Image
          src="/image/london-images/governance-ethics.jpg"
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
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/60">Ethics & Standards</span>
            </div>
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-white mb-6 max-w-3xl"
          >
            Code of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60a5fa]">
              Conduct
            </span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-lg text-white/50 max-w-2xl leading-relaxed"
          >
            UPTECH is committed to maintaining the highest standards of ethical conduct, transparency, and accountability in all our activities.
          </motion.p>
        </div>
      </section>

      {/* ── Summary + Quick Nav — Dark section ──────────────────────── */}
      <section className="relative bg-[#0B0F1A] py-16 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-3">Our Standards</p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Ethical Framework
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-transparent mb-4" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-white/50 text-base leading-relaxed mb-5">
                  This Code of Conduct applies to all members, partners, staff, and stakeholders of UPTECH and outlines the principles and responsibilities that guide our community. Every individual associated with UPTECH is expected to uphold these standards in their professional and personal conduct.
                </p>
                <p className="text-white/50 text-base leading-relaxed">
                  Our code reflects the values of the Pakistani technology diaspora in the United Kingdom and sets a benchmark for professionalism, integrity, and ethical behaviour that inspires trust and excellence across the community.
                </p>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent" />
                <h3 className="font-heading font-bold text-base text-white mb-5">Quick Navigation</h3>
                <div className="h-px bg-white/[0.06] mb-5" />
                <nav className="space-y-2">
                  {navSections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 border-l-2 rounded-r-lg ${
                        activeSection === s.id
                          ? "border-[#2563EB] text-[#2563EB] bg-[#2563EB]/[0.08]"
                          : "border-transparent text-white/40 hover:text-white/70 hover:border-white/10 hover:bg-white/[0.03]"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </nav>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 9 Principles — Dark alt section ─────────────────────────── */}
      <section id="principles" className="relative py-16 overflow-hidden" style={{ backgroundColor: "#0E1221" }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "60px 60px" }} />
        {/* Glowing orb accents */}
        <div className="absolute top-0 right-1/3 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #2563EB, transparent 60%)" }} />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #8b5cf6, transparent 60%)" }} />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8b5cf6] mb-3">Core Values</p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Our 9 Principles
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#8b5cf6] to-transparent mb-4" />
              <p className="text-white/40 text-base max-w-xl">
                The foundation of ethical conduct and professional standards that every UPTECH member upholds.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {principles.map((item, i) => {
                const Icon = item.icon;
                const color = principleColors[i];
                return (
                  <motion.div
                    key={item.title}
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

                    <div
                      className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${color}10`, border: `1px solid ${color}20` }}
                    >
                      <div
                        className="absolute inset-[-6px] rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"
                        style={{ backgroundColor: color }}
                      />
                      <Icon className="relative z-10 w-5 h-5" style={{ color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-base text-white mb-2">{item.title}</h3>
                    <div className="h-px bg-white/[0.06] mb-3" />
                    <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WhatsApp Group Rules — Dark section ─────────────────────── */}
      <section id="whatsapp-rules" className="relative bg-[#0B0F1A] py-16 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/30 to-transparent" />
        {/* Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #22C55E, transparent 60%)" }} />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#22C55E] mb-3">Communication Standards</p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                WhatsApp Group Rules
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#22C55E] to-transparent mb-4" />
              <p className="text-white/40 text-base max-w-xl">
                Guidelines for professional conduct in UPTECH WhatsApp groups and digital communication channels.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="p-3 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20">
                    <MessageCircle className="w-6 h-6 text-[#22C55E]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">Group Communication Policy</h3>
                    <p className="text-sm text-white/30">Applicable to all UPTECH WhatsApp groups and channels</p>
                  </div>
                </motion.div>
                <div className="space-y-3">
                  {whatsappRules.slice(0, 5).map((item, i) => (
                    <motion.div
                      key={item.number}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="group relative flex items-start gap-4 bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
                    >
                      <span
                        className="text-xs font-bold tabular-nums pt-0.5 flex-shrink-0"
                        style={{ color: "#22C55E" }}
                      >
                        {item.number}
                      </span>
                      <p className="text-sm text-white/40 leading-relaxed">{item.rule}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                {whatsappRules.slice(5).map((item, i) => (
                  <motion.div
                    key={item.number}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group relative flex items-start gap-4 bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
                  >
                    <span
                      className="text-xs font-bold tabular-nums pt-0.5 flex-shrink-0"
                      style={{ color: "#22C55E" }}
                    >
                      {item.number}
                    </span>
                    <p className="text-sm text-white/40 leading-relaxed">{item.rule}</p>
                  </motion.div>
                ))}

                {/* Warning card */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="relative bg-gradient-to-br from-[#f59e0b]/10 to-[#C41E3A]/10 border border-[#f59e0b]/20 rounded-xl p-6 mt-3 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-20" style={{ background: "radial-gradient(circle, #f59e0b, transparent 70%)" }} />
                  <div className="relative">
                    <AlertTriangle className="w-5 h-5 text-[#FBBF24] mb-3" />
                    <p className="text-white/60 text-sm leading-relaxed">
                      Violations of these rules may result in removal from the group and further disciplinary action as outlined in the Disciplinary Procedure below.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Disciplinary Procedure — Dark alt section ───────────────── */}
      <section id="disciplinary" className="relative py-16 overflow-hidden" style={{ backgroundColor: "#131942" }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C41E3A]/30 to-transparent" />
        {/* Glow */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #C41E3A, transparent 60%)" }} />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C41E3A] mb-3">Enforcement</p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Disciplinary Procedure
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#C41E3A] to-transparent mb-4" />
              <p className="text-white/40 text-base max-w-xl">
                A transparent, fair, and structured process for addressing breaches of the Code of Conduct.
              </p>
            </div>

            <div className="space-y-0">
              {disciplinarySteps.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="grid grid-cols-[70px_1fr] border-b border-white/[0.06] last:border-b-0 group hover:bg-white/[0.02] transition-colors duration-300"
                >
                  <div className="flex items-center justify-center py-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "rgba(196,30,58,0.08)", border: "1px solid rgba(196,30,58,0.15)" }}
                    >
                      <span className="text-sm font-bold text-[#C41E3A] tabular-nums">{item.step}</span>
                    </div>
                  </div>
                  <div className="py-6 pl-6 border-l border-white/[0.06]">
                    <h3 className="font-heading font-bold text-base text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Reporting & Commitment — Dark section ──────────────────── */}
      <section className="relative bg-[#0E1221] py-16 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/30 to-transparent" />
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #2563EB, transparent 60%)" }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 opacity-[0.03]" style={{ background: "radial-gradient(circle, #22C55E, transparent 60%)" }} />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8b5cf6] mb-3">Accountability</p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Reporting & Commitment
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#8b5cf6] to-transparent mb-4" />
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Reporting a Concern */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                    <Gavel className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">Reporting a Concern</h3>
                </div>
                <div className="h-px bg-white/[0.06] mb-5" />
                <p className="text-sm text-white/40 leading-relaxed mb-5">
                  If you witness or experience a breach of this Code of Conduct, you are encouraged to report it through the following channels:
                </p>
                <ul className="space-y-3">
                  {[
                    "Email the governance team at info@uptech.org.uk",
                    "Speak confidentially with any Board member",
                    "Use the anonymous reporting form on the member portal",
                    "Contact the designated ethics officer directly",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-sm text-white/50 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Our Commitment */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#22C55E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">Our Commitment</h3>
                </div>
                <div className="h-px bg-white/[0.06] mb-5" />
                <ul className="space-y-3">
                  {[
                    "All reports are treated with strict confidentiality",
                    "No retaliation against anyone who reports in good faith",
                    "Fair and transparent investigation process",
                    "Timely resolution with clear communication to all parties",
                    "Regular review and updates to the Code of Conduct",
                    "Zero tolerance for violations of ethical standards",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-sm text-white/50 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
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
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-4">Questions?</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Committed to the Highest Standards
              </h2>
              <p className="text-white/40 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
                If you have questions about the Code of Conduct or need to report a concern, please contact the governance team.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg" showArrow>Contact Us</Button>
                <Button href="/leadership" variant="glass" size="lg" showArrow>Leadership & Governance</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
