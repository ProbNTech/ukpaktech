export const siteConfig = {
  name: "UK–Pakistan Tech Council",
  shortName: "UPTECH",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.uptech.org.uk",
  portalUrl: process.env.NEXT_PUBLIC_PORTAL_URL || "https://portal.example.com",
  description:
    "A strategic platform strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan.",
} as const;
