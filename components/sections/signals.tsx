import { signals } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Signals() {
  return (
    <section aria-label={signals.title} className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={signals.eyebrow}
          title={signals.title}
          description={signals.description}
        />

        <ol className="mt-12 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {signals.items.map((item, index) => (
            <li
              key={item}
              className="group grid items-baseline gap-3 py-6 sm:grid-cols-[auto_1fr] sm:gap-8"
            >
              <span className="font-display text-3xl font-semibold leading-none text-[var(--color-line)] transition-colors duration-300 group-hover:text-[var(--color-gold)] sm:text-4xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-2xl leading-snug text-[var(--color-heading)]">
                {item}
              </p>
            </li>
          ))}
        </ol>

        <Reveal>
          <p className="mt-12 border-l-2 border-[var(--color-gold)] pl-6 font-display text-2xl leading-snug text-[var(--color-heading)] sm:text-3xl">
            {signals.closing}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
