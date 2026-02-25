"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { CheckCircle2, MapPin, Users, Monitor, Wifi, Coffee, Printer, Clock, Calendar, Star } from "lucide-react";

const facilities = [
  { icon: Monitor, title: "Presentation Equipment", desc: "HD projector, large display screens, HDMI/USB-C connectivity, and wireless screen sharing." },
  { icon: Wifi, title: "High-Speed Internet", desc: "Dedicated fibre broadband with secure Wi-Fi for all attendees and video conferencing." },
  { icon: Coffee, title: "Refreshments", desc: "Complimentary tea, coffee, and water. Catering packages available for longer meetings and events." },
  { icon: Printer, title: "Business Services", desc: "Printing, scanning, and photocopying facilities. Stationery and whiteboards provided." },
  { icon: Users, title: "Flexible Capacity", desc: "Meeting rooms for 4–30 people. Boardroom, workshop, and seminar configurations available." },
  { icon: Clock, title: "Extended Hours", desc: "Available Monday to Saturday, 8am–8pm. Weekend and evening bookings by arrangement." },
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
  { title: "Catering Packages", desc: "Light refreshments, working lunch, or full event catering tailored to your requirements." },
  { title: "AV & Tech Support", desc: "On-site technical support for video conferencing, live streaming, and presentation setup." },
  { title: "Event Coordination", desc: "Dedicated event coordinator to manage logistics, registration, and guest management." },
  { title: "Additional Guest Passes", desc: "Extra non-member guest passes available for purchase beyond your tier allocation." },
];

export default function MeetingSpacePage() {
  return (
    <div>
      <PageHero
        title="London Meeting Space"
        subtitle="Professional meeting and event facilities in the heart of London for UPTECH members and partners."
        image="/image/london-images/professional-networking.jpg"
      />

      {/* Overview */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader label="Our Space" title="Professional Meeting Facilities" />
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                UPTECH provides its members with access to professional meeting and event spaces in central London. Whether you need a boardroom for a strategic meeting, a workshop space for training, or a venue for networking events, our facilities are designed to support your business needs.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                Our meeting spaces are equipped with modern technology, high-speed internet, and professional amenities to ensure productive and comfortable meetings. All spaces are accessible, well-maintained, and staffed with support personnel.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <MapPin className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                <span className="text-[#1C1F2E] font-semibold text-sm">Central London location with excellent transport links</span>
              </div>
            </div>
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-4">Booking Information</h3>
              <div className="h-px bg-[#D8D5CF] mb-4" />
              <ul className="space-y-3">
                {[
                  "Open to all UPTECH members with active membership",
                  "Booking via the member portal or by emailing info@uptechcouncil.com",
                  "Advance booking recommended — especially for premium spaces",
                  "Cancellation must be made 48 hours in advance",
                  "Non-member guests permitted within tier allocation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm text-[#3D4152] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Facilities */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="What We Offer" title="Facilities & Amenities" subtitle="Everything you need for productive meetings and successful events." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#2563EB] mb-3" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{item.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Membership Tier Benefits */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Access by Tier" title="Meeting Space Benefits by Membership" subtitle="Your access to meeting facilities depends on your UPTECH membership tier." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {membershipTiers.map((item) => (
              <div
                key={item.tier}
                className={`rounded p-6 ${
                  item.highlight
                    ? "bg-[#1C1F2E] text-white border-2 border-[#2563EB]"
                    : "bg-white border border-[#D8D5CF]"
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  {item.highlight && <Star className="w-5 h-5 text-[#FBBF24]" fill="#FBBF24" />}
                  <h3 className={`font-heading font-bold text-lg ${item.highlight ? "text-white" : "text-[#1C1F2E]"}`}>
                    {item.tier}
                  </h3>
                </div>
                <div className={`h-px mb-4 ${item.highlight ? "bg-white/20" : "bg-[#D8D5CF]"}`} />
                <ul className="space-y-3">
                  {item.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          item.highlight ? "text-[#22C55E]" : "text-[#22C55E]"
                        }`}
                        strokeWidth={2}
                      />
                      <span className={`text-sm leading-relaxed ${item.highlight ? "text-white/80" : "text-[#3D4152]"}`}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Add-on Services */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Optional Extras" title="Add-on Services" subtitle="Enhance your meeting or event experience with optional add-on services." />
          <div className="grid md:grid-cols-2 gap-6">
            {addOnServices.map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                <Calendar className="w-5 h-5 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#3D4152] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Book Now</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Reserve Your Meeting Space
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              UPTECH members can book meeting spaces through the member portal or by contacting our team directly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Become a Member</Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>Contact Us</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
