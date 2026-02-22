import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const BASE_URL = "https://www.uptechcouncil.org";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "UK–Pakistan Tech Council | UPTECH",
    template: "%s | UPTECH",
  },
  description:
    "A strategic platform strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan.",
  keywords: [
    "UK Pakistan",
    "technology council",
    "digital trade",
    "UPTECH",
    "tech innovation",
    "bilateral trade",
    "startup ecosystem",
    "AI programs",
  ],
  authors: [{ name: "UK–Pakistan Tech Council" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "UK–Pakistan Tech Council",
    title: "UK–Pakistan Tech Council | UPTECH",
    description:
      "A strategic platform strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UK–Pakistan Tech Council",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK–Pakistan Tech Council | UPTECH",
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
  name: "UK–Pakistan Tech Council",
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
    email: "info@uptechcouncil.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="bg-[#EEECEA]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
