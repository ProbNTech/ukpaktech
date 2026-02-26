"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { NewsCard } from "@/components/NewsCard";
import { Button } from "@/components/Button";
import { articles } from "@/data/articles";
import {
  Newspaper, TrendingUp, Globe2, BookOpen,
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
  Investment: { icon: Banknote, color: "#f59e0b" },
  Leadership: { icon: Award, color: "#8b5cf6" },
  Technology: { icon: Cpu, color: "#2563EB" },
  Industry: { icon: TrendingUp, color: "#22C55E" },
  Regulation: { icon: Shield, color: "#C41E3A" },
  Innovation: { icon: Lightbulb, color: "#f59e0b" },
  Cybersecurity: { icon: Shield, color: "#ef4444" },
  Funding: { icon: Banknote, color: "#22C55E" },
  Research: { icon: BookOpen, color: "#8b5cf6" },
  Awards: { icon: Award, color: "#C41E3A" },
};

export default function NewsPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
           HERO
      ═══════════════════════════════════════════════════════════════ */}
      <PageHero
        image="/image/london-images/innovation-ideas.jpg"
        title="News & Updates"
        subtitle="Stay informed with the latest news, insights, and announcements from the UK-Pakistan technology corridor."
      >
        <div className="flex flex-wrap gap-3">
          {[
            { label: `${articles.length} Articles`, icon: Newspaper, color: "#2563EB" },
            { label: `${new Set(articles.map((a) => a.category)).size} Categories`, icon: Radio, color: "#8b5cf6" },
            { label: "UK & Pakistan Coverage", icon: Globe2, color: "#22C55E" },
          ].map((chip) => {
            const Icon = chip.icon;
            return (
              <span
                key={chip.label}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15"
              >
                <Icon className="w-3.5 h-3.5" style={{ color: chip.color }} />
                {chip.label}
              </span>
            );
          })}
        </div>
      </PageHero>

      {/* ══════════════════════════════════════════════════════════════
           QUICK STATS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#1C1F2E]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: `${articles.length}+`, label: "Published Articles", color: "#2563EB", icon: Newspaper },
              { value: `${new Set(articles.map((a) => a.category)).size}`, label: "Topic Categories", color: "#8b5cf6", icon: Radio },
              { value: "UK-PK", label: "Bilateral Coverage", color: "#22C55E", icon: Globe2 },
              { value: "Live", label: "Real-time Updates", color: "#f59e0b", icon: Zap },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${stat.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                  <div>
                    <p className="font-heading font-extrabold text-xl text-white leading-none mb-1">{stat.value}</p>
                    <p className="text-xs text-white/50 uppercase tracking-wider font-medium">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           CATEGORY FILTERS + ARTICLES GRID
      ═══════════════════════════════════════════════════════════════ */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Browse by topic"
            title="Categories"
            subtitle="Filter news and updates by topic to find what is most relevant to you."
          />

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
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
                          background: meta.color,
                          color: "#ffffff",
                          border: `1px solid ${meta.color}`,
                        }
                      : {
                          background: "rgba(28,31,46,0.06)",
                          color: "#3D4152",
                          border: "1px solid rgba(28,31,46,0.15)",
                        }
                  }
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>{cat}</span>
                  <span
                    className="ml-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold"
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
              className="flex items-center gap-3 mb-8 px-4 py-3 rounded bg-white border border-[#D8D5CF]"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded bg-[#EEECEA] border border-[#D8D5CF] mb-6">
                <Newspaper className="w-7 h-7 text-[#7A7E8F]" />
              </div>
              <p className="text-base text-[#3D4152] mb-2 font-medium">No articles found for this category.</p>
              <p className="text-sm text-[#7A7E8F]">Try selecting a different topic above.</p>
            </div>
          )}
        </AnimatedSection>
      </Section>

      {/* ══════════════════════════════════════════════════════════════
           FEATURED TOPICS
      ═══════════════════════════════════════════════════════════════ */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Featured coverage"
            title="Trending Topics"
            subtitle="The themes shaping the UK-Pakistan technology corridor right now."
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
                color: "#8b5cf6",
                category: "Policy",
              },
              {
                title: "Cybersecurity",
                desc: "Threat intelligence, national security frameworks, and cyber resilience initiatives across the UK-Pakistan digital space.",
                icon: Shield,
                color: "#C41E3A",
                category: "Cybersecurity",
              },
              {
                title: "Research & Academia",
                desc: "University partnerships, R&D programmes, and academic collaborations advancing bilateral knowledge exchange.",
                icon: BookOpen,
                color: "#f59e0b",
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
                    document.querySelector("#news-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="group relative bg-white rounded border border-[#D8D5CF] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-left"
                >
                  <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${topic.color}, ${topic.color}60)` }} />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ background: `${topic.color}10` }}
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
                    <p className="text-[#3D4152] text-sm leading-relaxed mb-3">{topic.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide group-hover:text-[#2563EB] text-[#7A7E8F] transition-colors duration-200">
                      View articles <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ══════════════════════════════════════════════════════════════
           LATEST ARTICLES
      ═══════════════════════════════════════════════════════════════ */}
      <Section variant="light" id="news-grid">
        <AnimatedSection>
          <SectionHeader
            label="Just published"
            title="Latest Articles"
            subtitle="The most recent coverage from the UK-Pakistan technology corridor."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-8">
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
      </Section>

      {/* ══════════════════════════════════════════════════════════════
           CTA
      ═══════════════════════════════════════════════════════════════ */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] mb-4 tracking-wide uppercase">
              Stay Connected
            </p>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white mb-6">
              Never Miss an Update
            </h2>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
              Join the UPTECH community to receive the latest news, policy updates,
              and investment insights from the UK-Pakistan technology corridor.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>
                Become a Member
              </Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>
                Contact Us
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
