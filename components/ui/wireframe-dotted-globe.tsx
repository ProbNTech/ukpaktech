"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { FeatureCollection, Feature, Geometry } from "geojson";

/* ISO 3166-1 numeric codes for highlighted countries */
const HIGHLIGHT_CODES: Record<string, string> = {
  "826": "#2563EB", // UK  — Blue
  "586": "#22C55E", // Pakistan — Green
};

/* Approx centroids for the connection arc */
const UK_CENTER: [number, number] = [-2, 54];
const PAK_CENTER: [number, number] = [69, 30];

interface GlobeProps {
  size?: number;
  className?: string;
}

export function WireframeDottedGlobe({ size = 500, className = "" }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef({ x: -30, y: -20 }); // start facing UK/Pak region
  const velocityRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const animIdRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let s = Math.min(container.getBoundingClientRect().width, container.getBoundingClientRect().height, size);
    const dpr = window.devicePixelRatio || 1;
    canvas.width = s * dpr;
    canvas.height = s * dpr;
    canvas.style.width = `${s}px`;
    canvas.style.height = `${s}px`;
    ctx.scale(dpr, dpr);

    const projection = d3
      .geoOrthographic()
      .scale(s / 2 - 20)
      .translate([s / 2, s / 2])
      .clipAngle(90);

    const pathGenerator = d3.geoPath().projection(projection).context(ctx);
    const graticule = d3.geoGraticule().step([15, 15])();

    /* Load world topology */
    let countries: FeatureCollection<Geometry> | null = null;
    let landFeature: Feature<Geometry> | null = null;

    import("world-atlas/countries-110m.json").then((topoRaw) => {
      const topo = topoRaw.default as unknown as Topology<{ countries: GeometryCollection; land: GeometryCollection }>;
      countries = feature(topo, topo.objects.countries) as unknown as FeatureCollection<Geometry>;
      if (topo.objects.land) {
        const landCollection = feature(topo, topo.objects.land) as unknown as FeatureCollection<Geometry>;
        landFeature = landCollection.features[0];
      }
    });

    let time = 0;

    const draw = () => {
      time += 0.016;

      if (!isDraggingRef.current) {
        rotationRef.current.x += 0.12;
        rotationRef.current.x += velocityRef.current.x;
        rotationRef.current.y += velocityRef.current.y;
        velocityRef.current.x *= 0.95;
        velocityRef.current.y *= 0.95;
      }

      rotationRef.current.y = Math.max(-60, Math.min(60, rotationRef.current.y));
      projection.rotate([rotationRef.current.x, rotationRef.current.y]);

      ctx.clearRect(0, 0, s, s);

      /* Globe background — dark sphere */
      ctx.beginPath();
      ctx.arc(s / 2, s / 2, s / 2 - 20, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(11, 15, 26, 0.4)";
      ctx.fill();

      /* Globe outline */
      ctx.beginPath();
      pathGenerator({ type: "Sphere" } as d3.GeoPermissibleObjects);
      ctx.strokeStyle = "rgba(37, 99, 235, 0.3)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      /* Graticule wireframe */
      ctx.beginPath();
      pathGenerator(graticule);
      ctx.strokeStyle = "rgba(37, 99, 235, 0.1)";
      ctx.lineWidth = 0.4;
      ctx.stroke();

      if (countries) {
        /* Regular countries — subtle fill + border */
        for (const f of countries.features) {
          const id = String((f as Feature & { id?: string | number }).id ?? "");
          const highlightColor = HIGHLIGHT_CODES[id];

          if (!highlightColor) {
            ctx.beginPath();
            pathGenerator(f);
            ctx.fillStyle = "rgba(37, 99, 235, 0.08)";
            ctx.fill();
            ctx.strokeStyle = "rgba(37, 99, 235, 0.2)";
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }

        /* Highlighted countries — UK and Pakistan with glow */
        for (const f of countries.features) {
          const id = String((f as Feature & { id?: string | number }).id ?? "");
          const highlightColor = HIGHLIGHT_CODES[id];

          if (highlightColor) {
            // Pulsing glow
            const pulse = 0.6 + 0.4 * Math.sin(time * 2);

            // Outer glow pass
            ctx.beginPath();
            pathGenerator(f);
            ctx.fillStyle = highlightColor + Math.round(pulse * 80).toString(16).padStart(2, "0");
            ctx.fill();

            // Main fill
            ctx.beginPath();
            pathGenerator(f);
            ctx.fillStyle = highlightColor + "90";
            ctx.fill();

            // Bright border
            ctx.beginPath();
            pathGenerator(f);
            ctx.strokeStyle = highlightColor;
            ctx.lineWidth = 1.8;
            ctx.shadowColor = highlightColor;
            ctx.shadowBlur = 12 * pulse;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }

        /* Connection arc between UK and Pakistan */
        const ukProj = projection(UK_CENTER);
        const pakProj = projection(PAK_CENTER);

        if (ukProj && pakProj) {
          // Great-circle line
          const line: GeoJSON.Feature<GeoJSON.LineString> = {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: [UK_CENTER, PAK_CENTER],
            },
          };

          const arcPulse = 0.5 + 0.5 * Math.sin(time * 3);

          ctx.beginPath();
          pathGenerator(line);
          ctx.strokeStyle = `rgba(196, 30, 58, ${0.4 + arcPulse * 0.4})`;
          ctx.lineWidth = 2;
          ctx.setLineDash([6, 4]);
          ctx.shadowColor = "#C41E3A";
          ctx.shadowBlur = 8 * arcPulse;
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.shadowBlur = 0;

          // Endpoint dots
          for (const pt of [ukProj, pakProj]) {
            ctx.beginPath();
            ctx.arc(pt[0], pt[1], 4, 0, Math.PI * 2);
            ctx.fillStyle = "#C41E3A";
            ctx.shadowColor = "#C41E3A";
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      animIdRef.current = requestAnimationFrame(draw);
    };

    draw();

    /* Mouse interaction */
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      lastPosRef.current = { x: e.clientX, y: e.clientY };
      velocityRef.current = { x: 0, y: 0 };
      canvas.style.cursor = "grabbing";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      rotationRef.current.x += dx * 0.3;
      rotationRef.current.y -= dy * 0.3;
      velocityRef.current = { x: dx * 0.15, y: -dy * 0.15 };
      lastPosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      canvas.style.cursor = "grab";
    };

    /* Touch interaction */
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        lastPosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        velocityRef.current = { x: 0, y: 0 };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      e.preventDefault();
      const dx = e.touches[0].clientX - lastPosRef.current.x;
      const dy = e.touches[0].clientY - lastPosRef.current.y;
      rotationRef.current.x += dx * 0.3;
      rotationRef.current.y -= dy * 0.3;
      velocityRef.current = { x: dx * 0.15, y: -dy * 0.15 };
      lastPosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    canvas.addEventListener("touchend", handleTouchEnd);

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      s = Math.min(rect.width, rect.height, size);
      const newDpr = window.devicePixelRatio || 1;
      canvas.width = s * newDpr;
      canvas.height = s * newDpr;
      canvas.style.width = `${s}px`;
      canvas.style.height = `${s}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(newDpr, newDpr);
      projection.scale(s / 2 - 20).translate([s / 2, s / 2]);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animIdRef.current);
      canvas.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", handleResize);
    };
  }, [size]);

  return (
    <div
      ref={containerRef}
      className={`flex items-center justify-center ${className}`}
      style={{ width: "100%", height: "100%" }}
    >
      <canvas
        ref={canvasRef}
        style={{ cursor: "grab", maxWidth: "100%", maxHeight: "100%" }}
      />
    </div>
  );
}
