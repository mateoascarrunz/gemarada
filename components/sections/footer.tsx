import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { brand, contact, navigation, waMessages, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-sand)] py-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-gold-tint)] font-display text-lg font-semibold text-[var(--color-gold-strong)]">
                {brand.monogram}
              </span>
              <p className="font-display text-2xl font-semibold text-[var(--color-heading)]">{brand.name}</p>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--color-muted)]">{brand.role}.</p>
            <p className="mt-3 text-sm text-[var(--color-muted)]">{contact.location}</p>
          </div>

          <nav aria-label="Secciones" className="flex flex-col gap-2 text-sm">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-strong)]">
              Secciones
            </p>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[var(--color-muted)] hover:text-[var(--color-gold-strong)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-strong)]">
              Contacto
            </p>
            <Link
              href={whatsappLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-gold-strong)]"
            >
              <MessageCircle className="h-4 w-4 text-[var(--color-gold-strong)]" />
              {contact.whatsappDisplay}
            </Link>
            <Link
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-gold-strong)]"
            >
              <Mail className="h-4 w-4 text-[var(--color-gold-strong)]" />
              {contact.email}
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-muted)]">
          © {brand.fullName}. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
