"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "0123456789SKOPIO<>/{}[]";
const FONT_SIZE = 18;
const FRAME_INTERVAL = 72;

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let drops: number[] = [];
    let height = 0;
    let isIntersecting = true;
    let isRunning = false;
    let lastFrame = 0;
    let width = 0;

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

      context.fillStyle = "rgba(255, 255, 255, 0.12)";
      context.fillRect(0, 0, width, height);
      context.fillStyle = "rgba(0, 0, 0, 0.18)";
      context.font = `500 ${FONT_SIZE}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
      context.textAlign = "center";

      drops.forEach((drop, index) => {
        const glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const x = index * FONT_SIZE + FONT_SIZE / 2;
        const y = drop * FONT_SIZE;

        context.fillText(glyph, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[index] = -Math.random() * 18;
        } else {
          drops[index] += 0.65;
        }
      });
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
    document.addEventListener("visibilitychange", updateAnimation);
    reducedMotion.addEventListener("change", updateAnimation);
    updateAnimation();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
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
