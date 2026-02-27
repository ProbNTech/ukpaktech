"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { TubesCTA } from "@/components/TubesCTA";
import {
  CheckCircle2,
  MapPin,
  Monitor,
  Wifi,
  Clock,
  Star,
  DoorOpen,
  UserCheck,
  Mail,
  ShieldCheck,
  Building2,
  BadgeCheck,
  ClipboardList,
  HeadphonesIcon,
  Palette,
  UtensilsCrossed,
} from "lucide-react";

const stats = [
  { value: "Central", label: "London Location" },
  { value: "5+", label: "Membership Tiers" },
  { value: "40hrs", label: "Top Tier Annual" },
  { value: "Flexible", label: "Booking Options" },
];

const uses = [
  "Board meetings and executive briefings",
  "Investor and partner discussions",
  "Policy roundtables and working groups",
  "Startup pitch sessions",
  "Delegation meetings and trade discussions",
];

const facilities = [
  { icon: Building2, title: "Fully Furnished Boardrooms", desc: "Fully furnished boardrooms and meeting rooms.", color: "#2563EB" },
  { icon: Wifi, title: "High-Speed Internet", desc: "High-speed internet connectivity.", color: "#22C55E" },
  { icon: Monitor, title: "Video Conferencing & AV", desc: "Video conferencing and AV facilities.", color: "#C41E3A" },
  { icon: UserCheck, title: "Reception Support", desc: "Reception support (where applicable).", color: "#2563EB" },
  { icon: Clock, title: "Flexible Booking", desc: "Flexible hourly and daily booking options.", color: "#22C55E" },
];

const bilateralBenefits = [
  "Cost-effective access to premium business space",
  "A recognised address for formal engagements",
  "Strengthened networking and collaboration opportunities",
  "Seamless coordination of cross-border activities",
];

const memberBenefits = [
  "Preferential booking rates",
  "Allocated complimentary meeting hours (subject to membership tier)",
  "Priority access for Council-endorsed events",
  "Administrative support for official Council engagements",
];

const tierTableData = [
  {
    tier: "Chairman Circle",
    annualHours: "40 hours/year",
    bookingPriority: "Highest Priority",
    eventAccess: "VIP Access & Speaking Opportunities",
    policyEngagement: "Direct Advisory Roundtable Access",
    brandVisibility: "Premium Logo Placement & Event Recognition",
    highlight: true,
    color: "#2563EB",
  },
  {
    tier: "Corporate Member",
    annualHours: "24 hours/year",
    bookingPriority: "High Priority",
    eventAccess: "Priority Event Access",
    policyEngagement: "Participation in Policy Working Groups",
    brandVisibility: "Featured on Website & Publications",
    highlight: false,
    color: "#22C55E",
  },
  {
    tier: "SME Member",
    annualHours: "12 hours/year",
    bookingPriority: "Standard Priority",
    eventAccess: "Member Event Access",
    policyEngagement: "Industry Consultation Access",
    brandVisibility: "Listed in Member Directory",
    highlight: false,
    color: "#C41E3A",
  },
  {
    tier: "Startup / Associate",
    annualHours: "6 hours/year",
    bookingPriority: "Subject to Availability",
    eventAccess: "Selected Events",
    policyEngagement: "Observer Access to Forums",
    brandVisibility: "Directory Listing",
    highlight: false,
    color: "#2563EB",
  },
  {
    tier: "Government / Institutional",
    annualHours: "By Arrangement",
    bookingPriority: "Coordinated Access",
    eventAccess: "Official Delegation Access",
    policyEngagement: "Formal Bilateral Engagement",
    brandVisibility: "Institutional Recognition",
    highlight: false,
    color: "#22C55E",
  },
];

const meetingSpaceTerms = [
  "Hours may be used in hourly or half-day increments",
  "Advance booking required (min 5 working days recommended)",
  "Additional hours available at preferential member rates",
  "Unused hours do not roll over to the following year",
  "Council-endorsed events may receive priority scheduling",
];

const addOnServices = [
  { icon: ClipboardList, title: "Secretariat Support", desc: "Secretariat support for delegation visits.", color: "#2563EB" },
  { icon: HeadphonesIcon, title: "Event Coordination", desc: "Event coordination assistance.", color: "#22C55E" },
  { icon: Palette, title: "Meeting Space Branding", desc: "Branding within meeting space.", color: "#C41E3A" },
  { icon: UtensilsCrossed, title: "Catering & Hospitality", desc: "Catering and hospitality arrangements.", color: "#2563EB" },
];

const bookingChecklist = [
  { icon: ShieldCheck, text: "Meeting facilities are available by advance booking and subject to membership tier allocations and availability." },
  { icon: Mail, text: "Contact: Membership & Operations Team, Email: info@uptech.org.uk" },
];

export default function MeetingSpacePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        label="Meeting Space"
        title="London Meeting Space Access — An Exclusive Member Privilege"
        subtitle="The UK-Pakistan Tech Council offers members access to professional meeting facilities in Central London, enabling high-level engagement within a credible and strategic business environment. This benefit supports our mission to strengthen bilateral Tech collaboration and provides members with the infrastructure required to conduct business effectively in the United Kingdom."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=2400&q=85&auto=format&fit=crop"
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/membership/apply" variant="glass" showArrow>Apply for Membership</Button>
          <Button href="/contact" variant="glass" showArrow>Contact Us</Button>
        </div>
      </PageHero>

      {/* ── Stats Bar ──────────────────────────────────────────────── */}
      <section className="bg-[#EEECEA]">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={`bar-${stat.label}`}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl" style={{ background: `linear-gradient(to right, #2563EB, #2563EB60)` }} />
                <div
                  className="font-heading font-extrabold text-3xl sm:text-4xl mb-2"
                  style={{ color: "#2563EB" }}
                >
                  {stat.value}
                </div>
                <p className="text-[#5A5F72] text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Uses Section — What members can use facilities for ──────── */}
      <section
        className="relative py-10 overflow-hidden"
        style={{ backgroundColor: "#EEECEA" }}
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
          className="absolute top-0 left-1/4 w-96 h-96 opacity-[0.02]"
          style={{
            background: "radial-gradient(circle, #2563EB, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 opacity-[0.02]"
          style={{
            background: "radial-gradient(circle, #2563EB, transparent 60%)",
          }}
        />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <SectionHeader label="Meeting Facility Uses" title="Designated Meeting Facilities" color="blue" />
                <p className="text-[#3D4152] text-base leading-relaxed mb-6">
                  As part of our commitment to strengthening bilateral engagement and fostering high-level dialogue, members may utilise designated meeting facilities for:
                </p>
                <ul className="space-y-4">
                  {uses.map((item, i) => (
                    <motion.li
                      key={item}
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
                      <CheckCircle2
                        className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0"
                        strokeWidth={2}
                      />
                      <span className="text-base text-[#3D4152] leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <div className="flex items-center gap-3 mt-8">
                  <div className="w-9 h-9 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
                    <MapPin
                      className="w-4.5 h-4.5 text-[#2563EB]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-[#3D4152] font-semibold text-sm">
                    Central London location with excellent transport links
                  </span>
                </div>
              </div>

              {/* Booking Info Card — dark glass */}
              <div className="relative bg-white border border-[#D8D5CF] rounded-2xl shadow-sm overflow-hidden">
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background:
                      "linear-gradient(to right, #2563EB, #2563EB)",
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
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base">
                      Access &amp; Reservations
                    </h3>
                  </div>
                  <div className="h-px bg-[#D8D5CF] mb-5" />
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
                          <span className="text-base text-[#3D4152] leading-relaxed">
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
      <section className="relative py-10 overflow-hidden bg-white">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.02]"
          style={{
            background: "radial-gradient(circle, #2563EB, transparent 50%)",
          }}
        />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Our Facilities" title="Facilities & Amenities" subtitle="Our London meeting spaces provide a professional and secure environment equipped with:" color="blue" />

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
                    className="group relative bg-white rounded-xl border border-[#D8D5CF] shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300"
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
                      <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">
                        {item.title}
                      </h3>
                      <div className="h-px bg-[#D8D5CF] mb-3" />
                      <p className="text-base text-[#5A5F72] leading-relaxed">
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

      {/* ── Supporting Bilateral Collaboration ─────────────────────── */}
      <section
        className="relative py-10 overflow-hidden"
        style={{ backgroundColor: "#EEECEA" }}
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
          className="absolute top-0 right-1/4 w-96 h-96 opacity-[0.02]"
          style={{
            background: "radial-gradient(circle, #2563EB, transparent 60%)",
          }}
        />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <SectionHeader label="Bilateral Collaboration" title="Supporting Bilateral Collaboration" color="blue" />
                <p className="text-[#3D4152] text-base leading-relaxed mb-6">
                  These facilities are designed to support our members in conducting business, hosting visiting delegations from Pakistan or the UK, and engaging with policymakers and investors in a credible and professional setting. By facilitating access to centrally located meeting infrastructure, the Council enables:
                </p>
                <ul className="space-y-4">
                  {bilateralBenefits.map((item, i) => (
                    <motion.li
                      key={item}
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
                      <CheckCircle2
                        className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0"
                        strokeWidth={2}
                      />
                      <span className="text-base text-[#3D4152] leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Member Benefits Card */}
              <div className="relative bg-white border border-[#D8D5CF] rounded-2xl shadow-sm overflow-hidden">
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background:
                      "linear-gradient(to right, #2563EB, #2563EB)",
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
                        <BadgeCheck
                          className="w-5 h-5 text-[#2563EB]"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-[#1C1F2E] text-base">
                      Member Benefits
                    </h3>
                  </div>
                  <div className="h-px bg-[#D8D5CF] mb-5" />
                  <p className="text-[#5A5F72] text-sm leading-relaxed mb-5">
                    Eligible members may receive:
                  </p>
                  <ul className="space-y-4">
                    {memberBenefits.map((item, i) => (
                      <motion.li
                        key={item}
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
                            backgroundColor: "#2563EB10",
                            border: "1px solid #2563EB20",
                          }}
                        >
                          <CheckCircle2
                            className="w-3.5 h-3.5 text-[#2563EB]"
                            strokeWidth={2}
                          />
                        </div>
                        <span className="text-base text-[#3D4152] leading-relaxed">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Membership Tier Benefits Table — Styled Grid ────────────── */}
      <section className="relative py-10 overflow-hidden bg-white">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow orbs */}
        <div
          className="absolute top-0 right-1/4 w-96 h-96 opacity-[0.02]"
          style={{
            background: "radial-gradient(circle, #2563EB, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 opacity-[0.02]"
          style={{
            background: "radial-gradient(circle, #2563EB, transparent 60%)",
          }}
        />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Membership Tiers" title="Meeting Space Benefits by Membership Tier" color="blue" />

            {/* Desktop Table */}
            <div className="hidden lg:block">
              <div className="relative bg-white border border-[#D8D5CF] rounded-2xl shadow-sm overflow-hidden">
                {/* Top gradient accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background:
                      "linear-gradient(to right, #2563EB, #22C55E, #C41E3A, #2563EB, #22C55E)",
                  }}
                />
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#D8D5CF]">
                        <th className="text-left px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#5A5F72]">Tier</th>
                        <th className="text-left px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#5A5F72]">Annual Hours</th>
                        <th className="text-left px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#5A5F72]">Booking Priority</th>
                        <th className="text-left px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#5A5F72]">Event Access</th>
                        <th className="text-left px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#5A5F72]">Policy Engagement</th>
                        <th className="text-left px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#5A5F72]">Brand Visibility</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tierTableData.map((row, index) => (
                        <motion.tr
                          key={row.tier}
                          initial={
                            shouldReduceMotion
                              ? { opacity: 1 }
                              : { opacity: 0, y: 10 }
                          }
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.4, delay: index * 0.08 }}
                          className={`border-b border-[#E8E6E3] transition-colors duration-200 hover:bg-[#F5F4F2] ${
                            row.highlight ? "bg-blue-50" : ""
                          }`}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              {row.highlight && (
                                <Star
                                  className="w-4 h-4 text-[#FBBF24] flex-shrink-0"
                                  fill="#FBBF24"
                                />
                              )}
                              <span
                                className="font-heading font-bold text-sm"
                                style={{ color: row.color }}
                              >
                                {row.tier}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-[#5A5F72] font-semibold">{row.annualHours}</td>
                          <td className="px-6 py-4 text-sm text-[#3D4152]">{row.bookingPriority}</td>
                          <td className="px-6 py-4 text-sm text-[#3D4152]">{row.eventAccess}</td>
                          <td className="px-6 py-4 text-sm text-[#3D4152]">{row.policyEngagement}</td>
                          <td className="px-6 py-4 text-sm text-[#3D4152]">{row.brandVisibility}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden grid gap-6">
              {tierTableData.map((row, index) => (
                <motion.div
                  key={row.tier}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 20 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative rounded-xl overflow-hidden ${
                    row.highlight
                      ? "bg-gradient-to-br from-[#2563EB]/[0.08] to-[#2563EB]/[0.05] border-2 border-[#2563EB]/40 shadow-[0_0_30px_rgba(37,99,235,0.15)]"
                      : "bg-white border border-[#D8D5CF] shadow-sm"
                  }`}
                >
                  {row.highlight && (
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{
                        background:
                          "linear-gradient(to right, #2563EB, #60a5fa, #2563EB)",
                      }}
                    />
                  )}
                  {!row.highlight && (
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{
                        background: `linear-gradient(to right, ${row.color}, ${row.color}60)`,
                      }}
                    />
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      {row.highlight && (
                        <Star
                          className="w-5 h-5 text-[#FBBF24]"
                          fill="#FBBF24"
                        />
                      )}
                      <h3
                        className="font-heading font-bold text-lg"
                        style={{ color: row.color }}
                      >
                        {row.tier}
                      </h3>
                    </div>
                    <div className="h-px bg-[#D8D5CF] mb-4" />
                    <div className="space-y-3">
                      {[
                        { label: "Annual Hours", value: row.annualHours },
                        { label: "Booking Priority", value: row.bookingPriority },
                        { label: "Event Access", value: row.eventAccess },
                        { label: "Policy Engagement", value: row.policyEngagement },
                        { label: "Brand Visibility", value: row.brandVisibility },
                      ].map((field) => (
                        <div key={field.label}>
                          <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#7A7E8F] mb-1">
                            {field.label}
                          </p>
                          <p className="text-sm text-[#3D4152]">
                            {field.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Meeting Space Terms ────────────────────────────────────── */}
      <section
        className="relative py-10 overflow-hidden"
        style={{ backgroundColor: "#EEECEA" }}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C41E3A]/30 to-transparent" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Terms & Conditions" title="Meeting Space Terms" color="red" />

            <div className="relative bg-white border border-[#D8D5CF] rounded-2xl shadow-sm overflow-hidden max-w-3xl">
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: "linear-gradient(to right, #C41E3A, #C41E3A60)",
                }}
              />
              <div className="p-8">
                <ul className="space-y-4">
                  {meetingSpaceTerms.map((term, i) => (
                    <motion.li
                      key={term}
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
                          backgroundColor: "#C41E3A10",
                          border: "1px solid #C41E3A20",
                        }}
                      >
                        <CheckCircle2
                          className="w-3.5 h-3.5 text-[#C41E3A]"
                          strokeWidth={2}
                        />
                      </div>
                      <span className="text-base text-[#3D4152] leading-relaxed">
                        {term}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Optional Add-On Services (Member Rates) ────────────────── */}
      <section className="relative py-10 overflow-hidden bg-white">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/30 to-transparent" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader label="Member Rates" title="Optional Add-On Services" color="green" />

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
                    className="group relative bg-white rounded-xl border border-[#D8D5CF] shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300"
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
                        <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-base text-[#5A5F72] leading-relaxed">
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

      {/* ── CTA — TubesCursor ─────────────────────────────────────── */}
      <TubesCTA>
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#4ade80] mb-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
            Access &amp; Reservations
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-none text-white mb-5 drop-shadow-[0_0_15px_rgba(0,0,0,0.9)]">
            Reserve Your Meeting Space
          </h2>
          <div className="h-px bg-white/20 mb-6" />
          <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-xl drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
            Meeting facilities are available by advance booking and subject to membership tier allocations and availability.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/membership" variant="primary" size="lg" showArrow>
              Become a Member
            </Button>
            <Button href="/contact" variant="glass" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </TubesCTA>
    </div>
  );
}
