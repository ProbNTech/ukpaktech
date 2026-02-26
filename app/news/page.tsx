"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Section } from "@/components/Section";
import { NewsCard } from "@/components/NewsCard";
import { Button } from "@/components/Button";
import { articles } from "@/data/articles";
import {
  ChevronRight, Newspaper, TrendingUp, Globe2, BookOpen,
  Cpu, Shield, Award, Banknote, Landmark, Lightbulb,
  Zap, Radio, ArrowUpRight,
} from "lucide-react";

/* ── Extract unique categories ──────────────────────────────────── */
const allCategories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

/* ── Category metadata ──────────────────────────────────────────── */
const categoryMeta: Record<string, { icon: typeof Newspaper; color: string }> = {
  All: { icon: Newspaper, color: "#2563EB" },
  Policy: { icon: Landmark, color: "#2563EB" },
  Events: { icon: Globe2, color: "#22C55E" },
  Investment: { icon: Banknote, color: "#C41E3A" },
  Leadership: { icon: Award, color: "#2563EB" },
  Technology: { icon: Cpu, color: "#22C55E" },
  Industry: { icon: TrendingUp, color: "#C41E3A" },
  Regulation: { icon: Shield, color: "#2563EB" },
  Innovation: { icon: Lightbulb, color: "#22C55E" },
  Cybersecurity: { icon: Shield, color: "#C41E3A" },
  Funding: { icon: Banknote, color: "#2563EB" },
  Research: { icon: BookOpen, color: "#22C55E" },
  Awards: { icon: Award, color: "#C41E3A" },
};

/* SectionHeader removed — now using shared SectionHeader from @/components/SectionHeader */

export default function NewsPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="bg-[#EEECEA]">
      {/* ══════════════════════════════════════════════════════════════
           HERO — Futuristic Dark Glass with Grid Overlay
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[540px]">
        {/* Background image */}
        <Image
          src="/image/london-images/innovation-ideas.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dark cinematic overlay */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,14,30,0.92) 0%, rgba(10,14,30,0.75) 40%, rgba(10,14,30,0.60) 70%, rgba(10,14,30,0.85) 100%)",
          }}
        />

        {/* Futuristic grid pattern overlay */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial glow accents */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] z-[2] pointer-events-none opacity-20"
          style={{
            background: "radial-gradient(circle at center, rgba(37,99,235,0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] z-[2] pointer-events-none opacity-15"
          style={{
            background: "radial-gradient(circle at center, rgba(34,197,94,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Scan line effect */}
        <div
          className="absolute inset-0 z-[3] pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 pt-20 pb-20">
          {/* Breadcrumb */}
          <motion.nav
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li>
                <Link href="/" className="hover:text-[#2563EB] transition-colors duration-300">Home</Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5" />
              <li className="text-[#2563EB] font-medium">News &amp; Updates</li>
            </ol>
          </motion.nav>

          {/* Glowing accent line */}
          <motion.div
            initial={shouldReduceMotion ? {} : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="w-20 h-[2px] mb-6 origin-left"
            style={{
              background: "linear-gradient(90deg, #2563EB, #C41E3A, transparent)",
              boxShadow: "0 0 12px rgba(37,99,235,0.4)",
            }}
          />

          {/* Title with gradient text */}
          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] mb-5 max-w-3xl"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 30%, #2563EB 70%, #C41E3A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            News &amp; Updates
          </motion.h1>

          {/* Decorative divider */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-px mb-6 origin-left"
            style={{
              background: "linear-gradient(90deg, rgba(37,99,235,0.5), rgba(34,197,94,0.3), transparent)",
            }}
          />

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-lg text-white/60 max-w-2xl leading-relaxed mb-8"
          >
            Stay informed with the latest news, insights, and announcements from
            the UK--Pakistan technology corridor.
          </motion.p>

          {/* Glass morphism stat chips */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-3"
          >
            {[
              { label: `${articles.length} Articles`, icon: Newspaper, color: "#2563EB" },
              { label: `${new Set(articles.map((a) => a.category)).size} Categories`, icon: Radio, color: "#C41E3A" },
              { label: "UK & Pakistan Coverage", icon: Globe2, color: "#22C55E" },
            ].map((chip) => {
              const Icon = chip.icon;
              return (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/70 rounded-lg"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: `1px solid rgba(255,255,255,0.08)`,
                    boxShadow: `inset 0 1px 0 rgba(255,255,255,0.05), 0 0 20px rgba(${chip.color === "#2563EB" ? "37,99,235" : chip.color === "#C41E3A" ? "196,30,58" : "34,197,94"},0.08)`,
                  }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: chip.color }} />
                  {chip.label}
                </span>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom fade to content */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 z-[5] pointer-events-none"
          style={{
            background: "linear-gradient(to top, #0E1221, transparent)",
          }}
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════
           QUICK STATS — Dark glassmorphism stat strip
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative z-[1] -mt-6 bg-[#0E1221] py-8">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { value: `${articles.length}+`, label: "Published Articles", color: "#2563EB", icon: Newspaper },
                { value: `${new Set(articles.map((a) => a.category)).size}`, label: "Topic Categories", color: "#C41E3A", icon: Radio },
                { value: "UK-PK", label: "Bilateral Coverage", color: "#22C55E", icon: Globe2 },
                { value: "Live", label: "Real-time Updates", color: "#2563EB", icon: Zap },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="relative overflow-hidden rounded-xl p-5 group"
                    style={{
                      background: "rgba(28,31,46,0.8)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${stat.color}10, transparent 70%)`,
                      }}
                    />
                    <div className="relative flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}25` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: stat.color }} />
                      </div>
                      <div>
                        <p className="font-heading font-extrabold text-xl text-white leading-none mb-1">{stat.value}</p>
                        <p className="text-xs text-white/40 uppercase tracking-wider font-medium">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           CATEGORY FILTERS — Futuristic Dark Glass Tabs
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative z-[1] py-5 lg:py-7" style={{ backgroundColor: "#EEECEA" }}>
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader
              label="Browse by topic"
              title="Categories"
              subtitle="Filter news and updates by topic to find what is most relevant to you."
              color="blue"
            />

            {/* Futuristic filter pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {allCategories.map((cat) => {
                const meta = categoryMeta[cat] || { icon: Newspaper, color: "#1C1F2E" };
                const Icon = meta.icon;
                const isActive = activeCategory === cat;
                const count = cat === "All" ? articles.length : articles.filter((a) => a.category === cat).length;

                return (
                  <motion.button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wide rounded-full transition-all duration-300 overflow-hidden"
                    style={
                      isActive
                        ? {
                            background: `linear-gradient(135deg, ${meta.color}, ${meta.color}cc)`,
                            color: "#ffffff",
                            border: `1px solid ${meta.color}`,
                            boxShadow: `0 0 20px ${meta.color}30, 0 0 40px ${meta.color}15, inset 0 1px 0 rgba(255,255,255,0.15)`,
                          }
                        : {
                            background: "rgba(28,31,46,0.06)",
                            color: "#3D4152",
                            border: "1px solid rgba(28,31,46,0.15)",
                          }
                    }
                  >
                    {/* Active glow ring */}
                    {isActive && (
                      <div
                        className="absolute inset-0 rounded-full opacity-20"
                        style={{
                          background: `radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
                        }}
                      />
                    )}
                    <Icon className="w-3.5 h-3.5 relative z-10" strokeWidth={1.5} />
                    <span className="relative z-10">{cat}</span>
                    <span
                      className="relative z-10 ml-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold"
                      style={
                        isActive
                          ? { background: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.9)" }
                          : { background: "rgba(28,31,46,0.08)", color: "#7A7E8F" }
                      }
                    >
                      {count}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Active filter indicator */}
            {activeCategory !== "All" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-5 px-4 py-3 rounded-lg"
                style={{
                  background: `${categoryMeta[activeCategory]?.color || "#2563EB"}08`,
                  border: `1px solid ${categoryMeta[activeCategory]?.color || "#2563EB"}20`,
                }}
              >
                <Zap className="w-4 h-4" style={{ color: categoryMeta[activeCategory]?.color || "#2563EB" }} />
                <span className="text-sm font-medium text-[#1C1F2E]">
                  Showing <strong>{filteredArticles.length}</strong> article{filteredArticles.length !== 1 ? "s" : ""} in{" "}
                  <strong style={{ color: categoryMeta[activeCategory]?.color || "#2563EB" }}>{activeCategory}</strong>
                </span>
                <button
                  onClick={() => setActiveCategory("All")}
                  className="ml-auto text-xs font-semibold text-[#7A7E8F] hover:text-[#1C1F2E] transition-colors uppercase tracking-wide"
                >
                  Clear filter
                </button>
              </motion.div>
            )}

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                {filteredArticles.map((article, i) => (
                  <NewsCard
                    key={article.slug}
                    slug={article.slug}
                    title={article.title}
                    category={article.category}
                    date={article.date}
                    image={article.image}
                    excerpt={article.excerpt}
                    index={i}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                  style={{
                    background: "rgba(28,31,46,0.06)",
                    border: "1px solid rgba(28,31,46,0.1)",
                  }}
                >
                  <Newspaper className="w-7 h-7 text-[#7A7E8F]" />
                </div>
                <p className="text-base text-[#3D4152] mb-2 font-medium">No articles found for this category.</p>
                <p className="text-sm text-[#7A7E8F]">Try selecting a different topic above.</p>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           FEATURED TOPICS — Dark glassmorphism cards
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative z-[1] py-5 lg:py-7" style={{ backgroundColor: "#E8E6E3" }}>
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader
              label="Featured coverage"
              title="Trending Topics"
              subtitle="The themes shaping the UK--Pakistan technology corridor right now."
              color="green"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "AI & Innovation",
                  desc: "From the Islamabad AI Declaration to Indus AI Week, tracking the rapid acceleration of artificial intelligence across both nations.",
                  icon: Cpu,
                  color: "#2563EB",
                  category: "Technology",
                },
                {
                  title: "Investment & Funding",
                  desc: "Bilateral investment deals, VC funding rounds, and government-backed financial programmes fuelling tech growth.",
                  icon: Banknote,
                  color: "#22C55E",
                  category: "Investment",
                },
                {
                  title: "Policy & Regulation",
                  desc: "Data protection frameworks, digital governance strategies, and regulatory developments shaping the corridor.",
                  icon: Shield,
                  color: "#C41E3A",
                  category: "Policy",
                },
                {
                  title: "Cybersecurity",
                  desc: "Threat intelligence, national security frameworks, and cyber resilience initiatives across the UK-Pakistan digital space.",
                  icon: Shield,
                  color: "#2563EB",
                  category: "Cybersecurity",
                },
                {
                  title: "Research & Academia",
                  desc: "University partnerships, R&D programmes, and academic collaborations advancing bilateral knowledge exchange.",
                  icon: BookOpen,
                  color: "#22C55E",
                  category: "Research",
                },
                {
                  title: "Industry & Trade",
                  desc: "IT export growth, trade delegations, and industry developments connecting UK and Pakistan tech ecosystems.",
                  icon: TrendingUp,
                  color: "#22C55E",
                  category: "Industry",
                },
              ].map((topic) => {
                const Icon = topic.icon;
                const topicCount = articles.filter((a) => a.category === topic.category).length;
                return (
                  <button
                    key={topic.title}
                    onClick={() => {
                      setActiveCategory(topic.category);
                      /* Scroll to filter section */
                      document.querySelector("#news-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="group relative bg-white rounded-xl border border-[#D8D5CF] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg text-left"
                  >
                    <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${topic.color}, ${topic.color}60)` }} />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center"
                          style={{ background: `${topic.color}10`, border: `1px solid ${topic.color}20` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: topic.color }} strokeWidth={1.5} />
                        </div>
                        <span className="text-xs font-bold text-[#7A7E8F] uppercase tracking-wider">
                          {topicCount} article{topicCount !== 1 ? "s" : ""}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2 group-hover:text-[#2563EB] transition-colors duration-200">
                        {topic.title}
                      </h3>
                      <p className="text-[#3D4152] text-base leading-relaxed mb-3">{topic.desc}</p>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide group-hover:text-[#2563EB] text-[#7A7E8F] transition-colors duration-200">
                        View articles <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           LATEST ARTICLES — Quick preview with dark banner
      ═══════════════════════════════════════════════════════════════ */}
      <section id="news-grid" className="relative z-[1] py-5 lg:py-7" style={{ backgroundColor: "#EEECEA" }}>
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <SectionHeader
              label="Just published"
              title="Latest Articles"
              subtitle="The most recent coverage from the UK--Pakistan technology corridor."
              color="red"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mb-5">
              {articles.slice(0, 6).map((article, i) => (
                <NewsCard
                  key={article.slug}
                  slug={article.slug}
                  title={article.title}
                  category={article.category}
                  date={article.date}
                  image={article.image}
                  excerpt={article.excerpt}
                  index={i}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <Button
                onClick={() => {
                  setActiveCategory("All");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                variant="primary"
                size="lg"
                showArrow
              >
                View All {articles.length} Articles
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           CTA — Futuristic dark section with gradient glow effects
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative z-[2] overflow-hidden py-12 lg:py-16">
        {/* Deep dark background */}
        <div className="absolute inset-0 bg-[#0B0F1A]" />

        {/* Animated gradient blobs */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] pointer-events-none opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] pointer-events-none opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(34,197,94,0.35) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-[40%] left-[40%] w-[300px] h-[300px] pointer-events-none opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(34,197,94,0.3) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Scan lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        />

        <div className="relative z-10 px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              {/* Glowing accent line */}
              <div
                className="w-16 h-[2px] mb-6"
                style={{
                  background: "linear-gradient(90deg, #2563EB, #C41E3A, transparent)",
                  boxShadow: "0 0 15px rgba(37,99,235,0.5), 0 0 30px rgba(37,99,235,0.2)",
                }}
              />

              <p
                className="text-sm font-bold uppercase tracking-[0.2em] mb-4"
                style={{
                  background: "linear-gradient(90deg, #2563EB, #C41E3A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Stay Connected
              </p>

              <h2
                className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #2563EB 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Never Miss an Update
              </h2>

              <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
                Join the UPTECH community to receive the latest news, policy updates,
                and investment insights from the UK--Pakistan technology corridor.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/membership"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-sm font-semibold overflow-hidden transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #1d4ed8)",
                    boxShadow: "0 0 30px rgba(37,99,235,0.3), 0 0 60px rgba(37,99,235,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
                  }}
                >
                  {/* Hover shimmer */}
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, transparent, rgba(255,255,255,0.1), transparent)",
                    }}
                  />
                  <span className="relative z-10">Become a Member</span>
                  <ChevronRight className="w-4 h-4 relative z-10" />
                </Link>

                <Button href="/contact" variant="glass" size="lg" showArrow>Contact Us</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
