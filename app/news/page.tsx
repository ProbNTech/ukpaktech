"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Section } from "@/components/Section";
import { NewsCard } from "@/components/NewsCard";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { ShinyButton } from "@/components/ui/shiny-button";
import { articles } from "@/data/articles";
import { GlobalCTA } from "@/components/GlobalCTA";
import {
  Newspaper, TrendingUp, Globe2, BookOpen,
  Cpu, Shield, Award, Banknote, Landmark, Lightbulb,
  Zap, Radio, ArrowUpRight,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

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
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        label="News & Updates"
        title="News & Updates"
        subtitle="Stay informed with the latest news, insights, and announcements from the UK–Pakistan technology corridor."
        image="/image/banners/news.jpg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ShinyButton href="/membership">Become a Member</ShinyButton>
          <Button href="#news-grid" variant="glass">Browse Articles</Button>
        </div>

        {/* Glassmorphism stat chips */}
        <div className="flex flex-wrap gap-3 mt-6">
          {[
            { label: `${articles.length} Articles`, icon: Newspaper, color: "#2563EB" },
            { label: `${new Set(articles.map((a) => a.category)).size} Categories`, icon: Radio, color: "#C41E3A" },
            { label: "UK & Pakistan Coverage", icon: Globe2, color: "#22C55E" },
          ].map((chip) => {
            const Icon = chip.icon;
            return (
              <span
                key={chip.label}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: chip.color }} />
                {chip.label}
              </span>
            );
          })}
        </div>
      </PageHero>

      {/* ── Stats ────────────────────────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: `${articles.length}+`, label: "Published Articles", color: "#2563EB" },
              { value: `${new Set(articles.map((a) => a.category)).size}`, label: "Topic Categories", color: "#C41E3A" },
              { value: "UK-PK", label: "Bilateral Coverage", color: "#22C55E" },
              { value: "Live", label: "Real-time Updates", color: "#2563EB" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="text-center flex flex-col items-center"
              >
                <p className="font-heading font-extrabold text-3xl" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-base text-[#7A7E8F]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

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
              subtitle="The themes shaping the UK-Pakistan technology corridor right now."
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
                    className="group relative rounded-2xl border border-[#D8D5CF]/60 p-px text-left h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-500"
                  >
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
              subtitle="The most recent coverage from the UK-Pakistan technology corridor."
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
           CTA — Animated tube cursor background
      ═══════════════════════════════════════════════════════════════ */}
      <GlobalCTA
        label="Stay Connected"
        title="Never Miss an Update"
        subtitle="Join the UPTECH community to receive the latest news, policy updates, and investment insights from the UK–Pakistan technology corridor."
        primaryButtonText="Become a Member"
        primaryButtonLink="/membership"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
  );
}
