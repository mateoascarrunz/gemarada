import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { contact, ctaLabel, waMessages, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { ContactForm } from "./contact-form";

const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(
  "Consulta de servicios"
)}&body=${encodeURIComponent("Hola Krisna, te cuento sobre mi negocio:\n\n- Tipo de negocio:\n- Lo que necesito:\n")}`;

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden bg-[var(--color-espresso)] py-20 text-[var(--color-on-dark)] sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(169,119,46,0.14),transparent_45%)]"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
              <span className="h-px w-6 bg-current opacity-60" />
              Hablemos
            </p>
            <h2 className="font-display font-semibold leading-[0.98] text-[var(--color-on-dark)] [font-size:clamp(2.5rem,6vw,4.25rem)]">
              Da el primer paso hacia una operación más ordenada y rentable.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-[var(--color-on-dark-muted)] sm:text-lg">
              Escríbeme por WhatsApp o correo y conversemos sobre tu negocio. La primera conversación
              es sin compromiso.
            </p>

            <dl className="mt-10 divide-y divide-[var(--color-on-dark-line)] border-y border-[var(--color-on-dark-line)]">
              <a
                href={whatsappLink(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-4 text-sm text-[var(--color-on-dark-muted)] hover:text-[var(--color-on-dark)]"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-[var(--color-gold)]" />
                WhatsApp: {contact.whatsappDisplay}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 py-4 text-sm text-[var(--color-on-dark-muted)] hover:text-[var(--color-on-dark)]"
              >
                <Mail className="h-4 w-4 shrink-0 text-[var(--color-gold)]" />
                Correo: {contact.email}
              </a>
              <p className="flex items-center gap-3 py-4 text-sm text-[var(--color-on-dark-muted)]">
                <MapPin className="h-4 w-4 shrink-0 text-[var(--color-gold)]" />
                {contact.location}
              </p>
              <p className="flex items-center gap-3 py-4 text-sm text-[var(--color-on-dark-muted)]">
                <Clock className="h-4 w-4 shrink-0 text-[var(--color-gold)]" />
                Te respondo personalmente, normalmente el mismo día hábil.
              </p>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappLink(waMessages.diagnosis)} variant="gold">
                {ctaLabel}
              </ButtonLink>
              <ButtonLink href={mailtoLink} variant="outline-light">
                Enviar correo
              </ButtonLink>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
