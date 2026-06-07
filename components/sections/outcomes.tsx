import { outcomes, outcomesIntro } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Outcomes() {
  return (
    <section id="resultados" className="scroll-mt-24 bg-[var(--color-sand)] py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={outcomesIntro.eyebrow}
          title={outcomesIntro.title}
          description={outcomesIntro.description}
        />

        <div className="mt-12 grid gap-x-12 md:grid-cols-2">
          {outcomes.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 80}>
              <div className="flex items-start gap-4 border-t border-[var(--color-line)] py-6">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-gold-strong)]" />
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-heading)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 border-l-2 border-[var(--color-gold)] pl-6 font-display text-2xl leading-snug text-[var(--color-heading)]">
          No es más trabajo para ti. Es más claridad para decidir.
        </p>
      </Container>
    </section>
  );
}
