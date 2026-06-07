import { gastronomyDetail, waMessages, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";

export function GastronomyDetail() {
  return (
    <section id="consultoria-gastronomica" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-accent-cool)]">
              {gastronomyDetail.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-none text-white sm:text-5xl">
              {gastronomyDetail.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              {gastronomyDetail.description}
            </p>

            <div className="mt-8 inline-flex items-end gap-1 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4">
              <span className="font-display text-4xl font-semibold text-white">{gastronomyDetail.price}</span>
              <span className="pb-1.5 text-sm text-[var(--color-muted)]">{gastronomyDetail.pricePeriod}</span>
            </div>

            <div className="mt-8">
              <ButtonLink href={whatsappLink(waMessages.consulting)}>
                Agenda tu consultoría
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {gastronomyDetail.features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 70}>
                <article className="h-full rounded-[1.6rem] border border-white/10 bg-[rgba(11,20,34,0.68)] p-5 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-[rgba(14,24,40,0.82)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-[var(--color-accent-strong)]">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{feature.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
