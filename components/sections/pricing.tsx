import { pricingIncludes, pricingPlans } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

export function Pricing() {
  return (
    <section id="planes" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Planes"
          title="Planes claros, elegantes y listos para ajustar según el volumen de tu operación."
          description="La presentación deja espacio para editar precios, alcances y beneficios adicionales sin perder coherencia visual."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5 md:grid-cols-2">
            {pricingPlans.map((plan, index) => (
              <Reveal key={plan.title} delay={index * 120}>
                <article
                  className={`rounded-[2rem] border p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:p-7 ${
                    plan.featured
                      ? "border-[rgba(242,191,159,0.38)] bg-[linear-gradient(180deg,rgba(242,191,159,0.18),rgba(255,255,255,0.08))]"
                      : "border-white/10 bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-accent-cool)]">{plan.title}</p>
                      <h3 className="mt-4 text-2xl font-semibold text-white">{plan.volume}</h3>
                    </div>
                    {plan.featured ? (
                      <span className="rounded-full border border-white/10 bg-white/[0.12] px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">
                        Más solicitado
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-8 flex items-end gap-1">
                    <span className="font-display text-5xl font-semibold text-white">{plan.price}</span>
                    <span className="pb-2 text-base text-[var(--color-muted)]">{plan.period}</span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">{plan.description}</p>

                  <ButtonLink href="#contacto" variant={plan.featured ? "primary" : "secondary"} className="mt-8 w-full">
                    Solicitar este plan
                  </ButtonLink>
                </article>
              </Reveal>
            ))}
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-[rgba(11,20,34,0.76)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-accent-cool)]">Incluye en ambos planes</p>
            <h3 className="mt-4 font-display text-3xl font-semibold text-white">Acompañamiento cercano para que no te sientas sola en el proceso.</h3>
            <div className="mt-8 space-y-4">
              {pricingIncludes.map((item) => (
                <div key={item} className="rounded-2xl border border-white/[0.08] bg-white/[0.05] px-4 py-4 text-sm leading-7 text-[var(--color-muted)]">
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
