import { problemIntro, problemPoints } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Problem() {
  return (
    <section id="problema" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={problemIntro.eyebrow}
          title={problemIntro.title}
          description={problemIntro.description}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {problemPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 80}>
              <article className="flex gap-4 rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-[var(--color-accent-strong)]">
                  <point.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{point.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--color-accent-strong)]">
          La buena noticia: todo esto se ordena. Con el acompañamiento correcto, tu negocio puede
          operar con costos claros, reportes confiables y decisiones más seguras.
        </p>
      </Container>
    </section>
  );
}
