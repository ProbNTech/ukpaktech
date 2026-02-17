"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { AnimatedUnderline } from "@/components/AnimatedUnderline";
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
  Mail,
  ArrowRight,
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
    <div className="pt-0">
      {/* Hero Section */}
      <PageHero
        title={
          <span className="relative inline-block">
            Careers at UPTECH
            <AnimatedUnderline />
          </span>
        }
        subtitle="Join the UPTECH team and help shape the future of UK–Pakistan technology collaboration."
      />

      {/* Why Work With UPTECH */}
      <Section variant="dark" className="relative overflow-hidden">
        {/* Brand accent gradient top line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2D5BFF]/60 via-[#22C55E]/40 to-transparent" />
        
        {/* Subtle background effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2D5BFF]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Why Work With UPTECH"
              subtitle="Join a mission-driven organization building bridges between UK and Pakistan technology ecosystems"
              align="center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {whyWorkCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
                >
                  <Card variant="dark" hover className="h-full relative overflow-hidden group">
                    {/* Top brand accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#2D5BFF]/50 via-[#22C55E]/30 to-transparent opacity-60" />
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-2xl bg-[#2D5BFF]/20 border border-[#2D5BFF]/30 flex items-center justify-center mb-6 group-hover:bg-[#2D5BFF]/30 group-hover:border-[#2D5BFF]/50 transition-all duration-300">
                        <card.icon className="w-8 h-8 text-[#2D5BFF]" />
                      </div>
                      <h3 className="font-heading font-semibold text-xl mb-3 text-[#0F172A] group-hover:text-[#2D5BFF] transition-colors duration-300">{card.title}</h3>
                      <p className="text-sm text-[rgba(15,23,42,0.85)] leading-relaxed">{card.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(15,23,42,0.1)] to-transparent" />
      </Section>

      {/* Opportunity Types */}
      <Section className="relative overflow-hidden">
        {/* Brand accent gradient top line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#22C55E]/50 via-[#2D5BFF]/40 to-transparent" />
        
        {/* Subtle background effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#22C55E]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Opportunity Types"
              subtitle="Explore different ways to join the UPTECH team"
              align="center"
            />
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {opportunityTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(type.id)}
                  className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5 ${
                    activeTab === type.id
                      ? "bg-[#2D5BFF] text-white shadow-lg shadow-[#2D5BFF]/30"
                      : "bg-white border border-[rgba(11,18,32,0.1)] text-[rgba(11,18,32,0.75)] hover:border-[#2D5BFF]/40 hover:bg-[#2D5BFF]/5 hover:shadow-md"
                  }`}
                >
                  <type.icon className="w-4 h-4" />
                  {type.label}
                </button>
              ))}
            </div>
            <div className="text-center">
              <p className="text-lg text-[rgba(11,18,32,0.75)]">
                {activeTab === "full-time" && "Full-time positions offer comprehensive benefits and long-term career growth."}
                {activeTab === "part-time" && "Part-time roles provide flexibility while contributing to our mission."}
                {activeTab === "contract" && "Contract opportunities for project-based work and specialized expertise."}
                {activeTab === "internship" && "Internship programs for students and early-career professionals."}
              </p>
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(11,18,32,0.08)] to-transparent" />
      </Section>

      {/* Values & Standards */}
      <Section variant="dark" className="relative overflow-hidden">
        {/* Brand accent gradient top line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2563EB]/50 via-[#2D5BFF]/30 to-transparent" />
        
        {/* Subtle background effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-[#2563EB]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Our Values & Standards"
              subtitle="The principles that guide our work and culture"
              align="center"
            />
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#2D5BFF] flex-shrink-0 mt-0.5 group-hover:text-[#22C55E] transition-colors duration-300" />
                  <span className="text-[rgba(15,23,42,0.9)] leading-relaxed">{value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(15,23,42,0.1)] to-transparent" />
      </Section>

      {/* Hiring Steps */}
      <Section className="relative overflow-hidden">
        {/* Brand accent gradient top line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2D5BFF]/50 via-[#22C55E]/30 to-transparent" />
        
        {/* Subtle background effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none" />
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-b from-[#2D5BFF]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
        
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Our Hiring Process"
              subtitle="A straightforward process designed to find the right fit"
              align="center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {hiringSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
                >
                  <Card hover className="h-full text-center relative overflow-hidden group">
                    {/* Top brand accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#2D5BFF]/50 via-[#22C55E]/30 to-transparent opacity-60" />
                    
                    <div className="text-4xl font-heading font-bold text-[#2D5BFF] mb-4 group-hover:text-[#22C55E] transition-colors duration-300">{step.step}</div>
                    <h3 className="font-heading font-semibold text-xl mb-3 text-[#0F172A]">{step.title}</h3>
                    <p className="text-sm text-[rgba(11,18,32,0.75)] leading-relaxed">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(11,18,32,0.08)] to-transparent" />
      </Section>

      {/* Open Roles */}
      <Section variant="dark" className="relative overflow-hidden">
        {/* Brand accent gradient top line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2563EB]/50 via-[#2D5BFF]/30 to-transparent" />
        
        {/* Subtle background effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#2563EB]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Open Roles"
              subtitle="Current opportunities at UPTECH"
              align="center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {openRoles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
                >
                  <Card variant="dark" hover className="h-full relative overflow-hidden group">
                    {/* Top brand accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#2D5BFF]/50 via-[#22C55E]/30 to-transparent opacity-60" />
                    
                    <div className="mb-4">
                      <div className="inline-block px-3 py-1 rounded-full bg-[#2D5BFF]/20 border border-[#2D5BFF]/30 mb-3 group-hover:bg-[#2D5BFF]/30 group-hover:border-[#2D5BFF]/50 transition-all duration-300">
                        <span className="text-xs font-semibold text-[#2D5BFF]">{role.department}</span>
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-2 text-[#0F172A] group-hover:text-[#2D5BFF] transition-colors duration-300">{role.title}</h3>
                    </div>
                    <div className="space-y-2 text-sm text-[rgba(15,23,42,0.85)] mb-4">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-[#2D5BFF]" />
                        <span>{role.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#2D5BFF]" />
                        <span>{role.location}</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-[rgba(234,242,255,0.15)]">
                      <span className="text-xs font-medium text-[rgba(15,23,42,0.75)]">Status: {role.status}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-[rgba(15,23,42,0.75)] mb-4">
                All positions are currently TBD. Check back soon for updates.
              </p>
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(15,23,42,0.1)] to-transparent" />
      </Section>

      {/* Apply Form */}
      <Section className="relative overflow-hidden">
        {/* Brand accent gradient top line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2D5BFF]/50 via-[#22C55E]/30 to-transparent" />
        
        {/* Subtle background effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2D5BFF]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <SectionHeader
              title="Express Interest"
              subtitle="Submit your information and we'll be in touch when opportunities become available"
              align="center"
            />
            <Card className="mt-8 relative overflow-hidden group">
              {/* Top brand accent line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#2D5BFF]/50 via-[#22C55E]/30 to-transparent opacity-60" />
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(11,18,32,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#2D5BFF]/20 focus:border-[#2D5BFF]/40 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(11,18,32,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#2D5BFF]/20 focus:border-[#2D5BFF]/40 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-2">Interest Area</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-[rgba(11,18,32,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#2D5BFF]/20 focus:border-[#2D5BFF]/40 transition-all">
                    <option>Select an area</option>
                    <option>Programs</option>
                    <option>Ecosystem</option>
                    <option>Operations</option>
                    <option>Research</option>
                    <option>Technology</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(11,18,32,0.1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#2D5BFF]/20 focus:border-[#2D5BFF]/40 transition-all resize-none"
                    placeholder="Tell us about your interest in UPTECH..."
                  />
                </div>
                <Button variant="primary" size="lg" className="w-full">
                  Submit Interest
                </Button>
              </form>
            </Card>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(11,18,32,0.08)] to-transparent" />
      </Section>

      {/* CTA */}
      <Section variant="dark" className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#2D5BFF] via-[#22C55E] to-[#2563EB] rounded-full opacity-[0.15] blur-[250px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(15,23,42,0.1)] to-transparent" />
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center relative z-10 py-20">
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-[#0F172A]"
            >
              Ready to Join UPTECH?
            </motion.h2>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-[rgba(15,23,42,0.85)] mb-10 leading-relaxed"
            >
              Be part of a team building the future of UK–Pakistan technology collaboration.
            </motion.p>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button href="/contact" variant="primary" size="lg" showArrow>
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(15,23,42,0.1)] to-transparent" />
      </Section>
    </div>
  );
}
