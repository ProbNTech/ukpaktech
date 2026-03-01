"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { GlobalCTA } from "@/components/GlobalCTA";
import { RainbowButton } from "@/components/ui/rainbow-borders-button";
import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { Lightbulb, Target, CheckCircle2, Award, Users, Globe2, ArrowRight } from "lucide-react";

const brandColors = ["#2563EB", "#C41E3A", "#22C55E"];

const exploreItems = [
  { icon: Lightbulb, title: "Vision", desc: "A connected innovation ecosystem bridging UK and Pakistan's technology sectors.", href: "/about/vision", color: "#C41E3A" },
  { icon: Target, title: "Mission", desc: "Our strategic mission to transform Pakistan into a thriving global tech hub.", href: "/about/mission", color: "#22C55E" },
  { icon: CheckCircle2, title: "Objectives & Values", desc: "Core values, key activities, and broader impact goals driving our work.", href: "/about/objectives", color: "#2563EB" },
  { icon: Award, title: "Founder & CEO", desc: "Meet Khalil Choudhary — the visionary behind the UK-Pakistan Tech Council.", href: "/about/founder", color: "#C41E3A" },
  { icon: Users, title: "Management Team", desc: "Board of directors, advisory council, and executive leadership team.", href: "/about/management-team", color: "#22C55E" },
  { icon: Globe2, title: "UK-Pakistan Partnership", desc: "The bilateral framework for joint ventures, policy dialogue, and shared R&D.", href: "/ecosystem/uk-pakistan-technology-partnership", color: "#2563EB" },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        label="About Us"
        title="About UPTECH"
        subtitle="Empowering Pakistan's Tech Leaders; innovation, entrepreneurship, investment, advocacy and visionary growth."
        image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=2400&q=85&auto=format&fit=crop"
      >
        <div className="flex flex-wrap items-center gap-4">
          <RainbowButton href="/membership/apply" showArrow>Apply for Membership</RainbowButton>
          <Button href="/ecosystem/uk-pakistan-technology-partnership" variant="glass" showArrow>UK–Pakistan Partnership</Button>
        </div>
      </PageHero>

      {/* About Us */}
      <Section variant="light">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <AnimatedSection>
            <SectionHeader
              label="Who we are"
              title="About the Council"
              color="blue"
            />
            <p className="text-[#3D4152] leading-relaxed mb-5">
              The UK Pakistan Technology Council brings together businesses, innovators, government partners, investors, and technology leaders from the UK and Pakistan to support cross-border innovation, trade, and economic growth. Our mission is to shape strategic technology cooperation that powers sustainable development, accelerates digital transformation, and fosters shared prosperity for both nations.
            </p>
            <p className="text-[#3D4152] leading-relaxed mb-5">
              Our primary objective is to champion a positive and soft image of Pakistan while nurturing innovation, collaboration, and continuous education within the dynamic landscape of technology.
            </p>
            <p className="text-[#3D4152] leading-relaxed mb-5">
              Our dynamic platform empowers individuals to unlock their full potential, advance their careers, and make a lasting impact on the Council. We champion the highest standards of professionalism, integrity, and ethics, setting a benchmark for IT societies worldwide.
            </p>
            <p className="text-[#3D4152] leading-relaxed mb-5">
              By uniting Pakistani IT professionals residing and working in the United Kingdom, we establish a dynamic platform for networking, knowledge-sharing, and collective advancement.
            </p>
            <p className="text-[#3D4152] leading-relaxed">
              Through our diverse community, we aim to catalyze positive transformations in IT, shaping its future, and delivering significant contributions to both the country we reside in and the country we proudly belong to.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border-2 border-[#2563EB]/15">
              <Image
                src="/image/about/about-section-home.jpg"
                alt="About the Council"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Explore Section */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Learn more" title="Explore" color="red" subtitle="Discover our vision, mission, leadership, and partnerships that drive the UK-Pakistan technology corridor." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {exploreItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group text-left bg-white rounded-lg p-7 hover:shadow-lg transition-all duration-300 relative overflow-hidden block"
                  style={{ borderTop: `3px solid ${item.color}` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-1/2 translate-x-1/2" style={{ background: `radial-gradient(circle, ${item.color}08, transparent 70%)` }} />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${item.color}10`, border: `1px solid ${item.color}25` }}>
                        <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" style={{ color: item.color }} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">{item.title}</h3>
                    <p className="text-[#3D4152] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      <GlobalCTA
        label="Join Us"
        title="Ready to Be Part of the Movement?"
        subtitle="Join UPTECH and connect with technology leaders, entrepreneurs, and innovators shaping the UK–Pakistan tech corridor."
        primaryButtonText="Apply for Membership"
        primaryButtonLink="/membership/apply"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
