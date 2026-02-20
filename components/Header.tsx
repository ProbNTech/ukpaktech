"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────
   Navigation data — each group carries items with descriptions,
   plus editorial metadata used by the mega-panel sidebar.
───────────────────────────────────────────────────────────────── */
const navGroups = [
  {
    label: "About",
    tagline: "Who we are",
    editorial: {
      headline: "Built on partnership,\ndriven by purpose.",
      body: "UPTECH is the strategic bridge between UK and Pakistan's technology ecosystems — forging alliances that create lasting impact.",
      cta: { label: "Our story →", href: "/about" },
    },
    items: [
      {
        label: "About UPTECH",
        href: "/about",
        desc: "Our founding mission, vision for bilateral tech growth, and the values that guide everything we do.",
      },
      {
        label: "Leadership & Governance",
        href: "/leadership",
        desc: "Meet the board, advisory council and executive team steering UPTECH's strategic direction.",
      },
      {
        label: "Code of Conduct",
        href: "/code-of-conduct",
        desc: "The ethics, accountability standards and community guidelines every member upholds.",
      },
    ],
  },
  {
    label: "Programs",
    tagline: "What we offer",
    editorial: {
      headline: "From classroom\nto cutting edge.",
      body: "Our programmes equip individuals and organisations with the skills, networks and capital to compete on the global stage.",
      cta: { label: "Explore programmes →", href: "/programs/ai-tech-programs" },
    },
    items: [
      {
        label: "AI & Tech Programs",
        href: "/programs/ai-tech-programs",
        desc: "Structured initiatives in artificial intelligence, cloud, cybersecurity and emerging technology adoption.",
      },
      {
        label: "Skill Development Centre",
        href: "/programs/skill-development-center",
        desc: "Practical training pathways, certification tracks and mentorship for the modern tech workforce.",
      },
      {
        label: "Incubation & Collective Startups",
        href: "/programs/incubation-collective-startups",
        desc: "Early-stage support, co-working access, investor introductions and go-to-market acceleration.",
      },
    ],
  },
  {
    label: "Initiatives",
    tagline: "What we're building",
    editorial: {
      headline: "Platforms that\nchange industries.",
      body: "From AI marketplaces to cross-border recognition, our initiatives are creating new infrastructure for the digital economy.",
      cta: { label: "View initiatives →", href: "/initiatives/people-ai" },
    },
    items: [
      {
        label: "People AI Platform",
        href: "/initiatives/people-ai",
        desc: "A human-centric AI ecosystem connecting talent, tools and opportunity at national scale.",
      },
      {
        label: "TechMart Global",
        href: "/initiatives/techmart-global",
        desc: "A cross-border digital marketplace enabling UK and Pakistani tech firms to trade and collaborate.",
      },
      {
        label: "Tech Excellence Awards",
        href: "/initiatives/tech-excellence-awards",
        desc: "Annual recognition celebrating the individuals and organisations driving extraordinary innovation.",
      },
    ],
  },
  {
    label: "Ecosystem",
    tagline: "How we connect",
    editorial: {
      headline: "Two nations.\nOne digital future.",
      body: "The UK–Pakistan technology corridor is open for business — backed by government, capital and a growing community of innovators.",
      cta: { label: "Explore the corridor →", href: "/ecosystem/uk-pakistan-technology-partnership" },
    },
    items: [
      {
        label: "UK–Pakistan Tech Partnership",
        href: "/ecosystem/uk-pakistan-technology-partnership",
        desc: "The bilateral framework underpinning joint ventures, policy dialogue and shared R&D investment.",
      },
      {
        label: "Funding & Grants",
        href: "/ecosystem/funding-and-grants",
        desc: "Access grant programmes, match-funding schemes and investment readiness support for qualifying members.",
      },
      {
        label: "Trade Delegations & Exhibitions",
        href: "/ecosystem/trade-delegations-and-exhibitions",
        desc: "Curated business missions, trade expos and pavilion programmes placing members on the world stage.",
      },
    ],
  },
  {
    label: "Updates",
    tagline: "What's happening",
    editorial: {
      headline: "Stay at the\nforefront.",
      body: "From flagship conferences to open roles, everything happening across the UPTECH community — live and upcoming.",
      cta: { label: "See all updates →", href: "/events" },
    },
    items: [
      {
        label: "Events & News",
        href: "/events",
        desc: "Conferences, roundtables, webinars and press coverage from across the UPTECH community.",
      },
      {
        label: "Careers at UPTECH",
        href: "/careers",
        desc: "Open positions, internship opportunities and ways to contribute to our growing organisation.",
      },
    ],
  },
];

const HOVER_OPEN_DELAY = 80;
const HOVER_CLOSE_DELAY = 180;

/* ─────────────────────────────────────────────────────────────────
   Header component
───────────────────────────────────────────────────────────────── */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const clearTimers = useCallback(() => {
    if (openTimerRef.current) { clearTimeout(openTimerRef.current); openTimerRef.current = null; }
    if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; }
  }, []);

  /* Open the panel for this group after a short delay */
  const handleGroupEnter = useCallback((label: string) => {
    clearTimers();
    openTimerRef.current = setTimeout(() => setOpenGroup(label), HOVER_OPEN_DELAY);
  }, [clearTimers]);

  /* Keep the panel alive while the mouse is inside it */
  const handlePanelEnter = useCallback((label: string) => {
    clearTimers();
    setOpenGroup(label);
  }, [clearTimers]);

  /* Start the close timer — cancelled if mouse re-enters before it fires */
  const handleLeave = useCallback(() => {
    clearTimers();
    closeTimerRef.current = setTimeout(() => setOpenGroup(null), HOVER_CLOSE_DELAY);
  }, [clearTimers]);

  const activeGroup = navGroups.find((g) => g.label === openGroup) ?? null;

  return (
    <>
      {/* ── Skip link ──────────────────────────────────────────────── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:px-4 focus:py-2 focus:bg-[#0A0A0A] focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Spacer so fixed header doesn't overlap page content */}
      <div className="h-[68px]" />

      {/* ═══════════════════════════════════════════════════════════
          HEADER SHELL — transparent at top, white + border on scroll
      ══════════════════════════════════════════════════════════════ */}
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white" : "bg-transparent"
        }`}
        onMouseLeave={handleLeave}
      >
        {/* ── Top masthead bar ───────────────────────────────────── */}
        <div className={`transition-colors duration-300 ${isScrolled ? "border-b-[2px] border-[#0A0A0A]" : "border-b-0"}`}>
          <div className="px-6 sm:px-10 lg:px-14 xl:px-18">
            <div className="flex items-center justify-between h-[68px]">

              {/* Wordmark */}
              <Link
                href="/"
                className="flex items-center gap-3 flex-shrink-0 group"
                aria-label="UPTECH — Home"
              >
                <Image
                  src="/image/main-logo/mainlogo.png"
                  alt="UPTECH Council logo"
                  width={100}
                  height={100}
                  className="h-[48px] w-auto object-contain"
                  priority
                />
                <span className={`font-heading font-bold text-[16px] uppercase tracking-[0.2em] leading-none transition-colors duration-300 ${isScrolled ? "text-[#0A0A0A]" : "text-white"}`}>
                  UPTECH
                </span>
                <span className="hidden xl:block w-px h-5 bg-white/30 mx-2" aria-hidden="true" />
                {/* nav-label token → 10px / tracking-[0.13em] */}
                <span className={`hidden xl:block font-sans text-nav-label uppercase leading-tight max-w-[108px] transition-colors duration-300 ${isScrolled ? "text-[#6B6B6B]" : "text-white/70"}`}>
                  UK–Pakistan Tech Council
                </span>
              </Link>

              {/* ── Desktop nav ──────────────────────────────────── */}
              <nav
                className="hidden lg:flex items-center h-full"
                aria-label="Main navigation"
              >
                {/* Home — plain link, no dropdown */}
                {/* nav-item token → 15px / tracking-[0.12em] */}
                <Link
                  href="/"
                  onMouseEnter={handleLeave}
                  className={`relative h-full px-4 flex items-center font-sans text-nav-item uppercase font-semibold transition-colors duration-150 ${isScrolled ? "text-[#3D3D3D] hover:text-[#0A0A0A]" : "text-white/80 hover:text-white"}`}
                >
                  Home
                </Link>

                {navGroups.map((group) => {
                  const isActive = openGroup === group.label;
                  return (
                    <button
                      key={group.label}
                      type="button"
                      aria-expanded={isActive}
                      aria-haspopup="true"
                      onMouseEnter={() => handleGroupEnter(group.label)}
                      className={`
                        relative h-full px-4 flex items-center gap-1.5
                        font-sans text-nav-item uppercase font-semibold
                        transition-colors duration-150 cursor-default select-none
                        ${isActive
                          ? "text-[#C41E3A]"
                          : isScrolled
                            ? "text-[#3D3D3D] hover:text-[#0A0A0A]"
                            : "text-white/80 hover:text-white"}
                      `}
                    >
                      {group.label}
                      {/* Crimson underline rule when active */}
                      <span
                        className={`
                          absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C41E3A]
                          transition-opacity duration-150
                          ${isActive ? "opacity-100" : "opacity-0"}
                        `}
                      />
                    </button>
                  );
                })}
              </nav>

              {/* ── Desktop CTA ──────────────────────────────────── */}
              <div className="hidden lg:flex items-center gap-3">
                {/* Always crimson pill — high visibility on both transparent and white header */}
                <Link
                  href="/membership"
                  onMouseEnter={handleLeave}
                  className="
                    px-7 py-2.5 rounded-full
                    font-heading font-bold text-[13px] uppercase tracking-[0.12em]
                    bg-[#C41E3A] text-white border-2 border-[#C41E3A]
                    hover:bg-[#A01830] hover:border-[#A01830]
                    transition-colors duration-200 whitespace-nowrap
                  "
                >
                  Become a Member
                </Link>
              </div>

              {/* ── Mobile hamburger ─────────────────────────────── */}
              <button
                className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={isMobileOpen}
              >
                <span className={`block w-6 h-[1.5px] transition-colors duration-300 ${isScrolled ? "bg-[#0A0A0A]" : "bg-white"}`} />
                <span className={`block w-6 h-[1.5px] transition-colors duration-300 ${isScrolled ? "bg-[#0A0A0A]" : "bg-white"}`} />
                <span className={`block w-4 h-[1.5px] self-start transition-colors duration-300 ${isScrolled ? "bg-[#0A0A0A]" : "bg-white"}`} />
              </button>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            MEGA PANEL — three-column editorial dropdown
            Left:   large section title + tagline
            Centre: nav items with descriptions (ruled list)
            Right:  editorial pull-quote / CTA card
        ══════════════════════════════════════════════════════════════ */}
        <AnimatePresence>
          {activeGroup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onMouseEnter={() => handlePanelEnter(activeGroup.label)}
              className="hidden lg:block border-b-[2px] border-[#0A0A0A] bg-white"
            >
              <div className="px-6 sm:px-10 lg:px-14 xl:px-18">
                <div className="grid grid-cols-[200px_1fr_260px] gap-0 divide-x divide-[#E4E1DC]">

                  {/* ── LEFT: Section identity ──────────────────── */}
                  <div className="py-10 pr-10 flex flex-col justify-between">
                    <div>
                      {/* panel-eyebrow token → 9px / tracking-[0.2em] */}
                      <p className="font-sans text-panel-eyebrow uppercase text-[#C41E3A] mb-3">
                        {activeGroup.tagline}
                      </p>
                      {/* panel-title token → 26px / leading-[1.15] */}
                      <h2 className="font-heading font-bold text-panel-title text-[#0A0A0A]">
                        {activeGroup.label}
                      </h2>
                      <span className="block w-8 h-[2px] bg-[#C41E3A] mt-4" />
                    </div>
                    {/* panel-desc token → 12px / leading-[1.7] */}
                    <p className="font-sans text-panel-desc text-[#6B6B6B] mt-6">
                      Navigate with the links to the right, or{" "}
                      <Link
                        href={activeGroup.editorial.cta.href}
                        onClick={() => setOpenGroup(null)}
                        className="text-[#0A0A0A] underline underline-offset-2 hover:text-[#C41E3A] transition-colors duration-150"
                      >
                        go to overview
                      </Link>
                      .
                    </p>
                  </div>

                  {/* ── CENTRE: Items list ──────────────────────── */}
                  <div className="py-10 px-10">
                    {/* panel-eyebrow token → 9px / tracking-[0.2em] */}
                    <p className="font-sans text-panel-eyebrow uppercase text-[#6B6B6B] mb-4 pb-3 border-b border-[#E4E1DC]">
                      Section index
                    </p>
                    <ul className="space-y-0">
                      {activeGroup.items.map((item, i) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setOpenGroup(null)}
                            className="
                              group/item flex items-start gap-5 py-4
                              border-b border-[#E4E1DC] last:border-0
                              hover:bg-[#FAFAFA] -mx-4 px-4
                              transition-colors duration-150
                            "
                          >
                            {/* panel-index token → 10px */}
                            <span className="font-sans text-panel-index text-[#C5C2BE] tabular-nums mt-0.5 flex-shrink-0 w-4">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="flex-1 min-w-0">
                              {/* panel-item token → 14px */}
                              <span className="block font-heading font-semibold text-panel-item text-[#0A0A0A] group-hover/item:text-[#C41E3A] transition-colors duration-150 leading-snug mb-1">
                                {item.label}
                              </span>
                              {/* panel-desc token → 12px / leading-[1.7] */}
                              <span className="block font-sans text-panel-desc text-[#6B6B6B]">
                                {item.desc}
                              </span>
                            </div>
                            {/* panel-desc token → 12px */}
                            <span className="flex-shrink-0 font-sans text-panel-desc text-[#C41E3A] opacity-0 group-hover/item:opacity-100 transition-opacity duration-150 mt-0.5">
                              →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ── RIGHT: Editorial feature panel ─────────── */}
                  <div className="py-10 pl-10 flex flex-col justify-between">
                    <div>
                      {/* panel-eyebrow token → 9px / tracking-[0.2em] */}
                      <p className="font-sans text-panel-eyebrow uppercase text-[#6B6B6B] mb-4">
                        From the council
                      </p>
                      {/* panel-quote token → 18px / leading-[1.3] */}
                      <blockquote className="font-heading font-bold text-panel-quote text-[#0A0A0A] whitespace-pre-line">
                        {activeGroup.editorial.headline}
                      </blockquote>
                      <span className="block w-6 h-[1.5px] bg-[#E4E1DC] mt-5 mb-5" />
                      {/* panel-body token → 12px / leading-[1.7] */}
                      <p className="font-sans text-panel-body text-[#6B6B6B]">
                        {activeGroup.editorial.body}
                      </p>
                    </div>

                    {/* nav-label token → 10px / tracking-[0.13em] */}
                    <Link
                      href={activeGroup.editorial.cta.href}
                      onClick={() => setOpenGroup(null)}
                      className="
                        inline-flex items-center gap-2 mt-8
                        font-sans text-nav-label uppercase font-medium
                        text-[#0A0A0A] border-b border-[#0A0A0A] pb-px
                        hover:text-[#C41E3A] hover:border-[#C41E3A]
                        transition-colors duration-150 self-start
                      "
                    >
                      {activeGroup.editorial.cta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ═══════════════════════════════════════════════════════════
          MOBILE PANEL — slides in from left
      ══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-black/40 z-40"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { x: "-100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed inset-y-0 left-0 w-[320px] bg-white z-50 flex flex-col border-r-2 border-[#0A0A0A]"
            >
              {/* Drawer masthead */}
              <div className="px-6 py-5 border-b-2 border-[#0A0A0A] flex items-center justify-between flex-shrink-0">
                <Link
                  href="/"
                  className="flex items-center gap-2.5"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Image
                    src="/image/main-logo/mainlogo.png"
                    alt="UPTECH Logo"
                    width={100}
                    height={100}
                    className="h-[28px] w-auto object-contain"
                  />
                  <span className="font-heading font-bold text-[13px] uppercase tracking-[0.18em] text-[#0A0A0A]">
                    UPTECH
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  aria-label="Close menu"
                  className="w-8 h-8 flex items-center justify-center"
                >
                  {/* CSS ✕ */}
                  <span className="relative w-4 h-4 block">
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="block w-4 h-[1.5px] bg-[#0A0A0A] rotate-45" />
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="block w-4 h-[1.5px] bg-[#0A0A0A] -rotate-45" />
                    </span>
                  </span>
                </button>
              </div>

              {/* Scrollable nav */}
              <nav className="flex-1 overflow-y-auto" aria-label="Mobile navigation">
                {navGroups.map((group) => {
                  const isExp = mobileExpanded === group.label;
                  return (
                    <div key={group.label} className="border-b border-[#D8D5D0]">
                      <button
                        className="w-full px-6 py-4 flex items-center justify-between text-left"
                        onClick={() => setMobileExpanded(isExp ? null : group.label)}
                        aria-expanded={isExp}
                      >
                        {/* mobile-group token → 13px / tracking-[0.16em] */}
                        <span className="font-heading font-bold text-mobile-group uppercase text-[#0A0A0A]">
                          {group.label}
                        </span>
                        {/* CSS chevron */}
                        <span
                          className={`block w-[9px] h-[9px] border-r-[1.5px] border-b-[1.5px] border-[#0A0A0A] transition-transform duration-200 mr-1 ${
                            isExp ? "-rotate-135 translate-y-[3px]" : "rotate-45 -translate-y-[2px]"
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExp && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            {group.items.map((item) => (
                              <li key={item.href} className="border-t border-[#E4E1DC]">
                                <Link
                                  href={item.href}
                                  onClick={() => setIsMobileOpen(false)}
                                  className="block px-8 py-3.5"
                                >
                                  {/* mobile-item token → 14px */}
                                  <span className="block font-sans text-mobile-item font-medium text-[#0A0A0A] hover:text-[#C41E3A] transition-colors duration-150 mb-0.5">
                                    {item.label}
                                  </span>
                                  {/* mobile-desc token → 12px / leading-[1.6] */}
                                  <span className="block font-sans text-mobile-desc text-[#6B6B6B]">
                                    {item.desc}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* Membership flat link */}
                <div className="border-b border-[#D8D5D0]">
                  <Link
                    href="/membership"
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-6 py-4 font-heading font-bold text-mobile-group uppercase text-[#0A0A0A] hover:text-[#C41E3A] transition-colors duration-150"
                  >
                    Membership
                  </Link>
                </div>
              </nav>

              {/* Drawer CTA */}
              <div className="flex-shrink-0 p-6 border-t-2 border-[#0A0A0A] space-y-3">
                {/* mobile-cta token → 11px / tracking-[0.14em] */}
                <Link
                  href="/membership"
                  onClick={() => setIsMobileOpen(false)}
                  className="block text-center py-3 px-4 bg-[#0A0A0A] text-white font-heading font-bold text-mobile-cta uppercase hover:bg-[#C41E3A] transition-colors duration-200"
                >
                  Become a Member
                </Link>
                <Link
                  href="/membership"
                  onClick={() => setIsMobileOpen(false)}
                  className="block text-center py-2.5 px-4 border border-[#D8D5D0] font-sans text-mobile-cta uppercase text-[#6B6B6B] hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-colors duration-200"
                >
                  Member Portal
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
