"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";

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

const HOVER_OPEN_DELAY = 80;
const HOVER_CLOSE_DELAY = 250;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const clearTimers = useCallback(() => {
    if (openTimerRef.current) { clearTimeout(openTimerRef.current); openTimerRef.current = null; }
    if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; }
  }, []);

  const handleEnter = useCallback((label: string) => {
    clearTimers();
    openTimerRef.current = setTimeout(() => setOpenDropdown(label), HOVER_OPEN_DELAY);
  }, [clearTimers]);

  const handleLeave = useCallback(() => {
    clearTimers();
    closeTimerRef.current = setTimeout(() => setOpenDropdown(null), HOVER_CLOSE_DELAY);
  }, [clearTimers]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#1E40AF] focus:text-white focus:rounded-md focus:outline-none"
      >
        Skip to main content
      </a>
      {/* Spacer so content doesn't hide behind fixed navbar */}
      <div className="h-[72px]" />

      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] border-b border-gray-100"
            : "bg-white/95 backdrop-blur-sm border-b border-gray-100/60"
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <Image
                src="/image/main-logo/mainlogo.png"
                alt="UPTECH Logo"
                width={44}
                height={44}
                className="h-[38px] lg:h-[44px] w-auto object-contain"
              />
              <span className="font-heading font-bold text-lg text-[#0B1220]">UPTECH</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navGroups.map((group) => (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => handleEnter(group.label)}
                  onMouseLeave={handleLeave}
                >
                  <button
                    type="button"
                    aria-expanded={openDropdown === group.label}
                    aria-haspopup="true"
                    className="flex items-center gap-1.5 text-[#EAF2FF]/90 hover:text-[#1E40AF] transition-all duration-300 font-medium text-sm relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220] rounded"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    {group.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === group.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Invisible bridge between trigger and dropdown */}
                  {openDropdown === group.label && (
                    <div className="absolute top-full left-0 right-0 h-3" />
                  )}

                  <AnimatePresence>
                    {openDropdown === group.label && (
                      <motion.div
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-3 w-72 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 py-2 z-50"
                        onMouseEnter={() => handleEnter(group.label)}
                        onMouseLeave={handleLeave}
                      >
                        <div className="px-3 pb-1.5 mb-1 border-b border-gray-50">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">{group.label}</span>
                        </div>
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block mx-1.5 px-3 py-2.5 rounded-lg hover:bg-[#1E40AF]/[0.04] transition-colors duration-150 group/item"
                          >
                            <span className="block text-sm font-medium text-[#1F2937] group-hover/item:text-[#1E40AF] transition-colors">
                              {item.label}
                            </span>
                            <span className="block text-xs text-gray-400 mt-0.5">
                              {item.desc}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                href="/membership"
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#374151] hover:text-[#1E40AF] hover:bg-gray-50 transition-colors duration-200"
              >
                Membership
              </Link>
            </nav>

            {/* Desktop right actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={siteConfig.portalUrl}
                className="px-4 py-2 rounded-lg text-sm font-medium text-[#374151] hover:text-[#1E40AF] hover:bg-gray-50 transition-colors duration-200"
              >
                Portal
              </Link>
              <Link
                href="/membership"
                className="px-5 py-2.5 rounded-lg bg-[#1E40AF] text-white text-sm font-semibold shadow-sm hover:bg-[#1730A0] hover:shadow-md hover:-translate-y-px active:translate-y-0 transition-all duration-200"
              >
                Become a Member →
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-[#374151] hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed inset-y-0 right-0 w-[300px] bg-white z-50 overflow-y-auto shadow-xl border-l border-gray-100"
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-6">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileOpen(false)}>
                    <Image
                      src="/image/main-logo/mainlogo.png"
                      alt="UPTECH Logo"
                      width={36}
                      height={36}
                      className="h-[36px] w-auto object-contain"
                    />
                    <span className="font-heading font-bold text-lg text-[#0B1220]">UPTECH</span>
                  </Link>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-0.5">
                  {navGroups.map((group) => (
                    <div key={group.label}>
                      <button
                        className="flex items-center justify-between w-full py-2.5 px-3 text-sm font-medium text-[#374151] hover:text-[#1E40AF] hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={() => setMobileExpanded(mobileExpanded === group.label ? null : group.label)}
                      >
                        {group.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === group.label ? "rotate-180 text-[#1E40AF]" : "text-gray-400"}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === group.label && (
                          <motion.div
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pr-2 pb-1 space-y-0.5">
                              {group.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="block py-2 px-3 text-sm text-gray-500 hover:text-[#1E40AF] hover:bg-[#1E40AF]/[0.04] rounded-lg transition-colors"
                                  onClick={() => setIsMobileOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                  <Link
                    href="/membership"
                    className="block py-2.5 px-3 text-sm font-medium text-[#374151] hover:text-[#1E40AF] hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Membership
                  </Link>
                </nav>

                <div className="mt-6 pt-5 border-t border-gray-100 space-y-2.5">
                  <Link
                    href={siteConfig.portalUrl}
                    className="block text-center py-2.5 px-4 text-sm font-medium text-[#374151] hover:text-[#1E40AF] border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Portal
                  </Link>
                  <Link
                    href="/membership"
                    className="block text-center py-2.5 px-4 text-sm font-semibold text-white bg-[#1E40AF] rounded-lg hover:bg-[#1730A0] shadow-sm transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Become a Member →
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
