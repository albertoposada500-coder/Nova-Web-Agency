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
  accent: 'blue' | 'orange' | 'teal';
};

export const projects: Project[] = [
  {
    id: 'siralem-beachwear',
    title: 'Siralem Beachwear',
    subtitle: 'E-Commerce Exclusivo de Moda de Playa',
    description:
      'E-commerce exclusivo y moderno para marca de ropa de playa, con diseño inmersivo y optimizado para maximizar conversiones.',
    keyPoints: ['Diseño inmersivo', 'Experiencia de compra fluida', 'Conversión optimizada'],
    techStack: ['React', 'Tailwind CSS', 'Vercel', 'E-Commerce'],
    demoUrl: 'https://siralem-web.vercel.app',
    imageUrl: '/assets/images/NOVA_WEB,_estrella_sobre_planeta_oscuro.png',
    accent: 'orange',
  },

  {
    id: 'stockpro',
    title: 'StockPro Admin Dashboard',
    subtitle: 'Sistema de Gestión de Inventarios & Punto de Venta',
    description:
      'Panel administrativo para control masivo de stock, analítica de ingresos en tiempo real, gestión de catálogo y reportes financieros.',
    keyPoints: [
      'Renderizado ultra rápido',
      'Control de estados complejos',
      'Métricas interactivas en tiempo real',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    demoUrl: 'https://stockpro-admin-dashboard.vercel.app',
    imageUrl: '/assets/images/projects/stockpro.png',
    accent: 'blue',
  },
  {
    id: 'apex',
    title: 'Apex Grooming Club',
    subtitle: 'Plataforma Web Corporativa & Agendamiento',
    description:
      'Portal web de alta gama para salón de grooming masculino de lujo, con catálogo visual de servicios, precios y sistema de reservas optimizado para conversión.',
    keyPoints: [
      'UI/UX enfocado en retención de clientes',
      'Diseño 100% responsivo',
      'Sistema de reservas optimizado',
    ],
    techStack: ['React', 'Tailwind CSS', 'Vercel', 'Glassmorphism'],
    demoUrl: 'https://apex-grooming-club.vercel.app',
    imageUrl: '/assets/images/projects/apex.png',
    accent: 'orange',
  },
  {
    id: 'nexus-gaming',
    title: 'Nexus Gaming & Tech',
    subtitle: 'E-Commerce Masivo de Hardware & Componentes',
    description:
      'Tienda virtual completa de tecnología con catálogo amplio (GPUs, CPUs, Portátiles), filtros dinámicos por categoría, precios en COP y pasarela de checkout directo por WhatsApp.',
    keyPoints: [
      'Filtrado instantáneo sin recarga',
      'Arquitectura modular de productos',
      'Checkout directo por WhatsApp',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'WhatsApp API'],
    demoUrl: 'https://nexus-gaming-tech.vercel.app',
    imageUrl: '/assets/images/projects/nexus.png',
    accent: 'teal',
  },
];

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
