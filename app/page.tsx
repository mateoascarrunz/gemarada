import type { Metadata } from "next";
import {
  Benefits,
  Contact,
  Faq,
  Footer,
  Header,
  Hero,
  HowItWorks,
  IdealClients,
  Pricing,
  Services,
  Testimonials,
  Trust
} from "@/components/sections";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://gemarada.com"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Gema Rada",
  url: "https://gemarada.com",
  description:
    "Consultora administrativa y gastronómica con más de 30 años de experiencia en apoyo contable remoto, organización administrativa y control de costos para pequeños negocios.",
  areaServed: "Servicio remoto",
  knowsAbout: [
    "consultora administrativa",
    "apoyo contable remoto",
    "consultoría gastronómica",
    "control de costos para restaurantes",
    "organización administrativa para emprendedores",
    "asistencia contable para pequeños negocios"
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+34 600 000 000",
      email: "hola@gemarada.com",
      availableLanguage: ["Spanish"]
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative overflow-x-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Services />
        <HowItWorks />
        <Pricing />
        <Trust />
        <IdealClients />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
