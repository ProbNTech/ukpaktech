"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const navGroups = [
  {
    label: "About",
    items: [
      { label: "About UPTECH", href: "/about", desc: "Our mission, vision and story" },
      { label: "Leadership and Governance", href: "/leadership", desc: "Board, advisory and executive team" },
      { label: "Code of Conduct", href: "/code-of-conduct", desc: "Ethics and accountability framework" },
    ],
  },
  {
    label: "Programs",
    items: [
      { label: "AI and Tech Programs", href: "/programs/ai-tech-programs", desc: "Cutting-edge technology initiatives" },
      { label: "Skill Development Center", href: "/programs/skill-development-center", desc: "Workforce training and upskilling" },
      { label: "Incubation and Collective Startups", href: "/programs/incubation-collective-startups", desc: "Startup support and acceleration" },
    ],
  },
  {
    label: "Initiatives",
    items: [
      { label: "People AI Platform", href: "/initiatives/people-ai", desc: "Human-centric AI support systems" },
      { label: "TechMart Global", href: "/initiatives/techmart-global", desc: "Cross-border tech marketplace" },
      { label: "Tech Excellence Awards", href: "/initiatives/tech-excellence-awards", desc: "Recognising outstanding contributions" },
    ],
  },
  {
    label: "Ecosystem",
    items: [
      { label: "UK–Pakistan Technology Partnership", href: "/ecosystem/uk-pakistan-technology-partnership", desc: "Bilateral tech corridor" },
      { label: "Funding and Grants", href: "/ecosystem/funding-and-grants", desc: "Financial support programmes" },
      { label: "Trade Delegations and Exhibitions", href: "/ecosystem/trade-delegations-and-exhibitions", desc: "Business missions and expos" },
    ],
  },
  {
    label: "Updates",
    items: [
      { label: "Events and News", href: "/events", desc: "Latest engagements and highlights" },
      { label: "Careers", href: "/careers", desc: "Join the UPTECH team" },
    ],
  },
];

const HOVER_OPEN_DELAY = 60;
const HOVER_CLOSE_DELAY = 220;

export function Header() {
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const clearTimers = useCallback(() => {
    if (openTimerRef.current) { clearTimeout(openTimerRef.current); openTimerRef.current = null; }
    if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; }
  }, []);

  const handleNavEnter = useCallback(() => {
    clearTimers();
    openTimerRef.current = setTimeout(() => setIsMegaOpen(true), HOVER_OPEN_DELAY);
  }, [clearTimers]);

  const handleNavLeave = useCallback(() => {
    clearTimers();
    closeTimerRef.current = setTimeout(() => setIsMegaOpen(false), HOVER_CLOSE_DELAY);
  }, [clearTimers]);

  return (
    <>
      {/* Accessibility skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#0A0A0A] focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Spacer for fixed header */}
      <div className="h-[64px]" />

      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-[#0A0A0A]"
      >
        {/* ── Masthead row ─────────────────────────────────────────── */}
        <div className="px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="flex items-center justify-between h-[64px]">

            {/* Masthead / Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 flex-shrink-0 group"
              aria-label="UPTECH — Home"
            >
              <Image
                src="/image/main-logo/mainlogo.png"
                alt="UPTECH Logo"
                width={36}
                height={36}
                className="h-[34px] w-auto object-contain"
                priority
              />
              <span className="font-heading font-bold text-[15px] uppercase tracking-[0.18em] text-[#0A0A0A] leading-none">
                UPTECH
              </span>
              {/* Thin masthead rule — decorative */}
              <span className="hidden sm:block w-px h-5 bg-[#D8D5D0] mx-1" aria-hidden />
              <span className="hidden sm:block font-sans text-[10px] uppercase tracking-[0.14em] text-[#6B6B6B] leading-tight max-w-[120px]">
                UK–Pakistan Tech Council
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-0"
              aria-label="Main navigation"
              onMouseEnter={handleNavEnter}
              onMouseLeave={handleNavLeave}
            >
              {navGroups.map((group) => (
                <button
                  key={group.label}
                  type="button"
                  aria-expanded={isMegaOpen}
                  aria-haspopup="true"
                  className={`
                    relative px-4 h-[64px] flex items-center
                    font-sans text-[11px] uppercase tracking-[0.12em] font-medium text-[#0A0A0A]
                    transition-colors duration-150
                    after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-[#0A0A0A]
                    after:transition-opacity after:duration-150
                    ${isMegaOpen ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-30"}
                  `}
                >
                  {group.label}
                </button>
              ))}
              <Link
                href="/membership"
                className="
                  relative px-4 h-[64px] flex items-center
                  font-sans text-[11px] uppercase tracking-[0.12em] font-medium text-[#0A0A0A]
                  after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-[#0A0A0A]
                  after:opacity-0 hover:after:opacity-30 after:transition-opacity after:duration-150
                "
              >
                Membership
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/membership"
                className="
                  px-5 py-2 bg-[#C41E3A] text-white
                  font-heading font-bold text-[10px] uppercase tracking-[0.14em]
                  border border-[#C41E3A]
                  hover:bg-white hover:text-[#C41E3A]
                  transition-colors duration-200
                "
              >
                Become a Member
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] text-[#0A0A0A]"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
            >
              <span
                className={`block w-6 h-[1.5px] bg-[#0A0A0A] transition-all duration-200 origin-center ${
                  isMobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-[#0A0A0A] transition-all duration-200 ${
                  isMobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-[#0A0A0A] transition-all duration-200 origin-center ${
                  isMobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* ── Full-width mega dropdown (newspaper bar) ─────────────── */}
        <AnimatePresence>
          {isMegaOpen && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block border-t border-[#D8D5D0] bg-white"
              onMouseEnter={handleNavEnter}
              onMouseLeave={handleNavLeave}
            >
              <div className="px-6 sm:px-10 lg:px-14 xl:px-16 py-8">
                {/* Column-label rule */}
                <div className="grid grid-cols-5 gap-0 mb-5">
                  {navGroups.map((group, i) => (
                    <div
                      key={group.label}
                      className={`${i > 0 ? "border-l border-[#D8D5D0] pl-8" : ""} pr-8`}
                    >
                      {/* Column heading — newspaper section label */}
                      <p className="font-heading font-bold text-[9px] uppercase tracking-[0.18em] text-[#6B6B6B] mb-3 pb-2 border-b border-[#1C1F2E]">
                        {group.label}
                      </p>
                      {/* Items */}
                      <ul className="space-y-0">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setIsMegaOpen(false)}
                              className="group/item block py-2.5 border-b border-[#E4E1DC] last:border-0"
                            >
                              <span className="block font-sans text-[12px] font-medium text-[#0A0A0A] group-hover/item:text-[#C41E3A] transition-colors duration-150 leading-snug">
                                {item.label}
                              </span>
                              <span className="block font-sans text-[10px] text-[#6B6B6B] mt-0.5 leading-relaxed">
                                {item.desc}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {/* Bottom rule with membership CTA */}
                <div className="border-t border-[#D8D5D0] pt-4 flex items-center justify-between">
                  <span className="font-sans text-[10px] uppercase tracking-[0.12em] text-[#6B6B6B]">
                    UK–Pakistan Tech Council · Est. 2024
                  </span>
                  <Link
                    href="/membership"
                    onClick={() => setIsMegaOpen(false)}
                    className="font-sans text-[10px] uppercase tracking-[0.12em] text-[#C41E3A] border-b border-[#C41E3A] hover:text-[#0A0A0A] hover:border-[#0A0A0A] transition-colors duration-150 pb-px"
                  >
                    Become a Member →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Mobile navigation panel ──────────────────────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-black/30 z-40"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Slide-in panel from left */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { x: "-100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed inset-y-0 left-0 w-[300px] bg-white z-50 overflow-y-auto border-r-2 border-[#0A0A0A] flex flex-col"
            >
              {/* Panel masthead */}
              <div className="px-6 py-5 border-b-2 border-[#0A0A0A] flex items-center justify-between flex-shrink-0">
                <Link
                  href="/"
                  className="flex items-center gap-2.5"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Image
                    src="/image/main-logo/mainlogo.png"
                    alt="UPTECH Logo"
                    width={30}
                    height={30}
                    className="h-[28px] w-auto object-contain"
                  />
                  <span className="font-heading font-bold text-[13px] uppercase tracking-[0.18em] text-[#0A0A0A]">
                    UPTECH
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex flex-col justify-center items-center w-7 h-7"
                >
                  <span className="block w-5 h-[1.5px] bg-[#0A0A0A] rotate-45 translate-y-[0.75px]" />
                  <span className="block w-5 h-[1.5px] bg-[#0A0A0A] -rotate-45 -translate-y-[0.75px]" />
                </button>
              </div>

              {/* Navigation sections */}
              <nav className="flex-1 overflow-y-auto" aria-label="Mobile navigation">
                {navGroups.map((group) => (
                  <div key={group.label} className="border-b border-[#D8D5D0]">
                    <button
                      className="w-full px-6 py-4 flex items-center justify-between text-left"
                      onClick={() => setMobileExpanded(mobileExpanded === group.label ? null : group.label)}
                      aria-expanded={mobileExpanded === group.label}
                    >
                      <span className="font-heading font-bold text-[10px] uppercase tracking-[0.16em] text-[#0A0A0A]">
                        {group.label}
                      </span>
                      <span
                        className={`block w-3 h-3 border-r border-b border-[#0A0A0A] transition-transform duration-200 ${
                          mobileExpanded === group.label ? "-rotate-135 translate-y-1" : "rotate-45"
                        }`}
                        aria-hidden
                      />
                    </button>

                    <AnimatePresence>
                      {mobileExpanded === group.label && (
                        <motion.div
                          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                          transition={{ duration: 0.18 }}
                          className="overflow-hidden"
                        >
                          <ul className="px-6 pb-4 space-y-0">
                            {group.items.map((item) => (
                              <li key={item.href} className="border-t border-[#E4E1DC] first:border-0">
                                <Link
                                  href={item.href}
                                  onClick={() => setIsMobileOpen(false)}
                                  className="block py-3 font-sans text-[12px] text-[#3D4152] hover:text-[#C41E3A] transition-colors duration-150"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Membership link */}
                <div className="border-b border-[#D8D5D0]">
                  <Link
                    href="/membership"
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-6 py-4 font-heading font-bold text-[10px] uppercase tracking-[0.16em] text-[#0A0A0A] hover:text-[#C41E3A] transition-colors duration-150"
                  >
                    Membership
                  </Link>
                </div>
              </nav>

              {/* CTA at bottom */}
              <div className="flex-shrink-0 p-6 border-t-2 border-[#0A0A0A]">
                <Link
                  href="/membership"
                  onClick={() => setIsMobileOpen(false)}
                  className="block text-center py-3 px-4 bg-[#C41E3A] text-white font-heading font-bold text-[10px] uppercase tracking-[0.14em] hover:bg-[#0A0A0A] transition-colors duration-200"
                >
                  Become a Member
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
