import { motion } from 'framer-motion';
import { ExternalLink, Check } from 'lucide-react';
import { projects, type Project } from '@/lib/data';

const accentMap = {
  blue: {
    gradient: 'from-primary-600 to-primary-700',
    glow: 'shadow-primary-500/20',
    text: 'text-primary-600',
    border: 'hover:border-primary-300',
    bg: 'bg-primary-500/5',
    dot: 'bg-primary-500',
    tag: 'bg-primary-50 border-primary-100 text-primary-700',
  },
  orange: {
    gradient: 'from-secondary-500 to-secondary-600',
    glow: 'shadow-secondary-500/20',
    text: 'text-secondary-600',
    border: 'hover:border-secondary-300',
    bg: 'bg-secondary-500/5',
    dot: 'bg-secondary-500',
    tag: 'bg-secondary-50 border-secondary-100 text-secondary-700',
  },
  teal: {
    gradient: 'from-accent-500 to-accent-600',
    glow: 'shadow-accent-500/20',
    text: 'text-accent-600',
    border: 'hover:border-accent-300',
    bg: 'bg-accent-500/5',
    dot: 'bg-accent-500',
    tag: 'bg-accent-50 border-accent-100 text-accent-700',
  },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = accentMap[project.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className={`glass-card glass-card-hover ${accent.border} group relative overflow-hidden min-w-0`}
    >
      {/* Gradient glow on hover */}
      <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] ${accent.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

      <div className="relative p-6 md:p-7 flex flex-col h-full">
        {/* Preview mockup with real Unsplash image */}
        <div className="relative mb-5 rounded-xl overflow-hidden bg-[#121721] border border-white/10 shadow-black/30">
          {/* Browser window top bar */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-neutral-200 bg-neutral-50">
            <div className="w-2.5 h-2.5 rounded-full bg-error-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-warning-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-success-400" />
            <div className="flex-1 ml-3 h-4 rounded-sm bg-neutral-200/60" />
          </div>
          {/* Real screenshot image */}
          <div className="relative w-full h-48 overflow-hidden bg-neutral-100">
            <img
              src={project.imageUrl}
              alt={`${project.title} — preview`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent" />
          </div>
        </div>

        {/* Title + Subtitle */}
        <h3 className="text-lg font-bold text-neutral-900 tracking-tight">{project.title}</h3>
        <p className={`text-xs ${accent.text} font-medium mt-1 mb-3`}>{project.subtitle}</p>

        {/* Description */}
        <p className="text-sm text-neutral-500 leading-relaxed mb-4">{project.description}</p>

        {/* Key points */}
        <div className="space-y-2 mb-5">
          {project.keyPoints.map((point) => (
            <div key={point} className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
              <span className="text-xs text-neutral-600">{point}</span>
            </div>
          ))}
        </div>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 text-[10px] font-medium rounded-md border ${accent.tag}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Demo button */}
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm text-white
            bg-gradient-to-r ${accent.gradient} hover:shadow-lg ${accent.glow}
            transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]`}
        >
          <ExternalLink className="w-4 h-4" />
          Probar Demo en Vivo
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="relative section-padding overflow-hidden bg-neutral-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-500/4 rounded-full blur-[150px]" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-4">
            <Check className="w-3.5 h-3.5 text-primary-600" />
            <span className="text-xs font-medium text-primary-700">Casos de Éxito</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
            Proyectos <span className="text-gradient">Destacados</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-500 max-w-2xl mx-auto">
            Plataformas reales en producción, diseñadas y construidas con foco en rendimiento,
            escalabilidad y experiencia de usuario.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
