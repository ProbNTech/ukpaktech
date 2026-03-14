import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

import { Cpu, TrendingUp, GraduationCap, Users, Scale, Lightbulb } from "lucide-react";

export default function MembershipSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.2], [0.3, 0.6]);

  return (
    <>
    <div ref={containerRef} className="relative w-full">
      {/* ───────────── VIDEO SECTION ───────────── */}
      <section className="relative w-full h-screen overflow-hidden z-10">
        {/* Background Video */}
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <source src="/image/about/bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center items-start h-full px-8 sm:px-12 lg:px-16 xl:px-20">
          <motion.div
            className="grid lg:grid-cols-2 gap-10 items-start w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          >
            {/* Left Side */}
            <div className="flex flex-col justify-center h-full">
              <div className="relative z-10 flex flex-col justify-center h-full max-w-5xl mx-auto px-6 sm:px-12 lg:px-16 py-8">
                <span className="text-sm sm:text-xl font-bold text-white/70 mb-3">
                  Membership
                </span>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white bg-black/30 inline-block px-4 py-2 rounded-md">
                  Who can join?
                </h2>
                <p className="mt-5 text-white text-base sm:text-lg lg:text-xl bg-black/20 px-4 py-3 rounded-md max-w-3xl leading-relaxed">
                  We offer different memberships based on whether you are a technology company, investor, institution, or individual professional.
                </p>
              </div>
            </div>

            {/* Right Side Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: "IT Companies",
                  desc: "Software houses, SaaS providers, and tech service firms from both nations.",
                  image: "/image/Who%20can%20join/IT_Companies.webp",
                  icon: Cpu,
                  color: "#2563EB",
                },
                {
                  title: "Investors & VCs",
                  desc: "Venture capital funds, angel investors, and private equity firms seeking cross-border deals.",
                  image: "/image/Who%20can%20join/Investors_VCs.webp",
                  icon: TrendingUp,
                  color: "#22C55E",
                },
                {
                  title: "Academic & Research",
                  desc: "Universities, research centres, and academic institutions driving tech innovation.",
                  image: "/image/Who%20can%20join/Academic_Research.webp",
                  icon: GraduationCap,
                  color: "#EAB308",
                },
                {
                  title: "Individual Professionals",
                  desc: "Engineers, founders, consultants, and tech leaders building their careers.",
                  image: "/image/Who%20can%20join/Individual_Professionals.webp",
                  icon: Users,
                  color: "#C41E3A",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href="/membership"
                    className="group block rounded-xl overflow-hidden bg-transparent hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative h-[180px] overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-8 h-8" style={{ color: item.color }} strokeWidth={1.8} />
                        <h3 className="font-heading font-semibold text-lg sm:text-xl lg:text-2xl bg-gradient-to-r from-[#fff] to-[#fff] bg-clip-text text-transparent">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[#fff] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────────── OUR FOCUS SECTION ───────────── */}
      <section className="relative z-20 bg-[#1a2b5e] w-full">
        <div className="mx-auto">
          <AnimatedSection animation="blur-in">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Left Side: SectionHeader */}
              <div className="lg:w-1/3 flex flex-col justify-start bg-red-600 p-8 rounded-md">
                <div className="flex flex-col justify-center h-full max-w-5xl mx-auto">
                  <span className="text-sm sm:text-xl font-bold text-white/70 mb-3 px-6 py-1">
                    Our Focus
                  </span>
                  <h2 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-white inline-block px-4 py-1 rounded-md">
                    What Drives Us
                  </h2>
                  <p className="mt-5 text-white text-base sm:text-lg lg:text-xl px-6 py-2 rounded-md max-w-3xl leading-relaxed">
                    We work across three strategic pillars to build a stronger, more connected UK-Pakistan technology ecosystem.
                  </p>
                </div>
              </div>

              {/* Right Side: Cards */}
              <div className="lg:w-2/3 flex flex-row gap-6">
                {[
                  {
                    icon: Scale,
                    title: "Shaping Policy & Regulation",
                    desc: "We work at the intersection of technology and government to help develop supportive policies for bilateral tech trade, digital economy agreements, and tech-friendly regulations. Our council advocates for frameworks that enable efficient trade, protect data, and encourage investment.",
                    color: "#729fff",
                  },
                  {
                    icon: Lightbulb,
                    title: "Accelerating Innovation",
                    desc: "We champion emerging technologies including AI, cloud computing, cybersecurity, fintech, and green tech by convening research partnerships, innovation hubs, and collaborative initiatives that harness the best of UK and Pakistani tech talent.",
                    color: "#3aff82",
                  },
                  {
                    icon: TrendingUp,
                    title: "Developing Markets",
                    desc: "We identify sectors where technology can drive progress — from health and education to financial services, smart infrastructure, and digital government. We help our members understand market needs, build competitive offerings, and enter new international markets.",
                    color: "#fd284c",
                  },
                ].map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="group rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center p-6 flex-1"
                    >
                      <div
                        aria-hidden
                        className="relative mx-auto w-24 h-24 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
                      >
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: `linear-gradient(to right, ${card.color} 1px, transparent 1px), linear-gradient(to bottom, ${card.color} 1px, transparent 1px)`,
                            backgroundSize: "24px 24px",
                          }}
                        />
                        <div
                          className="absolute inset-0 m-auto flex w-12 h-12 items-center justify-center border-t border-l bg-[#1a2b5e]"
                          style={{ borderColor: `${card.color}30` }}
                        >
                          <Icon className="w-10 h-10" style={{ color: card.color }} strokeWidth={1.5} />
                        </div>
                      </div>

                      <h3 className="mt-6 font-heading font-bold text-white text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-white text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
    </div>
    </>
  );
}