import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-[3rem] items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.02em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
        variant === "primary" &&
          "bg-[linear-gradient(135deg,rgba(248,208,184,1),rgba(242,191,159,0.86))] text-slate-950 shadow-[0_18px_45px_rgba(242,191,159,0.22)] hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(242,191,159,0.3)]",
        variant === "secondary" &&
          "border border-white/12 bg-white/[0.08] text-white backdrop-blur-md hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.12]",
        className
      )}
    >
      {children}
    </Link>
  );
}
