"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import {
  Cookie, Shield, Settings, BarChart3, LineChart, Megaphone,
  Globe2, Lock, Eye, FileText, Bell, Mail, RefreshCw, Users,
  CheckCircle2,
} from "lucide-react";

const cookieTypes = [
  { icon: Shield, title: "Necessary", color: "#2563EB", desc: "These cookies are necessary in order to allow the Site to work correctly. They enable you to access the Site, move around, and access different services, features, and tools. Examples include remembering previous actions (e.g. entered text) when navigating back to a page in the same session. These cookies cannot be disabled." },
  { icon: Settings, title: "Functionality", color: "#22C55E", desc: "These cookies remember your settings and preferences and the choices you make (such as language or regional preferences) in order to help us personalize your experience and offer you enhanced functionality and content." },
  { icon: Lock, title: "Security", color: "#C41E3A", desc: "These cookies can help us identify and prevent security risks. They may be used to store your session information to prevent others from changing your password without your login information." },
  { icon: BarChart3, title: "Performance", color: "#2563EB", desc: "These cookies can help us collect information to help us understand how you use our Site, for example whether you have viewed messages or specific pages and how long you spent on each page. This helps us improve the performance of our Site." },
  { icon: LineChart, title: "Analytics", color: "#22C55E", desc: "These cookies collect information regarding your activity on our Site to help us learn more about which features are popular with our users and how our Site can be improved." },
  { icon: Megaphone, title: "Advertising", color: "#C41E3A", desc: "These cookies are placed in order to deliver content, including ads relevant and meaningful to you and your interests. They may also be used to deliver targeted advertising or to limit the number of times you see an advertisement. This can help us track how efficient advertising campaigns are, both for our own Services and for other websites. Such cookies may track your browsing habits and activity when visiting our Site and those of third parties" },
];

const additionalCookieDetails = [
  { title: "User Preference", desc: "User preference \u2013 we set these to customize your website preferences, for example dismissing a popup not to show again in your browser or setting your live chat preferences." },
  { title: "Analytics", desc: "Analytics \u2013 we use these to understand how the website is being used in order to improve the user experience. Your user data is all anonymous. You can find out more about Google\u2019s position on privacy as regards its analytics service at http://www.google.co.uk/intl/en/analytics/privacyoverview.html" },
  { title: "AdWords", desc: "AdWords: Using Google AdWords code, we are able to see which pages helped lead to contact form submissions. This allows us to make better use of our paid search budget. We also log when users view specific pages, allowing us to provide targeted advertising in the future." },
  { title: "LinkedIn", desc: "LinkedIn: We use LinkedIn advertising conversion tracking and re-targeting pixels, which allows us to collect or receive information from your website and elsewhere on the internet and use that information to provide measurement services and target future advertising." },
  { title: "CRM", desc: "CRM: We use HubSpot as our CRM and cookies are set by it to log user preferences and activity." },
  { title: "Third Party Cookies", desc: "Third party cookies: We use a number of external web services. For example, to display slideshows we sometimes use SlideShare; to show videos we use YouTube and Vimeo, to encourage social shares we use social media like and share buttons. We cannot prevent these sites, or external domains, from setting their own cookies and collecting information on your usage. If you are not logged in to these external services then they will not know who you are but are likely to gather anonymous usage information e.g. number of views, plays, loads etc." },
];

const dataSubjectRights = [
  { icon: Eye, title: "Right to Access", color: "#2563EB", desc: "Right to Access: Data subjects reserve the right to request and obtain confirmation that data is or is not being collected on them and if so, exactly what data is being collected, how, where, and for what purposes. This data can be manually requested via info@uptech.org.uk and provided in an electronic format free of charge." },
  { icon: Users, title: "Right to Be Forgotten", color: "#22C55E", desc: "Right to Be Forgotten: Should data subjects at any time wish to withdraw their consent and no longer allow UK-PAKISTAN TECH COUNCIL LTD (UPTECH) International to store their personal data, this request can be manually made via info@uptech.org.uk Please be sure to include the full name (including any prefixes) and email address of whom the data is in reference too, so that all data relating to the data subject in question can be accurately removed." },
  { icon: FileText, title: "Data Portability", color: "#C41E3A", desc: "Data Portability: Similar to the Right to Access, Data Portability requires that data subjects are able to request, obtain, and/or transfer possession of collected data at any time. As mentioned above, this data can be manually requested via info@uptech.org.uk and provided in an electronic format free of charge. Should the data subject wish to transfer the possession of the data stored by UK-PAKISTAN TECH COUNCIL LTD (UPTECH), please be sure to also include the full name (including any prefixes) and the relevant contact information relating to the individual or organization whom you wish the data to be transferred to." },
  { icon: Bell, title: "Breach Notification", color: "#2563EB", desc: "Breach Notification: Should UK-PAKISTAN TECH COUNCIL LTD (UPTECH) encounter a breach/unauthorized access of personal data that is likely to \u201Cresult in a risk for the rights and freedoms of individuals\u201D, UK-PAKISTAN TECH COUNCIL LTD (UPTECH) will ensure that a notification is made within 72 hours of becoming aware of the breach." },
];

export default function CookiesPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[520px]">
        <Image src="/image/london-images/data-security-privacy.jpg" alt="" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(135deg, rgba(10,14,30,0.92) 0%, rgba(10,14,30,0.72) 50%, rgba(10,14,30,0.50) 100%)" }} />
        <div className="absolute inset-0 z-[2] opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 60V0h60' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E\")", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 xl:px-20 pt-20 pb-16">
          <motion.div initial={shouldReduceMotion ? {} : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/60">Data & Privacy</span>
            </div>
          </motion.div>
          <motion.h1 initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-white mb-6 max-w-3xl">
            Cookies{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60a5fa]">Policy</span>
          </motion.h1>
          <motion.p initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-lg text-white/50 max-w-2xl leading-relaxed">How we use cookies and similar technologies on our website.</motion.p>
        </div>
      </section>

      {/* ── Introduction — Light section ───────────────────────────── */}
      <section className="relative bg-[#EEECEA] py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-3">Overview</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">About Our Cookies</h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-transparent mb-4" />
            </div>
            <div className="max-w-4xl space-y-6">
              <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E] pt-2">What Are Cookies</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <div className="space-y-5">
                  <p className="text-base text-[#5A5F72] leading-relaxed">Our website uses cookies, which identify technologies that your computer receives when you visit certain websites. We do not match or correlate this information with any customer information that you submit to UK-PAKISTAN TECH COUNCIL LTD (UPTECH).</p>
                  <p className="text-base text-[#5A5F72] leading-relaxed">Some of our web pages utilize {"\u201C"}cookies{"\u201D"} and other tracking technologies. Cookies are small pieces of data, stored in text files, that are stored on your computer or other devices when websites are loaded in a browser. They are widely used to {"\u2018"}remember{"\u2019"} you and your preferences, either for a single visit (through a {"\u2018"}session cookie{"\u2019"}) or for multiple repeat visits (using a {"\u2018"}persistent cookie{"\u2019"}). They ensure consistent and efficient experience for visitors and perform essential functions such as allowing users to register and remain logged in. Cookies may be set by the site that you are visiting (known as {"\u2018"}first-party cookies{"\u2019"}), or by other websites who serve up content on that site ({"\u2018"}third party cookies{"\u2019"}).</p>
                  <p className="text-base text-[#5A5F72] leading-relaxed">Tracking technologies may record information such as Internet domain and host names; Internet protocol (IP) addresses; browser software and operating system types; clickstream patterns; and dates and times that our site is accessed. Our use of cookies and other tracking technologies allows us to improve our web site and your web experience. We may also analyze information that does not contain personal information for trends and statistics.</p>
                  <p className="text-base text-[#5A5F72] leading-relaxed">Cookies are text files placed on your computer to collect standard internet log information and visitor behavior information. This information is used to track visitor use of the website and to compile statistical reports on website activity. For further information visit{" "}<a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:text-[#60A5FA] transition-colors">www.aboutcookies.org</a>{" "}or{" "}<a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:text-[#60A5FA] transition-colors">www.allaboutcookies.org</a>.</p>
                  <p className="text-base text-[#5A5F72] leading-relaxed">You can set your browser not to accept cookies, and the above websites tell you how to remove cookies from your browser. However, in a few cases, some of our website features may not function as a result.</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Links to Other Websites — Light alt section ─────────────── */}
      <section className="relative py-10 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#22C55E] mb-3">External Links</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">Links to Other Websites</h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#22C55E] to-transparent mb-4" />
            </div>
            <div className="max-w-4xl">
              <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center flex-shrink-0">
                    <Globe2 className="w-5 h-5 text-[#22C55E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E] pt-2">Third-Party Websites</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <div className="space-y-5">
                  <p className="text-base text-[#5A5F72] leading-relaxed">Our website may contain links to other websites run by other organizations. This policy applies only to our website, so we encourage you to read the privacy statements on the other websites you visit. We cannot be responsible for the privacy policies and practices of other websites even if you access them using links from our website.</p>
                  <p className="text-base text-[#5A5F72] leading-relaxed">In addition, if you linked to our website from a third-party site, we cannot be responsible for the privacy policies and practices of the owners and operators of that third party site and recommend that you check the privacy policy of that third party site.</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Cookie Types — Light section ───────────────────────────── */}
      <section className="relative bg-[#EEECEA] py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-3">Cookie Categories</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">We Use These Cookies</h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-transparent mb-4" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cookieTypes.map((cookie, i) => {
                const Icon = cookie.icon;
                return (
                  <motion.div key={cookie.title} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden shadow-sm">
                    <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full transition-opacity duration-300 opacity-40 group-hover:opacity-100" style={{ background: `linear-gradient(to bottom, ${cookie.color}, ${cookie.color}40)` }} />
                    <div className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${cookie.color}10`, border: `1px solid ${cookie.color}20` }}>
                      <div className="absolute inset-[-6px] rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" style={{ backgroundColor: cookie.color }} />
                      <Icon className="relative z-10 w-5 h-5" style={{ color: cookie.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{cookie.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-base text-[#7A7E8F] leading-relaxed">{cookie.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Additional Cookie Details — Light alt section ───────────── */}
      <section className="relative py-10 overflow-hidden bg-[#F5F4F2]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C41E3A]/20 to-transparent" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C41E3A] mb-3">Detailed Information</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">Additional Cookie Details</h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#C41E3A] to-transparent mb-4" />
            </div>
            <div className="grid lg:grid-cols-2 gap-5">
              {additionalCookieDetails.map((item, i) => (
                <motion.div key={item.title} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden shadow-sm">
                  <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full transition-opacity duration-300 opacity-40 group-hover:opacity-100 bg-gradient-to-b from-[#C41E3A] to-[#C41E3A]/25" />
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-3">{item.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-base text-[#7A7E8F] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.4, delay: 0.3 }} className="mt-8 relative bg-gradient-to-br from-[#2563EB]/10 to-[#2563EB]/10 border border-[#2563EB]/20 rounded-xl p-6 overflow-hidden max-w-4xl">
              <div className="relative">
                <Cookie className="w-5 h-5 text-[#2563EB] mb-3" strokeWidth={1.5} />
                <p className="text-[#5A5F72] text-sm leading-relaxed">The specific names and types of cookies, web beacons, and other similar technologies we use may change from time to time. However, the cookies we use generally fall into one of the following categories:</p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Browser Settings — Light section ────────────────────────── */}
      <section className="relative bg-white py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C41E3A]/20 to-transparent" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C41E3A] mb-3">Cookie Management</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">Browser Settings</h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#C41E3A] to-transparent mb-4" />
            </div>
            <div className="max-w-4xl">
              <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C41E3A]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#C41E3A]/10 border border-[#C41E3A]/20 flex items-center justify-center flex-shrink-0">
                    <Settings className="w-5 h-5 text-[#C41E3A]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1C1F2E] pt-2">Managing Your Cookies</h3>
                </div>
                <div className="h-px bg-[#D8D5CF] mb-5" />
                <p className="text-base text-[#5A5F72] leading-relaxed">Your web browser may be set to accept cookies automatically but can be changed to decline them. If you don{"\u2019"}t want to receive cookies, you can modify your browser so that it notifies you when cookies are sent to it or you can refuse cookies altogether. You can also delete cookies that have already been set. The Help section of the toolbar on most browsers will tell you how to set your browser to prevent new cookies or disable cookies altogether, or you should browse the site using your browser{"\u2019"}s anonymous usage setting (called {"\u201C"}Incognito{"\u201D"} in Chrome, {"\u201C"}InPrivate{"\u201D"} for Internet Explorer, {"\u201C"}Private Browsing{"\u201D"} in Firefox and Safari). For more help,{" "}<a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#C41E3A] hover:text-[#ef4444] transition-colors">www.aboutcookies.org</a>{" "}contains information on how to do this on a wide variety of desktop browsers.</p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Data Subject Rights — Light section ─────────────────────── */}
      <section className="relative bg-[#EEECEA] py-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-3">GDPR Compliance</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">Data Subject Rights</h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-transparent mb-4" />
              <p className="text-[#7A7E8F] text-base max-w-3xl">GDPR compliance requires data subjects to be granted certain rights. What follows is not an exhaustive list, but those rights that are relevant to the collection, processing, and storage of personal data on{" "}<a href="https://www.uptech.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:text-[#60A5FA] transition-colors">www.uptech.org.uk</a></p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {dataSubjectRights.map((right, i) => {
                const Icon = right.icon;
                return (
                  <motion.div key={right.title} initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden shadow-sm">
                    <div className="absolute top-3 bottom-3 left-0 w-[2px] rounded-r-full transition-opacity duration-300 opacity-40 group-hover:opacity-100" style={{ background: `linear-gradient(to bottom, ${right.color}, ${right.color}40)` }} />
                    <div className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${right.color}10`, border: `1px solid ${right.color}20` }}>
                      <div className="absolute inset-[-6px] rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" style={{ backgroundColor: right.color }} />
                      <Icon className="relative z-10 w-5 h-5" style={{ color: right.color }} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{right.title}</h3>
                    <div className="h-px bg-[#D8D5CF] mb-3" />
                    <p className="text-base text-[#7A7E8F] leading-relaxed">{right.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Changes, Review & General — Light alt section ───────────── */}
      <section className="relative py-10 overflow-hidden bg-[#F5F4F2]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-3">Policy Updates</p>
              <h2 className="font-heading font-extrabold text-[#1C1F2E] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">Changes, Review & General</h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#2563EB] to-transparent mb-4" />
            </div>
            <div className="grid lg:grid-cols-3 gap-5 max-w-5xl">
              <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-3">Changes to this Policy</h3>
                <div className="h-px bg-[#D8D5CF] mb-3" />
                <p className="text-base text-[#7A7E8F] leading-relaxed">UPTIB reserves the right to modify or amend the Privacy Policy at any time and for any reason, as permitted by applicable law. If there are material changes to the Privacy Policy, we will post those changes here.</p>
              </motion.div>
              <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.08 }} className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#22C55E]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-3">Review</h3>
                <div className="h-px bg-[#D8D5CF] mb-3" />
                <p className="text-base text-[#7A7E8F] leading-relaxed">We keep this policy under regular review.</p>
              </motion.div>
              <motion.div initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.16 }} className="relative bg-white border border-[#D8D5CF] rounded-2xl p-8 overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C41E3A]/20 to-transparent" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#C41E3A]/10 border border-[#C41E3A]/20 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-[#C41E3A]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-3">General</h3>
                <div className="h-px bg-[#D8D5CF] mb-3" />
                <p className="text-base text-[#7A7E8F] leading-relaxed">You may not transfer any of your rights under this privacy policy to any other person. We may transfer our rights under this privacy policy where we believe your rights will not be affected. We may transfer your personal information to a third party as part of the sale of some or all assets. We would take steps to ensure your privacy rights continue to be protected.</p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Contact CTA — Gradient dark section ───────────────────── */}
      <section className="relative overflow-hidden py-12" style={{ background: "linear-gradient(135deg, #0B0F1A 0%, #131942 50%, #0B0F1A 100%)" }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05]" style={{ background: "radial-gradient(circle, #2563EB, transparent 50%)" }} />
        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-4">Get in Touch</p>
              <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">Contact Information</h2>
              <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-4">For any questions about this Privacy Policy or our treatment of your Personal Information, please contact{" "}<a href="mailto:info@uptech.org.uk" className="text-[#2563EB] hover:text-[#60A5FA] transition-colors">info@uptech.org.uk</a></p>
              <div className="flex flex-wrap gap-4 mt-10">
                <Button href="/contact" variant="primary" size="lg" showArrow>Contact Us</Button>
                <Button href="/membership/apply" variant="glass" size="lg" showArrow>Apply for Membership</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
