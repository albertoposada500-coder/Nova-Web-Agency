import { motion } from 'framer-motion';
import {
  ShoppingBag,
  LayoutDashboard,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { services } from '@/lib/data';
import SectionHeader from '@/components/SectionHeader';

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
        <SectionHeader
          eyebrow="03 — Servicios"
          title={<>Lo que <span className="accent-word">hacemos</span></>}
          subtitle="Tres frentes, un mismo objetivo: que tu negocio funcione mejor en internet."
        />

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
                  {/* Número + icono sobrio */}
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-sm font-semibold text-neutral-500">0{idx + 1}</span>
                    {Icon && <Icon className="w-6 h-6 text-[#E8693F]" strokeWidth={1.6} />}
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
                        <div className="w-1 h-1 rounded-full bg-[#E8693F]" />
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
