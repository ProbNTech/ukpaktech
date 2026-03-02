"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 610.398 610.398"
      fill="#C41E3A"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M159.567,0h-15.329c-1.956,0-3.811,0.411-5.608,0.995c-8.979,2.912-15.616,12.498-15.616,23.997v10.552v27.009v14.052c0,2.611,0.435,5.078,1.066,7.44c2.702,10.146,10.653,17.552,20.158,17.552h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C180.791,11.188,171.291,0,159.567,0z"/>
      <path d="M461.288,0h-15.329c-11.724,0-21.224,11.188-21.224,24.992v10.552v27.009v14.052c0,13.804,9.5,24.992,21.224,24.992h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C482.507,11.188,473.007,0,461.288,0z"/>
      <path d="M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z"/>
      <path d="M353.017,266.258h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759H353.017c-10.193,0-18.437,10.179-18.437,22.759C334.58,256.074,342.823,266.258,353.017,266.258z"/>
      <path d="M353.017,348.467h117.428c10.193,0,18.437-10.179,18.437-22.759c0-12.579-8.248-22.758-18.437-22.758H353.017c-10.193,0-18.437,10.179-18.437,22.758C334.58,338.288,342.823,348.467,353.017,348.467z"/>
      <path d="M353.017,430.676h117.428c10.193,0,18.437-10.18,18.437-22.759s-8.248-22.759-18.437-22.759H353.017c-10.193,0-18.437,10.18-18.437,22.759S342.823,430.676,353.017,430.676z"/>
      <path d="M353.017,512.89h117.428c10.193,0,18.437-10.18,18.437-22.759c0-12.58-8.248-22.759-18.437-22.759H353.017c-10.193,0-18.437,10.179-18.437,22.759C334.58,502.71,342.823,512.89,353.017,512.89z"/>
      <path d="M145.032,266.258H262.46c10.193,0,18.436-10.179,18.436-22.759s-8.248-22.759-18.436-22.759H145.032c-10.194,0-18.437,10.179-18.437,22.759C126.596,256.074,134.838,266.258,145.032,266.258z"/>
      <path d="M145.032,348.467H262.46c10.193,0,18.436-10.179,18.436-22.759c0-12.579-8.248-22.758-18.436-22.758H145.032c-10.194,0-18.437,10.179-18.437,22.758C126.596,338.288,134.838,348.467,145.032,348.467z"/>
      <path d="M145.032,430.676H262.46c10.193,0,18.436-10.18,18.436-22.759s-8.248-22.759-18.436-22.759H145.032c-10.194,0-18.437,10.18-18.437,22.759S134.838,430.676,145.032,430.676z"/>
      <path d="M145.032,512.89H262.46c10.193,0,18.436-10.18,18.436-22.759c0-12.58-8.248-22.759-18.436-22.759H145.032c-10.194,0-18.437,10.179-18.437,22.759C126.596,502.71,134.838,512.89,145.032,512.89z"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 64 64"
      fill="#C41E3A"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: "2px" }}
    >
      <path d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"/>
    </svg>
  );
}

interface Event {
  title: string;
  date: string;
  location: string;
  summary: string;
  image: string;
  slug?: string;
  tag?: string;
}

interface EventGridProps {
  events: Event[];
  hideBadge?: boolean;
}

export function EventGrid({ events, hideBadge = false }: EventGridProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => {
        const card = (
          <div className="relative h-full bg-white border border-[#D8D5CF] rounded hover:border-[#2563EB]/40 transition-colors duration-300">
            {/* Tag badge */}
            {event.tag && !hideBadge && (
              <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-[#2563EB] text-white text-base font-bold uppercase tracking-wider">
                {event.tag}
              </div>
            )}

            {/* Image / placeholder area */}
            <div className="aspect-[4/3] bg-[#1C1F2E] relative overflow-hidden flex items-center justify-center">
              {event.image ? (
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <>
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)",
                      backgroundSize: "12px 12px",
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 610.398 610.398" fill="rgba(255,255,255,0.25)" aria-hidden="true">
                      <path d="M159.567,0h-15.329c-1.956,0-3.811,0.411-5.608,0.995c-8.979,2.912-15.616,12.498-15.616,23.997v10.552v27.009v14.052c0,2.611,0.435,5.078,1.066,7.44c2.702,10.146,10.653,17.552,20.158,17.552h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C180.791,11.188,171.291,0,159.567,0z"/>
                      <path d="M461.288,0h-15.329c-11.724,0-21.224,11.188-21.224,24.992v10.552v27.009v14.052c0,13.804,9.5,24.992,21.224,24.992h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C482.507,11.188,473.007,0,461.288,0z"/>
                      <path d="M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z"/>
                      <path d="M353.017,266.258h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759H353.017c-10.193,0-18.437,10.179-18.437,22.759C334.58,256.074,342.823,266.258,353.017,266.258z"/>
                      <path d="M353.017,348.467h117.428c10.193,0,18.437-10.179,18.437-22.759c0-12.579-8.248-22.758-18.437-22.758H353.017c-10.193,0-18.437,10.179-18.437,22.758C334.58,338.288,342.823,348.467,353.017,348.467z"/>
                      <path d="M145.032,266.258H262.46c10.193,0,18.436-10.179,18.436-22.759s-8.248-22.759-18.436-22.759H145.032c-10.194,0-18.437,10.179-18.437,22.759C126.596,256.074,134.838,266.258,145.032,266.258z"/>
                      <path d="M145.032,348.467H262.46c10.193,0,18.436-10.179,18.436-22.759c0-12.579-8.248-22.758-18.436-22.758H145.032c-10.194,0-18.437,10.179-18.437,22.758C126.596,338.288,134.838,348.467,145.032,348.467z"/>
                    </svg>
                    {event.tag && (
                      <span className="text-white/40 text-base font-semibold uppercase tracking-widest">{event.tag}</span>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title */}
              <h3 className="font-heading font-bold text-lg mb-2 text-[#1C1F2E] group-hover:text-[#2563EB] transition-colors duration-200 line-clamp-2 leading-snug">
                {event.title}
              </h3>

              {/* Summary */}
              <p className="text-base mb-4 leading-relaxed line-clamp-2 text-[#3D4152]">
                {event.summary}
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 text-base font-semibold text-[#C41E3A] uppercase tracking-wide mb-3">
                <CalendarIcon />
                {event.date}
              </div>

              {/* Location */}
              {event.location && (
                <div className="flex items-start gap-2 text-base mb-5 text-[#3D4152]">
                  <LocationIcon />
                  <span className="line-clamp-1">{event.location}</span>
                </div>
              )}

              <div className="h-px bg-[#D8D5CF] mb-4" />

              {/* Learn more */}
              <div className="flex items-center gap-2 text-base font-semibold text-[#2563EB] group-hover:gap-3 transition-all duration-200">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        );

        return (
          <motion.div
            key={index}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="group"
          >
            {event.slug ? (
              <Link href={`/events/${event.slug}`} className="block h-full">
                {card}
              </Link>
            ) : (
              card
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
