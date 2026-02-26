"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
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

export default function CodeOfConductPage() {
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
      <PageHero
        image="/image/london-images/governance-ethics.jpg"
        title="Code of Conduct"
        subtitle="UK-Pakistan Tech Council Code of Conduct"
      />

      {/* ── Summary + Quick Nav ──────────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Our Standards"
            title="Ethical Framework"
          />

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                All members are required to give an undertaking to the effect that they would abide by the UPTECH Code of Conduct. The Code of Conduct will also specify the procedure for the action to be taken against concerned members for any breach of this Code. The following is the Code of Conduct prepared by the Executive Committee and adopted after approval by balloting by the Voting Members of UPTECH.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                UK-Pakistan Tech Council Code of Conduct is issued under the authority of the Constitution of the UK-Pakistan Tech Council and is binding on all members of the Organization. {"\u201C"}UK-Pakistani Tech Council is hereby also mentioned as UPTECH{"\u201D"}
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                The Code of Conduct for UK-Pakistan Tech Council is a foundational document established under the authority of our organization{"\u2019"}s Constitution. It outlines the principles and standards that all members are expected to uphold in their professional and personal conduct.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                As a binding document, adherence to this Code is mandatory for all members, ensuring consistency, integrity, and professionalism in our collective endeavors. By adhering to these ethical and behavioral guidelines, we demonstrate our commitment to excellence, integrity, and mutual respect within our community and in our interactions with others. {"\u201C"}UK-Pakistani Tech Council is hereby also mentioned as UPTECH{"\u201D"}
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed">
                The UPTECH Code of Conduct is compulsory for all members and adherence to its principles is obligatory. Therefore, it is imperative for every member of UPTECH to possess a comprehensive understanding and knowledge of its provisions.
              </p>
            </div>

            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-5">Quick Navigation</h3>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <nav className="space-y-2">
                {navSections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 border-l-2 rounded-r-lg ${
                      activeSection === s.id
                        ? "border-[#2563EB] text-[#2563EB] bg-[#2563EB]/[0.06]"
                        : "border-transparent text-[#3D4152] hover:text-[#1C1F2E] hover:border-[#D8D5CF] hover:bg-[#EEECEA]"
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

      {/* ── 9 Principles ─────────────────────────────────────────────── */}
      <Section variant="alt" id="principles">
        <AnimatedSection>
          <SectionHeader
            label="Core Values"
            title="Our 9 Principles"
            subtitle="The foundation of ethical conduct and professional standards that every UPTECH member upholds."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-[#D8D5CF] rounded p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{item.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── WhatsApp Group Rules ──────────────────────────────────────── */}
      <Section variant="light" id="whatsapp-rules">
        <AnimatedSection>
          <SectionHeader
            label="Communication Standards"
            title="WhatsApp Group Rules"
            subtitle="Guidelines for professional conduct in UPTECH WhatsApp groups and digital communication channels."
          />

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-[#2563EB]/10">
                  <MessageCircle className="w-6 h-6 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">Group Communication Policy</h3>
                  <p className="text-sm text-[#3D4152]/60">Applicable to all UPTECH WhatsApp groups and channels</p>
                </div>
              </div>
              <div className="space-y-3">
                {whatsappRules.slice(0, 5).map((item) => (
                  <div
                    key={item.number}
                    className="flex items-start gap-4 bg-white border border-[#D8D5CF] rounded p-5"
                  >
                    <span className="text-xs font-bold tabular-nums pt-0.5 flex-shrink-0 text-[#2563EB]">
                      {item.number}
                    </span>
                    <p className="text-sm text-[#3D4152] leading-relaxed">
                      <span className="text-[#1C1F2E] font-semibold">{item.title}:</span> {item.rule}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {whatsappRules.slice(5).map((item) => (
                <div
                  key={item.number}
                  className="flex items-start gap-4 bg-white border border-[#D8D5CF] rounded p-5"
                >
                  <span className="text-xs font-bold tabular-nums pt-0.5 flex-shrink-0 text-[#2563EB]">
                    {item.number}
                  </span>
                  <p className="text-sm text-[#3D4152] leading-relaxed">
                    <span className="text-[#1C1F2E] font-semibold">{item.title}:</span> {item.rule}
                  </p>
                </div>
              ))}

              {/* Warning card */}
              <div className="bg-amber-50 border border-amber-200 rounded p-6 mt-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 mb-3" />
                <p className="text-[#3D4152] text-sm leading-relaxed">
                  Violations of these rules may result in removal from the group and further disciplinary action as outlined in the Disciplinary Procedure below.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Disciplinary Procedure ───────────────────────────────────── */}
      <Section variant="alt" id="disciplinary">
        <AnimatedSection>
          <SectionHeader
            label="Enforcement"
            title="Disciplinary Procedure"
            subtitle="All members of the Council are expected to adhere to the Council's Code of Conduct. In the event of a member wishing to file a complaint against other members for violating the Code, the following procedures apply:"
          />

          <div className="space-y-0">
            {disciplinarySteps.map((item) => (
              <div
                key={item.step}
                className="grid grid-cols-[70px_1fr] border-b border-[#D8D5CF] last:border-b-0 hover:bg-white/60 transition-colors duration-300"
              >
                <div className="flex items-center justify-center py-6">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#2563EB] tabular-nums">{item.step}</span>
                  </div>
                </div>
                <div className="py-6 pl-6 border-l border-[#D8D5CF]">
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#3D4152] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Reporting & Commitment ───────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Accountability"
            title="Reporting & Commitment"
          />

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Reporting a Concern */}
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <Gavel className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1C1F2E]">Reporting a Concern</h3>
              </div>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <p className="text-sm text-[#3D4152] leading-relaxed mb-5">
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
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm text-[#3D4152] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Commitment */}
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
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
                    <span className="text-sm text-[#3D4152] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] mb-2 tracking-wide uppercase">Questions?</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Committed to the Highest Standards
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
              If you have questions about the Code of Conduct or need to report a concern, please contact the governance team.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" showArrow className="bg-[#2563EB] hover:bg-[#1d4ed8]">Contact Us</Button>
              <Button href="/leadership" variant="glass" size="lg" showArrow>Leadership & Governance</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
