import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Objectives & Values",
  description:
    "UPTECH's core objectives, values, and key activities driving technology innovation and UK-Pakistan bilateral growth.",
  openGraph: {
    title: "Objectives & Values | UPTECH",
    description:
      "UPTECH's core objectives, values, and key activities driving technology innovation and UK-Pakistan bilateral growth.",
  },
};

export default function ObjectivesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
