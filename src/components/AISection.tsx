import { motion } from 'framer-motion';
import { Bot, MessageCircle, Sparkles, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/data';

export default function AISection() {
  return (
    <section id="inteligencia-artificial" className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="absolute inset-0 bg-[#023661]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(219,82,39,0.24),transparent_34%),radial-gradient(circle_at_80%_80%,rgba(2,12,18,0.8),transparent_50%)]" />
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="glass-card overflow-hidden border-white/15 bg-[#0A0C12]/45 p-7 sm:p-10 md:p-14"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary-500/40 bg-secondary-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-300">
                <Sparkles className="h-3.5 w-3.5" />
                Nova Intelligence
              </div>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Inteligencia Artificial para tu Negocio
              </h2>
              <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-[#c7d0d8] sm:text-lg">
                <p>Automatiza tu éxito. Desarrollamos e integramos Agentes de Inteligencia Artificial personalizados que atienden a tus clientes 24/7, responden mensajes al instante y escalan tus ventas de forma inteligente.</p>
                <p>Tu agente puede resolver preguntas frecuentes, calificar prospectos, recomendar productos y acompañar cada conversación con una voz coherente con tu marca. Mientras tu equipo se concentra en decisiones de alto valor, la inteligencia artificial mantiene activo el soporte, reduce tiempos de respuesta y convierte más oportunidades en clientes.</p>
                <p>Diseñamos cada flujo para aprender de tu operación y conectarse con tus canales digitales, creando una experiencia ágil, humana y medible desde el primer contacto.</p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
                <MessageCircle className="h-5 w-5" />
                Diseñar mi agente
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative mx-auto flex h-56 w-full max-w-sm items-center justify-center rounded-3xl border border-white/10 bg-[#0A0C12]/65">
              <div className="absolute h-36 w-36 rounded-full bg-secondary-500/20 blur-3xl" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-secondary-500/50 bg-secondary-500/10 shadow-[0_0_60px_rgba(219,82,39,0.22)]">
                <Bot className="h-12 w-12 text-secondary-300" />
              </div>
              <span className="absolute right-8 top-8 h-2 w-2 animate-pulse rounded-full bg-secondary-400" />
              <span className="absolute bottom-10 left-10 h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
