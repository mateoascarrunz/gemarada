import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "gold" | "outline-light";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  "aria-label"?: string;
};

const base =
  "inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-[0.01em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]";

const variants: Record<ButtonVariant, string> = {
  // On light (cream) sections
  primary:
    "bg-[var(--color-espresso)] text-[var(--color-cream)] shadow-[0_14px_30px_rgba(42,33,26,0.22)] hover:-translate-y-0.5 hover:bg-[var(--color-espresso-deep)] hover:shadow-[0_20px_40px_rgba(42,33,26,0.28)]",
  secondary:
    "border border-[var(--color-espresso)]/25 bg-transparent text-[var(--color-heading)] hover:-translate-y-0.5 hover:border-[var(--color-espresso)]/45 hover:bg-[var(--color-sand)]",
  // On dark (espresso) sections
  gold:
    "bg-[linear-gradient(135deg,#c79a4e,#a9772e)] text-[#241a12] shadow-[0_16px_34px_rgba(0,0,0,0.28)] hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(0,0,0,0.34)]",
  "outline-light":
    "border border-[var(--color-on-dark-line)] bg-white/[0.06] text-[var(--color-on-dark)] backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/[0.12]"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(base, variants[variant], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}
