import { Quote } from "lucide-react";
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
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold-strong)]">
              <span className="h-px w-6 bg-current opacity-60" />
              {gastronomyDetail.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-semibold leading-[1.04] text-[var(--color-heading)] sm:text-5xl">
              {gastronomyDetail.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              {gastronomyDetail.description}
            </p>

            <figure className="mt-7 rounded-[1.4rem] border-l-2 border-[var(--color-gold)] bg-[var(--color-ivory)] p-5 shadow-[var(--shadow-card)]">
              <Quote className="h-5 w-5 text-[var(--color-gold-strong)]" />
              <blockquote className="mt-2 font-display text-xl leading-7 text-[var(--color-heading)]">
                {gastronomyDetail.quote}
              </blockquote>
            </figure>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-end gap-1 rounded-2xl border border-[var(--color-line)] bg-[var(--color-ivory)] px-5 py-3">
                <span className="font-display text-3xl font-semibold text-[var(--color-heading)]">
                  {gastronomyDetail.price}
                </span>
                <span className="pb-1 text-sm text-[var(--color-muted)]">{gastronomyDetail.pricePeriod}</span>
              </span>
              <ButtonLink href={whatsappLink(waMessages.consulting)}>Agenda tu consultoría</ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {gastronomyDetail.features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 70}>
                <article className="h-full rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-5 shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-[var(--color-gold)]/40">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-gold-tint)] text-[var(--color-gold-strong)]">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[var(--color-heading)]">{feature.title}</h3>
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
