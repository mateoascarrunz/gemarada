import { idealClients } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function IdealClients() {
  return (
    <section id="para-quien" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-6 shadow-[var(--shadow-card)] sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="¿Es para ti?"
            title="Pensado para negocios que quieren orden sin perder agilidad."
            description="Si buscas control de costos, claridad financiera o consultoría gastronómica con un trato cercano y experto, esta propuesta está hecha para ti."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {idealClients.map((client) => (
              <div
                key={client.label}
                className="flex items-center gap-4 rounded-[1.4rem] border border-[var(--color-line)] bg-[var(--color-cream)] px-5 py-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-gold-tint)] text-[var(--color-gold-strong)]">
                  <client.icon className="h-5 w-5" />
                </div>
                <p className="text-sm leading-6 text-[var(--color-text)]">{client.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
