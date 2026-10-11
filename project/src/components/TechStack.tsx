import { motion } from 'framer-motion';
import {
  Monitor,
  Server,
  Wrench,
  Code2,
  type LucideIcon,
} from 'lucide-react';
import { techStack } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Server,
  Wrench,
  Code2,
};

export default function TechStack() {
  return (
    <section id="stack" className="relative section-padding overflow-hidden bg-neutral-50">
      <div className="absolute inset-0 bg-dot opacity-40" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary-500/4 rounded-full blur-[120px]" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-50 border border-accent-100 mb-4">
            <Code2 className="w-3.5 h-3.5 text-accent-600" />
            <span className="text-xs font-medium text-accent-700">Stack Técnico & Calidad</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
            Tecnologías & <span className="text-gradient">Ingeniería</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-500 max-w-2xl mx-auto">
            Un stack moderno enfocado en rendimiento, mantenibilidad y buenas prácticas
            de ingeniería de software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {techStack.map((category, idx) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -5 }}
                className="glass-card glass-card-hover group p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center group-hover:border-primary-300 transition-colors duration-300">
                    {Icon && <Icon className="w-5 h-5 text-primary-600" />}
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 tracking-tight">{category.title}</h3>
                </div>

                {/* Items */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-600 group-hover:border-neutral-300 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
