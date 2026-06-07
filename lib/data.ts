import {
  Boxes,
  CalendarRange,
  ChefHat,
  ClipboardCheck,
  ClipboardList,
  Coffee,
  FileSpreadsheet,
  HeartHandshake,
  Lightbulb,
  LineChart,
  Lock,
  type LucideIcon,
  Notebook,
  ReceiptText,
  Salad,
  Scale,
  ShieldCheck,
  Sparkles,
  Store,
  TrendingUp,
  UsersRound,
  UtensilsCrossed
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Brand & contact (public-facing only)                                        */
/* -------------------------------------------------------------------------- */

export const brand = {
  name: "Krisna Gema Rada",
  fullName: "Krisna Gema Rada Rodríguez",
  role: "Consultora senior en administración gastronómica y contabilidad general remota",
  shortRole: "Administración gastronómica y contabilidad remota",
  monogram: "K"
};

export const contact = {
  whatsappDisplay: "+591 65179887",
  whatsappNumber: "59165179887",
  email: "kgemarr@gmail.com",
  location: "Bolivia · Servicio remoto para toda Latinoamérica"
};

export function whatsappLink(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general: "Hola Krisna, vi tu sitio y quiero más información sobre tus servicios.",
  consulting:
    "Hola Krisna, me interesa tu consultoría en administración gastronómica. ¿Podemos conversar?",
  accounting:
    "Hola Krisna, me interesa tu servicio de contabilidad general remota. ¿Podemos conversar?",
  diagnosis:
    "Hola Krisna, quiero una conversación inicial para ordenar los números de mi negocio."
};

/* -------------------------------------------------------------------------- */
/* Navigation                                                                  */
/* -------------------------------------------------------------------------- */

export const navigation = [
  { label: "Servicios", href: "#servicios" },
  { label: "Método", href: "#metodo" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Inversión", href: "#inversion" },
  { label: "Preguntas", href: "#faq" }
];

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

export const heroHighlights = [
  "Costos y menú bajo control",
  "Reportes mensuales claros",
  "Acompañamiento cercano y remoto"
];

/* -------------------------------------------------------------------------- */
/* Authority / trust strip                                                     */
/* -------------------------------------------------------------------------- */

export const authorityStrip: { label: string; detail: string }[] = [
  { label: "Consultora senior", detail: "Gastronomía + contabilidad" },
  { label: "100% remoto", detail: "Trabaja desde donde estés" },
  { label: "Enfoque práctico", detail: "Decisiones, no teoría" },
  { label: "Confidencialidad", detail: "Acuerdo antes de empezar" }
];

/* -------------------------------------------------------------------------- */
/* Problem section                                                             */
/* -------------------------------------------------------------------------- */

export const problemIntro = {
  eyebrow: "El problema real",
  title: "Tu negocio vende, pero los números viven en el caos.",
  description:
    "La mayoría de restaurantes, cafeterías y pequeños negocios no fracasan por falta de clientes, sino por falta de orden. Sin control de costos ni reportes claros, las decisiones se toman a ciegas."
};

export const problemPoints: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ReceiptText,
    title: "No sabes cuánto cuesta realmente cada plato",
    description:
      "Sin costeo de recetas, fijas precios por intuición y trabajas duro sin saber qué te deja ganancia."
  },
  {
    icon: Boxes,
    title: "El inventario y las compras se te escapan",
    description:
      "Compras de más, hay mermas que no ves y el dinero se va en fugas difíciles de detectar."
  },
  {
    icon: FileSpreadsheet,
    title: "Tu contabilidad solo sirve para impuestos",
    description:
      "Cumples con el fisco, pero no tienes una foto real de tu salud financiera para decidir."
  },
  {
    icon: CalendarRange,
    title: "No te queda tiempo para los números",
    description: "Vives operando el día a día y la administración queda siempre para “después”."
  }
];

/* -------------------------------------------------------------------------- */
/* Audience / ideal clients                                                     */
/* -------------------------------------------------------------------------- */

export const idealClients: { icon: LucideIcon; label: string }[] = [
  { icon: UtensilsCrossed, label: "Restaurantes que quieren ordenar costos y operación" },
  { icon: Coffee, label: "Cafeterías que buscan procesos más rentables" },
  { icon: ChefHat, label: "Chefs y emprendedores gastronómicos" },
  { icon: Salad, label: "Servicios de catering y eventos" },
  { icon: Store, label: "Pequeños negocios sin tiempo para sus números" },
  { icon: LineChart, label: "Personas que quieren entender su salud financiera real" }
];

/* -------------------------------------------------------------------------- */
/* Services overview (two core services)                                        */
/* -------------------------------------------------------------------------- */

export const services: {
  id: string;
  anchor: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  price: string;
  pricePeriod: string;
  ctaMessage: string;
  highlights: string[];
}[] = [
  {
    id: "gastronomia",
    anchor: "#consultoria-gastronomica",
    icon: ChefHat,
    eyebrow: "Servicio 1",
    title: "Consultoría en administración gastronómica",
    description:
      "Orden, rentabilidad y estructura para tu operación gastronómica. Trabajamos sobre lo que de verdad mueve tu ganancia: costos, menú, inventarios y procesos.",
    price: "USD 10",
    pricePeriod: "por hora",
    ctaMessage: waMessages.consulting,
    highlights: ["Optimización de recursos", "Análisis de menú", "Costeo de recetas"]
  },
  {
    id: "contabilidad",
    anchor: "#contabilidad-remota",
    icon: Scale,
    eyebrow: "Servicio 2",
    title: "Contabilidad general remota",
    description:
      "Claridad financiera para personas, emprendedores y pequeños negocios. Un registro ordenado de tu patrimonio y tus resultados, más allá de lo tributario.",
    price: "USD 80",
    pricePeriod: "por mes",
    ctaMessage: waMessages.accounting,
    highlights: [
      "Activos, pasivos, ingresos y egresos",
      "Reportes mensuales y anuales",
      "Confidencialidad garantizada"
    ]
  }
];

/* -------------------------------------------------------------------------- */
/* Gastronomic consulting — detailed                                           */
/* -------------------------------------------------------------------------- */

export const gastronomyDetail = {
  eyebrow: "Consultoría gastronómica",
  title: "Convierte tu cocina en un negocio rentable y ordenado.",
  description:
    "Pensado para restaurantes, cafeterías, chefs independientes, catering y nuevos proyectos. Aterrizamos cada recomendación en acciones simples que puedes aplicar de inmediato.",
  price: "USD 10",
  pricePeriod: "por hora",
  features: [
    {
      icon: TrendingUp,
      title: "Optimización de recursos",
      description: "Reducimos fugas en compras, mermas y tiempos para que cada peso rinda más."
    },
    {
      icon: Salad,
      title: "Análisis de menú",
      description: "Identificamos los platos que dan ganancia y los que te restan, para ajustar tu carta."
    },
    {
      icon: ClipboardCheck,
      title: "Costeo de recetas",
      description: "Sabrás cuánto cuesta cada plato y a qué precio realmente conviene venderlo."
    },
    {
      icon: Boxes,
      title: "Inventarios computarizados",
      description: "Control de stock ordenado y confiable para comprar mejor y evitar pérdidas."
    },
    {
      icon: Notebook,
      title: "Manuales de procesos simples",
      description: "Documentamos tus rutinas clave para que el negocio no dependa de la memoria."
    },
    {
      icon: Sparkles,
      title: "Acompañamiento para expandir",
      description: "Te apoyo para crecer o abrir nuevos puntos con bases sólidas y decisiones claras."
    }
  ]
};

/* -------------------------------------------------------------------------- */
/* Remote accounting — detailed                                                */
/* -------------------------------------------------------------------------- */

export const accountingDetail = {
  eyebrow: "Contabilidad general remota",
  title: "Entiende tu salud financiera real, mes a mes.",
  description:
    "Para personas, emprendedores y pequeños negocios que necesitan claridad financiera. Llevamos un registro ordenado de tu patrimonio y tus resultados con seguimiento cercano.",
  price: "USD 80",
  pricePeriod: "por mes",
  includes: [
    {
      icon: Scale,
      title: "Registro completo",
      description: "Activos, pasivos, ingresos, egresos y cuentas de ajuste, ordenados con criterio."
    },
    {
      icon: FileSpreadsheet,
      title: "Reportes mensuales y anuales",
      description: "Recibes informes claros para entender tu situación y decidir con confianza."
    },
    {
      icon: Lock,
      title: "Confidencialidad garantizada",
      description: "Firmamos un acuerdo de confidencialidad antes de recibir tu información."
    },
    {
      icon: HeartHandshake,
      title: "Acompañamiento cercano",
      description: "No estás sola en el proceso: cuentas con seguimiento humano y respuestas claras."
    }
  ],
  note: "Importante: este servicio brinda claridad y orden financiero, y no reemplaza tus obligaciones tributarias ni la presentación de impuestos."
};

/* -------------------------------------------------------------------------- */
/* Work method / process                                                       */
/* -------------------------------------------------------------------------- */

export const steps = [
  {
    number: "01",
    title: "Conversación inicial",
    description: "Hablamos de tu negocio, tus dolores y tus metas para definir el mejor punto de partida."
  },
  {
    number: "02",
    title: "Acuerdo y confidencialidad",
    description: "Definimos el alcance y firmamos el acuerdo de confidencialidad antes de recibir tu información."
  },
  {
    number: "03",
    title: "Orden y registro",
    description: "Organizo tus costos, inventarios o cuentas y convierto el desorden en información útil."
  },
  {
    number: "04",
    title: "Reportes y decisiones",
    description: "Recibes reportes claros y recomendaciones prácticas, con seguimiento cercano y constante."
  }
];

/* -------------------------------------------------------------------------- */
/* Case studies / selected experience                                          */
/* (Representative scenarios — editables con casos reales)                      */
/* -------------------------------------------------------------------------- */

export const caseStudies: {
  icon: LucideIcon;
  sector: string;
  challenge: string;
  outcome: string;
}[] = [
  {
    icon: UtensilsCrossed,
    sector: "Restaurante familiar",
    challenge: "Vendía bien pero no sabía qué platos dejaban ganancia ni a dónde se iba el dinero.",
    outcome: "Costeo de recetas y análisis de menú para enfocar la carta en los platos más rentables."
  },
  {
    icon: Coffee,
    sector: "Cafetería de especialidad",
    challenge: "Compras sin control e inventario impreciso que generaban mermas constantes.",
    outcome: "Inventario computarizado y procesos simples para comprar mejor y reducir pérdidas."
  },
  {
    icon: Store,
    sector: "Emprendimiento pequeño",
    challenge: "Contabilidad solo para impuestos, sin una foto real de su situación financiera.",
    outcome: "Contabilidad general remota con reportes mensuales para decidir con claridad."
  }
];

export const caseStudiesNote =
  "Escenarios representativos del tipo de trabajo de Krisna. Esta sección está lista para reemplazarse con casos reales cuando los clientes lo autoricen.";

/* -------------------------------------------------------------------------- */
/* About Krisna                                                                */
/* -------------------------------------------------------------------------- */

export const about = {
  eyebrow: "Sobre Krisna",
  title: "Experiencia senior con criterio práctico y trato humano.",
  paragraphs: [
    "Soy Krisna Gema Rada, consultora especializada en administración gastronómica y contabilidad general remota. Acompaño a restaurantes, cafeterías, chefs, servicios de catering y pequeños negocios a poner orden en sus números y operar con más rentabilidad.",
    "Mi enfoque es simple y cercano: traduzco la información dispersa de tu negocio en costos claros, inventarios ordenados y reportes que puedes entender. No te entrego teoría difícil de aplicar, sino decisiones concretas para tu día a día.",
    "Todo el trabajo es remoto, con seguimiento constante y total confidencialidad. Mi objetivo es que dejes de improvisar y empieces a crecer con bases sólidas."
  ],
  values: [
    { icon: Lightbulb, label: "Criterio práctico" },
    { icon: HeartHandshake, label: "Trato humano y cercano" },
    { icon: ShieldCheck, label: "Confidencialidad total" }
  ]
};

/* -------------------------------------------------------------------------- */
/* Pricing / investment                                                        */
/* -------------------------------------------------------------------------- */

export const pricingPlans: {
  id: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaMessage: string;
  featured: boolean;
}[] = [
  {
    id: "gastronomia",
    icon: ChefHat,
    eyebrow: "Consultoría gastronómica",
    title: "Administración gastronómica",
    price: "USD 10",
    period: "por hora",
    description: "Ideal para ordenar costos, menú, inventarios y procesos a tu propio ritmo.",
    features: [
      "Optimización de recursos",
      "Análisis de menú y costeo de recetas",
      "Inventarios computarizados",
      "Manuales de procesos simples",
      "Acompañamiento para expandir tu negocio"
    ],
    ctaMessage: waMessages.consulting,
    featured: false
  },
  {
    id: "contabilidad",
    icon: Scale,
    eyebrow: "Contabilidad remota",
    title: "Contabilidad general remota",
    price: "USD 80",
    period: "por mes",
    description: "Para tener claridad financiera continua, con reportes y seguimiento mensual.",
    features: [
      "Registro de activos, pasivos, ingresos y egresos",
      "Cuentas de ajuste ordenadas",
      "Reportes mensuales y anuales incluidos",
      "Acuerdo de confidencialidad",
      "Acompañamiento cercano y remoto"
    ],
    ctaMessage: waMessages.accounting,
    featured: true
  }
];

export const pricingNote =
  "Sin sorpresas: defines el alcance en la conversación inicial. La contabilidad remota no reemplaza tus obligaciones tributarias.";

/* -------------------------------------------------------------------------- */
/* Trust points (why work with Krisna)                                         */
/* -------------------------------------------------------------------------- */

export const trustPoints: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ClipboardList,
    title: "Visión práctica de negocio",
    description: "Recomendaciones útiles para el día a día, no teorías difíciles de aplicar."
  },
  {
    icon: HeartHandshake,
    title: "Atención personal y directa",
    description: "Hablas con Krisna y recibes seguimiento cercano, claro y humano."
  },
  {
    icon: ShieldCheck,
    title: "Confidencialidad garantizada",
    description: "Firmamos un acuerdo antes de recibir cualquier información de tu negocio."
  },
  {
    icon: UsersRound,
    title: "Servicio 100% remoto",
    description: "Trabajas con comodidad desde donde estés, por WhatsApp, llamadas y correo."
  }
];

/* -------------------------------------------------------------------------- */
/* Testimonials (editable placeholders)                                        */
/* -------------------------------------------------------------------------- */

export const testimonials = [
  {
    quote:
      "Con Krisna dejamos de trabajar con información suelta. Ahora entendemos nuestros costos y decidimos con calma.",
    name: "Cliente de restaurante",
    role: "Testimonio editable"
  },
  {
    quote:
      "Su acompañamiento es cercano y muy claro. Nos ayudó a poner orden en compras, inventario y reportes.",
    name: "Cliente de cafetería",
    role: "Testimonio editable"
  },
  {
    quote:
      "Lo más valioso es que todo aterriza en acciones simples. Se nota la experiencia y el criterio.",
    name: "Cliente emprendedor",
    role: "Testimonio editable"
  }
];

/* -------------------------------------------------------------------------- */
/* FAQ                                                                         */
/* -------------------------------------------------------------------------- */

export const faqs = [
  {
    question: "¿La contabilidad remota reemplaza mis impuestos?",
    answer:
      "No. El servicio te da claridad y orden financiero —patrimonio, ingresos, egresos y reportes— pero no reemplaza tus obligaciones tributarias ni la presentación de impuestos."
  },
  {
    question: "¿Cómo cuidan la confidencialidad de mi información?",
    answer:
      "Firmamos un acuerdo de confidencialidad antes de recibir cualquier dato de tu negocio. Tu información se maneja con total reserva."
  },
  {
    question: "¿El servicio es totalmente remoto?",
    answer:
      "Sí. Trabajamos a distancia con contacto frecuente por WhatsApp, llamadas y correo, sin importar dónde estés."
  },
  {
    question: "¿Cómo se cobra cada servicio?",
    answer:
      "La consultoría en administración gastronómica es de USD 10 por hora y la contabilidad general remota es de USD 80 al mes. Definimos el alcance en la conversación inicial."
  },
  {
    question: "¿Qué tipo de negocios pueden trabajar con Krisna?",
    answer:
      "Restaurantes, cafeterías, chefs independientes, servicios de catering, pequeños negocios y emprendedores que quieran ordenar sus números y crecer."
  },
  {
    question: "¿Por dónde empiezo?",
    answer:
      "Escríbeme por WhatsApp para una conversación inicial. Conversamos sobre tu negocio y definimos juntos el mejor punto de partida."
  }
];
