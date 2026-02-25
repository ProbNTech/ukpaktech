import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description: "UPTECH's cookies policy — how we use cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <div>
      <PageHero
        title="Cookies Policy"
        subtitle="How we use cookies and similar technologies on our website."
        image="/image/london-images/data-security-privacy.jpg"
      />
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-widest mb-8">Last updated: 2025</p>
          <div className="space-y-10 text-[#3D4152] leading-relaxed">
            <PolicySection title="What Are Cookies">
              <p>Cookies are small text files stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our site.</p>
            </PolicySection>
            <PolicySection title="How We Use Cookies">
              <p>We use cookies for essential website functionality, performance analytics, and to improve your user experience. We may also use cookies for marketing purposes with your consent.</p>
              <ul className="list-disc pl-5 mt-3 space-y-1 text-sm">
                <li><strong>Essential cookies:</strong> Required for the website to function properly.</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website.</li>
                <li><strong>Preference cookies:</strong> Remember your settings and preferences.</li>
                <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements (with consent).</li>
              </ul>
            </PolicySection>
            <PolicySection title="Managing Cookies">
              <p>You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website. Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences for certain websites.</p>
            </PolicySection>
            <PolicySection title="Third-Party Cookies">
              <p>Some cookies on our website are set by third-party services we use, such as analytics providers and social media platforms. We do not control these cookies, and you should refer to the relevant third-party privacy policies for more information.</p>
            </PolicySection>
            <PolicySection title="Contact">
              <p>If you have questions about our use of cookies, please contact us at{" "}
                <a href="mailto:info@uptechcouncil.com" className="text-[#2563EB] underline underline-offset-2">info@uptechcouncil.com</a>.
              </p>
            </PolicySection>
          </div>
        </div>
      </Section>
    </div>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading font-bold text-xl text-[#1C1F2E] mb-2">{title}</h2>
      <div className="h-px bg-[#1C1F2E]/20 mb-4" />
      <div className="text-[#3D4152] leading-relaxed">{children}</div>
    </div>
  );
}
