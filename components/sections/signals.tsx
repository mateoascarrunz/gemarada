import { Check } from "lucide-react";
import { ctaLabel, signals, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

export function Signals() {
  return (
    <section aria-label={signals.title} className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={signals.eyebrow}
          title={signals.title}
          description={signals.description}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {signals.groups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 100} className="h-full">
              <div
                tabIndex={0}
                className="group h-full rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)] sm:p-7"
              >
                <div className="flex items-center gap-3 border-b border-[var(--color-line)] pb-4">
                  <span className="font-display text-2xl font-semibold leading-none text-[var(--color-gold)]">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <group.icon className="h-5 w-5 shrink-0 text-[var(--color-gold-strong)]" aria-hidden />
                  <h3 className="font-display text-xl font-semibold text-[var(--color-heading)]">
                    {group.category}
                  </h3>
                </div>

                <ul className="mt-5 space-y-4">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--color-gold)]/40 transition-colors group-hover:border-[var(--color-gold)] group-hover:bg-[var(--color-gold-tint)] group-focus-within:border-[var(--color-gold)] group-focus-within:bg-[var(--color-gold-tint)]"
                      >
                        <Check className="h-3 w-3 text-[var(--color-gold-strong)]" />
                      </span>
                      <span className="text-sm leading-6 text-[var(--color-text)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing — gold left-ruled block + CTA */}
        <Reveal>
          <div className="mt-12 flex flex-col gap-6 border-l-2 border-[var(--color-gold)] bg-[var(--color-sand)]/40 py-6 pl-6 sm:flex-row sm:items-center sm:justify-between sm:pr-6">
            <p className="font-display text-2xl leading-snug text-[var(--color-heading)]">
              {signals.closing}
            </p>
            <ButtonLink href={whatsappLink(signals.ctaMessage)} className="shrink-0">
              {ctaLabel}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
