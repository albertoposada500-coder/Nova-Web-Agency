import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { WHATSAPP_URL } from '@/lib/data';

const chat = [
  { from: 'cliente', text: 'Hola, ¿hacen domicilios a Manga?' },
  { from: 'agente', text: '¡Hola! Sí, llegamos a Manga en unos 30 minutos. ¿Quieres ver el menú de hoy?' },
  { from: 'cliente', text: 'Sí, porfa' },
  { from: 'agente', text: 'Aquí está. ¿Te ayudo a armar tu pedido o prefieres que te recomiende algo?' },
];

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
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="eyebrow">04 — Agentes de IA</span>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] leading-[1.1]">
                Un asistente que responde a tus clientes <span className="accent-word">mientras tú trabajas.</span>
              </h2>
              <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-[#c7d0d8] sm:text-lg">
                <p>Creamos agentes de inteligencia artificial que atienden por WhatsApp o en tu web las 24 horas: responden preguntas frecuentes, muestran productos y toman pedidos con la voz de tu marca.</p>
                <p>Tu equipo se concentra en lo importante y ningún cliente se queda esperando respuesta.</p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
                <WhatsAppIcon size={20} />
                Diseñar mi agente
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Conversación de ejemplo en lugar del icono de robot */}
            <div className="relative mx-auto w-full max-w-sm rounded-3xl border border-white/10 bg-[#0b141a] shadow-[0_30px_80px_rgba(0,0,0,0.45)] overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 bg-[#1f2c34]">
                <img src="/assets/images/logo-circular.png" alt="" aria-hidden="true" className="h-9 w-9 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold text-white">Asistente de tu negocio</div>
                  <div className="text-[11px] text-[#8fd9a8]">en línea</div>
                </div>
              </div>
              <div className="space-y-2.5 px-4 py-5">
                {chat.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.45, duration: 0.4 }}
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-[13.5px] leading-snug ${
                      m.from === 'cliente'
                        ? 'ml-auto rounded-br-md bg-[#005c4b] text-white'
                        : 'rounded-bl-md bg-[#1f2c34] text-[#e9edef]'
                    }`}
                  >
                    {m.text}
                  </motion.div>
                ))}
                <div className="flex w-14 items-center justify-center gap-1 rounded-2xl rounded-bl-md bg-[#1f2c34] py-2.5">
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: d * 0.2 }}
                      className="h-1.5 w-1.5 rounded-full bg-[#8696a0]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
