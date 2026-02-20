import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          foreground: "#FFFFFF",
        },
        accent: {
          green: "#22C55E",
          "green-hover": "#16A34A",
        },
        /* Editorial palette tokens */
        editorial: {
          bg: "#EEECEA",
          "bg-alt": "#E8E6E3",
          rule: "#C5C2BE",
          dark: "#1C1F2E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // ─── Header / Navigation ───────────────────────────────────
        "nav-label":  ["10px", { lineHeight: "1", letterSpacing: "0.13em" }],   // taglines, CTA buttons, micro-labels
        "nav-item":   ["15px", { lineHeight: "1.2", letterSpacing: "0.12em" }], // top-bar nav links (Home, About…)
        "nav-cta":    ["11px", { lineHeight: "1", letterSpacing: "0.14em" }],   // "Become a Member" button text

        // ─── Mega-panel dropdown ───────────────────────────────────
        "panel-eyebrow":  ["11px", { lineHeight: "1", letterSpacing: "0.2em" }],  // "Who we are", "Section index"
        "panel-title":    ["32px", { lineHeight: "1.1", letterSpacing: "-0.01em" }], // Left-col section title
        "panel-item":     ["17px", { lineHeight: "1.3", letterSpacing: "0" }],    // Centre-col item label
        "panel-desc":     ["14px", { lineHeight: "1.7", letterSpacing: "0" }],    // Centre-col item description
        "panel-quote":    ["22px", { lineHeight: "1.3", letterSpacing: "-0.01em" }], // Right-col pull-quote
        "panel-body":     ["14px", { lineHeight: "1.7", letterSpacing: "0" }],    // Right-col body copy
        "panel-index":    ["12px", { lineHeight: "1", letterSpacing: "0" }],      // "01", "02" index numbers

        // ─── Mobile drawer ─────────────────────────────────────────
        "mobile-group":   ["13px", { lineHeight: "1.2", letterSpacing: "0.16em" }], // Group accordion labels
        "mobile-item":    ["14px", { lineHeight: "1.3", letterSpacing: "0" }],    // Sub-item labels
        "mobile-desc":    ["12px", { lineHeight: "1.6", letterSpacing: "0" }],    // Sub-item descriptions
        "mobile-cta":     ["11px", { lineHeight: "1", letterSpacing: "0.14em" }], // Drawer CTA buttons
      },
      maxWidth: {
        content: "1200px",
        container: "var(--container-width)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        card: "var(--radius-card)",
        pill: "var(--radius-pill)",
        full: "9999px",
      },
      spacing: {
        section: "var(--space-section)",
        "section-lg": "var(--space-section-lg)",
        "section-xl": "var(--space-section-xl)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        "glow-primary": "var(--shadow-glow-primary)",
        "glow-hover": "var(--shadow-glow-hover)",
      },
    },
  },
  plugins: [],
};
export default config;
