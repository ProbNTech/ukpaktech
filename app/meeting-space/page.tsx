"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
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
  { icon: Wifi, title: "High-Speed Internet", desc: "High-speed internet connectivity.", color: "#8b5cf6" },
  { icon: Monitor, title: "Video Conferencing & AV", desc: "Video conferencing and AV facilities.", color: "#f59e0b" },
  { icon: UserCheck, title: "Reception Support", desc: "Reception support (where applicable).", color: "#10b981" },
  { icon: Clock, title: "Flexible Booking", desc: "Flexible hourly and daily booking options.", color: "#ef4444" },
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
    color: "#8b5cf6",
  },
  {
    tier: "SME Member",
    annualHours: "12 hours/year",
    bookingPriority: "Standard Priority",
    eventAccess: "Member Event Access",
    policyEngagement: "Industry Consultation Access",
    brandVisibility: "Listed in Member Directory",
    highlight: false,
    color: "#10b981",
  },
  {
    tier: "Startup / Associate",
    annualHours: "6 hours/year",
    bookingPriority: "Subject to Availability",
    eventAccess: "Selected Events",
    policyEngagement: "Observer Access to Forums",
    brandVisibility: "Directory Listing",
    highlight: false,
    color: "#f59e0b",
  },
  {
    tier: "Government / Institutional",
    annualHours: "By Arrangement",
    bookingPriority: "Coordinated Access",
    eventAccess: "Official Delegation Access",
    policyEngagement: "Formal Bilateral Engagement",
    brandVisibility: "Institutional Recognition",
    highlight: false,
    color: "#ef4444",
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
  { icon: ClipboardList, title: "Secretariat Support", desc: "Secretariat support for delegation visits.", color: "#f59e0b" },
  { icon: HeadphonesIcon, title: "Event Coordination", desc: "Event coordination assistance.", color: "#2563EB" },
  { icon: Palette, title: "Meeting Space Branding", desc: "Branding within meeting space.", color: "#8b5cf6" },
  { icon: UtensilsCrossed, title: "Catering & Hospitality", desc: "Catering and hospitality arrangements.", color: "#10b981" },
];

const bookingChecklist = [
  { icon: ShieldCheck, text: "Meeting facilities are available by advance booking and subject to membership tier allocations and availability." },
  { icon: Mail, text: "Contact: Membership & Operations Team, Email: info@uptech.org.uk" },
];

export default function MeetingSpacePage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <PageHero
        image="/image/london-images/executive-boardroom.jpg"
        title={
          <>
            London Meeting Space Access &mdash; An Exclusive Member Privilege
          </>
        }
        subtitle="The UK-Pakistan Tech Council offers members access to professional meeting facilities in Central London, enabling high-level engagement within a credible and strategic business environment. This benefit supports our mission to strengthen bilateral Tech collaboration and provides members with the infrastructure required to conduct business effectively in the United Kingdom."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/membership" variant="glass" size="lg" showArrow>
            Become a Member
          </Button>
          <Button href="/contact" variant="glass" size="lg" showArrow>
            Contact Us
          </Button>
        </div>
      </PageHero>

      {/* ── Stats Bar ────────────────────────────────────────────── */}
      <Section variant="alt">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-[#D8D5CF] rounded p-6 text-center"
            >
              <p className="font-heading font-extrabold text-[#2563EB] text-3xl sm:text-4xl mb-1">
                {stat.value}
              </p>
              <p className="text-[#3D4152] text-xs sm:text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Designated Meeting Facilities / Uses ─────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                label="Meeting Facility Uses"
                title="Designated Meeting Facilities"
              />
              <p className="text-[#3D4152] text-base leading-relaxed mb-6">
                As part of our commitment to strengthening bilateral engagement and fostering high-level dialogue, members may utilise designated meeting facilities for:
              </p>
              <ul className="space-y-4">
                {uses.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0"
                      strokeWidth={2}
                    />
                    <span className="text-sm text-[#3D4152] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 mt-8">
                <div className="w-9 h-9 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#2563EB]" />
                </div>
                <span className="text-[#1C1F2E] font-semibold text-sm">
                  Central London location with excellent transport links
                </span>
              </div>
            </div>

            {/* Booking Info Card */}
            <div className="bg-white border border-[#D8D5CF] rounded overflow-hidden">
              <div className="h-[3px] bg-gradient-to-r from-[#2563EB] to-[#8b5cf6]" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: "#2563EB12",
                      border: "1px solid #2563EB25",
                    }}
                  >
                    <DoorOpen className="w-5 h-5 text-[#2563EB]" />
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
                      <li key={item.text} className="flex items-start gap-3">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            backgroundColor: "#22C55E10",
                            border: "1px solid #22C55E20",
                          }}
                        >
                          <Icon className="w-3.5 h-3.5 text-[#22C55E]" strokeWidth={2} />
                        </div>
                        <span className="text-sm text-[#3D4152] leading-relaxed">
                          {item.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Facilities & Amenities ───────────────────────────────── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Our Facilities"
            title="Facilities & Amenities"
            subtitle="Our London meeting spaces provide a professional and secure environment equipped with:"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-[#D8D5CF] rounded overflow-hidden relative"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{
                      background: `linear-gradient(to right, ${item.color}, ${item.color}60)`,
                    }}
                  />
                  <div className="p-6 lg:p-7">
                    <div className="mb-5">
                      <div
                        className="w-11 h-11 rounded-lg flex items-center justify-center"
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
                    <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">
                      {item.title}
                    </h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-sm text-[#3D4152] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Supporting Bilateral Collaboration ───────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                label="Bilateral Collaboration"
                title="Supporting Bilateral Collaboration"
              />
              <p className="text-[#3D4152] text-base leading-relaxed mb-6">
                These facilities are designed to support our members in conducting business, hosting visiting delegations from Pakistan or the UK, and engaging with policymakers and investors in a credible and professional setting. By facilitating access to centrally located meeting infrastructure, the Council enables:
              </p>
              <ul className="space-y-4">
                {bilateralBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0"
                      strokeWidth={2}
                    />
                    <span className="text-sm text-[#3D4152] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Member Benefits Card */}
            <div className="bg-white border border-[#D8D5CF] rounded overflow-hidden">
              <div className="h-[3px] bg-gradient-to-r from-[#8b5cf6] to-[#2563EB]" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: "#8b5cf612",
                      border: "1px solid #8b5cf625",
                    }}
                  >
                    <BadgeCheck className="w-5 h-5 text-[#8b5cf6]" />
                  </div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base">
                    Member Benefits
                  </h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <p className="text-[#3D4152] text-sm leading-relaxed mb-5">
                  Eligible members may receive:
                </p>
                <ul className="space-y-4">
                  {memberBenefits.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          backgroundColor: "#8b5cf610",
                          border: "1px solid #8b5cf620",
                        }}
                      >
                        <CheckCircle2
                          className="w-3.5 h-3.5 text-[#8b5cf6]"
                          strokeWidth={2}
                        />
                      </div>
                      <span className="text-sm text-[#3D4152] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Membership Tier Benefits Table ────────────────────────── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Membership Tiers"
            title="Meeting Space Benefits by Membership Tier"
          />

          {/* Desktop Table */}
          <div className="hidden lg:block">
            <div className="bg-white border border-[#D8D5CF] rounded overflow-hidden">
              <div
                className="h-[3px]"
                style={{
                  background:
                    "linear-gradient(to right, #2563EB, #8b5cf6, #10b981, #f59e0b, #ef4444)",
                }}
              />
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#D8D5CF]">
                      <th className="text-left px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#3D4152]/60">Tier</th>
                      <th className="text-left px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#3D4152]/60">Annual Hours</th>
                      <th className="text-left px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#3D4152]/60">Booking Priority</th>
                      <th className="text-left px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#3D4152]/60">Event Access</th>
                      <th className="text-left px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#3D4152]/60">Policy Engagement</th>
                      <th className="text-left px-6 py-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[#3D4152]/60">Brand Visibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tierTableData.map((row) => (
                      <tr
                        key={row.tier}
                        className={`border-b border-[#D8D5CF]/60 transition-colors duration-200 hover:bg-[#EEECEA] ${
                          row.highlight ? "bg-[#2563EB]/5" : ""
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
                        <td className="px-6 py-4 text-sm text-[#1C1F2E] font-semibold">{row.annualHours}</td>
                        <td className="px-6 py-4 text-sm text-[#3D4152]">{row.bookingPriority}</td>
                        <td className="px-6 py-4 text-sm text-[#3D4152]">{row.eventAccess}</td>
                        <td className="px-6 py-4 text-sm text-[#3D4152]">{row.policyEngagement}</td>
                        <td className="px-6 py-4 text-sm text-[#3D4152]">{row.brandVisibility}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden grid gap-6">
            {tierTableData.map((row) => (
              <div
                key={row.tier}
                className={`bg-white rounded overflow-hidden ${
                  row.highlight
                    ? "border-2 border-[#2563EB]"
                    : "border border-[#D8D5CF]"
                }`}
              >
                <div
                  className="h-[3px]"
                  style={{
                    background: row.highlight
                      ? "linear-gradient(to right, #2563EB, #60a5fa, #2563EB)"
                      : `linear-gradient(to right, ${row.color}, ${row.color}60)`,
                  }}
                />
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
                        <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#3D4152]/40 mb-1">
                          {field.label}
                        </p>
                        <p className="text-sm text-[#3D4152]">
                          {field.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Meeting Space Terms ───────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Terms & Conditions"
            title="Meeting Space Terms"
          />

          <div className="bg-white border border-[#D8D5CF] rounded overflow-hidden max-w-3xl">
            <div
              className="h-[3px]"
              style={{
                background: "linear-gradient(to right, #f59e0b, #f59e0b60)",
              }}
            />
            <div className="p-8">
              <ul className="space-y-4">
                {meetingSpaceTerms.map((term) => (
                  <li key={term} className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        backgroundColor: "#f59e0b10",
                        border: "1px solid #f59e0b20",
                      }}
                    >
                      <CheckCircle2
                        className="w-3.5 h-3.5 text-[#f59e0b]"
                        strokeWidth={2}
                      />
                    </div>
                    <span className="text-sm text-[#3D4152] leading-relaxed">
                      {term}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Optional Add-On Services ─────────────────────────────── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Member Rates"
            title="Optional Add-On Services"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {addOnServices.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-[#D8D5CF] rounded overflow-hidden relative"
                >
                  {/* Left accent */}
                  <div
                    className="absolute top-3 bottom-3 left-0 w-[3px] rounded-r-full"
                    style={{
                      background: `linear-gradient(to bottom, ${item.color}, ${item.color}40)`,
                    }}
                  />
                  <div className="p-6 lg:p-7 flex items-start gap-5">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
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
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#3D4152] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── CTA - Reserve Your Meeting Space ─────────────────────── */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] mb-4 tracking-wide uppercase">
              Access &amp; Reservations
            </p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Reserve Your Meeting Space
            </h2>
            <div className="w-full h-px bg-white/20 mb-6" />
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-4 max-w-2xl">
              Meeting facilities are available by advance booking and subject to membership tier allocations and availability.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-10 max-w-2xl">
              Contact: Membership &amp; Operations Team | Email:{" "}
              <a
                href="mailto:info@uptech.org.uk"
                className="text-[#2563EB] hover:text-[#60a5fa] transition-colors duration-200 underline underline-offset-2"
              >
                info@uptech.org.uk
              </a>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href="/membership"
                variant="glass"
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
      </Section>
    </div>
  );
}
