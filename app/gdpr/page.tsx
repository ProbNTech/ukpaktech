"use client";

import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { motion, useReducedMotion } from "framer-motion";
import {
  Shield, UserCheck, Eye, FileText, Clock, Globe2,
  Mail, CheckCircle2, Scale,
} from "lucide-react";

const rights = [
  { icon: Eye, title: "Right of Access", desc: "Request a copy of the personal data we hold about you." },
  { icon: FileText, title: "Right to Rectification", desc: "Request correction of inaccurate or incomplete data." },
  { icon: UserCheck, title: "Right to Erasure", desc: "Request deletion of your personal data in certain circumstances." },
  { icon: Shield, title: "Right to Restrict Processing", desc: "Request limitation of how we use your data." },
  { icon: Globe2, title: "Right to Data Portability", desc: "Receive your data in a structured, machine-readable format." },
  { icon: Scale, title: "Right to Object", desc: "Object to processing based on legitimate interests or direct marketing." },
];

const sections = [
  {
    icon: Shield,
    title: "Our Commitment",
    accent: "border-[#2563EB]",
    content: "UPTECH Council is committed to complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We take the privacy and security of your personal data seriously and are transparent about how we collect, process, and store your information.",
  },
  {
    icon: UserCheck,
    title: "Data Controller",
    accent: "border-[#22C55E]",
    content: "UK\u2013Pakistan Tech Council (UPTECH) is the data controller for personal data collected through our website and services. We determine the purposes and means of processing your personal data in accordance with applicable law.",
  },
  {
    icon: Scale,
    title: "Lawful Basis for Processing",
    accent: "border-[#2563EB]",
    content: "We process personal data based on one or more of the following lawful bases: consent, contractual necessity, legal obligation, vital interests, public interest, or legitimate interests. The specific lawful basis depends on the nature of the processing activity.",
  },
  {
    icon: Clock,
    title: "Data Retention",
    accent: "border-[#22C55E]",
    content: "We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, comply with legal obligations, and resolve disputes. Retention periods vary depending on the type of data and the purpose of processing.",
  },
  {
    icon: Globe2,
    title: "International Transfers",
    accent: "border-[#C41E3A]",
    content: "Where we transfer personal data outside the UK, we ensure appropriate safeguards are in place in accordance with UK GDPR requirements, including standard contractual clauses or adequacy decisions.",
  },
];

export default function GDPRPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <PageHero
        title="GDPR Policy"
        subtitle="Our commitment to data protection and your rights under the General Data Protection Regulation."
        image="/image/london-images/data-security-privacy.jpg"
      />

      {/* Key Sections */}
      <Section variant="light">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-widest mb-6">Last updated: 2025</p>
          </div>
          <div className="space-y-6 max-w-4xl">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`bg-white border border-[#D8D5CF] border-l-4 ${section.accent} rounded p-6 sm:p-8`}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EEECEA] flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-lg pt-2">{section.title}</h3>
                  </div>
                  <p className="text-[#3D4152] text-sm leading-relaxed">{section.content}</p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Your Rights */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Your Rights"
            title="Data Subject Rights"
            subtitle="Under GDPR, you have the following rights regarding your personal data."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rights.map((right, i) => {
              const Icon = right.icon;
              return (
                <motion.div
                  key={right.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300"
                >
                  <Icon className="w-6 h-6 text-[#22C55E] mb-3" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{right.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-[#3D4152] text-sm leading-relaxed">{right.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Contact */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <Mail className="w-8 h-8 text-[#2563EB] mb-4" strokeWidth={1.5} />
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl leading-tight mb-4">
              Contact the Data Protection Officer
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              To exercise your rights or for any data protection queries, contact us at{" "}
              <a href="mailto:info@uptech.org.uk" className="text-[#2563EB] hover:text-[#60A5FA] transition-colors">
                info@uptech.org.uk
              </a>.
            </p>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
