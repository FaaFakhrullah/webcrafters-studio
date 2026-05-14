type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  titleAs?: "h1" | "h2";
};

export function SectionHeader({ eyebrow, title, description, align = "left", tone = "dark", titleAs = "h2" }: SectionHeaderProps) {
  const Heading = titleAs;

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className={tone === "light" ? "mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-200" : "mb-2 text-sm font-semibold uppercase tracking-wide text-secondary"}>
          {eyebrow}
        </p>
      )}
      <Heading className={tone === "light" ? "font-display text-3xl font-bold text-white md:text-4xl" : "font-display text-3xl font-bold text-slate-900 md:text-4xl"}>
        {title}
      </Heading>
      {description && <p className={tone === "light" ? "mt-3 text-slate-300" : "mt-3 text-slate-600"}>{description}</p>}
    </div>
  );
}
