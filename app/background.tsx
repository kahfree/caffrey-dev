"use client";

import { useEffect, useRef } from "react";

const CELL = 40; // grid spacing in px
const STRENGTH = 70; // max pull toward center, in px
const FALLOFF_RADIUS = 260; // how far the pull reaches before fading out
const LINE_COLOR = "rgba(137, 180, 250, 0.07)"; // ctp-blue, faint — background texture, not a diagram
const HEIGHT_FACTOR = 1.7; // draw taller than viewport so the tilt's foreshortening doesn't expose empty space

// Displaces a point toward (cx, cy), strongest at the center and fading
// with distance — same shape as the classic gravity-well grid diagram.
function warp(x: number, y: number, cx: number, cy: number) {
  const dx = x - cx;
  const dy = y - cy;
  const r = Math.hypot(dx, dy) || 1;
  const pull = STRENGTH * Math.exp(-r / FALLOFF_RADIUS);
  return [x - (dx / r) * pull, y - (dy / r) * pull];
}

function draw(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const dpr = window.devicePixelRatio || 1;
  const w = window.innerWidth;
  const h = window.innerHeight * HEIGHT_FACTOR;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  // Off in the top-right corner, away from the text column, so the dense
  // convergence knot sits in empty space — only the gentle outer curves cross the copy.
  const cx = w * 1.05;
  const cy = h * 0.05;

  ctx.strokeStyle = LINE_COLOR;
  ctx.lineWidth = 1;

  const SAMPLE = 8; // px between sample points along each line — smooth enough for the curve

  // vertical lines
  for (let x = 0; x <= w; x += CELL) {
    ctx.beginPath();
    for (let y = 0; y <= h; y += SAMPLE) {
      const [wx, wy] = warp(x, y, cx, cy);
      if (y === 0) ctx.moveTo(wx, wy);
      else ctx.lineTo(wx, wy);
    }
    ctx.stroke();
  }

  // horizontal lines
  for (let y = 0; y <= h; y += CELL) {
    ctx.beginPath();
    for (let x = 0; x <= w; x += SAMPLE) {
      const [wx, wy] = warp(x, y, cx, cy);
      if (x === 0) ctx.moveTo(wx, wy);
      else ctx.lineTo(wx, wy);
    }
    ctx.stroke();
  }
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    draw(canvas);
    const onResize = () => draw(canvas);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ perspective: "1000px", background: "var(--ctp-base)" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0"
        style={{ transform: "rotateX(50deg)", transformOrigin: "top center" }}
      />
    </div>
  );
}
