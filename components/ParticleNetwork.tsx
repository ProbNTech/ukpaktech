"use client";

import { useEffect, useRef, useCallback } from "react";

/* ─────────────────────────────────────────────────────────────────
   Interactive particle constellation background
   • Blue (#1a2b5e) and red (#C41E3A) floating nodes connected by lines
   • Cursor repulsion — particles flee from the mouse
   • Responsive particle count for mobile/tablet/desktop
   • High-DPI (Retina) canvas rendering
───────────────────────────────────────────────────────────────── */

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glowColor: string;
  opacity: number;
  isRed: boolean;
}

/* ── Colour palette ──────────────────────────────────────────── */
const BLUE_SHADES = [
  "26, 43, 94",   // #1a2b5e
  "30, 58, 138",  // #1e3a8a
  "59, 130, 246", // #3b82f6
  "37, 99, 235",  // #2563eb
];
const RED_SHADES = [
  "196, 30, 58",  // #C41E3A
  "220, 38, 38",  // #dc2626
  "239, 68, 68",  // #ef4444
];

/* ── Tuning constants ────────────────────────────────────────── */
const CONNECTION_DISTANCE = 160;
const REPULSION_RADIUS = 180;
const REPULSION_STRENGTH = 8000;
const RETURN_STRENGTH = 0.008;
const FRICTION = 0.97;
const BASE_SPEED = 0.3;

function getParticleCount(width: number): number {
  if (width > 1400) return 130;
  if (width > 1024) return 100;
  if (width > 768) return 70;
  return 45;
}

function createParticle(canvasW: number, canvasH: number): Particle {
  const isRed = Math.random() < 0.2; // 20% red, 80% blue
  const shades = isRed ? RED_SHADES : BLUE_SHADES;
  const shade = shades[Math.floor(Math.random() * shades.length)];
  const radius = 1.5 + Math.random() * 2.5;
  const x = Math.random() * canvasW;
  const y = Math.random() * canvasH;

  return {
    x,
    y,
    originX: x,
    originY: y,
    vx: (Math.random() - 0.5) * BASE_SPEED,
    vy: (Math.random() - 0.5) * BASE_SPEED,
    radius,
    color: shade,
    glowColor: shade,
    opacity: isRed ? 0.35 + Math.random() * 0.35 : 0.2 + Math.random() * 0.35,
    isRed,
  };
}

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const dimensionsRef = useRef({ w: 0, h: 0 });

  /* ── Initialise particles for current canvas size ──────────── */
  const initParticles = useCallback((w: number, h: number) => {
    const count = getParticleCount(w);
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push(createParticle(w, h));
    }
    particlesRef.current = particles;
    dimensionsRef.current = { w, h };
  }, []);

  /* ── Resize handler — updates canvas resolution & particles ─ */
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    canvas.width = w * dpr;
    canvas.height = h * dpr;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // Rescale existing particles or re-initialise
    const oldW = dimensionsRef.current.w;
    const oldH = dimensionsRef.current.h;

    if (oldW === 0 || oldH === 0) {
      initParticles(w, h);
    } else {
      const scaleX = w / oldW;
      const scaleY = h / oldH;
      const targetCount = getParticleCount(w);
      const particles = particlesRef.current;

      // Scale existing particle positions
      for (const p of particles) {
        p.x *= scaleX;
        p.y *= scaleY;
        p.originX *= scaleX;
        p.originY *= scaleY;
      }

      // Add or remove particles to match target count
      while (particles.length < targetCount) {
        particles.push(createParticle(w, h));
      }
      while (particles.length > targetCount) {
        particles.pop();
      }

      dimensionsRef.current = { w, h };
    }
  }, [initParticles]);

  /* ── Main animation loop ───────────────────────────────────── */
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { w, h } = dimensionsRef.current;
    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    // Clear canvas
    ctx.clearRect(0, 0, w, h);

    /* ── Update physics ──────────────────────────────────────── */
    for (const p of particles) {
      // Mouse repulsion (Coulomb-like inverse-square)
      if (mouse.active) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);

        if (dist < REPULSION_RADIUS && dist > 1) {
          const force = REPULSION_STRENGTH / (distSq);
          const nx = dx / dist;
          const ny = dy / dist;
          p.vx += nx * force;
          p.vy += ny * force;
        }
      }

      // Gentle return to origin
      p.vx += (p.originX - p.x) * RETURN_STRENGTH;
      p.vy += (p.originY - p.y) * RETURN_STRENGTH;

      // Apply friction
      p.vx *= FRICTION;
      p.vy *= FRICTION;

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Soft boundary wrap (keep particles on screen)
      if (p.x < -20) { p.x = w + 20; p.originX = p.x; }
      if (p.x > w + 20) { p.x = -20; p.originX = p.x; }
      if (p.y < -20) { p.y = h + 20; p.originY = p.y; }
      if (p.y > h + 20) { p.y = -20; p.originY = p.y; }
    }

    /* ── Draw connection lines ───────────────────────────────── */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DISTANCE) {
          const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.18;
          // Use the brighter particle's color for the line
          const lineColor = a.isRed || b.isRed ? "196, 30, 58" : "26, 43, 94";

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    /* ── Draw particles ──────────────────────────────────────── */
    for (const p of particles) {
      // Outer glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.glowColor}, ${p.opacity * 0.15})`;
      ctx.fill();

      // Core dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
      ctx.fill();
    }

    /* ── Draw cursor glow when active ────────────────────────── */
    if (mouse.active) {
      const gradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, REPULSION_RADIUS * 0.6
      );
      gradient.addColorStop(0, "rgba(26, 43, 94, 0.04)");
      gradient.addColorStop(1, "rgba(26, 43, 94, 0)");
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, REPULSION_RADIUS * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  /* ── Setup & teardown ──────────────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    handleResize();

    // Pointer events (unified mouse + touch)
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const onPointerLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    // Start animation
    rafRef.current = requestAnimationFrame(animate);

    // Event listeners
    canvas.addEventListener("pointermove", onPointerMove, { passive: true });
    canvas.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [animate, handleResize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
}
