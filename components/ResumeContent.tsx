import Icon from "@/components/Icon";
import {
  EXPERIENCE,
  EDUCATION,
  RESUME_PDF,
  SERVICES,
  ATTRIBUTES,
  HIGHLIGHTS,
  SITE,
} from "@/lib/content";

function Timeline({
  items,
}: {
  items: { role?: string; degree?: string; org: string; period: string; points: string[] }[];
}) {
  return (
    <div className="space-y-5">
      {items.map((it, i) => (
        <div key={i} className="card p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold text-[var(--color-ink)]">{it.role ?? it.degree}</h3>
            <span className="text-xs text-[var(--color-muted)]">{it.period}</span>
          </div>
          <p className="mt-1 text-sm font-medium text-[var(--color-accent-2)]">{it.org}</p>
          <ul className="mt-3 space-y-2">
            {it.points.map((p) => (
              <li key={p} className="flex gap-2 text-sm leading-relaxed text-[var(--color-muted)]">
                <span className="mt-0.5 text-[var(--color-accent-2)]">›</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function ResumeContent() {
  return (
    <div className="mx-auto max-w-3xl px-1">
      {/* header */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)]">Jhames Andrew Macabata</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
          CS graduate · ~1 year professional experience · Full-stack, Data, ML
        </p>
        <p className="mt-1 text-xs text-[var(--color-muted)]">{SITE.location}</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href={RESUME_PDF}
            download
            className="rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-2)]"
          >
            ↓ Download PDF
          </a>
          <a
            href={RESUME_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]"
          >
            Open in browser
          </a>
        </div>
      </div>

      {/* experience */}
      <div className="mt-10">
        <p className="kicker mb-4">Experience</p>
        <Timeline items={EXPERIENCE} />
      </div>

      {/* education */}
      <div className="mt-10">
        <p className="kicker mb-4">Education</p>
        <Timeline items={EDUCATION} />
      </div>

      {/* highlights */}
      <div className="mt-10">
        <p className="kicker mb-4">Highlights</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {HIGHLIGHTS.map((h) => (
            <div key={h.text} className="card flex items-center gap-3 p-4">
              <Icon name={h.icon} className="h-5 w-5 text-[var(--color-accent-2)]" />
              <span className="text-sm font-medium text-[var(--color-ink)]">{h.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* what I build */}
      <div className="mt-10">
        <p className="kicker mb-4">What I Build</p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <li key={s.title} className="card flex items-center gap-2 p-4 text-sm text-[var(--color-muted)]">
              <Icon name={s.icon} className="h-[18px] w-[18px] text-[var(--color-accent-2)]" />
              <span className="font-medium text-[var(--color-ink)]">{s.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* strengths */}
      <div className="mt-10">
        <p className="kicker mb-4">Strengths</p>
        <ul className="flex flex-wrap gap-2">
          {ATTRIBUTES.map((a) => (
            <li key={a.label} className="flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-muted)]">
              <Icon name={a.icon} className="h-3.5 w-3.5" />{a.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
