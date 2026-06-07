import { Info, Lock } from "lucide-react";
import { accountingDetail, waMessages, whatsappLink } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button-link";

export function AccountingDetail() {
  return (
    <section id="contabilidad-remota" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-sand)] p-6 shadow-[var(--shadow-card)] sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
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

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {accountingDetail.includes.map((item, index) => (
                  <Reveal key={item.title} delay={index * 70}>
                    <article className="h-full rounded-[1.4rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-gold-tint)] text-[var(--color-gold-strong)]">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-base font-semibold text-[var(--color-heading)]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <aside className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-ivory)] p-6 shadow-[var(--shadow-card)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-strong)]">
                Inversión
              </p>
              <div className="mt-4 flex items-end gap-1">
                <span className="font-display text-5xl font-semibold text-[var(--color-heading)]">
                  {accountingDetail.price}
                </span>
                <span className="pb-2 text-base text-[var(--color-muted)]">{accountingDetail.pricePeriod}</span>
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-[var(--color-gold-tint)] p-4">
                <Lock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold-strong)]" />
                <p className="text-sm leading-6 text-[var(--color-text)]">{accountingDetail.confidentiality}</p>
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-2xl border border-[var(--color-line)] p-4">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold-strong)]" />
                <p className="text-sm leading-6 text-[var(--color-muted)]">{accountingDetail.note}</p>
              </div>

              <ButtonLink href={whatsappLink(waMessages.accounting)} className="mt-6 w-full">
                Quiero claridad financiera
              </ButtonLink>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
