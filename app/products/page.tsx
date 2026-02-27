"use client";

import { Section } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion } from "framer-motion";
import { TubesCTA } from "@/components/TubesCTA";
import { CheckCircle2, Cpu, ShoppingCart, Users, Globe2, BarChart3, Zap } from "lucide-react";

const products = [
  {
    icon: Cpu,
    label: "AI Platform",
    title: "People AI",
    description: "A human-centric AI ecosystem connecting talent, tools, and opportunity at national scale. People AI leverages artificial intelligence to match skilled professionals with opportunities, streamline workforce development, and create a data-driven talent pipeline across the UK\u2013Pakistan corridor.",
    features: [
      "AI-powered talent matching and recommendations",
      "Skills assessment and certification tracking",
      "Workforce analytics and market intelligence",
      "Cross-border talent pipeline management",
      "Integration with UPTECH member networks",
      "Real-time opportunity notifications",
    ],
    cta: { label: "Explore People AI", href: "/initiatives/people-ai" },
  },
  {
    icon: ShoppingCart,
    label: "Digital Marketplace",
    title: "TechMart Global",
    description: "A cross-border digital marketplace enabling UK and Pakistani tech firms to trade, collaborate, and showcase their products and services to a global audience. TechMart Global removes barriers to international trade by providing a trusted platform for technology exchange.",
    features: [
      "Product and service listing marketplace",
      "Verified company profiles and reviews",
      "Cross-border procurement facilitation",
      "Secure transaction and escrow services",
      "Trade analytics and market insights",
      "Exhibition and showcase events",
    ],
    cta: { label: "Explore TechMart", href: "/initiatives/techmart-global" },
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Active Members" },
  { icon: Globe2, value: "2", label: "Nations Connected" },
  { icon: BarChart3, value: "50+", label: "Partner Companies" },
  { icon: Zap, value: "24/7", label: "Platform Access" },
];

export default function ProductsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <PageHero
        title="Products"
        subtitle="Flagship technology platforms built by UPTECH to connect, empower, and scale the UK\u2013Pakistan tech ecosystem."
        image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=2400&q=85&auto=format&fit=crop"
      />

      {/* Stats Bar */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="text-center"
                >
                  <Icon className="w-6 h-6 text-[#2563EB] mx-auto mb-2" strokeWidth={1.5} />
                  <p className="font-heading font-extrabold text-3xl text-[#1C1F2E]">{stat.value}</p>
                  <p className="text-sm text-[#7A7E8F]">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-3">Our Platforms</p>
            <h2 className="font-heading font-extrabold text-[#1C1F2E] text-xl sm:text-2xl leading-snug mb-6">
              Technology Products Driving Cross-Border Innovation
            </h2>
            <p className="text-[#3D4152] text-base leading-relaxed">
              UPTECH builds and operates flagship technology platforms that serve our members and the broader ecosystem. These products are designed to solve real challenges in talent matching, cross-border trade, and technology collaboration.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Products */}
      {products.map((product, idx) => {
        const ProductIcon = product.icon;
        return (
          <Section key={product.title} variant={idx % 2 === 0 ? "alt" : "light"}>
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                >
                  <ProductIcon className="w-8 h-8 text-[#2563EB] mb-4" strokeWidth={1.5} />
                  <p className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-3">{product.label}</p>
                  <h2 className="font-heading font-extrabold text-3xl text-[#1C1F2E] mb-4">{product.title}</h2>
                  <div className="h-px bg-[#1C1F2E]/20 mb-5" />
                  <p className="text-[#3D4152] text-base leading-relaxed mb-6">{product.description}</p>
                  <Button href={product.cta.href} variant="primary" showArrow>{product.cta.label}</Button>
                </motion.div>
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white border border-[#D8D5CF] rounded p-8"
                >
                  <h3 className="font-heading font-bold text-sm text-[#1C1F2E] uppercase tracking-wide mb-5">Key Features</h3>
                  <div className="h-px bg-[#D8D5CF] mb-5" />
                  <div className="grid sm:grid-cols-2 gap-3">
                    {product.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                        <span className="text-[#3D4152] text-sm leading-relaxed">{f}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </Section>
        );
      })}

      {/* CTA */}
      <TubesCTA>
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#4ade80] uppercase tracking-wider mb-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">Get Access</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 drop-shadow-[0_0_15px_rgba(0,0,0,0.9)]">
              Ready to Use Our Platforms?
            </h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
              UPTECH members get priority access to People AI and TechMart Global. Join today and start leveraging our technology platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" size="lg" showArrow>Become a Member</Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>Contact Us</Button>
            </div>
          </div>
        </AnimatedSection>
      </TubesCTA>
    </div>
  );
}
