import { ctaLabel, steps, waMessages, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

export function HowItWorks() {
  return (
    <section
      id="metodo"
      className="scroll-mt-24 bg-[var(--color-espresso)] py-20 text-[var(--color-on-dark)] sm:py-24"
    >
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="Cómo trabajamos"
          title="Un método simple para ordenar tu negocio sin sumar carga a tu agenda."
          description="Todo es remoto, cercano y fácil de sostener. Empezamos por entender tu negocio y avanzamos a tu ritmo."
        />

        {/* Mobile / tablet: vertical left rail with gold nodes */}
        <ol className="mt-12 space-y-8 border-l border-[var(--color-on-dark-line)] pl-8 lg:hidden">
          {steps.map((step) => (
            <li key={step.number} className="relative">
              <span
                aria-hidden
                className="absolute -left-[2.4rem] top-1.5 h-3 w-3 rounded-full bg-[var(--color-gold)] ring-4 ring-[var(--color-espresso)]"
              />
              <span className="font-display text-4xl leading-none text-[var(--color-gold)]">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-[var(--color-on-dark)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-on-dark-muted)]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        {/* Desktop: connected staircase with vertical offsets */}
        <div className="relative mt-16 hidden lg:block">
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[1.1rem] h-px bg-[var(--color-on-dark-line)]"
          />
          <ol className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 90}
                className={
                  index === 1
                    ? "mt-10"
                    : index === 2
                      ? "mt-20"
                      : index === 3
                        ? "mt-32"
                        : ""
                }
              >
                <li className="relative pt-10">
                  <span
                    aria-hidden
                    className="absolute left-0 top-[0.55rem] h-3 w-3 rounded-full bg-[var(--color-gold)] ring-4 ring-[var(--color-espresso)]"
                  />
                  <span className="font-display text-5xl leading-none text-[var(--color-gold)]">
                    {step.number}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-[var(--color-on-dark)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-on-dark-muted)]">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-base leading-7 text-[var(--color-on-dark-muted)]">
            ¿Listo para empezar? La primera conversación es sin compromiso.
          </p>
          <ButtonLink href={whatsappLink(waMessages.diagnosis)} variant="gold">
            {ctaLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
