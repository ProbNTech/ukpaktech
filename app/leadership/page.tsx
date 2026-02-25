"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Shield, Eye, FileText, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function LeadershipPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.slice(1);
      if (hash) setActiveSection(hash);
    }
  }, []);

  useEffect(() => {
    if (!activeSection) return;
    const element = document.getElementById(activeSection);
    if (!element) return;
    const timeout = setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => clearTimeout(timeout);
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div>
      <PageHero
        title="Leadership &amp; Governance"
        subtitle="UPTECH operates under a defined governance structure ensuring transparency, ethics, and accountability across all initiatives."
        image="/image/Leadership Governance/leadership-governance-banner.webp"
      >
        <div className="flex flex-wrap gap-4 mt-2">
          {[
            { icon: Shield, text: "Ethical Governance" },
            { icon: Eye, text: "Transparency" },
            { icon: FileText, text: "Accountability" },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/30 text-white/80 text-xs font-semibold uppercase tracking-wide">
              <Icon className="w-3.5 h-3.5" />
              {text}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Navigation Grid */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Our structure" title="Governance Framework" subtitle="Click any area to navigate to that section." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { id: "governance-structure", title: "Governance Structure", desc: "Our framework for accountability, transparency, and ethical oversight.", tags: ["Ethics", "Accountability"] },
              { id: "board-of-directors", title: "Board of Directors", desc: "Strategic oversight and decision-making at the highest level.", tags: ["Oversight", "Strategy"] },
              { id: "advisory-council", title: "Advisory Council", desc: "Expert guidance and strategic counsel from industry leaders.", tags: ["Expertise", "Guidance"] },
              { id: "executive-leadership", title: "Executive Leadership", desc: "Day-to-day operations and strategic execution of UPTECH initiatives.", tags: ["Execution", "Operations"] },
            ].map((card) => (
              <button
                key={card.id}
                onClick={() => scrollToSection(card.id)}
                className="text-left bg-white border border-[#D8D5CF] rounded p-7 hover:border-[#2563EB]/40 transition-colors duration-200 group"
              >
                <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2 group-hover:text-[#2563EB] transition-colors duration-200">{card.title}</h3>
                <p className="text-[#3D4152] text-sm leading-relaxed mb-4">{card.desc}</p>
                <div className="flex gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold text-[#2563EB] uppercase tracking-wide">{tag}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <GovernanceSection id="governance-structure" variant="alt" title="Governance Structure"
        desc="A comprehensive framework ensuring accountability, transparency, and ethical decision-making across all UPTECH operations."
        image="/image/Leadership%20Governance/Governance_Structure.webp" imageAlt="UPTECH Governance Structure" imageLeft={false}
        responsibilities={["Establish and maintain ethical standards","Oversee strategic direction and planning","Ensure legal and regulatory compliance","Provide transparent reporting","Manage conflicts of interest","Facilitate stakeholder engagement"]}
        shouldReduceMotion={shouldReduceMotion}
      />
      <GovernanceSection id="board-of-directors" variant="light" title="Board of Directors"
        desc="Strategic oversight and governance at the highest level, ensuring UPTECH's mission and values guide all decisions."
        image="/image/Leadership%20Governance/Board_Directors.webp" imageAlt="UPTECH Board of Directors" imageLeft={true}
        responsibilities={["Approve strategic plans and major initiatives","Oversee financial management and resources","Appoint and evaluate executive leadership","Ensure compliance with governance policies","Review and approve annual reports","Provide strategic guidance on partnerships"]}
        shouldReduceMotion={shouldReduceMotion}
      />
      <GovernanceSection id="advisory-council" variant="alt" title="Advisory Council"
        desc="Expert guidance and strategic counsel from distinguished leaders across technology, business, and policy."
        image="/image/Leadership%20Governance/Advisory_Council.webp" imageAlt="UPTECH Advisory Council" imageLeft={false}
        responsibilities={["Provide expert guidance on technology trends","Offer strategic counsel on program development","Facilitate connections with key stakeholders","Review and provide feedback on initiatives","Serve as ambassadors for UPTECH's mission","Contribute to thought leadership"]}
        shouldReduceMotion={shouldReduceMotion}
      />
      <GovernanceSection id="executive-leadership" variant="light" title="Executive Leadership"
        desc="Day-to-day operations and strategic execution of UPTECH's programs, initiatives, and member services."
        image="/image/Leadership%20Governance/Executive_Leadership.webp" imageAlt="UPTECH Executive Leadership" imageLeft={true}
        responsibilities={["Execute strategic plans and initiatives","Manage day-to-day operations and delivery","Build and maintain stakeholder partnerships","Oversee financial management and resources","Provide regular reporting to the Board","Ensure compliance with policies and procedures"]}
        shouldReduceMotion={shouldReduceMotion}
      />
    </div>
  );
}

function GovernanceSection({
  id, variant, title, desc, image, imageAlt, imageLeft, responsibilities, shouldReduceMotion,
}: {
  id: string; variant: "light" | "alt"; title: string; desc: string;
  image: string; imageAlt: string; imageLeft: boolean;
  responsibilities: string[]; shouldReduceMotion: boolean | null;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const textContent = (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-3">{title}</p>
      <h2 className="font-heading font-extrabold text-3xl text-[#1C1F2E] mb-2 leading-tight">{title}</h2>
      <div className="h-px bg-[#1C1F2E]/20 mb-5" />
      <p className="text-[#3D4152] leading-relaxed mb-7">{desc}</p>
      <div className="bg-white border border-[#D8D5CF] rounded p-6">
        <h4 className="font-heading font-bold text-sm text-[#1C1F2E] uppercase tracking-wide mb-4">Key Responsibilities</h4>
        <ul className="space-y-3">
          {responsibilities.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" strokeWidth={2} />
              <span className="text-[#3D4152] text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  const imageContent = (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative aspect-[4/3] overflow-hidden"
    >
      <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
    </motion.div>
  );

  return (
    <section id={id} className="scroll-mt-24">
      <Section variant={variant}>
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={imageLeft ? "order-1" : "order-2 lg:order-1"}>{imageLeft ? imageContent : textContent}</div>
          <div className={imageLeft ? "order-2" : "order-1 lg:order-2"}>{imageLeft ? textContent : imageContent}</div>
        </div>
      </Section>
    </section>
  );
}
