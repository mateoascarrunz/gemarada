import { problemClosing, problemIntro, problemPoints } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Problem() {
  return (
    <section id="problema" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={problemIntro.eyebrow}
          title={problemIntro.title}
          description={problemIntro.description}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {problemPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 80}>
              <article className="flex h-full gap-4 rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-6 shadow-[var(--shadow-card)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-gold-tint)] text-[var(--color-gold-strong)]">
                  <point.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-heading)]">{point.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{point.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-2xl font-display text-xl leading-8 text-[var(--color-gold-strong)] sm:text-2xl">
          {problemClosing}
        </p>
      </Container>
    </section>
  );
}
