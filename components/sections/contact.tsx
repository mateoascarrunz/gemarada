import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

export function Contact() {
  return (
    <section id="contacto" className="pb-20 pt-20 sm:pb-24 sm:pt-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(242,191,159,0.18),rgba(255,255,255,0.08))] shadow-[var(--shadow-soft)] backdrop-blur-xl">
          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
            <div>
              <SectionHeading
                eyebrow="Contacto"
                title="Escribe hoy y da el primer paso hacia una operación más ordenada."
                description="Puedes contactar por WhatsApp, correo o dejar tus datos en el formulario. La experiencia debe sentirse simple, cercana y profesional desde el primer clic."
              />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <ButtonLink href="https://wa.me/34600000000?text=Hola%20Gema%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n">
                  Contactar por WhatsApp
                </ButtonLink>
                <ButtonLink href="mailto:hola@gemarada.com" variant="secondary">
                  Enviar correo
                </ButtonLink>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                  <MessageCircle className="h-4 w-4 text-[var(--color-accent)]" />
                  WhatsApp editable: +34 600 000 000
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                  <Mail className="h-4 w-4 text-[var(--color-accent)]" />
                  Correo editable: hola@gemarada.com
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                  <MapPin className="h-4 w-4 text-[var(--color-accent)]" />
                  Servicio remoto para negocios que buscan apoyo cercano
                </div>
              </div>

              <p className="mt-8 max-w-lg text-sm leading-7 text-[var(--color-muted)]">
                Punto de reemplazo recomendado: añade aquí una frase de tranquilidad o tiempo de respuesta estimado, por ejemplo “Te responderé personalmente en menos de 24 horas hábiles”.
              </p>
            </div>

            <form className="rounded-[1.8rem] border border-white/10 bg-[rgba(9,17,31,0.72)] p-5 backdrop-blur-md sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-white">Nombre</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[var(--color-accent)]"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-white">Correo</span>
                  <input
                    type="email"
                    name="email"
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
                  placeholder="Ej. cafetería, emprendimiento, restaurante"
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

              <button
                type="submit"
                className="mt-6 inline-flex min-h-[3rem] w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(248,208,184,1),rgba(242,191,159,0.86))] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_44px_rgba(242,191,159,0.22)] hover:-translate-y-0.5 hover:shadow-[0_26px_54px_rgba(242,191,159,0.3)]"
              >
                Enviar solicitud
              </button>

              <p className="mt-4 text-xs leading-6 text-[var(--color-muted)]">
                Formulario visual listo para conectar con tu herramienta preferida. Puedes integrarlo luego con Formspree, Resend, EmailJS o una API propia.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
