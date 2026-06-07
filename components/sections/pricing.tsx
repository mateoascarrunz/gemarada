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
                className={`flex h-full flex-col rounded-[2rem] border p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:p-8 ${
                  plan.featured
                    ? "border-[rgba(242,191,159,0.38)] bg-[linear-gradient(180deg,rgba(242,191,159,0.18),rgba(255,255,255,0.08))]"
                    : "border-white/10 bg-white/[0.06]"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-[var(--color-accent-strong)]">
                    <plan.icon className="h-5 w-5" />
                  </div>
                  {plan.featured ? (
                    <span className="rounded-full border border-white/10 bg-white/[0.12] px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">
                      Más solicitado
                    </span>
                  ) : null}
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-cool)]">
                  {plan.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{plan.title}</h3>

                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-5xl font-semibold text-white">{plan.price}</span>
                  <span className="pb-2 text-base text-[var(--color-muted)]">{plan.period}</span>
                </div>

                <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">{plan.description}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[var(--color-muted)]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent-strong)]" />
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

        <p className="mt-8 text-center text-sm leading-6 text-[var(--color-muted)]">{pricingNote}</p>
      </Container>
    </section>
  );
}
