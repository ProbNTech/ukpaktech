import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "UPTECH's privacy policy and data protection practices.",
};

export default function PrivacyPage() {
  return (
    <div>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
      />
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-widest mb-8">Last updated: 2025</p>
          <div className="space-y-10 text-[#3D4152] leading-relaxed">
            <PolicySection title="Overview">
              <p>
                UPTECH Council is committed to protecting your privacy and handling your personal data with transparency and care. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
              </p>
              <p className="mt-3 text-[#7A7E8F] text-sm italic">
                Full policy content is being finalised and will be published shortly.
              </p>
            </PolicySection>

            <PolicySection title="Information We Collect">
              <p>
                We may collect information you provide directly to us, such as your name, email address, and professional details when you register for events, apply for membership, or contact us. We also collect certain information automatically when you visit our website.
              </p>
            </PolicySection>

            <PolicySection title="How We Use Your Information">
              <p>
                We use the information we collect to provide and improve our services, communicate with you about events and programmes, process membership applications, and fulfil legal obligations.
              </p>
            </PolicySection>

            <PolicySection title="Data Protection">
              <p>
                We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. We comply with applicable data protection legislation including UK GDPR.
              </p>
            </PolicySection>

            <PolicySection title="Contact">
              <p>
                If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at{" "}
                <a href="mailto:info@uptechcouncil.com" className="text-[#2563EB] underline underline-offset-2">
                  info@uptechcouncil.com
                </a>.
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
