import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS, CLIENT_WORK, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects — Jhames Andrew Macabata",
  description:
    "Full project list: full-stack web apps, data pipelines, ML systems, and client work. All live and deployed.",
  alternates: { canonical: "/projects/" },
};

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function ProjectsPage() {
  return (
    <div className="px-5 pt-20 pb-12 md:pt-28 md:pb-20">
      <SectionHeading
        kicker="Portfolio"
        title="All Projects"
        subtitle="Personal builds across full-stack, data engineering, and ML — plus client work. Every major project is live and deployed."
      />

      {/* personal projects */}
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 60}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      {/* client work */}
      <div className="mx-auto mt-20 max-w-6xl">
        <SectionHeading
          align="left"
          kicker="Client Work"
          title="Built for real businesses"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {CLIENT_WORK.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 60}>
              <article className="card flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-[var(--color-ink)]">{c.title}</h3>
                  <span className="shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2.5 py-1 text-[11px] text-[var(--color-muted)]">
                    {c.status}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">{c.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {c.tech.map((t) => (
                    <li key={t} className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2 py-0.5 text-[11px] text-[var(--color-muted)]">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  {c.live && (
                    <a href={c.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-accent-2)] hover:text-[var(--color-ink)]">
                      {c.liveLabel ?? "Live"} <ExternalIcon />
                    </a>
                  )}
                  {c.repo && (
                    <a href={c.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[var(--color-muted)] hover:text-[var(--color-ink)]">
                      GitHub <ExternalIcon />
                    </a>
                  )}
                  <Link
                    href={`/projects/${c.slug}/`}
                    className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-accent-2)] hover:text-[var(--color-ink)]"
                  >
                    Details →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link href="/#contact" className="inline-flex rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-2)]">
          Discuss a Project
        </Link>
        <p className="mt-4 text-sm">
          <Link href="/#home" className="text-[var(--color-muted)] hover:text-[var(--color-ink)]">← Back home</Link>
        </p>
      </div>
    </div>
  );
}
