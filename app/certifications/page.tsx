import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CertGrid from "@/components/CertGrid";

export const metadata: Metadata = {
  title: "Certifications — Jhames Andrew Macabata",
  description: "16 DataCamp certifications across Python, SQL, Git/GitHub, Machine Learning, and AI.",
  alternates: { canonical: "/certifications/" },
};

export default function CertificationsPage() {
  return (
    <div className="px-5 pt-20 pb-12 md:pt-28 md:pb-20">
      <SectionHeading
        kicker="Credentials"
        title="Certifications"
        subtitle="16 DataCamp certifications across Python, SQL, Git & GitHub, Machine Learning, and AI. Click any card to view the certificate."
      />
      <CertGrid />
      <div className="mt-16 text-center text-sm">
        <Link href="/#home" className="text-[var(--color-muted)] hover:text-[var(--color-ink)]">← Back home</Link>
      </div>
    </div>
  );
}
