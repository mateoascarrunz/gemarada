import { benefits } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Benefits() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Propuesta de valor"
          title="Menos desorden operativo. Más control, claridad y tiempo para enfocarte en tu negocio."
          description="Gema te ayuda a transformar información dispersa en procesos más ordenados, reportes más claros y decisiones con mayor criterio."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {benefits.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="group rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-[var(--shadow-soft)] backdrop-blur-md hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.08]">
                <div className="mb-5 h-1.5 w-14 rounded-full bg-[linear-gradient(90deg,var(--color-accent),rgba(165,214,208,0.9))]" />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
