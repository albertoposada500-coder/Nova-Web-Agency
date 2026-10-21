import { MessageCircle, Mail, Github, MapPin } from 'lucide-react';
import { WHATSAPP_URL, EMAIL, GITHUB_URL, LOCATION, navLinks } from '@/lib/data';

function NDSLogoSmall() {
  return (
    <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="44" height="44" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
      <path d="M10 34V14L18 28V14" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 14V34H27C30.866 34 34 30.866 34 27V21C34 17.134 30.866 14 27 14H22Z" stroke="#F97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="38" cy="18" r="3" fill="#2563EB" />
    </svg>
  );
}

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-neutral-200 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <NDSLogoSmall />
              <div>
                <div className="text-sm font-bold text-neutral-900 tracking-tight">NEXUS DEV STUDIO</div>
                <div className="text-[10px] text-neutral-500">by Alberto Posada | Full-Stack Engineer</div>
              </div>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
              Software & Web Development — Diseñamos y construimos plataformas web de alto
              rendimiento, e-commerce y sistemas a medida.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-700 uppercase tracking-widest mb-4">
              Navegación
            </h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm text-neutral-500 hover:text-primary-600 transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-700 uppercase tracking-widest mb-4">
              Contacto
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-500 hover:text-success-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                +57 314 685 6422
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-sm text-neutral-500 hover:text-primary-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {EMAIL}
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-500 hover:text-primary-600 transition-colors"
              >
                <Github className="w-4 h-4" />
                albertoposada500-coder
              </a>
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <MapPin className="w-4 h-4" />
                {LOCATION}
              </div>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500 text-center sm:text-left">
            &copy; 2026 Nexus Dev Studio — Engineering & Design by Alberto Posada. Todos los
            derechos reservados.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-success-500 animate-pulse" />
            <span>Sistemas operando con normalidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
