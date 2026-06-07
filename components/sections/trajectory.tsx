import { Award } from "lucide-react";
import {
  featuredCase,
  selectedHighlights,
  trajectoryEras,
  trajectoryIntro
} from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Trajectory() {
  return (
    <section id="experiencia" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={trajectoryIntro.eyebrow}
          title={trajectoryIntro.title}
          description={trajectoryIntro.description}
        />

        {/* Desktop: centered spine timeline */}
        <ol className="relative mx-auto mt-16 hidden max-w-4xl lg:block">
          <span
            aria-hidden
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--color-line)]"
          />
          {trajectoryEras.map((era, index) => {
            const even = index % 2 === 0;
            return (
              <li key={era.range} className="relative grid grid-cols-2 gap-x-12 pb-14 last:pb-0">
                <span
                  aria-hidden
                  className="absolute left-1/2 top-2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-cream)] ring-4 ring-[var(--color-cream)]"
                />
                <div className={even ? "col-start-1 pr-12 text-right" : "col-start-2 pl-12 text-left"}>
                  <Reveal delay={index * 80}>
                    <p className="font-display text-4xl font-semibold leading-none text-[var(--color-gold-strong)] sm:text-5xl">
                      {era.range}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-[var(--color-heading)]">
                      {era.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                      {era.summary}
                    </p>
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Mobile: single left rail */}
        <ol className="mt-12 border-l border-[var(--color-line)] pl-8 lg:hidden">
          {trajectoryEras.map((era, index) => (
            <li key={era.range} className="relative pb-10 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[2.6rem] top-2 h-4 w-4 rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-cream)] ring-4 ring-[var(--color-cream)]"
              />
              <Reveal delay={index * 80}>
                <p className="font-display text-3xl font-semibold leading-none text-[var(--color-gold-strong)]">
                  {era.range}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--color-heading)]">
                  {era.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{era.summary}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Integrated highlights — centered eyebrow connector */}
        <div className="mt-14 flex items-center gap-4">
          <span aria-hidden className="h-px flex-1 bg-[var(--color-line)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold-strong)]">
            Casos seleccionados
          </span>
          <span aria-hidden className="h-px flex-1 bg-[var(--color-line)]" />
        </div>

        {/* Featured case — compact, text-led module with a gold seal emblem (no photo) */}
        <Reveal>
          <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-[1.75rem] border border-[var(--color-gold)]/35 bg-[var(--color-ivory)] p-7 shadow-[var(--shadow-card)] sm:p-9">
            <div
              aria-hidden
              className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(169,119,46,0.18),transparent_70%)]"
            />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-7">
              <span
                aria-hidden
                className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-gold-tint)] text-[var(--color-gold-strong)] shadow-[var(--shadow-card)]"
              >
                <Award className="h-7 w-7" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold-strong)]">
                  {featuredCase.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-[var(--color-heading)] sm:text-[1.9rem]">
                  {featuredCase.name}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full border border-[var(--color-line)] bg-[var(--color-sand)] px-3 py-1 text-xs font-semibold text-[var(--color-heading)]">
                    {featuredCase.era}
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-gold-strong)]">
                    {featuredCase.label}
                  </span>
                </div>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                  {featuredCase.description}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Supporting highlights — hairline-divided tile grid */}
        <div className="mt-8 grid gap-px overflow-hidden rounded-[1.25rem] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {selectedHighlights.map((highlight, index) => (
            <Reveal key={highlight.name} delay={index * 80} className="h-full">
              <div className="h-full bg-[var(--color-ivory)] p-5 transition-colors hover:bg-[var(--color-gold-tint)]">
                <h4 className="font-display text-lg font-semibold text-[var(--color-heading)]">
                  {highlight.name}
                </h4>
                <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-strong)]">
                  {highlight.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {highlight.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
