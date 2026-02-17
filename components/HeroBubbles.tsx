"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

export function HeroBubbles() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants for bubbles
  const bubbleVariants = {
    animated: {
      y: [0, -30, 0],
      opacity: [0.4, 0.7, 0.4],
      scale: [1, 1.5, 1],
    },
    static: {
      y: 0,
      opacity: 0.4,
      scale: 1,
    },
  };

  // Transition configs
  const bubbleTransitions = Array.from({ length: 6 }, (_, i) => ({
    duration: 3 + i,
    repeat: Infinity,
    delay: i * 0.5,
    ease: "easeInOut" as const,
  }));

  // Color array for bubbles
  const bubbleColors = ["#2563EB", "#22C55E"];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles/bubbles */}
      {Array.from({ length: 6 }).map((_, i) => {
        const color = bubbleColors[i % 3];
        const left = `${20 + i * 15}%`;
        const top = `${30 + (i % 2) * 40}%`;

        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: color,
              opacity: 0.4,
              left,
              top,
            }}
            animate={shouldReduceMotion ? bubbleVariants.static : bubbleVariants.animated}
            transition={bubbleTransitions[i]}
          />
        );
      })}
    </div>
  );
}
