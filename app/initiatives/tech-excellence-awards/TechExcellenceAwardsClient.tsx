"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  Trophy,
  Users,
  Target,
  FileCheck,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  Rocket,
  Building2,
  HeartHandshake,
  Heart,
  Globe,
  Brain,
  Zap,
  ArrowRight,
  Download,
  ChevronRight,
} from "lucide-react";

export default function TechExcellenceAwardsClient() {
  return (
    <div className="pt-0">
      {/* Premium Hero */}
      <PageHero
        title="UK–Pakistan Tech Excellence Awards"
        subtitle="Celebrating Innovation, Partnership and Digital Leadership across Two Nations"
      >
        <motion.p
          initial={useReducedMotion() ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg text-[rgba(234,242,255,0.75)] leading-relaxed"
        >
          Recognizing exceptional achievements in technology innovation and cross-border collaboration that strengthen the UK–Pakistan tech corridor.
        </motion.p>
        <motion.div
          initial={useReducedMotion() ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Button variant="primary" size="lg" showArrow>
            Submit a Nomination
          </Button>
          <Button variant="glass" size="lg" showArrow>
            View Past Winners
          </Button>
        </motion.div>
      </PageHero>

      {/* About the Awards */}
      <Section variant="dark">
        <AnimatedSection>
          
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  title="About the Awards"
                  subtitle="Recognizing exceptional contributions to technology innovation and cross-border collaboration."
                 
                />
                <div className="space-y-5 text-[rgba(234,242,255,0.85)] leading-relaxed text-base">
                  <p>
                    The UK–Pakistan Tech Excellence Awards celebrate the outstanding achievements of individuals, teams, and organizations driving innovation and digital transformation across both nations. These awards recognize excellence in technology development, cross-border collaboration, and leadership that strengthens the UK–Pakistan tech corridor.
                  </p>
                  <p>
                    By honoring innovators, educators, startups, and established companies, the awards program highlights the transformative power of technology partnerships and inspires the next generation of tech leaders to build bridges between the UK and Pakistan.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <ValueCard
                  icon={Trophy}
                  title="Recognition"
                  description="Celebrating outstanding achievements in technology and innovation across both nations."
                  index={0}
                />
                <ValueCard
                  icon={HeartHandshake}
                  title="Bilateral Collaboration"
                  description="Highlighting successful partnerships that strengthen UK–Pakistan tech relations."
                  index={1}
                />
                <ValueCard
                  icon={Globe}
                  title="Global Visibility"
                  description="Elevating award winners to international recognition and new opportunities."
                  index={2}
                />
              </div>
            </div>
        </AnimatedSection>
      </Section>

      {/* Award Categories */}
      <Section>
        <AnimatedSection>
          
            <SectionHeader
              title="Award Categories"
              subtitle="Recognizing excellence across diverse dimensions of technology innovation and leadership."
             
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {categories.map((category, index) => (
                <CategoryCard key={index} category={category} index={index} />
              ))}
            </div>
        </AnimatedSection>
      </Section>

      {/* Nomination Process */}
      <Section variant="dark">
        <AnimatedSection>
          
            <SectionHeader
              title="Nomination Process"
              subtitle="A transparent, structured process designed to identify and celebrate true excellence."
             
            />
            <NominationStepper />
        </AnimatedSection>
      </Section>

      {/* Judging and Evaluation */}
      <Section>
        <AnimatedSection>
          
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <SectionHeader
                  title="Judging and Evaluation"
                  subtitle="Transparent, merit-based scoring by an independent jury of senior experts."
                 
                />
                <div className="space-y-5 text-[rgba(11,18,32,0.68)] leading-relaxed text-base">
                  <p>
                    All nominations are evaluated by an independent jury of 6–10 senior experts from both the UK and Pakistan. The judging process is designed to be transparent, merit-based, and free from bias, ensuring that recognition goes to those who truly exemplify excellence.
                  </p>
                  <p>
                    Our jury members bring decades of combined experience in technology, innovation, business, and cross-border collaboration, providing comprehensive evaluation across multiple dimensions of excellence.
                  </p>
                </div>
                <div className="mt-8">
                  <h3 className="font-heading font-bold text-lg mb-4 text-[#0B1220]">Evaluation Criteria</h3>
                  <ul className="space-y-3">
                    {evaluationCriteria.map((criterion, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#2D5BFF] flex-shrink-0 mt-0.5" />
                        <span className="text-[rgba(11,18,32,0.68)]">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-[#2D5BFF]/10 to-[#00B140]/5 border border-[#2D5BFF]/20 rounded-2xl p-8 sticky top-8">
                  <div className="w-12 h-12 rounded-lg bg-[#2D5BFF]/20 text-[#2D5BFF] flex items-center justify-center mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3 text-[#0B1220]">Independent Jury</h3>
                  <p className="text-sm text-[rgba(11,18,32,0.68)] leading-relaxed mb-4">
                    6–10 senior experts from both UK and Pakistan with decades of combined experience in technology, innovation, and cross-border collaboration.
                  </p>
                  <div className="pt-4 border-t border-[rgba(11,18,32,0.10)]">
                    <p className="text-xs text-[rgba(11,18,32,0.5)] italic">
                      Transparent, merit-based evaluation process
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </AnimatedSection>
      </Section>

      {/* Past Moments / Event Atmosphere */}
      <Section variant="dark">
        <AnimatedSection>
          
            <SectionHeader
              title="Past Moments"
              subtitle="A night of recognition with leaders, founders, and innovators across both nations."
             
            />
            <EventGallery />
        </AnimatedSection>
      </Section>

      {/* Nominate CTA Section */}
      <Section>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#2D5BFF] via-[#00B140] to-[#2D5BFF] rounded-full opacity-[0.08] blur-[200px]" />
        </div>
        <AnimatedSection>
          
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-[#0B1220]">
              Nominate the innovators shaping the UK–Pakistan tech corridor
            </h2>
            <p className="text-lg text-[rgba(11,18,32,0.68)] mb-8 leading-relaxed">
              Help us recognize the exceptional individuals and organizations driving technology excellence and cross-border collaboration.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="primary" size="lg" className="bg-gradient-to-r from-[#2D5BFF] to-[#1E3A8A]">
                  Submit a Nomination
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="secondary" size="lg" href="#">
                  <Download className="w-4 h-4" />
                  Download Nomination Guidelines
                </Button>
              </motion.div>
            </div>
        </AnimatedSection>
      </Section>

      {/* FAQ */}
      <Section variant="dark">
        <AnimatedSection>
          
            <SectionHeader
              title="Frequently Asked Questions"
              subtitle="Common questions about the UK–Pakistan Tech Excellence Awards."
             
            />
            <div className="space-y-4 mt-12">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
              ))}
            </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}

// Data
const categories = [
  { title: "Innovator of the Year", description: "Recognizing exceptional innovation and breakthrough contributions to technology.", tag: "Individual", icon: Sparkles },
  { title: "Woman in Tech Leadership Award", description: "Celebrating outstanding female leaders driving technology transformation.", tag: "Individual", icon: Users },
  { title: "Emerging Young Technologist", description: "Honoring promising young talent making significant impact in tech.", tag: "Individual", icon: Rocket },
  { title: "Tech Educator / Mentor of the Year", description: "Recognizing educators and mentors shaping the next generation.", tag: "Individual", icon: GraduationCap },
  { title: "Emerging AI/FinTech Leader", description: "Celebrating leaders at the forefront of AI and financial technology.", tag: "Individual", icon: Brain },
  { title: "Startup of the Year", description: "Recognizing exceptional startups from Pakistan, UK, or joint ventures.", tag: "Startup", icon: Zap },
  { title: "Best UK–Pakistan Collaboration Project", description: "Honoring outstanding collaborative projects between both nations.", tag: "Collaboration", icon: HeartHandshake },
  { title: "Excellence in AI / FinTech / HealthTech / EdTech", description: "Recognizing sector-specific excellence across key technology domains.", tag: "Sector", icon: Target },
  { title: "R&D Excellence Award", description: "Celebrating groundbreaking research and development achievements.", tag: "Research", icon: Brain },
  { title: "Tech for Social Impact", description: "Honoring technology solutions that create positive social change.", tag: "Impact", icon: Heart },
  { title: "Outstanding Digital Export Achievement", description: "Recognizing exceptional success in digital exports and international growth.", tag: "Achievement", icon: Globe },
  { title: "Lifetime Contribution to Tech Diplomacy", description: "Celebrating lifelong dedication to strengthening UK–Pakistan tech relations.", tag: "Special Recognition", icon: Trophy },
];

const evaluationCriteria = [
  "Innovation and originality",
  "Impact and scalability",
  "Collaboration and inclusivity",
  "Sustainability and export potential",
];

const faqs = [
  {
    question: "Who can nominate?",
    answer: "Nominations are open to individuals, organizations, and institutions with knowledge of exceptional achievements in UK–Pakistan technology collaboration. Self-nominations are also welcome.",
  },
  {
    question: "Who is eligible?",
    answer: "Eligibility varies by category. Generally, nominees should have demonstrated significant contributions to technology innovation, cross-border collaboration, or digital leadership within the UK–Pakistan tech ecosystem.",
  },
  {
    question: "Is this invite-only?",
    answer: "No, the awards are open to all eligible nominations. We encourage submissions from across the UK–Pakistan tech community.",
  },
  {
    question: "How are winners selected?",
    answer: "Winners are selected through a transparent evaluation process by an independent jury of 6–10 senior experts from both the UK and Pakistan, using merit-based scoring across multiple criteria.",
  },
  {
    question: "When will nominations close?",
    answer: "Nomination deadlines will be announced soon. Please check back for updates or download the nomination guidelines for the latest information.",
  },
];


// Value Card Component
function ValueCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[rgba(255,255,255,0.06)] backdrop-blur-sm rounded-xl border border-[rgba(234,242,255,0.14)] p-6"
    >
      <div className="w-12 h-12 rounded-lg bg-[#2D5BFF]/20 text-[#2D5BFF] flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-heading font-bold text-lg mb-2 text-[#EAF2FF]">{title}</h3>
      <p className="text-sm text-[rgba(234,242,255,0.75)] leading-relaxed">{description}</p>
    </motion.div>
  );
}

// Category Card Component
function CategoryCard({
  category,
  index,
}: {
  category: { title: string; description: string; tag: string; icon: React.ComponentType<{ className?: string }> };
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
      className="group relative bg-[#F6F8FC] rounded-xl border-2 border-[rgba(11,18,32,0.10)] p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r from-[#2D5BFF] via-[#00B140] to-[#2D5BFF]" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-[#2D5BFF]/10 text-[#2D5BFF] flex items-center justify-center">
            <Icon className="w-6 h-6" />
          </div>
          <span className="px-2 py-1 rounded-md bg-[#2D5BFF]/10 border border-[#2D5BFF]/20 text-[#2D5BFF] text-xs font-medium">
            {category.tag}
          </span>
        </div>
        <h3 className="font-heading font-bold text-lg mb-2 text-[#0B1220]">{category.title}</h3>
        <p className="text-sm text-[rgba(11,18,32,0.68)] leading-relaxed">{category.description}</p>
      </div>
    </motion.div>
  );
}

// Nomination Stepper Component
function NominationStepper() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const steps = [
    { number: 1, title: "Eligibility", description: "Review category requirements and ensure nominee meets eligibility criteria.", icon: CheckCircle2 },
    { number: 2, title: "Submission", description: "Complete nomination form with supporting documentation and evidence.", icon: FileCheck },
    { number: 3, title: "Evaluation", description: "Independent jury reviews and scores nominations based on established criteria.", icon: Target },
    { number: 4, title: "Recognition", description: "Winners announced and celebrated at the annual awards ceremony.", icon: Trophy },
  ];

  return (
    <div ref={containerRef} className="relative mt-12">
      {/* Connecting Line (Desktop Only) */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 z-0">
        <motion.div
          className="h-full bg-gradient-to-r from-[#2D5BFF] via-[#00B140] to-[#2D5BFF] opacity-20"
          initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
          animate={shouldReduceMotion || isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative bg-[rgba(255,255,255,0.06)] backdrop-blur-sm rounded-2xl border border-[rgba(234,242,255,0.14)] p-6 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(234,242,255,0.25)] transition-all duration-500 overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ backgroundColor: index % 2 === 0 ? "#2D5BFF" : "#00B140" }}
              />
              <motion.div
                className="relative mb-6"
                whileHover={shouldReduceMotion ? {} : { scale: 1.1, transition: { duration: 0.3 } }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg bg-gradient-to-br from-[#2D5BFF] to-[#1E3A8A]">
                  {step.number}
                </div>
                <motion.div
                  className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ backgroundColor: "#2D5BFF" }}
                />
              </motion.div>
              <div className="w-10 h-10 rounded-lg bg-[#2D5BFF]/20 text-[#2D5BFF] flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-3 text-[#EAF2FF]">{step.title}</h3>
              <p className="text-sm text-[rgba(234,242,255,0.75)] leading-relaxed">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// Event Gallery Component
function EventGallery() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const placeholders = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div ref={containerRef} className="mt-12">
      <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
        {placeholders.map((_, index) => (
          <motion.div
            key={index}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
            animate={shouldReduceMotion || isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05, transition: { duration: 0.3 } }}
            className="flex-shrink-0 w-64 h-48 rounded-xl bg-gradient-to-br from-[#2D5BFF]/20 via-[#00B140]/10 to-[#2D5BFF]/20 border border-[rgba(234,242,255,0.14)] overflow-hidden"
          >
            <div className="w-full h-full bg-gradient-to-br from-[rgba(45,91,255,0.1)] to-[rgba(0,177,64,0.05)] flex items-center justify-center">
              <Trophy className="w-12 h-12 text-[rgba(234,242,255,0.3)]" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// FAQ Item Component
function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[rgba(255,255,255,0.06)] backdrop-blur-sm rounded-xl border border-[rgba(234,242,255,0.14)] p-6"
    >
      <h3 className="font-heading font-bold text-lg mb-3 text-[#EAF2FF]">{question}</h3>
      <p className="text-sm text-[rgba(234,242,255,0.75)] leading-relaxed">{answer}</p>
    </motion.div>
  );
}
