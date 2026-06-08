import Link from "next/link";
import type { Project } from "@/lib/content";

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/** Gradient placeholder when a project has no screenshot. */
function Placeholder({ title }: { title: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#15203a,#1d2c4d)] p-4">
      <span className="text-center text-sm font-semibold text-[var(--color-muted)]">{title}</span>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card group flex flex-1 flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg-2)]">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Placeholder title={project.title} />
        )}
        <span className="absolute left-3 top-3 rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-ink)] ring-1 ring-[var(--color-accent)]/40">
          {project.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-[var(--color-ink)]">{project.title}</h3>
        <div className="mt-2 flex-1">
          <p className="line-clamp-3 text-sm leading-relaxed text-[var(--color-muted)]">
            {project.desc}
          </p>
          <Link
            href={`/projects/${project.slug}/`}
            className="mt-1 inline-block text-xs text-[var(--color-accent-2)] hover:text-[var(--color-ink)]"
          >
            Read more…
          </Link>
        </div>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2 py-0.5 text-[11px] text-[var(--color-muted)]"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-accent-2)] hover:text-[var(--color-ink)]"
            >
              {project.liveLabel ?? "Live"} <ExternalIcon />
            </a>
          ) : project.liveLabel ? (
            <span className="text-xs italic text-[var(--color-muted)]">{project.liveLabel}</span>
          ) : null}

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            >
              GitHub <ExternalIcon />
            </a>
          )}

          {project.extraLinks?.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            >
              {l.label} <ExternalIcon />
            </a>
          ))}

          <Link
            href={`/projects/${project.slug}/`}
            className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-accent-2)] hover:text-[var(--color-ink)]"
          >
            Details →
          </Link>
        </div>
      </div>
    </article>
  );
}
