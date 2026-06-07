import {
  Boxes,
  CalendarRange,
  ChefHat,
  ClipboardCheck,
  Eye,
  FileSpreadsheet,
  HeartHandshake,
  LineChart,
  type LucideIcon,
  Notebook,
  Salad,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Brand & contact (public-facing only)                                        */
/* -------------------------------------------------------------------------- */

export const brand = {
  name: "Krisna Gema Rada",
  fullName: "Krisna Gema Rada Rodríguez",
  role: "Consultora senior en administración gastronómica y contabilidad general remota",
  experienceClaim:
    "Más de 30 años de experiencia en administración, gastronomía, contabilidad y atención al cliente.",
  monogram: "K"
};

export const contact = {
  whatsappDisplay: "+591 65179887",
  whatsappNumber: "59165179887",
  email: "kgemarr@gmail.com",
  location: "Bolivia · Atención remota"
};

export function whatsappLink(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general: "Hola Krisna, vi tu sitio y me gustaría conversar sobre cómo ordenar mi negocio.",
  consulting:
    "Hola Krisna, me interesa tu consultoría en administración gastronómica. ¿Podemos conversar?",
  accounting:
    "Hola Krisna, me interesa tu servicio de contabilidad general remota. ¿Podemos conversar?",
  diagnosis: "Hola Krisna, quiero ordenar los números de mi negocio. ¿Cuándo podemos hablar?"
};

export const ctaLabel = "Escríbeme por WhatsApp";

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

export const hero = {
  eyebrow: "Consultora senior · +30 años de experiencia",
  titleLead: "Orden y claridad",
  titleAccent: "para que tu negocio funcione mejor.",
  subtitle:
    "Conecto tu cocina con tus números: pongo en orden costos, inventarios y cuentas para que decidas con información real.",
  dualServices: [
    { label: "Administración gastronómica", href: "#consultoria-gastronomica" },
    { label: "Contabilidad general remota", href: "#contabilidad-remota" }
  ]
};

export const heroStats: { value: string; label: string }[] = [
  { value: "+30 años", label: "de experiencia real" },
  { value: "100%", label: "remoto" },
  { value: "Confidencial", label: "acuerdo previo" }
];

/* -------------------------------------------------------------------------- */
/* Authority / trust strip                                                     */
/* -------------------------------------------------------------------------- */

export const authorityStrip: { label: string; detail: string }[] = [
  { label: "+30 años", detail: "Gastronomía y administración" },
  { label: "Ojo clínico", detail: "Veo dónde se pierde el negocio" },
  { label: "100% remoto", detail: "Por WhatsApp y correo" },
  { label: "Confidencialidad", detail: "Acuerdo antes de empezar" }
];

/* -------------------------------------------------------------------------- */
/* Signals — when a business needs order                                       */
/* -------------------------------------------------------------------------- */

export const signals = {
  eyebrow: "Lo que veo todos los días",
  title: "Señales de que tu negocio necesita orden",
  description:
    "Si reconoces dos o tres de estas situaciones, no es falta de esfuerzo: es falta de estructura.",
  items: [
    "Costos que no se ven con claridad",
    "Inventarios que se pierden o dependen de la memoria",
    "Menús sin costos reales por receta",
    "Equipo trabajando sin procesos escritos",
    "Mucho trabajo diario y poca visión financiera",
    "Cuentas personales y del negocio mezcladas",
    "Decisiones tomadas sin reportes claros"
  ],
  closing: "Ordenar no es complicar. Es ver con claridad y decidir mejor."
};

/* -------------------------------------------------------------------------- */
/* Services intro                                                              */
/* -------------------------------------------------------------------------- */

export const servicesIntro = {
  eyebrow: "Servicios",
  title: "Elige el tipo de orden que necesita tu negocio",
  description:
    "Dos formas de trabajar juntos: una para tu operación gastronómica y otra para tus números. Puedes empezar por donde más te urge.",
  audience:
    "Acompaño a restaurantes, cafés, chefs, caterings, emprendedores y pequeños negocios que quieren crecer con bases firmes."
};

/* -------------------------------------------------------------------------- */
/* Services overview (two core services)                                        */
/* -------------------------------------------------------------------------- */

export const services: {
  id: string;
  anchor: string;
  icon: LucideIcon;
  track: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  forWho: string;
  problem: string;
  includes: string[];
  price: string;
  pricePeriod: string;
  priceNote: string;
  ctaMessage: string;
}[] = [
  {
    id: "gastronomia",
    anchor: "#consultoria-gastronomica",
    icon: ChefHat,
    track: "Operación y rentabilidad",
    image: "/images/gastronomia-consultoria.svg",
    imageAlt: "Consultoría en administración gastronómica: costos, inventarios y procesos",
    eyebrow: "Servicio 1",
    title: "Administración gastronómica",
    forWho: "Para restaurantes, cafés, chefs, caterings y emprendedores con buena cocina.",
    problem: "Pongo orden en costos, inventarios y procesos para que el negocio sea rentable.",
    includes: [
      "Costos de recetas y análisis de menús",
      "Inventarios computarizados y optimización de recursos",
      "Manuales simples de procesos para tu equipo"
    ],
    price: "USD 10",
    pricePeriod: "por hora",
    priceNote: "a tu ritmo, según lo que tu negocio necesite",
    ctaMessage: waMessages.consulting
  },
  {
    id: "contabilidad",
    anchor: "#contabilidad-remota",
    icon: Scale,
    track: "Claridad financiera",
    image: "/images/contabilidad-remota.svg",
    imageAlt: "Contabilidad general remota: balance, estado de resultados y reportes",
    eyebrow: "Servicio 2",
    title: "Contabilidad general remota",
    forWho: "Para personas, emprendedores y pequeños negocios sin tiempo para sus cuentas.",
    problem: "Llevo tus números y te muestro tu situación financiera real, mes a mes.",
    includes: [
      "Registro de activos, pasivos, ingresos y egresos",
      "Balance General y Estado de Resultados",
      "Reportes mensuales y anuales incluidos"
    ],
    price: "USD 80",
    pricePeriod: "por mes",
    priceNote: "todo incluido, sin cobros extra",
    ctaMessage: waMessages.accounting
  }
];

/* -------------------------------------------------------------------------- */
/* Gastronomic consulting — detailed                                           */
/* -------------------------------------------------------------------------- */

export const gastronomyDetail = {
  eyebrow: "Servicio 1 · Administración gastronómica",
  title: "Cuando la administración acompaña al talento, el negocio respira mejor.",
  description:
    "Apoyo el arte culinario ocupándome del lado administrativo: orden, control y estructura, de forma simple y práctica.",
  quote:
    "Muchos chefs tienen el talento, la comida y el sueño. Lo que falta es alguien que ponga orden en los números.",
  image: "/images/gastronomia-consultoria.svg",
  imageAlt: "Costos, inventarios y procesos ordenados para un negocio gastronómico",
  price: "USD 10",
  pricePeriod: "por hora",
  features: [
    {
      icon: TrendingUp,
      title: "Optimización de recursos",
      description: "Para que insumos, equipo y proveedores rindan más."
    },
    {
      icon: Salad,
      title: "Análisis de menús",
      description: "Sabes qué platos suman y cuáles te restan."
    },
    {
      icon: ClipboardCheck,
      title: "Costos de recetas",
      description: "Precios definidos con números, no con intuición."
    },
    {
      icon: Boxes,
      title: "Inventarios computarizados",
      description: "Stock confiable, sin fugas ni sorpresas."
    },
    {
      icon: Notebook,
      title: "Manuales simples de procesos",
      description: "Tu operación deja de depender de la memoria."
    },
    {
      icon: Sparkles,
      title: "Expansión del negocio",
      description: "Crecer o abrir nuevos puntos con bases sólidas."
    }
  ]
};

/* -------------------------------------------------------------------------- */
/* Remote accounting — detailed                                                */
/* -------------------------------------------------------------------------- */

export const accountingDetail = {
  eyebrow: "Servicio 2 · Contabilidad general remota",
  title: "Entiende tu situación financiera real, mes a mes.",
  description:
    "Yo hago el trabajo por ti: no necesitas comprar ni aprender ningún sistema. Tú me envías la información y recibes reportes claros.",
  image: "/images/contabilidad-remota.svg",
  imageAlt: "Balance General, Estado de Resultados y reportes mensuales ordenados",
  price: "USD 80",
  pricePeriod: "por mes",
  includes: [
    {
      icon: Scale,
      title: "Registro completo",
      description: "Activos, pasivos, ingresos, egresos y cuentas de regulación, ordenados con criterio."
    },
    {
      icon: FileSpreadsheet,
      title: "Balance y resultados",
      description: "Balance General y Estado de Resultados para ver tu negocio con claridad."
    },
    {
      icon: CalendarRange,
      title: "Reportes incluidos",
      description: "Informes mensuales y anuales, sin costo adicional."
    },
    {
      icon: HeartHandshake,
      title: "Acompañamiento cercano",
      description: "Respuestas claras por WhatsApp o correo, en todo el proceso."
    }
  ],
  confidentiality: "El trabajo comienza después de firmar un acuerdo de confidencialidad.",
  note: "Este servicio no reemplaza tus obligaciones tributarias ni la contabilidad fiscal: las complementa, ayudándote a entender tu salud financiera real."
};

/* -------------------------------------------------------------------------- */
/* Work method / process                                                       */
/* -------------------------------------------------------------------------- */

export const steps = [
  {
    number: "01",
    title: "Conversación inicial",
    description: "Hablamos de tu negocio y lo que quieres lograr. Sin compromiso."
  },
  {
    number: "02",
    title: "Acuerdo y confidencialidad",
    description: "Definimos el alcance y firmamos un acuerdo antes de recibir tu información."
  },
  {
    number: "03",
    title: "Orden y registro",
    description: "Organizo tus costos, inventarios o cuentas en información clara."
  },
  {
    number: "04",
    title: "Reportes y recomendaciones",
    description: "Recibes reportes claros y recomendaciones prácticas, con seguimiento cercano."
  }
];

/* -------------------------------------------------------------------------- */
/* Trajectory                                                                   */
/* -------------------------------------------------------------------------- */

export const trajectoryIntro = {
  eyebrow: "Trayectoria",
  title: "Más de tres décadas en cocinas, barras, salones y oficinas reales.",
  description:
    "Una carrera construida paso a paso: de la operación diaria a la gerencia general y la consultoría."
};

export const trajectoryEras: { range: string; title: string; summary: string }[] = [
  {
    range: "1983–1991",
    title: "Primeros años en el oficio gastronómico",
    summary: "Aprendizaje de cocina, barra, salón y atención al cliente en operación real."
  },
  {
    range: "1991–1998",
    title: "Chalet La Suisse · orden contable y recuperación",
    summary:
      "Registros contables, control de inventarios y recuperación administrativa del negocio."
  },
  {
    range: "1998–2008",
    title: "Creación, franquicias y administración",
    summary:
      "Conceptos de restaurantes y bares, implementación de franquicias y gestión administrativa."
  },
  {
    range: "2008–2022",
    title: "Gastro Suisse · Chalet La Suisse",
    summary:
      "Gerencia administrativa y general: desarrollo del negocio, recursos, servicio y posicionamiento."
  },
  {
    range: "2022–2026",
    title: "Consultoría gastronómica independiente",
    summary:
      "Catering diplomático, cafeterías, chefs independientes y orden contable a la medida."
  }
];

/* -------------------------------------------------------------------------- */
/* Featured experience                                                          */
/* -------------------------------------------------------------------------- */

export const experienceHighlight = {
  eyebrow: "Experiencia destacada",
  name: "Gastro Suisse · Restaurant Chalet La Suisse",
  scope: "Gerencia general y administrativa",
  description:
    "Desarrollo del negocio, optimización de recursos, fidelización de clientes, excelencia en el servicio, posicionamiento de marca y participación en el proceso de transición del negocio.",
  image: "/images/trayectoria-gastronomica.svg",
  imageAlt: "Gerencia general y administrativa en Chalet La Suisse"
};

export const otherEngagements: { name: string; scope: string }[] = [
  { name: "La Pequeña de Alfredo", scope: "Apertura integral" },
  {
    name: "Catering para embajadas y cuerpo diplomático · con el Chef Marco Bonifaz",
    scope: "Coordinación y servicio de eventos"
  },
  { name: "Plaza Gastronómica El Bosque", scope: "Operación y optimización" },
  { name: "La Gitana Bar-Restaurante", scope: "Creación de concepto" },
  { name: "Rock and Fellers", scope: "Implementación de franquicia" },
  { name: "Restaurant La Mostaza", scope: "Orden financiero" },
  { name: "Chef independiente · Querétaro", scope: "Contabilidad de catering" }
];

/* -------------------------------------------------------------------------- */
/* Outcomes — what changes with order                                          */
/* -------------------------------------------------------------------------- */

export const outcomesIntro = {
  eyebrow: "Con un proceso ordenado",
  title: "Lo que cambia cuando hay orden",
  description:
    "No es más trabajo para ti, es más claridad para decidir. Esto es lo que sí puedes esperar."
};

export const outcomes: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ClipboardCheck,
    title: "Sabes qué deja margen",
    description: "Costos de recetas y análisis de menú para enfocar lo rentable."
  },
  {
    icon: Eye,
    title: "Ves a dónde se va el dinero",
    description: "Sabrás qué gastos se repiten, qué recursos se pierden y dónde optimizar."
  },
  {
    icon: Notebook,
    title: "Tu equipo tiene procesos claros",
    description: "Manuales simples para que la operación no dependa de la memoria."
  },
  {
    icon: FileSpreadsheet,
    title: "Recibes reportes que entiendes",
    description: "Balance General y Estado de Resultados claros para decidir con datos."
  },
  {
    icon: LineChart,
    title: "Conoces tu situación real",
    description: "Más allá de los impuestos, entiendes la salud financiera de tu negocio."
  },
  {
    icon: HeartHandshake,
    title: "Ganas tiempo y tranquilidad",
    description: "Yo me ocupo de los números; tú te enfocas en lo que amas hacer."
  }
];

/* -------------------------------------------------------------------------- */
/* About Krisna                                                                */
/* -------------------------------------------------------------------------- */

export const about = {
  eyebrow: "Sobre Krisna",
  title: "Más de 30 años poniendo orden donde el día a día no deja tiempo para mirar.",
  paragraphs: [
    "Soy Krisna Gema Rada, consultora senior en administración gastronómica y contabilidad general remota. He trabajado en restaurantes, bares, caterings, contabilidad, atención al cliente y operaciones, y conozco de cerca el esfuerzo de abrir y sostener un negocio.",
    "Trabajo de forma simple, práctica y cercana, con total confidencialidad. Mi objetivo es que dejes de improvisar, entiendas tu situación real y tomes mejores decisiones."
  ],
  quote:
    "Tengo un ojo clínico para encontrar lo que no está funcionando: dónde se pierden recursos, qué procesos no están claros y qué costos no se ven.",
  values: [
    { icon: Eye, label: "Ojo clínico" },
    { icon: HeartHandshake, label: "Trato humano y cercano" },
    { icon: ShieldCheck, label: "Confidencialidad total" }
  ],
  image: "/images/krisna-portrait-about.jpg",
  imageAlt: "Retrato de Krisna Gema Rada Rodríguez"
};

/* -------------------------------------------------------------------------- */
/* Pricing / investment                                                        */
/* -------------------------------------------------------------------------- */

export const pricingPlans: {
  id: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  tagline: string;
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
    tagline: "Por hora · a tu ritmo",
    price: "USD 10",
    period: "por hora",
    description: "Ideal para ordenar recursos, menús, costos, inventarios y procesos a tu ritmo.",
    features: [
      "Optimización de recursos, insumos y proveedores",
      "Análisis de menús y costos de recetas",
      "Inventarios computarizados",
      "Manuales simples de procesos",
      "Acompañamiento para expandir el negocio"
    ],
    ctaMessage: waMessages.consulting,
    featured: false
  },
  {
    id: "contabilidad",
    icon: Scale,
    eyebrow: "Contabilidad remota",
    title: "Contabilidad general remota",
    tagline: "Mensual · claridad continua",
    price: "USD 80",
    period: "por mes",
    description: "Para tener claridad financiera continua, con reportes y seguimiento mensual.",
    features: [
      "Registro de activos, pasivos, ingresos y egresos",
      "Balance General y Estado de Resultados",
      "Reportes mensuales y anuales incluidos",
      "Acuerdo de confidencialidad",
      "Yo hago el trabajo: no aprendes ningún sistema"
    ],
    ctaMessage: waMessages.accounting,
    featured: true
  }
];

export const pricingNote =
  "Definimos el alcance en una conversación inicial, sin compromiso. La contabilidad general remota complementa —no reemplaza— tus obligaciones tributarias.";

/* -------------------------------------------------------------------------- */
/* FAQ                                                                         */
/* -------------------------------------------------------------------------- */

export const faqs = [
  {
    question: "¿La contabilidad remota reemplaza mis impuestos?",
    answer:
      "No. Complementa tu contabilidad fiscal: te ayuda a entender tu situación financiera real —patrimonio, ingresos, egresos, Balance General y Estado de Resultados—, pero no reemplaza tus obligaciones tributarias."
  },
  {
    question: "¿Tengo que comprar o aprender un sistema contable?",
    answer:
      "No. Yo hago el trabajo por ti. Tú me envías la información por WhatsApp o correo y yo te entrego los reportes ya ordenados."
  },
  {
    question: "¿Los reportes mensuales y anuales tienen costo adicional?",
    answer: "No. Están incluidos en la mensualidad de USD 80, sin cobros extra."
  },
  {
    question: "¿Cómo cuidas la confidencialidad de mi información?",
    answer:
      "El trabajo comienza después de firmar un acuerdo de confidencialidad. Tu información se maneja con total reserva."
  },
  {
    question: "¿Cómo se cobra cada servicio?",
    answer:
      "La consultoría en administración gastronómica es de USD 10 por hora y la contabilidad general remota, USD 80 al mes. Definimos el alcance en la conversación inicial."
  },
  {
    question: "¿Con qué negocios trabajas?",
    answer:
      "Restaurantes, cafés, chefs, caterings, emprendedores y pequeños negocios que quieran ordenar sus números y crecer."
  },
  {
    question: "¿Por dónde empiezo?",
    answer:
      "Escríbeme por WhatsApp para una conversación inicial, sin compromiso. Vemos tu caso y definimos el mejor punto de partida."
  }
];
