import { MessageCircle } from "lucide-react";
import { waMessages, whatsappLink } from "@/lib/data";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-line)] bg-[rgba(246,239,227,0.92)] p-3 backdrop-blur-xl lg:hidden">
      <a
        href={whatsappLink(waMessages.diagnosis)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-full bg-[var(--color-espresso)] px-6 text-sm font-semibold text-[var(--color-cream)] shadow-[0_14px_30px_rgba(42,33,26,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
      >
        <MessageCircle className="h-4 w-4" />
        Escríbeme por WhatsApp
      </a>
    </div>
  );
}
