// ---------------------------------------------------------------------------
//  Single source of truth for all site copy + data.
//  Edit text/links here; components read from this file.
// ---------------------------------------------------------------------------

export const EMAIL = "jam.macabata@outlook.com";

export const SITE = {
  name: "Jhames Andrew Macabata",
  shortName: "Jhames Andrew",
  role: "Software Engineer",
  kicker: "Software Engineer · Full-Stack · Data · AI",
  url: "https://jhamesandrewmacabata.space",
  title: "Jhames Andrew Macabata | Software Engineer — Full-Stack, Data & AI",
  description:
    "Software Engineer building full-stack web apps, data pipelines, and ML systems. CS graduate with professional experience and ten shipped projects — open to full-time roles and freelance / contract work.",
  ogImage: "/social_img.jpg",
  location: "Marilao, Bulacan, Philippines",
};

export const HERO = {
  greetingPrefix: "Hi, I'm",
  firstName: "Jhames", // accent-colored
  restName: "Andrew Macabata",
  subtitle: "Software Engineer — Full-Stack · Data · AI",
  tagline:
    "I build software that ships — full-stack web apps, data pipelines, and deployed ML models. CS graduate, open to full-time roles and freelance / contract work.",
  status: "Open to full-time roles & freelance / contract work",
  photo: "/profile.jpg",
  // floating badge card over the hero photo (inspo style)
  badgeTitle: "Software that ships",
  badgeText: "Full-stack web apps, data pipelines & deployed ML.",
};

// Drop these image files into the /public folder with these exact names.
export const EDUCATION_PHOTO = "/education-grad.webp"; // graduation photo (Education section)
export const ABOUT_PHOTO = "/about-me.webp"; // second portrait (More About Me section)

// 3 stat boxes shown inside the About Me section (inspo2 "+200 Clients" style)
export const ABOUT_STATS = [
  { value: "10", label: "Projects Shipped" },
  { value: "4", label: "Live Client Sites" },
  { value: "16", label: "Certifications" },
];

export const ABOUT = {
  heading: "Software, Built to Ship — Not Just Demo",
  paragraphs: [
    "I'm a Computer Science graduate from Pambayang Dalubhasaan ng Marilao in the Philippines. My background started in Electrical Engineering before I transferred to CS, which gives me a cross-disciplinary perspective I bring into every project.",
    "I'm currently a software developer at 8Con Academy, where I was promoted from intern, and I'm open to full-time roles as well as freelance and contract work.",
    "Across ~1 year of professional experience I've built and shipped full-stack web applications, REST APIs, containerized backend services, data pipelines, and ML models — from system design to CI/CD and production deployment. All major projects are live and deployed.",
  ],
};

// ---------------------------------------------------------------------------
//  Services  (inspo "What I Can Help You With" — 6-card grid)
// ---------------------------------------------------------------------------
export type Service = {
  icon: string; // emoji placeholder; swap for SVG later if desired
  title: string;
  desc: string;
  deliverables: string[];
};

export const SERVICES: Service[] = [
  {
    icon: "layers",
    title: "Full-Stack Web Apps",
    desc: "Custom web applications built end-to-end — from data model to production deploy. The kind of app your business actually runs on, not a template.",
    deliverables: [
      "Authentication & role-based access",
      "REST APIs + production database",
      "Containerized deploy with CI/CD",
    ],
  },
  {
    icon: "dashboard",
    title: "Internal Business Dashboards",
    desc: "Operations tools that replace the spreadsheet sprawl — orders, inventory, finances, and reports in one place your team can trust.",
    deliverables: [
      "Orders, inventory & cash-flow tracking",
      "Charts and exportable reports",
      "Automated email reminders & alerts",
    ],
  },
  {
    icon: "rocket",
    title: "Marketing & Quote / Booking Sites",
    desc: "Fast, mobile-first sites that turn visitors into inquiries — with quote and booking forms wired straight to your inbox.",
    deliverables: [
      "Mobile-first, conversion-focused design",
      "Quote / booking forms with spam protection",
      "SEO & social-share setup",
    ],
  },
  {
    icon: "bot",
    title: "AI Automation",
    desc: "Connect the tools you already use and let the busywork run itself — lead capture, routing, and scheduled jobs that don't need a human.",
    deliverables: [
      "API & service integrations",
      "Lead capture → CRM routing",
      "Scheduled jobs & notifications",
    ],
  },
  {
    icon: "gitbranch",
    title: "Data Pipelines",
    desc: "ETL pipelines, dbt models, and dashboards that turn raw API data into usable insights — running on a schedule, no babysitting.",
    deliverables: [
      "Scheduled ETL (GitHub Actions cron)",
      "dbt models + documented warehouse",
      "Streamlit dashboards & reports",
    ],
  },
  {
    icon: "brain",
    title: "ML Systems",
    desc: "The full ML lifecycle — EDA, feature engineering, model comparison, explainability, and a deployed demo people can actually click.",
    deliverables: [
      "EDA & feature engineering",
      "Model comparison + SHAP explainability",
      "Deployed demo (Hugging Face / Streamlit)",
    ],
  },
];

// ---------------------------------------------------------------------------
//  Projects
// ---------------------------------------------------------------------------
export type Project = {
  slug: string;
  title: string;
  badge: string;
  group: string;
  desc: string;
  tech: string[];
  image?: string;
  live?: string;
  liveLabel?: string;
  repo?: string;
  extraLinks?: { label: string; url: string }[];
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "edge",
    title: "Edge — Forex Market Scanner",
    badge: "Thesis · Full-Stack + ML",
    group: "Full-Stack + ML",
    desc: "CS thesis: multi-tier full-stack SaaS that ranks forex pairs by 9-indicator macroeconomic consensus, augmented with a Python GBDT model. Role + tier access, single-tab enforcement, multi-format report export.",
    tech: ["React 19", "Vite 6", "Express 5", "Python Flask", "MySQL", "Docker", "Nginx"],
    image: "/projects/edge.gif",
    liveLabel: "VPS paused after thesis evaluation",
    repo: "https://github.com/neuralxjam/Edge",
    featured: true,
  },
  {
    slug: "staysure",
    title: "StaySure — Hotel Booking Cancellation Predictor",
    badge: "ML",
    group: "Machine Learning",
    desc: "Random Forest classifier hits F1=0.85, AUC=0.958 on 119k real bookings. Full ML lifecycle: EDA → feature engineering → model comparison → SHAP explainability → Gradio demo on Hugging Face Spaces.",
    tech: ["Python", "scikit-learn", "XGBoost", "SHAP", "Gradio", "pandas"],
    image: "/projects/staysure.gif",
    live: "https://huggingface.co/spaces/neuralxjam/staysure",
    liveLabel: "Live demo",
    repo: "https://github.com/neuralxjam/staysure",
    featured: true,
  },
  {
    slug: "cryptopulse",
    title: "CryptoPulse — Crypto Market ETL & Dashboard",
    badge: "Data Eng",
    group: "Data Engineering",
    desc: "Daily ETL pipeline: CoinGecko API → DuckDB → dbt models → Streamlit dashboard. Runs every 6 hours via GitHub Actions cron. dbt docs site published on GitHub Pages.",
    tech: ["Python", "DuckDB", "dbt", "Streamlit", "GitHub Actions", "Parquet"],
    image: "/projects/cryptopulse.gif",
    live: "https://cryptopulse.streamlit.app",
    liveLabel: "Live dashboard",
    repo: "https://github.com/neuralxjam/cryptopulse",
    extraLinks: [{ label: "dbt docs", url: "https://neuralxjam.github.io/cryptopulse/" }],
    featured: true,
  },
  {
    slug: "jobtrail",
    title: "JobTrail — Job Application Tracker",
    badge: "Software Eng",
    group: "Software Engineering",
    desc: "Track job applications end-to-end with magic-link auth, a Postgres backend, and an HTMX-driven UI. Deployed on Render with GitHub Actions CI.",
    tech: ["FastAPI", "PostgreSQL", "Supabase", "HTMX", "Tailwind", "GitHub Actions"],
    image: "/projects/jobtrail.gif",
    live: "https://jobtrail-0gza.onrender.com",
    liveLabel: "Live app",
    repo: "https://github.com/neuralxjam/jobtrail",
  },
  {
    slug: "minilink",
    title: "MiniLink — Containerized URL Shortener",
    badge: "DevOps",
    group: "Software Engineering",
    desc: "URL shortener with Redis caching and a Postgres store, fully containerized and deployed on Railway with a GitHub Actions pipeline.",
    tech: ["FastAPI", "PostgreSQL", "Redis", "Docker", "Railway", "GitHub Actions"],
    image: "/projects/minilink.gif",
    live: "https://minilink-production.up.railway.app",
    liveLabel: "Live app",
    repo: "https://github.com/neuralxjam/minilink",
  },
];

export type ClientProject = {
  slug: string;
  title: string;
  status: string;
  desc: string;
  tech: string[];
  live?: string;
  liveLabel?: string;
  repo?: string;
  image?: string;
};

export const CLIENT_WORK: ClientProject[] = [
  {
    slug: "pcci",
    title: "PCCI Membership Platform",
    status: "In Development",
    desc: "Membership management system for a Philippine chamber of commerce — role-based dues tracking, multi-channel payments, automated email notifications, and a Website CMS for non-technical staff.",
    tech: ["Laravel 12", "Next.js", "PostgreSQL", "Docker"],
    live: "https://pcci-frontend-staging.onrender.com",
    liveLabel: "Staging",
  },
  {
    slug: "jkloting",
    title: "J.Kloting — Apparel Marketing & Quote Site",
    status: "Live",
    desc: "Two-page marketing + quote-system site for a Bulacan-based custom apparel printer (DTF / sublimation / silk-screen). Portfolio filtering, pricing breakdown, AJAX forms with spam protection.",
    tech: ["Bootstrap 4", "jQuery", "Cloudflare Workers", "Web3Forms"],
    live: "https://jkloting.store/",
    liveLabel: "Live site",
    repo: "https://github.com/neuralxjam/jkloting_website",
  },
  {
    slug: "jklothing",
    title: "J.Kloting Dashboard — Operations & Finance",
    status: "Live",
    desc: "Internal ops tool: orders, production costs, cash-flow ledger, inventory, fund allocations, plus automated BIR tax-filing reminder emails via GitHub Actions cron.",
    tech: ["Next.js 16", "React 19", "Supabase", "Recharts", "GitHub Actions"],
    live: "https://jklothing-dashboard.vercel.app",
    liveLabel: "Live app",
  },
  {
    slug: "8conacademy",
    title: "8Con Academy Website",
    status: "Live · Internship",
    desc: "Company website and landing pages built during my internship — React front end with an Express + Nodemailer back end for contact and file handling.",
    tech: ["React 19", "Vite 6", "React Router 7", "Express 5", "Nodemailer", "Multer"],
    live: "https://8conacademy.com",
    liveLabel: "Live site",
    repo: "https://github.com/neuralxjam/8ConLandingPage-main",
  },
  {
    slug: "rsvp",
    title: "Roos & Lyka Wedding RSVP",
    status: "Live",
    desc: "Custom wedding save-the-date and RSVP site for a December 2025 wedding, with Open Graph meta tags for rich WhatsApp / Facebook sharing.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Netlify"],
    live: "https://excroosivelymeantforlyka.netlify.app/",
    liveLabel: "Live site",
  },
];

// ---------------------------------------------------------------------------
//  Why work with me  (inspo "Focused on Simplicity, Quality, Business Value")
// ---------------------------------------------------------------------------
export const WHY = [
  {
    icon: "⚡",
    title: "Ships, Not Slideware",
    desc: "Every major project is live and deployed — real auth, real databases, real CI/CD. I finish what I start and put it in production.",
  },
  {
    icon: "🧩",
    title: "Full-Stack + Data",
    desc: "Front end, back end, pipelines, and ML under one roof. Fewer hand-offs, a system that's coherent from data model to UI.",
  },
  {
    icon: "🎯",
    title: "Business-Focused",
    desc: "I build the tool the business actually runs on — clear structure, automation that removes busywork, and reports people trust.",
  },
];

export const HIGHLIGHTS = [
  { icon: "award", text: "Best Thesis 2026 — BSCS" },
  { icon: "trendingup", text: "Promoted intern → developer" },
  { icon: "coffee", text: "Java Programming — 3rd place" },
  { icon: "bot", text: "Robotics Champion '19" },
];

export const ATTRIBUTES = [
  { label: "Fast Learner",      icon: "zap",     tagline: "Picks up new stacks and tools in days, not weeks." },
  { label: "Problem Solver",    icon: "wrench",  tagline: "Breaks complex problems into clear, actionable steps." },
  { label: "Self-Directed",     icon: "compass", tagline: "Ships without hand-holding — owns the work end to end." },
  { label: "Collaborative",     icon: "users",   tagline: "Listens well, communicates clearly, lifts the team." },
  { label: "Detail-Oriented",   icon: "search",  tagline: "Catches edge cases before they become production bugs." },
  { label: "Team Leader",       icon: "shield",  tagline: "Promoted from intern to dev lead — leads by doing." },
];

// ---------------------------------------------------------------------------
//  Process  (inspo "How I Work" — 3 steps)
// ---------------------------------------------------------------------------
export const PROCESS = [
  {
    step: "01",
    title: "Discover Your Needs",
    desc: "We start by understanding your goals, users, and constraints — what the software has to do and what success looks like.",
  },
  {
    step: "02",
    title: "Plan & Design",
    desc: "I map the data model, architecture, and flow, then agree on scope and milestones before a line of code ships.",
  },
  {
    step: "03",
    title: "Build & Launch",
    desc: "I develop, test, and deploy with CI/CD — then hand over a documented, production-ready system that's live and running.",
  },
];

// ---------------------------------------------------------------------------
//  Certifications  (16 DataCamp PDFs in /public/certifications)
// ---------------------------------------------------------------------------
export type Cert = {
  title: string;
  date: string;
  file: string; // pdf
  thumb: string; // jpg
};

export const CERTS: Cert[] = [
  { title: "Introduction to Python", date: "Nov 2024", file: "intro-python", },
  { title: "Intermediate Python", date: "Dec 2024", file: "intermediate-python" },
  { title: "Data Manipulation with pandas", date: "Dec 2024", file: "data-manipulation-with-pandas" },
  { title: "Introduction to SQL", date: "Nov 2025", file: "intro-sql" },
  { title: "Intermediate SQL", date: "Nov 2025", file: "intermediate-sql" },
  { title: "Understanding Machine Learning", date: "Feb 2026", file: "understanding-ml" },
  { title: "Generative AI Concepts", date: "Feb 2026", file: "generative-ai-concepts" },
  { title: "Large Language Models (LLM) Concepts", date: "Feb 2026", file: "llm-concepts" },
  { title: "Introduction to AI Agents", date: "Feb 2026", file: "introduction-to-ai-agents" },
  { title: "Introduction to AI for Work", date: "Feb 2026", file: "introduction-to-ai-for-work" },
  { title: "AI Ethics", date: "Feb 2026", file: "ai-ethics" },
  { title: "Understanding ChatGPT", date: "Feb 2026", file: "understanding-chatgpt" },
  { title: "Introduction to Git", date: "Feb 2026", file: "introduction-to-git" },
  { title: "Intermediate Git", date: "Mar 2026", file: "intermediate-git" },
  { title: "Introduction to GitHub Concepts", date: "Mar 2026", file: "introduction-to-github-concepts" },
  { title: "Intermediate GitHub Concepts", date: "Mar 2026", file: "intermediate-github-concepts" },
].map((c) => ({
  ...c,
  file: `/certifications/${c.file}.pdf`,
  thumb: `/certifications/thumbs/${c.file}.jpg`,
}));

// ---------------------------------------------------------------------------
//  Resume / CV
// ---------------------------------------------------------------------------
export const RESUME_PDF = "/JhamesAndrewMacabata_Resume.pdf";

export const EXPERIENCE = [
  {
    icon: "briefcase",
    role: "Software/Web Developer Team Lead",
    org: "8Con Academy",
    period: "Jun 2025 — Jun 2026",
    points: [
      "Promoted from intern to developer after shipping the company website and landing pages.",
      "Built React front ends with an Express + Nodemailer back end for contact and file handling.",
      "Work across the full lifecycle — system design, development, and production deployment.",
    ],
  },
  {
    icon: "sprout",
    role: "Software/Web Developer Intern",
    org: "8Con Academy",
    period: "2024 — Jun 2025",
    points: [
      "Built and shipped the 8Con Academy website during the internship.",
      "Learned production workflows — Git, deployment, and working from real requirements.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "BS Computer Science",
    org: "Pambayang Dalubhasaan ng Marilao",
    period: "Graduated 2026",
    points: [
      "Best Thesis 2026 — Edge, a full-stack + ML forex market scanner.",
      "Transferred from Electrical Engineering, bringing a cross-disciplinary perspective.",
    ],
  },
];

// ---------------------------------------------------------------------------
//  Homepage "Education" section cards (inspo2 LEARNING PATH)
// ---------------------------------------------------------------------------
export const EDUCATION_CARDS = [
  {
    icon: "graduation",
    title: "BS Computer Science",
    org: "Pambayang Dalubhasaan ng Marilao",
    date: "2022 — 2026",
    desc: "Specialized in software engineering and machine learning. Awarded Best Thesis 2026 for Edge, a full-stack + ML forex market scanner.",
    tag: "Best Thesis 2026",
  },
  {
    icon: "book",
    title: "Self-Directed Learning",
    org: "DataCamp · 16 Certifications",
    date: "2024 — Present",
    desc: "Continuous upskilling alongside shipping real projects — Python, SQL, Git & GitHub, Machine Learning, and AI.",
    tag: "Always Learning",
  },
  {
    icon: "zap",
    title: "BS in Electrical Engineering (Foundation)",
    org: "Polytechnic University of the Philippines",
    date: "2020 — 2022",
    desc: "Started in Electrical Engineering before transferring into Computer Science — a cross-disciplinary base I bring into systems thinking and problem solving.",
    tag: "Cross-Disciplinary",
  },
];

// Scholarships — shown as a dedicated card under the Education cards.
export const SCHOLARSHIPS = [
  "CHED-TES Scholar",
  "Megaworld Foundation Scholar",
  "Iskolar ng Bayan ng Marilao",
  "DEP x DataCamp Scholar",
];

// ---------------------------------------------------------------------------
//  Technical Skills (inspo2 progress bars). Levels are editable — tweak freely.
// ---------------------------------------------------------------------------
export const SKILLS = [
  { icon: "python", name: "Python", level: 85 },
  { icon: "javascript", name: "JavaScript / TypeScript", level: 72 },
  { icon: "postgresql", name: "SQL — PostgreSQL / MySQL", level: 78 },
  { icon: "react", name: "React & Next.js", level: 75 },
  { icon: "fastapi", name: "FastAPI / Node + Express", level: 76 },
  { icon: "docker", name: "Docker & CI/CD", level: 68 },
];

// ---------------------------------------------------------------------------
//  Featured certifications shown on the homepage (3). Full list lives in CERTS.
// ---------------------------------------------------------------------------
export const FEATURED_CERTS = [
  {
    category: "Machine Learning",
    date: "Feb 2026",
    title: "Understanding Machine Learning",
    desc: "Core ML concepts — supervised & unsupervised learning, model evaluation, and the end-to-end ML workflow.",
    file: "/certifications/understanding-ml.pdf",
  },
  {
    category: "Data",
    date: "Nov 2025",
    title: "Intermediate SQL",
    desc: "Filtering, aggregating, and joining relational data to answer real analytical questions.",
    file: "/certifications/intermediate-sql.pdf",
  },
  {
    category: "AI",
    date: "Feb 2026",
    title: "Generative AI Concepts",
    desc: "Foundations of generative AI and LLMs — how modern AI systems work and where to apply them.",
    file: "/certifications/generative-ai-concepts.pdf",
  },
];

// ---------------------------------------------------------------------------
//  Navigation + social
// ---------------------------------------------------------------------------
export const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Education", href: "/#education" },
  { label: "Certificates", href: "/#certifications" },
  { label: "About Me", href: "/#about" },
  { label: "Projects", href: "/#projects" },
];

// channels shown beside the contact form ("Let's Connect")
export const CONTACT_CHANNELS = [
  { icon: "email", label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "in/jhamesandrewmacabata",
    href: "https://www.linkedin.com/in/jhamesandrewmacabata/",
  },
  { icon: "github", label: "GitHub", value: "github.com/neuralxjam", href: "https://github.com/neuralxjam" },
  { icon: "facebook", label: "Facebook", value: "facebook.com/itsjamdoes", href: "https://www.facebook.com/itsjamdoes" },
  { icon: "location", label: "Location", value: "Marilao, Bulacan, Philippines", href: "" },
];

export const PAGE_LINKS = [
  { label: "All Projects", href: "/projects/" },
  { label: "Certifications", href: "/certifications/" },
  { label: "Resume", href: "/cv/" },
];

export const SOCIALS = [
  { label: "GitHub", url: "https://github.com/neuralxjam" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/jhamesandrewmacabata/" },
  { label: "Instagram", url: "https://www.instagram.com/jamdoes_/" },
  { label: "Facebook", url: "https://www.facebook.com/itsjamdoes" },
];

// mailto helper
export function mailto(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const qs = params.toString();
  return `mailto:${EMAIL}${qs ? `?${qs}` : ""}`;
}
