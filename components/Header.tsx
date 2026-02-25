"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────
   Navigation types & data
───────────────────────────────────────────────────────────────── */
type NavGroup = {
  kind: "group";
  label: string;
  displayLabel?: string;
  tagline: string;
  editorial: { headline: string; body: string; cta: { label: string; href: string } };
  items: { label: string; href: string; desc: string }[];
};

type NavLink = {
  kind: "link";
  label: string;
  displayLabel?: string;
  href: string;
};

type NavItem = NavGroup | NavLink;

const navItems: NavItem[] = [
  /* 1 — About */
  {
    kind: "group",
    label: "About",
    tagline: "Who we are",
    editorial: {
      headline: "Built on partnership,\ndriven by purpose.",
      body: "UPTECH is the strategic bridge between UK and Pakistan's technology ecosystems — forging alliances that create lasting impact.",
      cta: { label: "Our story →", href: "/about" },
    },
    items: [
      { label: "About UPTECH", href: "/about", desc: "Our founding mission, vision for bilateral tech growth, and the values that guide everything we do." },
      { label: "Leadership & Governance", href: "/leadership", desc: "Meet the board, advisory council and executive team steering UPTECH's strategic direction." },
      { label: "Structure & Procedure", href: "/structure", desc: "Organisational chart, key roles, and operating procedures governing UPTECH's operations." },
      { label: "Code of Conduct", href: "/code-of-conduct", desc: "The ethics, accountability standards and community guidelines every member upholds." },
    ],
  },
  /* 2 — What We Do */
  {
    kind: "group",
    label: "What We Do",
    tagline: "Our work",
    editorial: {
      headline: "From classroom\nto cutting edge.",
      body: "Our programmes, initiatives, and partnerships equip individuals and organisations with the skills, networks and capital to compete on the global stage.",
      cta: { label: "Explore programmes →", href: "/programs/ai-tech-programs" },
    },
    items: [
      { label: "AI & Tech Programs", href: "/programs/ai-tech-programs", desc: "Structured initiatives in artificial intelligence, cloud, cybersecurity and emerging technology." },
      { label: "Skill Development Centre", href: "/programs/skill-development-center", desc: "Practical training pathways, certification tracks and mentorship for the modern tech workforce." },
      { label: "Incubation & Startups", href: "/programs/incubation-collective-startups", desc: "Early-stage support, co-working access, investor introductions and go-to-market acceleration." },
      { label: "Tech Excellence Awards", href: "/initiatives/tech-excellence-awards", desc: "Annual recognition celebrating the individuals and organisations driving extraordinary innovation." },
      { label: "UK–Pakistan Partnership", href: "/ecosystem/uk-pakistan-technology-partnership", desc: "The bilateral framework underpinning joint ventures, policy dialogue and shared R&D investment." },
      { label: "Trade Delegations", href: "/ecosystem/trade-delegations-and-exhibitions", desc: "Curated business missions, trade expos and pavilion programmes placing members on the world stage." },
    ],
  },
  /* 3 — Services */
  {
    kind: "group",
    label: "Services",
    tagline: "How we support you",
    editorial: {
      headline: "Grow faster.\nGo further.",
      body: "From business networks to marketing support and legal infrastructure — everything your tech business needs to scale.",
      cta: { label: "Explore services →", href: "/services" },
    },
    items: [
      { label: "Business Networks", href: "/services/business-networks", desc: "Strategic connections, market advice, and access to the Enterprise Europe Network." },
      { label: "SME Hub", href: "/services/sme-hub", desc: "Sales insights, finance access, talent support, and exclusive member offers for growing tech SMEs." },
      { label: "Digital Marketing Hub", href: "/services/digital-marketing", desc: "Promote your tech products and services across the UK, Europe, Middle East and Africa." },
      { label: "Overseas Employment", href: "/services/overseas-employment", desc: "Contract employment connecting skilled tech professionals with international opportunities." },
      { label: "Business Support", href: "/services/business-support", desc: "Company registration, legal, IP protection, investment documents, and data rooms." },
    ],
  },
  /* 4 — Products */
  {
    kind: "group",
    label: "Products",
    tagline: "Our platforms",
    editorial: {
      headline: "Platforms that\nchange industries.",
      body: "From AI talent matching to cross-border digital marketplaces — our products are creating new infrastructure for the digital economy.",
      cta: { label: "View products →", href: "/products" },
    },
    items: [
      { label: "People AI Platform", href: "/initiatives/people-ai", desc: "A human-centric AI ecosystem connecting talent, tools and opportunity at national scale." },
      { label: "TechMart Global", href: "/initiatives/techmart-global", desc: "A cross-border digital marketplace enabling UK and Pakistani tech firms to trade and collaborate." },
    ],
  },
  /* 5 — Startup Funding (direct link) */
  { kind: "link", label: "Startup Funding", displayLabel: "Funding", href: "/ecosystem/funding-and-grants" },
  /* 6 — Membership */
  {
    kind: "group",
    label: "Membership",
    tagline: "Join the council",
    editorial: {
      headline: "Be part of\nthe movement.",
      body: "Join a growing network of technology companies, investors, and professionals driving UK–Pakistan bilateral growth.",
      cta: { label: "Become a member →", href: "/membership" },
    },
    items: [
      { label: "Membership Overview", href: "/membership", desc: "Explore membership tiers, benefits, and how to join the UPTECH community." },
      { label: "Membership Directory", href: "/membership/directory", desc: "Browse our corporate and individual members shaping the UK–Pakistan technology corridor." },
      { label: "London Meeting Space", href: "/meeting-space", desc: "Professional meeting and event facilities in central London for UPTECH members." },
    ],
  },
  /* 7 — Mentorship (direct link) */
  { kind: "link", label: "Mentorship", href: "/services/mentorship" },
  /* 8 — Job Portal (direct link) */
  { kind: "link", label: "Job Portal", displayLabel: "Jobs", href: "/careers" },
  /* 9 — Events (direct link) */
  { kind: "link", label: "Events", href: "/events" },
  /* 10 — News & Updates (direct link) */
  { kind: "link", label: "News & Updates", displayLabel: "News", href: "/events" },
  /* 11 — FAQs (direct link) */
  { kind: "link", label: "FAQs", href: "/faqs" },
  /* 12 — Contact Us (direct link) */
  { kind: "link", label: "Contact Us", displayLabel: "Contact", href: "/contact" },
];

const navGroups = navItems.filter((item): item is NavGroup => item.kind === "group");

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

  const handleGroupEnter = useCallback((label: string) => {
    clearTimers();
    openTimerRef.current = setTimeout(() => setOpenGroup(label), HOVER_OPEN_DELAY);
  }, [clearTimers]);

  const handlePanelEnter = useCallback((label: string) => {
    clearTimers();
    setOpenGroup(label);
  }, [clearTimers]);

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

      {/* ═══════════════════════════════════════════════════════════
          HEADER — white two-tier professional layout
      ══════════════════════════════════════════════════════════════ */}
      <header
        role="banner"
        className="sticky top-0 z-50 bg-white border-b border-gray-200"
        onMouseLeave={handleLeave}
      >
        {/* ── Tier 1: Brand bar ──────────────────────────────── */}
        <div className="px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between h-[90px]">

            {/* ── Left: Logo + name ────────────────────────────── */}
            <Link
              href="/"
              className="flex items-center gap-4 flex-shrink-0 group"
              aria-label="UPTECH — Home"
            >
              <Image
                src="/image/main-logo/mainlogo.png"
                alt="UPTECH Council logo"
                width={72}
                height={72}
                className="h-[68px] w-auto object-contain"
                priority
              />
              <span className="hidden sm:inline font-heading font-black text-[28px] sm:text-[34px] lg:text-[42px] xl:text-[48px] tracking-[0.01em] leading-none text-[#1a2b5e] uppercase">
                UK–PAKISTAN TECH COUNCIL <span className="text-[#C41E3A]">(UPTECH)</span>
              </span>
            </Link>

            {/* ── Right: CTA ────────────────────────── */}
            <div className="hidden lg:flex items-center gap-5">
              <Link
                href="/membership"
                onMouseEnter={handleLeave}
                className="px-6 py-2.5 font-heading font-bold text-[12px] uppercase tracking-[0.12em] bg-[#1a2b5e] text-white hover:bg-[#131f47] transition-colors duration-200 whitespace-nowrap rounded"
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
              <span className="block w-6 h-[1.5px] bg-[#0F172A]" />
              <span className="block w-6 h-[1.5px] bg-[#0F172A]" />
              <span className="block w-4 h-[1.5px] self-start bg-[#0F172A]" />
            </button>
          </div>
        </div>

        {/* ── Tier 2: Navigation bar ─────────────────────────── */}
        <div className="hidden lg:block border-t border-gray-100">
          <div className="px-5 sm:px-8 lg:px-8 xl:px-12">
            <nav
              className="flex items-center h-[46px]"
              aria-label="Main navigation"
            >
              <Link
                href="/"
                onMouseEnter={handleLeave}
                className="relative h-full px-2.5 xl:px-3 flex items-center font-sans text-[12px] font-semibold tracking-[0.02em] text-[#1a2b5e] hover:text-[#0F172A] transition-colors duration-150"
              >
                HOME
              </Link>

              {navItems.map((item) => {
                if (item.kind === "link") {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onMouseEnter={handleLeave}
                      className="relative h-full px-2.5 xl:px-3 flex items-center font-sans text-[12px] font-semibold tracking-[0.02em] text-[#1a2b5e] hover:text-[#0F172A] transition-colors duration-150 whitespace-nowrap"
                    >
                      {(item.displayLabel ?? item.label).toUpperCase()}
                    </Link>
                  );
                }

                const isActive = openGroup === item.label;
                return (
                  <button
                    key={item.label}
                    type="button"
                    aria-expanded={isActive}
                    aria-haspopup="true"
                    onMouseEnter={() => handleGroupEnter(item.label)}
                    className={`
                      relative h-full px-2.5 xl:px-3 flex items-center gap-1
                      font-sans text-[12px] font-semibold tracking-[0.02em]
                      transition-colors duration-150 cursor-default select-none whitespace-nowrap
                      ${isActive
                        ? "text-[#0F172A]"
                        : "text-[#1a2b5e] hover:text-[#0F172A]"}
                    `}
                  >
                    {(item.displayLabel ?? item.label).toUpperCase()}
                    <svg
                      className={`w-2.5 h-2.5 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    <span
                      className={`
                        absolute bottom-0 left-2 right-2 h-[2px] bg-[#1a2b5e]
                        transition-opacity duration-150
                        ${isActive ? "opacity-100" : "opacity-0"}
                      `}
                    />
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            MEGA PANEL — three-column editorial dropdown
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
                      <p className="font-sans text-panel-eyebrow uppercase text-[#C41E3A] mb-3">
                        {activeGroup.tagline}
                      </p>
                      <h2 className="font-heading font-bold text-panel-title text-[#0A0A0A]">
                        {activeGroup.label}
                      </h2>
                      <span className="block w-8 h-[2px] bg-[#C41E3A] mt-4" />
                    </div>
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
                            <span className="font-sans text-panel-index text-[#C5C2BE] tabular-nums mt-0.5 flex-shrink-0 w-4">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="flex-1 min-w-0">
                              <span className="block font-heading font-semibold text-panel-item text-[#0A0A0A] group-hover/item:text-[#C41E3A] transition-colors duration-150 leading-snug mb-1">
                                {item.label}
                              </span>
                              <span className="block font-sans text-panel-desc text-[#6B6B6B]">
                                {item.desc}
                              </span>
                            </div>
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
                      <p className="font-sans text-panel-eyebrow uppercase text-[#6B6B6B] mb-4">
                        From the council
                      </p>
                      <blockquote className="font-heading font-bold text-panel-quote text-[#0A0A0A] whitespace-pre-line">
                        {activeGroup.editorial.headline}
                      </blockquote>
                      <span className="block w-6 h-[1.5px] bg-[#E4E1DC] mt-5 mb-5" />
                      <p className="font-sans text-panel-body text-[#6B6B6B]">
                        {activeGroup.editorial.body}
                      </p>
                    </div>

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
                {/* Home link */}
                <div className="border-b border-[#D8D5D0]">
                  <Link
                    href="/"
                    onClick={() => setIsMobileOpen(false)}
                    className="w-full px-6 py-4 flex items-center text-left"
                  >
                    <span className="font-heading font-bold text-mobile-group uppercase text-[#0A0A0A]">
                      Home
                    </span>
                  </Link>
                </div>

                {navItems.map((item) => {
                  if (item.kind === "link") {
                    return (
                      <div key={item.label} className="border-b border-[#D8D5D0]">
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileOpen(false)}
                          className="w-full px-6 py-4 flex items-center text-left"
                        >
                          <span className="font-heading font-bold text-mobile-group uppercase text-[#0A0A0A]">
                            {item.label}
                          </span>
                        </Link>
                      </div>
                    );
                  }

                  const isExp = mobileExpanded === item.label;
                  return (
                    <div key={item.label} className="border-b border-[#D8D5D0]">
                      <button
                        className="w-full px-6 py-4 flex items-center justify-between text-left"
                        onClick={() => setMobileExpanded(isExp ? null : item.label)}
                        aria-expanded={isExp}
                      >
                        <span className="font-heading font-bold text-mobile-group uppercase text-[#0A0A0A]">
                          {item.label}
                        </span>
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
                            {item.items.map((subItem) => (
                              <li key={subItem.href} className="border-t border-[#E4E1DC]">
                                <Link
                                  href={subItem.href}
                                  onClick={() => setIsMobileOpen(false)}
                                  className="block px-8 py-3.5"
                                >
                                  <span className="block font-sans text-mobile-item font-medium text-[#0A0A0A] hover:text-[#C41E3A] transition-colors duration-150 mb-0.5">
                                    {subItem.label}
                                  </span>
                                  <span className="block font-sans text-mobile-desc text-[#6B6B6B]">
                                    {subItem.desc}
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
              </nav>

              {/* Drawer CTA */}
              <div className="flex-shrink-0 p-6 border-t-2 border-[#0A0A0A] space-y-3">
                <Link
                  href="/membership"
                  onClick={() => setIsMobileOpen(false)}
                  className="block text-center py-3 px-4 bg-[#1a2b5e] text-white font-heading font-bold text-mobile-cta uppercase hover:bg-[#131f47] transition-colors duration-200 rounded"
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
