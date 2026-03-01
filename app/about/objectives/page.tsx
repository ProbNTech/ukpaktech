"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { GlobalCTA } from "@/components/GlobalCTA";
import { RainbowButton } from "@/components/ui/rainbow-borders-button";
import { Button } from "@/components/Button";
import { CheckCircle2, Globe2, Handshake, TrendingUp, Zap } from "lucide-react";

const brandColors = ["#2563EB", "#C41E3A", "#22C55E"];

const broaderImpact = [
  { icon: Globe2, title: "Global Market Access", desc: "Expand global market access and exports for UK and Pakistani tech companies.", color: "#2563EB" },
  { icon: Handshake, title: "Strategic Partnerships", desc: "Build strategic partnerships across industry, government, and academia.", color: "#C41E3A" },
  { icon: TrendingUp, title: "Investment & Innovation", desc: "Unlock investment and innovation opportunities for growing businesses.", color: "#22C55E" },
  { icon: Zap, title: "Technology Transfer", desc: "Promote technology transfer between the United Kingdom and Pakistan.", color: "#2563EB" },
];

const additionalObjectives = [
  "Host annual International and local conferences to advance UPTECH Mission",
  "Provide networking opportunities for Tech professionals and businesses",
  "Participate in humanitarian projects, Promote UK-Pakistan relationship",
  "Recognize outstanding engineers, students and entrepreneurs",
  "Provide career guidance and mentoring to UK members and students in Pakistan",
  "Provide scholarships to outstanding students in Pakistan",
];

export default function ObjectivesPage() {
  return (
    <div>
      <PageHero
        label="Objectives & Values"
        title="Our Objectives"
        subtitle="We provide a platform to all Pakistani IT professionals residing in the United Kingdom working across various levels and industry sectors."
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=2400&q=85&auto=format&fit=crop"
      >
        <div className="flex flex-wrap items-center gap-4">
          <RainbowButton href="/membership/apply" showArrow>Join UPTECH</RainbowButton>
          <Button href="/about/founder" variant="glass" showArrow>Meet Our Founder</Button>
        </div>
      </PageHero>

      {/* Values & Activities */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Our foundation" title="Objectives &amp; Values" color="blue" subtitle="We provide a platform to all Pakistani IT professionals residing in the United Kingdom working across various levels and industry sectors." />
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Values */}
            <div className="bg-white border border-[#D8D5CF] rounded-lg p-8 border-t-4 border-t-[#2563EB]">
              <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-5">Our Values</h3>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">UPTECH members share and practice a set of unique values:</p>
              <ul className="space-y-3">
                {[
                  "Pursuit of excellence in the IT profession",
                  "Commitment to traditional Pakistan values — ownership of responsibility and duty to the profession, fellow professionals, family and humanity",
                  "Commitment to serve the community",
                  "Mutual respect and responsibility",
                  "Practice of highest ethics",
                  "Honesty and Integrity",
                ].map((val) => (
                  <li key={val} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#3D4152] text-base leading-relaxed">{val}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities */}
            <div className="bg-white border border-[#D8D5CF] rounded-lg p-8 border-t-4 border-t-[#22C55E]">
              <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-5">Key Activities</h3>
              <ul className="space-y-3">
                {[
                  "Career Counseling & Leadership Development",
                  "Cultural Events & Charity Programs",
                  "Monthly Networking Mixer & Lecture Series",
                  "Quarterly Cultural Events",
                  "Annual Gala Dinner & Award Program",
                  "Interacting with Policy Makers on issues pertaining to Pakistan IT Professionals",
                  "Professional Development & Skill Growth",
                  "Collective Startups & AI Platform Development",
                  "Local Community IT Support & Co-working Spaces",
                  "Mentorship Programs & Knowledge Sharing",
                  "Conferences & Seminars on latest tech trends",
                ].map((act) => (
                  <li key={act} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#3D4152] text-base leading-relaxed">{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Broader Impact */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Broader Impact" title="Empowering Technology Organisations" color="red" subtitle="We empower technology organisations from the UK and Pakistan to achieve global impact." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {broaderImpact.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white border border-[#D8D5CF] rounded-lg p-6 hover:shadow-md transition-all duration-300" style={{ borderTop: `3px solid ${item.color}` }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${item.color}10`, border: `1px solid ${item.color}25` }}>
                    <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{item.title}</h3>
                  <p className="text-[#3D4152] text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {additionalObjectives.map((item, i) => (
              <div key={item} className="flex items-start gap-3 bg-white border border-[#D8D5CF] rounded-lg p-5 hover:shadow-sm transition-shadow duration-300">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: brandColors[i % 3] }} strokeWidth={2} />
                <span className="text-[#3D4152] text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <GlobalCTA
        label="Be Part of the Impact"
        title="Join the Movement"
        subtitle="Become part of UPTECH and contribute to the objectives that are shaping the future of UK-Pakistan technology collaboration."
        primaryButtonText="Apply for Membership"
        primaryButtonLink="/membership/apply"
        secondaryButtonText="Meet Our Founder"
        secondaryButtonLink="/about/founder"
      />
    </div>
  );
}
