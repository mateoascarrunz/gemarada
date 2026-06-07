import { experienceIntro, selectedExperience } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function CaseStudies() {
  return (
    <section id="experiencia" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={experienceIntro.eyebrow}
          title={experienceIntro.title}
          description={experienceIntro.description}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {selectedExperience.map((item, index) => (
            <Reveal key={item.name} delay={(index % 2) * 90}>
              <article className="flex h-full gap-4 rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-6 shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-[var(--color-gold)]/40">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-gold-tint)] text-[var(--color-gold-strong)]">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold leading-tight text-[var(--color-heading)]">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-gold-strong)]">
                    {item.scope}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
