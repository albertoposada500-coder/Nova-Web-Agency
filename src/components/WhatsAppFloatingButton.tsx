import { motion } from 'framer-motion';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { WHATSAPP_URL } from '@/lib/data';

/** Botón flotante de WhatsApp, fijo en la esquina inferior derecha. */
export default function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)]"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" aria-hidden="true" />
      <WhatsAppIcon size={30} className="relative" />
    </motion.a>
  );
}
