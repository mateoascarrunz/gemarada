import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { services, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Dos formas de ordenar tu negocio y mejorar tu rentabilidad."
          description="Elige el apoyo que necesitas hoy. Puedes combinar ambos servicios para tener control operativo y claridad financiera al mismo tiempo."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 120}>
              <article className="flex h-full flex-col rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-6 shadow-[var(--shadow-card)] sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-gold-tint)] text-[var(--color-gold-strong)]">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-strong)]">
                    {service.eyebrow}
                  </p>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-[var(--color-heading)] sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{service.description}</p>

                <ul className="mt-6 space-y-2.5">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text)]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold-strong)]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex items-end gap-1 border-t border-[var(--color-line)] pt-6">
                  <span className="font-display text-4xl font-semibold text-[var(--color-heading)]">
                    {service.price}
                  </span>
                  <span className="pb-1.5 text-sm text-[var(--color-muted)]">{service.pricePeriod}</span>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={whatsappLink(service.ctaMessage)} className="flex-1">
                    Quiero este servicio
                  </ButtonLink>
                  <Link
                    href={service.anchor}
                    className="inline-flex min-h-[3rem] flex-1 items-center justify-center gap-2 rounded-full border border-[var(--color-espresso)]/25 px-6 py-3 text-sm font-semibold text-[var(--color-heading)] hover:border-[var(--color-espresso)]/45 hover:bg-[var(--color-sand)]"
                  >
                    Ver detalle
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
