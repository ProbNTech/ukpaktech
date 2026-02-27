"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Shield, Eye, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const brandColors = ["#2563EB", "#C41E3A", "#22C55E"];
const brandColorsBg = ["#2563EB10", "#C41E3A10", "#22C55E10"];
const brandColorsBorder = ["#2563EB30", "#C41E3A30", "#22C55E30"];

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
        label="Governance"
        title="Leadership &amp; Governance"
        subtitle="UPTECH operates under a defined governance structure ensuring transparency, ethics, and accountability across all initiatives."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400&q=85&auto=format&fit=crop"
      >
        <div className="flex flex-wrap gap-4">
          {[
            { icon: Shield, text: "Ethical Governance" },
            { icon: Eye, text: "Transparency" },
            { icon: FileText, text: "Accountability" },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/30 text-white/80 text-xs font-semibold uppercase tracking-wide rounded-full">
              <Icon className="w-3.5 h-3.5" />
              {text}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Founder & CEO */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-[300px_1fr] gap-10 items-center mb-14">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
                <Image src="/image/ceo/khalil-choudhary-headshot.jpg" alt="Khalil Choudhary — Founder & CEO, UPTECH" fill className="object-cover" sizes="300px" />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-lg -z-10" style={{ background: `linear-gradient(135deg, ${brandColors[0]}20, ${brandColors[2]}20)` }} />
            </motion.div>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3" style={{ background: `${brandColors[0]}12`, color: brandColors[0] }}>
                Founder & CEO
              </div>
              <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-[#1C1F2E] mb-3">Khalil Choudhary</h2>
              <div className="h-1 w-16 rounded-full mb-5" style={{ background: `linear-gradient(to right, ${brandColors[0]}, ${brandColors[1]}, ${brandColors[2]})` }} />
              <p className="text-[#3D4152] leading-relaxed mb-4">
                A visionary leader dedicated to strengthening the UK–Pakistan technology corridor through innovation, collaboration, and sustainable partnerships. Under his leadership, UPTECH has grown into a strategic platform connecting technology professionals, entrepreneurs, and organisations across both nations.
              </p>
              <p className="text-[#3D4152] leading-relaxed">
                With deep expertise in technology strategy, bilateral trade, and community building, Khalil Choudhary drives UPTECH&apos;s mission to champion Pakistan&apos;s soft image globally while creating pathways for prosperity through digital innovation.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Navigation Grid */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Our structure" title="Governance Framework" subtitle="Click any area to navigate to that section." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { id: "governance-structure", title: "Governance Structure", desc: "Our framework for accountability, transparency, and ethical oversight.", tags: ["Ethics", "Accountability"], colorIdx: 0 },
              { id: "board-of-directors", title: "Board of Directors", desc: "Strategic oversight and decision-making at the highest level.", tags: ["Oversight", "Strategy"], colorIdx: 1 },
              { id: "advisory-council", title: "Advisory Council", desc: "Expert guidance and strategic counsel from industry leaders.", tags: ["Expertise", "Guidance"], colorIdx: 2 },
              { id: "executive-leadership", title: "Executive Leadership", desc: "Day-to-day operations and strategic execution of UPTECH initiatives.", tags: ["Execution", "Operations"], colorIdx: 0 },
            ].map((card) => (
              <button
                key={card.id}
                onClick={() => scrollToSection(card.id)}
                className="text-left bg-white rounded-lg p-7 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                style={{ borderTop: `3px solid ${brandColors[card.colorIdx]}` }}
              >
                {/* Subtle background accent on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-1/2 translate-x-1/2" style={{ background: `radial-gradient(circle, ${brandColors[card.colorIdx]}08, transparent 70%)` }} />
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading font-bold text-lg text-[#1C1F2E] group-hover:transition-colors duration-200" style={{ color: undefined }}>{card.title}</h3>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" style={{ color: brandColors[card.colorIdx] }} />
                  </div>
                  <p className="text-[#3D4152] text-sm leading-relaxed mb-4">{card.desc}</p>
                  <div className="flex gap-3">
                    {card.tags.map((tag) => (
                      <span key={tag} className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ color: brandColors[card.colorIdx], background: `${brandColors[card.colorIdx]}10` }}>{tag}</span>
                    ))}
                  </div>
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
        shouldReduceMotion={shouldReduceMotion} colorIdx={0}
      />
      <GovernanceSection id="board-of-directors" variant="light" title="Board of Directors"
        desc="Strategic oversight and governance at the highest level, ensuring UPTECH's mission and values guide all decisions."
        image="/image/Leadership%20Governance/Board_Directors.webp" imageAlt="UPTECH Board of Directors" imageLeft={true}
        responsibilities={["Approve strategic plans and major initiatives","Oversee financial management and resources","Appoint and evaluate executive leadership","Ensure compliance with governance policies","Review and approve annual reports","Provide strategic guidance on partnerships"]}
        shouldReduceMotion={shouldReduceMotion} colorIdx={1}
      />
      <GovernanceSection id="advisory-council" variant="alt" title="Advisory Council"
        desc="Expert guidance and strategic counsel from distinguished leaders across technology, business, and policy."
        image="/image/Leadership%20Governance/Advisory_Council.webp" imageAlt="UPTECH Advisory Council" imageLeft={false}
        responsibilities={["Provide expert guidance on technology trends","Offer strategic counsel on program development","Facilitate connections with key stakeholders","Review and provide feedback on initiatives","Serve as ambassadors for UPTECH's mission","Contribute to thought leadership"]}
        shouldReduceMotion={shouldReduceMotion} colorIdx={2}
      />
      <GovernanceSection id="executive-leadership" variant="light" title="Executive Leadership"
        desc="Day-to-day operations and strategic execution of UPTECH's programs, initiatives, and member services."
        image="/image/Leadership%20Governance/Executive_Leadership.webp" imageAlt="UPTECH Executive Leadership" imageLeft={true}
        responsibilities={["Execute strategic plans and initiatives","Manage day-to-day operations and delivery","Build and maintain stakeholder partnerships","Oversee financial management and resources","Provide regular reporting to the Board","Ensure compliance with policies and procedures"]}
        shouldReduceMotion={shouldReduceMotion} colorIdx={0}
      />
    </div>
  );
}

function GovernanceSection({
  id, variant, title, desc, image, imageAlt, imageLeft, responsibilities, shouldReduceMotion, colorIdx,
}: {
  id: string; variant: "light" | "alt"; title: string; desc: string;
  image: string; imageAlt: string; imageLeft: boolean;
  responsibilities: string[]; shouldReduceMotion: boolean | null;
  colorIdx: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const color = brandColors[colorIdx];

  const textContent = (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3" style={{ background: `${color}12`, color }}>
        {title}
      </div>
      <h2 className="font-heading font-extrabold text-3xl text-[#1C1F2E] mb-2 leading-tight">{title}</h2>
      <div className="h-1 w-14 rounded-full mb-5" style={{ background: color }} />
      <p className="text-[#3D4152] leading-relaxed mb-7">{desc}</p>
      <div className="rounded-lg p-6 relative overflow-hidden" style={{ background: `${color}06`, border: `1px solid ${color}20` }}>
        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: color }} />
        <h4 className="font-heading font-bold text-sm uppercase tracking-wide mb-4 pl-3" style={{ color }}>Key Responsibilities</h4>
        <ul className="space-y-3 pl-3">
          {responsibilities.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" strokeWidth={2.5} style={{ color }} />
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
      className="relative"
    >
      <div className="relative aspect-[4/3] max-h-[420px] overflow-hidden rounded-lg shadow-lg" style={{ border: `2px solid ${color}30` }}>
        <Image src={image} alt={imageAlt} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 560px" />
      </div>
      {/* Corner accent */}
      <div className="absolute -bottom-2 -z-10 w-20 h-20 rounded-lg" style={{ background: `${color}15`, [imageLeft ? 'right' : 'left']: '-8px' }} />
    </motion.div>
  );

  return (
    <section id={id} className="scroll-mt-24">
      <Section variant={variant}>
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className={imageLeft ? "order-1" : "order-2 lg:order-1"}>{imageLeft ? imageContent : textContent}</div>
          <div className={imageLeft ? "order-2" : "order-1 lg:order-2"}>{imageLeft ? textContent : imageContent}</div>
        </div>
      </Section>
    </section>
  );
}
