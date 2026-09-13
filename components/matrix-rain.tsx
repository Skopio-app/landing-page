"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "0123456789SKOPIO<>/{}[]";
const FONT_SIZE = 18;
const FRAME_INTERVAL = 40;
const TRAIL_LENGTH = 11;
const INTERACTION_RADIUS = 112;
const MAX_PUSH = 72;

interface PointerState {
  active: boolean;
  strength: number;
  targetX: number;
  targetY: number;
  x: number;
  y: number;
}

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const interactionSurface = canvas?.parentElement;

    if (!canvas || !context || !interactionSurface) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let drops: number[] = [];
    let height = 0;
    let isIntersecting = true;
    let isRunning = false;
    let lastFrame = 0;
    let width = 0;
    const pointer: PointerState = {
      active: false,
      strength: 0,
      targetX: 0,
      targetY: 0,
      x: 0,
      y: 0,
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const columnCount = Math.ceil(bounds.width / FONT_SIZE);

      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);
      drops = Array.from(
        { length: columnCount },
        (_, index) => drops[index] ?? Math.random() * (height / FONT_SIZE),
      );
    };

    const draw = (timestamp: number) => {
      if (!isRunning) return;

      animationFrame = window.requestAnimationFrame(draw);
      if (timestamp - lastFrame < FRAME_INTERVAL) return;
      lastFrame = timestamp;

      context.clearRect(0, 0, width, height);
      pointer.x += (pointer.targetX - pointer.x) * 0.34;
      pointer.y += (pointer.targetY - pointer.y) * 0.34;
      pointer.strength += ((pointer.active ? 1 : 0) - pointer.strength) * 0.22;

      context.fillStyle = "#000000";
      context.font = `500 ${FONT_SIZE}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
      context.textAlign = "center";
      context.textBaseline = "middle";

      drops.forEach((drop, index) => {
        const baseX = index * FONT_SIZE + FONT_SIZE / 2;
        const headY = drop * FONT_SIZE;

        for (let trailIndex = 0; trailIndex < TRAIL_LENGTH; trailIndex += 1) {
          const y = (drop - trailIndex) * FONT_SIZE;

          if (y < -FONT_SIZE || y > height + FONT_SIZE) continue;

          let drawX = baseX;
          let drawY = y;
          const deltaX = baseX - pointer.x;
          const deltaY = y - pointer.y;
          const distance = Math.hypot(deltaX, deltaY);

          if (distance < INTERACTION_RADIUS && pointer.strength > 0.01) {
            const proximity = 1 - distance / INTERACTION_RADIUS;
            const force = proximity * proximity * pointer.strength;
            const directionX =
              distance > 0 ? deltaX / distance : index % 2 ? 1 : -1;
            const directionY = distance > 0 ? deltaY / distance : 0;

            drawX += directionX * force * MAX_PUSH;
            drawY += directionY * force * 20 + force * 18;
          }

          const glyphIndex =
            Math.abs(index * 13 + Math.floor(drop) - trailIndex * 7) %
            GLYPHS.length;
          const trailProgress = trailIndex / TRAIL_LENGTH;

          context.globalAlpha = Math.pow(1 - trailProgress, 1.35) * 0.18;
          context.fillText(GLYPHS[glyphIndex], drawX, drawY);
        }

        if (
          headY > height + TRAIL_LENGTH * FONT_SIZE &&
          Math.random() > 0.975
        ) {
          drops[index] = -Math.random() * 18;
        } else {
          drops[index] += 0.38;
        }
      });

      context.globalAlpha = 1;
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      const bounds = canvas.getBoundingClientRect();
      const nextX = event.clientX - bounds.left;
      const nextY = event.clientY - bounds.top;

      if (!pointer.active) {
        pointer.x = nextX;
        pointer.y = nextY;
      }

      pointer.active = true;
      pointer.targetX = nextX;
      pointer.targetY = nextY;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const updateAnimation = () => {
      const shouldRun =
        !reducedMotion.matches && isIntersecting && !document.hidden;

      if (shouldRun === isRunning) return;
      isRunning = shouldRun;

      if (isRunning) {
        lastFrame = 0;
        animationFrame = window.requestAnimationFrame(draw);
      } else {
        window.cancelAnimationFrame(animationFrame);
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
      updateAnimation();
    });

    resize();
    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    interactionSurface.addEventListener("pointermove", handlePointerMove);
    interactionSurface.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", updateAnimation);
    reducedMotion.addEventListener("change", updateAnimation);
    updateAnimation();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      interactionSurface.removeEventListener("pointermove", handlePointerMove);
      interactionSurface.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
      document.removeEventListener("visibilitychange", updateAnimation);
      reducedMotion.removeEventListener("change", updateAnimation);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full opacity-60 mask-[linear-gradient(to_bottom,transparent_0%,black_14%,black_78%,transparent_100%)]"
    />
  );
};

export default MatrixRain;
