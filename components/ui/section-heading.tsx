import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light"
}: SectionHeadingProps) {
  const onDark = tone === "dark";

  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em]",
            onDark ? "text-[var(--color-gold)]" : "text-[var(--color-gold-strong)]"
          )}
        >
          <span className="h-px w-6 bg-current opacity-60" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-4xl font-semibold leading-[1.04] sm:text-5xl",
          onDark ? "text-[var(--color-on-dark)]" : "text-[var(--color-heading)]"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-7 sm:text-lg",
            onDark ? "text-[var(--color-on-dark-muted)]" : "text-[var(--color-muted)]"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
