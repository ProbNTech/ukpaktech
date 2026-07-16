import type { Metadata } from "next";
import PeopleAIClient from "./PeopleAIClient";

export const metadata: Metadata = {
  title: "People AI Platform",
  description: "Empowering people and organisations through human-centric AI support systems that integrate technology with professional services.",
};

export default function PeopleAIPage() {
  return <PeopleAIClient />;
}
