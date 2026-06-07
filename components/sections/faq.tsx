import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Preguntas frecuentes"
              title="Respuestas claras antes de escribirme."
              description="Si tienes una duda que no está aquí, escríbeme por WhatsApp y la resolvemos en minutos."
            />
          </div>

          <div className="divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[var(--color-heading)]">
                  {faq.question}
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-muted)] transition-all duration-300 group-open:rotate-45 group-open:border-[var(--color-gold)] group-open:text-[var(--color-gold-strong)]">
                    <Plus className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
