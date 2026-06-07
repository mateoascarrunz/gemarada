import { authorityStrip } from "@/lib/data";
import { Container } from "@/components/ui/container";

export function AuthorityStrip() {
  return (
    <section aria-label="Razones para confiar" className="border-y border-white/[0.08] bg-white/[0.03] py-6 backdrop-blur-md">
      <Container>
        <ul className="grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {authorityStrip.map((item) => (
            <li key={item.label} className="flex items-baseline gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
              <span>
                <span className="block text-sm font-semibold text-white">{item.label}</span>
                <span className="block text-sm text-[var(--color-muted)]">{item.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
