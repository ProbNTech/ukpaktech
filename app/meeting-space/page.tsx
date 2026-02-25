"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import {
  CheckCircle2,
  MapPin,
  Users,
  Monitor,
  Wifi,
  Coffee,
  Printer,
  Clock,
  Star,
  DoorOpen,
  UserCheck,
  Mail,
  CalendarCheck,
  XCircle,
  ShieldCheck,
  UtensilsCrossed,
  Headphones,
  ClipboardList,
  Ticket,
} from "lucide-react";

const stats = [
  { value: "6", label: "Meeting Rooms" },
  { value: "30", label: "Max Capacity" },
  { value: "Mon\u2013Sat", label: "Available Days" },
  { value: "Central London", label: "Location" },
];

const facilities = [
  { icon: Monitor, title: "Presentation Equipment", desc: "HD projector, large display screens, HDMI/USB-C connectivity, and wireless screen sharing.", color: "#2563EB" },
  { icon: Wifi, title: "High-Speed Internet", desc: "Dedicated fibre broadband with secure Wi-Fi for all attendees and video conferencing.", color: "#8b5cf6" },
  { icon: Coffee, title: "Refreshments", desc: "Complimentary tea, coffee, and water. Catering packages available for longer meetings and events.", color: "#f59e0b" },
  { icon: Printer, title: "Business Services", desc: "Printing, scanning, and photocopying facilities. Stationery and whiteboards provided.", color: "#10b981" },
  { icon: Users, title: "Flexible Capacity", desc: "Meeting rooms for 4\u201330 people. Boardroom, workshop, and seminar configurations available.", color: "#ef4444" },
  { icon: Clock, title: "Extended Hours", desc: "Available Monday to Saturday, 8am\u20138pm. Weekend and evening bookings by arrangement.", color: "#ec4899" },
];

const membershipTiers = [
  {
    tier: "Strategic Partner",
    highlight: true,
    benefits: [
      "Unlimited meeting room access (subject to availability)",
      "Priority booking up to 60 days in advance",
      "Complimentary catering for up to 4 events per year",
      "Dedicated account manager for bookings",
      "Access to executive boardroom",
      "Branding opportunity in meeting spaces",
      "Guest access for up to 10 non-member attendees per event",
    ],
  },
  {
    tier: "Corporate",
    highlight: false,
    benefits: [
      "20 hours of meeting room access per month",
      "Priority booking up to 30 days in advance",
      "Discounted catering packages",
      "Access to standard and premium rooms",
      "Guest access for up to 5 non-member attendees per event",
      "Complimentary refreshments included",
    ],
  },
  {
    tier: "SME",
    highlight: false,
    benefits: [
      "10 hours of meeting room access per month",
      "Booking up to 14 days in advance",
      "Standard meeting rooms and hot desks",
      "Guest access for up to 3 non-member attendees per event",
      "Complimentary refreshments included",
      "Access to shared workspace area",
    ],
  },
  {
    tier: "Startup / Associate",
    highlight: false,
    benefits: [
      "5 hours of meeting room access per month",
      "Booking up to 7 days in advance",
      "Standard meeting rooms",
      "Guest access for 1 non-member attendee per event",
      "Complimentary refreshments included",
    ],
  },
  {
    tier: "Government / Institutional",
    highlight: false,
    benefits: [
      "Custom allocation based on partnership agreement",
      "Priority booking for bilateral and policy events",
      "Access to all meeting and event spaces",
      "Dedicated coordination support",
      "Full catering and AV support included",
    ],
  },
];

const addOnServices = [
  { icon: UtensilsCrossed, title: "Catering Packages", desc: "Light refreshments, working lunch, or full event catering tailored to your requirements.", color: "#f59e0b" },
  { icon: Headphones, title: "AV & Tech Support", desc: "On-site technical support for video conferencing, live streaming, and presentation setup.", color: "#2563EB" },
  { icon: ClipboardList, title: "Event Coordination", desc: "Dedicated event coordinator to manage logistics, registration, and guest management.", color: "#8b5cf6" },
  { icon: Ticket, title: "Additional Guest Passes", desc: "Extra non-member guest passes available for purchase beyond your tier allocation.", color: "#10b981" },
];

const bookingChecklist = [
  { icon: ShieldCheck, text: "Open to all UPTECH members with active membership" },
  { icon: Mail, text: "Booking via the member portal or by emailing info@uptech.org.uk" },
  { icon: CalendarCheck, text: "Advance booking recommended \u2014 especially for premium spaces" },
  { icon: XCircle, text: "Cancellation must be made 48 hours in advance" },
  { icon: UserCheck, text: "Non-member guests permitted within tier allocation" },
];

const tierColors: Record<string, string> = {
  "Strategic Partner": "#2563EB",
  "Corporate": "#8b5cf6",
  "SME": "#10b981",
  "Startup / Associate": "#f59e0b",
  "Government / Institutional": "#ef4444",
};

export default function MeetingSpacePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[520px]">
        <Image
          src="/image/london-images/executive-boardroom.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,14,30,0.92) 0%, rgba(10,14,30,0.70) 50%, rgba(10,14,30,0.50) 100%)",
          }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 z-[2] opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 pt-20 pb-16">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/60">
                Professional Spaces
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-white mb-6 max-w-3xl"
          >
            London Meeting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60a5fa]">
              Space
            </span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-lg text-white/50 max-w-2xl leading-relaxed mb-10"
          >
            Professional meeting and event facilities in the heart of London for
            UPTECH members and partners.
          </motion.p>

          {/* Stats — Floating glass cards inside hero */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="group relative bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-xl p-5 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 text-center overflow-hidden"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.12), transparent 70%)",
                  }}
                />
                <div className="relative">
                  <p className="font-heading font-extrabold text-white text-3xl sm:text-4xl mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar (secondary) — Glowing glass cards on dark bg ──── */}
      <section className="relative z-[1] bg-[#0B0F1A] overflow-hidden">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={`bar-${stat.label}`}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 text-center overflow-hidden"
              >
                {/* Glowing border accent */}
                <div
                  className="absolute inset-0 rounded-xl opacity-20"
                  style={{
                    boxShadow: "inset 0 0 20px rgba(37,99,235,0.08)",
                  }}
                />
                <p className="font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60a5fa] text-3xl sm:text-4xl lg:text-5xl mb-1">
                  {stat.value}
                </p>
                <p className="text-white/40 text-xs sm:text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview — Dark glass section ──────────────────────────── */}
      <section
        className="relative py-16 overflow-hidden"
        style={{ backgroundColor: "#0E1221" }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div
          className="absolute top-0 left-1/4 w-96 h-96 opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #2563EB, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #8b5cf6, transparent 60%)",
          }}
        />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="mb-8">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-3">
                    Our Space
                  </p>
                  <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                    Professional Meeting Facilities
                  </h2>
                  <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-transparent" />
                </div>
                <p className="text-white/50 text-base leading-relaxed mb-5">
                  UPTECH provides its members with access to professional meeting
                  and event spaces in central London. Whether you need a boardroom
                  for a strategic meeting, a workshop space for training, or a
                  venue for networking events, our facilities are designed to
                  support your business needs.
                </p>
                <p className="text-white/50 text-base leading-relaxed mb-5">
                  Our meeting spaces are equipped with modern technology,
                  high-speed internet, and professional amenities to ensure
                  productive and comfortable meetings. All spaces are accessible,
                  well-maintained, and staffed with support personnel.
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-9 h-9 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
                    <MapPin
                      className="w-4.5 h-4.5 text-[#2563EB]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-white/70 font-semibold text-sm">
                    Central London location with excellent transport links
                  </span>
                </div>
              </div>

              {/* Booking Info Card — dark glass */}
              <div className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden">
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background:
                      "linear-gradient(to right, #2563EB, #8b5cf6)",
                  }}
                />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: "#2563EB15",
                          border: "1px solid #2563EB25",
                        }}
                      >
                        <DoorOpen
                          className="w-5 h-5 text-[#2563EB]"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-white text-base">
                      Booking Information
                    </h3>
                  </div>
                  <div className="h-px bg-white/[0.06] mb-5" />
                  <ul className="space-y-4">
                    {bookingChecklist.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <motion.li
                          key={item.text}
                          initial={
                            shouldReduceMotion
                              ? { opacity: 1 }
                              : { opacity: 0, x: -12 }
                          }
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.4, delay: i * 0.08 }}
                          className="flex items-start gap-3"
                        >
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{
                              backgroundColor: "#22C55E10",
                              border: "1px solid #22C55E20",
                            }}
                          >
                            <Icon
                              className="w-3.5 h-3.5 text-[#22C55E]"
                              strokeWidth={2}
                            />
                          </div>
                          <span className="text-sm text-white/50 leading-relaxed">
                            {item.text}
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Facilities — Dark bg with glass cards ─────────────────── */}
      <section className="relative py-16 overflow-hidden bg-[#0B0F1A]">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/30 to-transparent" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #8b5cf6, transparent 50%)",
          }}
        />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8b5cf6] mb-3">
                What We Offer
              </p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Facilities &amp; Amenities
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#8b5cf6] to-transparent mb-4" />
              <p className="text-white/40 text-base max-w-xl">
                Everything you need for productive meetings and successful events.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: 20 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-white/[0.03] rounded-xl border border-white/[0.06] overflow-hidden hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-300"
                  >
                    {/* Colored glow top border */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{
                        background: `linear-gradient(to right, ${item.color}, ${item.color}60)`,
                      }}
                    />
                    {/* Hover glow effect */}
                    <div
                      className="absolute top-0 left-1/4 right-1/4 h-16 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
                      style={{ background: item.color }}
                    />

                    <div className="relative p-6 lg:p-7">
                      <div className="flex items-center justify-between mb-5">
                        <div className="relative">
                          {/* Icon glow on hover */}
                          <div
                            className="absolute inset-[-6px] rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"
                            style={{ background: item.color }}
                          />
                          <div
                            className="relative w-11 h-11 rounded-xl flex items-center justify-center"
                            style={{
                              background: `${item.color}10`,
                              border: `1px solid ${item.color}20`,
                            }}
                          >
                            <Icon
                              className="w-5 h-5"
                              style={{ color: item.color }}
                              strokeWidth={1.5}
                            />
                          </div>
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-base text-white mb-2">
                        {item.title}
                      </h3>
                      <div className="h-px bg-white/[0.06] mb-3" />
                      <p className="text-sm text-white/40 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Membership Tier Benefits — Dark glass cards ───────────── */}
      <section
        className="relative py-16 overflow-hidden"
        style={{ backgroundColor: "#0E1221" }}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div
          className="absolute top-0 right-1/4 w-96 h-96 opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #2563EB, transparent 60%)",
          }}
        />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-3">
                Access by Tier
              </p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Meeting Space Benefits by Membership
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-transparent mb-4" />
              <p className="text-white/40 text-base max-w-xl">
                Your access to meeting facilities depends on your UPTECH
                membership tier.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {membershipTiers.map((item, index) => {
                const color = tierColors[item.tier] || "#2563EB";
                return (
                  <motion.div
                    key={item.tier}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: 20 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group relative rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 ${
                      item.highlight
                        ? "bg-gradient-to-br from-[#2563EB]/[0.08] to-[#8b5cf6]/[0.05] border-2 border-[#2563EB]/40 shadow-[0_0_30px_rgba(37,99,235,0.15)]"
                        : "bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12]"
                    }`}
                  >
                    {/* Strategic Partner: glowing border effects */}
                    {item.highlight && (
                      <>
                        <div
                          className="absolute top-0 left-0 right-0 h-[3px]"
                          style={{
                            background:
                              "linear-gradient(to right, #2563EB, #60a5fa, #2563EB)",
                          }}
                        />
                        <div className="absolute top-0 left-1/4 right-1/4 h-12 opacity-25 blur-2xl bg-[#2563EB]" />
                        <div className="absolute bottom-0 left-1/4 right-1/4 h-8 opacity-10 blur-xl bg-[#2563EB]" />
                        {/* Animated shimmer */}
                        <div className="absolute inset-0 opacity-[0.03] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />
                      </>
                    )}

                    {/* Non-highlighted: left colored accent */}
                    {!item.highlight && (
                      <div
                        className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(to bottom, ${color}, ${color}40)`,
                        }}
                      />
                    )}

                    <div className="relative p-6">
                      <div className="flex items-center gap-2 mb-4">
                        {item.highlight && (
                          <Star
                            className="w-5 h-5 text-[#FBBF24]"
                            fill="#FBBF24"
                          />
                        )}
                        <h3 className="font-heading font-bold text-lg text-white">
                          {item.tier}
                        </h3>
                      </div>
                      <div
                        className={`h-px mb-4 ${
                          item.highlight
                            ? "bg-gradient-to-r from-[#2563EB]/30 to-transparent"
                            : "bg-white/[0.06]"
                        }`}
                      />
                      <ul className="space-y-3">
                        {item.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2
                              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                item.highlight
                                  ? "text-[#60a5fa]"
                                  : "text-[#22C55E]"
                              }`}
                              strokeWidth={2}
                            />
                            <span className="text-sm leading-relaxed text-white/50">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Add-on Services — Dark glass cards ────────────────────── */}
      <section className="relative py-16 overflow-hidden bg-[#0B0F1A]">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#10b981]/30 to-transparent" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#10b981] mb-3">
                Optional Extras
              </p>
              <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                Add-on Services
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#10b981] to-transparent mb-4" />
              <p className="text-white/40 text-base max-w-xl">
                Enhance your meeting or event experience with optional add-on
                services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {addOnServices.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: 20 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group relative bg-white/[0.03] rounded-xl border border-white/[0.06] overflow-hidden hover:-translate-y-1 hover:border-white/[0.12] transition-all duration-300"
                  >
                    {/* Left accent */}
                    <div
                      className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(to bottom, ${item.color}, ${item.color}40)`,
                      }}
                    />

                    <div className="relative p-6 lg:p-7 flex items-start gap-5">
                      <div className="relative flex-shrink-0">
                        {/* Icon glow on hover */}
                        <div
                          className="absolute inset-[-6px] rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"
                          style={{ background: item.color }}
                        />
                        <div
                          className="relative w-11 h-11 rounded-xl flex items-center justify-center"
                          style={{
                            background: `${item.color}10`,
                            border: `1px solid ${item.color}20`,
                          }}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: item.color }}
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-bold text-base text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-white/40 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA — Gradient glow dark section ──────────────────────── */}
      <section
        className="relative overflow-hidden py-20"
        style={{
          background:
            "linear-gradient(135deg, #0B0F1A 0%, #131942 50%, #0B0F1A 100%)",
        }}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
        {/* Glow orbs */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #2563EB, transparent 50%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #8b5cf6, transparent 60%)",
          }}
        />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-4">
                Book Now
              </p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Reserve Your Meeting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60a5fa]">
                  Space
                </span>
              </h2>
              <p className="text-white/40 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
                UPTECH members can book meeting spaces through the member portal
                or by contacting our team directly.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  href="/membership"
                  variant="primary"
                  size="lg"
                  showArrow
                >
                  Become a Member
                </Button>
                <Button href="/contact" variant="glass" size="lg" showArrow>
                  Contact Us
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
