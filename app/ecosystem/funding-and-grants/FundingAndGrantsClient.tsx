"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { AnimatedUnderline } from "@/components/AnimatedUnderline";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  DollarSign,
  Award,
  TrendingUp,
  Target,
  CheckCircle2,
  FileText,
  Briefcase,
  Lightbulb,
  Users,
  Globe2,
  ArrowRight,
  Sparkles,
  Network,
} from "lucide-react";

export default function FundingAndGrantsClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <PageHero
        title={
          <span className="relative inline-block">
            Funding and Grants
            <AnimatedUnderline />
          </span>
        }
        subtitle="Access funding opportunities to drive technology innovation and cross-border collaboration."
      />

      {/* Overview Section */}
      <Section variant="dark" className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#2D5BFF] rounded-full opacity-[0.08] blur-[180px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.2, 1],
              x: [0, 40, 0],
              y: [0, -30, 0],
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#00B140] rounded-full opacity-[0.06] blur-[150px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.25, 1],
              x: [0, -30, 0],
              y: [0, 40, 0],
              opacity: [0.06, 0.1, 0.06],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] bg-[#2563EB] rounded-full opacity-[0.05] blur-[140px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.15, 1],
              x: [0, 25, 0],
              y: [0, -25, 0],
              opacity: [0.05, 0.08, 0.05],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative">
                  <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-[#EAF2FF] relative inline-block">
                    Funding and Grants
                    <motion.div
                      className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-[#1E40AF] via-[#00B140] to-[#2563EB] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    />
                  </h2>
                </div>
                <p className="text-lg text-[rgba(234,242,255,0.75)] mb-8">
                  Access financial support to drive technology innovation and cross-border collaboration.
                </p>
                <div className="space-y-5 text-[rgba(234,242,255,0.85)] leading-relaxed mt-8 text-base">
                  <p>
                    UPTECH provides access to funding opportunities and grants designed to support technology innovation, startup growth, and cross-border collaboration between the UK and Pakistan. Our funding programs enable entrepreneurs, researchers, and organizations to turn innovative ideas into reality.
                  </p>
                  <p>
                    Whether you&apos;re a startup seeking seed funding, a researcher looking for grant support, or an enterprise exploring partnership opportunities, we connect you with the right funding sources and resources.
                  </p>
                </div>
              </motion.div>
              <div className="grid grid-cols-1 gap-4">
                <FundingCard
                  icon={DollarSign}
                  title="Startup Funding"
                  description="Seed and early-stage funding for innovative technology startups."
                  index={0}
                />
                <FundingCard
                  icon={Award}
                  title="Research Grants"
                  description="Support for academic research and technology development projects."
                  index={1}
                />
                <FundingCard
                  icon={TrendingUp}
                  title="Growth Capital"
                  description="Investment opportunities for scaling technology businesses."
                  index={2}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
      </Section>

      {/* Funding Opportunities */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#2D5BFF] rounded-full opacity-[0.05] blur-[150px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.3, 1],
              x: [0, 40, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#00B140] rounded-full opacity-[0.04] blur-[140px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.25, 1],
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[#2563EB] rounded-full opacity-[0.03] blur-[130px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.2, 1],
              x: [0, 25, 0],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E40AF]/20 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12"
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-[#0B1220] relative inline-block">
                Available Funding Opportunities
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-[#1E40AF] via-[#00B140] to-[#2563EB] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                />
              </h2>
              <p className="text-lg text-[rgba(11,18,32,0.68)]">
                Explore our range of funding programs designed to support technology innovation and collaboration.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <OpportunityCard
                icon={Lightbulb}
                title="Innovation Grants"
                description="Funding for innovative technology projects that demonstrate potential for cross-border impact."
                index={0}
              />
              <OpportunityCard
                icon={Users}
                title="Startup Accelerator"
                description="Comprehensive support including funding, mentorship, and access to networks."
                index={1}
              />
              <OpportunityCard
                icon={Globe2}
                title="Bilateral Projects"
                description="Grants for collaborative projects between UK and Pakistan organizations."
                index={2}
              />
              <OpportunityCard
                icon={Target}
                title="Research & Development"
                description="Support for R&D initiatives in emerging technologies and digital transformation."
                index={3}
              />
              <OpportunityCard
                icon={Briefcase}
                title="Enterprise Partnerships"
                description="Funding opportunities for established companies expanding cross-border operations."
                index={4}
              />
              <OpportunityCard
                icon={FileText}
                title="Skills Development"
                description="Grants for programs that enhance technology skills and workforce capabilities."
                index={5}
              />
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E40AF]/20 to-transparent" />
      </Section>

      {/* Eligibility Criteria */}
      <Section variant="dark" className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-[#2D5BFF] rounded-full opacity-[0.08] blur-[170px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.25, 1],
              x: [0, 35, 0],
              y: [0, -30, 0],
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 left-1/4 w-[480px] h-[480px] bg-[#00B140] rounded-full opacity-[0.06] blur-[160px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.2, 1],
              x: [0, -25, 0],
              y: [0, 35, 0],
              opacity: [0.06, 0.1, 0.06],
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-[420px] h-[420px] bg-[#2563EB] rounded-full opacity-[0.05] blur-[150px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.15, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
              opacity: [0.05, 0.08, 0.05],
            }}
            transition={{
              duration: 21,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative">
                  <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-[#EAF2FF] relative inline-block">
                    Eligibility Criteria
                    <motion.div
                      className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-[#1E40AF] via-[#00B140] to-[#2563EB] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    />
                  </h2>
                </div>
                <p className="text-lg text-[rgba(234,242,255,0.75)] mb-8">
                  Understanding the requirements for funding and grant applications.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Technology-focused projects with clear innovation potential",
                    "Alignment with UK–Pakistan technology partnership objectives",
                    "Demonstrated commitment to cross-border collaboration",
                    "Viable business model or research proposal",
                    "Experienced team with relevant expertise",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <motion.div
                        animate={shouldReduceMotion ? {} : {
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: index % 3 === 0 ? "#2D5BFF" : index % 3 === 1 ? "#00B140" : "#2563EB" }} />
                      </motion.div>
                      <span className="text-[rgba(234,242,255,0.85)] leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="relative"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="bg-gradient-to-br from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-3xl border border-[rgba(234,242,255,0.15)] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                  whileHover={{
                    borderColor: "rgba(30, 64, 175, 0.3)",
                    boxShadow: "0_12px_40px_rgba(30,64,175,0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-[#1E40AF]/20 border border-[#1E40AF]/30 flex items-center justify-center"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(30, 64, 175, 0.25)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <FileText className="w-6 h-6 text-[#1E40AF]" />
                      </motion.div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-[#EAF2FF]">Application Process</h3>
                        <p className="text-sm text-[rgba(234,242,255,0.7)]">Simple and streamlined</p>
                      </div>
                    </div>
                    <div className="space-y-4 pt-4 border-t border-[rgba(234,242,255,0.1)]">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#1E40AF]/20 border border-[#1E40AF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-[#1E40AF]">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#EAF2FF] mb-1">Submit Application</h4>
                          <p className="text-sm text-[rgba(234,242,255,0.7)]">Complete the online application form with project details</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#1E40AF]/20 border border-[#1E40AF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-[#1E40AF]">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#EAF2FF] mb-1">Review Process</h4>
                          <p className="text-sm text-[rgba(234,242,255,0.7)]">Expert panel evaluates your proposal</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#1E40AF]/20 border border-[#1E40AF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-[#1E40AF]">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#EAF2FF] mb-1">Funding Decision</h4>
                          <p className="text-sm text-[rgba(234,242,255,0.7)]">Notification and disbursement of funds</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
      </Section>

      {/* Benefits Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-[#2D5BFF] rounded-full opacity-[0.05] blur-[140px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.3, 1],
              x: [0, 30, 0],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#00B140] rounded-full opacity-[0.04] blur-[130px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.25, 1],
              x: [0, -25, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/4 right-1/3 w-[380px] h-[380px] bg-[#2563EB] rounded-full opacity-[0.03] blur-[120px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E40AF]/20 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12"
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-[#0B1220] relative inline-block">
                Benefits of Our Funding Programs
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-[#1E40AF] via-[#00B140] to-[#2563EB] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                />
              </h2>
              <p className="text-lg text-[rgba(11,18,32,0.68)]">
                Beyond financial support, we provide comprehensive resources to help you succeed.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <BenefitCard
                icon={DollarSign}
                title="Financial Support"
                description="Access to capital for project development and scaling."
                index={0}
              />
              <BenefitCard
                icon={Users}
                title="Mentorship"
                description="Guidance from experienced industry leaders and experts."
                index={1}
              />
              <BenefitCard
                icon={Network}
                title="Networking"
                description="Connect with investors, partners, and potential collaborators."
                index={2}
              />
              <BenefitCard
                icon={Target}
                title="Market Access"
                description="Opportunities to expand into UK and Pakistan markets."
                index={3}
              />
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E40AF]/20 to-transparent" />
      </Section>

      {/* CTA Section */}
      <Section variant="dark" className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#2D5BFF] via-[#00B140] to-[#2563EB] rounded-full opacity-[0.2] blur-[250px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#2D5BFF] rounded-full opacity-[0.1] blur-[180px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.2, 1],
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-[550px] h-[550px] bg-[#00B140] rounded-full opacity-[0.08] blur-[160px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.25, 1],
              x: [0, -35, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#2563EB] rounded-full opacity-[0.06] blur-[150px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.15, 1],
              x: [0, 30, 0],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center relative z-10 py-20">
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-[#EAF2FF]"
            >
              Ready to Secure Funding?
            </motion.h2>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-[rgba(234,242,255,0.85)] mb-10 leading-relaxed"
            >
              Explore funding opportunities and take your technology innovation to the next level.
            </motion.p>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button href="/membership" variant="primary" size="lg" showArrow>
                Become a Member
              </Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>
                Contact Us
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
      </Section>
    </div>
  );
}


// Funding Card Component
function FundingCard({ icon: Icon, title, description, index }: { icon: any; title: string; description: string; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  const colors = [
    { bg: "#2D5BFF", border: "#2D5BFF", glow: "rgba(45, 91, 255, 0.3)" },
    { bg: "#00B140", border: "#00B140", glow: "rgba(0, 177, 64, 0.3)" },
    { bg: "#2563EB", border: "#2563EB", glow: "rgba(225, 29, 72, 0.3)" },
  ];
  const color = colors[index % colors.length];

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? {} : { y: -10, scale: 1.03 }}
    >
      <motion.div
        className="relative bg-gradient-to-br from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border p-6 h-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-300"
        style={{
          borderColor: isHovered ? `${color.border}40` : "rgba(234,242,255,0.15)",
          boxShadow: isHovered ? `0_12px_40px_${color.glow}` : "0_8px_32px_rgba(0,0,0,0.12)",
        }}
      >
        {/* Animated gradient border on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0"
          style={{
            background: `linear-gradient(135deg, ${color.bg}20, transparent, ${color.bg}10)`,
          }}
          animate={isHovered && !shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Top accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, ${color.bg}, ${color.bg}80, transparent)` }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
        />

        <div className="relative z-10 flex items-start gap-4">
          <motion.div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `${color.bg}20`,
              border: `1px solid ${color.border}40`,
            }}
            whileHover={shouldReduceMotion ? {} : {
              scale: 1.2,
              rotate: [0, -5, 5, -5, 0],
              backgroundColor: `${color.bg}35`,
              borderColor: `${color.border}60`,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={isHovered && !shouldReduceMotion ? {
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              } : {}}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-6 h-6" style={{ color: color.bg }} />
            </motion.div>
          </motion.div>
          <div>
            <h3 className="font-heading font-semibold text-lg mb-2 text-[#EAF2FF]">{title}</h3>
            <p className="text-sm text-[rgba(234,242,255,0.75)] leading-relaxed">{description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Opportunity Card Component
function OpportunityCard({ icon: Icon, title, description, index }: { icon: any; title: string; description: string; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  const colors = [
    { bg: "#2D5BFF", border: "#2D5BFF", glow: "rgba(45, 91, 255, 0.25)" },
    { bg: "#00B140", border: "#00B140", glow: "rgba(0, 177, 64, 0.25)" },
    { bg: "#2563EB", border: "#2563EB", glow: "rgba(225, 29, 72, 0.25)" },
  ];
  const color = colors[index % colors.length];

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? {} : { y: -10, scale: 1.03 }}
    >
      <motion.div
        className="relative bg-white rounded-2xl border p-6 h-full shadow-sm transition-all duration-300 overflow-hidden"
        style={{
          borderColor: isHovered ? `${color.border}40` : "rgba(11,18,32,0.10)",
          boxShadow: isHovered ? `0_16px_48px_${color.glow}` : "0_4px_16px_rgba(0,0,0,0.05)",
        }}
      >
        {/* Animated gradient background on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0"
          style={{
            background: `linear-gradient(135deg, ${color.bg}08, transparent, ${color.bg}05)`,
          }}
          animate={isHovered && !shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Top accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, ${color.bg}, ${color.bg}80, transparent)` }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
        />

        <div className="relative z-10 flex flex-col">
          <motion.div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
            style={{
              background: `linear-gradient(135deg, ${color.bg}15, ${color.bg}08)`,
              border: `1px solid ${color.border}30`,
            }}
            whileHover={shouldReduceMotion ? {} : {
              scale: 1.2,
              rotate: [0, -10, 10, -10, 0],
              backgroundColor: `${color.bg}25`,
              borderColor: `${color.border}50`,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={isHovered && !shouldReduceMotion ? {
                scale: [1, 1.3, 1],
                rotate: [0, 15, -15, 0],
              } : {}}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-7 h-7" style={{ color: color.bg }} />
            </motion.div>
          </motion.div>
          <h3 className="font-heading font-semibold text-xl mb-3 text-[#0B1220]">{title}</h3>
          <p className="text-sm text-[rgba(11,18,32,0.68)] leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Benefit Card Component
function BenefitCard({ icon: Icon, title, description, index }: { icon: any; title: string; description: string; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  const colors = [
    { bg: "#2D5BFF", border: "#2D5BFF", glow: "rgba(45, 91, 255, 0.25)" },
    { bg: "#00B140", border: "#00B140", glow: "rgba(0, 177, 64, 0.25)" },
    { bg: "#2563EB", border: "#2563EB", glow: "rgba(225, 29, 72, 0.25)" },
    { bg: "#2D5BFF", border: "#2D5BFF", glow: "rgba(45, 91, 255, 0.25)" },
  ];
  const color = colors[index % colors.length];

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? {} : { y: -10, scale: 1.03 }}
    >
      <motion.div
        className="relative bg-white rounded-2xl border p-6 h-full shadow-sm transition-all duration-300 overflow-hidden"
        style={{
          borderColor: isHovered ? `${color.border}40` : "rgba(11,18,32,0.10)",
          boxShadow: isHovered ? `0_16px_48px_${color.glow}` : "0_4px_16px_rgba(0,0,0,0.05)",
        }}
      >
        {/* Animated gradient background on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0"
          style={{
            background: `radial-gradient(circle at center, ${color.bg}10, transparent)`,
          }}
          animate={isHovered && !shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Top accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, ${color.bg}, ${color.bg}80, transparent)` }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
            style={{
              background: `linear-gradient(135deg, ${color.bg}20, ${color.bg}10)`,
              border: `1px solid ${color.border}30`,
            }}
            whileHover={shouldReduceMotion ? {} : {
              scale: 1.25,
              rotate: [0, -15, 15, -15, 0],
              backgroundColor: `${color.bg}30`,
              borderColor: `${color.border}60`,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={isHovered && !shouldReduceMotion ? {
                scale: [1, 1.4, 1],
                rotate: [0, 20, -20, 0],
              } : {}}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-8 h-8" style={{ color: color.bg }} />
            </motion.div>
          </motion.div>
          <h3 className="font-heading font-semibold text-xl mb-3 text-[#0B1220]">{title}</h3>
          <p className="text-sm text-[rgba(11,18,32,0.68)] leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
