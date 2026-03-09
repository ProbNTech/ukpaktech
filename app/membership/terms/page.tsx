"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import { ChevronDown, FileText, Mail } from "lucide-react";

const termsSections = [
  {
    id: "membership",
    number: "1",
    title: "Membership",
    content: [
      "1.1 Eligibility \u2014 Membership is available to individuals or entities who meet UPTECH\u2019s membership criteria.",
      "1.2 Membership Types \u2014 UPTECH offers different membership tiers, each with associated benefits. Details of membership tiers are provided at the time of application.",
      "1.3 Term \u2014 Membership commences on the date the application is accepted and continues for the period specified in the membership plan unless terminated earlier in accordance with these Terms.",
    ],
  },
  {
    id: "fees",
    number: "2",
    title: "Fees and Payment",
    content: [
      "2.1 Payment \u2014 The Member agrees to pay the applicable membership fees as specified during the application process.",
      "2.2 Non-Refundable \u2014 Membership fees are non-refundable, except where required by UK consumer protection law.",
      "2.3 Late Payment \u2014 Failure to pay any fees on time may result in suspension or termination of membership privileges.",
    ],
  },
  {
    id: "member-responsibilities",
    number: "3",
    title: "Member Responsibilities",
    content: [
      "Members agree to:",
      "3.1 Provide accurate and complete information during the application process.",
      "3.2 Comply with UPTECH\u2019s policies, codes of conduct, and applicable UK law.",
      "3.3 Use UPTECH services responsibly and not engage in conduct that harms UPTECH or other members.",
    ],
  },
  {
    id: "uptech-responsibilities",
    number: "4",
    title: "UPTECH Responsibilities",
    content: [
      "UPTECH shall:",
      "4.1 Provide the services and benefits associated with the Member\u2019s chosen membership tier.",
      "4.2 Notify Members of any changes to services, fees, or policies.",
      "4.3 Process personal data in accordance with the UK GDPR and the Data Protection Act 2018.",
    ],
  },
  {
    id: "termination",
    number: "5",
    title: "Termination",
    content: [
      "5.1 Termination by UPTECH \u2014 Membership may be terminated if the Member breaches these Terms, misuses services, or violates applicable law.",
      "5.2 Termination by Member \u2014 Members may terminate their membership by giving written notice to UPTECH.",
      "5.3 Effect of Termination \u2014 Upon termination, access to services will cease, and any outstanding fees remain payable.",
    ],
  },
  {
    id: "confidentiality",
    number: "6",
    title: "Confidentiality",
    content: [
      "6.1 Members must maintain the confidentiality of any proprietary or sensitive information received during the membership, except where disclosure is required by law.",
    ],
  },
  {
    id: "liability",
    number: "7",
    title: "Limitation of Liability",
    content: [
      "7.1 To the maximum extent permitted by law, UPTECH shall not be liable for any indirect, incidental, or consequential losses arising from or in connection with membership.",
    ],
  },
  {
    id: "governing-law",
    number: "8",
    title: "Governing Law and Jurisdiction",
    content: [
      "8.1 These Terms shall be governed by and construed in accordance with the laws of England and Wales, and the courts of England and Wales shall have exclusive jurisdiction to resolve any disputes arising out of these Terms.",
    ],
  },
  {
    id: "amendments",
    number: "9",
    title: "Amendments",
    content: [
      "9.1 UPTECH may update these Terms from time to time. Members will be notified of material changes, and continued use of services constitutes acceptance of the updated Terms.",
    ],
  },
  {
    id: "acceptance",
    number: "10",
    title: "Acceptance",
    content: [
      "10.1 By submitting an application for membership or maintaining membership, the Member acknowledges that they have read, understood, and agreed to be bound by these Terms and Conditions.",
    ],
  },
];

const sectionAccents = [
  "#2563EB", "#22C55E", "#C41E3A", "#2563EB", "#22C55E",
  "#C41E3A", "#2563EB", "#22C55E", "#C41E3A", "#2563EB",
];

export default function MembershipTermsPage() {
  const shouldReduceMotion = useReducedMotion();
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenSections(new Set(termsSections.map((s) => s.id)));
  };

  const collapseAll = () => {
    setOpenSections(new Set());
  };

  return (
    <div>
      {/* ── Hero ── */}
      <PageHero
        label="Legal"
        title="Membership Terms & Conditions"
        subtitle="By applying for or maintaining membership, you agree to be bound by these Terms and Conditions."
        image="/image/banners/banner21.jpg"
      />

      <div className="content-body">
        {/* ── Intro Notice ── */}
        <section className="relative bg-[#EEECEA] py-10 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
          <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
            <AnimatedSection>
              <div>
                <SectionHeader label="Important Notice" title="Membership Terms & Conditions" color="blue" />
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
                      <FileText className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                    </div>
                    <p className="text-[#5A5F72] text-base leading-relaxed pt-2">
                      These Terms and Conditions set out the rules and obligations governing membership with the UK-Pakistan Technology Council (UPTECH). By submitting an application for membership or maintaining membership, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.
                    </p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Quick Navigation ── */}
        <section className="relative py-10 overflow-hidden bg-white">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
          <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
            <AnimatedSection>
              <SectionHeader label={`${termsSections.length} Sections`} title="Quick Navigation" subtitle="Click any section below to jump directly, or use the expand/collapse controls." color="blue" />

              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  onClick={expandAll}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-base font-semibold hover:bg-[#2563EB]/20 transition-colors duration-200"
                >
                  Expand All
                </button>
                <button
                  onClick={collapseAll}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F4F2] border border-[#D8D5CF] text-[#5A5F72] text-base font-semibold hover:bg-[#EEECEA] transition-colors duration-200"
                >
                  Collapse All
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {termsSections.map((section, i) => {
                  const color = sectionAccents[i];
                  return (
                    <motion.button
                      key={section.id}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.3, delay: i * 0.03 }}
                      onClick={() => {
                        const el = document.getElementById(`terms-${section.id}`);
                        if (el) {
                          const offset = el.getBoundingClientRect().top + window.pageYOffset - 100;
                          window.scrollTo({ top: offset, behavior: "smooth" });
                        }
                        setOpenSections((prev) => {
                          const next = new Set(prev);
                          next.add(section.id);
                          return next;
                        });
                      }}
                      className="group text-left bg-white border border-[#D8D5CF] rounded-xl p-4 hover:shadow-md transition-all duration-300 shadow-sm"
                    >
                      <span className="text-base font-bold tabular-nums block mb-1.5" style={{ color }}>
                        {section.number.padStart(2, "0")}
                      </span>
                      <h3 className="font-heading font-semibold text-[#3D4152] text-base leading-snug group-hover:text-[#1C1F2E] transition-colors duration-200 line-clamp-2">
                        {section.title}
                      </h3>
                    </motion.button>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Accordion Sections ── */}
        <section className="relative overflow-hidden bg-[#F5F4F2]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />
          <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
            <AnimatedSection>
              <SectionHeader label="Full Terms" title="Membership Terms & Conditions" color="green" />
              <div className="space-y-3 max-w-5xl">
                {termsSections.map((section, index) => {
                  const isOpen = openSections.has(section.id);
                  const color = sectionAccents[index];

                  return (
                    <motion.div
                      key={section.id}
                      id={`terms-${section.id}`}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className={`bg-white border overflow-hidden rounded-xl transition-all duration-300 scroll-mt-28 shadow-sm ${
                        isOpen ? "border-[#D8D5CF] shadow-md" : "border-[#D8D5CF] hover:border-[#D8D5CF]"
                      }`}
                      style={isOpen ? { borderLeft: `3px solid ${color}` } : {}}
                    >
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full flex items-center gap-4 p-5 lg:p-6 text-left"
                      >
                        <span
                          className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold transition-colors duration-300"
                          style={isOpen ? { background: color, color: "#fff" } : { background: `${color}10`, color }}
                        >
                          {section.number.padStart(2, "0")}
                        </span>
                        <span className="font-heading font-semibold text-base flex-1 text-[#1C1F2E]">
                          {section.title}
                        </span>
                        <div
                          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                          style={isOpen ? { background: `${color}10` } : { background: "transparent" }}
                        >
                          <ChevronDown
                            className="w-4.5 h-4.5 transition-transform duration-300"
                            style={{ color: isOpen ? color : "#9A9EAF", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                          />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 lg:px-6 pb-6 lg:pb-8 pl-[4.75rem] lg:pl-[5.25rem]">
                              <div className="h-px bg-[#D8D5CF] mb-5" />
                              <div className="space-y-4">
                                {section.content.map((paragraph, pIdx) => {
                                  const isSubClause = /^\d+\.\d/.test(paragraph);
                                  const isHeader = !isSubClause && !paragraph.includes("\u2014");

                                  return (
                                    <p
                                      key={pIdx}
                                      className={`text-base leading-[1.8] ${
                                        isHeader && pIdx === 0
                                          ? "text-[#3D4152] font-semibold"
                                          : isSubClause
                                          ? "text-[#7A7E8F] pl-0"
                                          : "text-[#5A5F72]"
                                      }`}
                                    >
                                      {isSubClause && (
                                        <span className="font-semibold mr-1" style={{ color: `${color}cc` }}>
                                          {paragraph.split(" ")[0]}
                                        </span>
                                      )}
                                      {isSubClause ? paragraph.substring(paragraph.indexOf(" ") + 1) : paragraph}
                                    </p>
                                  );
                                })}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>

      {/* ── CTA ── */}
      <section
        className="relative overflow-hidden py-12"
        style={{ background: "linear-gradient(135deg, #0B0F1A 0%, #131942 50%, #0B0F1A 100%)" }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05]" style={{ background: "radial-gradient(circle, #2563EB, transparent 50%)" }} />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <p className="text-base font-bold tracking-[0.2em] uppercase text-[#2563EB]">
                    Questions?
                  </p>
                </div>
                <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                  Need Clarification?
                </h2>
                <p className="text-white/40 text-base sm:text-lg leading-relaxed">
                  If you have any questions about these Membership Terms & Conditions, please contact us at{" "}
                  <a href="mailto:membership@uptech.org.uk" className="text-[#2563EB] hover:text-[#60A5FA] transition-colors">
                    membership@uptech.org.uk
                  </a>{" "}
                  or visit our contact page.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg" showArrow>
                  Contact Us
                </Button>
                <Button href="/membership/apply" variant="glass" size="lg" showArrow>
                  Apply for Membership
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
