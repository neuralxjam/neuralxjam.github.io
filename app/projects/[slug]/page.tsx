import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailLayout, {
  Section,
  TechTable,
  FeatureTable,
  CodeBlock,
  LessonsList,
  StepList,
  StatCards,
  InfoBanner,
} from "@/components/ProjectDetailLayout";

// ── All project slugs ────────────────────────────────────────────────────────

const ALL_SLUGS = [
  "edge",
  "staysure",
  "cryptopulse",
  "jobtrail",
  "minilink",
  "pcci",
  "jkloting",
  "jklothing",
  "8conacademy",
  "rsvp",
];

export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

// ── Metadata ─────────────────────────────────────────────────────────────────

const META: Record<string, { title: string; description: string }> = {
  edge: {
    title: "Edge — Forex Market Scanner",
    description:
      "CS thesis: full-stack SaaS that ranks forex pairs by 9-indicator macroeconomic consensus, augmented with a Python GBDT model.",
  },
  staysure: {
    title: "StaySure — Hotel Booking Cancellation Predictor",
    description:
      "Random Forest classifier with F1=0.85 and AUC=0.958 on 119k real hotel bookings. Full ML lifecycle + SHAP explainability.",
  },
  cryptopulse: {
    title: "CryptoPulse — Crypto Market ETL & Dashboard",
    description:
      "Fully automated ETL pipeline: CoinGecko → DuckDB → dbt → Streamlit dashboard, running every 6 hours via GitHub Actions cron.",
  },
  jobtrail: {
    title: "JobTrail — Job Application Tracker",
    description:
      "Track job applications with magic-link auth, a Postgres backend, and an HTMX-driven UI. Deployed on Render with GitHub Actions CI.",
  },
  minilink: {
    title: "MiniLink — Containerized URL Shortener",
    description:
      "Self-hosted URL shortener with Redis caching and Postgres, fully containerized and deployed on Railway with a GitHub Actions pipeline.",
  },
  pcci: {
    title: "PCCI Membership Platform",
    description:
      "Role-based membership management system for a Philippine chamber of commerce — dues tracking, payments, automated emails, and a Website CMS.",
  },
  jkloting: {
    title: "J.Kloting Website",
    description:
      "Two-page marketing + quote-system site for a Bulacan custom apparel printer. Portfolio filtering, pricing, AJAX forms.",
  },
  jklothing: {
    title: "J.Kloting Dashboard",
    description:
      "Internal ops tool covering orders, costs, cash-flow, inventory, and automated BIR tax-filing reminders via GitHub Actions cron.",
  },
  "8conacademy": {
    title: "8Con Academy Website",
    description:
      "Official marketing and enrollment site for a forex trading school in Bulacan. React SPA with Express + Nodemailer backend.",
  },
  rsvp: {
    title: "Roos & Lyka Wedding RSVP",
    description:
      "Custom static wedding save-the-date and RSVP site with Open Graph meta tags for rich WhatsApp / Facebook sharing.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = META[slug];
  if (!meta) return {};
  return {
    title: `${meta.title} — Jhames Andrew Macabata`,
    description: meta.description,
    alternates: { canonical: `/projects/${slug}/` },
  };
}

// ── Page router ───────────────────────────────────────────────────────────────

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const pages: Record<string, React.FC> = {
    edge: EdgePage,
    staysure: StaySurePage,
    cryptopulse: CryptoPulsePage,
    jobtrail: JobTrailPage,
    minilink: MiniLinkPage,
    pcci: PCCIPage,
    jkloting: JklotingPage,
    jklothing: JklothingPage,
    "8conacademy": EightConPage,
    rsvp: RsvpPage,
  };

  const Page = pages[slug];
  if (!Page) notFound();
  return <Page />;
}

// ── 1. EDGE ───────────────────────────────────────────────────────────────────

function EdgePage() {
  return (
    <ProjectDetailLayout
      badge="CS Thesis · Full-Stack + ML"
      title="Edge"
      subtitle="Multi-tier forex market scanner with macroeconomic scoring & GBDT signal layer"
      links={[{ label: "View Source", href: "https://github.com/neuralxjam/Edge" }]}
      image="/projects/edge.gif"
      imageAlt="Edge forex market scanner demo"
    >
      <Section title="What it is">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          Edge (deployed as <strong className="text-[var(--color-ink)]">8ConEdge</strong>) is my Computer Science thesis: a full-stack SaaS platform that ranks forex
          currency pairs by macroeconomic-indicator consensus and augments those signals with a Python GBDT model.
          Users sign in, browse a &ldquo;Top Setups&rdquo; leaderboard of pairs scored from −10 to +10, drill into a
          per-pair profile (score breakdown, OHLC chart, ML conviction reading), and — depending on their tier —
          export the analysis to PDF / DOCX / XLSX. Role- and tier-gated access, session security, payment-receipt
          uploads, and a four-service Docker production deploy behind Nginx. This project won{" "}
          <strong className="text-[var(--color-ink)]">Best Thesis 2026</strong> (BSCS).
        </p>
      </Section>

      <Section title="The Signal — How Pairs Are Ranked">
        <p className="mb-4 text-sm text-[var(--color-muted)]">
          For each currency pair the engine pulls nine macro indicators for both the base and quote currencies,
          scores each <code className="rounded bg-[var(--color-surface)] px-1 py-0.5 text-xs text-[var(--color-ink)]">+1 / 0 / −1</code> by
          comparing actual vs. forecast, then aggregates with a fixed weight per indicator into a normalized{" "}
          <strong className="text-[var(--color-ink)]">totalScore</strong> in{" "}
          <code className="rounded bg-[var(--color-surface)] px-1 py-0.5 text-xs text-[var(--color-ink)]">[−10, +10]</code>.
        </p>
        <FeatureTable
          headers={["Indicator", "Weight", "Scoring"]}
          rows={[
            ["Interest Rate", "3.0", "vs. forecast"],
            ["Core Inflation", "2.5", "vs. forecast"],
            ["Employment Change", "2.0", "beats / misses forecast"],
            ["GDP Growth", "2.0", "beat / miss"],
            ["COT (net change %)", "1.8", "positional bias"],
            ["Unemployment Rate", "1.5", "inverse: lower = +1"],
            ["Manufacturing PMI", "1.2", "beat / miss"],
            ["Services PMI", "1.2", "beat / miss"],
            ["Retail Sales", "1.0", "beat / miss"],
          ]}
        />
      </Section>

      <Section title="The ML Layer">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          A separate Python Flask service (port 5001) runs two pre-trained{" "}
          <strong className="text-[var(--color-ink)]">Gradient Boosted Decision Tree</strong> models on top of the
          rule-based scores:{" "}
          <code className="rounded bg-[var(--color-surface)] px-1 py-0.5 text-xs text-[var(--color-ink)]">conviction_regressor.pkl</code>{" "}
          outputs how strongly to trust the signal for a given regime, and{" "}
          <code className="rounded bg-[var(--color-surface)] px-1 py-0.5 text-xs text-[var(--color-ink)]">regime_classifier.pkl</code>{" "}
          labels the current market regime. The Node API proxies requests to this service so the React frontend
          talks to a single domain. Training data lives as{" "}
          <code className="rounded bg-[var(--color-surface)] px-1 py-0.5 text-xs text-[var(--color-ink)]">synthetic_training_data.csv</code>;{" "}
          <code className="rounded bg-[var(--color-surface)] px-1 py-0.5 text-xs text-[var(--color-ink)]">train_gbdt.py</code> regenerates the models.
        </p>
      </Section>

      <Section title="System Architecture">
        <CodeBlock>{`Browser (React 19 + Vite + Tailwind + Framer Motion)
  │
  ▼
Nginx reverse proxy (production) ─── or ─── Vite proxy (dev)
  │
  ├──► Express Main API     (Node, :3000)  ── pool8con  (users, profiles, assets)
  │                                         └─ pool8cons (payments, OTP, registrations)
  │
  ├──► Express Enrollment   (Node, :3001)  ── signup · OTP · password reset
  │                                              │
  │                                              └── nodemailer → SMTP
  │
  └──► Python AI Server     (Flask, :5001) ── GBDT (conviction + regime) · scaler

dev:  4 services run concurrently (concurrently --names BACKEND,ENROLL,VITE,AI-GBDT)
prod: docker-compose orchestrates all four behind Nginx + certbot TLS`}</CodeBlock>
      </Section>

      <Section title="Tech Stack">
        <TechTable
          rows={[
            ["Frontend", "React 19 · Vite 6 · React Router 7 · TailwindCSS 4 · Framer Motion · Recharts · react-financial-charts (OHLC) · lucide-react"],
            ["Main API", "Express 5 · MySQL 2 (two pools) · express-session · helmet · express-rate-limit · express-validator · multer"],
            ["Auth API", "Express 5 (separate process) · bcrypt · JWT · nodemailer (OTP delivery)"],
            ["ML Server", "Python 3 · Flask · scikit-learn (GBDT) · joblib · pandas · numpy"],
            ["Data", "MySQL — two databases: 8con (accounts, assets) and 8cons (payments, OTP)"],
            ["Document Export", "jsPDF + jspdf-autotable · docx · exceljs (PDF / DOCX / XLSX)"],
            ["Production", "Docker + docker-compose · Nginx reverse proxy · certbot TLS · self-managed VPS"],
          ]}
        />
      </Section>

      <Section title="Engineering Decisions">
        <LessonsList
          items={[
            {
              bold: "Two-dimension access control.",
              text: "Users have a role (student / teacher / admin) and an orthogonal tier (basic / full, payment-gated). RoleRoute guards admin pages; tier guards dashboard features. useAccessControl hits sessionStorage first then verifies with the backend, so guard re-renders are instant after the first check.",
            },
            {
              bold: "Session security beyond the basics.",
              text: "A 15-minute idle timer triggers a 2-minute warning modal then auto-logout, with a 4-minute heartbeat to /api/session/heartbeat keeping live sessions alive. Single-tab enforcement uses a BroadcastChannel + localStorage heartbeat so opening a second tab kicks the first — protects shared accounts in lab/classroom contexts.",
            },
            {
              bold: "Two MySQL databases on purpose.",
              text: "pool8con serves user-facing data (accounts, assets); pool8cons serves payments, OTP records, and registrations. Splitting concerns across pools means a payments outage can't take down the dashboard.",
            },
            {
              bold: "Multi-format export.",
              text: "Reports can be downloaded as PDF (jspdf-autotable), DOCX (docx), or XLSX (exceljs) so users can drop them straight into whatever workflow they're using.",
            },
            {
              bold: "Production hardening from day 1.",
              text: "helmet (security headers), express-rate-limit (anti-bruteforce), express-validator (input validation), cors — all wired in from the initial commit instead of bolted on later.",
            },
          ]}
        />
      </Section>
    </ProjectDetailLayout>
  );
}

// ── 2. STAYSURE ───────────────────────────────────────────────────────────────

function StaySurePage() {
  return (
    <ProjectDetailLayout
      badge="AI / Machine Learning"
      title="StaySure"
      subtitle="Hotel Booking Cancellation Predictor"
      links={[
        { label: "Live Demo", href: "https://huggingface.co/spaces/neuralxjam/staysure", primary: true },
        { label: "View Source", href: "https://github.com/neuralxjam/staysure" },
      ]}
      image="/projects/staysure.gif"
      imageAlt="StaySure demo"
    >
      <StatCards
        stats={[
          { title: "F1 Score", value: "0.85", desc: "on the held-out test set" },
          { title: "ROC-AUC", value: "0.958", desc: "strong class separation" },
          { title: "Training Data", value: "119k", desc: "real hotel bookings" },
        ]}
      />

      <Section title="Problem">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          Hotel booking cancellations cost the hospitality industry billions annually. If a hotel could predict —
          at booking time — which reservations are likely to cancel, they could adjust pricing, overbooking
          policies, and staffing accordingly.
        </p>
      </Section>

      <Section title="Solution">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          An end-to-end ML project trained on 119,390 real hotel bookings. Given details like lead time, deposit
          type, booking channel, and previous cancellations, the model predicts whether a booking will be
          cancelled — and <em>explains why</em> using SHAP feature importance values. Deployed as an interactive
          Gradio demo on Hugging Face Spaces.
        </p>
      </Section>

      <Section title="Tech Stack">
        <TechTable
          rows={[
            ["EDA", "Jupyter · pandas · seaborn"],
            ["Modeling", "scikit-learn Pipelines · LogisticRegression · RandomForest · XGBoost"],
            ["Hyperparameter Tuning", "GridSearchCV (3-fold)"],
            ["Experiment Tracking", "MLflow (local file backend)"],
            ["Explainability", "SHAP summary + per-prediction force plots"],
            ["Deployment", "Gradio on Hugging Face Spaces"],
          ]}
        />
      </Section>

      <Section title="ML Pipeline">
        <CodeBlock>{`Raw CSV (119,390 rows)
  │
  ▼
EDA notebook
  │  leakage check, target distribution, correlations
  ▼
sklearn Pipeline (ColumnTransformer)
  │  impute nulls → encode categoricals → scale numerics
  ▼
Model comparison (LR baseline → RF → XGBoost)
  │  GridSearchCV, logged to MLflow
  ▼
Best model (Random Forest) → test set evaluation
  │  confusion matrix, ROC-AUC, F1
  ▼
SHAP analysis → feature importance
  │
  ▼
Gradio app → Hugging Face Spaces (public demo)`}</CodeBlock>
      </Section>

      <Section title="Model Results">
        <FeatureTable
          headers={["Model", "F1 Score", "ROC-AUC"]}
          rows={[
            ["Logistic Regression (baseline)", "0.74", "0.86"],
            ["Random Forest (winner ✓)", "0.85", "0.958"],
            ["XGBoost", "0.83", "0.95"],
          ]}
        />
        <p className="mt-3 text-xs text-[var(--color-muted)]">
          Random Forest narrowly edged XGBoost on F1; chosen for faster inference and a simpler dependency
          surface for the Hugging Face deployment.
        </p>
      </Section>

      <Section title="Selected Lessons">
        <LessonsList
          items={[
            {
              bold: "EDA leakage hunt comes first.",
              text: "Several columns (e.g. reservation_status) effectively encode the target — using them inflates accuracy to 100%. Removing them is the difference between a model and a lookup table.",
            },
            {
              bold: "Class imbalance ≠ broken metrics.",
              text: "~37% cancellation rate is mild but not balanced. F1 over accuracy as the primary metric — a 63%-accurate model that always predicts \"not cancelled\" is useless.",
            },
            {
              bold: "Pipelines > manual preprocessing.",
              text: "sklearn ColumnTransformer + Pipeline guarantees test-set transformations match the training-set transformations. A whole class of \"works in notebook, fails in production\" bugs disappears.",
            },
            {
              bold: "SHAP explanations are the deploy unlock.",
              text: "Showing why a booking is flagged turns \"the AI says no\" into a tool a hotel manager would actually trust.",
            },
          ]}
        />
      </Section>
    </ProjectDetailLayout>
  );
}

// ── 3. CRYPTOPULSE ───────────────────────────────────────────────────────────

function CryptoPulsePage() {
  return (
    <ProjectDetailLayout
      badge="Data Engineering"
      title="CryptoPulse"
      subtitle="Crypto Market ETL Pipeline + Dashboard"
      links={[
        { label: "Live Dashboard", href: "https://cryptopulse.streamlit.app", primary: true },
        { label: "View Source", href: "https://github.com/neuralxjam/cryptopulse" },
        { label: "dbt Docs", href: "https://neuralxjam.github.io/cryptopulse/" },
      ]}
      image="/projects/cryptopulse.gif"
      imageAlt="CryptoPulse dashboard"
    >
      <Section title="Problem">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          Crypto price data is public and fast-moving, but raw API responses are messy and unnormalised.
          Most people look at a chart and see a number — a data engineer sees a pipeline problem: how do you
          reliably ingest, clean, transform, and serve that data so it&apos;s always fresh and queryable?
        </p>
      </Section>

      <Section title="Solution">
        <StepList
          items={[
            {
              step: "1",
              text: <><strong className="text-[var(--color-ink)]">Ingest</strong> — Python fetches top-100 coin prices from CoinGecko&apos;s free API, validates each row with a pydantic model, writes a timestamped Parquet snapshot.</>,
            },
            {
              step: "2",
              text: <><strong className="text-[var(--color-ink)]">Store</strong> — An idempotent loader appends the snapshot into DuckDB; duplicate timestamps are silently ignored via <code className="rounded bg-[var(--color-surface)] px-1 py-0.5 text-xs">INSERT OR IGNORE</code> on a composite primary key.</>,
            },
            {
              step: "3",
              text: <><strong className="text-[var(--color-ink)]">Transform</strong> — dbt rebuilds a staging view and two mart tables (daily returns leaderboard, top gainers/losers), then runs 10 data-quality tests.</>,
            },
            {
              step: "4",
              text: <><strong className="text-[var(--color-ink)]">Commit back</strong> — GitHub Actions commits the updated DuckDB file to the repo with <code className="rounded bg-[var(--color-surface)] px-1 py-0.5 text-xs">[skip ci]</code> so the next cron run picks up fresh historical data.</>,
            },
            {
              step: "5",
              text: <><strong className="text-[var(--color-ink)]">Serve</strong> — A Streamlit dashboard reads from the mart tables and shows a movers section, a coin price history chart, and a full top-100 leaderboard.</>,
            },
          ]}
        />
      </Section>

      <Section title="Tech Stack">
        <TechTable
          rows={[
            ["Ingestion", "Python · httpx · pydantic"],
            ["Storage", "DuckDB (file-based, committed to repo)"],
            ["Transformation", "dbt-duckdb (staging → marts pattern)"],
            ["Orchestration", "GitHub Actions schedule: cron (every 6h)"],
            ["Dashboard", "Streamlit on Streamlit Community Cloud"],
            ["Tests", "dbt unique · not_null · accepted_values"],
            ["Docs", "dbt docs site hosted on GitHub Pages"],
          ]}
        />
      </Section>

      <Section title="Architecture">
        <CodeBlock>{`GitHub Actions (cron 0 */6 * * *)
  │
  ├─ ingest.py ──► data/raw/prices_<UTC>.parquet
  │                        │
  ├─ load.py ──────────────► cryptopulse.duckdb
  │                                   │
  │              ┌────────────────────┤  raw_prices (table)
  │              │                    │
  ├─ dbt run ────┤         stg_prices (view)
  │              │                    │
  │              ├── mart_daily_returns (table)
  │              └── mart_top_movers   (table)
  │
  └─ git commit ──► pushes cryptopulse.duckdb back [skip ci]

Streamlit app reads marts → live public dashboard`}</CodeBlock>
      </Section>

      <Section title="Selected Lessons">
        <LessonsList
          items={[
            {
              bold: "dbt staging → marts pattern.",
              text: "Separating raw-to-clean from clean-to-business-logic means one place to fix schema changes, not every downstream model.",
            },
            {
              bold: "Idempotency by design.",
              text: "INSERT OR IGNORE on (id, ingested_at) makes the loader safe to re-run; the same lesson applies to every ETL job.",
            },
            {
              bold: "Jinja in SQL comments is parsed.",
              text: "{{ ref(...) }} inside a comment creates a real dbt dependency and a false cycle error; always use plain text in comments.",
            },
            {
              bold: "git pull --rebase needs a clean tree.",
              text: "In CI: commit first, then rebase on the remote, then push. Not the other way around.",
            },
            {
              bold: "Windows zoneinfo.",
              text: "Python's zoneinfo module needs the tzdata PyPI package on Windows (Linux gets it from the OS); catching this early saved a broken GitHub Actions run.",
            },
          ]}
        />
      </Section>
    </ProjectDetailLayout>
  );
}

// ── 4. JOBTRAIL ───────────────────────────────────────────────────────────────

function JobTrailPage() {
  return (
    <ProjectDetailLayout
      badge="Software Engineering"
      title="JobTrail"
      subtitle="Job Application Tracker"
      links={[
        { label: "Live App", href: "https://jobtrail-0gza.onrender.com", primary: true },
        { label: "View Source", href: "https://github.com/neuralxjam/jobtrail" },
      ]}
      image="/projects/jobtrail.gif"
      imageAlt="JobTrail demo"
    >
      <Section title="Problem">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          Tracking job applications in a spreadsheet is messy. You lose context, forget follow-ups, and can&apos;t
          see patterns across hundreds of applications. JobTrail solves this with a clean web app purpose-built
          for the job hunt.
        </p>
      </Section>

      <Section title="Solution">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          A personal web application where you log every application — company, role, date, status, and notes —
          and see it all in one dashboard. Filter by status (Applied / Interviewing / Offer / Rejected), search
          by company, and track weekly activity on a chart. Built with real magic-link auth so your data is
          private to you.
        </p>
      </Section>

      <Section title="Tech Stack">
        <TechTable
          rows={[
            ["Backend", "FastAPI · SQLModel"],
            ["Database", "PostgreSQL via Supabase"],
            ["Frontend", "Jinja2 + HTMX + Tailwind CSS (no React, no build step)"],
            ["Auth", "Supabase magic-link email auth (Resend SMTP)"],
            ["Deploy", "Render (free tier, sleeps after 15 min idle)"],
            ["CI", "GitHub Actions running pytest on every push"],
          ]}
        />
      </Section>

      <Section title="Architecture">
        <div className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-white p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/jobtrail-arch.png"
            alt="JobTrail architecture diagram"
            className="w-full"
          />
        </div>
        <p className="mt-3 text-sm text-[var(--color-muted)]">
          Browser → FastAPI on Render → Supabase Postgres. HTMX swaps in HTML fragments from FastAPI endpoints —
          no JSON API needed for v1. Auth tokens stored in HttpOnly cookies.
        </p>
      </Section>

      <Section title="Selected Lessons">
        <LessonsList
          items={[
            {
              bold: "Render's Python default bites you.",
              text: "Render's build env defaults to Python 3.14, which breaks half the ecosystem. Pin via .python-version with 3.11.9; saves a long Sunday afternoon of mysterious build failures.",
            },
            {
              bold: "Supabase magic-link rate limits silently kill UX.",
              text: "The default email provider is rate-limited per project; switching to Resend custom SMTP removes the limit and the \"we'll get back to you in an hour\" emails to yourself.",
            },
            {
              bold: "HTMX is genuinely enough for v1.",
              text: "Inline create/edit/delete with no full-page reloads, no React, no build pipeline — the entire frontend is server-rendered HTML with sprinkles. Saves weeks vs. learning a SPA framework just to ship a CRUD app.",
            },
          ]}
        />
      </Section>

      <Section title="Local Setup">
        <CodeBlock>{`git clone https://github.com/neuralxjam/jobtrail
cd jobtrail
uv sync
cp .env.example .env   # fill in Supabase credentials
uv run fastapi dev`}</CodeBlock>
      </Section>
    </ProjectDetailLayout>
  );
}

// ── 5. MINILINK ───────────────────────────────────────────────────────────────

function MiniLinkPage() {
  return (
    <ProjectDetailLayout
      badge="DevOps · Software Engineering"
      title="MiniLink"
      subtitle="Containerized URL Shortener + Analytics"
      links={[
        { label: "Live App", href: "https://minilink-production.up.railway.app", primary: true },
        { label: "View Source", href: "https://github.com/neuralxjam/minilink" },
      ]}
      image="/projects/minilink.gif"
      imageAlt="MiniLink demo"
    >
      <Section title="Problem">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          Every public URL shortener sends your links (and your users&apos; clicks) through someone else&apos;s servers.
          More importantly for portfolio purposes: public shorteners don&apos;t require writing a Dockerfile, wiring
          up Docker Compose, or deploying to a cloud platform. MiniLink exists to demonstrate those DevOps
          fundamentals in a scope small enough to reason about completely.
        </p>
      </Section>

      <Section title="Solution">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          A self-hosted URL shortener where{" "}
          <code className="rounded bg-[var(--color-surface)] px-1 py-0.5 text-xs text-[var(--color-ink)]">POST /shorten</code>{" "}
          returns a short code and{" "}
          <code className="rounded bg-[var(--color-surface)] px-1 py-0.5 text-xs text-[var(--color-ink)]">GET /&#123;code&#125;</code>{" "}
          issues a 302 redirect. Every redirect increments a hit counter in Postgres. A live HTMX dashboard shows
          the top 20 links by hits. Short-code lookups are served from Redis on the hot path — Postgres is only
          touched on a cache miss or a write.
        </p>
      </Section>

      <Section title="Tech Stack">
        <TechTable
          rows={[
            ["API", "FastAPI · SQLModel"],
            ["Database", "PostgreSQL (Railway managed)"],
            ["Cache", "Redis — read-through cache, 24-hour TTL (Railway managed)"],
            ["Container", "Docker — multi-stage build (builder → runtime, ≈150 MB image)"],
            ["Local Dev", "Docker Compose — one command brings up API + Postgres + Redis"],
            ["CI/CD", "GitHub Actions: lint (ruff) → test (pytest) → build image → push to GHCR → Railway auto-deploy"],
            ["Dashboard UI", "HTMX + Tailwind CSS (no React, no build step)"],
            ["Deploy", "Railway — managed services, GitHub App auto-deploy on push to main"],
          ]}
        />
      </Section>

      <Section title="Architecture">
        <CodeBlock>{`Browser
  │
  ▼
FastAPI  (Railway — Dockerfile, port 8080)
  │
  ├─ short-code lookup
  │       │
  │       ▼
  │    Redis  ──── miss ────►  PostgreSQL
  │   (cache)  ◄──── fill ───  (source of truth)
  │
  └─ hit counter write ──────► PostgreSQL`}</CodeBlock>
        <p className="mt-3 text-sm text-[var(--color-muted)]">
          Reads hit Redis first with a 24-hour TTL. A cache miss falls through to Postgres, returns the URL,
          and warms the Redis entry. Writes (new short code, hit counter increment) go straight to Postgres.
        </p>
      </Section>

      <Section title="Selected Lessons">
        <LessonsList
          items={[
            {
              bold: "Multi-stage Docker builds matter for image size.",
              text: "A naive single-stage image exceeds 1 GB — the pip install layer balloons. Separating the builder stage from the runtime stage shrinks the final image to ≈150 MB. Smaller images mean faster Railway deploys and less storage cost.",
            },
            {
              bold: "Docker Compose healthchecks prevent startup races.",
              text: "The API's depends_on with a pg_isready healthcheck on the Postgres service means uvicorn never starts before the DB is ready. Without this, create_db_and_tables() fails on the first boot and the container exits silently.",
            },
            {
              bold: "Cloud proxy auto-detection can quietly pick the wrong port.",
              text: "Railway's edge proxy detected port 8000 (from the old EXPOSE 8000 in the Dockerfile) while uvicorn was actually binding to 8080 (via Railway's injected $PORT). Every request returned 502. The fix: align EXPOSE to 8080 and set the Target Port in Railway's dashboard.",
            },
            {
              bold: "Redis TTL is a product decision, not a technical detail.",
              text: "A 24-hour TTL is fine for a personal shortener where links rarely change. But if you add a delete/edit feature, the cache entry must be invalidated on write — otherwise visitors hit the stale cached redirect for up to 24 hours after deletion.",
            },
          ]}
        />
      </Section>

      <Section title="Local Setup">
        <CodeBlock>{`git clone https://github.com/neuralxjam/minilink
cd minilink
python -m venv .venv && .venv\\Scripts\\pip install -r requirements-dev.txt
docker compose up          # starts API + Postgres + Redis
# Visit http://localhost:8000`}</CodeBlock>
      </Section>
    </ProjectDetailLayout>
  );
}

// ── 6. PCCI ───────────────────────────────────────────────────────────────────

function PCCIPage() {
  return (
    <ProjectDetailLayout
      badge="Client Project · Full-Stack"
      title="PCCI Membership Platform"
      subtitle="Membership management system for a Philippine Chamber of Commerce"
      links={[
        { label: "Staging", href: "https://pcci-frontend-staging.onrender.com", primary: true },
      ]}
    >
      <InfoBanner>
        This project is currently in active development. The staging environment is live on Render&apos;s free
        tier — first load may take 30–60 seconds to wake up.
      </InfoBanner>

      <Section title="Problem">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          The Philippine Chamber of Commerce and Industry (PCCI) branch was managing memberships, dues, events,
          and communications entirely through manual processes — spreadsheets, paper records, and back-and-forth
          emails. Tracking who had paid, who was a new applicant pending approval, and what events were upcoming
          was fragmented across multiple people and tools. They needed a centralized system that different staff
          roles could use simultaneously without stepping on each other&apos;s data.
        </p>
      </Section>

      <Section title="Solution">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          A full-stack membership management platform with two layers: a public-facing website for prospective
          members to learn about the chamber and apply, and a role-based admin dashboard for staff to manage
          everything from one place. The system handles the full membership lifecycle — application submission,
          approval/rejection workflow, dues tracking across multiple payment channels, and automated email
          notifications at key steps. A Website CMS module (Super Admin only) lets non-technical staff update
          the public site&apos;s content without touching code.
        </p>
      </Section>

      <Section title="Tech Stack">
        <TechTable
          rows={[
            ["Backend", "Laravel 12 · Laravel Sanctum (API auth)"],
            ["Frontend", "Next.js · Tailwind CSS"],
            ["Database", "PostgreSQL"],
            ["File Storage", "Backblaze B2 (images for events, trustees, activities)"],
            ["Email", "Brevo SMTP (registration confirmations, OTP for sensitive operations)"],
            ["Auth", "Role-based — Super Admin, Admin, Treasurer with scoped access"],
            ["Deploy", "Render (backend + frontend, free tier staging)"],
            ["Containerization", "Docker + Docker Compose for local development"],
          ]}
        />
      </Section>

      <Section title="Key Features">
        <FeatureTable
          headers={["Module", "What it does"]}
          rows={[
            ["Membership lifecycle", "Public application form → pending → approve/reject → active member"],
            ["Dues tracking", "Multi-channel payments (GCash, bank transfer) logged per member"],
            ["Events & Activities", "CRUD with image uploads; shown on public pages"],
            ["Board of Trustees", "Manage profiles with photos; displayed on public About page"],
            ["Website CMS", "Super Admin controls all public page content without code changes"],
            ["Email notifications", "Automated emails on application, approval, and OTP for password changes"],
            ["RBAC", "Super Admin sees everything; Admin manages members; Treasurer manages dues"],
          ]}
        />
      </Section>

      <Section title="Architecture">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          Decoupled frontend and backend. Next.js frontend communicates with the Laravel API via Sanctum token
          auth. Files (images, documents) are stored on Backblaze B2 and served directly from B2 CDN URLs —
          the Laravel backend never serves binary assets. Email is handled by Brevo SMTP, injected via
          Laravel&apos;s mail driver config. Both services are containerized with Docker for local dev parity and
          deployed independently on Render.
        </p>
      </Section>

      <Section title="Selected Lessons">
        <LessonsList
          items={[
            {
              bold: "RBAC scoping is harder than it looks at the API layer.",
              text: "Sanctum makes auth easy, but ensuring a Treasurer can't accidentally access member approval endpoints required explicit policy checks on every sensitive route — not just middleware groups.",
            },
            {
              bold: "Backblaze B2 has stricter CORS rules than S3.",
              text: "Getting image uploads to work from a browser required careful bucket CORS configuration — the default settings silently reject cross-origin PUT requests.",
            },
            {
              bold: "CMS features expand scope fast.",
              text: 'Starting with a simple "edit the hero image" request grew into a full CMS with 4 page sections, reorderable content, and fallback rendering. Scoping CMS work explicitly upfront would have saved significant back-and-forth.',
            },
            {
              bold: "Render's free tier is fine for staging but has real limitations.",
              text: "Both services spin down after inactivity, which means a cold start can take 30–60 seconds. For a client demo environment this needs an upfront expectation-setting conversation.",
            },
          ]}
        />
      </Section>
    </ProjectDetailLayout>
  );
}

// ── 7. J.KLOTING WEBSITE ─────────────────────────────────────────────────────

function JklotingPage() {
  return (
    <ProjectDetailLayout
      badge="Client Work · Frontend"
      title="J.Kloting Website"
      subtitle="Custom apparel printing — marketing site & quote system"
      links={[
        { label: "Live Site", href: "https://jkloting.store/", primary: true },
        { label: "View Source", href: "https://github.com/neuralxjam/jkloting_website" },
      ]}
      video="/projects/jkloting.mp4"
    >
      <Section title="About">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          A two-page marketing site built for <strong className="text-[var(--color-ink)]">J.Kloting</strong>, a
          custom apparel printer in Meycauayan City, Bulacan, Philippines. Their offering covers DTF,
          sublimation, and silk-screen printing for schools, sports teams, corporate uniforms, streetwear, and
          traditional barong shirts. The site serves as both a brand presence and a working lead-generation tool
          — visitors can browse the portfolio, see pricing per print method, and submit quote requests directly.
        </p>
      </Section>

      <Section title="What's on the Site">
        <LessonsList
          items={[
            {
              bold: "Two pages.",
              text: "A single-scroll landing (index.html) and a dedicated barong product page (barong.html).",
            },
            {
              bold: "Portfolio with filtering.",
              text: "MixItUp-powered grid filtering work by category (corporate, sportswear, uniforms, streetwear, barong).",
            },
            {
              bold: "Pricing breakdown per print method.",
              text: "DTF, sublimation, silk-screen, each with a feature list and turnaround time.",
            },
            {
              bold: "4-step process explainer.",
              text: "Inquiry → Quote → Approve & Pay → Production & Delivery, with payment terms (50/50 split, GCash / bank transfer / cash on pickup).",
            },
            {
              bold: "Two AJAX forms.",
              text: "Quick Message + Quote Request, posting to Web3Forms with honeypot spam protection and animated success/error states.",
            },
            {
              bold: "Mobile contact bar.",
              text: "Sticky bottom bar on phones with one-tap call + Messenger shortcuts.",
            },
          ]}
        />
      </Section>

      <Section title="Tech Stack">
        <TechTable
          rows={[
            ["Markup & Styles", "HTML5 · custom CSS · Bootstrap 4 grid + components"],
            ["Typography", "Google Fonts — Playfair Display (headings) + Poppins (body)"],
            ["JavaScript", "jQuery + plugins: WOW.js (animations) · MixItUp (filter) · Owl Carousel · Slicknav"],
            ["Forms", "Web3Forms API (no own backend) · honeypot anti-spam · client-side validation"],
            ["Hosting", "Cloudflare Workers (wrangler.jsonc) at the custom jkloting.store domain"],
          ]}
        />
      </Section>

      <InfoBanner>
        The stack is deliberately traditional — jQuery + Bootstrap 4 + a serverless edge host — chosen because
        the brief was a fast-turnaround marketing site for a small business, not a SPA. The trade-off was the
        right one: the site is small, fast, easy for the client to update later, and was shipped live on a
        custom domain end-to-end.
      </InfoBanner>
    </ProjectDetailLayout>
  );
}

// ── 8. J.KLOTING DASHBOARD ───────────────────────────────────────────────────

function JklothingPage() {
  return (
    <ProjectDetailLayout
      badge="Client Project · Full-Stack"
      title="J.Kloting Dashboard"
      subtitle="Operations & Finance Management System for a Custom Apparel Business"
      links={[
        { label: "Live App", href: "https://jklothing-dashboard.vercel.app", primary: true },
      ]}
      images={[
        "/projects/J.Kloting-Dashboard-A.png",
        "/projects/J.Kloting-Dashboard-B.png",
        "/projects/J.Kloting-Dashboard-C.png",
        "/projects/J.Kloting-Dashboard-D.png",
        "/projects/J.Kloting-Dashboard-E.png",
      ]}
    >
      <Section title="Problem">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          The same apparel business behind the J.Kloting marketing site was running its day-to-day operations —
          orders, production costs, cash flow, and inventory — out of spreadsheets and chat messages. There was
          no single source of truth for what had been ordered, what each job actually cost, how much cash was on
          hand across accounts, or whether BIR tax filing deadlines were coming up. The owner needed a private
          dashboard to run the business from one place.
        </p>
      </Section>

      <Section title="Solution">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          A role-gated internal dashboard covering the full operations loop: orders (create, edit, complete, CSV
          export), costs tied to jobs, a cash-flow ledger with recurring entries, transfers between accounts,
          manual adjustments, and exportable statements, plus inventory and fund allocations. A scheduled job
          emails BIR tax-filing reminders automatically so deadlines aren&apos;t missed. Charts on the main dashboard
          summarize revenue, costs, and cash position at a glance.
        </p>
      </Section>

      <Section title="Tech Stack">
        <TechTable
          rows={[
            ["Framework", "Next.js 16 (App Router) · React 19 · TypeScript"],
            ["Database & Auth", "Supabase (PostgreSQL + Auth via @supabase/ssr)"],
            ["Forms & Validation", "react-hook-form + Zod schemas (@hookform/resolvers)"],
            ["Charts", "Recharts"],
            ["Styling", "Tailwind CSS v4 · lucide-react icons"],
            ["Email", "Nodemailer over Gmail SMTP"],
            ["Scheduling", "GitHub Actions cron → secured Vercel API route"],
            ["Deploy", "Vercel"],
          ]}
        />
      </Section>

      <Section title="Key Features">
        <FeatureTable
          headers={["Module", "What it does"]}
          rows={[
            ["Orders", "Create → edit → complete workflow, with CSV export of order history"],
            ["Costs", "Track production/material costs and attribute them to jobs"],
            ["Cash Flow", "Ledger with recurring entries, account transfers, manual adjustments, and exportable statements"],
            ["Inventory", "Track stock levels for materials and finished goods"],
            ["Allocations", "Allocate funds across purposes/accounts"],
            ["Dashboard", "Recharts summaries of revenue, costs, and cash position"],
            ["BIR Tax Reminders", "Daily cron checks upcoming filing deadlines and emails reminders"],
          ]}
        />
      </Section>

      <Section title="Architecture">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          Next.js App Router with a route-group split — an{" "}
          <code className="rounded bg-[var(--color-surface)] px-1 py-0.5 text-xs text-[var(--color-ink)]">(auth)</code>{" "}
          group for login and an{" "}
          <code className="rounded bg-[var(--color-surface)] px-1 py-0.5 text-xs text-[var(--color-ink)]">(app)</code>{" "}
          group for the gated dashboard. Supabase handles Postgres + auth via{" "}
          <code className="rounded bg-[var(--color-surface)] px-1 py-0.5 text-xs text-[var(--color-ink)]">@supabase/ssr</code>{" "}
          for server-side session handling. The tax-reminder automation is a GitHub Actions workflow that runs
          daily at 09:00 Manila time and POSTs to{" "}
          <code className="rounded bg-[var(--color-surface)] px-1 py-0.5 text-xs text-[var(--color-ink)]">/api/cron/tax-reminders</code>,
          authenticated with a{" "}
          <code className="rounded bg-[var(--color-surface)] px-1 py-0.5 text-xs text-[var(--color-ink)]">CRON_SECRET</code>{" "}
          header. That route then sends email via Nodemailer + Gmail SMTP.
        </p>
      </Section>

      <Section title="Selected Lessons">
        <LessonsList
          items={[
            {
              bold: "External cron beats platform cron for control.",
              text: "Driving the tax reminders from GitHub Actions (rather than Vercel Cron) gave a free schedule, a manual \"run now\" trigger with a test-date override for QA, and run logs — without coupling the schedule to the hosting plan.",
            },
            {
              bold: "Secure the cron endpoint, not just the UI.",
              text: "A public API route that sends email is an abuse vector. Gating /api/cron/tax-reminders behind a shared CRON_SECRET header was essential — auth on the dashboard pages alone wouldn't have protected it.",
            },
            {
              bold: "Zod schemas as the single contract.",
              text: "Reusing the same Zod schema for client-side react-hook-form validation and server-side checks removed a whole class of \"valid in the form, invalid at the DB\" bugs.",
            },
            {
              bold: "Financial data needs an audit-friendly model.",
              text: "Splitting cash flow into recurring entries, transfers, and adjustments — instead of one flat \"transactions\" table — made statements reconcile cleanly and kept corrections traceable.",
            },
          ]}
        />
      </Section>
    </ProjectDetailLayout>
  );
}

// ── 9. 8CON ACADEMY ──────────────────────────────────────────────────────────

function EightConPage() {
  return (
    <ProjectDetailLayout
      badge="Client Work · Internship"
      title="8Con Academy"
      subtitle="Official site for a forex trading school in Bulacan"
      links={[
        { label: "Live Site", href: "https://www.8conacademy.com/", primary: true },
        { label: "View Source", href: "https://github.com/neuralxjam/8ConLandingPage-main" },
      ]}
      video="/projects/8conacademy.mp4"
    >
      <Section title="About">
        <p className="mb-4 text-sm leading-relaxed text-[var(--color-muted)]">
          The official marketing and enrollment site for{" "}
          <strong className="text-[var(--color-ink)]">8Con Academy</strong>, a forex derivatives trading school
          based in Meycauayan, Bulacan, Philippines. The academy&apos;s mission is to produce a profitable forex
          trader in every Filipino household through a structured three-level curriculum — from fundamentals to
          live trading application.
        </p>
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          The site serves as the academy&apos;s primary digital presence: prospective students land here to explore
          the curriculum, understand what each competency level covers, and submit enrollment inquiries. Built as
          a multi-page React SPA with a lightweight Express backend that routes form submissions and file
          attachments directly to the admissions team via email.
        </p>
      </Section>

      <Section title="What's on the Site">
        <LessonsList
          items={[
            {
              bold: "Multi-page SPA.",
              text: "React Router DOM 7 handles client-side routing across program overview, about, and contact sections without page reloads.",
            },
            {
              bold: "Curriculum presentation.",
              text: "Three competency levels (Basic, Common, Core) laid out clearly for prospective students.",
            },
            {
              bold: "Enrollment inquiry form.",
              text: "Submissions processed server-side by an Express + Nodemailer backend; file attachments supported via Multer.",
            },
            {
              bold: "EmailJS integration.",
              text: "Lightweight client-side email fallback for quick contact forms.",
            },
          ]}
        />
      </Section>

      <Section title="Tech Stack">
        <TechTable
          rows={[
            ["Frontend", "React 19 · Vite 6 · React Router DOM 7"],
            ["Icons", "Lucide React"],
            ["Backend", "Express 5 · Nodemailer · Multer (file uploads)"],
            ["Email Delivery", "EmailJS (client-side) + Nodemailer (server-side)"],
            ["Build Tooling", "Vite 6 with @vitejs/plugin-react · ESLint"],
          ]}
        />
      </Section>

      <InfoBanner>
        This project sits at an interesting intersection in my portfolio: 8Con Academy is the institution I
        worked at as an intern and was later promoted to developer. Their proprietary scanner — 8ConEdge — is
        the system my CS thesis (Edge) modelled. Building the official site gave me a real client brief with
        real users: prospective traders researching their first step into structured forex education.
      </InfoBanner>
    </ProjectDetailLayout>
  );
}

// ── 10. WEDDING RSVP ─────────────────────────────────────────────────────────

function RsvpPage() {
  return (
    <ProjectDetailLayout
      badge="Client Project · Event Site"
      title="Roos & Lyka Wedding RSVP"
      subtitle="Custom Wedding RSVP & Save-the-Date Website"
      links={[
        { label: "Live Site", href: "https://excroosivelymeantforlyka.netlify.app/", primary: true },
      ]}
      video="/projects/rsvp.mp4"
    >
      <Section title="Problem">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          The couple needed a digital save-the-date and RSVP experience for their December 2025 wedding —
          something personal, fast to load on mobile, and shareable via WhatsApp and Facebook without looking
          like a generic form. Generic RSVP tools felt impersonal and didn&apos;t match the aesthetic they wanted
          for their invitations.
        </p>
      </Section>

      <Section title="Solution">
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          A custom static wedding website with the couple&apos;s branding, event details, countdown timer, and RSVP
          functionality. Built entirely with HTML, CSS, and vanilla JavaScript — no framework overhead, instant
          load times on any mobile connection. Deployed on Netlify for zero-config HTTPS and global CDN. Social
          sharing was handled via Open Graph meta tags so WhatsApp and Facebook previews showed the couple&apos;s
          photo and event details automatically when the link was shared.
        </p>
      </Section>

      <Section title="Tech Stack">
        <TechTable
          rows={[
            ["Frontend", "HTML5 · CSS3 · Vanilla JavaScript"],
            ["Fonts", "Google Fonts (Work Sans · Sacramento · Engagement)"],
            ["Deploy", "Netlify (static, zero-config, HTTPS out of the box)"],
            ["Social Sharing", "Open Graph meta tags for WhatsApp / Facebook link previews"],
          ]}
        />
      </Section>

      <Section title="Selected Lessons">
        <LessonsList
          items={[
            {
              bold: "Open Graph image sizing matters for WhatsApp.",
              text: "WhatsApp caps preview images at 300px. Setting og:image:width and og:image:height explicitly to 300 ensured the preview rendered correctly when guests shared the link — without it, the image either cropped awkwardly or didn't show.",
            },
            {
              bold: "Static sites are still the right tool for time-bound events.",
              text: "No backend, no database, no maintenance. The site just works for as long as Netlify exists — no expiring servers or zombie bills after the wedding date.",
            },
            {
              bold: "Client feedback cycles are faster with a live URL from day one.",
              text: "Deploying to Netlify on the first commit meant the couple could view real changes on their phones immediately, rather than waiting for screenshots. This cut revision rounds significantly.",
            },
          ]}
        />
      </Section>
    </ProjectDetailLayout>
  );
}
