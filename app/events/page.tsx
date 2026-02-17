"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { motion, useReducedMotion } from "framer-motion";
import { EventGrid } from "@/components/events/EventGrid";
import { featuredEvents } from "@/data/featured-events";
import { NewsUpdates } from "@/components/events/NewsUpdates";
import { EventsCTA } from "@/components/events/EventsCTA";
import { ChevronRight } from "lucide-react";

const newsItems = [
  {
    title: "UPTECH Announces New Partnership Initiative",
    date: "12 January 2025",
    category: "Partnership",
    summary:
      "UPTECH launches new strategic partnership program to strengthen UK–Pakistan technology collaboration.",
  },
  {
    title: "Tech Excellence Awards 2025 Nominations Open",
    date: "5 January 2025",
    category: "Awards",
    summary:
      "Nominations are now open for the annual Tech Excellence Awards recognizing outstanding contributions.",
  },
  {
    title: "New Member Portal Launched",
    date: "20 December 2024",
    category: "Platform",
    summary:
      "Enhanced member portal with new features for networking, resources, and collaboration opportunities.",
  },
  {
    title: "Quarterly Newsletter: Q4 2024 Highlights",
    date: "15 December 2024",
    category: "News",
    summary:
      "Review of key achievements, events, and initiatives from the fourth quarter of 2024.",
  },
  {
    title: "Upcoming Webinar: AI in Cross-Border Innovation",
    date: "8 December 2024",
    category: "Webinar",
    summary:
      "Join industry experts for an insightful discussion on AI's role in UK–Pakistan technology innovation.",
  },
  {
    title: "Cross-Border Trade Strategy Report Released",
    date: "1 December 2024",
    category: "Report",
    summary:
      "Comprehensive report on cross-border trade strategies for technology companies operating between the UK and Pakistan.",
  },
];

export default function EventsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* ============================================================ */}
      {/*  HERO SECTION — transparent navbar compatible, ~45vh          */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-gray-900 min-h-[45vh] flex items-center -mt-[72px]">
        {/* Dark overlay — will sit over future background image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 pointer-events-none z-[1]" />

        <div className="relative z-10 mx-auto max-w-[1280px] w-full px-4 sm:px-6 lg:px-8 pt-36 pb-14 lg:pt-40 lg:pb-16">
          {/* Breadcrumb */}
          <motion.nav
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <ol className="flex items-center gap-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5" />
              <li className="text-white font-medium">Events &amp; News</li>
            </ol>
          </motion.nav>

          {/* Title */}
          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5 max-w-3xl"
          >
            Events &amp; Engagements
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Stay updated with UPTECH events, news, and activities connecting the
            UK and Pakistan technology sectors.
          </motion.p>

          {/* Chips */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap gap-3 mt-7"
          >
            {["Summits", "Dialogues", "Webinars", "Showcases"].map((chip) => (
              <span
                key={chip}
                className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-sm font-medium text-white"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Hero bottom accent — same as Hero */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#E11D48]" />
      </section>

      {/* ============================================================ */}
      {/*  OVERVIEW SECTION                                              */}
      {/* ============================================================ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {/* Heading with green line — full width */}
            <div className="flex items-center gap-6 mb-10">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#2563EB] shrink-0">
                Overview
              </h2>
              <div className="flex-1 h-[2px] bg-[#22C55E]" />
            </div>

            {/* Content row: text left, profile right */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              {/* Left — Text */}
              <div className="flex-1 min-w-0 space-y-6">
                <p style={{ color: "#4B5563" }} className="text-base leading-relaxed">
                  Our events run under the UK–Pakistan Tech Council&apos;s flagship programmes, creating opportunities for networking, knowledge-sharing, and cross-border collaboration. From{" "}
                  <strong className="text-[#1F2937]">intimate roundtables to large-scale summits</strong>, our programme is designed to help technology professionals, investors, and policymakers connect, learn, and drive digital transformation across both nations. With{" "}
                  <strong className="text-[#1F2937]">a growing calendar of events annually</strong>, UPTECH members stay at the forefront of UK–Pakistan technology innovation.
                </p>

                <div>
                  <h3 className="font-heading font-bold text-base text-[#1F2937] mb-2">
                    UK–Pakistan Tech Summit Series
                  </h3>
                  <p style={{ color: "#4B5563" }} className="text-sm leading-relaxed">
                    The Council&apos;s flagship summit series brings together leaders from technology, investment, government, and academia for multi-day programmes of keynotes, panels, and B2B meetings across London, Islamabad, and other key cities.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-base text-[#1F2937] mb-2">
                    Investor Dialogues &amp; Roundtables
                  </h3>
                  <p style={{ color: "#4B5563" }} className="text-sm leading-relaxed">
                    Invitation-only gatherings connecting UK and Pakistani investors with high-growth technology companies. These structured sessions facilitate meaningful deal flow and long-term partnerships.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-base text-[#1F2937] mb-2">
                    Webinars &amp; Digital Events
                  </h3>
                  <p style={{ color: "#4B5563" }} className="text-sm leading-relaxed">
                    Regular online sessions featuring industry experts, policy briefings, and market intelligence updates. Open to all members and selected partners.
                  </p>
                </div>
              </div>

              {/* Right — Profile matching UKPropTech layout */}
              <div className="lg:w-72 shrink-0">
                <div className="flex items-start gap-6">
                  {/* Large circular image with red/brand ring */}
                  <div className="shrink-0 flex flex-col items-center gap-4">
                    <div className="relative w-28 h-28 rounded-full overflow-hidden ring-[4px] ring-[#E11D48] ring-offset-[4px] ring-offset-white bg-gray-200">
                      <Image
                        src="/image/eventgallery/event-2.jpg"
                        alt="Events Programme Manager"
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </div>
                    {/* Email icon directly below image */}
                    <a
                      href="mailto:events@uptechcouncil.org"
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1F2937] text-white hover:bg-[#2563EB] transition-all duration-300"
                      aria-label="Email events team"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                  {/* Name + title to the right, vertically centered with image */}
                  <div className="pt-4">
                    <h4 className="font-heading font-bold text-xl text-[#1F2937] leading-tight mb-1">
                      Events Team
                    </h4>
                    <p style={{ color: "#4B5563" }} className="text-base leading-snug italic">
                      Events and Programmes<br />Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  EVENTS & HIGHLIGHTS                                          */}
      {/* ============================================================ */}
      <section className="bg-[#F8FAFC] py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {/* Heading — homepage style */}
            <div className="mb-12">
              <span className="text-sm font-semibold text-[#1F2937] mb-2 block">
                Programme
              </span>
              <div className="flex items-center gap-6 mb-6">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2563EB] shrink-0">
                  Events and Highlights
                </h2>
                <div className="flex-1 h-[2px] bg-[#22C55E]" />
              </div>
              <p
                className="text-lg text-[#4B5563] max-w-3xl leading-relaxed"
                style={{ color: "#4B5563" }}
              >
                Key engagements, summits, and activities from the UK–Pakistan
                corridor.
              </p>
            </div>

            <EventGrid
              hideBadge
              events={featuredEvents.map(
                ({ title, date, image, shortDescription, location }) => ({
                  title,
                  date,
                  image,
                  summary: shortDescription,
                  location: location ?? "",
                })
              )}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  NEWS & UPDATES                                               */}
      {/* ============================================================ */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {/* Heading — homepage style */}
            <div className="mb-12">
              <span className="text-sm font-semibold text-[#1F2937] mb-2 block">
                Latest
              </span>
              <div className="flex items-center gap-6 mb-6">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2563EB] shrink-0">
                  News &amp; Updates
                </h2>
                <div className="flex-1 h-[2px] bg-[#22C55E]" />
              </div>
              <p
                className="text-lg text-[#4B5563] max-w-3xl leading-relaxed"
                style={{ color: "#4B5563" }}
              >
                Stay informed with the latest news, announcements, and insights
                from UPTECH.
              </p>
            </div>

            <NewsUpdates items={newsItems} />
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                          */}
      {/* ============================================================ */}
      <EventsCTA />
    </div>
  );
}
