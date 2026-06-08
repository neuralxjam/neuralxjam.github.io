"use client";

import { useState } from "react";
import { EMAIL, mailto, CONTACT_CHANNELS } from "@/lib/content";

function ChannelIcon({ name }: { name: string }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "currentColor" };
  switch (name) {
    case "email":
      return (
        <svg {...common} aria-hidden>
          <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13A2.5 2.5 0 0 1 19.5 21h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 5.2L19.8 6H4.2ZM20 7.8l-7.45 4.97a1 1 0 0 1-1.1 0L4 7.8v10.7c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V7.8Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} aria-hidden>
          <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.25 8.25h4.5V24h-4.5V8.25Zm7.5 0h4.3v2.15h.06c.6-1.13 2.07-2.32 4.26-2.32 4.56 0 5.4 3 5.4 6.9V24h-4.5v-6.95c0-1.66-.03-3.8-2.3-3.8-2.32 0-2.67 1.8-2.67 3.68V24h-4.5V8.25Z" />
        </svg>
      );
    case "github":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.57.1.78-.25.78-.55v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.3-5.25-1.28-5.25-5.7 0-1.26.45-2.3 1.2-3.1-.12-.3-.52-1.48.1-3.1 0 0 .98-.3 3.2 1.2a11 11 0 0 1 5.82 0c2.2-1.5 3.18-1.2 3.18-1.2.63 1.62.23 2.8.12 3.1.75.8 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.7.42.36.78 1.06.78 2.14v3.18c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common} aria-hidden>
          <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.5 0-1.96.93-1.96 1.89v2.25h3.34l-.53 3.49h-2.81V24C19.61 23.1 24 18.1 24 12.07Z" />
        </svg>
      );
    case "location":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Project Inquiry");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `${message}\n\n— Reply to: ${email}`;
    window.location.href = mailto(subject, body);
  }

  const inputCls =
    "w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-2)] px-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] outline-none transition-colors focus:border-[var(--color-accent)]";

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-12 md:py-20">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
        Let&apos;s <span className="text-[var(--color-accent)] underline decoration-2 underline-offset-8">Connect</span>.
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-[var(--color-muted)]">
        I&apos;m always interested in hearing about new opportunities and projects. Reach out through
        any of these channels.
      </p>

      <div className="mt-12 grid items-start gap-8 md:grid-cols-2">
        {/* channels */}
        <div className="space-y-4">
          {CONTACT_CHANNELS.map((c) => {
            const inner = (
              <div className="card flex items-center gap-4 p-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent-2)]">
                  <ChannelIcon name={c.icon} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-[var(--color-muted)]">{c.label}</p>
                  <p className="truncate text-sm font-medium text-[var(--color-ink)]">{c.value}</p>
                </div>
              </div>
            );
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block transition-transform hover:-translate-y-0.5"
              >
                {inner}
              </a>
            ) : (
              <div key={c.label}>{inner}</div>
            );
          })}
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="card p-6">
          <label className="kicker mb-2 block">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputCls}
          />

          <label className="kicker mb-2 mt-5 block">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={inputCls}
          />

          <label className="kicker mb-2 mt-5 block">Message</label>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project…"
            className={`${inputCls} resize-y`}
          />

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-2)]"
          >
            Send Message
          </button>
          <p className="mt-3 text-center text-xs text-[var(--color-muted)]">
            Opens your mail app, pre-filled and ready to send.
          </p>
        </form>
      </div>
    </section>
  );
}
