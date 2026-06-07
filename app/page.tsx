import type { Metadata } from "next";
import {
  About,
  AccountingDetail,
  AuthorityStrip,
  Contact,
  Faq,
  Footer,
  GastronomyDetail,
  Header,
  Hero,
  HowItWorks,
  MobileCta,
  Outcomes,
  Pricing,
  Services,
  Signals,
  Trajectory
} from "@/components/sections";
import { brand, contact, faqs } from "@/lib/data";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://gemarada.com"
  }
};

const professionalServiceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand.name,
  alternateName: brand.fullName,
  url: "https://gemarada.com",
  image: "https://gemarada.com/images/gema.jpg",
  description:
    "Consultoría en administración gastronómica y contabilidad general remota: optimización de recursos, costos de recetas, análisis de menús, inventarios y reportes claros para restaurantes, cafés, chefs, caterings y pequeños negocios.",
  areaServed: "Servicio remoto",
  knowsAbout: [
    "administración gastronómica",
    "costos de recetas",
    "análisis de menús",
    "optimización de recursos",
    "inventarios computarizados",
    "contabilidad general remota",
    "Balance General",
    "Estado de Resultados"
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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <main className="relative overflow-x-hidden pb-20 lg:pb-0">
        <Header />
        <Hero />
        <AuthorityStrip />
        <Signals />
        <Services />
        <GastronomyDetail />
        <AccountingDetail />
        <HowItWorks />
        <Trajectory />
        <Outcomes />
        <About />
        <Pricing />
        <Faq />
        <Contact />
        <Footer />
      </main>
      <MobileCta />
    </>
  );
}
