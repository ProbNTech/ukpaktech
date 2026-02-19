"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Code,
  Building2,
  CheckCircle2,
  FileText,
} from "lucide-react";

export default function CareersClient() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState("full-time");

  const whyWorkCards = [
    {
      icon: Target,
      title: "Mission-Driven Impact",
      description: "Shape the future of UK–Pakistan technology collaboration.",
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Connect with leading professionals across both nations.",
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Develop skills in a dynamic, international environment.",
    },
    {
      icon: TrendingUp,
      title: "Innovation Focus",
      description: "Work on cutting-edge technology and policy initiatives.",
    },
  ];

  const opportunityTypes = [
    { id: "full-time", label: "Full-Time", icon: Briefcase },
    { id: "part-time", label: "Part-Time", icon: Code },
    { id: "contract", label: "Contract", icon: FileText },
    { id: "internship", label: "Internship", icon: GraduationCap },
  ];

  const tabDescriptions: Record<string, string> = {
    "full-time": "Full-time positions offer comprehensive benefits and long-term career growth.",
    "part-time": "Part-time roles provide flexibility while contributing to our mission.",
    "contract": "Contract opportunities for project-based work and specialized expertise.",
    "internship": "Internship programs for students and early-career professionals.",
  };

  const values = [
    "Ethical governance and transparency",
    "Cross-cultural collaboration",
    "Innovation and excellence",
    "Professional integrity",
    "Long-term impact focus",
  ];

  const hiringSteps = [
    {
      step: "01",
      title: "Application",
      description: "Submit your application through our portal.",
    },
    {
      step: "02",
      title: "Review",
      description: "Our team reviews your qualifications and experience.",
    },
    {
      step: "03",
      title: "Interview",
      description: "Participate in interviews with our team members.",
    },
    {
      step: "04",
      title: "Decision",
      description: "Receive feedback and join the UPTECH team.",
    },
  ];

  const openRoles = [
    {
      title: "Technology Program Manager",
      department: "Programs",
      type: "Full-Time",
      location: "London, UK / Remote",
      status: "TBD",
    },
    {
      title: "Partnership Development Lead",
      department: "Ecosystem",
      type: "Full-Time",
      location: "London, UK",
      status: "TBD",
    },
    {
      title: "Communications Specialist",
      department: "Operations",
      type: "Full-Time",
      location: "Remote",
      status: "TBD",
    },
    {
      title: "Policy Research Analyst",
      department: "Research",
      type: "Part-Time",
      location: "London, UK / Remote",
      status: "TBD",
    },
    {
      title: "Events Coordinator",
      department: "Operations",
      type: "Contract",
      location: "London, UK",
      status: "TBD",
    },
    {
      title: "Software Development Intern",
      department: "Technology",
      type: "Internship",
      location: "Remote",
      status: "TBD",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <PageHero
        title="Careers at UPTECH"
        subtitle="Join the UPTECH team and help shape the future of UK–Pakistan technology collaboration."
        image="/image/london-images/5.jpg"
      />

      {/* Why Work With UPTECH */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Why join us"
            title="Why Work With UPTECH"
            subtitle="Join a mission-driven organization building bridges between UK and Pakistan technology ecosystems."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWorkCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card variant="light" className="h-full">
                    <Icon className="w-7 h-7 text-[#2563EB] mb-5" />
                    <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">{card.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-sm text-[#3D4152] leading-relaxed">{card.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Opportunity Types */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Roles"
            title="Opportunity Types"
            subtitle="Explore different ways to join the UPTECH team."
          />
          <div className="flex flex-wrap gap-3 mb-10">
            {opportunityTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(type.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-sm transition-colors duration-200 ${
                    activeTab === type.id
                      ? "bg-[#1C1F2E] text-white"
                      : "bg-white border border-[#D8D5CF] text-[#3D4152] hover:border-[#1C1F2E]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {type.label}
                </button>
              );
            })}
          </div>
          <div className="bg-white border border-[#D8D5CF] p-6">
            <p className="text-base text-[#3D4152] leading-relaxed">
              {tabDescriptions[activeTab]}
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Values & Standards */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Culture"
            title="Our Values &amp; Standards"
            subtitle="The principles that guide our work and culture."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white border border-[#D8D5CF] p-5"
              >
                <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                <span className="text-base text-[#3D4152] leading-relaxed">{value}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Hiring Steps */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="Our Hiring Process"
            subtitle="A straightforward process designed to find the right fit."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <p className="text-3xl font-heading font-bold text-[#2563EB] mb-4">{step.step}</p>
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">{step.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Open Roles */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Opportunities"
            title="Open Roles"
            subtitle="Current opportunities at UPTECH."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="light" className="h-full">
                  <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wide mb-3 block">
                    {role.department}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-3">{role.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-4" />
                  <div className="space-y-2 text-sm text-[#3D4152] mb-4">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#2563EB]" />
                      <span>{role.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#2563EB]" />
                      <span>{role.location}</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#7A7E8F] font-medium">Status: {role.status}</p>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-[#7A7E8F] mt-8">
            All positions are currently TBD. Check back soon for updates.
          </p>
        </AnimatedSection>
      </Section>

      {/* Express Interest Form */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                label="Apply"
                title="Express Interest"
                subtitle="Submit your information and we'll be in touch when opportunities become available."
              />
            </div>
            <div>
              <Card className="bg-white border border-[#D8D5CF]">
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1C1F2E] mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-[#D8D5CF] bg-white text-[#1C1F2E] focus:outline-none focus:border-[#2563EB] transition-colors duration-200 text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1C1F2E] mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-[#D8D5CF] bg-white text-[#1C1F2E] focus:outline-none focus:border-[#2563EB] transition-colors duration-200 text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1C1F2E] mb-2">Interest Area</label>
                    <select className="w-full px-4 py-3 border border-[#D8D5CF] bg-white text-[#1C1F2E] focus:outline-none focus:border-[#2563EB] transition-colors duration-200 text-sm">
                      <option>Select an area</option>
                      <option>Programs</option>
                      <option>Ecosystem</option>
                      <option>Operations</option>
                      <option>Research</option>
                      <option>Technology</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1C1F2E] mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-[#D8D5CF] bg-white text-[#1C1F2E] focus:outline-none focus:border-[#2563EB] transition-colors duration-200 resize-none text-sm"
                      placeholder="Tell us about your interest in UPTECH..."
                    />
                  </div>
                  <Button variant="primary" size="lg" className="w-full">
                    Submit Interest
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#22C55E] mb-4">
              Join us
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-none text-white mb-5">
              Ready to Join UPTECH?
            </h2>
            <div className="h-px bg-white/20 mb-6" />
            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
              Be part of a team building the future of UK–Pakistan technology collaboration.
            </p>
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Get in Touch
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
