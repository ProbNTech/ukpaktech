import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the UK–Pakistan Tech Council. Reach out for partnerships, membership enquiries, or general questions.",
  openGraph: {
    title: "Contact | UPTECH",
    description: "Get in touch with the UK–Pakistan Tech Council.",
  },
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        title="Contact"
        subtitle="Get in touch with the UK–Pakistan Tech Council. Reach out for partnerships, membership enquiries, or general questions."
        image="/image/london-images/office-reception-communication.jpg"
      />
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          {/* Left panel — contact info, no background */}
          <div className="pt-2">
            <SectionHeader label="Reach us" title="Get in Touch" />

            <div className="space-y-6 mt-8">
              <Card>
                <h3 className="font-heading font-semibold text-xl text-[#1C1F2E] mb-3">Email</h3>
                <p className="text-[#3D4152]">
                  <a href="mailto:info@uptechcouncil.org" className="hover:text-[#2563EB] transition-colors">
                    info@uptechcouncil.org
                  </a>
                </p>
              </Card>
              <Card>
                <h3 className="font-heading font-semibold text-xl text-[#1C1F2E] mb-3">Locations</h3>
                <p className="text-[#3D4152] mb-2">London, UK</p>
                <p className="text-[#3D4152]">Islamabad, PK</p>
              </Card>
            </div>
          </div>

          {/* Right panel — form with white background */}
          <div className="bg-white border border-[#D8D5CF] rounded p-10 lg:p-12">
            <SectionHeader label="Write to us" title="Send a Message" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
