export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  authorRole: string;
  image: string;
  excerpt: string;
  body: string[];
  relatedSlugs: string[];
}

export const articles: Article[] = [
  {
    slug: "uk-pakistan-bilateral-tech-investment-deal",
    title: "UK and Pakistan Sign Landmark £200M Bilateral Technology Investment Agreement",
    category: "Investment",
    date: "12 February 2025",
    author: "UPTECH Editorial Team",
    authorRole: "UK–Pakistan Tech Council",
    image: "/image/events/UK-Pakistan-Business-Summit-2025.jpg",
    excerpt:
      "A landmark bilateral investment agreement signed in London will channel £200 million into joint technology ventures, establishing new innovation corridors between the two nations.",
    body: [
      "A landmark bilateral investment agreement signed at the UK–Pakistan Business Summit in London has committed £200 million in joint technology ventures over the next five years. The deal, brokered with support from the UK Department for Business and Trade and Pakistan's Ministry of Information Technology and Telecommunication, marks the largest structured tech investment programme between the two nations to date.",
      "The agreement covers four strategic sectors: artificial intelligence and machine learning, fintech and digital payments, healthtech, and clean energy technology. Under the framework, UK-based technology funds will co-invest alongside Pakistan's National Technology Fund in early-stage and growth-stage companies demonstrating cross-border potential. The UK–Pakistan Tech Council will serve as the governance body overseeing deal flow, compliance, and reporting.",
      "Speaking at the summit, UPTECH's Executive Director noted that this agreement represents more than capital — it establishes a repeatable institutional mechanism for bilateral investment that can scale. Both governments have agreed to a fast-track visa pathway for qualifying tech founders and senior engineers, further reducing the friction that has historically constrained cross-border collaboration. The first cohort of portfolio companies is expected to be announced at the Council's Q2 investor dialogue in Manchester.",
    ],
    relatedSlugs: [
      "uk-pakistan-tech-summit-london-2025",
      "pakistan-ai-hub-islamabad-launch",
      "british-pakistani-founders-investment-programme",
    ],
  },
  {
    slug: "uk-pakistan-tech-summit-london-2025",
    title: "UK–Pakistan Tech Summit 2025: Key Outcomes and What Comes Next",
    category: "Events",
    date: "24 November 2025",
    author: "UPTECH Editorial Team",
    authorRole: "UK–Pakistan Tech Council",
    image: "/image/eventgallery/event-2.jpg",
    excerpt:
      "The flagship UK–Pakistan Tech Summit brought together 600 delegates across two days in London. Here are the five commitments that will shape the bilateral tech agenda through 2026.",
    body: [
      "The UK–Pakistan Business Summit 2025 concluded at London's QEII Centre with six concrete commitments, 47 bilateral business introductions, and a joint communiqué signed by representatives from both governments. Over two days of plenary sessions, sector panels, and invitation-only B2B meetings, 600 delegates from technology, finance, academia, and government engaged on the shared agenda of digital trade and innovation partnership.",
      "The summit's technology track produced particularly notable outcomes. A memorandum of understanding was signed between three UK university research institutes and the National University of Sciences and Technology (NUST) in Islamabad, creating a formal joint research programme in applied AI and data science. Additionally, the UK's Digital Trade Network formally added Pakistan as a priority corridor, unlocking a dedicated trade facilitation desk at the British High Commission in Islamabad.",
      "Looking ahead, the Council has confirmed that the next summit will expand to include Birmingham and Manchester legs, reflecting the growing significance of the British-Pakistani technology diaspora in those cities. A new mentorship programme pairing established UK tech leaders with Pakistani founders was also announced, with the first intake of 30 mentors and 60 mentees to begin in Q1 2026. UPTECH members received early access to the summit's full session recordings and research papers through the member portal.",
    ],
    relatedSlugs: [
      "uk-pakistan-bilateral-tech-investment-deal",
      "pakistan-ai-hub-islamabad-launch",
      "digital-trade-corridor-expansion",
    ],
  },
  {
    slug: "pakistan-ai-hub-islamabad-launch",
    title: "Pakistan Launches National AI Hub in Islamabad with UK Technology Partners",
    category: "Innovation",
    date: "8 January 2025",
    author: "UPTECH Editorial Team",
    authorRole: "UK–Pakistan Tech Council",
    image: "/image/Initiatives/ai-tech-programs.jpg",
    excerpt:
      "Pakistan's first National AI Hub has opened in Islamabad's technology zone, with three British AI companies anchoring the founding cohort of innovation partners.",
    body: [
      "Pakistan's Ministry of Information Technology and Telecommunication formally launched the National AI Hub at the Islamabad Technology Zone in January 2025, with three British artificial intelligence companies — specialising in natural language processing, computer vision, and AI-driven logistics — anchoring the founding partner cohort. The hub, spanning 45,000 square feet of co-working, lab, and accelerator space, aims to host 200 AI-focused startups and scale-ups within its first two years of operation.",
      "The UK–Pakistan Tech Council facilitated introductions between the hub's management team and the British AI companies, part of a broader initiative to create tangible commercial anchors for bilateral technology investment. The Council's AI Working Group has been instrumental in identifying complementary strengths: Pakistan's deep pool of mathematics and computer science graduates provides research capacity, while UK firms bring product-market experience, international client networks, and access to UK government AI procurement frameworks.",
      "For Pakistani AI startups, the hub offers a structured pathway to UK market entry through the Council's trade facilitation programme. Qualifying startups will receive support on UK regulatory compliance, introductions to UK-based venture capital, and participation in delegation visits to London. The Council will host a dedicated AI innovation showcase at its Q3 forum, providing hub startups with direct access to UK enterprise buyers and investors.",
    ],
    relatedSlugs: [
      "uk-pakistan-bilateral-tech-investment-deal",
      "british-pakistani-founders-investment-programme",
      "digital-trade-corridor-expansion",
    ],
  },
  {
    slug: "british-pakistani-founders-investment-programme",
    title: "New Programme Backs British-Pakistani Tech Founders with £5M Seed Pool",
    category: "Funding",
    date: "3 February 2025",
    author: "UPTECH Editorial Team",
    authorRole: "UK–Pakistan Tech Council",
    image: "/image/Initiatives/techmart-global.jpg",
    excerpt:
      "A new seed investment programme targeting British-Pakistani technology founders has launched with a £5 million initial pool, backed by a consortium of UK angel networks and diaspora investors.",
    body: [
      "A new seed investment programme specifically targeting British-Pakistani technology founders has launched with a £5 million initial pool, supported by a consortium of UK angel networks, diaspora investors, and one institutional venture capital fund. The programme, structured under the UK–Pakistan Tech Council's ecosystem development mandate, will make investments of between £50,000 and £250,000 in pre-seed and seed stage technology companies founded or co-founded by individuals of British-Pakistani heritage.",
      "The initiative addresses a documented funding gap in the British-Pakistani startup ecosystem. Despite the community's significant representation in UK technology employment and a growing cohort of serial entrepreneurs, research commissioned by the Council found that British-Pakistani founders receive funding at approximately half the rate of the general UK founder population at the earliest stages. The programme aims to correct this imbalance by combining capital with structured mentorship, a community of peer founders, and preferential access to the Council's bilateral network.",
      "Applications for the first cohort opened in February 2025, with 12 investments expected to be announced by June. Portfolio companies will be expected to develop clear plans for UK–Pakistan bilateral value creation, whether through hiring in both markets, technology transfer, or cross-border commercial partnerships. The Council's investment committee includes experienced operators from the British-Pakistani technology community, several of whom have built companies across both markets.",
    ],
    relatedSlugs: [
      "uk-pakistan-bilateral-tech-investment-deal",
      "pakistan-ai-hub-islamabad-launch",
      "uk-pakistan-tech-summit-london-2025",
    ],
  },
  {
    slug: "digital-trade-corridor-expansion",
    title: "UK–Pakistan Digital Trade Corridor Expands with New Fintech and E-Commerce Framework",
    category: "Policy",
    date: "19 December 2024",
    author: "UPTECH Editorial Team",
    authorRole: "UK–Pakistan Tech Council",
    image: "/image/Initiatives/uk-pakistan-tech-excellence-awards.jpg",
    excerpt:
      "A new bilateral digital trade framework covering fintech licensing, cross-border payments, and e-commerce standards has been agreed between UK and Pakistani regulators, opening new market access for technology companies.",
    body: [
      "Regulators from the United Kingdom's Financial Conduct Authority and the State Bank of Pakistan have agreed a new bilateral digital trade framework that will significantly reduce the regulatory friction facing fintech and e-commerce companies operating across both markets. The framework, developed over 18 months of technical dialogue facilitated in part by the UK–Pakistan Tech Council, covers three primary areas: reciprocal recognition of fintech licensing for specified company categories, a harmonised framework for cross-border digital payments, and aligned standards for consumer data protection in e-commerce.",
      "For UK fintech companies, the agreement creates a cleaner pathway into Pakistan's 230 million consumer market, the fifth-largest by population in the world. Pakistani companies, meanwhile, gain clearer guidance on the UK's regulatory expectations, reducing the compliance cost that has historically deterred even well-capitalised Pakistani fintechs from pursuing UK authorisation. The State Bank of Pakistan will operate a dedicated UK market entry support desk, a first for any bilateral financial regulatory relationship.",
      "The UK–Pakistan Tech Council played a substantive role in the consultation process, submitting formal evidence on behalf of member companies and facilitating two industry roundtables attended by senior officials from both regulators. Council members operating in the affected sectors will receive a detailed briefing on the framework's implications for their business models at the upcoming policy forum. The Council is also developing a regulatory compliance toolkit specifically for companies navigating both the UK and Pakistan frameworks simultaneously.",
    ],
    relatedSlugs: [
      "uk-pakistan-tech-summit-london-2025",
      "british-pakistani-founders-investment-programme",
      "pakistan-startup-ecosystem-report-2025",
    ],
  },
  {
    slug: "pakistan-startup-ecosystem-report-2025",
    title: "Pakistan Startup Ecosystem Report 2025: Record Funding and a Maturing Market",
    category: "Research",
    date: "15 January 2025",
    author: "UPTECH Editorial Team",
    authorRole: "UK–Pakistan Tech Council",
    image: "/image/eventgallery/event-4.jpg",
    excerpt:
      "Pakistan's startup ecosystem attracted $340 million in disclosed venture capital in 2024 — a record year despite a difficult global fundraising environment. The Council's annual report examines what's driving growth and where UK companies fit in.",
    body: [
      "Pakistan's technology startup ecosystem attracted $340 million in disclosed venture capital investment in 2024, according to the UK–Pakistan Tech Council's annual ecosystem report published in January 2025. The figure represents a record year for the market and arrives despite a markedly difficult global fundraising environment that saw VC investment fall in most comparable emerging markets. The resilience reflects both the maturation of Pakistan's leading technology companies and growing international investor confidence in the market's structural fundamentals.",
      "The report identifies fintech as the dominant sector by disclosed capital, accounting for 38% of total investment, followed by logistics technology, healthtech, and edtech. Notably, the report tracks a significant increase in UK-origin investment: British venture capital firms and angel investors accounted for approximately 22% of disclosed international capital flowing into Pakistani startups in 2024, up from an estimated 8% in 2022. This shift reflects both the Council's facilitation work and the growing commercial sophistication of the British-Pakistani investment community.",
      "Looking ahead, the report forecasts continued growth in Pakistan's AI and SaaS sectors, driven by a rapidly expanding pool of technically educated graduates and improving digital infrastructure. For UK technology companies, the report highlights three specific market entry opportunities: enterprise software in the banking and telecommunications sectors, B2B logistics platforms serving the SME export market, and edtech platforms targeting Pakistan's 65 million students under the age of 25. The full report is available to UPTECH members through the Council's research library.",
    ],
    relatedSlugs: [
      "pakistan-ai-hub-islamabad-launch",
      "digital-trade-corridor-expansion",
      "uk-pakistan-bilateral-tech-investment-deal",
    ],
  },
  {
    slug: "tech-excellence-awards-2025-nominees",
    title: "Tech Excellence Awards 2025: Celebrating the Innovators Driving UK–Pakistan Progress",
    category: "Awards",
    date: "28 January 2025",
    author: "UPTECH Editorial Team",
    authorRole: "UK–Pakistan Tech Council",
    image: "/image/Initiatives/people-ai-platform.jpg",
    excerpt:
      "The UK–Pakistan Tech Excellence Awards return for their second year, with nominations now open across eight categories recognising technology leadership, innovation, and bilateral contribution.",
    body: [
      "The UK–Pakistan Tech Excellence Awards return for their second edition, with nominations now open across eight categories designed to recognise the individuals, companies, and institutions driving meaningful progress in bilateral technology collaboration. The awards ceremony will take place in London in May 2025, with nominees drawn from both the UK and Pakistan. Categories include Technology Company of the Year, Innovator of the Year, Bilateral Partnership of the Year, Startup of the Year, and Tech for Good, among others.",
      "Last year's inaugural awards attracted over 400 nominations and were attended by senior figures from government, venture capital, and the technology industry across both countries. Several of the companies recognised in the first edition have gone on to raise funding, secure international commercial partnerships, or expand their operations. The Council views the awards as more than a celebration — they are a deliberate effort to make the UK–Pakistan technology community visible to international investors and partners who may not otherwise be aware of the depth of talent operating in this corridor.",
      "Nominations are open to all technology companies, founders, and institutions with a demonstrable connection to the UK–Pakistan technology ecosystem. They do not need to be UPTECH members, though members receive guidance on nomination preparation through the Council's member services programme. A judging panel comprising 24 senior industry leaders from the UK and Pakistan will assess nominations before a shortlist is announced in March. The Council is committed to gender balance on the judging panel and across the shortlists.",
    ],
    relatedSlugs: [
      "uk-pakistan-tech-summit-london-2025",
      "british-pakistani-founders-investment-programme",
      "pakistan-startup-ecosystem-report-2025",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slugs: string[]): Article[] {
  return slugs
    .map((s) => articles.find((a) => a.slug === s))
    .filter((a): a is Article => a !== undefined)
    .slice(0, 3);
}
