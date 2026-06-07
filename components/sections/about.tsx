import Image from "next/image";
import { about, brand, trustPoints, waMessages, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";

export function About() {
  return (
    <section id="sobre-krisna" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
          <div className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28">
            <figure className="relative overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-3 shadow-[var(--shadow-soft)]">
              <Image
                src="/images/krisna-portrait-about.jpg"
                alt={`${brand.fullName}, ${brand.role.toLowerCase()}`}
                width={800}
                height={1000}
                sizes="(min-width: 1024px) 24rem, 90vw"
                className="h-[420px] w-full rounded-[1.5rem] object-cover sm:h-[480px]"
              />
            </figure>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {about.values.map((value) => (
                <div
                  key={value.label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-[var(--color-line)] bg-[var(--color-ivory)] px-2 py-4 text-center"
                >
                  <value.icon className="h-5 w-5 text-[var(--color-gold-strong)]" />
                  <span className="text-xs leading-tight text-[var(--color-muted)]">{value.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold-strong)]">
              <span className="h-px w-6 bg-current opacity-60" />
              {about.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-semibold leading-[1.04] text-[var(--color-heading)] sm:text-5xl">
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
                <Reveal key={point.title} delay={(index % 2) * 70}>
                  <article className="h-full rounded-[1.4rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-5 shadow-[var(--shadow-card)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-gold-tint)] text-[var(--color-gold-strong)]">
                      <point.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-[var(--color-heading)]">{point.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{point.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="mt-8">
              <ButtonLink href={whatsappLink(waMessages.general)}>Hablemos de tu negocio</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
