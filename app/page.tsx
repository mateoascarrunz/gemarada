import type { Metadata } from "next";
import {
  About,
  AccountingDetail,
  AuthorityStrip,
  CaseStudies,
  Contact,
  Faq,
  Footer,
  GastronomyDetail,
  Header,
  Hero,
  HowItWorks,
  IdealClients,
  Pricing,
  Problem,
  Services,
  Testimonials
} from "@/components/sections";
import { brand, contact } from "@/lib/data";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://gemarada.com"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand.name,
  alternateName: brand.fullName,
  url: "https://gemarada.com",
  description:
    "Consultoría en administración gastronómica y contabilidad general remota: costeo de recetas, análisis de menú, control de inventarios y reportes claros para restaurantes, cafeterías y pequeños negocios.",
  areaServed: "Servicio remoto",
  knowsAbout: [
    "consultoría gastronómica",
    "costeo de recetas",
    "análisis de menú",
    "control de costos para restaurantes",
    "contabilidad general remota",
    "inventarios computarizados",
    "contabilidad para pequeños negocios"
  ],
  founder: {
    "@type": "Person",
    name: brand.fullName,
    jobTitle: brand.role
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: `+${contact.whatsappNumber}`,
      email: contact.email,
      availableLanguage: ["Spanish"]
    }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Consultoría en administración gastronómica",
        price: "10",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "10",
          priceCurrency: "USD",
          unitText: "hora"
        }
      },
      {
        "@type": "Offer",
        name: "Contabilidad general remota",
        price: "80",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "80",
          priceCurrency: "USD",
          unitText: "mes"
        }
      }
    ]
  }
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
        <AuthorityStrip />
        <Problem />
        <IdealClients />
        <Services />
        <GastronomyDetail />
        <AccountingDetail />
        <HowItWorks />
        <CaseStudies />
        <Testimonials />
        <About />
        <Pricing />
        <Faq />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
