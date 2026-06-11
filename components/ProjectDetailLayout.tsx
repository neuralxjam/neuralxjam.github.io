import Link from "next/link";
import ProjectMediaCarousel from "@/components/ProjectMediaCarousel";

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// ── Shared sub-components ────────────────────────────────────────────────────

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-[var(--color-ink)] mb-4">{title}</h2>
      {children}
    </div>
  );
}

export function TechTable({ rows }: { rows: [string, React.ReactNode][] }) {
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-sm">
        <tbody>
          {rows.map(([label, value], i) => (
            <tr key={i} className="border-b border-[var(--color-border)] last:border-0">
              <td className="px-4 py-3 font-semibold text-[var(--color-ink)] align-top w-36 shrink-0">{label}</td>
              <td className="px-4 py-3 text-[var(--color-muted)]">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FeatureTable({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-sm">
        {headers.length > 0 && (
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              {headers.map((h) => (
                <th key={h} className="px-4 py-3 text-left font-semibold text-[var(--color-ink)]">{h}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((cols, i) => (
            <tr key={i} className="border-b border-[var(--color-border)] last:border-0">
              {cols.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 align-top${j === 0 ? " font-semibold text-[var(--color-ink)] w-44" : " text-[var(--color-muted)]"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CodeBlock({ children }: { children: string }) {
  return (
    <div className="card overflow-x-auto p-5">
      <pre className="text-xs text-[var(--color-muted)] font-mono leading-relaxed whitespace-pre">{children}</pre>
    </div>
  );
}

export function LessonsList({ items }: { items: { bold: string; text: string }[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed">
          <span className="text-[var(--color-accent-2)] shrink-0 mt-0.5 text-base">›</span>
          <span className="text-[var(--color-muted)]">
            <strong className="font-semibold text-[var(--color-ink)]">{item.bold}</strong>{" "}
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function StepList({ items }: { items: { step: string; text: React.ReactNode }[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed">
          <span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[11px] font-bold text-[var(--color-accent-2)]">
            {i + 1}
          </span>
          <span className="text-[var(--color-muted)]">{item.text}</span>
        </li>
      ))}
    </ol>
  );
}

export function StatCards({ stats }: { stats: { title: string; value: string; desc: string }[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((s) => (
        <div key={s.title} className="card px-3 py-5 text-center">
          <p className="text-xs text-[var(--color-muted)]">{s.title}</p>
          <p className="mt-1 text-2xl font-bold text-[var(--color-accent)]">{s.value}</p>
          <p className="mt-1 text-[11px] text-[var(--color-muted)]">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function InfoBanner({ children }: { children: React.ReactNode }) {
  return (
    <div className="card border-l-4 border-l-[var(--color-accent)] p-4 text-sm text-[var(--color-muted)] leading-relaxed">
      {children}
    </div>
  );
}

// ── Page shell ───────────────────────────────────────────────────────────────

export default function ProjectDetailLayout({
  badge,
  title,
  subtitle,
  links,
  image,
  imageAlt,
  images,
  video,
  children,
}: {
  badge: string;
  title: string;
  subtitle: string;
  links: { label: string; href: string; primary?: boolean }[];
  image?: string;
  imageAlt?: string;
  images?: string[];
  video?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-5 pt-20 pb-14 md:pt-28 md:pb-20">
      <div className="mx-auto max-w-4xl">
        {/* back link */}
        <Link
          href="/projects/"
          className="group mb-8 inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span> Back to Projects
        </Link>

        {/* header */}
        <p className="kicker">{badge}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-lg text-[var(--color-muted)]">{subtitle}</p>

        {/* CTA links */}
        <div className="mt-6 flex flex-wrap gap-3">
          {links.map((l) =>
            l.primary ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-2)]"
              >
                {l.label} <ExternalIcon />
              </a>
            ) : (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]"
              >
                {l.label} <ExternalIcon />
              </a>
            )
          )}
        </div>

        {/* media: carousel | video | single image */}
        {images && images.length > 0 ? (
          <ProjectMediaCarousel images={images} title={title} />
        ) : video ? (
          <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-2)]">
            <video autoPlay muted loop playsInline className="w-full" src={video} />
          </div>
        ) : image ? (
          <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-2)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={imageAlt ?? title} className="w-full" />
          </div>
        ) : null}

        {/* page body */}
        <div className="mt-12 space-y-12">{children}</div>

        {/* footer nav */}
        <div className="mt-16 text-center">
          <Link href="/projects/" className="inline-flex rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-2)]">
            ← All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
