import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

/** Cuenta desde 0 hasta el número cuando aparece. Si el valor no es un número (p. ej. "1 a 1"), lo muestra tal cual. */
export default function CountUp({ value, start = true, delay = 0 }: { value: string; start?: boolean; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true });
  const n = /^\d+$/.test(value) ? parseInt(value, 10) : null;
  useEffect(() => {
    if (n === null || !ref.current) return;
    if (!start || !seen) { ref.current.textContent = '0'; return; }
    const c = animate(0, n, { duration: 1.4, delay, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => { if (ref.current) ref.current.textContent = String(Math.round(v)); } });
    return () => c.stop();
  }, [n, start, seen, delay]);
  return <span ref={ref}>{n === null ? value : '0'}</span>;
}
