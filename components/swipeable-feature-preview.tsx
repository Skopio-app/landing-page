"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FeaturePreviewItem {
  image: string;
  imageAlt: string;
  title: string;
}

interface SwipeableFeaturePreviewProps {
  activeIndex: number;
  items: readonly FeaturePreviewItem[];
  onActiveIndexChange: (index: number) => void;
}

interface MouseDragState {
  lastTime: number;
  lastX: number;
  pointerId: number;
  startScrollLeft: number;
  startX: number;
  velocity: number;
}

const clampIndex = (index: number, itemCount: number) =>
  Math.min(Math.max(index, 0), itemCount - 1);

const SwipeableFeaturePreview: React.FC<SwipeableFeaturePreviewProps> = ({
  activeIndex,
  items,
  onActiveIndexChange,
}) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const scrollFrameRef = useRef<number | null>(null);
  const mouseDragRef = useRef<MouseDragState | null>(null);
  const programmaticTargetRef = useRef<number | null>(null);
  const skipNextActiveSyncRef = useRef(false);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const viewport = viewportRef.current;

      if (!viewport) return;

      const nextIndex = clampIndex(index, items.length);
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const targetLeft = nextIndex * viewport.clientWidth;

      if (Math.abs(viewport.scrollLeft - targetLeft) < 1) {
        programmaticTargetRef.current = null;
        return;
      }

      programmaticTargetRef.current = nextIndex;

      viewport.scrollTo({
        left: targetLeft,
        behavior: reduceMotion ? "auto" : behavior,
      });
    },
    [items.length],
  );

  const selectIndex = useCallback(
    (index: number) => {
      const nextIndex = clampIndex(index, items.length);
      skipNextActiveSyncRef.current = true;
      onActiveIndexChange(nextIndex);
      scrollToIndex(nextIndex);
    },
    [items.length, onActiveIndexChange, scrollToIndex],
  );

  useEffect(() => {
    if (skipNextActiveSyncRef.current) {
      skipNextActiveSyncRef.current = false;
      return;
    }

    scrollToIndex(activeIndex);
  }, [activeIndex, scrollToIndex]);

  useEffect(
    () => () => {
      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(scrollFrameRef.current);
      }
    },
    [],
  );

  const handleScroll = () => {
    if (scrollFrameRef.current !== null) {
      cancelAnimationFrame(scrollFrameRef.current);
    }

    scrollFrameRef.current = requestAnimationFrame(() => {
      const viewport = viewportRef.current;

      if (!viewport || viewport.clientWidth === 0) return;

      const programmaticTarget = programmaticTargetRef.current;

      if (programmaticTarget !== null) {
        const targetLeft = programmaticTarget * viewport.clientWidth;

        if (Math.abs(viewport.scrollLeft - targetLeft) < 1) {
          programmaticTargetRef.current = null;
        }

        return;
      }

      const nextIndex = clampIndex(
        Math.round(viewport.scrollLeft / viewport.clientWidth),
        items.length,
      );

      if (nextIndex !== activeIndex) {
        skipNextActiveSyncRef.current = true;
        onActiveIndexChange(nextIndex);
      }
    });
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    programmaticTargetRef.current = null;

    if (event.pointerType !== "mouse") return;

    const viewport = event.currentTarget;
    viewport.setPointerCapture(event.pointerId);
    mouseDragRef.current = {
      lastTime: event.timeStamp,
      lastX: event.clientX,
      pointerId: event.pointerId,
      startScrollLeft: viewport.scrollLeft,
      startX: event.clientX,
      velocity: 0,
    };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = mouseDragRef.current;

    if (!drag || drag.pointerId !== event.pointerId) return;

    const elapsed = Math.max(event.timeStamp - drag.lastTime, 1);
    drag.velocity = (drag.lastX - event.clientX) / elapsed;
    drag.lastX = event.clientX;
    drag.lastTime = event.timeStamp;
    event.currentTarget.scrollLeft =
      drag.startScrollLeft - (event.clientX - drag.startX);
  };

  const finishMouseDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = mouseDragRef.current;

    if (!drag || drag.pointerId !== event.pointerId) return;

    const viewport = event.currentTarget;
    const projectedScrollLeft = viewport.scrollLeft + drag.velocity * 180;
    const nextIndex = Math.round(projectedScrollLeft / viewport.clientWidth);

    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    mouseDragRef.current = null;
    selectIndex(nextIndex);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectIndex(activeIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectIndex(activeIndex + 1);
    }
  };

  return (
    <div
      id="feature-preview"
      className="relative aspect-623/460 w-full overflow-hidden rounded-[10px] bg-[#d9d9d9] shadow-[0_22px_70px_rgba(0,0,0,0.12)]"
    >
      <div
        ref={viewportRef}
        role="region"
        aria-label="Feature screenshots"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerCancel={finishMouseDrag}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishMouseDrag}
        onScroll={handleScroll}
        onWheel={() => {
          programmaticTargetRef.current = null;
        }}
        className="no-scrollbar flex size-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth outline-none select-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-black/25 motion-reduce:scroll-auto"
      >
        {items.map((item, index) => (
          <div
            key={item.image}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${items.length}: ${item.title}`}
            aria-hidden={index !== activeIndex}
            className="relative size-full shrink-0 snap-center"
          >
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              draggable={false}
              className="pointer-events-none object-contain"
              loading={index === 0 ? "eager" : "lazy"}
              sizes="(min-width: 1024px) 623px, calc(100vw - 40px)"
            />
          </div>
        ))}
      </div>

      <Button
        type="button"
        size="icon"
        variant="secondary"
        aria-label="Previous feature screenshot"
        disabled={activeIndex === 0}
        onClick={() => selectIndex(activeIndex - 1)}
        className="absolute top-1/2 left-3 size-10 -translate-y-1/2 rounded-full bg-white/85 shadow-md backdrop-blur-sm hover:bg-white disabled:opacity-0"
      >
        <ChevronLeft aria-hidden="true" />
      </Button>

      <Button
        type="button"
        size="icon"
        variant="secondary"
        aria-label="Next feature screenshot"
        disabled={activeIndex === items.length - 1}
        onClick={() => selectIndex(activeIndex + 1)}
        className="absolute top-1/2 right-3 size-10 -translate-y-1/2 rounded-full bg-white/85 shadow-md backdrop-blur-sm hover:bg-white disabled:opacity-0"
      >
        <ChevronRight aria-hidden="true" />
      </Button>

      <div
        className="absolute right-0 bottom-3 left-0 flex justify-center gap-2"
        aria-label="Choose feature screenshot"
      >
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Show ${item.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => selectIndex(index)}
            className={cn(
              "size-2.5 rounded-full bg-black/25 ring-4 ring-white/35 transition-colors hover:bg-black/50 focus-visible:outline-none focus-visible:ring-black/40",
              index === activeIndex && "bg-black/80",
            )}
          />
        ))}
      </div>

      <span className="sr-only" aria-live="polite">
        Showing {items[activeIndex]?.title}
      </span>
    </div>
  );
};

export default SwipeableFeaturePreview;
