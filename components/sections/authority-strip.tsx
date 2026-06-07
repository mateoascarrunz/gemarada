import { authorityStrip } from "@/lib/data";
import { Container } from "@/components/ui/container";

export function AuthorityStrip() {
  return (
    <section aria-label="Razones para confiar" className="border-y border-[var(--color-line)] bg-[var(--color-sand)]">
      <Container>
        <ul className="grid divide-[var(--color-line)] py-2 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {authorityStrip.map((item) => (
            <li key={item.label} className="flex items-baseline gap-3 px-2 py-4 sm:px-6">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-gold)]" />
              <span>
                <span className="block font-display text-lg font-semibold leading-tight text-[var(--color-heading)]">
                  {item.label}
                </span>
                <span className="block text-sm text-[var(--color-muted)]">{item.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
