import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ctaLabel, services, servicesIntro, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-[var(--color-sand)] py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={servicesIntro.eyebrow}
          title={servicesIntro.title}
          description={servicesIntro.description}
        />
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
          {servicesIntro.audience}
        </p>

        <div className="mt-12 space-y-8 lg:space-y-10">
          {services.map((service, index) => {
            const warm = service.id === "gastronomia";
            return (
              <Reveal key={service.id} delay={index * 90}>
                <article
                  className={`grid overflow-hidden rounded-[2rem] border shadow-[var(--shadow-card)] lg:grid-cols-[1.15fr_0.85fr] ${
                    warm
                      ? "border-[var(--color-gold)]/35 bg-[var(--color-gold-tint)]"
                      : "border-[var(--color-line)] bg-[var(--color-ivory)]"
                  }`}
                >
                  {/* Content */}
                  <div className={`p-7 sm:p-9 lg:p-10 ${warm ? "" : "lg:order-2"}`}>
                    {warm ? (
                      <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold-tint)] px-4 py-1.5 text-[var(--color-gold-strong)] ring-1 ring-[var(--color-gold)]/30">
                        <service.icon className="h-4 w-4 shrink-0" aria-hidden />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                          {service.track}
                        </span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-[var(--color-gold-strong)]">
                        <span aria-hidden className="h-px w-8 bg-[var(--color-gold)]/50" />
                        <service.icon className="h-4 w-4 shrink-0" aria-hidden />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                          {service.track}
                        </span>
                      </span>
                    )}

                    <h3 className="mt-5 font-display text-[1.75rem] font-semibold leading-tight text-[var(--color-heading)] sm:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm font-semibold leading-7 text-[var(--color-text)]">
                      {service.forWho}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                      {service.problem}
                    </p>

                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-strong)]">
                      Incluye
                    </p>

                    {warm ? (
                      <ul className="mt-4 space-y-2.5">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-6 text-[var(--color-text)]"
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold-strong)]"
                              aria-hidden
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ul className="mt-4 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 py-3 text-sm leading-6 text-[var(--color-text)]"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Price + CTA rail */}
                  <div
                    className={`flex flex-col justify-center border-t border-[var(--color-line)] p-7 sm:p-9 lg:border-t-0 lg:p-10 ${
                      warm
                        ? "lg:border-l lg:border-[var(--color-gold)]/25"
                        : "lg:order-1 lg:border-r lg:border-[var(--color-line)]"
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-strong)]">
                      Inversión
                    </p>
                    <div className="mt-3 flex items-end gap-1.5">
                      <span className="font-display text-5xl font-semibold leading-none text-[var(--color-heading)] sm:text-6xl">
                        {service.price}
                      </span>
                      <span className="pb-1.5 text-sm text-[var(--color-muted)]">
                        {service.pricePeriod}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      {service.priceNote}
                    </p>

                    <div className="mt-7">
                      <ButtonLink href={whatsappLink(service.ctaMessage)} className="w-full">
                        {ctaLabel}
                      </ButtonLink>
                      <Link
                        href={service.anchor}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-gold-strong)] hover:gap-2.5 hover:text-[var(--color-heading)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
                      >
                        Ver detalle
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
