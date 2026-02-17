"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedUnderline } from "@/components/AnimatedUnderline";
import { PageHero } from "@/components/PageHero";
import Image from "next/image";
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { 
  Network, Users, TrendingUp, Cpu, FileText, Shield, 
  Target, Eye, CheckCircle2, Building2, Gavel, Globe2,
  Sparkles, Award, HeartHandshake, Lightbulb, Heart
} from "lucide-react";

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  
  // Smooth cursor tracking with spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 50, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  // Transform values for cursor effects
  const mainX = useTransform(smoothX, (v) => v - 150);
  const mainY = useTransform(smoothY, (v) => v - 150);
  const secondaryX = useTransform(smoothX, (v) => v - 100);
  const secondaryY = useTransform(smoothY, (v) => v - 100);
  const tertiaryX = useTransform(smoothX, (v) => v - 75);
  const tertiaryY = useTransform(smoothY, (v) => v - 75);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove);
      return () => hero.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative">
        {/* Cursor Smoke Effect - unique to about page */}
        {!shouldReduceMotion && (
          <>
            {/* Main cursor glow */}
            <motion.div
              className="pointer-events-none absolute z-20"
              style={{
                x: mainX,
                y: mainY,
                width: "300px",
                height: "300px",
              }}
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                className="w-full h-full rounded-full blur-3xl"
                style={{
                  background: `radial-gradient(circle, 
                    rgba(37, 99, 235, 0.4) 0%, 
                    rgba(34, 197, 94, 0.35) 25%, 
                    rgba(225, 29, 72, 0.3) 50%, 
                    transparent 80%
                  )`,
                }}
              />
            </motion.div>
            {/* Secondary trailing effect */}
            <motion.div
              className="pointer-events-none absolute z-20"
              style={{
                x: secondaryX,
                y: secondaryY,
                width: "200px",
                height: "200px",
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <div
                className="w-full h-full rounded-full blur-2xl"
                style={{
                  background: `radial-gradient(circle, 
                    rgba(34, 197, 94, 0.35) 0%, 
                    rgba(225, 29, 72, 0.3) 30%, 
                    rgba(37, 99, 235, 0.25) 60%, 
                    transparent 90%
                  )`,
                }}
              />
            </motion.div>
            {/* Tertiary outer glow */}
            <motion.div
              className="pointer-events-none absolute z-20"
              style={{
                x: tertiaryX,
                y: tertiaryY,
                width: "150px",
                height: "150px",
              }}
              animate={{
                opacity: [0.15, 0.3, 0.15],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            >
              <div
                className="w-full h-full rounded-full blur-xl"
                style={{
                  background: `radial-gradient(circle, 
                    rgba(225, 29, 72, 0.3) 0%, 
                    rgba(37, 99, 235, 0.25) 40%, 
                    rgba(34, 197, 94, 0.2) 70%, 
                    transparent 100%
                  )`,
                }}
              />
            </motion.div>
          </>
        )}
        <PageHero
          title={
            <>
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 backdrop-blur-sm mx-auto mb-6"
              >
                <Sparkles className="w-4 h-4 text-[#2563EB]" />
                <span className="text-sm font-medium text-[#0F172A]/90">About UPTECH</span>
              </motion.div>
              <span className="relative inline-block">
                About UPTECH
                <AnimatedUnderline />
              </span>
            </>
          }
          subtitle="Strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan."
        >
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto"
          >
            A bilateral initiative connecting governments, enterprises, investors, startups, and academia to drive technology-led growth.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
            <Button href="/membership" variant="primary" size="lg" showArrow>
              Become a Member
            </Button>
            <Button href="/initiatives" variant="glass" size="lg" showArrow>
              Explore Initiatives
            </Button>
          </div>
        </PageHero>
      </section>

      {/* Who We Are Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div>
              <SectionHeader
                title="Who We Are"
                subtitle="A strategic platform strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan."
                align="left"
              />
              <p className="text-lg text-[#475569] leading-relaxed mb-8">
                The UK–Pakistan Technology Council (UPTECH) is a bilateral initiative connecting governments, enterprises, investors, startups, and academia to drive technology-led growth. Built by professionals, entrepreneurs, and technology leaders, UPTECH is committed to ethical governance and long-term impact across both nations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB] mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A] mb-1">Governments</h4>
                    <p className="text-[#475569] text-sm">Facilitating policy alignment and bilateral technology cooperation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#22C55E] mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A] mb-1">Enterprises & Investors</h4>
                    <p className="text-[#475569] text-sm">Supporting cross-border trade, investment, and market access.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB] mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A] mb-1">Startups & Academia</h4>
                    <p className="text-[#475569] text-sm">Fostering innovation, talent development, and research collaboration.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="relative w-full h-full min-h-[260px]">
              <Image
                src="/image/about/about1.jpg"
                alt="UK–Pakistan digital collaboration"
                fill
                className="object-cover rounded-2xl"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Vision and Mission Section */}
      <Section>
        <AnimatedSection>
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Vision and Mission"
              align="center"
            />
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
              {/* Mission Card */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Background accent shape */}
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#22C55E]/20 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                {/* Main card */}
                <div className="relative bg-white rounded-3xl border border-gray-200 p-8 lg:p-10 shadow-2xl overflow-hidden h-full transition-all duration-300 hover:border-[#22C55E]/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.2)] hover:-translate-y-1">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/10 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#22C55E]/30 rounded-full blur-xl group-hover:blur-2xl group-hover:opacity-60 transition-all duration-300"></div>
                        <Target className="relative w-16 h-16 text-[#22C55E] group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-heading font-bold text-3xl mb-6 text-center text-[#0F172A] uppercase tracking-tight">
                      Mission
                    </h3>
                    
                    {/* Text content */}
                    <p className="text-[#475569] leading-relaxed text-center flex-grow mb-8">
                      To strengthen technology, innovation, and digital trade by connecting governments, enterprises, investors, startups, and academia across both nations.
                    </p>
                    
                    {/* Curved identifier element */}
                    <div className="relative mt-auto">
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-12 bg-[#22C55E] rounded-t-full flex items-center justify-center shadow-lg shadow-[#22C55E]/30">
                        <span className="text-white font-bold text-xl">01</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom accent shape */}
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#22C55E]/10 rounded-tl-full opacity-30"></div>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Background accent shape */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#2563EB]/20 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                {/* Main card */}
                <div className="relative bg-white rounded-3xl border border-gray-200 p-8 lg:p-10 shadow-2xl overflow-hidden h-full transition-all duration-300 hover:border-[#2563EB]/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.2)] hover:-translate-y-1">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#2563EB]/30 rounded-full blur-xl group-hover:blur-2xl group-hover:opacity-60 transition-all duration-300"></div>
                        <Lightbulb className="relative w-16 h-16 text-[#2563EB] group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-heading font-bold text-3xl mb-6 text-center text-[#0F172A] uppercase tracking-tight">
                      Vision
                    </h3>
                    
                    {/* Text content */}
                    <p className="text-[#475569] leading-relaxed text-center flex-grow mb-8">
                      To become the leading bilateral technology platform driving innovation, collaboration, and sustainable growth between the UK and Pakistan.
                    </p>
                    
                    {/* Curved identifier element */}
                    <div className="relative mt-auto">
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-12 bg-[#2563EB] rounded-t-full flex items-center justify-center shadow-lg shadow-[#2563EB]/30">
                        <span className="text-white font-bold text-xl">02</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom accent shape */}
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#2563EB]/10 rounded-tr-full opacity-30"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Values Section */}
      <Section>
        <div className="max-w-7xl mx-auto">
          {/* Central Title */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#0F172A] mb-4 uppercase tracking-tight">
              Our Values
            </h2>
          </motion.div>

          {/* Values Grid with Animated Connections */}
          <div className="relative py-8">
            {/* Animated connecting lines container - hidden on mobile, visible on lg+ */}
            <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ height: '100%', minHeight: '500px' }}>
              <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
                {[
                  { color: "#2563EB", startX: 600, startY: 50, endX: 150, endY: 180 },
                  { color: "#22C55E", startX: 600, startY: 50, endX: 450, endY: 180 },
                  { color: "#2563EB", startX: 600, startY: 50, endX: 750, endY: 180 },
                  { color: "#2563EB", startX: 600, startY: 50, endX: 1050, endY: 180 },
                ].map((line, index) => (
                  <motion.line
                    key={index}
                    x1={line.startX}
                    y1={line.startY}
                    x2={line.endX}
                    y2={line.endY}
                    stroke={line.color}
                    strokeWidth="2"
                    strokeDasharray="8,4"
                    strokeOpacity="0.5"
                    initial={shouldReduceMotion ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                  />
                ))}
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
              {[
                { 
                  icon: Shield, 
                  title: "Ethical Governance", 
                  description: "Committed to transparency, integrity, and responsible technology practices across all initiatives.",
                  gradient: "from-[#2563EB] to-[#1D4ED8]",
                  glowColor: "#2563EB",
                  dotColor: "#2563EB"
                },
                { 
                  icon: Heart, 
                  title: "Long-term Impact", 
                  description: "Building sustainable partnerships and solutions that create lasting value for both nations.",
                  gradient: "from-[#22C55E] to-[#16A34A]",
                  glowColor: "#22C55E",
                  dotColor: "#22C55E"
                },
                { 
                  icon: Globe2, 
                  title: "Bilateral Collaboration", 
                  description: "Fostering cross-border innovation and strengthening UK–Pakistan technology relationships.",
                  gradient: "from-[#2563EB] to-[#C2183A]",
                  glowColor: "#2563EB",
                  dotColor: "#2563EB"
                },
                { 
                  icon: Lightbulb, 
                  title: "Innovation First", 
                  description: "Driving cutting-edge technology solutions and forward-thinking approaches to digital transformation.",
                  gradient: "from-[#2563EB] to-[#3B82F6]",
                  glowColor: "#2563EB",
                  dotColor: "#2563EB"
                },
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group"
                  >
                    {/* Gradient Circle Icon */}
                    <div className="flex flex-col items-center mb-6">
                      <div className="relative">
                        {/* Outer glow */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-full blur-2xl opacity-30`}
                          animate={shouldReduceMotion ? {} : {
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5,
                          }}
                        />
                        {/* Circle border with gradient */}
                        <div className={`relative w-24 h-24 rounded-full border-2 border-transparent bg-gradient-to-br ${value.gradient} p-[2px]`}>
                          <div className="w-full h-full rounded-full bg-[#F8FAFC] flex items-center justify-center">
                            <Icon 
                              className="w-12 h-12" 
                              style={{ color: value.glowColor }}
                              strokeWidth={2}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Connecting dot */}
                      <motion.div
                        initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.15 }}
                        className="mt-4 mb-2"
                      >
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ 
                            background: `linear-gradient(135deg, ${value.dotColor}, ${value.dotColor}dd)`,
                            boxShadow: `0 0 10px ${value.dotColor}80`
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <motion.h3
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.15 }}
                      className="font-heading font-bold text-xl mb-3 text-center text-[#0F172A] uppercase tracking-tight"
                    >
                      {value.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.15 }}
                      className="text-[#475569] text-sm leading-relaxed text-center"
                    >
                      {value.description}
                    </motion.p>

                    {/* Hover glow effect */}
                    <div 
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* Governance / How We Operate Section */}
      <Section>
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                title="How We Operate"
                subtitle="UPTECH operates under a defined governance structure ensuring transparency, ethics, and accountability."
                align="left"
              />
            </div>
            <div className="space-y-6">
              <Card variant="alt">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center flex-shrink-0">
                    <Gavel className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A] mb-2">Governance Structure</h4>
                    <p className="text-[#475569] text-sm leading-relaxed">TBD</p>
                  </div>
                </div>
              </Card>
              <Card variant="alt">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#22C55E]/20 border border-[#22C55E]/30 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-[#22C55E]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A] mb-2">Organizational Framework</h4>
                    <p className="text-[#475569] text-sm leading-relaxed">TBD</p>
                  </div>
                </div>
              </Card>
              <Card variant="alt">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A] mb-2">Accountability & Transparency</h4>
                    <p className="text-[#475569] text-sm leading-relaxed">TBD</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Featured Initiatives Section */}
      <Section>
        <AnimatedSection>
          <SectionHeader
            title="Featured Initiatives"
            subtitle="Leading programs driving innovation and collaboration between the UK and Pakistan."
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Award, title: "Tech Excellence Awards", color: "#2563EB" },
              { icon: Network, title: "People AI Platform", color: "#22C55E" },
              { icon: Globe2, title: "TechMart Global", color: "#2563EB" },
            ].map((initiative, index) => {
              const Icon = initiative.icon;
              const bgClass = initiative.color === "#2563EB" ? "bg-[#2563EB]/20 border-[#2563EB]/30" : 
                             initiative.color === "#22C55E" ? "bg-[#22C55E]/20 border-[#22C55E]/30" : 
                             "bg-[#2563EB]/20 border-[#2563EB]/30";
              return (
                <Card key={index} hover variant="alt" className="h-full">
                  <div className={`w-14 h-14 rounded-xl ${bgClass} flex items-center justify-center mb-6 border`}>
                    <Icon className={`w-7 h-7`} style={{ color: initiative.color }} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3 text-[#0F172A]">{initiative.title}</h3>
                  <p className="text-[#475569] leading-relaxed mb-4">TBD</p>
                  <Button href="/initiatives" variant="glass" size="sm" className="w-full">
                    Learn More
                  </Button>
                </Card>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
