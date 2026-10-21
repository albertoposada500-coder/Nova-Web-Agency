import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { navLinks, WHATSAPP_URL } from '@/lib/data';

function NDSLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="44" height="44" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
      {/* N */}
      <path d="M10 34V14L18 28V14" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* D */}
      <path d="M22 14V34H27C30.866 34 34 30.866 34 27V21C34 17.134 30.866 14 27 14H22Z" stroke="#F97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* S accent dot */}
      <circle cx="38" cy="18" r="3" fill="#2563EB" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-neutral-200 shadow-soft'
          : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <nav className="container-max px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#inicio');
          }}
          className="flex items-center gap-3 group"
        >
          <div className="transition-transform duration-300 group-hover:scale-105">
            <NDSLogo />
          </div>
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-bold tracking-tight text-neutral-900 leading-none">
              NEXUS DEV STUDIO
            </span>
            <span className="text-[10px] md:text-xs text-neutral-500 leading-none mt-1">
              by Alberto Posada
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-primary-700 transition-colors duration-200 rounded-lg hover:bg-primary-50"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5"
        >
          <MessageCircle className="w-4 h-4" />
          Agendar Llamada
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-neutral-200 text-neutral-700 hover:text-primary-700 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white border-b border-neutral-200 shadow-soft"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-3 text-sm font-medium text-neutral-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar Llamada / Proyecto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
