"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  end: number;
  suffix?: string;
}

export default function StatsCounter({ end, suffix }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      {isInView && (
        <CountUp
          start={1}
          end={end}
          duration={3}
          suffix={suffix}
        />
      )}
    </span>
  );
}