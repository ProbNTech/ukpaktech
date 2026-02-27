"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import Image from "next/image";
import { Shield, Globe2, Target, Lightbulb, Heart, CheckCircle2, Award, Network, Rocket, BookOpen, Users, Briefcase, GraduationCap, Handshake, TrendingUp, Zap, Cpu, Leaf, Radio, Microscope, Wheat } from "lucide-react";

const brandColors = ["#2563EB", "#C41E3A", "#22C55E"];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        label="About Us"
        title="About UPTECH"
        subtitle="Empowering Pakistan's Tech Leaders; innovation, entrepreneurship, investment, advocacy and visionary growth."
        image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=2400&q=85&auto=format&fit=crop"
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/membership/apply" variant="glass" showArrow>Apply for Membership</Button>
          <Button href="/ecosystem/uk-pakistan-technology-partnership" variant="glass" showArrow>UK–Pakistan Partnership</Button>
        </div>
      </PageHero>

      {/* About Us */}
      <Section variant="light">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <AnimatedSection>
            <SectionHeader
              label="Who we are"
              title="About the Council"
              color="blue"
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
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border-2 border-[#2563EB]/15">
              <Image
                src="/image/about/about-section-home.jpg"
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
          <SectionHeader label="Our purpose" title="Vision" color="red" />
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-white border border-[#D8D5CF] rounded-lg p-8 border-l-4 border-l-[#C41E3A]">
                <Lightbulb className="w-8 h-8 text-[#C41E3A] mb-5" strokeWidth={1.5} />
                <h3 className="font-heading font-bold text-xl text-[#1C1F2E] mb-4">Our Vision</h3>
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
          <SectionHeader label="Our mission" title="Mission" color="green" subtitle="Our mission is to transform Pakistan into a thriving tech hub. By forging connections with global experts and harnessing diverse resources, we're setting the stage for a tech-driven future." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Target, title: "Apex Organization", desc: "To be the Apex organization for IT professionals in business, government, and people.", color: "#2563EB" },
              { icon: Award, title: "Represent Professionals", desc: "To represent IT professionals in all aspects of their profession and increase the value of the profession.", color: "#C41E3A" },
              { icon: Users, title: "Inclusive Community", desc: "To be a place for anyone in the profession, representing all ages, career stages, demographics, and needs.", color: "#22C55E" },
              { icon: Globe2, title: "Global Collaboration", desc: "To collaborate with Networks and organizations representing professionals in countries around the world to unify and advance the profession globally.", color: "#2563EB" },
              { icon: Radio, title: "Timely Information", desc: "To provide relevant, consistent, and timely information to stakeholders.", color: "#C41E3A" },
              { icon: Rocket, title: "Fuel Growth", desc: "Fuel business creation and expansion — address funding gaps for early-stage companies and increase opportunities for high-growth enterprises.", color: "#22C55E" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white border border-[#D8D5CF] rounded-lg p-6 hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${item.color}10`, border: `1px solid ${item.color}25` }}>
                    <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{item.title}</h3>
                  <p className="text-[#3D4152] text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: TrendingUp, title: "Enhance Tech Adoption", desc: "Encourage the uptake of technology across Pakistani businesses to elevate productivity and competitiveness.", color: "#2563EB" },
              { icon: Zap, title: "Incentivize Investment", desc: "Promote initiatives like R&D incentives, refining investor definitions, and broadening EIS/SEIS scope to stimulate business growth.", color: "#C41E3A" },
              { icon: Handshake, title: "Connectivity", desc: "Bridging the gaps and providing lightning-fast connectivity across the nation.", color: "#22C55E" },
              { icon: Briefcase, title: "Technical Support", desc: "To become the industry benchmark by providing one-stop solutions for all technical support and related services.", color: "#2563EB" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4 bg-white border border-[#D8D5CF] rounded-lg p-5 hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${item.color}10`, border: `1px solid ${item.color}25` }}>
                    <Icon className="w-4 h-4" style={{ color: item.color }} strokeWidth={1.5} />
                  </div>
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

      {/* Broader Objectives */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader label="Broader Impact" title="Empowering Technology Organisations" color="red" subtitle="We empower technology organisations from the UK and Pakistan to achieve global impact." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe2, title: "Global Market Access", desc: "Expand global market access and exports for UK and Pakistani tech companies.", color: "#2563EB" },
              { icon: Handshake, title: "Strategic Partnerships", desc: "Build strategic partnerships across industry, government, and academia.", color: "#C41E3A" },
              { icon: TrendingUp, title: "Investment & Innovation", desc: "Unlock investment and innovation opportunities for growing businesses.", color: "#22C55E" },
              { icon: Zap, title: "Technology Transfer", desc: "Promote technology transfer between the United Kingdom and Pakistan.", color: "#2563EB" },
            ].map((item) => {
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
            {[
              "Host annual International and local conferences to advance UPTECH Mission",
              "Provide networking opportunities for Tech professionals and businesses",
              "Participate in humanitarian projects, Promote UK-Pakistan relationship",
              "Recognize outstanding engineers, students and entrepreneurs",
              "Provide career guidance and mentoring to UK members and students in Pakistan",
              "Provide scholarships to outstanding students in Pakistan",
            ].map((item, i) => (
              <div key={item} className="flex items-start gap-3 bg-white border border-[#D8D5CF] rounded-lg p-5 hover:shadow-sm transition-shadow duration-300">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: brandColors[i % 3] }} strokeWidth={2} />
                <span className="text-[#3D4152] text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Founder & CEO Message */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader label="From the Founder" title="A Message from Our CEO" color="green" />
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
            <div className="bg-white border border-[#D8D5CF] rounded-lg p-8 border-t-4 border-t-[#C41E3A]">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-5 ring-2 ring-[#C41E3A]/20 ring-offset-2">
                <Image
                  src="/image/ceo/khalil-choudhary-portrait.jpg"
                  alt="Khalil Choudhary — Founder & CEO, UPTECH"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1C1F2E] mb-1">Khalil Choudhary</h3>
              <p className="text-sm text-[#C41E3A] font-semibold mb-3">Founder & CEO, UPTECH</p>
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
      <section className="relative z-[2] overflow-hidden bg-[#0B0F1A] text-white py-14 md:py-20">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=2400&q=85&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(135deg, rgba(10,14,30,0.85) 0%, rgba(10,14,30,0.60) 50%, rgba(10,14,30,0.80) 100%)" }} />
        {/* Animated gradient orbs */}
        <div className="absolute top-[-30%] left-[-10%] w-[500px] h-[500px] z-[2] pointer-events-none opacity-25 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, #2563EB 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-20%] right-[-5%] w-[400px] h-[400px] z-[2] pointer-events-none opacity-20 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, #22C55E 0%, transparent 70%)" }} />
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] z-[2] pointer-events-none opacity-15 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, #C41E3A 0%, transparent 70%)" }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 z-[3] opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-[#60a5fa] uppercase tracking-wider mb-4">Join Us</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Ready to Be Part of the Movement?
              </h2>
              <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                Join UPTECH and connect with technology leaders, entrepreneurs, and innovators shaping the UK–Pakistan tech corridor.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/membership/apply" variant="glass" size="lg" showArrow>Apply for Membership</Button>
                <Button href="/contact" variant="glass" size="lg" showArrow>Contact Us</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] z-30 bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#E11D48]" />
      </section>
    </div>
  );
}
