import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder & CEO",
  description:
    "Meet Khalil Choudhary, Founder and CEO of the UK-Pakistan Technology Council, and his vision for bilateral tech collaboration.",
  openGraph: {
    title: "Founder & CEO | UPTECH",
    description:
      "Meet Khalil Choudhary, Founder and CEO of the UK-Pakistan Technology Council, and his vision for bilateral tech collaboration.",
  },
};

export default function FounderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
