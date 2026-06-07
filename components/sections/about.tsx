import Image from "next/image";
import { about, trustPoints, waMessages, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";

export function About() {
  return (
    <section id="sobre-krisna" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:items-start">
          <div className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28">
            <div className="absolute inset-x-8 -top-5 h-20 rounded-full bg-[rgba(242,191,159,0.14)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-3 shadow-[var(--shadow-soft)]">
              <Image
                src="/images/krisna-portrait-about.jpg"
                alt="Krisna Gema Rada, consultora en administración gastronómica y contabilidad general remota"
                width={800}
                height={1000}
                className="h-[420px] w-full rounded-[1.5rem] object-cover sm:h-[480px]"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {about.values.map((value) => (
                <div
                  key={value.label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-2 py-4 text-center"
                >
                  <value.icon className="h-5 w-5 text-[var(--color-accent-strong)]" />
                  <span className="text-xs leading-tight text-[var(--color-muted)]">{value.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-accent-cool)]">
              {about.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-none text-white sm:text-5xl">
              {about.title}
            </h2>

            <div className="mt-6 space-y-4">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point, index) => (
                <Reveal key={point.title} delay={index * 70}>
                  <article className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-[var(--color-accent-strong)]">
                      <point.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-white">{point.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{point.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="mt-8">
              <ButtonLink href={whatsappLink(waMessages.general)}>
                Hablemos de tu negocio
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
