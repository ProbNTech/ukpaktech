"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import { ChevronDown, FileText, Printer, Download } from "lucide-react";

const agreementSections = [
  {
    id: "purpose",
    number: "1",
    title: "Purpose",
    content: [
      "The Member hereby appoints UPTECH to promote, market, and/or sell the Member\u2019s products/services as listed in Exhibit A (the \u201CProducts\u201D), and UPTECH agrees to provide such services under the terms of this Agreement.",
    ],
  },
  {
    id: "commission",
    number: "2",
    title: "Commission",
    content: [
      "UPTECH shall receive a commission of X% of the net sales of the Products sold through its efforts.",
      "\u201CNet sales\u201D means the amount received by the Member excluding taxes, shipping, and discounts.",
      "Commission payments shall be made within 3 days of receipt of payment from customers.",
      "Commission payments shall be made in the currency in which the sale of the Product occurred.",
      "Any refunds, chargebacks, or returns shall reduce the corresponding commission.",
      "Both Parties shall comply with applicable tax and withholding obligations under their respective jurisdictions.",
    ],
  },
  {
    id: "duties",
    number: "3",
    title: "Duties and Obligations",
    content: [
      "UPTECH shall:",
      "\u2022 Actively promote and market the Products.",
      "\u2022 Use reasonable efforts to achieve sales targets (if any).",
      "\u2022 Maintain accurate sales records and provide reports to the Member.",
      "",
      "Member shall:",
      "\u2022 Provide all necessary product information, marketing materials, and support.",
      "\u2022 Fulfil all customer orders promptly.",
      "\u2022 Comply with applicable laws in Pakistan regarding the sale of Products.",
    ],
  },
  {
    id: "marketing-rights",
    number: "4",
    title: "Marketing Rights",
    content: [
      "The Member grants UPTECH the right to use its company name, logo, product images, website link, and other relevant marketing information solely for the purpose of promoting the Products.",
      "UPTECH may use this information through its affiliated marketing partners, digital platforms, social media, email campaigns, and other marketing channels.",
      "UPTECH shall ensure that all such marketing activities are professional, accurate, and do not misrepresent the Member or its products.",
      "Any use outside the scope of this Agreement requires prior written consent from the Member.",
    ],
  },
  {
    id: "intellectual-property",
    number: "5",
    title: "Intellectual Property",
    content: [
      "All other intellectual property rights not expressly granted in Section 4 remain the property of the Member.",
      "UPTECH shall not modify or sublicense the Member\u2019s intellectual property outside the agreed marketing purposes.",
    ],
  },
  {
    id: "confidentiality",
    number: "6",
    title: "Confidentiality",
    content: [
      "Each Party agrees to keep confidential all proprietary information disclosed by the other Party and not to disclose it to any third party without written consent. This obligation survives termination of the Agreement.",
    ],
  },
  {
    id: "term-termination",
    number: "7",
    title: "Term and Termination",
    content: [
      "This Agreement shall commence on Start Date and continue until End Date or \u201Cterminated by either Party with 90 days written notice\u201D.",
      "Either Party may terminate immediately for material breach, bankruptcy, or illegal activity.",
      "Upon termination, UPTECH shall be paid any commissions earned up to the termination date for already received payments and thereafter for further 180 days for any transaction get matured being initiated by UPTECH.",
    ],
  },
  {
    id: "governing-law",
    number: "8",
    title: "Governing Law and Dispute Resolution",
    content: [
      "This Agreement shall be governed by and construed in accordance with the laws of England and Wales.",
      "Any disputes shall first be attempted to resolve amicably through mutual discussions.",
      "If unresolved, disputes shall be submitted to:",
      "\u2022 Arbitration under the rules of the London Court of International Arbitration (LCIA), or",
      "\u2022 Courts of England and Wales, at UPTECH\u2019s discretion.",
    ],
  },
  {
    id: "miscellaneous",
    number: "9",
    title: "Miscellaneous",
    content: [
      "Entire Agreement: This Agreement constitutes the entire understanding between the Parties.",
      "Amendments: Any amendments must be in writing and signed by both Parties.",
      "Force Majeure: Neither Party shall be liable for delays due to events beyond their reasonable control.",
      "Assignment: Neither Party may assign this Agreement without prior written consent of the other Party.",
    ],
  },
  {
    id: "electronic-signatures",
    number: "10",
    title: "Electronic Signatures",
    content: [
      "The Parties agree that this Agreement may be executed and delivered by electronic signature (including by PDF, DocuSign, or other secure electronic means).",
      "Such electronic signatures shall have the same legal effect, validity, and enforceability as original handwritten signatures.",
      "This Agreement, once digitally signed, shall constitute a legally binding document and may be used as evidence in any court or arbitration proceeding.",
    ],
  },
];

const sectionAccents = [
  "#2563EB", "#22C55E", "#C41E3A", "#2563EB", "#22C55E",
  "#C41E3A", "#2563EB", "#22C55E", "#C41E3A", "#2563EB",
];

export default function CommissionAgreementPage() {
  const shouldReduceMotion = useReducedMotion();
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => setOpenSections(new Set(agreementSections.map((s) => s.id)));
  const collapseAll = () => setOpenSections(new Set());

  return (
    <div>
      <PageHero
        label="Legal Document"
        title="Sales Commission Agreement"
        subtitle="This Sales Commission Agreement sets out the terms between UPTECH and its Members for the promotion, marketing, and sale of Member products and services."
        image="/image/banners/banner37.jpg"
      />

      <div className="content-body">
        {/* ── Parties ── */}
        <section className="relative bg-[#EEECEA] py-10 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
          <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
            <AnimatedSection>
              <SectionHeader label="Agreement Parties" title="Between" color="blue" />
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-[#D8D5CF] rounded-2xl p-8 shadow-sm"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#2563EB]">UPTECH</h3>
                      <p className="text-[#5A5F72] text-base">(the &ldquo;Promoter&rdquo;)</p>
                    </div>
                  </div>
                  <p className="text-[#5A5F72] text-base leading-relaxed">
                    A company incorporated under the laws of the United Kingdom, with its principal office at 134-136 Westbourne Terrace, London, W2 6QB, UK.
                  </p>
                </motion.div>

                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white border border-[#D8D5CF] rounded-2xl p-8 shadow-sm"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-[#22C55E]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#22C55E]">Member</h3>
                      <p className="text-[#5A5F72] text-base">(the &ldquo;Member&rdquo;)</p>
                    </div>
                  </div>
                  <p className="text-[#5A5F72] text-base leading-relaxed">
                    An individual or company registered under the laws of Pakistan, with details as provided in the membership application.
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Print / Download ── */}
        <section className="relative py-8 bg-white">
          <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-base font-semibold hover:bg-[#2563EB]/20 transition-colors duration-200"
              >
                <Printer className="w-4 h-4" />
                Print / Save as PDF
              </button>
              <button
                onClick={expandAll}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] text-base font-semibold hover:bg-[#22C55E]/20 transition-colors duration-200"
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
          </div>
        </section>

        {/* ── Agreement Sections ── */}
        <section className="relative overflow-hidden bg-[#F5F4F2]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />
          <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
            <AnimatedSection>
              <SectionHeader label="Agreement Terms" title="Sales Commission Agreement" color="green" />
              <div className="space-y-3 max-w-5xl">
                {agreementSections.map((section, index) => {
                  const isOpen = openSections.has(section.id);
                  const color = sectionAccents[index];

                  return (
                    <motion.div
                      key={section.id}
                      id={`section-${section.id}`}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className={`bg-white border overflow-hidden rounded-xl transition-all duration-300 shadow-sm ${
                        isOpen ? "border-[#D8D5CF] shadow-md" : "border-[#D8D5CF]"
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
                              <div className="space-y-3">
                                {section.content.map((paragraph, pIdx) => {
                                  if (!paragraph) return <div key={pIdx} className="h-2" />;
                                  const isBullet = paragraph.startsWith("\u2022");
                                  const isHeader = paragraph.endsWith(":") && !isBullet;

                                  return (
                                    <p
                                      key={pIdx}
                                      className={`text-base leading-[1.8] ${
                                        isHeader
                                          ? "text-[#3D4152] font-semibold mt-2"
                                          : isBullet
                                          ? "text-[#5A5F72] pl-4"
                                          : "text-[#5A5F72]"
                                      }`}
                                    >
                                      {paragraph}
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
                <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl leading-tight mb-4">
                  Ready to Partner with UPTECH?
                </h2>
                <p className="text-white/40 text-base sm:text-lg leading-relaxed">
                  Apply for membership to access UPTECH&apos;s sales and marketing network across the UK and Europe.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href="/membership/apply" variant="primary" size="lg" showArrow>
                  Apply for Membership
                </Button>
                <Button href="/contact" variant="glass" size="lg" showArrow>
                  Contact Us
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
