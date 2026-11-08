import { motion } from 'framer-motion';
import { ArrowRight, Rocket, BadgeCheck, Handshake } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { WHATSAPP_URL, realCases, demos } from '@/lib/data';

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

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#proyectos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-white"
    >
      {/* Fondo animado (se conserva) */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/8 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary-500/8 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
      {/* Degradado 70/30: arriba oscuro, el último tramo se funde a blanco */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0)_0%,rgba(248,250,252,0)_58%,rgba(248,250,252,0.35)_78%,rgba(248,250,252,0.85)_92%,#fbfcfe_100%)]" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.span variants={item} className="eyebrow">
            Desarrollo web · Cartagena
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]"
          >
            Webs que se ven bien
            <br className="hidden sm:block" /> y <span className="accent-word">venden mejor.</span>
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
          <motion.div variants={item} className="mt-14 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {facts.map((f, idx) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + idx * 0.15 }}
                className="glass-card glass-card-hover p-5 text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border border-primary-100 mb-3">
                  <f.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-neutral-900">{f.value}</div>
                <div className="text-xs text-neutral-500 mt-1">{f.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll (se conserva la animación) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
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
