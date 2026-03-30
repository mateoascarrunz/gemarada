import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-8">
      <Container className="flex flex-col gap-4 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-white">Gema Rada</p>
          <p>Consultora administrativa y gastronómica</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href="mailto:hola@gemarada.com" className="hover:text-white">
            hola@gemarada.com
          </Link>
          <Link href="https://wa.me/34600000000" className="hover:text-white">
            WhatsApp
          </Link>
          <Link href="#" className="hover:text-white">
            Instagram
          </Link>
          <Link href="#" className="hover:text-white">
            LinkedIn
          </Link>
        </div>
      </Container>
    </footer>
  );
}
