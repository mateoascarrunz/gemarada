import { ctaLabel, methodImage, steps, waMessages, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SceneFrame } from "@/components/ui/scene-frame";
import { ButtonLink } from "@/components/ui/button-link";

export function HowItWorks() {
  return (
    <section
      id="metodo"
      className="scroll-mt-24 bg-[var(--color-espresso)] py-20 text-[var(--color-on-dark)] sm:py-24"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <SectionHeading
            tone="dark"
            eyebrow="Cómo trabajamos"
            title="Un método simple para ordenar tu negocio sin sumar carga a tu agenda."
            description="Todo es remoto, cercano y fácil de sostener. Empezamos por entender tu negocio y avanzamos a tu ritmo."
          />
          <Reveal delay={120}>
            <SceneFrame
              src={methodImage.src}
              alt={methodImage.alt}
              aspect="aspect-[5/4]"
              sizes="(min-width: 1024px) 30rem, 90vw"
            />
          </Reveal>
        </div>

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

        {/* Desktop: alternating horizontal timeline — nodes centered on ONE gold rail */}
        <div className="mt-20 hidden lg:block">
          <div className="relative">
            {/* Center rail, fading at both ends; nodes (middle grid row) sit exactly on it. */}
            <span
              aria-hidden
              className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(199,154,78,0.55)_14%,rgba(199,154,78,0.55)_86%,transparent)]"
            />
            <ol className="grid grid-cols-4">
              {steps.map((step, index) => {
                const above = index % 2 === 0;
                const block = (
                  <div className="mx-auto max-w-[15rem] text-center">
                    <span className="font-display text-5xl leading-none text-[var(--color-gold)]">
                      {step.number}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-[var(--color-on-dark)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-on-dark-muted)]">
                      {step.description}
                    </p>
                  </div>
                );
                const tick = (
                  <span aria-hidden className="mx-auto block h-6 w-px bg-[var(--color-gold)]/40" />
                );

                return (
                  <Reveal key={step.number} delay={index * 90} className="min-h-[19rem]">
                    <li className="grid h-full grid-rows-[1fr_auto_1fr]">
                      {/* top cell */}
                      <div className="flex flex-col justify-end pb-3">
                        {above ? (
                          <>
                            {block}
                            {tick}
                          </>
                        ) : null}
                      </div>
                      {/* node row (vertical centre = rail) */}
                      <div className="flex items-center justify-center">
                        <span
                          aria-hidden
                          className="h-3.5 w-3.5 rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-espresso)] ring-4 ring-[var(--color-espresso)]"
                        />
                      </div>
                      {/* bottom cell */}
                      <div className="flex flex-col justify-start pt-3">
                        {!above ? (
                          <>
                            {tick}
                            {block}
                          </>
                        ) : null}
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>
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
