import { useCallback, useEffect, useRef, useState, type MouseEvent, type TouchEvent } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { domainOf, type Project } from '@/lib/data';

/**
 * Vitrina de casos reales: un proyecto a la vez en grande (web en PC + en celular)
 * y debajo las miniaturas para cambiar. Avanza sola cada 7 s mientras está a la vista;
 * se detiene al pasar el mouse o al elegir un proyecto. En celular se cambia deslizando.
 */
const AUTOPLAY = 7000;
const spot = (e: MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
};
const splitSub = (s: string) => {
  const i = s.lastIndexOf(' · ');
  return i > 0 ? [s.slice(0, i), s.slice(i + 3)] : [s, ''];
};

export default function Showcase({ items }: { items: Project[] }) {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const tabs = useRef<HTMLDivElement>(null);
  const visible = useInView(root, { margin: '-20% 0px -20% 0px' });
  const reduced = typeof window !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const running = visible && !paused && !hover && !reduced;
  const p = items[i];
  const [sector, city] = splitSub(p.subtitle);

  const go = useCallback((n: number, user = false) => {
    const next = (n + items.length) % items.length;
    setDir(next > i || (i === items.length - 1 && next === 0) ? 1 : -1);
    setI(next);
    if (user) setPaused(true);
  }, [i, items.length]);

  /* avance automático */
  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(() => go(i + 1), AUTOPLAY);
    return () => clearTimeout(t);
  }, [running, i, go]);

  /* la miniatura activa siempre a la vista (solo se mueve la fila, nunca la página) */
  useEffect(() => {
    const row = tabs.current, el = row?.children[i] as HTMLElement | undefined;
    if (!row || !el || row.scrollWidth <= row.clientWidth) return;
    row.scrollTo({ left: el.offsetLeft - (row.clientWidth - el.offsetWidth) / 2, behavior: 'smooth' });
  }, [i]);

  /* precargar la siguiente para que el cambio sea instantáneo */
  useEffect(() => {
    const n = items[(i + 1) % items.length];
    [n.imageUrl, n.mobileImageUrl].forEach((u) => { if (u) { const im = new Image(); im.src = u; } });
  }, [i, items]);

  /* deslizar en celular */
  const touch = useRef<number | null>(null);
  const onTouchStart = (e: TouchEvent) => { touch.current = e.touches[0].clientX; };
  const onTouchEnd = (e: TouchEvent) => {
    if (touch.current === null) return;
    const dx = e.changedTouches[0].clientX - touch.current; touch.current = null;
    if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1), true);
  };

  return (
    <div ref={root} className="nv-show" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="grid items-center gap-8 lg:gap-14 2xl:gap-20 lg:grid-cols-[0.85fr_1.3fr]">
        {/* Texto */}
        <div className="order-2 lg:order-1 lg:min-h-[420px] flex flex-col justify-center" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6ee7a3]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80] shadow-[0_0_0_4px_rgba(74,222,128,0.15)]" />
                  Cliente real · en producción
                </span>
                <span className="font-mono text-xs text-neutral-500 tabular-nums">
                  <span className="text-[#E8693F]">{String(i + 1).padStart(2, '0')}</span> / {String(items.length).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 text-3xl sm:text-4xl lg:text-[2.9rem] font-extrabold tracking-tight text-white leading-[1.04]">{p.title}</h3>
              <p className="mt-3 text-base font-semibold text-[#E8693F]">
                {sector}{city && <span className="font-medium text-neutral-500"> · {city}</span>}
              </p>
              <p className="mt-4 max-w-lg text-[15px] sm:text-base leading-relaxed text-[#c7d0d8]">{p.summary ?? p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.keyPoints.map((k) => (
                  <span key={k} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-[#c7d0d8]">{k}</span>
                ))}
              </div>
              <p className="mt-4 text-xs text-neutral-500">{p.techStack.join(' · ')}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Visitar la web <ArrowUpRight className="h-4 w-4" />
                </a>
                <button type="button" onClick={() => go(i + 1, true)} className="btn-secondary">
                  Siguiente proyecto <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Web en PC + celular */}
        <div className="order-1 lg:order-2 relative pl-6 pb-8 sm:pl-10 sm:pb-10" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="nv-show__glow" aria-hidden="true" />
          <div onMouseMove={spot} className="nv-spot group relative rounded-2xl overflow-hidden bg-[#121721] border border-white/10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.75)]">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10 bg-[#0f141c]">
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" /><span className="w-2.5 h-2.5 rounded-full bg-white/15" /><span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="ml-3 flex-1 max-w-[60%] truncate rounded-md bg-white/[0.06] px-3 py-0.5 text-[11px] text-neutral-500">{domainOf(p.demoUrl)}</span>
            </div>
            <div className="relative aspect-video overflow-hidden">
              <AnimatePresence initial={false} custom={dir}>
                <motion.div
                  key={p.id}
                  className="absolute inset-0"
                  custom={dir}
                  initial={{ opacity: 0, scale: 1.04, x: dir * 30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98, x: dir * -30 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img src={p.imageUrl} alt={`Vista previa de ${p.title}`} decoding="async" className={`w-full h-full object-cover object-top ${p.fullImageUrl ? 'nv-has-full' : ''}`} />
                  {p.fullImageUrl && <img src={p.fullImageUrl} alt="" aria-hidden="true" loading="lazy" decoding="async" className="nv-full" />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {p.mobileImageUrl && (
            <div className="nv-show__phone" aria-hidden="true">
              <AnimatePresence initial={false}>
                <motion.img
                  key={p.id}
                  src={p.mobileImageUrl}
                  alt=""
                  decoding="async"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                />
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* Miniaturas */}
      <div ref={tabs} role="tablist" aria-label="Casos reales" className="nv-show__tabs">
        {items.map((it, k) => (
          <button
            key={it.id}
            type="button"
            role="tab"
            aria-selected={k === i}
            onClick={() => go(k, true)}
            className={`nv-tab ${k === i ? 'is-on' : ''}`}
          >
            <img src={it.imageUrl} alt="" loading="lazy" decoding="async" />
            <b>{it.title.split(' | ')[0]}</b>
            <small>{splitSub(it.subtitle)[0]}</small>
            {k === i && <span key={`${i}-${running}`} className={`nv-tab__bar ${running ? 'is-run' : ''}`} style={{ animationDuration: `${AUTOPLAY}ms` }} />}
          </button>
        ))}
      </div>
    </div>
  );
}
