"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { AnimatedUnderline } from "@/components/AnimatedUnderline";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe2,
  HeartHandshake,
  Building2,
  Users,
  Briefcase,
  Calendar,
  MapPin,
  Target,
  CheckCircle2,
  ArrowRight,
  Network,
  TrendingUp,
} from "lucide-react";

// Brand colors
const BRAND_COLORS = {
  blue: "#1E40AF",
  green: "#00B140",
  red: "#2563EB",
};

export default function TradeDelegationsAndExhibitionsClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <PageHero
        title={
          <span className="relative inline-block">
            Trade Delegations and Exhibitions
            <AnimatedUnderline />
          </span>
        }
        subtitle="Facilitating cross-border trade delegations and technology exhibitions to strengthen UK–Pakistan partnerships."
      />

      {/* Overview Section */}
      <Section variant="dark" className="relative overflow-hidden">
        {/* Animated brand color orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#1E40AF]/8 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-[#00B140]/8 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-80 h-80 bg-gradient-to-bl from-[#2563EB]/6 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.25, 1],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  title="Trade Delegations and Exhibitions"
                  subtitle="Facilitating cross-border trade delegations and technology exhibitions to strengthen UK–Pakistan technology partnerships."
                  align="left"
                />
                <div className="space-y-5 text-[rgba(234,242,255,0.85)] leading-relaxed mt-8 text-base">
                  <p>
                    UPTECH organizes and facilitates trade delegations and technology exhibitions that bring together businesses, investors, startups, and technology leaders from both the UK and Pakistan. These events create opportunities for networking, collaboration, and knowledge exchange.
                  </p>
                  <p>
                    Through strategic delegations and exhibitions, we enable cross-border partnerships, showcase innovation, and drive technology-led growth across both nations.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <DelegationCard
                  icon={HeartHandshake}
                  title="Trade Delegations"
                  description="Organized business delegations connecting UK and Pakistan technology companies."
                  index={0}
                  brandColor={BRAND_COLORS.blue}
                />
                <DelegationCard
                  icon={Building2}
                  title="Technology Exhibitions"
                  description="Showcasing innovation and facilitating partnerships at major tech events."
                  index={1}
                  brandColor={BRAND_COLORS.green}
                />
                <DelegationCard
                  icon={Network}
                  title="Networking Events"
                  description="Exclusive networking opportunities for industry leaders and entrepreneurs."
                  index={2}
                  brandColor={BRAND_COLORS.red}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
      </Section>

      {/* What We Offer */}
      <Section className="relative overflow-hidden">
        {/* Subtle animated background gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#1E40AF]/5 via-transparent to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#00B140]/5 via-transparent to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E40AF]/20 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto relative z-10">
            <SectionHeader
              title="What We Offer"
              subtitle="Comprehensive support for trade delegations and technology exhibitions."
              align="center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <OfferCard
                icon={Calendar}
                title="Event Organization"
                description="End-to-end planning and execution of trade delegations and exhibitions."
                index={0}
                brandColor={BRAND_COLORS.blue}
              />
              <OfferCard
                icon={Users}
                title="Participant Matching"
                description="Strategic matching of UK and Pakistan businesses for meaningful partnerships."
                index={1}
                brandColor={BRAND_COLORS.green}
              />
              <OfferCard
                icon={MapPin}
                title="Venue Coordination"
                description="Premium venues and facilities for exhibitions and networking events."
                index={2}
                brandColor={BRAND_COLORS.red}
              />
              <OfferCard
                icon={Briefcase}
                title="Business Development"
                description="Support for B2B meetings and partnership development opportunities."
                index={3}
                brandColor={BRAND_COLORS.blue}
              />
              <OfferCard
                icon={Target}
                title="Market Insights"
                description="Access to market intelligence and cross-border business opportunities."
                index={4}
                brandColor={BRAND_COLORS.green}
              />
              <OfferCard
                icon={TrendingUp}
                title="Growth Opportunities"
                description="Platforms to showcase products and expand into new markets."
                index={5}
                brandColor={BRAND_COLORS.red}
              />
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E40AF]/20 to-transparent" />
      </Section>

      {/* Benefits Section */}
      <Section variant="dark" className="relative overflow-hidden">
        {/* Animated brand color orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-bl from-[#1E40AF]/6 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -25, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-tr from-[#00B140]/6 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              x: [0, 25, 0],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-[#2563EB]/5 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <SectionHeader
                  title="Benefits of Participating"
                  subtitle="Why join our trade delegations and exhibitions."
                  align="left"
                />
                <div className="mt-8 space-y-4">
                  {[
                    { text: "Direct access to key decision-makers and industry leaders", color: BRAND_COLORS.blue },
                    { text: "Opportunities to showcase products and services", color: BRAND_COLORS.green },
                    { text: "Strategic networking with potential partners and clients", color: BRAND_COLORS.red },
                    { text: "Market insights and cross-border business intelligence", color: BRAND_COLORS.blue },
                    { text: "Platform for establishing thought leadership", color: BRAND_COLORS.green },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                          ease: "easeInOut",
                        }}
                      >
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                      </motion.div>
                      <span className="text-[rgba(234,242,255,0.85)] leading-relaxed">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <motion.div
                  className="bg-gradient-to-br from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-3xl border border-[rgba(234,242,255,0.15)] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                  whileHover={{
                    borderColor: "rgba(30, 64, 175, 0.3)",
                    boxShadow: "0_12px_40px_rgba(30,64,175,0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-[#1E40AF]/20 border border-[#1E40AF]/30 flex items-center justify-center"
                        animate={{
                          boxShadow: [
                            "0 0 0px rgba(30, 64, 175, 0.3)",
                            "0 0 20px rgba(30, 64, 175, 0.5)",
                            "0 0 0px rgba(30, 64, 175, 0.3)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Calendar className="w-6 h-6 text-[#1E40AF]" />
                      </motion.div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-[#EAF2FF]">Upcoming Events</h3>
                        <p className="text-sm text-[rgba(234,242,255,0.7)]">Stay informed about upcoming delegations</p>
                      </div>
                    </div>
                    <div className="space-y-4 pt-4 border-t border-[rgba(234,242,255,0.1)]">
                      {[
                        { step: "1", title: "Register Interest", desc: "Express your interest in upcoming events", color: BRAND_COLORS.blue },
                        { step: "2", title: "Get Matched", desc: "We'll connect you with relevant participants", color: BRAND_COLORS.green },
                        { step: "3", title: "Participate", desc: "Join delegations and exhibitions", color: BRAND_COLORS.red },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3"
                          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                          <motion.div
                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border"
                            style={{
                              backgroundColor: `${item.color}20`,
                              borderColor: `${item.color}30`,
                            }}
                            animate={{
                              scale: [1, 1.15, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3,
                              ease: "easeInOut",
                            }}
                          >
                            <span className="text-xs font-bold" style={{ color: item.color }}>{item.step}</span>
                          </motion.div>
                          <div>
                            <h4 className="font-semibold text-[#EAF2FF] mb-1">{item.title}</h4>
                            <p className="text-sm text-[rgba(234,242,255,0.7)]">{item.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
      </Section>

      {/* CTA Section */}
      <Section variant="dark" className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#1E40AF] via-[#00B140] to-[#2563EB] rounded-full opacity-[0.15] blur-[250px]"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center relative z-10 py-20">
            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-[#EAF2FF]"
            >
              Join Our Next Delegation
            </motion.h2>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-[rgba(234,242,255,0.85)] mb-10 leading-relaxed"
            >
              Connect with technology leaders and explore cross-border opportunities.
            </motion.p>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button href="/events" variant="primary" size="lg" showArrow>
                View Events
              </Button>
              <Button href="/contact" variant="glass" size="lg" showArrow>
                Contact Us
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
      </Section>
    </div>
  );
}


// Delegation Card Component
function DelegationCard({ icon: Icon, title, description, index, brandColor }: { icon: any; title: string; description: string; index: number; brandColor: string }) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <motion.div
        className="bg-gradient-to-br from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-2xl border border-[rgba(234,242,255,0.15)] p-6 h-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 relative overflow-hidden"
        whileHover={{
          borderColor: `${brandColor}40`,
          boxShadow: `0_12px_40px_${brandColor}20`,
        }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${brandColor}08, transparent)`,
          }}
          animate={{
            opacity: [0, 0.1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="flex items-start gap-4 relative z-10">
          <motion.div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border"
            style={{
              backgroundColor: `${brandColor}20`,
              borderColor: `${brandColor}30`,
            }}
            whileHover={{
              scale: 1.15,
            }}
            animate={{
              boxShadow: [
                `0 0 0px ${brandColor}40`,
                `0 0 15px ${brandColor}50`,
                `0 0 0px ${brandColor}40`,
              ],
            }}
            transition={{
              boxShadow: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: {
                duration: 0.3,
              },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-6 h-6" style={{ color: brandColor }} />
            </motion.div>
          </motion.div>
          <div>
            <h3 className="font-heading font-semibold text-lg mb-2 text-[#EAF2FF]">{title}</h3>
            <p className="text-sm text-[rgba(234,242,255,0.75)] leading-relaxed">{description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Offer Card Component
function OfferCard({ icon: Icon, title, description, index, brandColor }: { icon: any; title: string; description: string; index: number; brandColor: string }) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <motion.div
        className="bg-white rounded-2xl border border-[rgba(11,18,32,0.10)] p-6 h-full shadow-sm transition-all duration-300 relative overflow-hidden"
        whileHover={{
          borderColor: `${brandColor}40`,
          boxShadow: `0_12px_40px_${brandColor}15`,
        }}
      >
        {/* Subtle animated background gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${brandColor}05, transparent)`,
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        />
        <div className="flex flex-col relative z-10">
          <motion.div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 border"
            style={{
              background: `linear-gradient(135deg, ${brandColor}15, ${brandColor}08)`,
              borderColor: `${brandColor}30`,
            }}
            whileHover={{
              scale: 1.15,
            }}
            animate={{
              boxShadow: [
                `0 0 0px ${brandColor}30`,
                `0 0 20px ${brandColor}40`,
                `0 0 0px ${brandColor}30`,
              ],
            }}
            transition={{
              boxShadow: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              },
              scale: {
                duration: 0.3,
              },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-7 h-7" style={{ color: brandColor }} />
            </motion.div>
          </motion.div>
          <h3 className="font-heading font-semibold text-xl mb-3 text-[#0B1220]">{title}</h3>
          <p className="text-sm text-[rgba(11,18,32,0.68)] leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
