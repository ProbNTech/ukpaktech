import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "UPTECH's terms of service and usage guidelines.",
};

export default function TermsPage() {
  return (
    <div>
      <PageHero
        title="Terms of Service"
        subtitle="The terms and conditions governing your use of UPTECH's services and platform."
        image="/image/london-images/legal-documents.jpg"
      />
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-widest mb-8">Last updated: 2025</p>
          <div className="space-y-10 text-[#3D4152] leading-relaxed">
            <TermsSection title="Acceptance of Terms">
              <p>
                By accessing or using UPTECH Council's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
              <p className="mt-3 text-[#7A7E8F] text-sm italic">
                Full terms content is being finalised and will be published shortly.
              </p>
            </TermsSection>

            <TermsSection title="Use of Services">
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services in any way that violates applicable laws or regulations, or infringes the rights of others.
              </p>
            </TermsSection>

            <TermsSection title="Membership">
              <p>
                Membership in UPTECH Council is subject to approval and compliance with our Code of Conduct and membership criteria. We reserve the right to suspend or terminate membership for violations of our policies.
              </p>
            </TermsSection>

            <TermsSection title="Intellectual Property">
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of UPTECH Council and is protected by applicable intellectual property laws. You may not reproduce or distribute our content without prior written permission.
              </p>
            </TermsSection>

            <TermsSection title="Limitation of Liability">
              <p>
                UPTECH Council shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services. Our liability is limited to the maximum extent permitted by applicable law.
              </p>
            </TermsSection>

            <TermsSection title="Changes to Terms">
              <p>
                We may update these Terms of Service from time to time. We will notify you of any significant changes by posting the new terms on this page. Your continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </TermsSection>

            <TermsSection title="Contact">
              <p>
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:info@uptech.org.uk" className="text-[#2563EB] underline underline-offset-2">
                  info@uptech.org.uk
                </a>.
              </p>
            </TermsSection>
          </div>
        </div>
      </Section>
    </div>
  );
}

function TermsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading font-bold text-xl text-[#1C1F2E] mb-2">{title}</h2>
      <div className="h-px bg-[#1C1F2E]/20 mb-4" />
      <div className="text-[#3D4152] leading-relaxed">{children}</div>
    </div>
  );
}
