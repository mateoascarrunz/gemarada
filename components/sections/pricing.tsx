import { Check } from "lucide-react";
import { ctaLabel, pricingNote, pricingPlans, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

export function Pricing() {
  return (
    <section id="inversion" className="scroll-mt-24 bg-[var(--color-ivory)] py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Inversión"
          title="Precios claros, sin letra pequeña."
          description="Elige el servicio que necesitas hoy. Definimos juntos el alcance en una conversación inicial, sin compromiso."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-ivory)] shadow-[var(--shadow-card)]">
          <div className="grid divide-y divide-[var(--color-line)] md:grid-cols-2 md:divide-x md:divide-y-0">
            {pricingPlans.map((plan) => (
              <article
                key={plan.id}
                className={`flex flex-col p-7 sm:p-9 ${
                  plan.featured ? "bg-[var(--color-gold-tint)]" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-[var(--color-gold-strong)]">
                    <plan.icon className="h-6 w-6 shrink-0" />
                    <p className="text-xs font-semibold uppercase tracking-[0.22em]">
                      {plan.eyebrow}
                    </p>
                  </div>
                  {plan.featured ? (
                    <span className="rounded-full bg-[var(--color-gold)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#241a12]">
                      Más solicitado
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold text-[var(--color-heading)]">
                  {plan.title}
                </h3>

                <div className="mt-5 flex items-end gap-1">
                  <span className="font-display text-5xl font-semibold text-[var(--color-heading)]">
                    {plan.price}
                  </span>
                  <span className="pb-2 text-base text-[var(--color-muted)]">{plan.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-[var(--color-gold-strong)]">
                  {plan.tagline}
                </p>

                <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">{plan.description}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-[var(--color-text)]"
                    >
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
                  {ctaLabel}
                </ButtonLink>
              </article>
            ))}
          </div>

          <div className="grid gap-2 border-t border-[var(--color-line)] bg-[var(--color-cream)] px-7 py-5 text-sm text-[var(--color-muted)] sm:grid-cols-2 sm:px-9">
            <p className="sm:text-left">{pricingPlans[0].tagline}</p>
            <p className="sm:text-right">{pricingPlans[1].tagline}</p>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-[var(--color-muted)]">
          {pricingNote}
        </p>
      </Container>
    </section>
  );
}
