import Image from "next/image";
import { about } from "@/lib/data";
import { Container } from "@/components/ui/container";

export function About() {
  return (
    <section id="sobre-krisna" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
          <div className="mx-auto w-full max-w-sm lg:sticky lg:top-28">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2.4rem] bg-[radial-gradient(circle_at_30%_20%,rgba(169,119,46,0.16),transparent_60%)]" />
              <figure className="relative overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-2 shadow-[var(--shadow-soft)]">
                <Image
                  src={about.image}
                  alt={about.imageAlt}
                  width={800}
                  height={1000}
                  sizes="(min-width: 1024px) 24rem, 90vw"
                  className="h-[420px] w-full rounded-[1.4rem] object-cover sm:h-[480px]"
                />
              </figure>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              {about.values.map((value) => (
                <li
                  key={value.label}
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)]"
                >
                  <value.icon className="h-4 w-4 shrink-0 text-[var(--color-gold-strong)]" />
                  {value.label}
                </li>
              ))}
            </ul>
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
                <p
                  key={paragraph}
                  className="text-base leading-7 text-[var(--color-muted)] sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className="mt-8 border-l-2 border-[var(--color-gold)] pl-6 font-display text-2xl leading-snug text-[var(--color-heading)] sm:text-3xl">
              {about.quote}
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
