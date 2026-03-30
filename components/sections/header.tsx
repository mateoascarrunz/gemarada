import Link from "next/link";
import { navigation } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[rgba(9,17,31,0.7)] backdrop-blur-xl">
      <Container className="flex min-h-[4.5rem] items-center justify-between gap-4">
        <Link href="#inicio" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.08] font-display text-xl font-semibold text-[var(--color-accent-strong)] shadow-[var(--shadow-soft)]">
            G
          </span>
          <div>
            <p className="font-display text-xl font-semibold text-white">Gema Rada</p>
            <p className="text-xs tracking-[0.18em] text-[var(--color-muted)] uppercase">Consultoría personalizada</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-muted)] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ButtonLink href="https://wa.me/34600000000?text=Hola%20Gema%2C%20quiero%20informaci%C3%B3n%20sobre%20tus%20servicios" className="px-5 py-2.5 text-sm">
          Contactar por WhatsApp
        </ButtonLink>
      </Container>
    </header>
  );
}
