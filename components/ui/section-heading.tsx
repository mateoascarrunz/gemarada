import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-accent-cool)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-none font-semibold text-white sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">{description}</p> : null}
    </div>
  );
}
