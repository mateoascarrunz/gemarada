import {
  BarChart3,
  BriefcaseBusiness,
  ChefHat,
  ClipboardList,
  FileSpreadsheet,
  HeartHandshake,
  MessageCircleMore,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Store,
  UsersRound
} from "lucide-react";

export const navigation = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Planes", href: "#planes" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" }
];

export const benefits = [
  {
    title: "Más orden sin más carga para ti",
    description:
      "Gema convierte facturas, mensajes y movimientos diarios en información clara para que tu negocio esté al día sin complicarte."
  },
  {
    title: "Control real de compras, ventas y costos",
    description:
      "Tomas decisiones con reportes prácticos, seguimiento cercano y una visión más precisa de lo que realmente está pasando en tu operación."
  },
  {
    title: "Acompañamiento humano y personalizado",
    description:
      "No recibes una solución genérica. Recibes apoyo directo, cercano y adaptado al ritmo de tu negocio."
  }
];

export const serviceGroups = [
  {
    id: "admin",
    eyebrow: "Administracion y apoyo contable",
    title: "Tu operación más clara, organizada y lista para crecer.",
    description:
      "Ideal para pequeños negocios y emprendedores que necesitan orden administrativo sin sumar complejidad.",
    services: [
      {
        icon: ReceiptText,
        title: "Registro de compras desde fotos de facturas",
        description: "Envías tus comprobantes y Gema organiza la información con criterio y consistencia."
      },
      {
        icon: MessageCircleMore,
        title: "Registro de ventas desde mensajes de texto",
        description: "Convierte mensajes y reportes informales en control útil para tu día a día."
      },
      {
        icon: FileSpreadsheet,
        title: "Reportes mensuales en Excel",
        description: "Recibes reportes simples, visuales y fáciles de revisar para entender tu negocio."
      },
      {
        icon: ClipboardList,
        title: "Apoyo contable computarizado",
        description: "Respaldo administrativo para mantener tus procesos más ordenados y confiables."
      },
      {
        icon: BarChart3,
        title: "Orientación en costos y organización",
        description: "Identifica fugas, mejora hábitos operativos y gana mayor control financiero."
      }
    ]
  },
  {
    id: "gastronomia",
    eyebrow: "Consultoria gastronomica",
    title: "Procesos más rentables para negocios de alimentos y hospitalidad.",
    description:
      "Pensado para restaurantes, cafeterías, chefs independientes y nuevos proyectos gastronómicos.",
    services: [
      {
        icon: HeartHandshake,
        title: "Mejora de servicio al cliente",
        description: "Diseña una experiencia más consistente, amable y profesional para tus clientes."
      },
      {
        icon: ChefHat,
        title: "Optimización de menú y procesos",
        description: "Ajusta cartas, rutinas y flujo operativo para trabajar mejor con menos fricción."
      },
      {
        icon: ShieldCheck,
        title: "Control de costos",
        description: "Ordena compras, producción y precios con una mirada práctica y sostenible."
      },
      {
        icon: UsersRound,
        title: "Organización de personal y operación",
        description: "Define prioridades, roles y dinámicas para que el negocio funcione con más claridad."
      },
      {
        icon: Sparkles,
        title: "Acompañamiento para nuevos negocios",
        description: "Recibe apoyo cercano para iniciar con bases más sólidas y decisiones mejor pensadas."
      }
    ]
  }
];

export const steps = [
  {
    number: "01",
    title: "Envías tus facturas o mensajes",
    description: "Compartes por WhatsApp la información de compras, ventas o necesidades de tu negocio."
  },
  {
    number: "02",
    title: "Gema organiza y registra",
    description: "La información se convierte en registros útiles, ordenados y listos para ser revisados."
  },
  {
    number: "03",
    title: "Recibes reportes y orientación",
    description: "Obtienes claridad sobre movimientos, costos y oportunidades de mejora."
  },
  {
    number: "04",
    title: "Tomas decisiones con más confianza",
    description: "Con mejor control, tu negocio puede crecer con menos improvisación y más criterio."
  }
];

export const pricingPlans = [
  {
    title: "Plan 1",
    volume: "1 a 100 registros",
    price: "$300",
    period: "/mes",
    description: "Para negocios que necesitan apoyo constante con una carga operativa ligera o media.",
    featured: false
  },
  {
    title: "Plan 2",
    volume: "100 a 500 registros",
    price: "$500",
    period: "/mes",
    description: "Para operaciones con mayor movimiento que buscan más control sin perder cercanía.",
    featured: true
  }
];

export const pricingIncludes = [
  "2 llamadas semanales de seguimiento",
  "Soporte ilimitado por WhatsApp de lunes a viernes, de 8:00 a 16:00",
  "Acompañamiento personalizado y enfoque práctico",
  "Espacio listo para editar beneficios adicionales"
];

export const trustPoints = [
  {
    icon: BriefcaseBusiness,
    title: "Más de 30 años de experiencia",
    description: "Trayectoria real acompañando operaciones, costos y organización administrativa."
  },
  {
    icon: HeartHandshake,
    title: "Atención personal",
    description: "Hablas con Gema directamente y recibes seguimiento cercano, claro y humano."
  },
  {
    icon: Store,
    title: "Visión práctica de negocio",
    description: "Recomendaciones útiles para el día a día, no teorías difíciles de aplicar."
  },
  {
    icon: MessageCircleMore,
    title: "Servicio remoto y accesible",
    description: "Puedes trabajar con comodidad desde cualquier lugar por WhatsApp, llamadas y correo."
  }
];

export const idealClients = [
  "Pequeños negocios que necesitan orden administrativo",
  "Chefs independientes que quieren controlar costos y operación",
  "Restaurantes y cafeterías con procesos por mejorar",
  "Emprendedores que buscan apoyo práctico desde el inicio",
  "Profesionales que necesitan claridad en compras, ventas y reportes"
];

export const testimonials = [
  {
    quote:
      "Con Gema dejamos de trabajar con información suelta. Ahora entendemos mejor nuestros números y tomamos decisiones con más calma.",
    name: "Cliente de restaurante",
    role: "Testimonio editable"
  },
  {
    quote:
      "Su acompañamiento se siente cercano y muy claro. Nos ayudó a poner orden en compras, reportes y atención diaria.",
    name: "Cliente de pequeño negocio",
    role: "Testimonio editable"
  },
  {
    quote:
      "Lo más valioso es que todo aterriza en acciones simples. Se nota la experiencia y el criterio para negocios reales.",
    name: "Cliente emprendedor",
    role: "Testimonio editable"
  }
];

export const faqs = [
  {
    question: "¿Cómo envío mis facturas o información de ventas?",
    answer:
      "Puedes enviarlas por WhatsApp en fotos, mensajes o formatos simples. La idea es que el proceso sea práctico para ti, no más complicado."
  },
  {
    question: "¿El servicio es remoto?",
    answer:
      "Sí. El acompañamiento está pensado para funcionar de forma remota con contacto frecuente, llamadas y soporte por WhatsApp."
  },
  {
    question: "¿Qué tipo de negocios pueden trabajar con Gema?",
    answer:
      "Desde pequeños negocios y emprendedores hasta restaurantes, cafeterías, chefs independientes y proyectos gastronómicos en crecimiento."
  },
  {
    question: "¿El soporte por WhatsApp está incluido?",
    answer:
      "Sí. Los planes incluyen soporte ilimitado por WhatsApp de lunes a viernes, de 8:00 a 16:00."
  },
  {
    question: "¿Se pueden adaptar los planes?",
    answer:
      "Sí. La sección de precios está preparada para editarse y ajustar el alcance según el volumen y las necesidades de cada cliente."
  }
];
