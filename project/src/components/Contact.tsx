import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Mail,
  Github,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  type LucideIcon,
} from 'lucide-react';
import { WHATSAPP_URL, EMAIL, GITHUB_URL, LOCATION } from '@/lib/data';

const projectTypes = [
  'Desarrollo Web & E-Commerce',
  'Sistema Administrativo / Dashboard',
  'Integración de APIs & Automatizaciones',
  'Consultoría Técnica',
  'Otro',
];

const contactChannels: {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  color: string;
  bg: string;
}[] = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+57 314 685 6422',
    href: WHATSAPP_URL,
    color: 'text-success-600',
    bg: 'bg-success-50 border-success-100',
  },
  {
    icon: Mail,
    label: 'Correo',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    color: 'text-primary-600',
    bg: 'bg-primary-50 border-primary-100',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'albertoposada500-coder',
    href: GITHUB_URL,
    color: 'text-neutral-700',
    bg: 'bg-neutral-100 border-neutral-200',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: LOCATION,
    href: '#',
    color: 'text-secondary-600',
    bg: 'bg-secondary-50 border-secondary-100',
  },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch('https://formspree.io/f/maeqbppo', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget),
      });

      if (!response.ok) {
        throw new Error('Formspree request failed');
      }

      setStatus('success');
      setForm({ name: '', email: '', projectType: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMsg('No se pudo enviar el mensaje. Intenta de nuevo o escríbeme por WhatsApp.');
    }
  }; 

  return (
    <section id="contacto" className="relative section-padding overflow-hidden bg-neutral-50">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-500/6 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary-500/6 rounded-full blur-[150px]" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-4">
            <Send className="w-3.5 h-3.5 text-primary-600" />
            <span className="text-xs font-medium text-primary-700">Contacto</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
            Conversemos sobre tu <span className="text-gradient">Proyecto</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-500 max-w-2xl mx-auto">
            Cuéntame sobre tu idea y te responderé con un plan claro para hacerla realidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-2 flex flex-col gap-3"
          >
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-card glass-card-hover p-4 flex items-center gap-4 group"
              >
                <div className={`w-11 h-11 rounded-xl ${channel.bg} border flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0`}>
                  <channel.icon className={`w-5 h-5 ${channel.color}`} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-neutral-400">{channel.label}</div>
                  <div className="text-sm font-medium text-neutral-900 truncate">{channel.value}</div>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-5 mt-2 flex flex-col items-center text-center gap-2 group"
            >
              <MessageCircle className="w-8 h-8 text-success-600 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-sm font-semibold text-neutral-900">Respuesta Inmediata por WhatsApp</div>
              <div className="text-xs text-neutral-500">Click para iniciar conversación</div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-3"
          >
            <form
              action="https://formspree.io/f/maeqbppo"
              method="POST"
              onSubmit={handleSubmit}
              className="glass-card p-6 md:p-7 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/15 transition-all"
                    placeholder="Tu nombre"
                    disabled={status === 'loading'}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-2">
                    Correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/15 transition-all"
                    placeholder="tu@correo.com"
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-2">
                  Tipo de Proyecto
                </label>
                <select
                  name="tipo_proyecto"
                  required
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/15 transition-all disabled:opacity-50"
                  disabled={status === 'loading'}
                >
                  <option value="">Selecciona una opción</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-2">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/15 transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto, objetivos y timeline..."
                  disabled={status === 'loading'}
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl bg-success-50 border border-success-200 p-4"
                  role="status"
                  aria-live="polite"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success-600 shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed text-success-700">
                      ¡Mensaje enviado con éxito! Te responderé al correo en menos de 24 horas. Si necesitas una respuesta inmediata, puedes escribirme directamente a WhatsApp.
                    </p>
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-4 w-full sm:w-auto text-sm py-2.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Escribirme por WhatsApp
                  </a>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-error-50 border border-error-200"
                  role="alert"
                >
                  <AlertCircle className="w-5 h-5 text-error-600 shrink-0" />
                  <span className="text-sm text-error-700">{errorMsg}</span>
                </motion.div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
