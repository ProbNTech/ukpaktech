"use client";

/* ─────────────────────────────────────────────────────────────────
   Static Constellation Background
   Renders a fixed geometric network pattern (SVG) inspired by
   worldscienceforum.org — light cyan/blue lines & nodes with
   subtle pink/red accents. No animation, no JS overhead.
───────────────────────────────────────────────────────────────── */

/* ── Pre-defined node positions (x%, y%) ── */
const nodes: { x: number; y: number; r: number; color: "blue" | "red" }[] = [
  // Top-left cluster
  { x: 3, y: 2, r: 3, color: "blue" },
  { x: 8, y: 6, r: 5, color: "blue" },
  { x: 2, y: 12, r: 4, color: "blue" },
  { x: 14, y: 4, r: 3, color: "red" },
  { x: 12, y: 14, r: 6, color: "blue" },
  { x: 6, y: 18, r: 3, color: "blue" },
  { x: 18, y: 10, r: 4, color: "blue" },
  { x: 20, y: 2, r: 3, color: "blue" },

  // Top-center
  { x: 28, y: 3, r: 4, color: "blue" },
  { x: 35, y: 7, r: 5, color: "blue" },
  { x: 32, y: 14, r: 3, color: "red" },
  { x: 40, y: 2, r: 3, color: "blue" },
  { x: 42, y: 11, r: 4, color: "blue" },
  { x: 25, y: 10, r: 3, color: "blue" },

  // Top-right
  { x: 55, y: 4, r: 4, color: "blue" },
  { x: 60, y: 8, r: 5, color: "red" },
  { x: 65, y: 3, r: 3, color: "blue" },
  { x: 70, y: 10, r: 4, color: "blue" },
  { x: 58, y: 14, r: 3, color: "blue" },
  { x: 75, y: 5, r: 3, color: "blue" },

  // Far right top
  { x: 82, y: 3, r: 4, color: "blue" },
  { x: 88, y: 7, r: 5, color: "blue" },
  { x: 85, y: 14, r: 3, color: "blue" },
  { x: 92, y: 4, r: 3, color: "red" },
  { x: 95, y: 11, r: 4, color: "blue" },
  { x: 98, y: 2, r: 3, color: "blue" },

  // Mid-left
  { x: 4, y: 25, r: 4, color: "blue" },
  { x: 10, y: 28, r: 5, color: "blue" },
  { x: 7, y: 35, r: 3, color: "blue" },
  { x: 15, y: 22, r: 3, color: "blue" },
  { x: 18, y: 30, r: 4, color: "red" },
  { x: 13, y: 38, r: 3, color: "blue" },

  // Center
  { x: 30, y: 25, r: 5, color: "blue" },
  { x: 38, y: 22, r: 3, color: "blue" },
  { x: 35, y: 30, r: 4, color: "blue" },
  { x: 45, y: 27, r: 3, color: "red" },
  { x: 42, y: 35, r: 5, color: "blue" },
  { x: 28, y: 34, r: 3, color: "blue" },

  // Center-right
  { x: 55, y: 24, r: 4, color: "blue" },
  { x: 62, y: 20, r: 3, color: "blue" },
  { x: 58, y: 30, r: 5, color: "blue" },
  { x: 68, y: 26, r: 3, color: "blue" },
  { x: 65, y: 34, r: 4, color: "red" },
  { x: 72, y: 22, r: 3, color: "blue" },

  // Far right mid
  { x: 80, y: 24, r: 4, color: "blue" },
  { x: 86, y: 20, r: 3, color: "blue" },
  { x: 83, y: 32, r: 5, color: "blue" },
  { x: 90, y: 28, r: 3, color: "blue" },
  { x: 95, y: 22, r: 4, color: "blue" },
  { x: 97, y: 30, r: 3, color: "red" },

  // Row 3 — lower-mid
  { x: 5, y: 45, r: 4, color: "blue" },
  { x: 12, y: 48, r: 3, color: "blue" },
  { x: 8, y: 55, r: 5, color: "blue" },
  { x: 18, y: 44, r: 3, color: "red" },
  { x: 15, y: 52, r: 4, color: "blue" },
  { x: 22, y: 48, r: 3, color: "blue" },

  { x: 30, y: 45, r: 4, color: "blue" },
  { x: 36, y: 42, r: 3, color: "blue" },
  { x: 33, y: 50, r: 5, color: "blue" },
  { x: 40, y: 48, r: 3, color: "blue" },
  { x: 45, y: 44, r: 4, color: "blue" },
  { x: 42, y: 55, r: 3, color: "red" },

  { x: 55, y: 45, r: 4, color: "blue" },
  { x: 60, y: 42, r: 3, color: "blue" },
  { x: 58, y: 52, r: 5, color: "blue" },
  { x: 66, y: 48, r: 3, color: "red" },
  { x: 70, y: 44, r: 4, color: "blue" },
  { x: 64, y: 56, r: 3, color: "blue" },

  { x: 78, y: 44, r: 4, color: "blue" },
  { x: 84, y: 42, r: 3, color: "blue" },
  { x: 80, y: 52, r: 5, color: "blue" },
  { x: 90, y: 46, r: 3, color: "blue" },
  { x: 94, y: 42, r: 4, color: "red" },
  { x: 96, y: 52, r: 3, color: "blue" },

  // Row 4
  { x: 3, y: 65, r: 4, color: "blue" },
  { x: 10, y: 62, r: 3, color: "blue" },
  { x: 7, y: 70, r: 5, color: "blue" },
  { x: 16, y: 68, r: 3, color: "blue" },
  { x: 20, y: 64, r: 4, color: "red" },

  { x: 28, y: 62, r: 3, color: "blue" },
  { x: 34, y: 65, r: 5, color: "blue" },
  { x: 38, y: 60, r: 3, color: "blue" },
  { x: 44, y: 64, r: 4, color: "blue" },
  { x: 40, y: 72, r: 3, color: "red" },

  { x: 52, y: 64, r: 4, color: "blue" },
  { x: 58, y: 60, r: 3, color: "blue" },
  { x: 56, y: 68, r: 5, color: "blue" },
  { x: 64, y: 65, r: 3, color: "blue" },
  { x: 68, y: 62, r: 4, color: "blue" },
  { x: 62, y: 72, r: 3, color: "red" },

  { x: 76, y: 62, r: 4, color: "blue" },
  { x: 82, y: 66, r: 5, color: "blue" },
  { x: 88, y: 62, r: 3, color: "blue" },
  { x: 85, y: 70, r: 3, color: "blue" },
  { x: 92, y: 66, r: 4, color: "red" },
  { x: 97, y: 64, r: 3, color: "blue" },

  // Row 5 — lower
  { x: 5, y: 80, r: 4, color: "blue" },
  { x: 12, y: 78, r: 3, color: "blue" },
  { x: 8, y: 85, r: 5, color: "red" },
  { x: 18, y: 82, r: 3, color: "blue" },
  { x: 15, y: 88, r: 4, color: "blue" },

  { x: 28, y: 80, r: 4, color: "blue" },
  { x: 34, y: 78, r: 3, color: "blue" },
  { x: 30, y: 86, r: 5, color: "blue" },
  { x: 40, y: 82, r: 3, color: "blue" },
  { x: 38, y: 90, r: 4, color: "red" },

  { x: 52, y: 80, r: 4, color: "blue" },
  { x: 58, y: 76, r: 3, color: "blue" },
  { x: 55, y: 84, r: 5, color: "blue" },
  { x: 64, y: 80, r: 3, color: "red" },
  { x: 60, y: 90, r: 4, color: "blue" },

  { x: 75, y: 78, r: 4, color: "blue" },
  { x: 82, y: 82, r: 5, color: "blue" },
  { x: 78, y: 88, r: 3, color: "blue" },
  { x: 88, y: 80, r: 3, color: "red" },
  { x: 92, y: 85, r: 4, color: "blue" },
  { x: 96, y: 78, r: 3, color: "blue" },

  // Bottom row
  { x: 4, y: 94, r: 3, color: "blue" },
  { x: 12, y: 96, r: 4, color: "blue" },
  { x: 20, y: 94, r: 3, color: "blue" },
  { x: 30, y: 96, r: 4, color: "blue" },
  { x: 42, y: 95, r: 3, color: "red" },
  { x: 55, y: 94, r: 4, color: "blue" },
  { x: 65, y: 96, r: 3, color: "blue" },
  { x: 78, y: 95, r: 4, color: "blue" },
  { x: 88, y: 94, r: 3, color: "blue" },
  { x: 96, y: 96, r: 4, color: "red" },
];

/* ── Build edges: connect nodes within threshold distance ── */
const CONNECT_THRESHOLD = 16; // % distance
const edges: { i: number; j: number; dist: number }[] = [];
for (let i = 0; i < nodes.length; i++) {
  for (let j = i + 1; j < nodes.length; j++) {
    const dx = nodes[i].x - nodes[j].x;
    const dy = nodes[i].y - nodes[j].y;
    const d = Math.sqrt(dx * dx + dy * dy);
    if (d < CONNECT_THRESHOLD) {
      edges.push({ i, j, dist: d });
    }
  }
}

/* ── Color map ── */
const COLORS = {
  blue: {
    fill: "#b8e4f0",
    stroke: "#7dd3e8",
    line: "rgba(135, 215, 235, 0.35)",
  },
  red: {
    fill: "#f5c6cb",
    stroke: "#e8a0aa",
    line: "rgba(220, 130, 145, 0.3)",
  },
};

export function StaticConstellationBG() {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Lines */}
        {edges.map(({ i, j, dist }) => {
          const a = nodes[i];
          const b = nodes[j];
          const isRed = a.color === "red" || b.color === "red";
          const opacity = 1 - dist / CONNECT_THRESHOLD;
          return (
            <line
              key={`${i}-${j}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={isRed ? `rgba(220, 130, 145, ${0.3 * opacity})` : `rgba(135, 215, 235, ${0.35 * opacity})`}
              strokeWidth="0.12"
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((n, i) => {
          const c = COLORS[n.color];
          return (
            <circle
              key={i}
              cx={n.x}
              cy={n.y}
              r={n.r * 0.08}
              fill={c.fill}
              stroke={c.stroke}
              strokeWidth="0.06"
            />
          );
        })}
      </svg>
    </div>
  );
}
