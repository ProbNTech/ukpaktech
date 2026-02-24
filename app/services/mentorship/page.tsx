"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "@/components/PageHero";
import { Lightbulb, Globe, Compass } from "lucide-react";

const advantages = [
  {
    icon: Lightbulb,
    title: "Help Build the Future",
    description:
      "Your insights and experience can be pivotal in helping founders overcome obstacles and scale their businesses effectively, having a direct impact on their success.",
  },
  {
    icon: Compass,
    title: "Enhance Your Horizons",
    description:
      "Mentoring enables you to examine existing challenges from different perspectives, honing your own strategic thinking and problem-solving skills.",
  },
  {
    icon: Globe,
    title: "Access a Global Community",
    description:
      "Join our diverse network spanning several countries and tech industries. Connect with forward-thinking individuals and organisations worldwide.",
  },
];

const mentorRoles = [
  {
    title: "Being an Advisor",
    description:
      "Work closely with startups on a weekly basis and form part of our Advisory Board for the duration of the programme. Advisor mentors meet participating teams face-to-face, play a role in selection, and choose which startups to engage with.",
    commitment: "Weekly sessions throughout the programme",
  },
  {
    title: "Being an Expert",
    description:
      "For those who don't have time to dedicate to a particular team, our secondary pool of standby experts work with one or more startups on an ad-hoc basis. They provide niche advice, troubleshoot problems, and make introductions to their personal network.",
    commitment: "As-needed basis, when it best suits",
  },
];

export default function MentorshipPage() {
  return (
    <div>
      <PageHero
        title="Mentorship"
        subtitle="Connecting those who made it with the ones on their way. Our domain-specific network of mentors guides startups with their experience and expertise."
        image="/image/london-images/big-ben-night.jpg"
      >
        <div className="flex flex-wrap gap-4 mt-2">
          <Button href="/membership" variant="glass" showArrow>Become a Mentor</Button>
          <Button href="/contact" variant="ghost">Find a Mentor</Button>
        </div>
      </PageHero>

      {/* Intro */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="The backbone of great startups"
            title="Shaping the Future by Empowering Innovators"
          />
          <p className="text-[#3D4152] leading-relaxed max-w-3xl">
            Innovators are everywhere, but they need a little push from someone who knows what it takes to make their dreams come true. That&apos;s where our mentors come in — shaping the future by empowering innovators around the world with their wisdom and experience.
          </p>
        </AnimatedSection>
      </Section>

      {/* Advantages */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Benefits" title="Advantages of Being a Mentor" />
          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white border border-[#D8D5CF] rounded p-6">
                  <Icon className="w-7 h-7 text-[#2563EB] mb-4" />
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-2">{item.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* How Mentors Work */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Roles" title="How Mentors Work with Startups" subtitle="As a mentor, you get to work closely with ambitious innovators building businesses for the first time." />
          <div className="grid md:grid-cols-2 gap-8">
            {mentorRoles.map((role, index) => (
              <div key={index} className="bg-white border border-[#D8D5CF] rounded p-8">
                <h3 className="font-heading font-bold text-xl text-[#1C1F2E] mb-3">{role.title}</h3>
                <div className="h-px bg-[#D8D5CF] mb-4" />
                <p className="text-sm text-[#3D4152] leading-relaxed mb-4">{role.description}</p>
                <p className="text-xs text-[#2563EB] font-semibold uppercase tracking-wide">{role.commitment}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="alt">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-2xl text-[#1C1F2E] mb-4">Ready to Make an Impact?</h2>
            <p className="text-[#3D4152] leading-relaxed mb-6">
              Whether you&apos;re an experienced founder or an industry specialist, this is your chance to support the next generation of entrepreneurs and learn along the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/membership" variant="primary" showArrow>Join as a Mentor</Button>
              <Button href="/contact" variant="secondary">Contact Us</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
