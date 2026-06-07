import { outcomes, outcomesIntro } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Outcomes() {
  return (
    <section id="resultados" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={outcomesIntro.eyebrow}
          title={outcomesIntro.title}
          description={outcomesIntro.description}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 90}>
              <article className="h-full rounded-[1.6rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-6 shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-[var(--color-gold)]/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-gold-tint)] text-[var(--color-gold-strong)]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--color-heading)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
