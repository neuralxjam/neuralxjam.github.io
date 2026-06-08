"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/content";

const GAP = 24;

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [visible, setVisible] = useState(3);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setVisible(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const maxIdx = Math.max(0, projects.length - visible);
  const safeIdx = Math.min(idx, maxIdx);

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(maxIdx, i + 1));

  const btnBase =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-30 z-10";

  return (
    <div>
      {/* track + side arrows */}
      <div className="relative px-14">
        <button aria-label="Previous projects" onClick={prev} disabled={safeIdx === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 ${btnBase}`}>
          <ChevronLeft />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex items-stretch transition-transform duration-500 ease-in-out"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(calc(-${safeIdx} * (100% + ${GAP}px) / ${visible}))`,
            }}
          >
            {projects.map((p) => (
              <div
                key={p.slug}
                className="flex flex-col"
                style={{ flex: `0 0 calc(${100 / visible}% - ${((visible - 1) * GAP) / visible}px)` }}
              >
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </div>

        <button aria-label="Next projects" onClick={next} disabled={safeIdx === maxIdx}
          className={`absolute right-0 top-1/2 -translate-y-1/2 ${btnBase}`}>
          <ChevronRight />
        </button>
      </div>

      {/* dots */}
      <div className="mt-6 flex justify-center gap-1.5">
        {Array.from({ length: maxIdx + 1 }, (_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === safeIdx
                ? "w-6 bg-[var(--color-accent)]"
                : "w-2 bg-[var(--color-border)] hover:bg-[var(--color-muted)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
