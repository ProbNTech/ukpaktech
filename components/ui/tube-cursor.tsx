"use client";

import { useEffect, useRef } from "react";

type TubesCursorProps = {
  initialColors?: string[];
  lightColors?: string[];
  lightIntensity?: number;
  enableRandomizeOnClick?: boolean;
  className?: string;
  children?: React.ReactNode;
};

declare global {
  interface Window {
    __tubesCursorApp?: any;
    __tubesCursorCanvas?: HTMLCanvasElement;
    __tubesCursorCtor?: any;
  }
}

const TubesCursor = ({
  initialColors = ["#2563EB", "#22C55E", "#C41E3A"],
  lightColors = ["#3b82f6", "#4ade80", "#E74C5E", "#60a5fa"],
  lightIntensity = 200,
  enableRandomizeOnClick = false,
  className = "",
  children,
}: TubesCursorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Singleton: skip if already running (avoids React strict-mode WebGPU crash)
    if (window.__tubesCursorApp) {
      if (window.__tubesCursorCanvas && containerRef.current) {
        if (!containerRef.current.contains(window.__tubesCursorCanvas)) {
          containerRef.current.appendChild(window.__tubesCursorCanvas);
        }
      }
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;display:block;";
    containerRef.current?.appendChild(canvas);
    window.__tubesCursorCanvas = canvas;
    window.__tubesCursorApp = "loading";

    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import Ctor from "/scripts/tubes1.min.js";
      window.__tubesCursorCtor = Ctor;
      document.dispatchEvent(new CustomEvent("tubes-ctor-ready"));
    `;

    const onReady = () => {
      const Ctor = window.__tubesCursorCtor;
      if (!Ctor || !window.__tubesCursorCanvas) return;

      try {
        // Hide WebGPU to force WebGL fallback (Windows 10 compat)
        const gpu = (navigator as any).gpu;
        Object.defineProperty(navigator, "gpu", {
          value: undefined,
          configurable: true,
        });

        const app = Ctor(window.__tubesCursorCanvas, {
          tubes: {
            colors: initialColors,
            lights: {
              intensity: lightIntensity,
              colors: lightColors,
            },
          },
        });

        window.__tubesCursorApp = app;

        if (gpu) {
          Object.defineProperty(navigator, "gpu", {
            value: gpu,
            configurable: true,
          });
        }
      } catch (e) {
        console.warn("[TubesCursor] Init failed:", e);
        window.__tubesCursorApp = null;
      }
    };

    document.addEventListener("tubes-ctor-ready", onReady, { once: true });
    document.head.appendChild(script);
  }, [initialColors, lightColors, lightIntensity, enableRandomizeOnClick]);

  return (
    <div ref={containerRef} className={`relative w-full overflow-hidden ${className}`}>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
};

export { TubesCursor };
