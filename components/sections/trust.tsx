import { trustPoints } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Trust() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Por qué confiar en Gema"
            title="Experiencia senior, criterio práctico y una forma de trabajar cercana."
            description="La confianza aquí no se construye con promesas vacías, sino con acompañamiento constante, organización real y comprensión del negocio."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {trustPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.08]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-[var(--color-accent-strong)]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
