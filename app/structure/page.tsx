"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { CheckCircle2, Users, Crown, Briefcase, Shield, Target, Award, Network, BookOpen } from "lucide-react";

const orgChart = [
  {
    title: "Chairman",
    icon: Crown,
    level: "Executive Leadership",
    responsibilities: [
      "Provide strategic direction and vision for UPTECH",
      "Chair Board meetings and ensure effective governance",
      "Represent UPTECH at the highest levels with governments and international bodies",
      "Approve major partnerships, initiatives, and strategic decisions",
      "Serve as the principal ambassador for the Council",
    ],
  },
  {
    title: "Chief Executive Officer (CEO)",
    icon: Target,
    level: "Executive Leadership",
    responsibilities: [
      "Lead day-to-day operations and strategic execution",
      "Manage organisational resources and financial performance",
      "Drive membership growth and stakeholder engagement",
      "Oversee programme delivery and service quality",
      "Report to the Board on organisational performance and progress",
      "Build and maintain key relationships with partners and sponsors",
    ],
  },
  {
    title: "Senior Vice President (SVP)",
    icon: Award,
    level: "Senior Management",
    responsibilities: [
      "Support the CEO in strategic planning and execution",
      "Oversee multiple departments and cross-functional initiatives",
      "Lead special projects and bilateral programme delivery",
      "Deputise for the CEO when required",
      "Ensure alignment between departments and strategic objectives",
    ],
  },
  {
    title: "Vice President (VP)",
    icon: Briefcase,
    level: "Senior Management",
    responsibilities: [
      "Manage specific functional areas and departmental operations",
      "Lead team development and capacity building",
      "Drive innovation and process improvement within departments",
      "Coordinate with other VPs for cross-departmental collaboration",
      "Report on departmental performance and milestones",
    ],
  },
  {
    title: "President",
    icon: Shield,
    level: "Governance",
    responsibilities: [
      "Preside over general meetings and member assemblies",
      "Ensure compliance with the Constitution and governance policies",
      "Facilitate democratic decision-making processes",
      "Mediate disputes and ensure fair representation",
      "Serve as a senior ambassador for UPTECH in formal settings",
    ],
  },
  {
    title: "General Secretary",
    icon: BookOpen,
    level: "Operations",
    responsibilities: [
      "Maintain official records, minutes, and documentation",
      "Manage internal and external communications",
      "Coordinate meetings, agendas, and follow-up actions",
      "Ensure compliance with legal and regulatory requirements",
      "Oversee membership records and administrative processes",
    ],
  },
  {
    title: "Treasurer",
    icon: Network,
    level: "Operations",
    responsibilities: [
      "Manage financial accounts and budgets",
      "Oversee financial reporting and audit processes",
      "Ensure transparency and accountability in financial matters",
      "Advise the Board on financial strategy and sustainability",
      "Manage membership fee collection and financial systems",
    ],
  },
  {
    title: "Regional Directors",
    icon: Users,
    level: "Regional Leadership",
    responsibilities: [
      "Lead UPTECH activities and membership engagement in assigned regions",
      "Coordinate local events, meetups, and networking sessions",
      "Identify and develop regional partnerships and opportunities",
      "Report on regional performance and member feedback",
      "Represent UPTECH at regional forums and conferences",
    ],
  },
];

const operatingProcedures = [
  { title: "Board Meetings", desc: "The Board of Directors meets quarterly to review performance, approve budgets, and set strategic direction. Emergency meetings may be called by the Chairman or CEO." },
  { title: "General Assembly", desc: "An Annual General Meeting (AGM) is held for all members to review the year's progress, elect officers, and vote on major resolutions." },
  { title: "Committee Formation", desc: "Standing and ad-hoc committees are formed for specific functions such as events, membership, technology, and governance. Each committee has a defined terms of reference." },
  { title: "Decision Making", desc: "Decisions at Board level require a simple majority. Constitutional amendments require a two-thirds majority at a General Assembly." },
  { title: "Financial Procedures", desc: "All expenditures above a defined threshold require dual authorisation. Annual accounts are independently audited and presented at the AGM." },
  { title: "Membership Processes", desc: "Applications are reviewed within 5 working days. Approved members receive onboarding materials, access to the portal, and are assigned to relevant committees and regional groups." },
];

export default function StructurePage() {
  return (
    <div>
      <PageHero
        title="Structure & Operating Procedure"
        subtitle="A transparent governance framework that ensures accountability, effectiveness, and member representation at every level."
        image="/image/london-images/governance-ethics.jpg"
      />

      {/* Overview */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Our Framework" title="Organisational Structure" subtitle="UPTECH operates through a clearly defined hierarchy with defined roles, responsibilities, and reporting lines to ensure effective governance and delivery." />
          <p className="text-[#3D4152] text-base leading-relaxed max-w-3xl mb-8">
            Our organisational structure combines strategic leadership with operational excellence. Each role has clearly defined responsibilities, and all office bearers are accountable to the Board and the membership through transparent reporting and regular review.
          </p>
        </AnimatedSection>
      </Section>

      {/* Org Chart */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Leadership Roles" title="Key Positions & Responsibilities" />
          <div className="grid md:grid-cols-2 gap-6">
            {orgChart.map((role) => {
              const Icon = role.icon;
              return (
                <div key={role.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-[#2563EB] flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <h3 className="font-heading font-bold text-base text-[#1C1F2E]">{role.title}</h3>
                      <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wide">{role.level}</span>
                    </div>
                  </div>
                  <div className="h-px bg-[#D8D5CF] mb-4" />
                  <ul className="space-y-2">
                    {role.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                        <span className="text-sm text-[#3D4152] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Operating Procedures */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="How We Operate" title="Operating Procedures" subtitle="Key processes and procedures that ensure transparent and effective operations." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operatingProcedures.map((item) => (
              <div key={item.title} className="border-t-2 border-[#2563EB] bg-white rounded p-6">
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-3">{item.title}</h3>
                <p className="text-sm text-[#3D4152] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Get Involved</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Transparent Governance, Collective Impact
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Our structure ensures every member has a voice. Learn more about how you can contribute to UPTECH&apos;s mission.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Become a Member</Button>
              <Button href="/leadership" variant="glass" size="lg" showArrow>Leadership & Governance</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
