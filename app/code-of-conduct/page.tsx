"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion, useReducedMotion } from "framer-motion";
import { Shield, CheckCircle2, Users, Eye, FileText, AlertTriangle, Gavel, Scale, Zap } from "lucide-react";
import { useState } from "react";

const navSections = [
  { id: "summary", label: "Summary" },
  { id: "principles", label: "Ethical Principles" },
  { id: "responsibilities", label: "Member Responsibilities" },
  { id: "reporting", label: "Reporting & Enforcement" },
];

export default function CodeOfConductPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("summary");

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

      <Section>
        <AnimatedSection>
          <div className="grid lg:grid-cols-[260px_1fr] gap-12">

            {/* Sticky Left Nav */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="text-xs font-bold uppercase tracking-widest text-[#7A7E8F] mb-4">On this page</p>
                <nav className="space-y-1">
                  {navSections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors duration-200 border-l-2 ${
                        activeSection === s.id
                          ? "border-[#2563EB] text-[#2563EB] bg-white"
                          : "border-transparent text-[#3D4152] hover:text-[#1C1F2E] hover:border-[#D8D5CF]"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Mobile Nav */}
            <div className="lg:hidden mb-6">
              <div className="flex flex-wrap gap-2">
                {navSections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`px-4 py-2 text-sm font-medium border transition-colors duration-200 ${
                      activeSection === s.id
                        ? "bg-[#1C1F2E] text-white border-[#1C1F2E]"
                        : "bg-white text-[#3D4152] border-[#D8D5CF] hover:border-[#1C1F2E]"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8">

              {/* Summary */}
              <ContentBlock id="summary" title="Summary">
                <p className="text-base text-[#3D4152] leading-relaxed">
                  UPTECH is committed to maintaining the highest standards of ethical conduct, transparency, and accountability in all our activities. This Code of Conduct applies to all members, partners, staff, and stakeholders of UPTECH and outlines the principles and responsibilities that guide our community.
                </p>
              </ContentBlock>

              {/* Principles */}
              <ContentBlock id="principles" title="Ethical Principles">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {[
                    { icon: Shield, title: "Integrity", description: "Honesty and transparency in all dealings with members, partners, and stakeholders." },
                    { icon: Users, title: "Respect", description: "Fostering diversity, inclusion, and a culture of mutual respect across both nations." },
                    { icon: Eye, title: "Transparency", description: "Open governance, clear communication, and accountability in all operations." },
                    { icon: FileText, title: "Accountability", description: "Responsible stewardship of resources and obligations to members and stakeholders." },
                    { icon: Zap, title: "Responsible Tech", description: "Ethical development and deployment of technology for positive societal impact." },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className="bg-white border border-[#D8D5CF] p-5 hover:border-[#2563EB]/40 transition-colors duration-200"
                      >
                        <Icon className="w-6 h-6 text-[#2563EB] mb-4" />
                        <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-1">{item.title}</h3>
                        <div className="h-px bg-[#D8D5CF] mb-3" />
                        <p className="text-sm text-[#3D4152] leading-relaxed">{item.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </ContentBlock>

              {/* Responsibilities */}
              <ContentBlock id="responsibilities" title="Member Responsibilities">
                <p className="text-sm text-[#7A7E8F] mb-6">
                  All UPTECH members are expected to uphold these responsibilities in their engagement with the organization and community.
                </p>
                <div className="space-y-3">
                  {[
                    "Uphold UPTECH's ethical principles in all professional activities",
                    "Act with integrity and transparency in all dealings",
                    "Respect diversity and promote inclusive practices",
                    "Report violations of this code of conduct through appropriate channels",
                    "Maintain confidentiality where required and protect sensitive information",
                    "Avoid conflicts of interest and disclose any potential conflicts promptly",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" />
                      <span className="text-[#3D4152] leading-relaxed text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </ContentBlock>

              {/* Reporting */}
              <div id="reporting" className="scroll-mt-24 bg-white border border-[#D8D5CF] p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-[#D8D5CF] flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading font-bold text-xl text-[#1C1F2E] mb-2">Reporting & Enforcement</h2>
                    <div className="h-px bg-[#D8D5CF] mb-5" />
                    <p className="text-sm text-[#3D4152] leading-relaxed mb-5">
                      UPTECH takes violations of this code of conduct seriously. Members are encouraged to report any concerns or violations through appropriate channels. All reports are handled with confidentiality and fairness.
                    </p>
                    <div className="space-y-3">
                      {[
                        { icon: Gavel, text: "All reports reviewed by the governance committee" },
                        { icon: Scale, text: "Fair and transparent investigation process" },
                        { icon: Shield, text: "Zero tolerance for violations of ethical standards" },
                      ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div key={i} className="flex items-start gap-3">
                            <Icon className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-[#3D4152] leading-relaxed">{item.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}

function ContentBlock({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="font-heading font-bold text-2xl text-[#1C1F2E] mb-2">{title}</h2>
      <div className="h-px bg-[#1C1F2E]/20 mb-6" />
      {children}
    </div>
  );
}
