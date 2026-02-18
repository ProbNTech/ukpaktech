"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { StatCard } from "@/components/StatCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Hero } from "@/components/Hero";
import { NewsCard } from "@/components/NewsCard";
import { Shield, Network, Cpu, MapPin, Calendar, ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import { featuredEvents } from "@/data/featured-events";

const SponsorMarquee = dynamic(() =>
  import("@/components/SponsorMarquee").then((m) => ({ default: m.SponsorMarquee }))
);
const GovernanceBadges = dynamic(() =>
  import("@/components/GovernanceBadges").then((m) => ({ default: m.GovernanceBadges }))
);
const JoinUPTECHBackground = dynamic(() =>
  import("@/components/JoinUPTECHBackground").then((m) => ({
    default: m.JoinUPTECHBackground,
  }))
);
const ImpactStats = dynamic(() =>
  import("@/components/ImpactStats").then((m) => ({ default: m.ImpactStats }))
);

/* Top 3 articles for the homepage news grid */
const homepageArticles = articles.slice(0, 3);

/* Top 3 featured events for the homepage events grid */
const homepageEvents = featuredEvents.slice(0, 3);

export default function Home() {
  return (
    <div>
      {/* ──────────────────────────────────────────────────────────── */}
      {/*  HERO                                                        */}
      {/* ──────────────────────────────────────────────────────────── */}
      <Hero />

      {/* ──────────────────────────────────────────────────────────── */}
      {/*  ABOUT SNIPPET                                               */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="bg-white pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              {/* Left — Text */}
              <div className="flex-1 min-w-0">
                <span className="text-sm font-semibold text-[#1F2937] mb-2 block">
                  About the council
                </span>
                <div className="flex items-center gap-6 mb-6">
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2563EB] shrink-0 leading-tight">
                    Building a Bilateral<br className="hidden sm:block" /> Technology Bridge
                  </h2>
                </div>
                <div className="h-[2px] w-full max-w-md bg-[#22C55E] mb-6" />
                <p className="text-lg text-[#4B5563] leading-relaxed mb-6">
                  The UK–Pakistan Tech Council is a bilateral technology platform established to
                  strengthen innovation, digital trade, and institutional collaboration between the
                  United Kingdom and Pakistan.
                </p>
                <p className="text-base text-[#4B5563] leading-relaxed mb-8">
                  The Council brings together technology companies, investors, policymakers, academic
                  institutions, and enterprise leaders to accelerate cross-border growth and long-term
                  strategic partnerships across both nations.
                </p>
                <Button href="/about" variant="primary" showArrow>
                  Learn about UPTECH
                </Button>
              </div>

              {/* Right — 2×2 stat grid */}
              <div className="lg:w-[420px] shrink-0 grid grid-cols-2 gap-5">
                {[
                  { number: "600+", label: "Annual summit delegates" },
                  { number: "£200M", label: "Bilateral investment committed" },
                  { number: "47+", label: "Business introductions facilitated" },
                  { number: "2024", label: "Year founded" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-gray-100 shadow-md p-6 bg-[#F8FAFC] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <p className="font-heading font-bold text-3xl text-[#2563EB] mb-1">
                      {stat.number}
                    </p>
                    <p className="text-sm text-[#475569] leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/*  NEWS GRID — primary editorial section                       */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#F8FAFC] py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <AnimatedSection>
            <div className="mb-12">
              <span className="text-sm font-semibold text-[#1F2937] mb-2 block">
                Latest news
              </span>
              <div className="flex items-center gap-6 mb-4">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2563EB] shrink-0">
                  News &amp; Insights
                </h2>
                <div className="flex-1 h-[2px] bg-[#22C55E]" />
              </div>
              <p className="text-lg text-[#4B5563] max-w-3xl leading-relaxed">
                Investment deals, policy developments, innovation spotlights, and bilateral tech
                progress — stay informed on what&apos;s shaping the UK–Pakistan technology corridor.
              </p>
            </div>
          </AnimatedSection>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {homepageArticles.map((article, i) => (
              <NewsCard
                key={article.slug}
                slug={article.slug}
                title={article.title}
                category={article.category}
                date={article.date}
                image={article.image}
                excerpt={article.excerpt}
                index={i}
              />
            ))}
          </div>

          {/* View all CTA */}
          <AnimatedSection>
            <div className="text-center">
              <Button href="/events" variant="primary" size="lg" showArrow>
                View all news &amp; events
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/*  UPCOMING EVENTS                                             */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-10">
              <span className="text-sm font-semibold text-[#1F2937] mb-2 block">
                Attend an event
              </span>
              <div className="flex items-center gap-6 mb-4">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2563EB] shrink-0">
                  Upcoming Events
                </h2>
                <div className="flex-1 h-[2px] bg-[#22C55E]" />
              </div>
              <p className="text-base text-[#4B5563] max-w-3xl leading-relaxed">
                Explore high-impact forums, policy dialogues, investor roundtables, and technology
                showcases designed to accelerate UK–Pakistan collaboration.
              </p>
            </div>

            {/* Event cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {homepageEvents.map((event) => (
                <Link
                  key={event.id}
                  href="/events"
                  className="group flex flex-col rounded-2xl bg-white border border-gray-100 hover:border-[#2563EB]/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F0F4F8]">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Tag badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm text-xs font-bold text-[#1F2937] tracking-wide uppercase">
                        {event.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Date pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2563EB]/5 border border-[#2563EB]/15 mb-4 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span className="text-xs font-semibold text-[#2563EB]">{event.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-base text-[#1F2937] leading-snug mb-3 line-clamp-2 group-hover:text-[#2563EB] transition-colors duration-300">
                      {event.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-[#4B5563] leading-relaxed line-clamp-2 mb-4 flex-1">
                      {event.shortDescription}
                    </p>

                    {/* Location */}
                    {event.location && (
                      <div className="flex items-center gap-2 text-sm text-[#4B5563] mb-4">
                        <MapPin className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#2563EB] group-hover:gap-3 transition-all duration-300 mt-auto">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="h-[2px] bg-[#22C55E]" />
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Button href="/events" variant="secondary" size="lg" showArrow>
                Find out more
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/*  SPONSOR MARQUEE                                             */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#F8FAFC] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/15 to-transparent" />
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300" />
            <h3 className="text-center text-[#94A3B8] text-xs font-semibold uppercase tracking-[0.25em]">
              Trusted by Leading Organisations
            </h3>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300" />
          </div>
          <SponsorMarquee />
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/*  IMPACT STATS                                                */}
      {/* ──────────────────────────────────────────────────────────── */}
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
                  A modern technology council engineered to scale collaboration, talent, and
                  investment across the UK–Pakistan corridor.
                </p>
              </div>
              <div className="mt-12">
                <ImpactStats />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/*  COUNCIL SNAPSHOT                                            */}
      {/* ──────────────────────────────────────────────────────────── */}
      <Section variant="alt" className="relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-gradient-to-br from-[#2563EB]/4 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <span className="text-sm font-semibold text-[#1F2937] mb-2 block">
                  Governance overview
                </span>
                <div className="flex items-center gap-6 mb-6">
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2563EB] shrink-0">
                    Council Snapshot
                  </h2>
                  <div className="flex-1 h-[2px] bg-[#22C55E]" />
                </div>
                <p className="text-lg text-[#4B5563] max-w-3xl leading-relaxed">
                  A leadership-grade platform built for governance, innovation collaboration, and
                  cross-border market access.
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

      {/* ──────────────────────────────────────────────────────────── */}
      {/*  MEMBERSHIP CTA                                              */}
      {/* ──────────────────────────────────────────────────────────── */}
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
