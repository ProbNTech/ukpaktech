"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface TimelineItem {
  id: number;
  title: string;
  content: string;
  icon: React.ElementType;
  href: string;
  color: string;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const newPulse: Record<number, boolean> = {};
        relatedItems.forEach((relId) => { newPulse[relId] = true; });
        setPulseEffect(newPulse);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoRotate) {
      timer = setInterval(() => {
        setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
      }, 50);
    }
    return () => { if (timer) clearInterval(timer); };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const targetAngle = (nodeIndex / timelineData.length) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 260;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.5, Math.min(1, 0.5 + 0.5 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const item = timelineData.find((i) => i.id === itemId);
    return item ? item.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  return (
    <div
      className="w-full h-[650px] sm:h-[750px] flex items-center justify-center overflow-visible"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-3xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* Center orb with brand gradient */}
          <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-[#2563EB] via-[#22C55E] to-[#C41E3A] animate-pulse flex items-center justify-center z-10 shadow-lg shadow-[#2563EB]/20">
            <div className="absolute w-24 h-24 rounded-full border border-[#2563EB]/20 animate-ping opacity-60" />
            <div className="absolute w-28 h-28 rounded-full border border-[#22C55E]/15 animate-ping opacity-40" style={{ animationDelay: "0.5s" }} />
            <div className="absolute w-32 h-32 rounded-full border border-[#C41E3A]/10 animate-ping opacity-30" style={{ animationDelay: "1s" }} />
            <div className="w-10 h-10 rounded-full bg-white shadow-inner" />
          </div>

          {/* Orbit ring */}
          <div className="absolute w-[520px] h-[520px] sm:w-[560px] sm:h-[560px] rounded-full border border-[#D8D5CF]" />
          <div className="absolute w-[524px] h-[524px] sm:w-[564px] sm:h-[564px] rounded-full border border-[#D8D5CF]/40" />

          {/* Nodes */}
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                }}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
              >
                {/* Energy glow */}
                <div
                  className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse" : ""}`}
                  style={{
                    background: `radial-gradient(circle, ${item.color}20 0%, transparent 70%)`,
                    width: `${item.energy * 0.6 + 48}px`,
                    height: `${item.energy * 0.6 + 48}px`,
                    left: `-${(item.energy * 0.6 + 48 - 48) / 2}px`,
                    top: `-${(item.energy * 0.6 + 48 - 48) / 2}px`,
                  }}
                />

                {/* Node circle */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-md ${isExpanded ? "scale-150" : ""}`}
                  style={{
                    background: isExpanded ? item.color : isRelated ? `${item.color}15` : "white",
                    borderColor: isExpanded ? item.color : isRelated ? item.color : `${item.color}50`,
                    boxShadow: isExpanded ? `0 0 24px ${item.color}30` : `0 2px 8px rgba(0,0,0,0.08)`,
                  }}
                >
                  <Icon size={18} style={{ color: isExpanded ? "white" : item.color }} />
                </div>

                {/* Node label */}
                <div
                  className={`absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300 ${isExpanded ? "top-20 scale-110" : ""}`}
                  style={{ color: isExpanded ? item.color : "#3D4152" }}
                >
                  {item.title}
                </div>

                {/* Expanded card */}
                {isExpanded && (
                  <div className="absolute top-28 left-1/2 -translate-x-1/2 w-72 rounded-xl border border-[#D8D5CF] bg-white shadow-xl overflow-visible z-50">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3" style={{ background: item.color }} />
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-2">
                        <span
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                          style={{ background: `${item.color}10`, borderColor: `${item.color}30`, color: item.color }}
                        >
                          {item.status === "completed" ? "ACTIVE" : item.status === "in-progress" ? "GROWING" : "PLANNED"}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-[#1C1F2E] mb-2">{item.title}</h4>
                      <p className="text-xs text-[#3D4152]/70 leading-relaxed mb-3">{item.content}</p>

                      {/* Link to page */}
                      <Link
                        href={item.href}
                        className="flex items-center justify-center gap-2 w-full py-2 text-xs font-semibold rounded-lg border transition-all hover:opacity-80"
                        style={{ borderColor: `${item.color}30`, color: item.color, background: `${item.color}08` }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Explore <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
