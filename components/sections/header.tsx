"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { brand, navigation, waMessages, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(246,239,227,0.82)] backdrop-blur-xl">
      <Container className="flex min-h-[4.5rem] items-center justify-between gap-4">
        <Link
          href="#inicio"
          className="flex items-center gap-3"
          aria-label={`Inicio — ${brand.name}`}
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-gold-tint)] font-display text-xl font-semibold text-[var(--color-gold-strong)]">
            {brand.monogram}
          </span>
          <span>
            <span className="block font-display text-xl font-semibold leading-tight text-[var(--color-heading)]">
              {brand.name}
            </span>
            <span className="block text-[0.7rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Consultoría gastronómica y contable
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-text)] hover:text-[var(--color-gold-strong)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={whatsappLink(waMessages.general)} className="px-5 py-2.5 text-sm">
            Escríbeme por WhatsApp
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-ivory)] text-[var(--color-heading)] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div id="mobile-menu" className="border-t border-[var(--color-line)] bg-[var(--color-cream)] lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-[var(--color-text)] hover:bg-[var(--color-sand)]"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              href={whatsappLink(waMessages.general)}
              className="mt-3 w-full"
            >
              Escríbeme por WhatsApp
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
