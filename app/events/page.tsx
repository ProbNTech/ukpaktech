"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { Section } from "@/components/Section";
import { motion, useReducedMotion } from "framer-motion";
import { EventGrid } from "@/components/events/EventGrid";
import { featuredEvents } from "@/data/featured-events";
import { NewsUpdates } from "@/components/events/NewsUpdates";
import { EventsCTA } from "@/components/events/EventsCTA";
import { ChevronRight, Mail } from "lucide-react";

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
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative bg-[#1C1F2E] overflow-hidden -mt-[72px]">
        <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 pt-[120px] pb-16">
          {/* Breadcrumb */}
          <motion.nav
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5" />
              <li className="text-white/90 font-medium">Events &amp; News</li>
            </ol>
          </motion.nav>

          {/* Title */}
          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.08] text-white mb-5 max-w-3xl"
          >
            Events &amp; Engagements
          </motion.h1>

          <div className="w-full h-px bg-white/20 mb-5" />

          {/* Subtitle */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-lg text-white/70 max-w-2xl leading-relaxed mb-7"
          >
            Stay updated with UPTECH events, news, and activities connecting the UK and Pakistan technology sectors.
          </motion.p>

          {/* Tag chips */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-3"
          >
            {["Summits", "Dialogues", "Webinars", "Showcases"].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center px-4 py-1.5 border border-white/30 text-white/80 text-xs font-semibold uppercase tracking-wide"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  OVERVIEW                                                     */}
      {/* ============================================================ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Our programme" title="Overview" />

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Left — Text */}
            <div className="flex-1 min-w-0 space-y-6">
              <p className="text-base leading-relaxed text-[#3D4152]">
                Our events run under the UK–Pakistan Tech Council&apos;s flagship programmes, creating opportunities for networking, knowledge-sharing, and cross-border collaboration. From{" "}
                <strong className="text-[#1C1F2E]">intimate roundtables to large-scale summits</strong>, our programme is designed to help technology professionals, investors, and policymakers connect, learn, and drive digital transformation across both nations. With{" "}
                <strong className="text-[#1C1F2E]">a growing calendar of events annually</strong>, UPTECH members stay at the forefront of UK–Pakistan technology innovation.
              </p>

              <div>
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">
                  UK–Pakistan Tech Summit Series
                </h3>
                <p className="text-sm leading-relaxed text-[#3D4152]">
                  The Council&apos;s flagship summit series brings together leaders from technology, investment, government, and academia for multi-day programmes of keynotes, panels, and B2B meetings across London, Islamabad, and other key cities.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">
                  Investor Dialogues &amp; Roundtables
                </h3>
                <p className="text-sm leading-relaxed text-[#3D4152]">
                  Invitation-only gatherings connecting UK and Pakistani investors with high-growth technology companies. These structured sessions facilitate meaningful deal flow and long-term partnerships.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">
                  Webinars &amp; Digital Events
                </h3>
                <p className="text-sm leading-relaxed text-[#3D4152]">
                  Regular online sessions featuring industry experts, policy briefings, and market intelligence updates. Open to all members and selected partners.
                </p>
              </div>
            </div>

            {/* Right — Contact card */}
            <div className="lg:w-72 shrink-0">
              <div className="bg-white border border-[#D8D5CF] p-6">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 flex flex-col items-center gap-4">
                    <div className="relative w-24 h-24 overflow-hidden bg-[#D8D5CF]">
                      <Image
                        src="/image/eventgallery/event-2.jpg"
                        alt="Events Programme Manager"
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <a
                      href="mailto:events@uptechcouncil.org"
                      className="inline-flex items-center justify-center w-10 h-10 bg-[#1C1F2E] text-white hover:bg-[#2563EB] transition-colors duration-200"
                      aria-label="Email events team"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="pt-3">
                    <h4 className="font-heading font-bold text-lg text-[#1C1F2E] leading-tight mb-1">
                      Events Team
                    </h4>
                    <p className="text-sm leading-snug italic text-[#3D4152]">
                      Events and Programmes<br />Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ============================================================ */}
      {/*  EVENTS & HIGHLIGHTS                                          */}
      {/* ============================================================ */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Programme"
            title="Events and Highlights"
            subtitle="Key engagements, summits, and activities from the UK–Pakistan corridor."
          />

          <EventGrid
            hideBadge
            events={featuredEvents.map(({ title, date, image, shortDescription, location }) => ({
              title,
              date,
              image,
              summary: shortDescription,
              location: location ?? "",
            }))}
          />
        </AnimatedSection>
      </Section>

      {/* ============================================================ */}
      {/*  NEWS & UPDATES                                               */}
      {/* ============================================================ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Latest"
            title="News &amp; Updates"
            subtitle="Stay informed with the latest news, announcements, and insights from UPTECH."
          />

          <NewsUpdates items={newsItems} />
        </AnimatedSection>
      </Section>

      {/* ============================================================ */}
      {/*  CTA                                                          */}
      {/* ============================================================ */}
      <EventsCTA />
    </div>
  );
}
