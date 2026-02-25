"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { motion, useReducedMotion } from "framer-motion";
import {
  Search, Building2, Users, Briefcase, Globe2, Cpu, Shield,
  TrendingUp, BarChart3, FileText, CheckCircle2, MapPin,
  GraduationCap, Rocket, Clock, UserCheck, Send, Layers,
} from "lucide-react";

const forEmployers = [
  "Post job openings and internships to a targeted tech audience",
  "Reach qualified candidates across the UK, Europe, Middle East and Pakistan",
  "Access a curated pool of technology professionals from both nations",
];

const forJobSeekers = [
  "Explore opportunities in innovative technology companies",
  "Apply directly to UK and Pakistan-based organisations",
  "Stay informed about industry trends, skills requirements and career resources",
];

const quickFilters = [
  {
    icon: MapPin,
    title: "Location",
    tags: ["United Kingdom", "Pakistan", "Remote", "Europe", "Middle East"],
  },
  {
    icon: Cpu,
    title: "Sector",
    tags: ["AI & ML", "Cybersecurity", "FinTech", "Smart Cities", "Green Tech", "Digital Govt"],
  },
  {
    icon: Clock,
    title: "Job Type",
    tags: ["Full-Time", "Part-Time", "Internship", "Contract", "Freelance"],
  },
];

const howItWorks = [
  { step: "01", icon: UserCheck, title: "Register", desc: "Create your profile as a candidate or employer and join the UPTECH network.", outcome: "Account activated" },
  { step: "02", icon: Search, title: "Browse or Post", desc: "Job seekers explore listings with advanced filters. Employers post openings with detailed requirements.", outcome: "Matched to opportunities" },
  { step: "03", icon: Send, title: "Apply or Review", desc: "Candidates apply directly. Employers review applications, shortlist, and connect with talent.", outcome: "Applications submitted" },
  { step: "04", icon: Briefcase, title: "Connect & Hire", desc: "Schedule interviews, make offers, and build cross-border technology teams.", outcome: "Talent connected" },
];

const upcomingFeatures = [
  { icon: Layers, title: "Job Listings", desc: "Browse and filter hundreds of technology roles across both nations with advanced search and saved alerts.", badge: "Coming Soon" },
  { icon: Users, title: "Candidate Portal", desc: "Complete profile setup, resume upload, application tracking, and personalised job recommendations.", badge: "Coming Soon" },
  { icon: Building2, title: "Employer Portal", desc: "Post jobs, manage applications, shortlist candidates, and access recruitment analytics.", badge: "Coming Soon" },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Track views, applications, and hiring metrics. Data-driven insights for better recruitment.", badge: "Coming Soon" },
];

const portalFeatures = [
  { icon: Globe2, title: "Cross-Border Reach", desc: "Connect talent and employers across UK, Pakistan, Europe, and the Middle East." },
  { icon: Shield, title: "Verified Profiles", desc: "All candidates and employers are verified through the UPTECH membership network." },
  { icon: TrendingUp, title: "Career Growth", desc: "Access career tips, market insights, and professional development resources." },
  { icon: GraduationCap, title: "Internship Pipeline", desc: "Dedicated pathways for students and graduates entering the tech workforce." },
  { icon: FileText, title: "Smart Matching", desc: "AI-powered recommendations matching candidates with roles based on skills and preferences." },
  { icon: Rocket, title: "Fast-Track Hiring", desc: "Streamlined application process designed for speed and quality of hire." },
];

export default function JobPortalPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <PageHero
        title="Find Your Next Tech Opportunity"
        subtitle="Explore, Apply, Connect: UPTECH Job Portal links skilled professionals with leading technology companies across the UK, Europe, Middle East and Pakistan."
        image="/image/london-images/professional-networking.jpg"
      >
        <div className="flex flex-wrap gap-4 mt-2">
          <Button href="#coming-soon" variant="glass" showArrow>Browse Jobs</Button>
          <Button href="#coming-soon" variant="ghost" showArrow>Post a Job</Button>
        </div>
      </PageHero>

      {/* Intro: For Employers | For Job Seekers */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Who It's For"
            title="Connecting Talent with Technology"
            subtitle="Our Job Portal is designed to connect skilled professionals with leading technology organisations across the UK–Pakistan corridor."
          />
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Employers */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-[#D8D5CF] rounded p-8 hover:border-[#2563EB]/40 transition-colors duration-300"
            >
              <Building2 className="w-8 h-8 text-[#2563EB] mb-5" strokeWidth={1.5} />
              <h3 className="font-heading font-bold text-xl text-[#1C1F2E] mb-2">For Employers</h3>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <ul className="space-y-3">
                {forEmployers.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm text-[#3D4152] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Job Seekers */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-[#D8D5CF] rounded p-8 hover:border-[#2563EB]/40 transition-colors duration-300"
            >
              <Users className="w-8 h-8 text-[#22C55E] mb-5" strokeWidth={1.5} />
              <h3 className="font-heading font-bold text-xl text-[#1C1F2E] mb-2">For Job Seekers</h3>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <ul className="space-y-3">
                {forJobSeekers.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm text-[#3D4152] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Quick Filters Preview */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Explore Opportunities"
            title="Search by Category"
            subtitle="Filter roles by location, sector, and job type to find the perfect match."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {quickFilters.map((filter, i) => {
              const Icon = filter.icon;
              return (
                <motion.div
                  key={filter.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white border border-[#D8D5CF] rounded p-6"
                >
                  <Icon className="w-6 h-6 text-[#2563EB] mb-3" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-4">{filter.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {filter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-[#EEECEA] text-[#3D4152] text-xs font-medium rounded-full border border-[#D8D5CF]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Portal Features */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Platform Features"
            title="Why UPTECH Job Portal"
            subtitle="A purpose-built platform empowering cross-border technology careers and workforce development."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portalFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300"
                >
                  <Icon className="w-6 h-6 text-[#2563EB] mb-3" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{item.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* How It Works */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Process"
            title="How It Works"
            subtitle="A streamlined journey from registration to hire — connecting talent with opportunity."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="border-t-2 border-[#2563EB] bg-white rounded p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-heading font-bold text-[#2563EB]">{item.step}</span>
                    <Icon className="w-5 h-5 text-[#7A7E8F]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#3D4152] leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" strokeWidth={2} />
                    <span className="text-xs font-semibold text-[#22C55E]">{item.outcome}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* What's Coming */}
      <Section variant="light" id="coming-soon">
        <AnimatedSection>
          <SectionHeader
            label="Roadmap"
            title="What&apos;s Coming"
            subtitle="We're building the most comprehensive cross-border tech careers platform. Here's what's on the way."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white border border-[#D8D5CF] rounded p-6 relative overflow-hidden"
                >
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#2563EB]/10 text-[#2563EB] text-[10px] font-bold uppercase tracking-wide rounded-full">
                    {item.badge}
                  </span>
                  <Icon className="w-7 h-7 text-[#2563EB] mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{item.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">The Future of Work</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              The Future of Cross-Border Tech Careers
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Empowering technology talent and fostering cross-border collaboration — our Job Portal helps build the workforce of the future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Become a Member</Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>Contact Us</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
