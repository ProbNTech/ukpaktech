import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock, MapPin, Tag, ExternalLink, Users, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { events, getEventBySlug, getRelatedEvents } from "@/data/events";
import { EventDetailClient } from "./EventDetailClient";

/* ------------------------------------------------------------------ */
/*  Static params                                                       */
/* ------------------------------------------------------------------ */
export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

/* ------------------------------------------------------------------ */
/*  Metadata                                                            */
/* ------------------------------------------------------------------ */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return {
    title: `${event.title} | UPTECH Events`,
    description: event.excerpt,
  };
}

/* ------------------------------------------------------------------ */
/*  Section heading — inline pattern                                   */
/* ------------------------------------------------------------------ */
function InlineHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-2">{label}</p>
      <div className="flex items-center gap-5 mb-0">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C1F2E] shrink-0 whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-px bg-[#1C1F2E]/25 min-w-0" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page component (server)                                        */
/* ------------------------------------------------------------------ */
export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const related = event.relatedSlugs ? getRelatedEvents(event.relatedSlugs) : [];

  const formattedDate = (() => {
    const d = new Date(event.dateISO);
    if (isNaN(d.getTime())) return event.date;
    return d.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  })();

  const categoryLabel =
    event.category === "London"
      ? "London Event"
      : event.category === "Pakistan"
      ? "Pakistan Event"
      : "UPTECH Event";

  return (
    <div>
      {/* ============================================================ */}
      {/*  EVENT HERO (client — has countdown timer)                   */}
      {/* ============================================================ */}
      <EventDetailClient
        title={event.title}
        dateISO={event.dateISO}
        category={categoryLabel}
        tag={event.tag}
        status={event.status}
      />

      {/* ============================================================ */}
      {/*  MAIN CONTENT                                                 */}
      {/* ============================================================ */}
      <section className="bg-[#EEECEA] py-16 lg:py-20">
        <div className="px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

            {/* -------------------------------------------------------- */}
            {/*  LEFT — Social share sidebar                              */}
            {/* -------------------------------------------------------- */}
            <div className="lg:w-12 shrink-0">
              <div className="lg:sticky lg:top-28">
                <div className="flex lg:flex-col gap-3">
                  {[
                    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://uptechcouncil.org/events/${event.slug}`)}` },
                    { label: "Twitter", href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://uptechcouncil.org/events/${event.slug}`)}&text=${encodeURIComponent(event.title)}` },
                    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://uptechcouncil.org/events/${event.slug}`)}` },
                    { label: "Email", href: `mailto:?subject=${encodeURIComponent(event.title)}&body=${encodeURIComponent(`Check out this event: https://uptechcouncil.org/events/${event.slug}`)}` },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.label !== "Email" ? "_blank" : undefined}
                      rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
                      aria-label={`Share on ${s.label}`}
                      className="w-9 h-9 border border-[#D8D5CF] flex items-center justify-center text-[#3D4152] hover:text-[#2563EB] hover:border-[#2563EB] transition-colors duration-200 text-[10px] font-bold uppercase"
                    >
                      {s.label.slice(0, 2)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------- */}
            {/*  RIGHT — Main editorial content                           */}
            {/* -------------------------------------------------------- */}
            <div className="flex-1 min-w-0">

              {/* Event Summary Card */}
              <AnimatedSection>
                <div className="bg-white border border-[#D8D5CF] p-6 sm:p-8 mb-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[#2563EB] mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#7A7E8F] font-semibold block mb-1">Date</span>
                        <span className="text-[#1C1F2E] font-medium text-sm">{formattedDate}</span>
                      </div>
                    </div>
                    {event.time && (
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-[#2563EB] mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs uppercase tracking-wider text-[#7A7E8F] font-semibold block mb-1">Time</span>
                          <span className="text-[#1C1F2E] font-medium text-sm">{event.time}</span>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#2563EB] mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#7A7E8F] font-semibold block mb-1">Location</span>
                        <span className="text-[#1C1F2E] font-medium text-sm">{event.location}</span>
                      </div>
                    </div>
                    {event.price && (
                      <div className="flex items-start gap-3">
                        <Tag className="w-5 h-5 text-[#2563EB] mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs uppercase tracking-wider text-[#7A7E8F] font-semibold block mb-1">Price</span>
                          <span className="text-[#1C1F2E] font-medium text-sm">{event.price}</span>
                        </div>
                      </div>
                    )}
                    {event.officialLink && (
                      <div className="sm:col-span-2 pt-2 border-t border-[#D8D5CF]">
                        <a
                          href={event.officialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:underline"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit Official Website
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>

              {/* Event Image */}
              <AnimatedSection className="mb-12">
                <div className="relative aspect-[16/9] overflow-hidden bg-[#D8D5CF]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                </div>
              </AnimatedSection>

              {/* Description */}
              <AnimatedSection className="mb-16">
                <InlineHeading label="Overview" title="About This Event" />
                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-[#3D4152] font-medium">
                    {event.excerpt}
                  </p>
                  {event.body.map((para, i) => (
                    <p key={i} className="text-base leading-relaxed text-[#3D4152]">
                      {para}
                    </p>
                  ))}
                </div>
              </AnimatedSection>

              {/* Agenda (optional) */}
              {event.agenda && event.agenda.length > 0 && (
                <AnimatedSection className="mb-16">
                  <InlineHeading label="Schedule" title="Event Agenda" />
                  <div className="bg-white border border-[#D8D5CF]">
                    {event.agenda.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-4 sm:gap-6 px-6 py-4 border-b border-[#D8D5CF] last:border-b-0 hover:bg-[#EEECEA] transition-colors duration-200"
                      >
                        <div className="shrink-0 w-36 sm:w-44">
                          <span className="text-sm font-semibold text-[#2563EB]">{item.time}</span>
                        </div>
                        <div className="flex items-center gap-3 min-w-0">
                          <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                          <span className="text-[#1C1F2E] font-medium text-sm sm:text-base">{item.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              {/* Speakers (optional) */}
              {event.speakers && event.speakers.length > 0 && (
                <AnimatedSection className="mb-16">
                  <InlineHeading label="Featured" title="Speakers" />
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                    {event.speakers.map((speaker) => (
                      <div key={speaker.name} className="text-center group">
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 overflow-hidden bg-[#D8D5CF]">
                          {speaker.image ? (
                            <Image
                              src={speaker.image}
                              alt={speaker.name}
                              fill
                              className="object-cover"
                              sizes="112px"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-[#D8D5CF]">
                              <Users className="w-8 h-8 text-[#7A7E8F]" />
                            </div>
                          )}
                        </div>
                        <h4 className="font-heading font-semibold text-sm text-[#1C1F2E] mb-1 group-hover:text-[#2563EB] transition-colors duration-200">
                          {speaker.name}
                        </h4>
                        <p className="text-xs leading-snug text-[#3D4152]">{speaker.title}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              {/* CTA */}
              <AnimatedSection className="mb-16">
                <div className="bg-[#1C1F2E] p-8 sm:p-12">
                  <Users className="w-8 h-8 text-[#22C55E] mb-5" />
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
                    Interested in Attending?
                  </h3>
                  <div className="h-px bg-white/20 mb-5" />
                  <p className="text-base text-white/70 max-w-xl mb-8 leading-relaxed">
                    Register your interest below and our team will be in touch with confirmation details, agenda updates, and delegate information.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {event.officialLink ? (
                      <a
                        href={event.officialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1d4ed8] transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Official Website
                      </a>
                    ) : (
                      <Button variant="primary" size="lg" showArrow>
                        Register Interest
                      </Button>
                    )}
                    <Button href="/events" variant="glass" size="lg">
                      View All Events
                    </Button>
                  </div>
                </div>
              </AnimatedSection>

              {/* Related Events */}
              {related.length > 0 && (
                <AnimatedSection>
                  <InlineHeading label="See also" title="Related Events" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {related.map((rel) => (
                      <Link key={rel.slug} href={`/events/${rel.slug}`} className="group block">
                        <div className="bg-white border border-[#D8D5CF] overflow-hidden hover:shadow-md transition-shadow duration-300">
                          <div className="relative aspect-video bg-[#D8D5CF]">
                            <Image
                              src={rel.image}
                              alt={rel.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 640px) 100vw, 300px"
                            />
                            <div className="absolute top-3 left-3 px-2 py-1 bg-[#2563EB] text-white text-[10px] font-bold uppercase tracking-wider">
                              {rel.tag}
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="text-xs text-[#2563EB] font-semibold mb-1">{rel.date}</p>
                            <h4 className="font-heading font-semibold text-sm text-[#1C1F2E] group-hover:text-[#2563EB] transition-colors duration-200 line-clamp-2">
                              {rel.title}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </AnimatedSection>
              )}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
