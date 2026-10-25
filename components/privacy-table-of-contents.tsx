"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export interface PrivacySectionLink {
  id: string;
  label: string;
}

interface PrivacyTableOfContentsProps {
  sections: readonly PrivacySectionLink[];
}

const PrivacyTableOfContents: React.FC<PrivacyTableOfContentsProps> = ({
  sections,
}) => {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    let animationFrame: number | undefined;

    const updateActiveSection = () => {
      const marker = Math.min(window.innerHeight * 0.35, 220);
      let nextActiveId = sections[0]?.id ?? "";

      for (const { id } of sections) {
        const section = document.getElementById(id);

        if (!section || section.getBoundingClientRect().top > marker) {
          break;
        }

        nextActiveId = id;
      }

      const isAtPageEnd =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (isAtPageEnd) {
        nextActiveId = sections.at(-1)?.id ?? nextActiveId;
      }

      setActiveId((currentId) =>
        currentId === nextActiveId ? currentId : nextActiveId,
      );
    };

    const requestUpdate = () => {
      if (animationFrame !== undefined) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = undefined;
        updateActiveSection();
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestUpdate);

      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [sections]);

  return (
    <nav aria-label="Privacy policy sections">
      <h2 className="text-sm font-semibold text-black">On this page</h2>
      <ol className="mt-4 space-y-2 border-l border-black/15">
        {sections.map(({ id, label }) => {
          const isActive = activeId === id;

          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setActiveId(id)}
                className={cn(
                  "block border-l py-1 pl-4 text-sm leading-6 transition-[border-color,color] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
                  isActive
                    ? "border-black font-medium text-black"
                    : "border-transparent text-black/55 hover:border-black/40 hover:text-black",
                )}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default PrivacyTableOfContents;
