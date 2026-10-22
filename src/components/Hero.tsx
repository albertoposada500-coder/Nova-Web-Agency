import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles, Zap, Gauge, ShieldCheck } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/data';

const metrics = [
  { icon: Zap, value: '+4', label: 'Proyectos en Producción' },
  { icon: Gauge, value: '100%', label: 'Core Web Vitals Optimization' },
  { icon: ShieldCheck, value: '24/7', label: 'Soporte & Mantenimiento Continuo' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 bg-white"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/8 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary-500/8 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-700/80 bg-gray-800/30 text-xs sm:text-sm text-gray-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Disponible para proyectos freelance, consultoría y roles de desarrollo</span>
          </div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
          >
            Transformamos tu visión en una obra maestra digital{' '}
            <span className="text-gradient">Desarrollo Web de Élite</span>,{' '}
            <span className="text-gradient-secondary">Rápido</span> y Diseñado para{' '}
            <span className="text-gradient">Convertir</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl font-medium text-gray-200 mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            Desarrollo web de élite para marcas que dominan su mercado: escalabilidad, velocidad y un diseño que convierte visitantes en clientes leales.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          >
            <button onClick={scrollToProjects} className="btn-primary w-full sm:w-auto">
              <Sparkles className="w-5 h-5" />
              Explorar Casos de Éxito
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 text-primary-600" />
              WhatsApp (+57 314 685 6422)
            </a>
          </motion.div>

          {/* Metrics */}
          <motion.div
            variants={item}
            className="mt-14 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          >
            {metrics.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + idx * 0.15 }}
                className="glass-card glass-card-hover p-5 text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border border-primary-100 mb-3">
                  <metric.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-neutral-900">{metric.value}</div>
                <div className="text-xs text-neutral-500 mt-1">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-neutral-300 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-primary-500"
          />
        </div>
        <span className="text-[10px] text-neutral-400 tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
