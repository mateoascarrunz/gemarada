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
  title: "Gema Rada | Consultora administrativa y gastronómica para pequeños negocios",
  description:
    "Consultora administrativa y gastronómica con más de 30 años de experiencia. Apoyo contable remoto, control de costos y organización administrativa para emprendedores, restaurantes y pequeños negocios.",
  keywords: [
    "consultora administrativa",
    "apoyo contable remoto",
    "consultoría gastronómica",
    "control de costos para restaurantes",
    "organización administrativa para emprendedores",
    "asistencia contable para pequeños negocios"
  ],
  openGraph: {
    title: "Gema Rada | Orden, control y acompañamiento para hacer crecer tu negocio",
    description:
      "Servicios personalizados de apoyo administrativo, contable y consultoría gastronómica para pequeños negocios y restaurantes.",
    url: "https://gemarada.com",
    siteName: "Gema Rada",
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Gema Rada | Consultora administrativa y gastronómica",
    description:
      "Más de 30 años ayudando a pequeños negocios, emprendedores y restaurantes a trabajar con orden y mejores decisiones."
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
