"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Cookie, Shield, Settings, BarChart3, LineChart, Megaphone,
  Globe2, Lock, Eye, FileText, Bell, RefreshCw, Users,
  CheckCircle2,
} from "lucide-react";

const cookieTypes = [
  {
    icon: Shield,
    title: "Necessary",
    desc: "These cookies are necessary in order to allow the Site to work correctly. They enable you to access the Site, move around, and access different services, features, and tools. Examples include remembering previous actions (e.g. entered text) when navigating back to a page in the same session. These cookies cannot be disabled.",
  },
  {
    icon: Settings,
    title: "Functionality",
    desc: "These cookies remember your settings and preferences and the choices you make (such as language or regional preferences) in order to help us personalize your experience and offer you enhanced functionality and content.",
  },
  {
    icon: Lock,
    title: "Security",
    desc: "These cookies can help us identify and prevent security risks. They may be used to store your session information to prevent others from changing your password without your login information.",
  },
  {
    icon: BarChart3,
    title: "Performance",
    desc: "These cookies can help us collect information to help us understand how you use our Site, for example whether you have viewed messages or specific pages and how long you spent on each page. This helps us improve the performance of our Site.",
  },
  {
    icon: LineChart,
    title: "Analytics",
    desc: "These cookies collect information regarding your activity on our Site to help us learn more about which features are popular with our users and how our Site can be improved.",
  },
  {
    icon: Megaphone,
    title: "Advertising",
    desc: "These cookies are placed in order to deliver content, including ads relevant and meaningful to you and your interests. They may also be used to deliver targeted advertising or to limit the number of times you see an advertisement. This can help us track how efficient advertising campaigns are, both for our own Services and for other websites. Such cookies may track your browsing habits and activity when visiting our Site and those of third parties",
  },
];

const additionalCookieDetails = [
  {
    title: "User Preference",
    desc: "User preference \u2013 we set these to customize your website preferences, for example dismissing a popup not to show again in your browser or setting your live chat preferences.",
  },
  {
    title: "Analytics",
    desc: "Analytics \u2013 we use these to understand how the website is being used in order to improve the user experience. Your user data is all anonymous. You can find out more about Google\u2019s position on privacy as regards its analytics service at http://www.google.co.uk/intl/en/analytics/privacyoverview.html",
  },
  {
    title: "AdWords",
    desc: "AdWords: Using Google AdWords code, we are able to see which pages helped lead to contact form submissions. This allows us to make better use of our paid search budget. We also log when users view specific pages, allowing us to provide targeted advertising in the future.",
  },
  {
    title: "LinkedIn",
    desc: "LinkedIn: We use LinkedIn advertising conversion tracking and re-targeting pixels, which allows us to collect or receive information from your website and elsewhere on the internet and use that information to provide measurement services and target future advertising.",
  },
  {
    title: "CRM",
    desc: "CRM: We use HubSpot as our CRM and cookies are set by it to log user preferences and activity.",
  },
  {
    title: "Third Party Cookies",
    desc: "Third party cookies: We use a number of external web services. For example, to display slideshows we sometimes use SlideShare; to show videos we use YouTube and Vimeo, to encourage social shares we use social media like and share buttons. We cannot prevent these sites, or external domains, from setting their own cookies and collecting information on your usage. If you are not logged in to these external services then they will not know who you are but are likely to gather anonymous usage information e.g. number of views, plays, loads etc.",
  },
];

const dataSubjectRights = [
  {
    icon: Eye,
    title: "Right to Access",
    desc: "Right to Access: Data subjects reserve the right to request and obtain confirmation that data is or is not being collected on them and if so, exactly what data is being collected, how, where, and for what purposes. This data can be manually requested via info@uptech.org.uk and provided in an electronic format free of charge.",
  },
  {
    icon: Users,
    title: "Right to Be Forgotten",
    desc: "Right to Be Forgotten: Should data subjects at any time wish to withdraw their consent and no longer allow UK-PAKISTAN TECH COUNCIL LTD (UPTECH) International to store their personal data, this request can be manually made via info@uptech.org.uk Please be sure to include the full name (including any prefixes) and email address of whom the data is in reference too, so that all data relating to the data subject in question can be accurately removed.",
  },
  {
    icon: FileText,
    title: "Data Portability",
    desc: "Data Portability: Similar to the Right to Access, Data Portability requires that data subjects are able to request, obtain, and/or transfer possession of collected data at any time. As mentioned above, this data can be manually requested via info@uptech.org.uk and provided in an electronic format free of charge. Should the data subject wish to transfer the possession of the data stored by UK-PAKISTAN TECH COUNCIL LTD (UPTECH), please be sure to also include the full name (including any prefixes) and the relevant contact information relating to the individual or organization whom you wish the data to be transferred to.",
  },
  {
    icon: Bell,
    title: "Breach Notification",
    desc: "Breach Notification: Should UK-PAKISTAN TECH COUNCIL LTD (UPTECH) encounter a breach/unauthorized access of personal data that is likely to \u201Cresult in a risk for the rights and freedoms of individuals\u201D, UK-PAKISTAN TECH COUNCIL LTD (UPTECH) will ensure that a notification is made within 72 hours of becoming aware of the breach.",
  },
];

export default function CookiesPage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <PageHero
        image="/image/london-images/data-security-privacy.jpg"
        title="Cookies Policy"
        subtitle="How we use cookies and similar technologies on our website."
      />

      {/* ── Introduction ─────────────────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Overview"
            title="About Our Cookies"
          />

          <div className="bg-white border border-[#D8D5CF] rounded p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1C1F2E] pt-2">What Are Cookies</h3>
            </div>
            <div className="h-px bg-[#D8D5CF] mb-5" />
            <div className="space-y-5">
              <p className="text-sm text-[#3D4152] leading-relaxed">
                Our website uses cookies, which identify technologies that your computer receives when you visit certain websites. We do not match or correlate this information with any customer information that you submit to UK-PAKISTAN TECH COUNCIL LTD (UPTECH).
              </p>
              <p className="text-sm text-[#3D4152] leading-relaxed">
                Some of our web pages utilize {"\u201C"}cookies{"\u201D"} and other tracking technologies. Cookies are small pieces of data, stored in text files, that are stored on your computer or other devices when websites are loaded in a browser. They are widely used to {"\u2018"}remember{"\u2019"} you and your preferences, either for a single visit (through a {"\u2018"}session cookie{"\u2019"}) or for multiple repeat visits (using a {"\u2018"}persistent cookie{"\u2019"}). They ensure consistent and efficient experience for visitors and perform essential functions such as allowing users to register and remain logged in. Cookies may be set by the site that you are visiting (known as {"\u2018"}first-party cookies{"\u2019"}), or by other websites who serve up content on that site ({"\u2018"}third party cookies{"\u2019"}).
              </p>
              <p className="text-sm text-[#3D4152] leading-relaxed">
                Tracking technologies may record information such as Internet domain and host names; Internet protocol (IP) addresses; browser software and operating system types; clickstream patterns; and dates and times that our site is accessed. Our use of cookies and other tracking technologies allows us to improve our web site and your web experience. We may also analyze information that does not contain personal information for trends and statistics.
              </p>
              <p className="text-sm text-[#3D4152] leading-relaxed">
                Cookies are text files placed on your computer to collect standard internet log information and visitor behavior information. This information is used to track visitor use of the website and to compile statistical reports on website activity. For further information visit{" "}
                <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors">www.aboutcookies.org</a>{" "}
                or{" "}
                <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors">www.allaboutcookies.org</a>.
              </p>
              <p className="text-sm text-[#3D4152] leading-relaxed">
                You can set your browser not to accept cookies, and the above websites tell you how to remove cookies from your browser. However, in a few cases, some of our website features may not function as a result.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Links to Other Websites ──────────────────────────────────── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="External Links"
            title="Links to Other Websites"
          />

          <div className="bg-white border border-[#D8D5CF] rounded p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                <Globe2 className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1C1F2E] pt-2">Third-Party Websites</h3>
            </div>
            <div className="h-px bg-[#D8D5CF] mb-5" />
            <div className="space-y-5">
              <p className="text-sm text-[#3D4152] leading-relaxed">
                Our website may contain links to other websites run by other organizations. This policy applies only to our website, so we encourage you to read the privacy statements on the other websites you visit. We cannot be responsible for the privacy policies and practices of other websites even if you access them using links from our website.
              </p>
              <p className="text-sm text-[#3D4152] leading-relaxed">
                In addition, if you linked to our website from a third-party site, we cannot be responsible for the privacy policies and practices of the owners and operators of that third party site and recommend that you check the privacy policy of that third party site.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Cookie Types ─────────────────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Cookie Categories"
            title="We Use These Cookies"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cookieTypes.map((cookie) => {
              const Icon = cookie.icon;
              return (
                <div
                  key={cookie.title}
                  className="bg-white border border-[#D8D5CF] rounded p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{cookie.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed">{cookie.desc}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Additional Cookie Details ────────────────────────────────── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="Detailed Information"
            title="Additional Cookie Details"
          />

          <div className="grid lg:grid-cols-2 gap-5">
            {additionalCookieDetails.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#D8D5CF] rounded p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-3">{item.title}</h3>
                <div className="h-px bg-[#D8D5CF] mb-3" />
                <p className="text-sm text-[#3D4152] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Category note */}
          <div className="mt-8 bg-white border border-[#2563EB]/20 rounded p-6">
            <Cookie className="w-5 h-5 text-[#2563EB] mb-3" strokeWidth={1.5} />
            <p className="text-[#3D4152] text-sm leading-relaxed">
              The specific names and types of cookies, web beacons, and other similar technologies we use may change from time to time. However, the cookies we use generally fall into one of the following categories:
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Browser Settings ─────────────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Cookie Management"
            title="Browser Settings"
          />

          <div className="bg-white border border-[#D8D5CF] rounded p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                <Settings className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1C1F2E] pt-2">Managing Your Cookies</h3>
            </div>
            <div className="h-px bg-[#D8D5CF] mb-5" />
            <p className="text-sm text-[#3D4152] leading-relaxed">
              Your web browser may be set to accept cookies automatically but can be changed to decline them. If you don{"\u2019"}t want to receive cookies, you can modify your browser so that it notifies you when cookies are sent to it or you can refuse cookies altogether. You can also delete cookies that have already been set. The Help section of the toolbar on most browsers will tell you how to set your browser to prevent new cookies or disable cookies altogether, or you should browse the site using your browser{"\u2019"}s anonymous usage setting (called {"\u201C"}Incognito{"\u201D"} in Chrome, {"\u201C"}InPrivate{"\u201D"} for Internet Explorer, {"\u201C"}Private Browsing{"\u201D"} in Firefox and Safari). For more help,{" "}
              <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors">www.aboutcookies.org</a>{" "}
              contains information on how to do this on a wide variety of desktop browsers.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Data Subject Rights ──────────────────────────────────────── */}
      <Section variant="alt">
        <AnimatedSection>
          <SectionHeader
            label="GDPR Compliance"
            title="Data Subject Rights"
            subtitle={<>GDPR compliance requires data subjects to be granted certain rights. What follows is not an exhaustive list, but those rights that are relevant to the collection, processing, and storage of personal data on{" "}<a href="https://www.uptech.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors">www.uptech.org.uk</a></>}
          />

          <div className="grid md:grid-cols-2 gap-5">
            {dataSubjectRights.map((right) => {
              const Icon = right.icon;
              return (
                <div
                  key={right.title}
                  className="bg-white border border-[#D8D5CF] rounded p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">{right.title}</h3>
                  <div className="h-px bg-[#D8D5CF] mb-3" />
                  <p className="text-sm text-[#3D4152] leading-relaxed">{right.desc}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Changes, Review & General ────────────────────────────────── */}
      <Section variant="light">
        <AnimatedSection>
          <SectionHeader
            label="Policy Updates"
            title="Changes, Review & General"
          />

          <div className="grid lg:grid-cols-3 gap-5">
            {/* Changes to this Policy */}
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-5">
                <RefreshCw className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-3">Changes to this Policy</h3>
              <div className="h-px bg-[#D8D5CF] mb-3" />
              <p className="text-sm text-[#3D4152] leading-relaxed">
                UPTIB reserves the right to modify or amend the Privacy Policy at any time and for any reason, as permitted by applicable law. If there are material changes to the Privacy Policy, we will post those changes here.
              </p>
            </div>

            {/* Review */}
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-5">
                <CheckCircle2 className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-3">Review</h3>
              <div className="h-px bg-[#D8D5CF] mb-3" />
              <p className="text-sm text-[#3D4152] leading-relaxed">
                We keep this policy under regular review.
              </p>
            </div>

            {/* General */}
            <div className="bg-white border border-[#D8D5CF] rounded p-8">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-5">
                <FileText className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-3">General</h3>
              <div className="h-px bg-[#D8D5CF] mb-3" />
              <p className="text-sm text-[#3D4152] leading-relaxed">
                You may not transfer any of your rights under this privacy policy to any other person. We may transfer our rights under this privacy policy where we believe your rights will not be affected. We may transfer your personal information to a third party as part of the sale of some or all assets. We would take steps to ensure your privacy rights continue to be protected.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Contact CTA ──────────────────────────────────────────────── */}
      <Section variant="dark">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563EB] mb-2 tracking-wide uppercase">Get in Touch</p>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Contact Information
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-4">
              For any questions about this Privacy Policy or our treatment of your Personal Information, please contact{" "}
              <a href="mailto:info@uptech.org.uk" className="text-[#2563EB] hover:text-[#60A5FA] transition-colors">
                info@uptech.org.uk
              </a>
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Button href="/contact" variant="primary" size="lg" showArrow className="bg-[#2563EB] hover:bg-[#1d4ed8]">Contact Us</Button>
              <Button href="/privacy" variant="glass" size="lg" showArrow>Privacy Policy</Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
