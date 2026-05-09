// UPTECH Forum - Main application layout
import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CookieConsent } from "@/components/CookieConsent";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const BASE_URL = "https://www.ukpaktech.org.uk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "UK–Pakistan Tech Forum | UPTECH",
    template: "%s | UPTECH",
  },
  description:
    "A strategic platform strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan.",
  keywords: [
    "UK Pakistan",
    "technology forum",
    "digital trade",
    "UPTECH",
    "tech innovation",
    "bilateral trade",
    "startup ecosystem",
    "AI programs",
  ],
  authors: [{ name: "UK–Pakistan Tech Forum" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "UK–Pakistan Tech Forum",
    title: "UK–Pakistan Tech Forum | UPTECH",
    description:
      "A strategic platform strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UK–Pakistan Tech Forum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK–Pakistan Tech Forum | UPTECH",
    description:
      "A strategic platform strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UK–Pakistan Tech Forum",
  alternateName: "UPTECH",
  url: BASE_URL,
  logo: `${BASE_URL}/image/main-logo/mainlogo.png`,
  description:
    "A strategic platform strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan.",
  foundingDate: "2024",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "general enquiry",
    email: "info@ukpaktech.org.uk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-[#2563EB] focus:text-white focus:rounded-lg focus:text-sm focus:font-bold focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
        <SpeedInsights />
      </body>
    </html>
  );
}
