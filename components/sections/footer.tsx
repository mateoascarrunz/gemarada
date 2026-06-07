import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { brand, contact, navigation, waMessages, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold text-white">{brand.name}</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--color-muted)]">{brand.role}.</p>
            <p className="mt-3 text-sm text-[var(--color-muted)]">{contact.location}</p>
          </div>

          <nav aria-label="Secciones" className="flex flex-col gap-2 text-sm">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-cool)]">
              Secciones
            </p>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-[var(--color-muted)] hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-cool)]">
              Contacto
            </p>
            <Link
              href={whatsappLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--color-muted)] hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-[var(--color-accent)]" />
              {contact.whatsappDisplay}
            </Link>
            <Link
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 text-[var(--color-muted)] hover:text-white"
            >
              <Mail className="h-4 w-4 text-[var(--color-accent)]" />
              {contact.email}
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/[0.08] pt-6 text-xs text-[var(--color-muted)]">
          © {brand.fullName}. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
