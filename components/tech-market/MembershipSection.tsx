import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

import { Cpu, TrendingUp, GraduationCap, Users } from "lucide-react";

/* ── Premium custom SVG icons for "Our Focus" section ── */
const PolicyIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shield outer */}
    <path d="M24 3L6 13v12c0 13 7.8 25 18 29 10.2-4 18-16 18-29V13L24 3z"
      stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="currentColor" fillOpacity="0.05"/>
    {/* Shield inner accent */}
    <path d="M24 7L10 15v10c0 10.5 6.2 20 14 24 7.8-4 14-13.5 14-24V15L24 7z"
      stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" opacity="0.2" fill="none"/>
    {/* Scales pivot */}
    <circle cx="24" cy="16" r="2.5" fill="currentColor" fillOpacity="0.85"/>
    <circle cx="24" cy="16" r="4" stroke="currentColor" strokeWidth="0.4" opacity="0.25" fill="none"/>
    {/* Pillar */}
    <line x1="24" y1="18.5" x2="24" y2="35" stroke="currentColor" strokeWidth="1.5"/>
    {/* Beam */}
    <line x1="15" y1="22" x2="33" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Left chain */}
    <line x1="15" y1="22" x2="15" y2="28" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
    {/* Right chain */}
    <line x1="33" y1="22" x2="33" y2="28" stroke="currentColor" strokeWidth="0.7" opacity="0.5"/>
    {/* Left pan */}
    <path d="M11 28c0 2.5 1.8 4.5 4 4.5s4-2 4-4.5H11z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1"/>
    {/* Right pan */}
    <path d="M29 28c0 2.5 1.8 4.5 4 4.5s4-2 4-4.5H29z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1"/>
    {/* Pedestal base */}
    <rect x="19" y="35" width="10" height="2.5" rx="1.25" fill="currentColor" fillOpacity="0.45"/>
    {/* Corner accents */}
    <circle cx="24" cy="43" r="0.7" fill="currentColor" opacity="0.2"/>
    <circle cx="12" cy="13" r="0.6" fill="currentColor" opacity="0.15"/>
    <circle cx="36" cy="13" r="0.6" fill="currentColor" opacity="0.15"/>
  </svg>
);

const InnovationIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Nucleus core */}
    <circle cx="24" cy="24" r="4.5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="24" cy="24" r="2" fill="currentColor"/>
    {/* Inner glow ring */}
    <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="0.4" opacity="0.2" strokeDasharray="2 3"/>
    {/* Orbital ring 1 (horizontal) */}
    <ellipse cx="24" cy="24" rx="19" ry="7.5" stroke="currentColor" strokeWidth="0.9" opacity="0.35"/>
    {/* Orbital ring 2 (60deg) */}
    <ellipse cx="24" cy="24" rx="19" ry="7.5" stroke="currentColor" strokeWidth="0.9" opacity="0.35" transform="rotate(60 24 24)"/>
    {/* Orbital ring 3 (-60deg) */}
    <ellipse cx="24" cy="24" rx="19" ry="7.5" stroke="currentColor" strokeWidth="0.9" opacity="0.35" transform="rotate(-60 24 24)"/>
    {/* Electron nodes on orbits */}
    <circle cx="43" cy="24" r="2.5" fill="currentColor" fillOpacity="0.85"/>
    <circle cx="5" cy="24" r="2" fill="currentColor" fillOpacity="0.5"/>
    <circle cx="14.5" cy="7.5" r="2.5" fill="currentColor" fillOpacity="0.85"/>
    <circle cx="33.5" cy="40.5" r="2" fill="currentColor" fillOpacity="0.5"/>
    <circle cx="33.5" cy="7.5" r="2" fill="currentColor" fillOpacity="0.5"/>
    <circle cx="14.5" cy="40.5" r="2.5" fill="currentColor" fillOpacity="0.85"/>
    {/* Energy particles */}
    <circle cx="24" cy="4" r="0.8" fill="currentColor" opacity="0.25"/>
    <circle cx="24" cy="44" r="0.8" fill="currentColor" opacity="0.25"/>
    <circle cx="4" cy="14" r="0.6" fill="currentColor" opacity="0.15"/>
    <circle cx="44" cy="34" r="0.6" fill="currentColor" opacity="0.15"/>
    <circle cx="44" cy="14" r="0.6" fill="currentColor" opacity="0.15"/>
    <circle cx="4" cy="34" r="0.6" fill="currentColor" opacity="0.15"/>
  </svg>
);

const MarketsIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Globe circle */}
    <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="1.2" opacity="0.25"/>
    <circle cx="24" cy="24" r="19" fill="currentColor" fillOpacity="0.03"/>
    {/* Latitude lines */}
    <ellipse cx="24" cy="24" rx="19" ry="6.5" stroke="currentColor" strokeWidth="0.4" opacity="0.15"/>
    <ellipse cx="24" cy="24" rx="19" ry="13" stroke="currentColor" strokeWidth="0.4" opacity="0.15"/>
    {/* Longitude lines */}
    <ellipse cx="24" cy="24" rx="6.5" ry="19" stroke="currentColor" strokeWidth="0.4" opacity="0.15"/>
    <ellipse cx="24" cy="24" rx="13" ry="19" stroke="currentColor" strokeWidth="0.4" opacity="0.15"/>
    {/* Equator & meridian */}
    <line x1="5" y1="24" x2="43" y2="24" stroke="currentColor" strokeWidth="0.3" opacity="0.1"/>
    <line x1="24" y1="5" x2="24" y2="43" stroke="currentColor" strokeWidth="0.3" opacity="0.1"/>
    {/* Trend area fill */}
    <path d="M9 36L16 30L22 32L29 21L36 14L40 10V36H9z" fill="currentColor" fillOpacity="0.1"/>
    {/* Rising trend line */}
    <path d="M9 36L16 30L22 32L29 21L36 14L40 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Data nodes */}
    <circle cx="9" cy="36" r="2" fill="currentColor" fillOpacity="0.6" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="16" cy="30" r="2.2" fill="currentColor" fillOpacity="0.7" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="22" cy="32" r="2.2" fill="currentColor" fillOpacity="0.7" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="29" cy="21" r="2.5" fill="currentColor" fillOpacity="0.8" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="36" cy="14" r="2.5" fill="currentColor" fillOpacity="0.85" stroke="currentColor" strokeWidth="0.5"/>
    <circle cx="40" cy="10" r="3" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>
    {/* Arrow tip */}
    <path d="M38 8l2 2-2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
    {/* Pulse rings on peak node */}
    <circle cx="40" cy="10" r="5" stroke="currentColor" strokeWidth="0.4" opacity="0.2"/>
    <circle cx="40" cy="10" r="7.5" stroke="currentColor" strokeWidth="0.3" opacity="0.1"/>
  </svg>
);

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
              <div className="relative z-10 flex flex-col justify-center h-full max-w-5xl mx-auto py-8">
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
              <div className="lg:w-2/3 flex flex-col sm:flex-row gap-6">
                {[
                  {
                    image: "/image/icons/policy.jpg",
                    title: "Shaping Policy & Regulation",
                    desc: "We work at the intersection of technology and government to help develop supportive policies for bilateral tech trade, digital economy agreements, and tech-friendly regulations. Our council advocates for frameworks that enable efficient trade, protect data, and encourage investment.",
                  },
                  {
                    image: "/image/icons/innovation.jpg",
                    title: "Accelerating Innovation",
                    desc: "We champion emerging technologies including AI, cloud computing, cybersecurity, fintech, and green tech by convening research partnerships, innovation hubs, and collaborative initiatives that harness the best of UK and Pakistani tech talent.",
                  },
                  {
                    image: "/image/icons/markets.jpg",
                    title: "Developing Markets",
                    desc: "We identify sectors where technology can drive progress — from health and education to financial services, smart infrastructure, and digital government. We help our members understand market needs, build competitive offerings, and enter new international markets.",
                  },
                ].map((card) => (
                    <div
                      key={card.title}
                      className="group rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center p-6 flex-1"
                    >
                      <div
                        aria-hidden
                        className="relative mx-auto w-24 h-24 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg"
                      >
                        <Image src={card.image} alt={card.title} fill className="object-cover" sizes="96px" />
                      </div>

                      <h3 className="mt-6 font-heading font-bold text-white text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-white text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
    </div>
    </>
  );
}
