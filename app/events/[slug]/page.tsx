"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import {
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Share2,
  Users,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/Button";
import { AnimatedSection } from "@/components/AnimatedSection";

/* ------------------------------------------------------------------ */
/*  Sample event data — replace with API/CMS fetch in production       */
/* ------------------------------------------------------------------ */
const eventsData: Record<string, EventData> = {
  "uk-pakistan-tech-innovation-summit": {
    title: "UK–Pakistan Tech Innovation Summit",
    date: "2026-06-15",
    time: "09:00 – 17:00 BST",
    location: "Queen Elizabeth II Centre, London, UK",
    price: "Free for Members / £95 General Admission",
    image: "/image/eventgallery/event-1.jpg",
    summary:
      "A flagship forum bringing together founders, policymakers, and enterprise leaders to explore cross-border collaboration, digital trade, and strategic partnerships between the UK and Pakistan.",
    description: `The UK–Pakistan Tech Innovation Summit is the premier annual gathering of the UK–Pakistan Tech Council. Now in its third edition, the Summit convenes over 500 delegates from both nations — including technology founders, institutional investors, policymakers, academic researchers, and enterprise leaders.\n\nThis year's programme focuses on three critical themes: AI-driven economic transformation, cross-border digital trade frameworks, and sustainable technology investment corridors. Delegates will engage in keynote sessions, interactive workshops, curated networking, and live showcases of breakthrough technologies from both nations.\n\nThe Summit also serves as the stage for the annual UK–Pakistan Tech Excellence Awards, recognising outstanding contributions to bilateral innovation and growth.`,
    agenda: [
      { time: "08:30 – 09:00", title: "Registration & Networking Breakfast" },
      { time: "09:00 – 09:30", title: "Opening Ceremony & Welcome Remarks" },
      { time: "09:30 – 10:30", title: "Keynote: AI & the Future of Bilateral Trade" },
      { time: "10:30 – 11:00", title: "Networking Break" },
      { time: "11:00 – 12:30", title: "Panel: Cross-Border Investment Opportunities" },
      { time: "12:30 – 13:30", title: "Lunch & Exhibition" },
      { time: "13:30 – 15:00", title: "Workshop: Market Entry Strategies for Tech Companies" },
      { time: "15:00 – 15:30", title: "Afternoon Break" },
      { time: "15:30 – 16:30", title: "Fireside Chat: Founders Building Across Borders" },
      { time: "16:30 – 17:00", title: "Closing Remarks & Awards Ceremony" },
    ],
    speakers: [
      { name: "Dr. Sarah Khan", title: "Chief Innovation Officer, UK Digital Trade Board", image: "/image/eventgallery/event-2.jpg" },
      { name: "Ahmed Rashid", title: "CEO, PakTech Ventures", image: "/image/eventgallery/event-3.jpg" },
      { name: "Emily Watson", title: "Partner, Global Tech Capital", image: "/image/eventgallery/event-4.jpg" },
      { name: "Bilal Mahmood", title: "Founder, NexaBridge AI", image: "/image/eventgallery/event-1.jpg" },
      { name: "Prof. James Clarke", title: "Director, Oxford Digital Policy Centre", image: "/image/eventgallery/event-2.jpg" },
      { name: "Fatima Noor", title: "MD, Islamabad FinTech Hub", image: "/image/eventgallery/event-3.jpg" },
    ],
  },
  "cross-border-investment-dialogue": {
    title: "Cross-Border Investment Dialogue",
    date: "2026-07-22",
    time: "10:00 – 16:00 BST",
    location: "The Shard, London, UK",
    price: "Invitation Only",
    image: "/image/eventgallery/event-2.jpg",
    summary:
      "Private roundtables connecting UK and Pakistani investors with high-growth technology companies to unlock funding, partnerships, and expansion opportunities.",
    description: `The Cross-Border Investment Dialogue is an invitation-only gathering designed to facilitate meaningful connections between UK and Pakistani investors, fund managers, and high-growth technology companies seeking cross-border expansion.\n\nThe format includes structured roundtable sessions, one-to-one investor meetings, and curated deal-flow presentations. Each participating company has been pre-screened and matched with relevant capital partners to maximise the quality of engagement.\n\nThis year's Dialogue will spotlight opportunities in FinTech, HealthTech, AI infrastructure, and climate technology — sectors where bilateral investment corridors show the strongest growth potential.`,
    agenda: [
      { time: "09:30 – 10:00", title: "Arrival & Registration" },
      { time: "10:00 – 10:45", title: "Opening: State of UK–Pakistan Tech Investment" },
      { time: "10:45 – 12:00", title: "Roundtable A: FinTech & Digital Banking" },
      { time: "12:00 – 13:00", title: "Networking Lunch" },
      { time: "13:00 – 14:15", title: "Roundtable B: HealthTech & AI Infrastructure" },
      { time: "14:15 – 15:30", title: "One-to-One Investor Meetings" },
      { time: "15:30 – 16:00", title: "Closing Remarks & Next Steps" },
    ],
    speakers: [
      { name: "James Harrington", title: "Managing Partner, Crown Ventures", image: "/image/eventgallery/event-4.jpg" },
      { name: "Ayesha Siddiqui", title: "Director, Pakistan Sovereign Fund", image: "/image/eventgallery/event-1.jpg" },
      { name: "Richard Thornton", title: "Head of EMEA, TechBridge Capital", image: "/image/eventgallery/event-2.jpg" },
      { name: "Zara Malik", title: "CEO, HealthTech Pakistan", image: "/image/eventgallery/event-3.jpg" },
    ],
  },
  "digital-policy-regulatory-forum": {
    title: "Digital Policy & Regulatory Forum",
    date: "2026-09-10",
    time: "09:30 – 16:30 PKT",
    location: "Islamabad Convention Centre, Pakistan",
    price: "Free",
    image: "/image/eventgallery/event-3.jpg",
    summary:
      "Institutional discussions between regulators, advisors, and industry leaders focused on enabling innovation through transparent, future-ready policy frameworks.",
    description: `The Digital Policy & Regulatory Forum convenes senior policymakers, regulatory advisors, legal professionals, and technology industry leaders from the UK and Pakistan for a full-day programme of structured dialogue.\n\nThe Forum addresses the most pressing regulatory challenges affecting cross-border technology operations — including data governance, digital taxation, intellectual property protection, and AI ethics frameworks.\n\nOutputs from the Forum directly inform the Council's annual Policy Brief, which is submitted to relevant government bodies in both nations as a practical roadmap for enabling bilateral digital trade and innovation.`,
    agenda: [
      { time: "09:00 – 09:30", title: "Registration" },
      { time: "09:30 – 10:30", title: "Keynote: Digital Governance in an AI-First World" },
      { time: "10:30 – 12:00", title: "Panel: Cross-Border Data Governance" },
      { time: "12:00 – 13:00", title: "Lunch Break" },
      { time: "13:00 – 14:30", title: "Workshop: IP Protection for Tech Companies" },
      { time: "14:30 – 15:00", title: "Break" },
      { time: "15:00 – 16:00", title: "Panel: AI Ethics & Responsible Innovation" },
      { time: "16:00 – 16:30", title: "Closing Statements & Policy Brief Launch" },
    ],
    speakers: [
      { name: "Justice Amir Hussain", title: "Chair, Pakistan Digital Rights Commission", image: "/image/eventgallery/event-4.jpg" },
      { name: "Dr. Helen Cartwright", title: "Senior Fellow, UK Internet Policy Institute", image: "/image/eventgallery/event-1.jpg" },
      { name: "Tariq Jameel", title: "Partner, Islamabad Legal Associates", image: "/image/eventgallery/event-2.jpg" },
    ],
  },
};

interface AgendaItem {
  time: string;
  title: string;
}

interface Speaker {
  name: string;
  title: string;
  image: string;
}

interface EventData {
  title: string;
  date: string;
  time: string;
  location: string;
  price: string;
  image: string;
  summary: string;
  description: string;
  agenda: AgendaItem[];
  speakers: Speaker[];
}

/* ------------------------------------------------------------------ */
/*  Countdown hook                                                     */
/* ------------------------------------------------------------------ */
function useCountdown(targetDate: string) {
  const calculateTimeLeft = useCallback(() => {
    const diff = new Date(targetDate).getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return timeLeft;
}

/* ------------------------------------------------------------------ */
/*  Countdown block                                                    */
/* ------------------------------------------------------------------ */
function CountdownBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-xs sm:text-sm text-white/70 uppercase tracking-wider mt-2 font-medium">
        {label}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Social share sidebar                                               */
/* ------------------------------------------------------------------ */
function SocialShare() {
  const socials = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Mail, label: "Email", href: "#" },
    { icon: Share2, label: "Share", href: "#" },
  ];

  return (
    <div className="flex lg:flex-col gap-3">
      {socials.map((s) => {
        const Icon = s.icon;
        return (
          <a
            key={s.label}
            href={s.href}
            aria-label={`Share on ${s.label}`}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#4B5563] hover:text-[#2563EB] hover:border-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300"
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page component                                                */
/* ------------------------------------------------------------------ */
export default function EventDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const event = eventsData[slug];
  const shouldReduceMotion = useReducedMotion();
  const timeLeft = useCountdown(event?.date ?? "2026-01-01");

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="font-heading font-bold text-3xl text-[#2563EB] mb-4">
            Event Not Found
          </h1>
          <p className="text-[#4B5563] mb-8" style={{ color: "#4B5563" }}>
            The event you are looking for does not exist or has been moved.
          </p>
          <Button href="/events" variant="primary" showArrow>
            Back to Events
          </Button>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(event.date).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white min-h-screen">
      {/* ============================================================ */}
      {/*  EVENT HERO                                                    */}
      {/* ============================================================ */}
      <section className="relative bg-[#2563EB] overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
          {/* Breadcrumb */}
          <motion.nav
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <ol className="flex items-center gap-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5" />
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5" />
              <li className="text-white font-medium truncate max-w-[260px]">
                {event.title}
              </li>
            </ol>
          </motion.nav>

          {/* Title */}
          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight max-w-3xl mb-10"
          >
            {event.title}
          </motion.h1>

          {/* Countdown */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="inline-flex items-center gap-6 sm:gap-8 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-5 border border-white/15"
          >
            <CountdownBlock value={timeLeft.days} label="Days" />
            <div className="w-px h-10 bg-white/20" />
            <CountdownBlock value={timeLeft.hours} label="Hours" />
            <div className="w-px h-10 bg-white/20" />
            <CountdownBlock value={timeLeft.minutes} label="Minutes" />
            <div className="w-px h-10 bg-white/20" />
            <CountdownBlock value={timeLeft.seconds} label="Seconds" />
          </motion.div>
        </div>

        {/* Hero bottom accent — matching Hero section */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#E11D48]" />
      </section>

      {/* ============================================================ */}
      {/*  MAIN CONTENT                                                  */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* LEFT — Social share (sticky on desktop) */}
            <div className="lg:w-16 shrink-0">
              <div className="lg:sticky lg:top-28">
                <SocialShare />
              </div>
            </div>

            {/* RIGHT — Main content */}
            <div className="flex-1 min-w-0">
              {/* Event Summary Card */}
              <AnimatedSection>
                <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 mb-12 border border-gray-100 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[#2563EB] mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-semibold block mb-1">
                          Date
                        </span>
                        <span className="text-[#1F2937] font-medium text-sm">
                          {formattedDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#2563EB] mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-semibold block mb-1">
                          Time
                        </span>
                        <span className="text-[#1F2937] font-medium text-sm">
                          {event.time}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#2563EB] mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-semibold block mb-1">
                          Location
                        </span>
                        <span className="text-[#1F2937] font-medium text-sm">
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Tag className="w-5 h-5 text-[#2563EB] mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-semibold block mb-1">
                          Price
                        </span>
                        <span className="text-[#1F2937] font-medium text-sm">
                          {event.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Event Image */}
              <AnimatedSection className="mb-12">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                </div>
              </AnimatedSection>

              {/* Description */}
              <AnimatedSection className="mb-16">
                <div className="mb-8">
                  <span className="text-sm font-semibold text-[#1F2937] mb-2 block">
                    Overview
                  </span>
                  <div className="flex items-center gap-6 mb-6">
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#2563EB] shrink-0">
                      About This Event
                    </h2>
                    <div className="flex-1 h-[2px] bg-[#22C55E]" />
                  </div>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p style={{ color: "#4B5563" }} className="text-base leading-relaxed mb-4">
                    {event.summary}
                  </p>
                  {event.description.split("\n\n").map((para, i) => (
                    <p key={i} style={{ color: "#4B5563" }} className="text-base leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </AnimatedSection>

              {/* Agenda */}
              <AnimatedSection className="mb-16">
                <div className="mb-8">
                  <span className="text-sm font-semibold text-[#1F2937] mb-2 block">
                    Schedule
                  </span>
                  <div className="flex items-center gap-6 mb-6">
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#2563EB] shrink-0">
                      Event Agenda
                    </h2>
                    <div className="flex-1 h-[2px] bg-[#22C55E]" />
                  </div>
                </div>
                <div className="space-y-0">
                  {event.agenda.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 sm:gap-6 py-4 border-b border-gray-100 last:border-b-0 group hover:bg-[#F8FAFC] -mx-4 px-4 rounded-lg transition-colors duration-200"
                    >
                      <div className="shrink-0 w-36 sm:w-44">
                        <span className="text-sm font-semibold text-[#2563EB]">
                          {item.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 min-w-0">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                        <span className="text-[#1F2937] font-medium text-sm sm:text-base">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Speakers */}
              <AnimatedSection className="mb-16">
                <div className="mb-8">
                  <span className="text-sm font-semibold text-[#1F2937] mb-2 block">
                    Featured
                  </span>
                  <div className="flex items-center gap-6 mb-6">
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#2563EB] shrink-0">
                      Speakers
                    </h2>
                    <div className="flex-1 h-[2px] bg-[#22C55E]" />
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                  {event.speakers.map((speaker) => (
                    <div key={speaker.name} className="text-center group">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-[#2563EB] transition-colors duration-300 shadow-sm">
                        <Image
                          src={speaker.image}
                          alt={speaker.name}
                          fill
                          className="object-cover"
                          sizes="112px"
                        />
                      </div>
                      <h4 className="font-heading font-semibold text-sm text-[#1F2937] mb-1">
                        {speaker.name}
                      </h4>
                      <p style={{ color: "#4B5563" }} className="text-xs leading-snug">
                        {speaker.title}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* CTA */}
              <AnimatedSection>
                <div className="bg-[#F8FAFC] rounded-2xl p-8 sm:p-12 text-center border border-gray-100">
                  <Users className="w-10 h-10 text-[#2563EB] mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#1F2937] mb-3">
                    Interested in Attending?
                  </h3>
                  <p style={{ color: "#4B5563" }} className="text-base max-w-xl mx-auto mb-8 leading-relaxed">
                    Register your interest below and our team will be in touch with confirmation details, agenda updates, and delegate information.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="primary" size="lg" showArrow>
                      Register Interest
                    </Button>
                    <Button href="/events" variant="secondary" size="lg">
                      View All Events
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
