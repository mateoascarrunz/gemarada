import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import { brand, services, waMessages, whatsappLink } from "@/lib/data";
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
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-ivory)] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-strong)]">
              <Sparkles className="h-3.5 w-3.5" />
              Consultora senior · +30 años de experiencia
            </p>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.02em] text-[var(--color-heading)] sm:text-6xl lg:text-7xl">
              Orden y claridad para que tu negocio funcione mejor.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
              Consultoría en administración gastronómica y contabilidad general remota para
              restaurantes, cafés, chefs, caterings, emprendedores y pequeños negocios que necesitan
              estructura, control y decisiones más claras.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappLink(waMessages.diagnosis)}>Escríbeme por WhatsApp</ButtonLink>
              <ButtonLink href="#servicios" variant="secondary">
                Ver servicios
              </ButtonLink>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.anchor}
                  className="group rounded-2xl border border-[var(--color-line)] bg-[var(--color-ivory)] p-4 shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:border-[var(--color-gold)]/40"
                >
                  <div className="flex items-center gap-2 text-[var(--color-gold-strong)]">
                    <service.icon className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                      {service.id === "gastronomia" ? "Administración gastronómica" : "Contabilidad remota"}
                    </span>
                  </div>
                  <p className="mt-2 flex items-baseline gap-1">
                    <span className="font-display text-2xl font-semibold text-[var(--color-heading)]">
                      {service.price}
                    </span>
                    <span className="text-sm text-[var(--color-muted)]">{service.pricePeriod}</span>
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1 text-sm text-[var(--color-muted)] group-hover:text-[var(--color-gold-strong)]">
                    Ver detalle <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-[2.4rem] bg-[radial-gradient(circle_at_30%_20%,rgba(169,119,46,0.16),transparent_60%)]" />
            <figure className="relative overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-3 shadow-[var(--shadow-soft)]">
              <Image
                src="/images/krisna-portrait-hero.jpg"
                alt={`Retrato de ${brand.fullName}, ${brand.role.toLowerCase()}`}
                width={900}
                height={1100}
                priority
                sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 90vw"
                className="h-[440px] w-full rounded-[1.5rem] object-cover sm:h-[520px]"
              />
              <figcaption className="absolute bottom-6 left-6 right-6 rounded-2xl border border-[var(--color-line)] bg-[rgba(252,248,240,0.92)] px-4 py-3 backdrop-blur-sm">
                <p className="font-display text-lg font-semibold text-[var(--color-heading)]">
                  {brand.name}
                </p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-[var(--color-muted)]">
                  <BadgeCheck className="h-3.5 w-3.5 text-[var(--color-gold-strong)]" />
                  Consultora senior · Atención humana y confidencial
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
