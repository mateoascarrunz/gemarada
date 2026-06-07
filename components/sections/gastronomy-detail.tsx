import { ctaLabel, gastronomyDetail, waMessages, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SceneFrame } from "@/components/ui/scene-frame";
import { ButtonLink } from "@/components/ui/button-link";

export function GastronomyDetail() {
  return (
    <section
      id="consultoria-gastronomica"
      className="scroll-mt-24 bg-[var(--color-ivory)] py-20 sm:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SceneFrame src={gastronomyDetail.image} alt={gastronomyDetail.imageAlt} />
          </div>

          <div>
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

            <blockquote className="mt-7 border-l-2 border-[var(--color-gold)] pl-6 font-display text-xl leading-7 text-[var(--color-heading)] sm:text-2xl">
              {gastronomyDetail.quote}
            </blockquote>

            <div className="mt-9 grid gap-x-8 sm:grid-cols-2">
              {gastronomyDetail.features.map((feature, index) => (
                <Reveal key={feature.title} delay={(index % 2) * 70}>
                  <div className="border-t border-[var(--color-line)] py-5">
                    <div className="flex items-center gap-2.5">
                      <feature.icon className="h-4 w-4 shrink-0 text-[var(--color-gold-strong)]" />
                      <h3 className="text-base font-semibold text-[var(--color-heading)]">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <span className="inline-flex items-end gap-1">
                <span className="font-display text-3xl font-semibold text-[var(--color-heading)]">
                  {gastronomyDetail.price}
                </span>
                <span className="pb-1 text-sm text-[var(--color-muted)]">
                  {gastronomyDetail.pricePeriod}
                </span>
              </span>
              <ButtonLink href={whatsappLink(waMessages.consulting)}>{ctaLabel}</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
