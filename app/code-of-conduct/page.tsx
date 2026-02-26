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
  { icon: Shield, title: "Integrity", description: "Members will consistently demonstrate honesty and ethical behavior in all actions and decisions." },
  { icon: Users, title: "Respect and Equality", description: "Treat all members with dignity, equality, and cultural sensitivity, without discrimination based on any criteria." },
  { icon: Award, title: "Competence", description: "Members will accurately represent their skills and experience and continuously strive to maintain professional competence." },
  { icon: Heart, title: "Loyalty", description: "Act with unwavering loyalty towards the Council and maintain confidentiality when entrusted with sensitive information." },
  { icon: Scale, title: "Impartiality", description: "Provide objective advice, disclosing any potential conflicts of interest promptly and transparently." },
  { icon: Lightbulb, title: "Ethical Conduct", description: "Members will not pursue personal gain at the expense of the Council and actively work to enhance its reputation." },
  { icon: Ban, title: "Non-discrimination", description: "Refrain from engaging in discriminatory practices in any professional activities." },
  { icon: GraduationCap, title: "Continuous Development", description: "Commit to lifelong learning, actively seeking opportunities to develop skills and knowledge, and encouraging fellow members to do the same." },
  { icon: Briefcase, title: "Professionalism", description: "Adhere to recognized professional standards, offering services and advice diligently and responsibly within their areas of expertise." },
];

const whatsappRules = [
  { number: "01", title: "No Personal Attacks", rule: "Refrain from personal attacks in group chats to maintain a respectful environment; violation may result in temporary or permanent BAN." },
  { number: "02", title: "Avoid Irrelevant Posts", rule: "Steer clear of posting irrelevant content or discussions." },
  { number: "03", title: "No Political or Religious Posts", rule: "Do not share political, religious, sectarian, or biased content." },
  { number: "04", title: "No Unauthorized Adverts", rule: "Obtain prior approval from Management before sharing advertisements in the group." },
  { number: "05", title: "Notify Admins of Number Changes", rule: "Inform Group Admin or Management of any mobile number changes within 3 days to avoid temporary or permanent BAN." },
  { number: "06", title: "Stay Relevant", rule: "Keep discussions aligned with the group\u2019s objectives to ensure focused communication." },
  { number: "07", title: "Post Curfew", rule: "Refrain from posting after 11:00 PM unless urgent matters arise." },
  { number: "08", title: "Welcoming New Members", rule: "Designate one member to welcome new members on behalf of the group to maintain efficiency." },
  { number: "09", title: "Address Grievances Privately", rule: "Contact Management directly for grievances instead of discussing them publicly." },
];

const disciplinarySteps = [
  { step: "01", title: "Complaint Submission", description: "All complaints must be submitted in writing and sent to the Management Committee of the Council. Any member is eligible to lodge a complaint." },
  { step: "02", title: "Investigation", description: "Upon receipt, the complaint will undergo investigation by a Committee vested with the authority to summon any member(s) deemed relevant to the matter." },
  { step: "03", title: "Response Period", description: "Should the Committee determine potential misconduct, the implicated member(s) will be afforded a 7-day period to respond to the allegations." },
  { step: "04", title: "Disciplinary Actions", description: "Should the member(s) be found guilty, disciplinary actions may include caution, reprimand, suspension, or expulsion from Council membership." },
  { step: "05", title: "Lack of Merit", description: "If the complaint lacks merit following the Committee\u2019s evaluation, the complainant will be duly informed." },
  { step: "06", title: "Referral to Disciplinary Committee", description: "In instances where the matter is referred to the Disciplinary Committee, formal proceedings will be arranged for a fair hearing of the charges." },
  { step: "07", title: "Escalation", description: "If the Committee finds the response inadequate or no written representation is received, the matter will be escalated to the Disciplinary Committee." },
  { step: "08", title: "Outcome Communication", description: "For caution and reprimand, the Council will disseminate details of the circumstances and outcome to all members without disclosing the member\u2019s identity. In cases of suspension or expulsion, the Council will, at its discretion, inform members confidentially." },
  { step: "09", title: "Right to Appeal", description: "Affected members retain the right to appeal the committee\u2019s decision within 7 days, submitting a written appeal." },
  { step: "10", title: "Appeal Review", description: "The Executive Committee will then review the appeal." },
  { step: "11", title: "Final Verdict", description: "The verdict rendered by the Executive Committee on the appeal(s) shall be final and non-negotiable." },
];

const principleColors = ["#2563EB", "#22C55E", "#C41E3A", "#2563EB", "#22C55E", "#C41E3A", "#2563EB", "#22C55E", "#C41E3A"];

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
            UK-Pakistan Tech Council Code of Conduct
          </motion.p>
        </div>
      </section>

      {/* ── Summary + Quick Nav — Light section ──────────────────────── */}
      <section className="relative bg-[#EEECEA] py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-3">Our Standards</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
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
                <p className="text-[#5A5F72] text-base leading-relaxed mb-5">
                  All members are required to give an undertaking to the effect that they would abide by the UPTECH Code of Conduct. The Code of Conduct will also specify the procedure for the action to be taken against concerned members for any breach of this Code. The following is the Code of Conduct prepared by the Executive Committee and adopted after approval by balloting by the Voting Members of UPTECH.
                </p>
                <p className="text-[#5A5F72] text-base leading-relaxed mb-5">
                  UK-Pakistan Tech Council Code of Conduct is issued under the authority of the Constitution of the UK-Pakistan Tech Council and is binding on all members of the Organization. {"\u201C"}UK-Pakistani Tech Council is hereby also mentioned as UPTECH{"\u201D"}
                </p>
                <p className="text-[#5A5F72] text-base leading-relaxed mb-5">
                  The Code of Conduct for UK-Pakistan Tech Council is a foundational document established under the authority of our organization{"\u2019"}s Constitution. It outlines the principles and standards that all members are expected to uphold in their professional and personal conduct.
                </p>
                <p className="text-[#5A5F72] text-base leading-relaxed mb-5">
                  As a binding document, adherence to this Code is mandatory for all members, ensuring consistency, integrity, and professionalism in our collective endeavors. By adhering to these ethical and behavioral guidelines, we demonstrate our commitment to excellence, integrity, and mutual respect within our community and in our interactions with others. {"\u201C"}UK-Pakistani Tech Council is hereby also mentioned as UPTECH{"\u201D"}
                </p>
                <p className="text-[#5A5F72] text-base leading-relaxed">
                  The UPTECH Code of Conduct is compulsory for all members and adherence to its principles is obligatory. Therefore, it is imperative for every member of UPTECH to possess a comprehensive understanding and knowledge of its provisions.
                </p>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-5">Quick Navigation</h3>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <nav className="space-y-2">
                  {navSections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 border-l-2 rounded-r-lg ${
                        activeSection === s.id
                          ? "border-[#2563EB] text-[#2563EB] bg-[#2563EB]/[0.08]"
                          : "border-transparent text-[#7A7E8F] hover:text-[#3D4152] hover:border-[#D8D5CF] hover:bg-[#F5F4F2]"
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

      {/* ── 9 Principles — Light alt section ─────────────────────────── */}
      <section id="principles" className="relative py-10 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-3">Core Values</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Our 9 Principles
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-transparent mb-4" />
              <p className="text-[#7A7E8F] text-base max-w-xl">
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
                    className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:border-[#D8D5CF] hover:shadow-md transition-all duration-300 overflow-hidden shadow-sm"
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
                    <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{item.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-base text-[#7A7E8F] leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WhatsApp Group Rules — Light section ─────────────────────── */}
      <section id="whatsapp-rules" className="relative bg-[#EEECEA] py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#22C55E] mb-3">Communication Standards</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                WhatsApp Group Rules
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#22C55E] to-transparent mb-4" />
              <p className="text-[#7A7E8F] text-base max-w-xl">
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
                    <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">Group Communication Policy</h3>
                    <p className="text-sm text-[#7A7E8F]">Applicable to all UPTECH WhatsApp groups and channels</p>
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
                      className="group relative flex items-start gap-4 bg-white border border-[#D8D5CF] rounded-xl p-5 hover:shadow-md hover:border-[#D8D5CF] transition-all duration-300 shadow-sm"
                    >
                      <span
                        className="text-xs font-bold tabular-nums pt-0.5 flex-shrink-0"
                        style={{ color: "#22C55E" }}
                      >
                        {item.number}
                      </span>
                      <p className="text-base text-[#7A7E8F] leading-relaxed"><span className="text-[#5A5F72] font-semibold">{item.title}:</span> {item.rule}</p>
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
                    className="group relative flex items-start gap-4 bg-white border border-[#D8D5CF] rounded-xl p-5 hover:shadow-md hover:border-[#D8D5CF] transition-all duration-300 shadow-sm"
                  >
                    <span
                      className="text-xs font-bold tabular-nums pt-0.5 flex-shrink-0"
                      style={{ color: "#22C55E" }}
                    >
                      {item.number}
                    </span>
                    <p className="text-base text-[#7A7E8F] leading-relaxed"><span className="text-[#5A5F72] font-semibold">{item.title}:</span> {item.rule}</p>
                  </motion.div>
                ))}

                {/* Warning card */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="relative bg-gradient-to-br from-[#C41E3A]/10 to-[#C41E3A]/10 border border-[#C41E3A]/20 rounded-xl p-6 mt-3 overflow-hidden"
                >
                  <div className="relative">
                    <AlertTriangle className="w-5 h-5 text-[#C41E3A] mb-3" />
                    <p className="text-[#5A5F72] text-base leading-relaxed">
                      Violations of these rules may result in removal from the group and further disciplinary action as outlined in the Disciplinary Procedure below.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Disciplinary Procedure — Light alt section ───────────────── */}
      <section id="disciplinary" className="relative py-10 overflow-hidden bg-[#F5F4F2]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C41E3A]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C41E3A] mb-3">Enforcement</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Disciplinary Procedure
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#C41E3A] to-transparent mb-4" />
              <p className="text-[#7A7E8F] text-base max-w-xl">
                All members of the Council are expected to adhere to the Council{"\u2019"}s Code of Conduct. In the event of a member wishing to file a complaint against other members for violating the Code, the following procedures apply:
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
                  className="grid grid-cols-[70px_1fr] border-b border-[#D8D5CF] last:border-b-0 group hover:bg-white/60 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center py-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "rgba(196,30,58,0.08)", border: "1px solid rgba(196,30,58,0.15)" }}
                    >
                      <span className="text-sm font-bold text-[#C41E3A] tabular-nums">{item.step}</span>
                    </div>
                  </div>
                  <div className="py-6 pl-6 border-l border-[#D8D5CF]">
                    <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{item.title}</h3>
                    <p className="text-base text-[#7A7E8F] leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Reporting & Commitment — Light section ──────────────────── */}
      <section className="relative bg-white py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-3">Accountability</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Reporting & Commitment
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-transparent mb-4" />
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Reporting a Concern */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                    <Gavel className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">Reporting a Concern</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <p className="text-base text-[#7A7E8F] leading-relaxed mb-5">
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
                      <span className="text-base text-[#5A5F72] leading-relaxed">{item}</span>
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
                className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#22C55E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">Our Commitment</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
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
                      <span className="text-base text-[#5A5F72] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA — Gradient dark section ──────────────────────────────── */}
      <section className="relative overflow-hidden py-12" style={{ background: "linear-gradient(135deg, #0B0F1A 0%, #131942 50%, #0B0F1A 100%)" }}>
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
              <p className="text-white/40 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                If you have questions about the Code of Conduct or need to report a concern, please contact the governance team.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg" showArrow>Contact Us</Button>
                <Button href="/membership/apply" variant="glass" size="lg" showArrow>Apply for Membership</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
