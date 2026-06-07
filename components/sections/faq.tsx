import { faqs } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Respuestas claras antes de escribirme."
            description="Si tienes una duda que no está aquí, escríbeme por WhatsApp y la resolvemos en minutos."
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md open:bg-white/[0.08]"
              >
                <summary className="cursor-pointer list-none pr-6 text-base font-semibold text-white">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
