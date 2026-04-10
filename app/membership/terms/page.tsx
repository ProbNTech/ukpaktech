import type { Metadata } from "next";
import MembershipTermsClient from "./MembershipTermsClient";

export const metadata: Metadata = {
  title: "Membership Terms & Conditions | UPTECH",
  description:
    "The complete UPTECH Membership Terms & Conditions including eligibility, fees, member responsibilities, code of conduct, disciplinary procedure, and governing law.",
};

export default function MembershipTermsPage() {
  return <MembershipTermsClient />;
}
