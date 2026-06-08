import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCarousel from "@/components/ProjectCarousel";
import ResumeModal from "@/components/ResumeModal";
import Icon from "@/components/Icon";
import ContactSection from "@/components/ContactSection";
import {
  HERO,
  EDUCATION_PHOTO,
  ABOUT_PHOTO,
  ABOUT_STATS,
  ABOUT,
  EDUCATION_CARDS,
  SCHOLARSHIPS,
  FEATURED_CERTS,
  SKILLS,
  EXPERIENCE,
  PROJECTS,
  CLIENT_WORK,
  ATTRIBUTES,
  RESUME_PDF,
  SITE,
  mailto,
  type Project,
} from "@/lib/content";

// Home project grid = 5 personal builds + the 8Con client site (6 cards, inspo2 layout)
const eightCon = CLIENT_WORK.find((c) => c.title.startsWith("8Con"));
const HOME_PROJECTS: Project[] = [
  ...PROJECTS,
  ...(eightCon
    ? [
        {
          slug: "8con",
          title: "8Con Academy Website",
          badge: "Client",
          group: "Client Work",
          desc: eightCon.desc,
          tech: eightCon.tech,
          live: eightCon.live,
          liveLabel: eightCon.liveLabel,
          repo: eightCon.repo,
        } as Project,
      ]
    : []),
];

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- HERO */}
      <section id="home" className="relative scroll-mt-24 px-5 pt-20 pb-14 md:pt-28 md:pb-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {HERO.greetingPrefix} <span className="text-[var(--color-accent)]">{HERO.firstName}</span>{" "}
              {HERO.restName}
            </h1>
            <p className="mt-3 kicker">{HERO.subtitle}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
              {HERO.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={mailto(`Project inquiry — via ${SITE.url}`)}
                className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-2)]"
              >
                Hire Me
              </a>
              <a
                href={RESUME_PDF}
                download
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]"
              >
                ↓ Download Resume
              </a>
            </div>

          </div>

          {/* photo blob — order-first so it appears above text on mobile */}
          <Reveal className="order-first md:order-none md:justify-self-end">
            <div className="relative mx-auto w-full max-w-[18rem] md:max-w-sm">
              <div className="absolute -inset-4 rounded-full bg-[var(--color-accent)]/10 blur-2xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO.photo}
                alt={SITE.name}
                className="relative aspect-square w-full rounded-[40%] border border-[var(--color-border)] object-cover"
              />
              <div
                className="absolute bottom-4 right-0 translate-x-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/85 px-4 py-3 shadow-xl backdrop-blur"
                style={{ maxWidth: "14rem", zIndex: 10 }}
              >
                <p className="text-sm font-semibold text-[var(--color-ink)]">{HERO.badgeTitle}</p>
                <p className="mt-0.5 text-xs leading-snug text-[var(--color-muted)]">
                  {HERO.badgeText}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------------------- EDUCATION */}
      <section id="education" className="scroll-mt-24 px-5 py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="kicker">Learning Path</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Education.</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
            {/* graduation photo */}
            <Reveal>
              <div className="card relative overflow-hidden bg-[linear-gradient(160deg,#16223e,#101a30)] aspect-[3/4] md:aspect-auto md:h-full md:min-h-[300px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={EDUCATION_PHOTO}
                  alt="Jhames Andrew Macabata — graduation"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </Reveal>

            {/* education cards */}
            <div className="space-y-4">
              {EDUCATION_CARDS.map((e, i) => (
                <Reveal key={e.title} delay={i * 60}>
                  <div className="card p-5">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-soft)]">
                        <Icon name={e.icon} className="h-5 w-5 text-[var(--color-accent-2)]" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h3 className="text-base font-semibold text-[var(--color-ink)]">{e.title}</h3>
                            <p className="text-sm text-[var(--color-accent-2)]">{e.org}</p>
                          </div>
                          <span className="shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2.5 py-1 text-[11px] text-[var(--color-muted)]">
                            {e.date}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{e.desc}</p>
                        <span className="mt-3 inline-flex rounded-md bg-[var(--color-accent-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--color-accent-2)]">
                          {e.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* scholarships */}
              <Reveal delay={EDUCATION_CARDS.length * 60}>
                <div className="card p-5">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-soft)]">
                      <Icon name="award" className="h-5 w-5 text-[var(--color-accent-2)]" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-base font-semibold text-[var(--color-ink)]">Scholarships</h3>
                          <p className="text-sm text-[var(--color-accent-2)]">Merit &amp; Government Grants</p>
                        </div>
                        <span className="shrink-0 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2.5 py-1 text-[11px] text-[var(--color-muted)]">
                          {SCHOLARSHIPS.length} Awards
                        </span>
                      </div>
                      <ul className="mt-3 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                        {SCHOLARSHIPS.map((s) => (
                          <li key={s} className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                            <Icon name="award" className="h-4 w-4 shrink-0 text-[var(--color-accent-2)]" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ CERTIFICATIONS */}
      <section id="certifications" className="scroll-mt-24 px-5 py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="kicker">Achievements</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Certifications.</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {FEATURED_CERTS.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="card flex h-full flex-col p-6">
                  <div className="flex items-start justify-between">
                    <span className="text-xs text-[var(--color-muted)]">
                      {c.category} · {c.date}
                    </span>
                    <Icon name="award" className="h-5 w-5 text-[var(--color-accent-2)]" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[var(--color-ink)]">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">{c.desc}</p>
                  <a
                    href={c.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent-2)] hover:text-[var(--color-ink)]"
                  >
                    View Certificate <ExternalIcon />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/certifications/"
              className="inline-flex rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]"
            >
              View all 16 certifications →
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- ABOUT ME */}
      <section id="about" className="scroll-mt-24 px-5 py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              More <span className="text-[var(--color-accent)]">About</span> Me
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--color-muted)]">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {ABOUT_STATS.map((s) => (
                <div key={s.label} className="card px-3 py-5 text-center">
                  <div className="text-xl font-bold text-[var(--color-accent)] sm:text-2xl">
                    +{s.value}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wide text-[var(--color-muted)]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Reveal className="md:justify-self-end">
            <div className="relative mx-auto w-full max-w-[14rem] md:max-w-xs">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[var(--color-accent)]/15 blur-2xl" />
              <div className="card relative overflow-hidden rounded-[2rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ABOUT_PHOTO}
                  alt={SITE.name}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------- SKILLS + EXPERIENCE */}
      <section id="skills" className="scroll-mt-24 px-5 py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:gap-12 md:grid-cols-2">
          {/* skills */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Technical <span className="text-[var(--color-accent)]">Skills</span>
            </h2>
            <div className="mt-8 space-y-5">
              {SKILLS.map((s, i) => (
                <Reveal key={s.name} delay={i * 50}>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 font-medium text-[var(--color-ink)]">
                        <Icon name={s.icon} brand className="h-[18px] w-[18px]" /> {s.name}
                      </span>
                      <span className="text-[var(--color-muted)]">{s.level}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--color-surface-2)]">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-accent),var(--color-accent-2))]"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>

          {/* experience */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Work <span className="text-[var(--color-accent)]">Experience</span>
            </h2>
            <div className="mt-8 space-y-4">
              {EXPERIENCE.map((e, i) => (
                <Reveal key={e.role + e.period} delay={i * 60}>
                  <div className="card p-5">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-soft)]">
                        <Icon name={e.icon} className="h-5 w-5 text-[var(--color-accent-2)]" />
                      </span>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-[var(--color-ink)]">{e.role}</h3>
                        <p className="text-sm text-[var(--color-accent-2)]">{e.org}</p>
                        <p className="mt-0.5 text-xs text-[var(--color-muted)]">{e.period}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <ResumeModal />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- WHAT I BRING */}
      <section className="px-5 py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="kicker mb-3 text-center">Beyond the Code</p>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            What I <span className="text-[var(--color-accent)]">Bring</span>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ATTRIBUTES.map((a, i) => (
              <Reveal key={a.label} delay={i * 60}>
                <div className="card flex flex-col gap-3 p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-accent-soft)]">
                    <Icon name={a.icon} className="h-5 w-5 text-[var(--color-accent-2)]" />
                  </span>
                  <h3 className="text-base font-semibold text-[var(--color-ink)]">{a.label}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">{a.tagline}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- PROJECTS */}
      <section id="projects" className="scroll-mt-24 px-5 py-12 md:py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Projects.</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-[var(--color-muted)]">
          A selection of shipped builds across full-stack, data engineering, machine learning, and
          client work — all live and deployed.
        </p>
        <div className="mx-auto mt-12 max-w-6xl">
          <ProjectCarousel projects={HOME_PROJECTS} />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects/"
            className="inline-flex rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-2)]"
          >
            View All Projects →
          </Link>
        </div>
      </section>

      {/* ------------------------------------------------------------- CONNECT */}
      <ContactSection />
    </>
  );
}
