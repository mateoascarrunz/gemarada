import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { contact, waMessages, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { ContactForm } from "./contact-form";

const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(
  "Consulta de servicios"
)}&body=${encodeURIComponent("Hola Krisna, te cuento sobre mi negocio:\n\n- Tipo de negocio:\n- Lo que necesito:\n")}`;

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 pb-20 pt-20 sm:pb-24 sm:pt-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-[var(--color-on-dark-line)] bg-[var(--color-espresso)] text-[var(--color-on-dark)] shadow-[var(--shadow-soft)]">
          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
            <div>
              <SectionHeading
                tone="dark"
                eyebrow="Hablemos"
                title="Da el primer paso hacia una operación más ordenada y rentable."
                description="Escríbeme por WhatsApp o correo y conversemos sobre tu negocio. La primera conversación es sin compromiso."
              />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <ButtonLink href={whatsappLink(waMessages.diagnosis)} variant="gold">
                  Escríbeme por WhatsApp
                </ButtonLink>
                <ButtonLink href={mailtoLink} variant="outline-light">
                  Enviar correo
                </ButtonLink>
              </div>

              <div className="mt-8 space-y-4">
                <a
                  href={whatsappLink(waMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[var(--color-on-dark-muted)] hover:text-[var(--color-on-dark)]"
                >
                  <MessageCircle className="h-4 w-4 text-[var(--color-gold)]" />
                  WhatsApp: {contact.whatsappDisplay}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-sm text-[var(--color-on-dark-muted)] hover:text-[var(--color-on-dark)]"
                >
                  <Mail className="h-4 w-4 text-[var(--color-gold)]" />
                  Correo: {contact.email}
                </a>
                <p className="flex items-center gap-3 text-sm text-[var(--color-on-dark-muted)]">
                  <MapPin className="h-4 w-4 text-[var(--color-gold)]" />
                  {contact.location}
                </p>
                <p className="flex items-center gap-3 text-sm text-[var(--color-on-dark-muted)]">
                  <Clock className="h-4 w-4 text-[var(--color-gold)]" />
                  Te respondo personalmente, normalmente el mismo día hábil.
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
