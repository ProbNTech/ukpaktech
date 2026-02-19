"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import Image from "next/image";
import { Shield, Globe2, Target, Lightbulb, Heart, Gavel, Building2, CheckCircle2, Award, Network } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="About UPTECH"
        subtitle="Strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan."
        image="/image/london-images/2.jpg"
      >
        <div className="flex flex-wrap gap-4 mt-2">
          <Button href="/membership" variant="glass" showArrow>Become a Member</Button>
          <Button href="/initiatives" variant="ghost" showArrow>Explore Initiatives</Button>
        </div>
      </PageHero>

      {/* Who We Are */}
      <Section variant="light">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <SectionHeader
              label="Who we are"
              title="About the Council"
              subtitle="A strategic platform strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan."
            />
            <p className="text-[#3D4152] leading-relaxed mb-8">
              The UK–Pakistan Technology Council (UPTECH) is a bilateral initiative connecting governments, enterprises, investors, startups, and academia to drive technology-led growth. Built by professionals, entrepreneurs, and technology leaders, UPTECH is committed to ethical governance and long-term impact across both nations.
            </p>
            <div className="space-y-5">
              {[
                { color: "#2563EB", title: "Governments", desc: "Facilitating policy alignment and bilateral technology cooperation." },
                { color: "#22C55E", title: "Enterprises & Investors", desc: "Supporting cross-border trade, investment, and market access." },
                { color: "#2563EB", title: "Startups & Academia", desc: "Fostering innovation, talent development, and research collaboration." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: item.color }} />
                  <div>
                    <h4 className="font-semibold text-[#1C1F2E] mb-1 text-sm">{item.title}</h4>
                    <p className="text-[#3D4152] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#D8D5CF]">
              <Image
                src="/image/about/about1.jpg"
                alt="UK–Pakistan digital collaboration"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Vision and Mission */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Our purpose" title="Vision &amp; Mission" />
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white border border-[#D8D5CF] p-8">
              <Target className="w-8 h-8 text-[#22C55E] mb-5" strokeWidth={1.5} />
              <h3 className="font-heading font-bold text-xl text-[#1C1F2E] uppercase tracking-tight mb-4">Mission</h3>
              <div className="h-px bg-[#1C1F2E]/15 mb-4" />
              <p className="text-[#3D4152] leading-relaxed">
                To strengthen technology, innovation, and digital trade by connecting governments, enterprises, investors, startups, and academia across both nations.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-white border border-[#D8D5CF] p-8">
              <Lightbulb className="w-8 h-8 text-[#2563EB] mb-5" strokeWidth={1.5} />
              <h3 className="font-heading font-bold text-xl text-[#1C1F2E] uppercase tracking-tight mb-4">Vision</h3>
              <div className="h-px bg-[#1C1F2E]/15 mb-4" />
              <p className="text-[#3D4152] leading-relaxed">
                To become the leading bilateral technology platform driving innovation, collaboration, and sustainable growth between the UK and Pakistan.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Values */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="What we stand for" title="Our Values" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Ethical Governance", desc: "Committed to transparency, integrity, and responsible technology practices across all initiatives.", color: "#2563EB" },
              { icon: Heart, title: "Long-term Impact", desc: "Building sustainable partnerships and solutions that create lasting value for both nations.", color: "#22C55E" },
              { icon: Globe2, title: "Bilateral Collaboration", desc: "Fostering cross-border innovation and strengthening UK–Pakistan technology relationships.", color: "#2563EB" },
              { icon: Lightbulb, title: "Innovation First", desc: "Driving cutting-edge technology solutions and forward-thinking approaches to digital transformation.", color: "#22C55E" },
            ].map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white border border-[#D8D5CF] p-6 group hover:border-[#2563EB]/40 transition-colors duration-300">
                  <Icon className="w-6 h-6 mb-4" style={{ color: value.color }} strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-3">{value.title}</h3>
                  <div className="h-px bg-[#1C1F2E]/15 mb-3" />
                  <p className="text-[#3D4152] text-sm leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* How We Operate */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <SectionHeader
              label="Structure"
              title="How We Operate"
              subtitle="UPTECH operates under a defined governance structure ensuring transparency, ethics, and accountability."
            />
            <div className="space-y-4">
              {[
                { icon: Gavel, title: "Governance Structure", color: "#2563EB" },
                { icon: Building2, title: "Organisational Framework", color: "#22C55E" },
                { icon: CheckCircle2, title: "Accountability & Transparency", color: "#2563EB" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white border border-[#D8D5CF] p-6 flex items-start gap-4">
                    <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: item.color }} strokeWidth={1.5} />
                    <div>
                      <h4 className="font-semibold text-[#1C1F2E] text-sm mb-1">{item.title}</h4>
                      <p className="text-[#3D4152] text-sm leading-relaxed">Structured processes ensuring integrity and impact across all council operations.</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Featured Initiatives */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Our work" title="Featured Initiatives" subtitle="Leading programmes driving innovation and collaboration between the UK and Pakistan." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Tech Excellence Awards", href: "/initiatives/tech-excellence-awards", color: "#2563EB" },
              { icon: Network, title: "People AI Platform", href: "/initiatives/people-ai", color: "#22C55E" },
              { icon: Globe2, title: "TechMart Global", href: "/initiatives/techmart-global", color: "#2563EB" },
            ].map((initiative) => {
              const Icon = initiative.icon;
              return (
                <div key={initiative.title} className="bg-white border border-[#D8D5CF] p-7 group hover:border-[#2563EB]/40 transition-colors duration-300 flex flex-col">
                  <Icon className="w-6 h-6 mb-5" style={{ color: initiative.color }} strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{initiative.title}</h3>
                  <div className="h-px bg-[#1C1F2E]/15 mb-4" />
                  <p className="text-[#3D4152] text-sm leading-relaxed mb-6 flex-1">A flagship UPTECH programme connecting technology leaders across the UK–Pakistan corridor.</p>
                  <Button href={initiative.href} variant="secondary" size="sm">Learn More</Button>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
