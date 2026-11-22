import { motion } from 'framer-motion';
import { ArrowRight, Rocket, BadgeCheck, Handshake } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { WHATSAPP_URL, realCases, demos } from '@/lib/data';
import Planet from '@/components/Planet';
import CountUp from '@/components/CountUp';
import { useIntroDone } from '@/lib/intro';

const facts = [
  { icon: Rocket, value: String(realCases.length + demos.length), label: 'Proyectos publicados' },
  { icon: BadgeCheck, value: String(realCases.length), label: 'Negocios reales en producción' },
  { icon: Handshake, value: '1 a 1', label: 'Trato directo con el desarrollador' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

/* El título aparece palabra por palabra, de borroso a nítido */
const words = {
  hidden: {},
  show: { transition: { staggerChildren: 0.075 } },
};
const word = {
  hidden: { opacity: 0, y: 18, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};
const W = ({ children }: { children: string }) => (
  <motion.span variants={word} className="inline-block will-change-transform">{children}</motion.span>
);

export default function Hero() {
  const ready = useIntroDone();
  const scrollToProjects = () => {
    document.querySelector('#proyectos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-[#05070d]"
    >
      <div className="nv-sky" aria-hidden="true" />
      {/* Fondo animado (se conserva) */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/8 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary-500/8 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
      {/* Remate inferior: se funde con la sección de proyectos, sin la franja clara de antes */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0A0C12] z-[2] pointer-events-none" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate={ready ? 'show' : 'hidden'}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.span variants={item} className="eyebrow">
            Desarrollo web · Cartagena
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]"
          >
            <motion.span variants={words} className="inline">
              <W>Webs</W> <W>que</W> <W>se</W> <W>ven</W> <W>bien</W>
              <br className="hidden sm:block" /> <W>y</W>{' '}
              <span className="accent-word"><W>venden</W> <W>mejor.</W></span>
            </motion.span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-[#c7d0d8] mt-7 max-w-2xl mx-auto leading-relaxed"
          >
            Diseñamos y construimos tiendas online, sitios corporativos y sistemas a medida para
            negocios que quieren crecer en internet. Rápidos, claros y pensados para convertir
            visitas en clientes.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col sm:flex-row items-center gap-4">
            <button onClick={scrollToProjects} className="btn-primary w-full sm:w-auto">
              Ver proyectos
              <ArrowRight className="w-4 h-4" />
            </button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
              <WhatsAppIcon size={20} className="text-[#25D366]" />
              Hablemos por WhatsApp
            </a>
          </motion.div>

          {/* Cifras: mismo estilo de tarjetas de la web actual, con datos reales */}
          <div className="relative mt-14 w-full">
          {/* Planeta del logo detrás de las cifras: siempre visible (recibe el planeta de la intro) */}
          <Planet className="nv-hero-planet" />
          <div className="relative z-[1] w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {facts.map((f, idx) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 + idx * 0.15 }}
                className="glass-card glass-card-hover p-5 text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border border-primary-100 mb-3">
                  <f.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-neutral-900 tabular-nums"><CountUp value={f.value} start={ready} delay={0.9 + idx * 0.15} /></div>
                <div className="text-xs text-neutral-500 mt-1">{f.label}</div>
              </motion.div>
            ))}
          </div>
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll (se conserva la animación) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex z-[3]"
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#8d99a6] flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-secondary-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
