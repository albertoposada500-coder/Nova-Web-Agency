import { useEffect, useState } from 'react';

/** Avisa cuándo terminó la animación de entrada, para que la portada anime después y no detrás. */
export const INTRO_EVENT = 'nova:intro-done';
export const introIsDone = () => typeof document !== 'undefined' && document.documentElement.dataset.intro === 'done';
export function markIntroDone() {
  document.documentElement.dataset.intro = 'done';
  window.dispatchEvent(new Event(INTRO_EVENT));
}
export function useIntroDone() {
  const [done, setDone] = useState(introIsDone());
  useEffect(() => {
    if (done) return;
    const on = () => setDone(true);
    window.addEventListener(INTRO_EVENT, on);
    if (introIsDone()) setDone(true);
    return () => window.removeEventListener(INTRO_EVENT, on);
  }, [done]);
  return done;
}
