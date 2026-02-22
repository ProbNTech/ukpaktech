import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, User, ChevronRight, ArrowLeft, Tag } from "lucide-react";
import { getArticleBySlug, getRelatedArticles, articles } from "@/data/articles";
import { NewsCard } from "@/components/NewsCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.relatedSlugs);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative w-full h-[55vh] min-h-[380px] overflow-hidden bg-[#1C1F2E]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover object-center opacity-40"
          sizes="100vw"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F2E]/90 via-[#1C1F2E]/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end z-10">
          <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 pb-12 pt-28">
            {/* Breadcrumb */}
            <nav className="mb-5">
              <ol className="flex items-center flex-wrap gap-1.5 text-sm text-white/60">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <ChevronRight className="w-3.5 h-3.5" />
                <li>
                  <Link href="/events" className="hover:text-white transition-colors">News &amp; Events</Link>
                </li>
                <ChevronRight className="w-3.5 h-3.5" />
                <li className="text-white/80 line-clamp-1 max-w-[200px]">{article.title}</li>
              </ol>
            </nav>

            {/* Category */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-white/30 text-white/80">
                <Tag className="w-3 h-3 text-[#22C55E]" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {article.category}
                </span>
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[3rem] leading-[1.08] text-white max-w-4xl">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ── Article body ─────────────────────────────────────────── */}
      <section className="bg-[#EEECEA] py-16 lg:py-20">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Main content */}
            <article className="flex-1 min-w-0">
              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-5 mb-8 pb-8 border-b border-[#D8D5CF]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1C1F2E] flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1C1F2E]">{article.author}</p>
                    <p className="text-xs text-[#7A7E8F]">{article.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#7A7E8F]" />
                  <span className="text-sm text-[#7A7E8F]">{article.date}</span>
                </div>
              </div>

              {/* Excerpt / lead */}
              <p className="text-lg text-[#1C1F2E] leading-relaxed mb-8 font-semibold border-l-4 border-[#2563EB] pl-5">
                {article.excerpt}
              </p>

              {/* Body paragraphs */}
              <div className="space-y-6">
                {article.body.map((paragraph, i) => (
                  <p key={i} className="text-base text-[#3D4152] leading-[1.8]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Back link */}
              <div className="mt-12 pt-8 border-t border-[#D8D5CF]">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1C1F2E] hover:text-[#2563EB] transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to News &amp; Events
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0 space-y-6">
              {/* About UPTECH card */}
              <div className="bg-white border border-[#D8D5CF] p-6">
                <h3 className="font-heading font-bold text-base text-[#1C1F2E] mb-2">
                  About UPTECH
                </h3>
                <div className="h-px bg-[#D8D5CF] mb-4" />
                <p className="text-sm text-[#3D4152] leading-relaxed mb-5">
                  The UK–Pakistan Tech Council is a bilateral technology platform established to strengthen innovation, digital trade, and institutional collaboration between the two nations.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:gap-2.5 transition-all duration-200"
                >
                  Learn more
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Become a member CTA */}
              <div className="bg-[#1C1F2E] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#22C55E] mb-3">
                  Join us
                </p>
                <h3 className="font-heading font-bold text-base text-white mb-2">
                  Become a Member
                </h3>
                <div className="h-px bg-white/20 mb-4" />
                <p className="text-sm text-white/70 leading-relaxed mb-5">
                  Join UPTECH to access exclusive research, events, and the bilateral network.
                </p>
                <Link
                  href="/membership"
                  className="block text-center py-2.5 px-4 bg-white text-[#1C1F2E] text-sm font-semibold hover:bg-[#EEECEA] transition-colors duration-200"
                >
                  Apply now →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Related articles ─────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-[#E8E6E3] py-16 lg:py-20">
          <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-2">
                Continue reading
              </p>
              <div className="flex items-center gap-5 mb-0">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C1F2E] shrink-0 whitespace-nowrap">
                  Related Articles
                </h2>
                <div className="flex-1 h-px bg-[#1C1F2E]/25 min-w-0" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((a, i) => (
                <NewsCard
                  key={a.slug}
                  slug={a.slug}
                  title={a.title}
                  category={a.category}
                  date={a.date}
                  image={a.image}
                  excerpt={a.excerpt}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
