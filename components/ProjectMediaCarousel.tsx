"use client";

import { useState } from "react";

export default function ProjectMediaCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-2)]">
      {/* main image */}
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={idx}
          src={images[idx]}
          alt={`${title} screenshot ${idx + 1}`}
          className="w-full"
        />

        {/* arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-bg)]/80 border border-[var(--color-border)] text-[var(--color-ink)] backdrop-blur hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button
              onClick={next}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-bg)]/80 border border-[var(--color-border)] text-[var(--color-ink)] backdrop-blur hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </>
        )}
      </div>

      {/* dots + counter */}
      <div className="flex items-center justify-center gap-2 px-4 py-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === idx
                ? "w-5 bg-[var(--color-accent)]"
                : "w-2 bg-[var(--color-border)] hover:bg-[var(--color-muted)]"
            }`}
          />
        ))}
        <span className="ml-2 text-xs text-[var(--color-muted)]">{idx + 1} / {images.length}</span>
      </div>
    </div>
  );
}
