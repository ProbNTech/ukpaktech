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
  TrendingUp,
  Award,
  Users,
  Building2,
  Briefcase,
  Target,
  Zap,
  Lightbulb,
  Network,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Rocket,
} from "lucide-react";

export default function UKPakistanTechnologyPartnershipClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <PageHero
        title={
          <span className="relative inline-block">
            UK Pakistan Technology Partnership
            <AnimatedUnderline />
          </span>
        }
        subtitle="Strengthening bilateral technology collaboration between the United Kingdom and Pakistan."
      />

      {/* Partnership Overview */}
      <Section variant="dark" className="relative overflow-hidden">
        {/* Animated background orbs with brand colors */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#1E40AF]/8 via-transparent to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 40, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-[#00B140]/8 via-transparent to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-[#2563EB]/8 via-transparent to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  title="Partnership Overview"
                  subtitle="Connecting governments, enterprises, investors, startups, and academia to drive technology-led growth."
                  align="left"
                />
                <div className="space-y-5 text-[rgba(234,242,255,0.85)] leading-relaxed mt-8 text-base">
                  <p>
                    The UK–Pakistan Technology Partnership represents a strategic collaboration framework designed to strengthen technology, innovation, and digital trade between the United Kingdom and Pakistan. This partnership facilitates cross-border cooperation, knowledge exchange, and joint initiatives that drive sustainable growth in both nations&apos; technology ecosystems.
                  </p>
                  <p>
                    By connecting governments, enterprises, investors, startups, and academia, we create a powerful network that enables technology-led growth, fosters innovation, and builds lasting bridges between our two nations.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <OverviewCard
                  icon={Building2}
                  title="Governments"
                  description="Facilitating policy alignment and bilateral technology cooperation."
                  index={0}
                  color="blue"
                />
                <OverviewCard
                  icon={Briefcase}
                  title="Enterprises & Investors"
                  description="Supporting cross-border trade, investment, and market access."
                  index={1}
                  color="green"
                />
                <OverviewCard
                  icon={Zap}
                  title="Startups & Academia"
                  description="Fostering innovation, talent development, and research collaboration."
                  index={2}
                  color="red"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
      </Section>

      {/* Our Recognition Program */}
      <Section className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#1E40AF]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#00B140]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E40AF]/20 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="relative bg-white rounded-3xl p-8 md:p-12 overflow-hidden"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-50"
                style={{
                  background: "linear-gradient(135deg, #1E40AF, #00B140, #2563EB, #1E40AF)",
                  backgroundSize: "300% 300%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="absolute inset-[2px] bg-white rounded-3xl" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#1E40AF]/10 via-[#00B140]/10 to-[#2563EB]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1E40AF]/20 via-[#00B140]/20 to-[#2563EB]/20 border border-[#1E40AF]/40 flex items-center justify-center flex-shrink-0"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(30, 64, 175, 0.3)",
                        "0 0 30px rgba(0, 177, 64, 0.3)",
                        "0 0 20px rgba(225, 29, 72, 0.3)",
                        "0 0 20px rgba(30, 64, 175, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Award className="w-8 h-8 text-[#1E40AF]" />
                  </motion.div>
                  <div className="flex-1">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-[#0B1220]">
                      Our Recognition Program
                    </h2>
                    <p className="text-lg text-[rgba(11,18,32,0.68)] leading-relaxed">
                      Recognizing Pakistan&apos;s contributions to the UK tech sector through prestigious awards. Our recognition program celebrates exceptional achievements in technology innovation, cross-border collaboration, and leadership that strengthens the UK–Pakistan tech corridor.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E40AF]/20 to-transparent" />
      </Section>

      {/* Why UK Pakistan Tech Council */}
      <Section variant="dark" className="relative overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#1E40AF]/6 to-transparent rounded-full blur-3xl"
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
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-[#00B140]/6 to-transparent rounded-full blur-3xl"
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
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  title="Why UK Pakistan Tech Council"
                  subtitle="An invite-only community of UK-based Pakistan tech leaders, founders, investors, and executives."
                  align="left"
                />
                <div className="mt-8 space-y-4">
                  {[
                    { text: "Exclusive network of leading technology professionals", color: "#1E40AF" },
                    { text: "Strategic partnerships and collaboration opportunities", color: "#00B140" },
                    { text: "Access to funding, resources, and market insights", color: "#2563EB" },
                    { text: "Platform for thought leadership and industry influence", color: "#1E40AF" },
                    { text: "Cross-border innovation and knowledge exchange", color: "#00B140" },
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
                  className="bg-gradient-to-br from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-3xl border border-[rgba(234,242,255,0.15)] p-8"
                  whileHover={{ scale: 1.02, borderColor: "rgba(30, 64, 175, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-6">
                    <motion.div
                      className="flex items-center gap-4"
                      initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E40AF]/20 to-[#1E40AF]/10 border border-[#1E40AF]/30 flex items-center justify-center"
                        animate={{
                          boxShadow: [
                            "0 0 15px rgba(30, 64, 175, 0.3)",
                            "0 0 25px rgba(30, 64, 175, 0.5)",
                            "0 0 15px rgba(30, 64, 175, 0.3)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Users className="w-6 h-6 text-[#1E40AF]" />
                      </motion.div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-[#EAF2FF]">Exclusive Community</h3>
                        <p className="text-sm text-[rgba(234,242,255,0.7)]">Invite-only membership</p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-4"
                      initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B140]/20 to-[#00B140]/10 border border-[#00B140]/30 flex items-center justify-center"
                        animate={{
                          boxShadow: [
                            "0 0 15px rgba(0, 177, 64, 0.3)",
                            "0 0 25px rgba(0, 177, 64, 0.5)",
                            "0 0 15px rgba(0, 177, 64, 0.3)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        <Network className="w-6 h-6 text-[#00B140]" />
                      </motion.div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-[#EAF2FF]">Strategic Network</h3>
                        <p className="text-sm text-[rgba(234,242,255,0.7)]">Connect with industry leaders</p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-4"
                      initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB]/20 to-[#2563EB]/10 border border-[#2563EB]/30 flex items-center justify-center"
                        animate={{
                          boxShadow: [
                            "0 0 15px rgba(225, 29, 72, 0.3)",
                            "0 0 25px rgba(225, 29, 72, 0.5)",
                            "0 0 15px rgba(225, 29, 72, 0.3)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: 1,
                          ease: "easeInOut",
                        }}
                      >
                        <TrendingUp className="w-6 h-6 text-[#2563EB]" />
                      </motion.div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-[#EAF2FF]">Growth Opportunities</h3>
                        <p className="text-sm text-[rgba(234,242,255,0.7)]">Access to resources and funding</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
      </Section>

      {/* Our Partners Make Us Stronger */}
      <Section className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#00B140]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
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
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#2563EB]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E40AF]/20 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto relative z-10">
            <SectionHeader
              title="Our Partners Make Us Stronger"
              subtitle="Collaborating with leading organizations to drive innovation and strengthen the UK–Pakistan tech corridor."
              align="center"
            />
            <div className="mt-12">
              <p className="text-center text-lg text-[rgba(11,18,32,0.68)] leading-relaxed max-w-3xl mx-auto mb-12">
                Our strategic partnerships with governments, enterprises, investors, and academic institutions enable us to create meaningful impact and drive sustainable growth across both nations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { color: "#1E40AF" },
                  { color: "#00B140" },
                  { color: "#2563EB" },
                  { color: "#1E40AF" },
                  { color: "#00B140" },
                  { color: "#2563EB" },
                  { color: "#1E40AF" },
                  { color: "#00B140" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card variant="light" hover className="h-32 flex items-center justify-center relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br opacity-0"
                        style={{
                          background: `linear-gradient(135deg, ${item.color}15, transparent)`,
                        }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="text-center relative z-10">
                        <motion.div
                          className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br border flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                            borderColor: `${item.color}30`,
                          }}
                          animate={{
                            boxShadow: [
                              `0 0 15px ${item.color}30`,
                              `0 0 25px ${item.color}50`,
                              `0 0 15px ${item.color}30`,
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.2,
                            ease: "easeInOut",
                          }}
                        >
                          <Building2 className="w-8 h-8" style={{ color: item.color }} />
                        </motion.div>
                        <p className="text-xs text-[rgba(11,18,255,0.5)]">Partner Logo</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E40AF]/20 to-transparent" />
      </Section>

      {/* Why Partner With Us */}
      <Section variant="dark" className="relative overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#1E40AF]/6 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 40, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-[#00B140]/6 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-[#2563EB]/6 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto relative z-10">
            <SectionHeader
              title="Why Partner With Us"
              subtitle="Unlock opportunities to connect, grow, and lead in the UK–Pakistan technology ecosystem."
              align="center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <BenefitCard
                icon={Network}
                title="Connect with Leading Minds"
                description="Access an exclusive network of tech leaders, founders, and executives."
                index={0}
                color="#1E40AF"
              />
              <BenefitCard
                icon={Rocket}
                title="Launch New Products"
                description="Platform to showcase innovations and reach key stakeholders."
                index={1}
                color="#00B140"
              />
              <BenefitCard
                icon={Lightbulb}
                title="Establish Thought Leadership"
                description="Position your organization as a leader in the tech ecosystem."
                index={2}
                color="#2563EB"
              />
              <BenefitCard
                icon={Target}
                title="Boost Brand Awareness"
                description="Increase visibility and recognition across both markets."
                index={3}
                color="#1E40AF"
              />
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
      </Section>

      {/* Typical Attendees */}
      <Section className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#1E40AF]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#00B140]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E40AF]/20 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto relative z-10">
            <SectionHeader
              title="Typical Attendees"
              subtitle="Join a community of distinguished technology leaders and innovators."
              align="center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Briefcase, title: "Executives", description: "C-suite leaders and senior management", color: "#1E40AF" },
                { icon: Users, title: "CTOs", description: "Chief technology officers and tech leaders", color: "#00B140" },
                { icon: Zap, title: "Founders", description: "Startup founders and entrepreneurs", color: "#2563EB" },
                { icon: TrendingUp, title: "Investors", description: "Venture capitalists and angel investors", color: "#1E40AF" },
                { icon: Award, title: "Senior Tech Leaders", description: "Directors and senior technical professionals", color: "#00B140" },
                { icon: Globe2, title: "Industry Experts", description: "Thought leaders and domain experts", color: "#2563EB" },
                { icon: Building2, title: "Enterprise Leaders", description: "Corporate innovation and strategy heads", color: "#1E40AF" },
                { icon: HeartHandshake, title: "Partnership Directors", description: "Business development and partnership leaders", color: "#00B140" },
              ].map((attendee, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card variant="light" hover className="h-full relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br opacity-0"
                      style={{
                        background: `linear-gradient(135deg, ${attendee.color}10, transparent)`,
                      }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="flex flex-col items-center text-center relative z-10">
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-gradient-to-br border flex items-center justify-center mb-4"
                        style={{
                          background: `linear-gradient(135deg, ${attendee.color}20, ${attendee.color}10)`,
                          borderColor: `${attendee.color}30`,
                        }}
                        animate={{
                          boxShadow: [
                            `0 0 15px ${attendee.color}30`,
                            `0 0 25px ${attendee.color}50`,
                            `0 0 15px ${attendee.color}30`,
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.2,
                          ease: "easeInOut",
                        }}
                      >
                        <attendee.icon className="w-7 h-7" style={{ color: attendee.color }} />
                      </motion.div>
                      <h3 className="font-heading font-semibold text-lg mb-2 text-[#0B1220]">{attendee.title}</h3>
                      <p className="text-sm text-[rgba(11,18,32,0.68)]">{attendee.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E40AF]/20 to-transparent" />
      </Section>

      {/* Final CTA */}
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
              Strengthen the corridor. Build the future.
            </motion.h2>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-[rgba(234,242,255,0.85)] mb-10 leading-relaxed"
            >
              Join us in building a stronger technology partnership between the UK and Pakistan.
            </motion.p>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button href="/membership" variant="primary" size="lg" showArrow>
                Become a Member
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


// Overview Card Component
function OverviewCard({ icon: Icon, title, description, index, color = "blue" }: { icon: any; title: string; description: string; index: number; color?: "blue" | "green" | "red" }) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const colorMap = {
    blue: "#1E40AF",
    green: "#00B140",
    red: "#2563EB",
  };

  const selectedColor = colorMap[color];

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <Card variant="dark" hover className="h-full relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br opacity-0"
          style={{
            background: `linear-gradient(135deg, ${selectedColor}15, transparent)`,
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="flex items-start gap-4 relative z-10">
          <motion.div
            className="w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${selectedColor}25, ${selectedColor}15)`,
              borderColor: `${selectedColor}40`,
            }}
            animate={{
              boxShadow: [
                `0 0 15px ${selectedColor}30`,
                `0 0 25px ${selectedColor}50`,
                `0 0 15px ${selectedColor}30`,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-6 h-6" style={{ color: selectedColor }} />
          </motion.div>
          <div>
            <h3 className="font-heading font-semibold text-lg mb-2 text-[#EAF2FF]">{title}</h3>
            <p className="text-sm text-[rgba(234,242,255,0.75)] leading-relaxed">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

// Benefit Card Component
function BenefitCard({ icon: Icon, title, description, index, color = "#1E40AF" }: { icon: any; title: string; description: string; index: number; color?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <Card variant="dark" hover className="h-full relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br opacity-0"
          style={{
            background: `linear-gradient(135deg, ${color}15, transparent)`,
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="flex flex-col items-center text-center relative z-10">
          <motion.div
            className="w-16 h-16 rounded-2xl border flex items-center justify-center mb-6"
            style={{
              background: `linear-gradient(135deg, ${color}25, ${color}15)`,
              borderColor: `${color}40`,
            }}
            animate={{
              boxShadow: [
                `0 0 20px ${color}30`,
                `0 0 30px ${color}50`,
                `0 0 20px ${color}30`,
              ],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-8 h-8" style={{ color }} />
          </motion.div>
          <h3 className="font-heading font-semibold text-xl mb-3 text-[#EAF2FF]">{title}</h3>
          <p className="text-sm text-[rgba(234,242,255,0.75)] leading-relaxed">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}
