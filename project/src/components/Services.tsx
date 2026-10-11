import { motion } from 'framer-motion';
import {
  ShoppingBag,
  LayoutDashboard,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { services } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  ShoppingBag,
  LayoutDashboard,
  Workflow,
};

export default function Services() {
  return (
    <section id="servicios" className="relative section-padding overflow-hidden bg-white">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary-500/4 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-500/4 rounded-full blur-[150px]" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-50 border border-secondary-100 mb-4">
            <Workflow className="w-3.5 h-3.5 text-secondary-600" />
            <span className="text-xs font-medium text-secondary-700">Servicios Corporativos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
            Soluciones <span className="text-gradient-secondary">a Medida</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-500 max-w-2xl mx-auto">
            Servicios de ingeniería de software diseñados para impulsar tu negocio con
            tecnología moderna y arquitectura escalable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="glass-card glass-card-hover group p-7 relative overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-primary-500/8 to-secondary-500/8 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border border-primary-100 mb-5 group-hover:from-primary-500/15 group-hover:to-secondary-500/15 transition-all duration-500">
                    {Icon && <Icon className="w-7 h-7 text-primary-600" />}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
                        <span className="text-xs text-neutral-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
