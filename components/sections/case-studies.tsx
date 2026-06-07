import { ArrowDownRight } from "lucide-react";
import { caseStudies, caseStudiesNote } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function CaseStudies() {
  return (
    <section id="experiencia" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Experiencia seleccionada"
          title="El tipo de cambios que logran los negocios que acompaño."
          description="Cada negocio es distinto, pero el patrón se repite: pasar del desorden a tener costos claros, inventarios ordenados y decisiones con confianza."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <Reveal key={item.sector} delay={index * 100}>
              <article className="flex h-full flex-col rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md hover:-translate-y-1 hover:border-white/[0.18]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-[var(--color-accent-strong)]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.sector}</h3>

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  El reto
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{item.challenge}</p>

                <div className="mt-5 flex items-start gap-2">
                  <ArrowDownRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                  <p className="text-sm leading-7 text-white">{item.outcome}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-xs leading-6 text-[var(--color-muted)]">{caseStudiesNote}</p>
      </Container>
    </section>
  );
}
