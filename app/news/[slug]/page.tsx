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
    <div className="bg-white">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative w-full h-[55vh] min-h-[380px] -mt-[72px] overflow-hidden bg-gray-900">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

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

            {/* Category badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
                <Tag className="w-3 h-3 text-[#22C55E]" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  {article.category}
                </span>
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight max-w-4xl">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] z-20 bg-gradient-to-r from-[#2563EB] via-[#22C55E] to-[#E11D48]" />
      </section>

      {/* ── Article body ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Main content */}
            <article className="flex-1 min-w-0">
              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-5 mb-8 pb-8 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-[#2563EB]/10 flex items-center justify-center">
                    <User className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1F2937]">{article.author}</p>
                    <p className="text-xs text-[#94A3B8]">{article.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#94A3B8]" />
                  <span className="text-sm text-[#94A3B8]">{article.date}</span>
                </div>
              </div>

              {/* Excerpt / lead */}
              <p className="text-lg text-[#475569] leading-relaxed mb-8 font-medium border-l-4 border-[#2563EB] pl-5">
                {article.excerpt}
              </p>

              {/* Body paragraphs */}
              <div className="space-y-6">
                {article.body.map((paragraph, i) => (
                  <p key={i} className="text-base text-[#4B5563] leading-[1.8]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Back link */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:gap-3 transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to News &amp; Events
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0 space-y-8">
              {/* About UPTECH card */}
              <div className="rounded-2xl border border-gray-100 shadow-md p-6 bg-[#F8FAFC]">
                <div className="h-[2px] bg-gradient-to-r from-[#2563EB] to-[#22C55E] -mx-6 -mt-6 mb-6 rounded-t-2xl" />
                <h3 className="font-heading font-bold text-base text-[#1F2937] mb-3">
                  About UPTECH
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                  The UK–Pakistan Tech Council is a bilateral technology platform established to strengthen innovation, digital trade, and institutional collaboration between the two nations.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:gap-2.5 transition-all duration-300"
                >
                  Learn more
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Become a member CTA */}
              <div className="rounded-2xl bg-[#2563EB] p-6 text-white">
                <h3 className="font-heading font-bold text-base mb-2">
                  Become a Member
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-5">
                  Join UPTECH to access exclusive research, events, and the bilateral network.
                </p>
                <Link
                  href="/membership"
                  className="block text-center py-2.5 px-4 rounded-lg bg-white text-[#2563EB] text-sm font-semibold hover:bg-gray-100 transition-colors duration-300"
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
        <section className="bg-[#F8FAFC] py-16 lg:py-20">
          <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="mb-10">
              <span className="text-sm font-semibold text-[#1F2937] mb-2 block">
                Continue reading
              </span>
              <div className="flex items-center gap-6 mb-4">
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#2563EB] shrink-0">
                  Related Articles
                </h2>
                <div className="flex-1 h-[2px] bg-[#22C55E]" />
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
