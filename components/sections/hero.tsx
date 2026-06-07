import Image from "next/image";
import { BadgeCheck, Sparkles } from "lucide-react";
import { brand, heroHighlights, waMessages, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-10 sm:pb-24 sm:pt-14 lg:pb-32 lg:pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-5rem] top-16 h-44 w-44 rounded-full bg-[rgba(242,191,159,0.16)] blur-3xl sm:h-60 sm:w-60" />
        <div className="absolute right-[-3rem] top-28 h-48 w-48 rounded-full bg-[rgba(165,214,208,0.14)] blur-3xl sm:h-72 sm:w-72" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs tracking-[0.24em] text-[var(--color-accent-cool)] uppercase backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              Consultora senior · {brand.shortRole}
            </div>
            <h1 className="mt-7 font-display text-5xl leading-[0.95] font-semibold tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              Orden, rentabilidad y claridad para tu negocio gastronómico.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
              Ayudo a restaurantes, cafeterías, chefs y pequeños negocios a controlar sus costos,
              entender sus números y crecer con bases sólidas. Consultoría gastronómica y
              contabilidad general remota, con acompañamiento cercano.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappLink(waMessages.diagnosis)}>
                Conversemos por WhatsApp
              </ButtonLink>
              <ButtonLink href="#servicios" variant="secondary">
                Ver servicios
              </ButtonLink>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm text-[var(--color-muted)] backdrop-blur-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-x-10 -top-6 h-24 rounded-full bg-[rgba(242,191,159,0.12)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.06))] p-4 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_42%)]" />
              <div className="relative grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <div className="space-y-4 rounded-[1.6rem] border border-white/10 bg-[rgba(7,14,25,0.52)] p-5 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent-cool)]">
                    Consultora senior
                  </p>
                  <h2 className="font-display text-3xl font-semibold text-white">Krisna Gema Rada</h2>
                  <p className="max-w-sm text-sm leading-7 text-[var(--color-muted)]">
                    Especialista en administración gastronómica y contabilidad general remota.
                    Costos claros, inventarios ordenados y reportes que sí entiendes.
                  </p>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-sm text-white">
                    <BadgeCheck className="h-4 w-4 text-[var(--color-accent)]" />
                    Atención humana y confidencial
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[rgba(255,255,255,0.08)]">
                  <Image
                    src="/images/krisna-portrait-hero.jpg"
                    alt="Retrato de Krisna Gema Rada, consultora en administración gastronómica y contabilidad"
                    width={900}
                    height={1200}
                    priority
                    className="h-[460px] w-full object-cover sm:h-[540px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
