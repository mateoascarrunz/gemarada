"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { whatsappLink } from "@/lib/data";

const serviceOptions = [
  "Administración gastronómica",
  "Contabilidad general remota",
  "No estoy seguro/a todavía"
];

const fieldClass =
  "w-full rounded-2xl border border-[var(--color-on-dark-line)] bg-white/[0.06] px-4 text-sm text-[var(--color-on-dark)] outline-none placeholder:text-[rgba(246,239,227,0.4)] focus:border-[var(--color-gold)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const lines = [
      `Hola Krisna, soy ${name || "—"}.`,
      `Servicio de interés: ${service}.`,
      business ? `Mi negocio: ${business}.` : null,
      message ? `Lo que necesito: ${message}` : null,
      email ? `Mi correo: ${email}` : null
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.8rem] border border-[var(--color-on-dark-line)] bg-white/[0.04] p-5 backdrop-blur-md sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[var(--color-on-dark)]">Nombre</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Tu nombre"
            className={`h-12 ${fieldClass}`}
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[var(--color-on-dark)]">Correo</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="tu@correo.com"
            className={`h-12 ${fieldClass}`}
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-medium text-[var(--color-on-dark)]">Servicio de interés</span>
        <select
          name="service"
          value={service}
          onChange={(event) => setService(event.target.value)}
          className={`h-12 ${fieldClass}`}
        >
          {serviceOptions.map((option) => (
            <option key={option} value={option} className="text-[var(--color-heading)]">
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-medium text-[var(--color-on-dark)]">Tipo de negocio</span>
        <input
          type="text"
          name="business"
          value={business}
          onChange={(event) => setBusiness(event.target.value)}
          placeholder="Ej. cafetería, restaurante, emprendimiento"
          className={`h-12 ${fieldClass}`}
        />
      </label>

      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-medium text-[var(--color-on-dark)]">Cuéntame qué necesitas</span>
        <textarea
          name="message"
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Describe brevemente tu negocio y el tipo de apoyo que buscas."
          className={`py-3 ${fieldClass}`}
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#c79a4e,#a9772e)] px-6 py-3 text-sm font-semibold text-[#241a12] shadow-[0_16px_34px_rgba(0,0,0,0.28)] hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(0,0,0,0.34)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
      >
        <Send className="h-4 w-4" />
        Enviar por WhatsApp
      </button>

      <p className="mt-4 text-xs leading-6 text-[var(--color-on-dark-muted)]">
        Al enviar, se abre WhatsApp con tu mensaje ya redactado a partir de estos datos. También
        puedes escribir directamente al número o correo de contacto.
      </p>
    </form>
  );
}
