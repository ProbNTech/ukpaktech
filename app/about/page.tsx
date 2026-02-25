"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import Image from "next/image";
import { Shield, Globe2, Target, Lightbulb, Heart, CheckCircle2, Award, Network, Rocket, BookOpen, Users, Briefcase, GraduationCap, Handshake, TrendingUp, Zap, Cpu, Leaf, Radio, Microscope, Wheat } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="About UPTECH"
        subtitle="Empowering Pakistan's Tech Leaders; innovation, entrepreneurship, investment, advocacy and visionary growth."
        image="/image/london-images/about-corporate-team.jpg"
      >
        <div className="flex flex-wrap gap-4 mt-2">
          <Button href="/membership" variant="glass" showArrow>Become a Member</Button>
          <Button href="/ecosystem/uk-pakistan-technology-partnership" variant="ghost" showArrow>UK–Pakistan Partnership</Button>
        </div>
      </PageHero>

      {/* About Us */}
      <Section variant="light">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <SectionHeader
              label="Who we are"
              title="About the Council"
            />
            <p className="text-[#3D4152] leading-relaxed mb-5">
              The UK Pakistan Technology Council brings together businesses, innovators, government partners, investors, and technology leaders from the UK and Pakistan to support cross-border innovation, trade, and economic growth. Our mission is to shape strategic technology cooperation that powers sustainable development, accelerates digital transformation, and fosters shared prosperity for both nations.
            </p>
            <p className="text-[#3D4152] leading-relaxed mb-5">
              Our primary objective is to champion a positive and soft image of Pakistan while nurturing innovation, collaboration, and continuous education within the dynamic landscape of technology.
            </p>
            <p className="text-[#3D4152] leading-relaxed mb-5">
              Our dynamic platform empowers individuals to unlock their full potential, advance their careers, and make a lasting impact on the Council. We champion the highest standards of professionalism, integrity, and ethics, setting a benchmark for IT societies worldwide.
            </p>
            <p className="text-[#3D4152] leading-relaxed mb-5">
              By uniting Pakistani IT professionals residing and working in the United Kingdom, we establish a dynamic platform for networking, knowledge-sharing, and collective advancement.
            </p>
            <p className="text-[#3D4152] leading-relaxed">
              Through our diverse community, we aim to catalyze positive transformations in IT, shaping its future, and delivering significant contributions to both the country we reside in and the country we proudly belong to.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#D8D5CF]">
              <Image
                src="/image/about%20page/About_Council.webp"
                alt="About the Council"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Vision */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Our purpose" title="Vision" />
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white border border-[#D8D5CF] rounded p-8">
                <Lightbulb className="w-8 h-8 text-[#2563EB] mb-5" strokeWidth={1.5} />
                <h3 className="font-heading font-bold text-xl text-[#1C1F2E] mb-4">Our Vision</h3>
                <div className="h-px bg-[#1C1F2E]/15 mb-4" />
                <p className="text-[#3D4152] leading-relaxed mb-4">
                  A connected innovation ecosystem where UK and Pakistani technology sectors collaborate to create world-leading digital solutions that improve lives, strengthen economies, and solve global challenges.
                </p>
                <p className="text-[#3D4152] leading-relaxed">
                  We aim to create a national network of Tech businessmen, Engineers and technical professionals of Pakistani Diaspora living in the UK, to provide a platform for networking, career advancement, technology exchange and to develop the next generation of scientists, engineers and technical professionals in Pakistan.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-[#3D4152] leading-relaxed">
                We are an inclusive support group to create an innovation bridge through links with Tech leaders, digital entrepreneurs, influential corporate executives, savvy investors, Angel/Seed Investors, accelerators, emerging start-ups in AI/Tech, professionals, advisors, policy makers &amp; public bodies with aim to encourage investment collaboration on tech enabled social projects between UK/Europe and Pakistan.
              </p>
              <p className="text-[#3D4152] leading-relaxed">
                The organization also plays the important role of a trusted facilitator in the growth of the strategic economic relationship, trade and investment flows between Pakistan and the United Kingdom. UPTECH acts as the intermediary for British Pakistani Nationals to understand how to approach the business community and set up business in Pakistan — conversely for Pakistani Tech businesses that want to have a footprint in UK.
              </p>
              <p className="text-[#3D4152] leading-relaxed">
                It strives to do so through its vast network of businessmen, professionals, in both regions but also through strong relationships with governments and industry bodies of both countries.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Mission */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Our mission" title="Mission" subtitle="Our mission is to transform Pakistan into a thriving tech hub. By forging connections with global experts and harnessing diverse resources, we're setting the stage for a tech-driven future." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Target, title: "Apex Organization", desc: "To be the Apex organization for IT professionals in business, government, and people." },
              { icon: Award, title: "Represent Professionals", desc: "To represent IT professionals in all aspects of their profession and increase the value of the profession." },
              { icon: Users, title: "Inclusive Community", desc: "To be a place for anyone in the profession, representing all ages, career stages, demographics, and needs." },
              { icon: Globe2, title: "Global Collaboration", desc: "To collaborate with Networks and organizations representing professionals in countries around the world to unify and advance the profession globally." },
              { icon: Radio, title: "Timely Information", desc: "To provide relevant, consistent, and timely information to stakeholders." },
              { icon: Rocket, title: "Fuel Growth", desc: "Fuel business creation and expansion — address funding gaps for early-stage companies and increase opportunities for high-growth enterprises." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white border border-[#D8D5CF] rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#2563EB] mb-3" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{item.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-[#3D4152] text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: TrendingUp, title: "Enhance Tech Adoption", desc: "Encourage the uptake of technology across Pakistani businesses to elevate productivity and competitiveness." },
              { icon: Zap, title: "Incentivize Investment", desc: "Promote initiatives like R&D incentives, refining investor definitions, and broadening EIS/SEIS scope to stimulate business growth." },
              { icon: Handshake, title: "Connectivity", desc: "Bridging the gaps and providing lightning-fast connectivity across the nation." },
              { icon: Briefcase, title: "Technical Support", desc: "To become the industry benchmark by providing one-stop solutions for all technical support and related services." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4 bg-white border border-[#D8D5CF] rounded p-5 hover:border-[#2563EB]/40 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#22C55E] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-semibold text-[#1C1F2E] text-sm mb-1">{item.title}</h4>
                    <p className="text-[#3D4152] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Objectives & Values */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="Our foundation" title="Objectives &amp; Values" subtitle="We provide a platform to all Pakistani IT professionals residing in the United Kingdom working across various levels and industry sectors." />
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Values */}
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-5">Our Values</h3>
              <div className="h-px bg-[#D8D5CF] mb-5" />
              <p className="text-[#3D4152] text-sm leading-relaxed mb-5">UPTECH members share and practice a set of unique values:</p>
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
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#3D4152] text-sm leading-relaxed">{val}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities */}
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-5">Key Activities</h3>
              <div className="h-px bg-[#D8D5CF] mb-5" />
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
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#3D4152] text-sm leading-relaxed">{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Broader Objectives */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Broader Impact" title="Empowering Technology Organisations" subtitle="We empower technology organisations from the UK and Pakistan to achieve global impact." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe2, title: "Global Market Access", desc: "Expand global market access and exports for UK and Pakistani tech companies." },
              { icon: Handshake, title: "Strategic Partnerships", desc: "Build strategic partnerships across industry, government, and academia." },
              { icon: TrendingUp, title: "Investment & Innovation", desc: "Unlock investment and innovation opportunities for growing businesses." },
              { icon: Zap, title: "Technology Transfer", desc: "Promote technology transfer between the United Kingdom and Pakistan." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border-t-2 border-[#2563EB] pt-5">
                  <Icon className="w-6 h-6 text-[#2563EB] mb-3" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{item.title}</h3>
                  <p className="text-[#3D4152] text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              "Host annual International and local conferences to advance UPTECH Mission",
              "Provide networking opportunities for Tech professionals and businesses",
              "Participate in humanitarian projects, Promote UK-Pakistan relationship",
              "Recognize outstanding engineers, students and entrepreneurs",
              "Provide career guidance and mentoring to UK members and students in Pakistan",
              "Provide scholarships to outstanding students in Pakistan",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white border border-[#D8D5CF] rounded p-5">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span className="text-[#3D4152] text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Founder & CEO Message */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="From the Founder" title="A Message from Our CEO" />
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <div className="w-20 h-20 bg-[#1C1F2E] rounded-full flex items-center justify-center mb-5">
                <span className="text-white text-2xl font-heading font-bold">KA</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-1">Khalil Ahmed</h3>
              <p className="text-sm text-[#2563EB] font-semibold mb-3">Founder & CEO, UPTECH</p>
              <div className="h-px bg-[#D8D5CF] mb-3" />
              <p className="text-xs text-[#7A7E8F] leading-relaxed">
                Visionary leader dedicated to strengthening the UK–Pakistan technology corridor through innovation, collaboration, and sustainable partnerships.
              </p>
            </div>
            <div>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                When we founded the UK Pakistan Technology Council, our vision was simple yet ambitious: to create a bridge between two nations rich in talent, innovation, and entrepreneurial spirit. Pakistan&apos;s technology sector is one of the fastest-growing in the world, and the United Kingdom remains a global hub for innovation and enterprise. Together, these two nations have extraordinary potential to shape the future of technology.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                UPTECH was built on the belief that collaboration, not competition, drives progress. We bring together technology professionals, entrepreneurs, investors, government leaders, and academics from both nations to forge partnerships that create lasting impact — not just for businesses, but for communities and future generations.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed mb-5">
                Our programmes span artificial intelligence, digital transformation, startup incubation, skill development, and bilateral trade facilitation. Through our work, we are not only building businesses — we are building a movement. A movement that champions Pakistan&apos;s soft image globally, nurtures the next generation of technology leaders, and creates pathways for prosperity in both nations.
              </p>
              <p className="text-[#3D4152] text-base leading-relaxed">
                I invite you to join us on this journey. Whether you are a seasoned technology professional, an emerging entrepreneur, an investor seeking opportunities, or a policy maker shaping the future — there is a place for you at UPTECH. Together, we can build something extraordinary.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">Join Us</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Ready to Be Part of the Movement?
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Join UPTECH and connect with technology leaders, entrepreneurs, and innovators shaping the UK–Pakistan tech corridor.
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
