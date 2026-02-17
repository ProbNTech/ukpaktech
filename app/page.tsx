"use client";

import dynamic from "next/dynamic";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { StatCard } from "@/components/StatCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Hero } from "@/components/Hero";
import { WhoCanJoin } from "@/components/WhoCanJoin";
import { Shield, Network, Cpu } from "lucide-react";
import { ResourcesSection } from "@/components/ResourcesSection";

const SponsorMarquee = dynamic(() => import("@/components/SponsorMarquee").then(m => ({ default: m.SponsorMarquee })));
const GovernanceBadges = dynamic(() => import("@/components/GovernanceBadges").then(m => ({ default: m.GovernanceBadges })));
const JoinUPTECHBackground = dynamic(() => import("@/components/JoinUPTECHBackground").then(m => ({ default: m.JoinUPTECHBackground })));
const ImpactStats = dynamic(() => import("@/components/ImpactStats").then(m => ({ default: m.ImpactStats })));

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Introduction */}
      <section className="bg-white pt-20 pb-8 md:pt-24 md:pb-10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl">
              <span className="text-sm font-semibold text-[#1F2937] mb-2 block">About the council</span>
              <div className="flex items-center gap-6 mb-6">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2563EB] shrink-0 leading-tight">
                  Building a Bilateral Technology Bridge Between the UK and Pakistan
                </h2>
              </div>
              <div className="h-[2px] w-full max-w-md bg-[#22C55E] mb-6" />
              <p className="text-lg text-[#4B5563] leading-relaxed max-w-3xl">
                The UK–Pakistan Tech Council is a bilateral technology platform established to strengthen innovation, digital trade, and institutional collaboration between the United Kingdom and Pakistan. The Council brings together technology companies, investors, policymakers, academic institutions, and enterprise leaders to accelerate cross-border growth and long-term strategic partnerships across both nations.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who Can Join */}
      <WhoCanJoin />

      {/* Upcoming Events & Initiatives */}
      <section className="bg-white pt-10 pb-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {/* Header — UKPropTech style */}
            <div className="mb-10">
              <span className="text-sm font-semibold text-[#1F2937] mb-2 block">
                Attend an event
              </span>
              <div className="flex items-center gap-6 mb-6">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2563EB] shrink-0">
                  Upcoming events
                </h2>
                <div className="flex-1 h-[2px] bg-[#22C55E]" />
              </div>
              <p className="text-base text-[#4B5563] max-w-3xl leading-relaxed">
                Explore high-impact forums, policy dialogues, investor roundtables, and technology showcases designed to accelerate UK–Pakistan collaboration.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
              {[
                {
                  title: "UK–Pakistan Tech Innovation Summit",
                  description:
                    "A flagship forum bringing together founders, policymakers, and enterprise leaders to explore cross-border collaboration, digital trade, and strategic partnerships.",
                  image: "/image/eventgallery/event-1.jpg",
                },
                {
                  title: "Cross-Border Investment Dialogue",
                  description:
                    "Private roundtables connecting UK and Pakistani investors with high-growth technology companies to unlock funding, partnerships, and expansion opportunities.",
                  image: "/image/eventgallery/event-2.jpg",
                },
                {
                  title: "Digital Policy & Regulatory Forum",
                  description:
                    "Institutional discussions between regulators, advisors, and industry leaders focused on enabling innovation through transparent, future-ready policy frameworks.",
                  image: "/image/eventgallery/event-3.jpg",
                },
                {
                  title: "Corporate & SME Partnership Showcase",
                  description:
                    "A collaborative platform where enterprises, SMEs, and solution providers present technologies, explore procurement opportunities, and build long-term alliances.",
                  image: "/image/eventgallery/event-4.jpg",
                },
              ].map((card) => (
                <article key={card.title} className="group">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-5 bg-[#F0F4F8]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-base text-[#1F2937] leading-snug mb-3 group-hover:text-[#2563EB] transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Bottom border */}
                  <div className="h-[2px] w-full bg-[#22C55E]" />
                </article>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button href="/events" variant="primary" size="lg" showArrow>
                Find out more
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sponsor Marquee */}
      <section className="relative bg-[#F8FAFC] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/15 to-transparent" />
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300" />
            <h3 className="text-center text-[#94A3B8] text-xs font-semibold uppercase tracking-[0.25em]">
              Trusted by Leading Organizations
            </h3>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300" />
          </div>
          <SponsorMarquee />
        </div>
      </section>

      {/* Impact Momentum */}
      <Section className="relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[520px] h-[520px] bg-gradient-to-br from-[#2563EB]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[520px] h-[520px] bg-gradient-to-tr from-[#22C55E]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <span className="text-sm font-semibold text-[#1F2937] mb-2 block">Our impact</span>
                <div className="flex items-center gap-6 mb-6">
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2563EB] shrink-0">
                    Impact Momentum
                  </h2>
                  <div className="flex-1 h-[2px] bg-[#22C55E]" />
                </div>
                <p className="text-lg text-[#4B5563] max-w-3xl leading-relaxed">
                  A modern technology council engineered to scale collaboration, talent, and investment across the UK–Pakistan corridor.
                </p>
              </div>
              <div className="mt-12">
                <ImpactStats />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Council Snapshot */}
      <Section variant="alt" className="relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-gradient-to-br from-[#2563EB]/4 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <span className="text-sm font-semibold text-[#1F2937] mb-2 block">Governance overview</span>
                <div className="flex items-center gap-6 mb-6">
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2563EB] shrink-0">
                    Council Snapshot
                  </h2>
                  <div className="flex-1 h-[2px] bg-[#22C55E]" />
                </div>
                <p className="text-lg text-[#4B5563] max-w-3xl leading-relaxed">
                  A leadership-grade platform built for governance, innovation collaboration, and cross-border market access.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <StatCard
                  icon={<Shield className="w-10 h-10 text-[#2563EB]" />}
                  title="Governance by Design"
                  description="Structured oversight, ethics, and accountability embedded into every initiative."
                  index={0}
                />
                <StatCard
                  icon={<Network className="w-10 h-10 text-[#22C55E]" />}
                  title="Bilateral Innovation Network"
                  description="Joint R&D, investment, and partnerships across the UK and Pakistan."
                  index={1}
                />
                <StatCard
                  icon={<Cpu className="w-10 h-10 text-[#2563EB]" />}
                  title="Tech-Led Growth"
                  description="AI, digital trade, and transformation programs advancing industry leadership."
                  index={2}
                />
              </div>
              <div className="mt-12">
                <GovernanceBadges />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Resources */}
      <ResourcesSection />

      {/* Membership Invitation */}
      <section className="relative overflow-hidden bg-[#0F172A] text-white py-20 md:py-28 lg:py-32">
        <JoinUPTECHBackground />
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-5 flex justify-center">
                <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#2563EB] to-[#22C55E]" />
              </div>
              <h2 className="font-heading font-bold mb-5 text-white">Join UPTECH</h2>
              <p className="text-lg leading-relaxed text-white/70 mx-auto max-w-2xl mb-12">
                Join a trusted network shaping the future of UK–Pakistan technology collaboration.
              </p>
              <Button href="/membership" variant="primary" size="lg" showArrow>
                Become a Member
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
