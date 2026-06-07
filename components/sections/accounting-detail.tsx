import { Info, Lock } from "lucide-react";
import { accountingDetail, ctaLabel, waMessages, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SceneFrame } from "@/components/ui/scene-frame";
import { ButtonLink } from "@/components/ui/button-link";

export function AccountingDetail() {
  return (
    <section
      id="contabilidad-remota"
      className="scroll-mt-24 bg-[var(--color-sand)] py-20 sm:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold-strong)]">
              <span className="h-px w-6 bg-current opacity-60" />
              {accountingDetail.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-semibold leading-[1.04] text-[var(--color-heading)] sm:text-5xl">
              {accountingDetail.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              {accountingDetail.description}
            </p>

            <div className="mt-8 grid gap-x-8 sm:grid-cols-2">
              {accountingDetail.includes.map((item, index) => (
                <Reveal key={item.title} delay={(index % 2) * 70}>
                  <div className="border-t border-[var(--color-line)] py-5">
                    <div className="flex items-center gap-2.5">
                      <item.icon className="h-4 w-4 shrink-0 text-[var(--color-gold-strong)]" />
                      <h3 className="text-base font-semibold text-[var(--color-heading)]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <dl className="mt-8 divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
              <div className="flex items-start gap-3 py-4">
                <Lock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold-strong)]" />
                <p className="text-sm leading-6 text-[var(--color-text)]">
                  {accountingDetail.confidentiality}
                </p>
              </div>
              <div className="flex items-start gap-3 py-4">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold-strong)]" />
                <p className="text-sm leading-6 text-[var(--color-muted)]">{accountingDetail.note}</p>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <span className="inline-flex items-end gap-1">
                <span className="font-display text-3xl font-semibold text-[var(--color-heading)]">
                  {accountingDetail.price}
                </span>
                <span className="pb-1 text-sm text-[var(--color-muted)]">
                  {accountingDetail.pricePeriod}
                </span>
              </span>
              <ButtonLink href={whatsappLink(waMessages.accounting)}>{ctaLabel}</ButtonLink>
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <SceneFrame src={accountingDetail.image} alt={accountingDetail.imageAlt} />
          </div>
        </div>
      </Container>
    </section>
  );
}
