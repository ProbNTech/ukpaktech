import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import Link from "next/link";
import { Building2, Globe, Users, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Membership Directory",
  description:
    "Browse the UPTECH membership directory — technology companies, investors, academic institutions, and professionals driving UK–Pakistan bilateral growth.",
  openGraph: {
    title: "Membership Directory | UPTECH",
    description:
      "Browse the UPTECH membership directory — technology companies, investors, academic institutions, and professionals.",
  },
};

const memberCategories = [
  {
    title: "Tech Companies",
    icon: Building2,
    count: "45+",
    description:
      "Software houses, SaaS firms, AI labs, and digital agencies operating across both markets.",
  },
  {
    title: "Investors & VCs",
    icon: Globe,
    count: "20+",
    description:
      "Venture capital firms, angel networks, and institutional investors focused on cross-border technology.",
  },
  {
    title: "Academic & Research",
    icon: Users,
    count: "15+",
    description:
      "Universities, research centres, and think tanks contributing to bilateral innovation.",
  },
  {
    title: "Individual Professionals",
    icon: Users,
    count: "40+",
    description:
      "CTOs, founders, policy advisors, and senior technology leaders across both nations.",
  },
];

export default function MembershipDirectoryPage() {
  return (
    <>
      <PageHero
        title="Membership Directory"
        subtitle="Our membership consists of technology companies, investors, academic institutions, and individual professionals. All corporate members are featured in the directory below."
        image="/image/london-images/1.jpg"
      >
        <div className="flex items-center gap-3 mt-2">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <input
              type="text"
              placeholder="Search by keyword or phrase"
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/40 transition-colors"
              disabled
            />
          </div>
          <span className="text-white/40 text-xs italic">Coming soon</span>
        </div>
      </PageHero>

      {/* Category overview */}
      <section className="py-10 lg:py-14" style={{ backgroundColor: "#EEECEA" }}>
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {memberCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="bg-white border border-[#D8D5CF] rounded p-6 flex flex-col"
                >
                  <Icon className="w-6 h-6 text-[#2563EB] mb-4" />
                  <div className="text-3xl font-bold text-[#1C1F2E] mb-1">{cat.count}</div>
                  <h3 className="font-heading font-bold text-[#1C1F2E] text-sm uppercase tracking-wide mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-[#3D4152] text-sm leading-relaxed flex-1">
                    {cat.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Placeholder for future directory listing */}
          <div className="bg-white border border-[#D8D5CF] rounded p-12 text-center">
            <Users className="w-10 h-10 text-[#2563EB]/30 mx-auto mb-4" />
            <h2 className="font-heading font-bold text-[#1C1F2E] text-xl mb-3">
              Full Directory Coming Soon
            </h2>
            <p className="text-[#3D4152] text-base leading-relaxed max-w-lg mx-auto mb-6">
              We are finalising our member profiles. In the meantime, please get in touch to learn more about our members or to enquire about joining the council.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1C1F2E] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors duration-300"
              >
                Become a Member
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#1C1F2E] text-[#1C1F2E] text-sm font-semibold hover:bg-[#1C1F2E] hover:text-white transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
