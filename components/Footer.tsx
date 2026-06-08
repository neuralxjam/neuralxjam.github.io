import Link from "next/link";
import { NAV_LINKS, PAGE_LINKS, SOCIALS, SITE, EMAIL, mailto } from "@/lib/content";

function SocialIcon({ label }: { label: string }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "currentColor" };
  switch (label) {
    case "GitHub":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.57.1.78-.25.78-.55v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.3-5.25-1.28-5.25-5.7 0-1.26.45-2.3 1.2-3.1-.12-.3-.52-1.48.1-3.1 0 0 .98-.3 3.2 1.2a11 11 0 0 1 5.82 0c2.2-1.5 3.18-1.2 3.18-1.2.63 1.62.23 2.8.12 3.1.75.8 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.7.42.36.78 1.06.78 2.14v3.18c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...common} aria-hidden>
          <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.25 8.25h4.5V24h-4.5V8.25Zm7.5 0h4.3v2.15h.06c.6-1.13 2.07-2.32 4.26-2.32 4.56 0 5.4 3 5.4 6.9V24h-4.5v-6.95c0-1.66-.03-3.8-2.3-3.8-2.32 0-2.67 1.8-2.67 3.68V24h-4.5V8.25Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.24a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2Zm0 10.89a4.29 4.29 0 1 1 0-8.58 4.29 4.29 0 0 1 0 8.58Zm6.84-11.15a1.54 1.54 0 1 1-3.08 0 1.54 1.54 0 0 1 3.08 0Z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg {...common} aria-hidden>
          <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.5 0-1.96.93-1.96 1.89v2.25h3.34l-.53 3.49h-2.81V24C19.61 23.1 24 18.1 24 12.07Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]/40">
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16 flex flex-col items-center gap-8">
        {/* wordmark */}
        <Link href="/#home" className="text-xl font-bold tracking-tight">
          JAM<span className="text-[var(--color-accent)]">DOES_</span>
        </Link>

        {/* nav links */}
        <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-[var(--color-muted)]">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-[var(--color-ink)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* social icons */}
        <div className="flex gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
            >
              <SocialIcon label={s.label} />
            </a>
          ))}
        </div>

        {/* copyright */}
        <p className="text-xs text-[var(--color-muted)]">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
