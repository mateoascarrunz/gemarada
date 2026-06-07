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
    "Consultora senior en administración gastronómica y contabilidad general remota. Optimización de recursos, costos de recetas, análisis de menús, inventarios y reportes claros para restaurantes, cafés, chefs, caterings y pequeños negocios.",
  keywords: [
    "consultoría en administración gastronómica",
    "administración de restaurantes",
    "costos de recetas",
    "análisis de menús",
    "optimización de recursos gastronómicos",
    "inventarios para restaurantes",
    "contabilidad general remota",
    "contabilidad para pequeños negocios",
    "Balance General y Estado de Resultados",
    "consultora gastronómica Bolivia"
  ],
  authors: [{ name: "Krisna Gema Rada Rodríguez" }],
  creator: "Krisna Gema Rada Rodríguez",
  openGraph: {
    title: "Krisna Gema Rada | Orden y claridad para tu negocio gastronómico",
    description:
      "Consultoría en administración gastronómica y contabilidad general remota. Costos bajo control, menús rentables y reportes claros, con acompañamiento cercano y remoto.",
    url: "https://gemarada.com",
    siteName: "Krisna Gema Rada",
    locale: "es_BO",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Krisna Gema Rada | Consultoría gastronómica y contabilidad remota",
    description:
      "Costos bajo control, menús rentables y reportes claros para restaurantes, cafés y pequeños negocios. Más de 30 años de experiencia. Servicio 100% remoto."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es-BO" className="no-js" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${cormorant.variable} bg-[var(--color-cream)] text-[var(--color-text)] antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.remove('no-js');"
          }}
        />
        {children}
      </body>
    </html>
  );
}
