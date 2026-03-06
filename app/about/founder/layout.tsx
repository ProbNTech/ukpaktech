import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet Khalil Choudhary, President, and Hussnain Kazmi, Chairman of the UK-Pakistan Technology Council, and their vision for bilateral tech collaboration.",
  openGraph: {
    title: "Leadership | UPTECH",
    description:
      "Meet Khalil Choudhary, President, and Hussnain Kazmi, Chairman of the UK-Pakistan Technology Council, and their vision for bilateral tech collaboration.",
  },
};

export default function FounderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
