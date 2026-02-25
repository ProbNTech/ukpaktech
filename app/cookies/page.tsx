"use client";

import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { motion, useReducedMotion } from "framer-motion";
import { Cookie, Settings, Eye, Globe2, Mail, CheckCircle2, Shield } from "lucide-react";

const cookieTypes = [
  {
    icon: Shield,
    title: "Essential Cookies",
    accent: "border-[#2563EB]",
    desc: "Required for the website to function properly. These cannot be disabled as they are necessary for core features like security, network management, and accessibility.",
  },
  {
    icon: Eye,
    title: "Analytics Cookies",
    accent: "border-[#22C55E]",
    desc: "Help us understand how visitors interact with our website by collecting and reporting information anonymously. This data helps us improve site performance and user experience.",
  },
  {
    icon: Settings,
    title: "Preference Cookies",
    accent: "border-[#2563EB]",
    desc: "Remember your settings and preferences such as language, region, and display options so you don\u2019t have to re-enter them each time you visit.",
  },
  {
    icon: Globe2,
    title: "Marketing Cookies",
    accent: "border-[#C41E3A]",
    desc: "Used to deliver relevant advertisements and track the effectiveness of marketing campaigns. These are only activated with your explicit consent.",
  },
];

export default function CookiesPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <PageHero
        title="Cookies Policy"
        subtitle="How we use cookies and similar technologies on our website."
        image="/image/london-images/data-security-privacy.jpg"
      />

      {/* What Are Cookies */}
      <Section variant="light">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-widest mb-6">Last updated: 2025</p>
            <div className="bg-white border border-[#D8D5CF] border-l-4 border-l-[#2563EB] rounded p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EEECEA] flex-shrink-0">
                  <Cookie className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-[#1C1F2E] text-xl">What Are Cookies</h2>
                </div>
              </div>
              <p className="text-[#3D4152] text-sm leading-relaxed">
                Cookies are small text files stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our site.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* How We Use Cookies */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Cookie Types"
            title="How We Use Cookies"
            subtitle="We use cookies for essential website functionality, performance analytics, and to improve your user experience."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {cookieTypes.map((cookie, i) => {
              const Icon = cookie.icon;
              return (
                <motion.div
                  key={cookie.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`bg-white border border-[#D8D5CF] border-l-4 ${cookie.accent} rounded p-6 hover:border-[#2563EB]/40 transition-colors duration-300`}
                >
                  <Icon className="w-6 h-6 text-[#2563EB] mb-3" strokeWidth={1.5} />
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-base mb-2">{cookie.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-[#3D4152] text-sm leading-relaxed">{cookie.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* Managing Cookies & Third-Party */}
      <Section variant="light">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-[#D8D5CF] border-l-4 border-l-[#22C55E] rounded p-6"
            >
              <Settings className="w-6 h-6 text-[#22C55E] mb-3" strokeWidth={1.5} />
              <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">Managing Cookies</h3>
              <div className="h-px bg-[#D8D5CF] mb-3" />
              <p className="text-[#3D4152] text-sm leading-relaxed mb-4">
                You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.
              </p>
              <ul className="space-y-2">
                {["Refuse or accept cookies", "Delete existing cookies", "Set preferences for certain websites"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-[#3D4152] text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white border border-[#D8D5CF] border-l-4 border-l-[#C41E3A] rounded p-6"
            >
              <Globe2 className="w-6 h-6 text-[#C41E3A] mb-3" strokeWidth={1.5} />
              <h3 className="font-heading font-bold text-[#1C1F2E] text-lg mb-2">Third-Party Cookies</h3>
              <div className="h-px bg-[#D8D5CF] mb-3" />
              <p className="text-[#3D4152] text-sm leading-relaxed">
                Some cookies on our website are set by third-party services we use, such as analytics providers and social media platforms. We do not control these cookies, and you should refer to the relevant third-party privacy policies for more information.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Contact */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <Mail className="w-8 h-8 text-[#2563EB] mb-4" strokeWidth={1.5} />
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl leading-tight mb-4">
              Questions About Cookies?
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-2">
              If you have questions about our use of cookies, please contact us at{" "}
              <a href="mailto:info@uptech.org.uk" className="text-[#2563EB] hover:text-[#60A5FA] transition-colors">
                info@uptech.org.uk
              </a>.
            </p>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
