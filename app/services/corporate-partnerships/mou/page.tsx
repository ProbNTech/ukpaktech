"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import { ChevronDown, FileText, Printer } from "lucide-react";

const mouSections = [
  {
    id: "purpose",
    number: "1",
    title: "Purpose",
    content: [
      "The purpose of this MoU is to establish a framework for cooperation between UPTECH and the Partner Organisation to support professional development, knowledge sharing, and collaborative initiatives in the IT sector, and to facilitate mutual promotion of IT services and products:",
      "\u2022 UPTECH will promote the services and products of the Partner Organisation\u2019s member companies in the UK and Europe.",
      "\u2022 The Partner Organisation will promote UPTECH\u2019s services and products to its member companies in their country of jurisdiction.",
    ],
  },
  {
    id: "cooperation",
    number: "2",
    title: "Areas of Cooperation",
    content: [
      "The Parties intend to collaborate in areas including, but not limited to:",
      "\u2022 Joint events, workshops, and seminars relevant to the AI & IT industry.",
      "\u2022 Exchange of expertise, best practices, and research in IT services and solutions.",
      "\u2022 Collaborative initiatives for publications, white papers, or IT-related projects.",
      "\u2022 Mutual promotion of IT services and products to the Parties\u2019 respective member companies, including through newsletters, events, and communications.",
      "\u2022 Other initiatives mutually agreed in writing by the Parties.",
    ],
  },
  {
    id: "promotional",
    number: "3",
    title: "Promotional Activities",
    content: [
      "Newsletters & Email Campaigns:",
      "\u2022 UPTECH may feature Partner Organisation member services/products in its communications in the UK and Europe.",
      "\u2022 Partner Organisation may feature UPTECH services/products in its member communications in Pakistan and Europe.",
      "",
      "Events and Webinars:",
      "\u2022 Both Parties may host or co-host webinars, workshops, or seminars to showcase IT products and services.",
      "\u2022 UPTECH may provide speakers, marketing material, or digital support for Partner Organisation events.",
      "\u2022 Partner Organisation may facilitate UPTECH participation in its events or exhibitions.",
      "",
      "Digital Promotion:",
      "\u2022 Each Party may promote the other\u2019s services offerings on websites, social media, and online platforms, subject to prior content approval.",
      "",
      "Joint Publications:",
      "\u2022 Collaboration on research papers, white papers, or case studies highlighting IT services and solutions may be undertaken with mutual agreement.",
      "",
      "Networking Opportunities:",
      "\u2022 Facilitate introductions, matchmaking, or partnerships between UPTECH clients and Partner Organisation member companies, and vice versa.",
    ],
  },
  {
    id: "roles",
    number: "4",
    title: "Roles and Responsibilities",
    content: [
      "UPTECH shall:",
      "\u2022 Share marketing content and product information for Partner Organisation members.",
      "\u2022 Promote the services and products of the Partner Organisation\u2019s member companies in the UK and Europe.",
      "\u2022 Provide information, marketing support, and collaborative opportunities for joint IT initiatives.",
      "\u2022 Collaborate on webinars, events, or publications as agreed.",
      "",
      "Partner Organisation shall:",
      "\u2022 Share marketing content and product information for UPTECH services.",
      "\u2022 Promote UPTECH\u2019s services and products to its member companies in their country of jurisdiction.",
      "\u2022 Facilitate networking and participation opportunities for UPTECH in relevant events or programs.",
      "",
      "Specific roles, timelines, and obligations for individual projects or campaigns will be agreed in separate project-specific agreements.",
    ],
  },
  {
    id: "review",
    number: "5",
    title: "Review and Coordination",
    content: [
      "Each Party will appoint a point of contact to coordinate activities.",
      "Activities will be reviewed quarterly or as mutually agreed.",
      "Any activity outside this annex requires written agreement by both Parties.",
    ],
  },
  {
    id: "term",
    number: "6",
    title: "Term and Termination",
    content: [
      "This MoU is effective from the Effective Date and shall remain in effect for duration of two (2) years, unless terminated by either Party with 60 days\u2019 written notice.",
    ],
  },
  {
    id: "legal-status",
    number: "7",
    title: "Legal Status",
    content: [
      "This MoU is not legally binding and does not create a partnership, joint venture, or legal entity. It reflects the Parties\u2019 mutual intention to collaborate.",
    ],
  },
  {
    id: "governing-law",
    number: "8",
    title: "Governing Law",
    content: [
      "This MoU shall be governed by the laws of England and Wales, and the courts of England and Wales shall have exclusive jurisdiction over any disputes arising from this MoU.",
    ],
  },
];

const sectionAccents = [
  "#2563EB", "#22C55E", "#C41E3A", "#2563EB", "#22C55E",
  "#C41E3A", "#2563EB", "#22C55E",
];

export default function MoUPage() {
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

  const expandAll = () => setOpenSections(new Set(mouSections.map((s) => s.id)));
  const collapseAll = () => setOpenSections(new Set());

  return (
    <div>
      <PageHero
        label="Partnership Document"
        title="Memorandum of Understanding"
        subtitle="A framework for cooperation between UPTECH and partner organisations to support professional development, knowledge sharing, and collaborative initiatives in the IT sector."
        image="/image/banners/banner22.jpg"
      />

      <div className="content-body">
        {/* ── Parties ── */}
        <section className="relative bg-[#EEECEA] py-10 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
          <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
            <AnimatedSection>
              <SectionHeader label="MoU Parties" title="Between" color="blue" />
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
                      <h3 className="font-heading font-bold text-lg text-[#2563EB]">UK-Pakistan Tech Council (UPTECH)</h3>
                    </div>
                  </div>
                  <p className="text-[#5A5F72] text-base leading-relaxed">
                    A company registered in the United Kingdom, with registered office at 134-136 Westbourne Terrace, London, W2 6QB, UK.
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
                      <h3 className="font-heading font-bold text-lg text-[#22C55E]">Partner Organisation</h3>
                    </div>
                  </div>
                  <p className="text-[#5A5F72] text-base leading-relaxed">
                    A company, association, or NGO interested in establishing a cooperative framework with UPTECH for mutual promotion and collaboration.
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Controls ── */}
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

        {/* ── MoU Sections ── */}
        <section className="relative overflow-hidden bg-[#F5F4F2]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />
          <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-10">
            <AnimatedSection>
              <SectionHeader label="MoU Terms" title="Memorandum of Understanding" color="green" />
              <div className="space-y-3 max-w-5xl">
                {mouSections.map((section, index) => {
                  const isOpen = openSections.has(section.id);
                  const color = sectionAccents[index];

                  return (
                    <motion.div
                      key={section.id}
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
                  Interested in Partnering with UPTECH?
                </h2>
                <p className="text-white/40 text-base sm:text-lg leading-relaxed">
                  Contact us to discuss how your organisation can collaborate with UPTECH for mutual growth and cross-border technology partnerships.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg" showArrow>
                  Contact Us
                </Button>
                <Button href="/services/corporate-partnerships" variant="glass" size="lg" showArrow>
                  Corporate Partnerships
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
