import type { Metadata } from "next";
import Link from "next/link";
import ResumeContent from "@/components/ResumeContent";

export const metadata: Metadata = {
  title: "Resume — Jhames Andrew Macabata",
  description:
    "CS graduate with ~1 year of professional experience building and shipping full-stack web apps, data pipelines, and ML models.",
  alternates: { canonical: "/cv/" },
};

export default function CvPage() {
  return (
    <div className="px-5 pt-20 pb-12 md:pt-28 md:pb-20">
      <ResumeContent />
      <div className="mt-16 text-center text-sm">
        <Link href="/#home" className="text-[var(--color-muted)] hover:text-[var(--color-ink)]">
          ← Back home
        </Link>
      </div>
    </div>
  );
}
