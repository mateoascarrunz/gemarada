import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

export function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Dos formas de ordenar tu negocio y mejorar tu rentabilidad."
          description="Elige el apoyo que necesitas hoy. Puedes combinar ambos servicios para tener control operativo y claridad financiera al mismo tiempo."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 120}>
              <article className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-[var(--color-accent-strong)]">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-cool)]">
                    {service.eyebrow}
                  </p>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold text-white sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{service.description}</p>

                <ul className="mt-6 space-y-2">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-[var(--color-muted)]">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-end gap-1">
                  <span className="font-display text-4xl font-semibold text-white">{service.price}</span>
                  <span className="pb-1.5 text-sm text-[var(--color-muted)]">{service.pricePeriod}</span>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={whatsappLink(service.ctaMessage)} className="flex-1">
                    Quiero este servicio
                  </ButtonLink>
                  <Link
                    href={service.anchor}
                    className="inline-flex min-h-[3rem] flex-1 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/[0.1]"
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
