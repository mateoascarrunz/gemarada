import Image from "next/image";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import { brand, hero, heroStats, waMessages, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6rem] top-10 h-56 w-56 rounded-full bg-[rgba(169,119,46,0.1)] blur-3xl" />
        <div className="absolute right-[-4rem] top-32 h-64 w-64 rounded-full bg-[rgba(111,107,65,0.08)] blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-strong)]">
              <span className="h-px w-8 bg-current opacity-60" />
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 font-display font-semibold tracking-[-0.02em] text-[var(--color-heading)] [font-size:clamp(2.75rem,7vw,5.25rem)] [line-height:0.95]">
              {hero.titleLead}{" "}
              <span className="text-[var(--color-gold-strong)]">{hero.titleAccent}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
              {hero.subtitle}
            </p>

            <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--color-muted)]">
              {hero.dualServices.map((service, index) => (
                <span key={service.href} className="inline-flex items-center gap-2">
                  {index > 0 ? <span className="text-[var(--color-line)]">·</span> : null}
                  <Link
                    href={service.href}
                    className="font-medium text-[var(--color-heading)] underline decoration-[var(--color-gold)]/50 decoration-1 underline-offset-4 hover:text-[var(--color-gold-strong)] hover:decoration-[var(--color-gold)]"
                  >
                    {service.label}
                  </Link>
                </span>
              ))}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappLink(waMessages.diagnosis)}>{"Escríbeme por WhatsApp"}</ButtonLink>
              <ButtonLink href="#servicios" variant="secondary">
                Ver servicios
              </ButtonLink>
            </div>

            <dl className="mt-10 flex flex-wrap items-stretch gap-x-8 gap-y-4 border-t border-[var(--color-line)] pt-6">
              {heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={
                    index > 0
                      ? "border-l border-[var(--color-line)] pl-8 first:border-l-0 first:pl-0"
                      : ""
                  }
                >
                  <dt className="font-display text-2xl font-semibold leading-none text-[var(--color-heading)] sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1.5 text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-12 hidden select-none font-display text-[16rem] leading-none text-[var(--color-gold)]/[0.07] lg:block"
            >
              {brand.monogram}
            </span>

            <div className="absolute -inset-4 -z-10 rounded-[2.4rem] bg-[radial-gradient(circle_at_30%_20%,rgba(169,119,46,0.16),transparent_60%)]" />
            <figure className="group relative overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-2 shadow-[var(--shadow-soft)] transition-transform duration-500 ease-out hover:-translate-y-1">
              <Image
                src="/images/gema.jpg"
                alt={`Retrato profesional de ${brand.fullName}`}
                width={1402}
                height={1122}
                priority
                sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 90vw"
                className="h-[440px] w-full rounded-[1.4rem] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03] sm:h-[520px]"
              />
            </figure>

            <figcaption className="absolute -bottom-4 left-4 inline-flex items-center gap-2.5 rounded-2xl border border-[var(--color-line)] bg-[rgba(252,248,240,0.94)] px-4 py-3 shadow-[var(--shadow-card)] backdrop-blur-sm">
              <BadgeCheck className="h-5 w-5 shrink-0 text-[var(--color-gold-strong)]" />
              <span>
                <span className="block font-display text-base font-semibold leading-tight text-[var(--color-heading)]">
                  {brand.name}
                </span>
                <span className="block text-xs text-[var(--color-muted)]">Consultora senior</span>
              </span>
            </figcaption>
          </div>
        </div>
      </Container>
    </section>
  );
}
