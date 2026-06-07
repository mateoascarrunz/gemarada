"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { waMessages, whatsappLink } from "@/lib/data";

export function MobileCta() {
  // Default visible: with no JS or before hydration the CTA simply shows.
  const [hidden, setHidden] = useState(false);
  // Only enable the entrance transition once JS controls visibility.
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const sections = ["inicio", "contacto"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) {
      return;
    }

    setAnimate(!reduceMotion);

    const inView = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            inView.add(entry.target);
          } else {
            inView.delete(entry.target);
          }
        });
        // Hide the floating CTA while the hero or contact section is on screen.
        setHidden(inView.size > 0);
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-line)] bg-[rgba(246,239,227,0.92)] p-3 backdrop-blur-xl lg:hidden ${
        animate
          ? "transition-[transform,opacity] duration-[250ms] ease-out"
          : ""
      } ${
        hidden
          ? "pointer-events-none translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <a
        href={whatsappLink(waMessages.diagnosis)}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={hidden ? -1 : undefined}
        className="flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-full bg-[var(--color-espresso)] px-6 text-sm font-semibold text-[var(--color-cream)] shadow-[0_14px_30px_rgba(42,33,26,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
      >
        <MessageCircle className="h-4 w-4" />
        Escríbeme por WhatsApp
      </a>
    </div>
  );
}
