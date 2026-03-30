import { serviceGroups } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Dos áreas de apoyo para ordenar tu operación y mejorar tu rentabilidad."
          description="Cada servicio está presentado con enfoque práctico, lenguaje claro y una estructura fácil de editar a futuro."
        />

        <div className="mt-12 space-y-8">
          {serviceGroups.map((group, groupIndex) => (
            <Reveal
              key={group.id}
              delay={groupIndex * 120}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:p-8"
            >
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-accent-cool)]">
                  {group.eyebrow}
                </p>
                <h3 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">{group.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{group.description}</p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {group.services.map((service) => (
                  <article
                    key={service.title}
                    className="group rounded-[1.6rem] border border-white/10 bg-[rgba(11,20,34,0.68)] p-5 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-[rgba(14,24,40,0.82)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-[var(--color-accent-strong)]">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-5 text-lg font-semibold text-white">{service.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{service.description}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
