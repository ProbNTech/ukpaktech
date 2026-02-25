import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Excellence Management Terms & Conditions",
  description: "Terms and conditions for UPTECH's Excellence Management programmes and awards.",
};

export default function ExcellenceManagementTermsPage() {
  return (
    <div>
      <PageHero
        title="Excellence Management Terms & Conditions"
        subtitle="Terms governing participation in UPTECH's excellence management programmes, awards, and recognition initiatives."
        image="/image/london-images/legal-documents.jpg"
      />
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-widest mb-8">Last updated: 2025</p>
          <div className="space-y-10 text-[#3D4152] leading-relaxed">
            <PolicySection title="Scope">
              <p>These terms and conditions apply to all participants, nominees, and awardees involved in UPTECH&apos;s excellence management programmes, including the Tech Excellence Awards, recognition initiatives, and related activities.</p>
            </PolicySection>
            <PolicySection title="Eligibility">
              <p>Participation in excellence management programmes is open to UPTECH members and invited participants who meet the published eligibility criteria for each programme. UPTECH reserves the right to verify eligibility and disqualify participants who do not meet the requirements.</p>
            </PolicySection>
            <PolicySection title="Nomination & Selection">
              <p>Nominations may be submitted by members, partners, or the UPTECH team. All nominations are reviewed by an independent panel. The selection process is based on merit, impact, innovation, and alignment with UPTECH&apos;s values and objectives. Decisions of the judging panel are final.</p>
            </PolicySection>
            <PolicySection title="Awards & Recognition">
              <p>Awards and recognition are granted at the sole discretion of UPTECH and the judging panel. UPTECH reserves the right to withhold or withdraw awards if the recipient is found to have breached these terms, the Code of Conduct, or any applicable laws.</p>
            </PolicySection>
            <PolicySection title="Intellectual Property">
              <p>By participating, you grant UPTECH a non-exclusive, royalty-free licence to use your name, likeness, company name, and submitted materials for promotional and marketing purposes related to the programme.</p>
            </PolicySection>
            <PolicySection title="Liability">
              <p>UPTECH shall not be liable for any loss, damage, or expense arising from participation in excellence management programmes, except where caused by our negligence. Participants are responsible for their own travel, accommodation, and related expenses unless otherwise specified.</p>
            </PolicySection>
            <PolicySection title="Contact">
              <p>For questions about these terms, contact us at{" "}
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
