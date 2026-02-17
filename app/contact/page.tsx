import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { PageHero } from "@/components/PageHero";
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
    <div className="pt-0">
      <PageHero
        title="Contact"
        subtitle="Get in touch with the UK–Pakistan Tech Council."
      />
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-heading font-semibold text-xl mb-3">Email</h3>
              <p className="text-muted-text">
                <a href="mailto:info@uptechcouncil.org" className="hover:text-[#2563EB] transition-colors">info@uptechcouncil.org</a>
              </p>
            </Card>
            <Card>
              <h3 className="font-heading font-semibold text-xl mb-3">Locations</h3>
              <p className="text-muted-text mb-2">London, UK</p>
              <p className="text-muted-text">Islamabad, PK</p>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}



