"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Section } from "@/components/Section";
import { motion, useReducedMotion } from "framer-motion";
import { EventGrid } from "@/components/events/EventGrid";
import { NewsCard } from "@/components/NewsCard";
import { EventsCTA } from "@/components/events/EventsCTA";
import { ChevronRight, Mail } from "lucide-react";
import { events } from "@/data/events";
import { articles } from "@/data/articles";

/* First 10 articles for the news section */
const newsArticles = articles.slice(0, 10);

/* ------------------------------------------------------------------ */
/*  Filter tabs                                                         */
/* ------------------------------------------------------------------ */
type FilterTab = "All" | "Upcoming" | "Past" | "London" | "Pakistan" | "UPTECH";
const FILTER_TABS: FilterTab[] = ["All", "Upcoming", "Past", "London", "Pakistan", "UPTECH"];

/* ------------------------------------------------------------------ */
/*  Events listing page                                                 */
/* ------------------------------------------------------------------ */
// Derive live status from dateISO so filters stay accurate regardless of
// how the data field was set. An event is "upcoming" if its date is today or later.
function isUpcoming(dateISO: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(dateISO) >= today;
}

export default function EventsPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");

  const filteredEvents = events.filter((e) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Upcoming") return isUpcoming(e.dateISO);
    if (activeFilter === "Past") return !isUpcoming(e.dateISO);
    return e.category === activeFilter;
  });

  // Sort: newest (highest dateISO) first in all views
  const sortedEvents = [...filteredEvents].sort((a, b) =>
    b.dateISO.localeCompare(a.dateISO)
  );

  const gridEvents = sortedEvents.map((e) => ({
    slug: e.slug,
    title: e.title,
    date: e.date,
    image: e.image,
    summary: e.excerpt,
    location: e.location,
    tag: e.tag,
  }));

  return (
    <div>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden min-h-[480px]">
        <Image
          src="/image/Events%20%26%20Engagements/banner1.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(10,14,30,0.50) 0%, rgba(10,14,30,0.18) 45%, transparent 70%)",
          }}
        />
        <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 pt-16 pb-16">
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

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-lg text-white/70 max-w-2xl leading-relaxed mb-7"
          >
            UPTECH events, key London and Pakistan tech summits, and bilateral engagements connecting both nations&apos; technology ecosystems.
          </motion.p>

          {/* Stats chips */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-3"
          >
            {[
              { label: `${events.filter((e) => isUpcoming(e.dateISO)).length} Upcoming` },
              { label: `${events.filter((e) => e.category === "London").length} London Events` },
              { label: `${events.filter((e) => e.category === "Pakistan").length} Pakistan Events` },
              { label: `${events.filter((e) => e.category === "UPTECH").length} UPTECH Events` },
            ].map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center px-4 py-1.5 border border-white/30 text-white/80 text-xs font-semibold uppercase tracking-wide"
              >
                {chip.label}
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
            <div className="flex-1 min-w-0 space-y-6">
              <p className="text-base leading-relaxed text-[#3D4152]">
                Our events calendar spans the full UK–Pakistan technology corridor — from{" "}
                <strong className="text-[#1C1F2E]">UPTECH flagship summits and dialogues</strong> to major{" "}
                <strong className="text-[#1C1F2E]">London and Pakistan technology events</strong> where our members and partners make their mark. With a growing calendar of engagements annually, UPTECH members stay at the forefront of UK–Pakistan technology innovation.
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
                  London Tech Calendar
                </h3>
                <p className="text-sm leading-relaxed text-[#3D4152]">
                  From London Tech Week and SXSW London to the AI Summit and DTX, we track and attend the most significant technology events in the UK capital — connecting Pakistani companies and diaspora professionals to the heart of European tech.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">
                  Pakistan Events Calendar
                </h3>
                <p className="text-sm leading-relaxed text-[#3D4152]">
                  ITCN Asia, ASOCIO Digital Summit, and the HBL P@SHA ICT Awards represent Pakistan&apos;s most significant technology events. UPTECH helps UK companies engage meaningfully with Pakistan&apos;s domestic technology ecosystem through these premier platforms.
                </p>
              </div>
            </div>

            {/* Contact card */}
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
      {/*  EVENTS GRID WITH FILTERS                                     */}
      {/* ============================================================ */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Programme"
            title="Events and Highlights"
            subtitle="Key engagements, summits, and activities from the UK–Pakistan corridor."
          />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wide border transition-colors duration-200 ${
                  activeFilter === tab
                    ? "bg-[#1C1F2E] text-white border-[#1C1F2E]"
                    : "bg-white text-[#3D4152] border-[#D8D5CF] hover:border-[#2563EB] hover:text-[#2563EB]"
                }`}
              >
                {tab}
                {tab === "All" && (
                  <span className="ml-2 opacity-60">{events.length}</span>
                )}
                {tab === "Upcoming" && (
                  <span className="ml-2 opacity-60">{events.filter((e) => isUpcoming(e.dateISO)).length}</span>
                )}
                {tab === "Past" && (
                  <span className="ml-2 opacity-60">{events.filter((e) => !isUpcoming(e.dateISO)).length}</span>
                )}
                {tab === "London" && (
                  <span className="ml-2 opacity-60">{events.filter((e) => e.category === "London").length}</span>
                )}
                {tab === "Pakistan" && (
                  <span className="ml-2 opacity-60">{events.filter((e) => e.category === "Pakistan").length}</span>
                )}
                {tab === "UPTECH" && (
                  <span className="ml-2 opacity-60">{events.filter((e) => e.category === "UPTECH").length}</span>
                )}
              </button>
            ))}
          </div>

          {gridEvents.length > 0 ? (
            <EventGrid hideBadge={false} events={gridEvents} />
          ) : (
            <div className="text-center py-16 text-[#3D4152]">
              <p className="text-base">No events found for this filter.</p>
            </div>
          )}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {newsArticles.map((article, i) => (
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
        </AnimatedSection>
      </Section>

      {/* ============================================================ */}
      {/*  CTA                                                          */}
      {/* ============================================================ */}
      <EventsCTA />
    </div>
  );
}
