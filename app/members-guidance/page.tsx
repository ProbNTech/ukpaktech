import { Section } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Members Guidance",
  description: "Guidance for UPTECH members on making the most of their membership.",
};

export default function MembersGuidancePage() {
  return (
    <div>
      <PageHero
        title="Members Guidance"
        subtitle="A guide for UPTECH members on how to access services, participate in programmes, and make the most of your membership."
        image="/image/london-images/professional-networking.jpg"
      />
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#2563EB] uppercase tracking-widest mb-8">Member handbook</p>
          <div className="space-y-10 text-[#3D4152] leading-relaxed">
            <GuidanceSection title="Getting Started">
              <p>Welcome to UPTECH. Once your membership is confirmed, you will receive access to the member portal where you can update your profile, browse the membership directory, register for events, and access resources.</p>
              <ul className="mt-4 space-y-3">
                {["Complete your member profile with company details and logo", "Browse the membership directory to connect with peers", "Subscribe to our newsletter for the latest updates", "Review the Code of Conduct and community guidelines"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </GuidanceSection>

            <GuidanceSection title="Accessing Services">
              <p>As a member, you have access to a range of services including business networks, mentorship, digital marketing support, business support, and more. Visit the Services section of the website to explore what is available and contact our team for personalised support.</p>
            </GuidanceSection>

            <GuidanceSection title="Participating in Programmes">
              <p>UPTECH runs regular programmes including AI & Tech Programs, Skill Development, and Incubation. Programme applications are announced through our newsletter and events page. Members receive priority access and preferential rates for all programmes.</p>
            </GuidanceSection>

            <GuidanceSection title="Events & Networking">
              <p>Stay active in the UPTECH community by attending events, roundtables, and trade delegations. Member-exclusive events are marked in the events calendar. We encourage members to actively participate, share their expertise, and build meaningful connections.</p>
            </GuidanceSection>

            <GuidanceSection title="Funding & Grants">
              <p>Members can apply for funding through our Funding & Grants programmes. Visit the funding page for current opportunities, eligibility criteria, and application guidance. Our team is available to support you through the application process.</p>
            </GuidanceSection>

            <GuidanceSection title="Communication & Support">
              <p>For any questions, support requests, or feedback, contact our membership team at{" "}
                <a href="mailto:info@uptechcouncil.com" className="text-[#2563EB] underline underline-offset-2">info@uptechcouncil.com</a>.
                We aim to respond to all member enquiries within 2 business days.
              </p>
            </GuidanceSection>
          </div>
        </div>
      </Section>
    </div>
  );
}

function GuidanceSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading font-bold text-xl text-[#1C1F2E] mb-2">{title}</h2>
      <div className="h-px bg-[#1C1F2E]/20 mb-4" />
      <div className="text-[#3D4152] leading-relaxed">{children}</div>
    </div>
  );
}
