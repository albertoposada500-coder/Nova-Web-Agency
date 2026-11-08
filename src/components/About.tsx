import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Github, Mail, Camera } from 'lucide-react';
import { GITHUB_URL, EMAIL, LOCATION } from '@/lib/data';

/** Cambia esta ruta por tu foto real (p. ej. /assets/images/alberto.jpg). Vacía = espacio reservado. */
const FOUNDER_PHOTO = '/assets/images/alberto.jpg';

export default function About() {
  return (
    <section id="sobre" className="relative section-padding overflow-hidden bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-primary-500/4 to-transparent rounded-full blur-[100px]" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-sm">
              {/* Anillos decorativos (se conserva la animación) */}
              <div className="absolute -inset-4 rounded-[2rem] border border-neutral-200 animate-spin-slow" style={{ animationDuration: '30s' }} />
              <div className="absolute -inset-8 rounded-[2rem] border border-neutral-100" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-[#121721]">
                {FOUNDER_PHOTO ? (
                  <img src={FOUNDER_PHOTO} alt="Alberto Posada, fundador de Nova Web" className="h-full w-full object-cover object-top" />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_50%_30%,rgba(219,82,39,0.18),transparent_60%)] text-neutral-500">
                    <Camera className="h-10 w-10" strokeWidth={1.4} />
                    <span className="text-sm">Aquí va tu foto</span>
                    <span className="text-[11px] text-neutral-400">retrato vertical · 4:5</span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A0C12] via-[#0A0C12]/70 to-transparent px-6 pb-5 pt-16">
                  <div className="text-base font-semibold text-white">Alberto Luis Posada Pérez</div>
                  <div className="text-xs text-neutral-500 mt-0.5">Fundador · Desarrollador full-stack</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col"
          >
            <span className="eyebrow">Sobre el fundador</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white tracking-tight leading-[1.1]">
              Alberto Luis <span className="accent-word">Posada Pérez</span>
            </h2>

            <div className="mt-6 space-y-4 text-[#c7d0d8] text-base sm:text-lg leading-relaxed">
              <p>
                Soy desarrollador web y fundador de Nova Web. Empecé este proyecto con una
                convicción simple: una buena página web no es un lujo de grandes marcas — es la
                herramienta que hace crecer a{' '}
                <span className="text-white font-medium">cualquier negocio</span>, desde una
                heladería hasta una tienda de moda.
              </p>
              <p>
                En Nova Web nos encargamos de todo el camino: escuchamos tu idea, diseñamos una
                web elegante que refleja la personalidad de tu marca, y la construimos para que
                cargue rápido, se vea perfecta en el celular y convierta visitas en clientes.{' '}
                <span className="text-white font-medium">
                  Tú no tienes que entender de tecnología — para eso estamos nosotros.
                </span>
              </p>
              <p>
                Lo que nos diferencia es el trato: aquí no hablas con un vendedor ni con una
                agencia lejana, sino directamente con quien construye tu web. Te acompañamos
                desde la primera idea hasta que tu página esté publicada y vendiendo — y
                seguimos ahí cuando necesites crecer.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-500">
              <span className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-[#E8693F]" /> Ingeniería de Sistemas</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#E8693F]" /> {LOCATION}</span>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors"><Github className="h-4 w-4 text-[#E8693F]" /> GitHub</a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="h-4 w-4 text-[#E8693F]" /> Correo</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
