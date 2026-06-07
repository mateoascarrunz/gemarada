import { steps, waMessages, whatsappLink } from "@/lib/data";
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

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 90}>
              <article className="h-full rounded-[1.6rem] border border-[var(--color-on-dark-line)] bg-white/[0.05] p-6 backdrop-blur-sm hover:-translate-y-1 hover:bg-white/[0.08]">
                <span className="font-display text-5xl leading-none text-[var(--color-gold)]">{step.number}</span>
                <h3 className="mt-8 text-xl font-semibold text-[var(--color-on-dark)]">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-on-dark-muted)]">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-base leading-7 text-[var(--color-on-dark-muted)]">
            ¿Listo para empezar? La primera conversación es sin compromiso.
          </p>
          <ButtonLink href={whatsappLink(waMessages.diagnosis)} variant="gold">
            Conversemos por WhatsApp
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
