import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR Policy",
  description: "UPTECH's GDPR compliance policy and your data protection rights.",
};

export default function GDPRPage() {
  return (
    <div>
      <PageHero
        title="GDPR Policy"
        subtitle="Our commitment to data protection and your rights under the General Data Protection Regulation."
        image="/image/london-images/data-security-privacy.jpg"
      />
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-widest mb-8">Last updated: 2025</p>
          <div className="space-y-10 text-[#3D4152] leading-relaxed">
            <PolicySection title="Our Commitment">
              <p>UPTECH Council is committed to complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We take the privacy and security of your personal data seriously and are transparent about how we collect, process, and store your information.</p>
            </PolicySection>
            <PolicySection title="Data Controller">
              <p>UK–Pakistan Tech Council (UPTECH) is the data controller for personal data collected through our website and services. We determine the purposes and means of processing your personal data in accordance with applicable law.</p>
            </PolicySection>
            <PolicySection title="Your Rights">
              <p>Under GDPR, you have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-5 mt-3 space-y-1 text-sm">
                <li><strong>Right of access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Right to rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Right to erasure:</strong> Request deletion of your personal data in certain circumstances.</li>
                <li><strong>Right to restrict processing:</strong> Request limitation of how we use your data.</li>
                <li><strong>Right to data portability:</strong> Receive your data in a structured, machine-readable format.</li>
                <li><strong>Right to object:</strong> Object to processing based on legitimate interests or direct marketing.</li>
              </ul>
            </PolicySection>
            <PolicySection title="Lawful Basis for Processing">
              <p>We process personal data based on one or more of the following lawful bases: consent, contractual necessity, legal obligation, vital interests, public interest, or legitimate interests. The specific lawful basis depends on the nature of the processing activity.</p>
            </PolicySection>
            <PolicySection title="Data Retention">
              <p>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, comply with legal obligations, and resolve disputes. Retention periods vary depending on the type of data and the purpose of processing.</p>
            </PolicySection>
            <PolicySection title="International Transfers">
              <p>Where we transfer personal data outside the UK, we ensure appropriate safeguards are in place in accordance with UK GDPR requirements, including standard contractual clauses or adequacy decisions.</p>
            </PolicySection>
            <PolicySection title="Contact the Data Protection Officer">
              <p>To exercise your rights or for any data protection queries, contact us at{" "}
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
