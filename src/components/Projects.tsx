import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import type { MouseEvent } from 'react';
import { realCases, demos, domainOf, type Project } from '@/lib/data';

/** Luz suave que sigue el cursor sobre la tarjeta (solo con mouse). */
const spot = (e: MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
};
import SectionHeader from '@/components/SectionHeader';
import Showcase from '@/components/Showcase';

function BrowserFrame({ project, tall }: { project: Project; tall?: boolean }) {
  return (
    <div className="relative rounded-xl overflow-hidden bg-[#121721] border border-white/10">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10 bg-[#0f141c]">
        <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <div className="flex-1 ml-3 truncate rounded-md bg-white/[0.06] px-3 py-0.5 text-[11px] text-neutral-500">
          {domainOf(project.demoUrl)}
        </div>
      </div>
      <div className={`relative w-full ${tall ? 'aspect-[16/10]' : 'aspect-video'} overflow-hidden`}>
        <img
          src={project.imageUrl}
          alt={`Vista previa de ${project.title}`}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover object-top transition-[transform,opacity] duration-700 ${project.fullImageUrl ? 'nv-has-full' : 'group-hover:scale-[1.04]'}`}
        />
        {project.fullImageUrl && (
          <img src={project.fullImageUrl} alt="" aria-hidden="true" loading="lazy" decoding="async" className="nv-full" />
        )}
      </div>
    </div>
  );
}

function DemoCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      onMouseMove={spot}
      className="nv-spot glass-card glass-card-hover group relative overflow-hidden p-5 flex flex-col"
    >
      <BrowserFrame project={project} />
      <h3 className="mt-5 text-lg font-bold text-white tracking-tight">{project.title}</h3>
      <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">{project.subtitle}</p>
      <p className="mt-3 text-sm text-[#c7d0d8] leading-relaxed">{project.description}</p>
      <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3 mt-auto">
        <span className="text-[11px] text-neutral-500 truncate">{project.techStack.join(' · ')}</span>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:border-[#DB5227] hover:bg-[#DB5227]/10"
        >
          Probar demo <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="relative section-padding overflow-hidden bg-neutral-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-500/4 rounded-full blur-[150px]" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="01 — Casos reales"
          title={<>Negocios que ya <span className="accent-word">venden con su web</span></>}
          subtitle="Proyectos hechos para clientes reales, publicados y funcionando hoy."
        />
        <Showcase items={realCases} />

        <SectionHeader
          className="mt-28 mb-12"
          eyebrow="02 — Laboratorio"
          title={<>Demos <span className="accent-word">por sector</span></>}
          subtitle="Proyectos de concepto que diseñamos para mostrar lo que podemos construir en distintos negocios. Todos funcionan: pruébalos en vivo."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {demos.map((p, i) => (
            <DemoCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
