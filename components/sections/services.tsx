import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ctaLabel, services, servicesIntro, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
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

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[var(--color-line)] shadow-[var(--shadow-card)]">
          <div className="grid divide-y divide-[var(--color-line)] md:grid-cols-2 md:divide-x md:divide-y-0">
            {services.map((service) => {
              const warm = service.id === "gastronomia";
              return (
                <article
                  key={service.id}
                  className={`flex flex-col p-7 sm:p-9 ${
                    warm ? "bg-[var(--color-gold-tint)]" : "bg-[var(--color-ivory)]"
                  }`}
                >
                  <div className="flex items-center gap-3 text-[var(--color-gold-strong)]">
                    <service.icon className="h-6 w-6 shrink-0" />
                    <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                      {service.track}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-[var(--color-heading)] sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-7 text-[var(--color-text)]">
                    {service.forWho}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    {service.problem}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-[var(--color-text)]"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold-strong)]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <div className="flex items-end gap-1">
                      <span className="font-display text-4xl font-semibold text-[var(--color-heading)]">
                        {service.price}
                      </span>
                      <span className="pb-1.5 text-sm text-[var(--color-muted)]">
                        {service.pricePeriod}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[var(--color-muted)]">{service.priceNote}</p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <ButtonLink
                        href={whatsappLink(service.ctaMessage)}
                        className="flex-1"
                      >
                        {ctaLabel}
                      </ButtonLink>
                      <Link
                        href={service.anchor}
                        className="inline-flex min-h-[3rem] flex-1 items-center justify-center gap-2 rounded-full border border-[var(--color-espresso)]/25 px-6 py-3 text-sm font-semibold text-[var(--color-heading)] hover:border-[var(--color-espresso)]/45 hover:bg-[var(--color-sand)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
                      >
                        Ver detalle
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
