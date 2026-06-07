import {
  experienceHighlight,
  otherEngagements,
  trajectoryEras,
  trajectoryIntro
} from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SceneFrame } from "@/components/ui/scene-frame";

export function Trajectory() {
  return (
    <section id="experiencia" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={trajectoryIntro.eyebrow}
          title={trajectoryIntro.title}
          description={trajectoryIntro.description}
        />

        {/* Vertical spine timeline */}
        <ol className="mt-12 border-l border-[var(--color-line)] pl-10">
          {trajectoryEras.map((era, index) => (
            <Reveal key={era.range} delay={index * 70}>
              <li className="relative pb-10 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[3.05rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-cream)] ring-4 ring-[var(--color-cream)]"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-strong)]">
                  {era.range}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-[var(--color-heading)]">
                  {era.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                  {era.summary}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        {/* Featured experience — image-led split */}
        <div className="mt-16 overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-ivory)] shadow-[var(--shadow-card)]">
          <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:p-10">
            <SceneFrame
              src={experienceHighlight.image}
              alt={experienceHighlight.imageAlt}
              aspect="aspect-[5/4]"
            />
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold-strong)]">
                <span className="h-px w-6 bg-current opacity-60" />
                {experienceHighlight.eyebrow}
              </p>
              <h3 className="font-display text-2xl font-semibold leading-tight text-[var(--color-heading)] sm:text-3xl">
                {experienceHighlight.name}
              </h3>
              <p className="mt-2 text-sm font-semibold text-[var(--color-gold-strong)]">
                {experienceHighlight.scope}
              </p>
              <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                {experienceHighlight.description}
              </p>
            </div>
          </div>
        </div>

        {/* Other engagements — quiet row list */}
        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-strong)]">
            También:
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {otherEngagements.map((engagement) => (
              <li
                key={engagement.name}
                className="inline-flex items-baseline gap-2 text-sm text-[var(--color-muted)]"
              >
                <span className="font-medium text-[var(--color-heading)]">{engagement.name}</span>
                <span className="text-[var(--color-line)]">·</span>
                <span>{engagement.scope}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
