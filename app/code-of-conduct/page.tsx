"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { motion, useReducedMotion } from "framer-motion";
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
      <PageHero
        title="Code of Conduct"
        subtitle="UPTECH is committed to maintaining the highest standards of ethical conduct, transparency, and accountability in all our activities."
        image="/image/london-images/governance-ethics.jpg"
      />

      {/* Summary */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Our Standards" title="Ethical Framework" />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                This Code of Conduct applies to all members, partners, staff, and stakeholders of UPTECH and outlines the principles and responsibilities that guide our community. Every individual associated with UPTECH is expected to uphold these standards in their professional and personal conduct.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed">
                Our code reflects the values of the Pakistani technology diaspora in the United Kingdom and sets a benchmark for professionalism, integrity, and ethical behaviour that inspires trust and excellence across the community.
              </p>
            </div>
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-4">Quick Navigation</h3>
              <div className="h-px bg-[#D8D5CF] mb-4" />
              <nav className="space-y-2">
                {navSections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 border-l-2 ${
                      activeSection === s.id
                        ? "border-[#2563EB] text-[#2563EB] bg-[#EEECEA]"
                        : "border-transparent text-[#3D4152] hover:text-[#1C1F2E] hover:border-[#D8D5CF]"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* 9 Principles */}
      <Section variant="alt" id="principles">
        <AnimatedSection>
          <SectionHeader label="Core Values" title="Our 9 Principles" subtitle="The foundation of ethical conduct and professional standards that every UPTECH member upholds." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-200"
                >
                  <Icon className="w-6 h-6 text-[#2563EB] mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{item.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* WhatsApp Group Rules */}
      <Section variant="light" id="whatsapp-rules">
        <AnimatedSection>
          <SectionHeader label="Communication Standards" title="WhatsApp Group Rules" subtitle="Guidelines for professional conduct in UPTECH WhatsApp groups and digital communication channels." />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#22C55E]/10 rounded">
                  <MessageCircle className="w-6 h-6 text-[#22C55E]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">Group Communication Policy</h3>
                  <p className="text-sm text-[#3D4152]">Applicable to all UPTECH WhatsApp groups and channels</p>
                </div>
              </div>
              <div className="space-y-4">
                {whatsappRules.slice(0, 5).map((item) => (
                  <div key={item.number} className="flex items-start gap-4 bg-white border border-[#D8D5CF] rounded p-5">
                    <span className="text-xs font-bold text-[#2563EB] tabular-nums pt-0.5 flex-shrink-0">{item.number}</span>
                    <p className="text-sm text-[#3D4152] leading-relaxed">{item.rule}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {whatsappRules.slice(5).map((item) => (
                <div key={item.number} className="flex items-start gap-4 bg-white border border-[#D8D5CF] rounded p-5">
                  <span className="text-xs font-bold text-[#2563EB] tabular-nums pt-0.5 flex-shrink-0">{item.number}</span>
                  <p className="text-sm text-[#3D4152] leading-relaxed">{item.rule}</p>
                </div>
              ))}
              <div className="bg-[#1C1F2E] rounded p-6 mt-6">
                <AlertTriangle className="w-5 h-5 text-[#FBBF24] mb-3" />
                <p className="text-white/90 text-sm leading-relaxed">
                  Violations of these rules may result in removal from the group and further disciplinary action as outlined in the Disciplinary Procedure below.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Disciplinary Procedure */}
      <Section variant="alt" id="disciplinary">
        <AnimatedSection>
          <SectionHeader label="Enforcement" title="Disciplinary Procedure" subtitle="A transparent, fair, and structured process for addressing breaches of the Code of Conduct." />
          <div className="space-y-0">
            {disciplinarySteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grid grid-cols-[60px_1fr] border-b border-[#D8D5CF] last:border-b-0"
              >
                <div className="flex items-center justify-center py-6">
                  <span className="text-2xl font-heading font-bold text-[#2563EB]">{item.step}</span>
                </div>
                <div className="py-6 pl-6 border-l border-[#D8D5CF]">
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#3D4152] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Reporting */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <div className="flex items-start gap-4 mb-5">
                <Gavel className="w-6 h-6 text-[#2563EB] flex-shrink-0" strokeWidth={1.5} />
                <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">Reporting a Concern</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <p className="text-sm text-[#3D4152] leading-relaxed mb-4">
                If you witness or experience a breach of this Code of Conduct, you are encouraged to report it through the following channels:
              </p>
              <ul className="space-y-3">
                {[
                  "Email the governance team at info@uptechcouncil.com",
                  "Speak confidentially with any Board member",
                  "Use the anonymous reporting form on the member portal",
                  "Contact the designated ethics officer directly",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm text-[#3D4152] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <div className="flex items-start gap-4 mb-5">
                <Shield className="w-6 h-6 text-[#22C55E] flex-shrink-0" strokeWidth={1.5} />
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
                    <span className="text-sm text-[#3D4152] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Questions?</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Committed to the Highest Standards
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              If you have questions about the Code of Conduct or need to report a concern, please contact the governance team.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" showArrow>Contact Us</Button>
              <Button href="/leadership" variant="glass" size="lg" showArrow>Leadership & Governance</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
