import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gemarada.com"),
  title: {
    default: "Krisna Gema Rada | Consultoría gastronómica y contabilidad remota",
    template: "%s | Krisna Gema Rada"
  },
  description:
    "Consultora senior en administración gastronómica y contabilidad general remota. Costeo de recetas, análisis de menú, control de inventarios y reportes claros para restaurantes, cafeterías y pequeños negocios.",
  keywords: [
    "consultoría gastronómica",
    "administración de restaurantes",
    "costeo de recetas",
    "análisis de menú",
    "control de costos para restaurantes",
    "contabilidad general remota",
    "contabilidad para pequeños negocios",
    "inventarios para restaurantes",
    "consultora administrativa Bolivia"
  ],
  authors: [{ name: "Krisna Gema Rada Rodríguez" }],
  creator: "Krisna Gema Rada Rodríguez",
  openGraph: {
    title: "Krisna Gema Rada | Orden y rentabilidad para tu negocio gastronómico",
    description:
      "Consultoría en administración gastronómica y contabilidad general remota. Costos bajo control, menú rentable y reportes claros, con acompañamiento cercano y remoto.",
    url: "https://gemarada.com",
    siteName: "Krisna Gema Rada",
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Krisna Gema Rada | Consultoría gastronómica y contabilidad remota",
    description:
      "Costos bajo control, menú rentable y reportes claros para restaurantes, cafeterías y pequeños negocios. Servicio 100% remoto."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${manrope.variable} ${cormorant.variable} bg-[var(--color-ink)] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
