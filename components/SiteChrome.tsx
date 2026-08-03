"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { BackToTop } from "@/components/ui/BackToTop";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/** Admin is a standalone dashboard — no site header/footer/marketing chrome. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/portfolio/admin");

  if (isAdmin) {
    return <main id="main-content">{children}</main>;
  }

  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <CookieConsent />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
