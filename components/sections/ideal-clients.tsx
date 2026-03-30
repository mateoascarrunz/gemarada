import { idealClients } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function IdealClients() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Clientes ideales"
            title="Pensado para negocios que necesitan orden sin perder agilidad."
            description="Si buscas control administrativo, apoyo contable remoto o consultoría gastronómica con enfoque humano, esta propuesta está hecha para ti."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {idealClients.map((client) => (
              <div
                key={client}
                className="rounded-[1.5rem] border border-white/10 bg-[rgba(9,17,31,0.58)] px-5 py-5 text-sm leading-7 text-[var(--color-muted)]"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
