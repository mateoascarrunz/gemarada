import { steps } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function HowItWorks() {
  return (
    <section id="proceso" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Un proceso simple para que todo esté más claro sin agregar más carga a tu agenda."
          description="La experiencia está pensada para ser cercana, remota y fácil de sostener en el tiempo."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 90}>
              <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.08]">
                <span className="font-display text-5xl leading-none text-[rgba(248,208,184,0.92)]">{step.number}</span>
                <h3 className="mt-8 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
