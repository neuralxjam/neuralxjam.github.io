"use client";

import { useEffect, useState } from "react";
import { CERTS, type Cert } from "@/lib/content";

export default function CertGrid() {
  const [active, setActive] = useState<Cert | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {CERTS.map((c) => (
          <button
            key={c.file}
            onClick={() => setActive(c)}
            className="card group overflow-hidden text-left transition-transform hover:-translate-y-1"
          >
            <div className="aspect-[4/3] overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg-2)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.thumb}
                alt={c.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold leading-snug text-[var(--color-ink)]">{c.title}</h3>
              <p className="mt-1 text-xs text-[var(--color-muted)]">{c.date} · DataCamp</p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="card flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[var(--color-border)] p-4">
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-ink)]">{active.title}</h3>
                <p className="text-xs text-[var(--color-muted)]">{active.date} · DataCamp</p>
              </div>
              <button
                aria-label="Close"
                onClick={() => setActive(null)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              </button>
            </div>
            <iframe src={`${active.file}#toolbar=0&navpanes=0&scrollbar=0`} title={active.title} className="flex-1 bg-white" />
          </div>
        </div>
      )}
    </>
  );
}
