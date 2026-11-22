import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = { eyebrow: string; title: ReactNode; subtitle?: string; className?: string };

/** Encabezado de sección alineado a la izquierda (reemplaza la píldora + título centrado). */
export default function SectionHeader({ eyebrow, title, subtitle, className = 'mb-12' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      onViewportEnter={(e) => (e?.target as HTMLElement | undefined)?.classList.add('is-in')}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl ${className}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="nv-ul mt-4 text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white tracking-tight leading-[1.1]">{title}</h2>
      {subtitle && <p className="mt-4 text-base sm:text-lg text-neutral-500 max-w-2xl leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
