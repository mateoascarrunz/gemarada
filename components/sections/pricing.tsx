import { Check } from "lucide-react";
import { pricingNote, pricingPlans, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

export function Pricing() {
  return (
    <section id="inversion" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Inversión"
          title="Precios claros, sin letra pequeña."
          description="Elige el servicio que necesitas hoy. Definimos juntos el alcance en una conversación inicial, sin compromiso."
          align="center"
        />

        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 120}>
              <article
                className={`flex h-full flex-col rounded-[2rem] border p-6 shadow-[var(--shadow-card)] sm:p-8 ${
                  plan.featured
                    ? "border-[var(--color-gold)]/55 bg-[var(--color-ivory)] ring-1 ring-[var(--color-gold)]/25"
                    : "border-[var(--color-line)] bg-[var(--color-ivory)]"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-gold-tint)] text-[var(--color-gold-strong)]">
                    <plan.icon className="h-5 w-5" />
                  </div>
                  {plan.featured ? (
                    <span className="rounded-full bg-[var(--color-gold)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#241a12]">
                      Más solicitado
                    </span>
                  ) : null}
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-strong)]">
                  {plan.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[var(--color-heading)]">{plan.title}</h3>

                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-5xl font-semibold text-[var(--color-heading)]">
                    {plan.price}
                  </span>
                  <span className="pb-2 text-base text-[var(--color-muted)]">{plan.period}</span>
                </div>

                <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">{plan.description}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[var(--color-text)]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold-strong)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href={whatsappLink(plan.ctaMessage)}
                  variant={plan.featured ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  Solicitar este servicio
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-[var(--color-muted)]">
          {pricingNote}
        </p>
      </Container>
    </section>
  );
}
