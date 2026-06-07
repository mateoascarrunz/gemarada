import { testimonials } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Lo que dicen"
          title="Acompañamiento que se nota en los resultados y en el trato."
          description="Estos testimonios son de muestra y están listos para reemplazarse por reseñas reales —con nombre, negocio y foto— cuando los clientes lo autoricen."
          align="center"
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.quote} delay={index * 100}>
              <figure className="h-full rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md hover:-translate-y-1 hover:border-white/[0.18]">
                <blockquote className="text-base leading-8 text-white">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-8 border-t border-white/[0.08] pt-5">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{testimonial.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
