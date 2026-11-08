export const WHATSAPP_NUMBER = '573146856422';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Nova Web, me gustaría agendar una llamada para conversar sobre un proyecto.')}`;
export const EMAIL = 'novaweb.codeagency@gmail.com';
export const GITHUB_URL = 'https://github.com/albertoposada500-coder';
export const GITHUB_USERNAME = 'albertoposada500-coder';
export const LOCATION = 'Cartagena, Colombia';

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Agentes de IA', href: '#inteligencia-artificial' },
  { label: 'Stack Técnico', href: '#stack' },
  { label: 'Contacto', href: '#contacto' },
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  techStack: string[];
  demoUrl: string;
  imageUrl: string;
};

/** Dominio que se muestra en la barra del navegador de la vista previa. */
export const domainOf = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

/** Negocios reales que ya usan su web. */
export const realCases: Project[] = [
  {
    id: 'almavitta',
    title: 'Almavitta',
    subtitle: 'Repostería y heladería saludable · Manga, Cartagena',
    description:
      'Web a la medida de la marca, con catálogo de galletas y helados, carrito de pedidos con toppings por cada helado y envío del pedido completo por WhatsApp.',
    keyPoints: ['Carrito con toppings por helado', 'Pedidos directos por WhatsApp', 'Diseño fiel a la marca'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    demoUrl: 'https://almavitta-bakery-spa.vercel.app/',
    imageUrl: '/assets/images/projects/almavitta.jpg',
  },
  {
    id: 'siralem-beachwear',
    title: 'Siralem Beachwear',
    subtitle: 'E-commerce de moda de playa',
    description:
      'Tienda en línea para una marca de ropa de playa, con un diseño inmersivo y una experiencia de compra pensada para convertir.',
    keyPoints: ['Diseño inmersivo', 'Compra fluida', 'Optimizada para convertir'],
    techStack: ['React', 'Tailwind CSS', 'Vercel', 'E-Commerce'],
    demoUrl: 'https://siralem-web.vercel.app',
    imageUrl: '/assets/images/projects/Captura_de_pantalla_2026-10-20_203007.png',
  },
  {
    id: 'alexandra',
    title: 'Alexandra | Detalles & Estilo',
    subtitle: 'Detalles, flores y regalos personalizados',
    description:
      'Tienda online para una marca de arreglos florales y detalles personalizados, con catálogo visual, diseño delicado y consulta directa de precios por WhatsApp.',
    keyPoints: ['Catálogo visual interactivo', 'Consulta por WhatsApp', 'Optimizada para móvil'],
    techStack: ['React', 'Tailwind CSS', 'Vercel', 'UI/UX'],
    demoUrl: 'https://alexandra-detalles.vercel.app',
    imageUrl: '/assets/images/projects/alexandra.png',
  },
];

/** Proyectos de concepto: demos funcionales por sector. */
export const demos: Project[] = [
  {
    id: 'stockpro',
    title: 'StockPro Admin Dashboard',
    subtitle: 'Inventario y punto de venta',
    description: 'Panel administrativo con control de stock, ingresos en tiempo real, catálogo y reportes financieros.',
    keyPoints: [],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://stockpro-admin-dashboard.vercel.app',
    imageUrl: '/assets/images/projects/stockpro.png',
  },
  {
    id: 'apex',
    title: 'Apex Grooming Club',
    subtitle: 'Barbería premium y reservas',
    description: 'Portal para un salón de grooming masculino con catálogo de servicios, precios y reservas.',
    keyPoints: [],
    techStack: ['React', 'Tailwind CSS', 'Vercel'],
    demoUrl: 'https://apex-grooming-club.vercel.app',
    imageUrl: 'https://i.ibb.co/kgDJxKC9/Captura-de-pantalla-2026-10-25-111744.png',
  },
  {
    id: 'nexus-gaming',
    title: 'Nexus Gaming & Tech',
    subtitle: 'E-commerce de hardware',
    description: 'Tienda de tecnología con catálogo amplio, filtros por categoría, precios en COP y checkout por WhatsApp.',
    keyPoints: [],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://nexus-gaming-tech.vercel.app',
    imageUrl: '/assets/images/projects/nexus.png',
  },
  {
    id: 'apex-motors-lab',
    title: 'Apex Motors Lab',
    subtitle: 'Taller automotriz',
    description: 'Sitio para taller de diagnóstico y mantenimiento, con reservas por WhatsApp y seguimiento del vehículo.',
    keyPoints: [],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://apex-motors-lab.vercel.app/',
    imageUrl: '/assets/images/projects/apex-motors.png',
  },
];

/** Lista completa (compatibilidad). */
export const projects: Project[] = [...realCases, ...demos];

export type Service = {
  icon: string;
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    icon: 'ShoppingBag',
    title: 'Desarrollo Web & E-Commerce a Medida',
    description:
       'Creamos experiencias digitales de alto nivel que combinan una identidad visual memorable, navegación intuitiva y una arquitectura preparada para crecer. Cada tienda y sitio corporativo se construye para cargar rápido, comunicar valor y convertir visitas en oportunidades reales de negocio.',
    features: ['E-commerce escalable', 'Sitios corporativos premium', 'Optimización de conversión'],
  },
  {
    icon: 'LayoutDashboard',
    title: 'Sistemas Administrativos & Dashboards',
    description:
       'Diseñamos centros de control inteligentes para que tu equipo entienda lo que ocurre y tome decisiones con precisión. Centralizamos inventario, ventas, operaciones y métricas clave en interfaces claras, rápidas y adaptadas a los procesos de tu empresa.',
    features: ['Gestión de inventario', 'Analítica en tiempo real', 'Reportes financieros'],
  },
  {
    icon: 'Workflow',
    title: 'Integración de APIs & Automatizaciones',
    description:
       'Conectamos las herramientas que ya utilizas para eliminar tareas repetitivas y crear flujos que trabajan sin fricción. Integramos WhatsApp, inteligencia artificial, servicios externos y pasarelas de pago con seguridad, trazabilidad y una experiencia consistente.',
    features: ['WhatsApp API', 'Gemini AI Integration', 'Pasarelas de pago'],
  },
];

export type TechCategory = {
  title: string;
  icon: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    title: 'Frontend',
    icon: 'Monitor',
    items: ['React.js', 'TypeScript', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5 / CSS3'],
  },
  {
    title: 'Backend & Software',
    icon: 'Server',
    items: ['Node.js', 'Java (Swing/NetBeans)', 'REST APIs', 'Git / GitHub'],
  },
  {
    title: 'Herramientas & Entornos',
    icon: 'Wrench',
    items: ['Gemini API', 'Vercel', 'VS Code'],
  },
  {
    title: 'Prácticas de Ingeniería',
    icon: 'Code2',
    items: [
      'Código Limpio',
      'Arquitectura Componentizada',
      'Responsive Design First',
      'SEO Técnico',
    ],
  },
];
