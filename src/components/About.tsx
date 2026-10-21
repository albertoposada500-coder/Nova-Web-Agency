import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code2, Sparkles, Github, Mail } from 'lucide-react';
import { GITHUB_URL, EMAIL, LOCATION } from '@/lib/data';

export default function About() {
  return (
    <section id="sobre" className="relative section-padding overflow-hidden bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-primary-500/4 to-transparent rounded-full blur-[100px]" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-3xl border border-neutral-200 animate-spin-slow" style={{ animationDuration: '30s' }} />
              <div className="absolute -inset-8 rounded-3xl border border-neutral-100" />

              {/* Avatar card */}
              <div className="glass-card p-8 w-full max-w-sm relative">
                <div className="absolute -top-px left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 blur-xl opacity-20" />
                    <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center text-3xl font-bold text-white">
                      AP
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-neutral-900">Alberto Luis Posada Pérez</h3>
                  <p className="text-sm text-primary-600 mt-1">Full-Stack Engineer</p>

                  <div className="mt-5 space-y-2 text-left">
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <GraduationCap className="w-4 h-4 text-secondary-600" />
                      <span>Ingeniería de Sistemas</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <MapPin className="w-4 h-4 text-secondary-600" />
                      <span>{LOCATION}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-3">
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center hover:border-primary-300 hover:text-primary-600 text-neutral-500 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center hover:border-primary-300 hover:text-primary-600 text-neutral-500 transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-4 self-start">
              <Sparkles className="w-3.5 h-3.5 text-primary-600" />
              <span className="text-xs font-medium text-primary-700">Sobre el Fundador</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">
              Alberto Luis <span className="text-gradient">Posada Pérez</span>
            </h2>

            <div className="space-y-4 text-neutral-500 text-sm sm:text-base leading-relaxed">
              <p>
                Estudiante de <span className="text-neutral-900 font-medium">Ingeniería de Sistemas</span> y
                desarrollador full-stack con pasión por resolver problemas complejos mediante
                software bien estructurado. Su enfoque combina disciplina de ingeniería con
                diseño centrado en el usuario.
              </p>
              <p>
                Especializado en construir plataformas web de alto rendimiento, e-commerce
                escalable y sistemas administrativos a medida, siempre priorizando
                rendimiento, mantenibilidad y experiencia de usuario.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: Code2, label: 'Full-Stack', value: 'Developer' },
                { icon: GraduationCap, label: 'Systems', value: 'Engineer' },
                { icon: MapPin, label: 'Based in', value: 'Cartagena' },
              ].map((item) => (
                <div key={item.label} className="glass-card p-4 text-center">
                  <item.icon className="w-5 h-5 text-primary-600 mx-auto mb-2" />
                  <div className="text-xs text-neutral-400">{item.label}</div>
                  <div className="text-sm font-semibold text-neutral-900 mt-0.5">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
