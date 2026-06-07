import {
  Boxes,
  Building2,
  BriefcaseBusiness,
  CalendarRange,
  Calculator,
  ChefHat,
  ClipboardCheck,
  Coffee,
  Eye,
  FileSpreadsheet,
  Globe,
  HeartHandshake,
  LineChart,
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
  UtensilsCrossed,
  Wine
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
/* Authority / trust strip                                                     */
/* -------------------------------------------------------------------------- */

export const authorityStrip: { label: string; detail: string }[] = [
  { label: "+30 años", detail: "Gastronomía y administración" },
  { label: "Ojo clínico", detail: "Veo dónde se pierde el negocio" },
  { label: "100% remoto", detail: "Por WhatsApp y correo" },
  { label: "Confidencialidad", detail: "Acuerdo antes de empezar" }
];

/* -------------------------------------------------------------------------- */
/* Problem section                                                             */
/* -------------------------------------------------------------------------- */

export const problemIntro = {
  eyebrow: "Lo que veo todos los días",
  title: "Tienes talento y buenas ideas. Lo que muchas veces falta es orden.",
  description:
    "Muchos chefs y dueños de negocio cocinan increíble, sueñan en grande y trabajan sin parar. Pero cuando falta administración, el negocio sufre: los costos se vuelven invisibles, los recursos se pierden y las decisiones se toman a ciegas."
};

export const problemPoints: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ReceiptText,
    title: "No sabes qué plato deja margen",
    description:
      "Sin costos de recetas, fijas precios por intuición y trabajas mucho sin saber qué te deja ganancia."
  },
  {
    icon: Boxes,
    title: "Los recursos se pierden sin que lo notes",
    description:
      "Compras de más, mermas e insumos mal aprovechados: fugas difíciles de ver en el día a día."
  },
  {
    icon: FileSpreadsheet,
    title: "Tu contabilidad solo sirve para impuestos",
    description:
      "Cumples con el fisco, pero no tienes una foto real de tu salud financiera para decidir."
  },
  {
    icon: UsersRound,
    title: "El equipo trabaja sin estructura",
    description:
      "Sin manuales ni procesos claros, todo depende de la memoria y del esfuerzo del momento."
  }
];

export const problemClosing =
  "La buena noticia: todo esto se ordena. Y cuando la administración acompaña al talento culinario, el negocio respira mejor.";

/* -------------------------------------------------------------------------- */
/* Audience / ideal clients                                                     */
/* -------------------------------------------------------------------------- */

export const idealClients: { icon: LucideIcon; label: string }[] = [
  { icon: UtensilsCrossed, label: "Restaurantes que quieren ordenar costos y operación" },
  { icon: Coffee, label: "Cafés y cafeterías que buscan procesos más rentables" },
  { icon: ChefHat, label: "Chefs y emprendedores gastronómicos" },
  { icon: Salad, label: "Servicios de catering y eventos" },
  { icon: Store, label: "Pequeños negocios sin tiempo para sus números" },
  { icon: LineChart, label: "Personas que quieren entender su situación financiera real" }
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
      "Un buen negocio gastronómico no es solo buena comida. También necesita administración, costos claros, inventarios, equipos capacitados, procesos y decisiones basadas en información real.",
    price: "USD 10",
    pricePeriod: "por hora",
    ctaMessage: waMessages.consulting,
    highlights: [
      "Optimización de recursos y proveedores",
      "Análisis de menús y costos de recetas",
      "Inventarios y manuales de procesos"
    ]
  },
  {
    id: "contabilidad",
    anchor: "#contabilidad-remota",
    icon: Scale,
    eyebrow: "Servicio 2",
    title: "Contabilidad general remota",
    description:
      "No se trata de sumar complejidad, sino de darte claridad: de dónde entra el dinero, a dónde va, qué se puede optimizar y cómo se ve tu situación financiera real.",
    price: "USD 80",
    pricePeriod: "por mes",
    ctaMessage: waMessages.accounting,
    highlights: [
      "Balance General y Estado de Resultados",
      "Reportes mensuales y anuales incluidos",
      "Yo hago el trabajo: no aprendes ningún sistema"
    ]
  }
];

/* -------------------------------------------------------------------------- */
/* Gastronomic consulting — detailed                                           */
/* -------------------------------------------------------------------------- */

export const gastronomyDetail = {
  eyebrow: "Consultoría en administración gastronómica",
  title: "Cuando la administración acompaña al talento, el negocio respira mejor.",
  description:
    "Para restaurantes, cafés, chefs, caterings y emprendedores gastronómicos que necesitan orden, control y estructura. Apoyo el arte culinario ocupándome del lado administrativo, de forma simple y práctica.",
  quote:
    "Muchos chefs tienen el talento, la comida y el sueño. Lo que necesitan es que alguien ponga orden en los números.",
  price: "USD 10",
  pricePeriod: "por hora",
  features: [
    {
      icon: TrendingUp,
      title: "Optimización de recursos",
      description:
        "Reviso instalaciones, insumos, equipo humano y proveedores para que cada recurso rinda más."
    },
    {
      icon: Salad,
      title: "Análisis de menús",
      description: "Identifico qué platos dejan margen y cuáles te restan, para enfocar tu carta."
    },
    {
      icon: ClipboardCheck,
      title: "Costos de recetas",
      description: "Sabrás cuánto cuesta cada plato y a qué precio realmente conviene venderlo."
    },
    {
      icon: Boxes,
      title: "Inventarios computarizados",
      description: "Control de stock ordenado y confiable para comprar mejor y evitar pérdidas."
    },
    {
      icon: Notebook,
      title: "Manuales simples de procesos",
      description: "Documentamos tus rutinas clave para que el negocio no dependa de la memoria."
    },
    {
      icon: Sparkles,
      title: "Expansión del negocio",
      description: "Te acompaño para crecer o abrir nuevos puntos con bases sólidas y decisiones claras."
    }
  ]
};

/* -------------------------------------------------------------------------- */
/* Remote accounting — detailed                                                */
/* -------------------------------------------------------------------------- */

export const accountingDetail = {
  eyebrow: "Contabilidad general remota",
  title: "Entiende tu situación financiera real, mes a mes.",
  description:
    "Para personas, emprendedores y pequeños negocios que no tienen tiempo de llevar sus cuentas. Yo hago el trabajo por ti: no necesitas comprar ni aprender ningún sistema contable.",
  price: "USD 80",
  pricePeriod: "por mes",
  includes: [
    {
      icon: Scale,
      title: "Registro completo",
      description:
        "Llevo tus activos, pasivos, ingresos, egresos y cuentas de ajuste, ordenados con criterio."
    },
    {
      icon: FileSpreadsheet,
      title: "Balance y resultados",
      description: "Recibes Balance General y Estado de Resultados para ver tu situación con claridad."
    },
    {
      icon: CalendarRange,
      title: "Reportes incluidos",
      description: "Informes mensuales y anuales, sin costo mensual adicional."
    },
    {
      icon: HeartHandshake,
      title: "Acompañamiento cercano",
      description: "Te acompaño en todo el proceso, por WhatsApp o correo, con respuestas claras."
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
    description: "Hablamos de tu negocio, lo que te preocupa y lo que quieres lograr. Sin compromiso."
  },
  {
    number: "02",
    title: "Acuerdo y confidencialidad",
    description:
      "Definimos el alcance y firmamos un acuerdo de confidencialidad antes de recibir tu información."
  },
  {
    number: "03",
    title: "Orden y registro",
    description: "Organizo tus costos, inventarios o cuentas y convierto el desorden en información clara."
  },
  {
    number: "04",
    title: "Reportes y recomendaciones",
    description:
      "Recibes reportes claros y recomendaciones prácticas, con seguimiento cercano y constante."
  }
];

/* -------------------------------------------------------------------------- */
/* Selected experience (real, factual — no metrics, no exaggeration)           */
/* -------------------------------------------------------------------------- */

export const experienceIntro = {
  eyebrow: "Experiencia seleccionada",
  title: "Una trayectoria construida en cocinas, barras, salones y oficinas reales.",
  description:
    "Más de tres décadas acompañando proyectos gastronómicos y administrativos, desde la puesta en marcha hasta la operación del día a día."
};

export const selectedExperience: {
  icon: LucideIcon;
  name: string;
  scope: string;
  description: string;
}[] = [
  {
    icon: Calculator,
    name: "Chef independiente · Querétaro, México",
    scope: "Contabilidad de catering",
    description: "Organización de los registros contables de los movimientos de catering."
  },
  {
    icon: UtensilsCrossed,
    name: "La Pequeña de Alfredo",
    scope: "Apertura integral",
    description:
      "Remodelación, compra de equipo, nombre e imagen, contratación y capacitación del personal, carta de bar, manuales de procesos, apertura, captación y fidelización de clientes."
  },
  {
    icon: Globe,
    name: "Catering para embajadas y cuerpo diplomático",
    scope: "Con el Chef Marco Bonifaz",
    description:
      "Coordinación de eventos, acuerdos con clientes, montaje, organización de buffet y mesas, degustaciones, decoración y servicio."
  },
  {
    icon: Store,
    name: "Plaza Gastronómica El Bosque",
    scope: "Operación y optimización",
    description: "Análisis de recursos, capacitación de personal, optimización y captación de clientes."
  },
  {
    icon: Building2,
    name: "Gastro Suisse · Restaurant Chalet La Suisse",
    scope: "Gerencia general y administrativa",
    description:
      "Desarrollo del negocio, optimización de recursos, fidelización, excelencia en el servicio, posicionamiento y participación en el proceso de transición del negocio."
  },
  {
    icon: Wine,
    name: "La Gitana Bar-Restaurante",
    scope: "Creación de concepto",
    description: "Concepto, ambientación, cartas, contratación, capacitación y apoyo operativo."
  },
  {
    icon: ChefHat,
    name: "Rock and Fellers",
    scope: "Implementación de franquicia",
    description:
      "Implementación de una franquicia argentina en Bolivia: sistemas, capacitación de cocina, bar y salón, y excelencia en el servicio."
  },
  {
    icon: Scale,
    name: "Restaurant La Mostaza · Chalet La Suisse (etapa inicial)",
    scope: "Orden financiero",
    description:
      "Registros contables, control de inventarios y recuperación tras una pérdida económica."
  }
];

/* -------------------------------------------------------------------------- */
/* Outcomes — what changes with order (replaces fake testimonials)             */
/* -------------------------------------------------------------------------- */

export const outcomesIntro = {
  eyebrow: "Con un proceso ordenado",
  title: "Lo que cambia cuando tu negocio tiene orden.",
  description:
    "No se trata de más trabajo para ti, sino de más claridad para decidir. Esto es lo que sí puedes esperar."
};

export const outcomes: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ClipboardCheck,
    title: "Sabes qué deja margen",
    description: "Costos de recetas y análisis de menú para enfocar lo que sí es rentable."
  },
  {
    icon: Eye,
    title: "Ves a dónde se va el dinero",
    description: "Sabrás qué gastos se repiten, qué recursos se pierden y dónde puedes optimizar."
  },
  {
    icon: Notebook,
    title: "Tu equipo tiene procesos claros",
    description: "Manuales simples para que la operación no dependa de la memoria."
  },
  {
    icon: FileSpreadsheet,
    title: "Recibes reportes que entiendes",
    description: "Balance General y Estado de Resultados claros para decidir con información real."
  },
  {
    icon: LineChart,
    title: "Conoces tu situación real",
    description: "Más allá de los impuestos, entiendes la verdadera salud financiera de tu negocio."
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
    "Soy Krisna Gema Rada, consultora senior en administración gastronómica y contabilidad general remota. He trabajado en restaurantes, bares, caterings, administración, contabilidad, atención al cliente y operaciones, y conozco de cerca el esfuerzo que hay detrás de abrir y sostener un negocio.",
    "Mi diferencia no es solo técnica. Tengo un ojo clínico para encontrar lo que no está funcionando: dónde se pierden recursos, qué procesos no están claros, qué costos no se ven y dónde el equipo necesita estructura.",
    "Trabajo de forma simple, práctica y cercana, con total confidencialidad. Mi objetivo es que dejes de improvisar, entiendas tu situación real y tomes mejores decisiones para tu negocio."
  ],
  values: [
    { icon: Eye, label: "Ojo clínico" },
    { icon: HeartHandshake, label: "Trato humano y cercano" },
    { icon: ShieldCheck, label: "Confidencialidad total" }
  ]
};

export const trustPoints: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: BriefcaseBusiness,
    title: "Experiencia real",
    description: "Más de 30 años en gastronomía, administración, contabilidad y atención al cliente."
  },
  {
    icon: Eye,
    title: "Ojo clínico para el detalle",
    description: "Encuentro dónde se pierden recursos y dónde el negocio puede mejorar."
  },
  {
    icon: HeartHandshake,
    title: "Atención humana y directa",
    description: "Hablas conmigo, con seguimiento cercano y respuestas claras."
  },
  {
    icon: ShieldCheck,
    title: "Confidencialidad garantizada",
    description: "Firmamos un acuerdo antes de recibir cualquier información de tu negocio."
  }
];

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
    answer:
      "No. Están incluidos en la mensualidad de USD 80, sin cobros extra."
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
