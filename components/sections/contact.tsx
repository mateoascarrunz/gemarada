import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { contact, waMessages, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(
  "Consulta de servicios"
)}&body=${encodeURIComponent(
  "Hola Krisna, te cuento sobre mi negocio:\n\n- Tipo de negocio:\n- Lo que necesito:\n"
)}`;

export function Contact() {
  return (
    <section id="contacto" className="pb-20 pt-20 sm:pb-24 sm:pt-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(242,191,159,0.18),rgba(255,255,255,0.08))] shadow-[var(--shadow-soft)] backdrop-blur-xl">
          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
            <div>
              <SectionHeading
                eyebrow="Hablemos"
                title="Da el primer paso hacia una operación más ordenada y rentable."
                description="Escríbeme por WhatsApp o correo y conversemos sobre tu negocio. La primera conversación es sin compromiso."
              />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <ButtonLink href={whatsappLink(waMessages.diagnosis)}>
                  Escríbeme por WhatsApp
                </ButtonLink>
                <ButtonLink href={mailtoLink} variant="secondary">
                  Enviar correo
                </ButtonLink>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                  <MessageCircle className="h-4 w-4 text-[var(--color-accent)]" />
                  WhatsApp: {contact.whatsappDisplay}
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                  <Mail className="h-4 w-4 text-[var(--color-accent)]" />
                  Correo: {contact.email}
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                  <MapPin className="h-4 w-4 text-[var(--color-accent)]" />
                  {contact.location}
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                  <Clock className="h-4 w-4 text-[var(--color-accent)]" />
                  Te respondo personalmente, normalmente el mismo día hábil.
                </div>
              </div>
            </div>

            <form className="rounded-[1.8rem] border border-white/10 bg-[rgba(9,17,31,0.72)] p-5 backdrop-blur-md sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-white">Nombre</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Tu nombre"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[var(--color-accent)]"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-white">Correo</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="tu@correo.com"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[var(--color-accent)]"
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="mb-2 block text-sm font-medium text-white">Tipo de negocio</span>
                <input
                  type="text"
                  name="business"
                  placeholder="Ej. cafetería, restaurante, emprendimiento"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[var(--color-accent)]"
                />
              </label>

              <label className="mt-4 block">
                <span className="mb-2 block text-sm font-medium text-white">Cuéntame qué necesitas</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Describe brevemente tu negocio y el tipo de apoyo que estás buscando."
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[var(--color-accent)]"
                />
              </label>

              <ButtonLink href={whatsappLink(waMessages.general)} className="mt-6 w-full">
                Enviar por WhatsApp
              </ButtonLink>

              <p className="mt-4 text-xs leading-6 text-[var(--color-muted)]">
                El botón abre WhatsApp con un mensaje listo. Si prefieres un envío automático del
                formulario, se puede conectar luego con Formspree, Resend o EmailJS.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
