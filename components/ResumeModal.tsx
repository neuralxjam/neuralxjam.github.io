"use client";

import { useEffect, useState } from "react";
import ResumeContent from "@/components/ResumeContent";

export default function ResumeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-6 inline-flex rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]"
      >
        Full resume →
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4 pt-10"
          onClick={() => setOpen(false)}
        >
          <div
            className="card relative w-full max-w-3xl pb-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* header */}
            <div className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-4">
              <p className="text-sm font-semibold text-[var(--color-ink)]">Resume</p>
              <button
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              </button>
            </div>

            {/* scrollable content */}
            <div className="px-6 pt-8">
              <ResumeContent />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
