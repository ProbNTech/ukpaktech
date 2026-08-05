# UK–Pakistan Tech Forum (UPTECH) Website

Official website for the UK–Pakistan Tech Forum built with Next.js 16, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```
 
### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Subtle animations
- **Lucide React** - Icons

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── leadership/        # Leadership page
│   ├── initiatives/       # Initiatives pages
│   ├── membership/        # Membership page
│   ├── events/            # Events page
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── code-of-conduct/   # Code of Conduct
│   ├── privacy/           # Privacy Policy
│   └── terms/             # Terms of Service
├── components/            # Reusable components
│   ├── Header.tsx         # Global header with navigation
│   ├── Footer.tsx         # Global footer
│   ├── Button.tsx         # Button component
│   ├── Card.tsx           # Card component
│   ├── Section.tsx        # Section wrapper
│   ├── Container.tsx      # Container wrapper
│   ├── PillarGrid.tsx     # Pillars grid
│   ├── InitiativeGrid.tsx  # Initiatives grid
│   ├── AudienceGrid.tsx   # Audience tiles
│   └── EventPreview.tsx   # Event cards
└── app/globals.css        # Global styles
```

## Design System

### Colors

- **Dark Navy**: `#0B1C2D`
- **Charcoal**: `#121A21`
- **Off White**: `#F5F7FA`
- **Institutional Blue**: `#1F4FD8`
- **Tech Gradient**: `#2B6DE9` to `#1FB7A6`

### Typography

- **Body**: Inter
- **Headings**: Manrope

## Features

- ✅ Responsive design
- ✅ Accessible navigation
- ✅ SEO optimized
- ✅ Subtle animations (respects reduced motion)
- ✅ Dark/light section alternation
- ✅ Sticky header with blur effect
- ✅ Mobile-friendly navigation

## Notes

- Portal URL is set to `https://portal.example.com` (update in code)
- Placeholder images are used (replace with actual images)
- Contact email is `info@ukpaktech.org.uk` (update in Footer and Contact page)



