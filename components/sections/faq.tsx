import { Plus } from "lucide-react";
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

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.4rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-5 shadow-[var(--shadow-card)] open:bg-[var(--color-cream)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[var(--color-heading)]">
                  {faq.question}
                  <Plus className="h-4 w-4 shrink-0 text-[var(--color-gold-strong)] transition-transform group-open:rotate-45" />
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
