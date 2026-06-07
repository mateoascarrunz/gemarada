import Image from "next/image";
import { cn } from "@/lib/utils";

type SceneFrameProps = {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
};

export function SceneFrame({
  src,
  alt,
  className,
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 32rem, 90vw",
  priority = false
}: SceneFrameProps) {
  const isSvg = src.endsWith(".svg");

  return (
    <div className={cn("group relative", className)}>
      <div className="absolute -inset-4 -z-10 rounded-[2.4rem] bg-[radial-gradient(circle_at_30%_20%,rgba(169,119,46,0.16),transparent_60%)]" />
      <figure className="relative overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-2 shadow-[var(--shadow-soft)]">
        <div className={cn("relative overflow-hidden rounded-[1.4rem]", aspect)}>
          {isSvg ? (
            // SVG scene placeholder: plain img so next/image SVG optimization is not required.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full rounded-[1.4rem] object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]"
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              className="rounded-[1.4rem] object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]"
            />
          )}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[1.4rem] bg-[linear-gradient(180deg,transparent_58%,rgba(42,33,26,0.26))] mix-blend-multiply"
          />
        </div>
      </figure>
    </div>
  );
}
