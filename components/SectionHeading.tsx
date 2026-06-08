export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${alignment} max-w-2xl`}>
      <p className="kicker">{kicker}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">{subtitle}</p>
      )}
    </div>
  );
}
