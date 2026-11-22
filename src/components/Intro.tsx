import { useEffect, useRef, useState } from 'react';
import Planet, { Star } from '@/components/Planet';
import { markIntroDone } from '@/lib/intro';

/**
 * Animación de entrada de Nova Web (≈3,4 s, sale en cada carga, con "Saltar").
 * 1) campo de estrellas  2) se enciende la estrella  3) la luz recorre el borde del planeta
 * 4) NOVA WEB se descifra letra por letra  5) el planeta baja a su lugar en la portada y la intro se disuelve.
 * Un solo bucle de requestAnimationFrame mueve todo: fluido también en celular.
 */
const WORD = 'NOVA WEB';
const GLYPHS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#/<>{}=+*';
const T = { star: 0.35, rim: 0.75, rimDur: 1.0, word: 1.2, tag: 2.15, exit: 2.75, exitDur: 0.75 };
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const out = (t: number) => 1 - Math.pow(1 - t, 3);
const clamp = (v: number) => Math.min(1, Math.max(0, v));

export default function Intro() {
  const [gone, setGone] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const scene = useRef<HTMLDivElement>(null);
  const starEl = useRef<HTMLDivElement>(null);
  const rimA = useRef<HTMLDivElement>(null);
  const word = useRef<HTMLDivElement>(null);
  const tag = useRef<HTMLDivElement>(null);
  const meta = useRef<HTMLDivElement>(null);
  const pct = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const skipRef = useRef<() => void>(() => {});

  useEffect(() => {
    document.getElementById('nv-boot')?.remove();
    const html = document.documentElement;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (new URLSearchParams(location.search).has('nointro')) { setGone(true); markIntroDone(); return; }
    html.style.overflow = 'hidden';

    /* Estrellas */
    const cv = canvas.current!, ctx = cv.getContext('2d')!;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let W = 0, H = 0;
    const size = () => { W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    size(); addEventListener('resize', size);
    const N = Math.round(Math.min(220, (innerWidth * innerHeight) / 7000));
    const stars = Array.from({ length: N }, () => ({ a: Math.random() * Math.PI * 2, r: Math.random() ** 0.6, s: 0.3 + Math.random() * 1.1, p: Math.random() * 6.28, z: 0.4 + Math.random() * 0.6 }));

    /* Letras que se descifran */
    const spans = [...word.current!.querySelectorAll<HTMLSpanElement>('.nv-ix__ch')];
    const ghosts = spans.map((s) => s.querySelector<HTMLSpanElement>('.nv-ix__gh')!);
    const finals = spans.map((s) => s.querySelector<HTMLSpanElement>('.nv-ix__fi')!);

    let raf = 0, t0 = performance.now(), exiting = false, exitAt = 0, from = { dy: 0, k: 1 }, finished = false, told = false;
    const total = reduced ? 1.1 : T.exit + T.exitDur;

    const finish = () => {
      if (finished) return; finished = true;
      cancelAnimationFrame(raf); removeEventListener('resize', size);
      html.style.overflow = ''; if (!told) markIntroDone(); setTimeout(() => setGone(true), 60);
    };
    const startExit = (now: number) => {
      if (exiting) return; exiting = true; exitAt = now;
      /* destino: el planeta de la portada (mismo dibujo, otra posición y tamaño) */
      const target = document.querySelector<HTMLElement>('#inicio .nv-planet');
      const mine = scene.current!.querySelector<HTMLElement>('.nv-planet')!;
      if (target && scrollY < 40) {
        const a = mine.getBoundingClientRect(), b = target.getBoundingClientRect();
        from = { dy: b.top - a.top, k: b.width / a.width };
      } else from = { dy: 0, k: 1 };
    };
    skipRef.current = () => { if (!exiting) { t0 = performance.now() - T.exit * 1000; startExit(performance.now()); } };

    const frame = (now: number) => {
      const t = (now - t0) / 1000;
      if (reduced) {
        const o = t < 0.75 ? 1 : 1 - clamp((t - 0.75) / 0.35);
        root.current!.style.opacity = String(o);
        if (t >= total) return finish();
        raf = requestAnimationFrame(frame); return;
      }
      if (!exiting && t >= T.exit) startExit(now);
      const ex = exiting ? clamp((now - exitAt) / 1000 / T.exitDur) : 0;

      /* estrellas: aparecen, titilan y en la salida se estiran hacia afuera (salto a la portada) */
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H * 0.47, R = Math.hypot(W, H) * 0.62, fade = clamp(t / 0.6) * (1 - ex);
      const warp = ease(ex) * 0.5;
      for (const s of stars) {
        const rr = s.r * R * (1 + t * 0.012 * s.z + warp * s.z);
        const x = cx + Math.cos(s.a) * rr, y = cy + Math.sin(s.a) * rr;
        const al = fade * (0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 2.2 + s.p))) * s.z;
        ctx.globalAlpha = al; ctx.fillStyle = '#fff';
        if (warp > 0.02) {
          const len = warp * 60 * s.z * s.r;
          ctx.strokeStyle = '#cfe6ff'; ctx.lineWidth = s.s; ctx.beginPath();
          ctx.moveTo(x, y); ctx.lineTo(x - Math.cos(s.a) * len, y - Math.sin(s.a) * len); ctx.stroke();
        } else { ctx.beginPath(); ctx.arc(x, y, s.s, 0, 6.283); ctx.fill(); }
      }
      ctx.globalAlpha = 1;

      /* estrella: punto de luz que se abre en cuatro puntas */
      const sp = out(clamp((t - T.star) / 0.7));
      const pulse = 1 + 0.05 * Math.sin(t * 3);
      starEl.current!.style.transform = `translate(-50%,-50%) scale(${(0.12 + 0.88 * sp) * pulse}) rotate(${(1 - sp) * -35}deg)`;
      starEl.current!.style.opacity = String(clamp((t - T.star + 0.1) / 0.25));

      /* luz que recorre el borde del planeta desde la estrella hacia los dos lados */
      const rp = ease(clamp((t - T.rim) / T.rimDur));
      /* máscara con bordes suaves: la luz se abre desde la estrella sin cortes rectos */
      const a = 50 - rp * 50, f = 6 + 10 * (1 - rp);
      const m = rp >= 1 ? 'none' : `linear-gradient(90deg,transparent ${a - f}%,#000 ${a}%,#000 ${100 - a}%,transparent ${100 - a + f}%)`;
      scene.current!.querySelectorAll<HTMLElement>('.nv-planet__light').forEach((e) => { e.style.maskImage = m; e.style.setProperty('-webkit-mask-image', m); });
      scene.current!.querySelector<HTMLElement>('.nv-planet__body')!.style.opacity = String(0.35 + 0.65 * rp);

      /* NOVA WEB: cada letra pasa por símbolos y se fija */
      spans.forEach((_, i) => {
        const st = T.word + i * 0.075, lock = st + 0.42;
        if (t < st) { ghosts[i].textContent = ''; finals[i].style.opacity = '0'; return; }
        if (t < lock) {
          if (Math.random() < 0.55) ghosts[i].textContent = WORD[i] === ' ' ? '' : GLYPHS[(Math.random() * GLYPHS.length) | 0];
          ghosts[i].style.opacity = '1'; finals[i].style.opacity = '0';
        } else { ghosts[i].style.opacity = '0'; finals[i].style.opacity = '1'; }
      });
      const tp = out(clamp((t - T.tag) / 0.6));
      tag.current!.style.opacity = String(tp);
      tag.current!.style.letterSpacing = `${0.62 - 0.12 * tp}em`;

      /* datos técnicos discretos y barra de carga */
      const lp = clamp(t / T.exit);
      pct.current!.textContent = String(Math.round(ease(lp) * 100)).padStart(3, '0');
      bar.current!.style.transform = `scaleX(${ease(lp)})`;
      meta.current!.style.opacity = String(clamp(t / 0.5) * (1 - clamp(ex * 3)));

      /* salida: el planeta baja a su sitio en la portada y la intro se disuelve */
      if (exiting) {
        const e = ease(ex);
        scene.current!.style.transform = `translateY(${from.dy * e}px) scale(${1 + (from.k - 1) * e})`;
        word.current!.parentElement!.style.opacity = String(1 - clamp(ex * 2.2));
        word.current!.parentElement!.style.transform = `translate(-50%,0) translateY(${-14 * e}px)`;
        root.current!.style.setProperty('--bg', String(1 - clamp((ex - 0.35) / 0.65)));
        if (!told && ex > 0.4) { told = true; markIntroDone(); }   // la portada empieza a aparecer mientras la intro se disuelve
        if (ex >= 1) return finish();
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') skipRef.current(); };
    addEventListener('keydown', esc);
    const guard = setTimeout(finish, 9000);            // nunca se queda pegada
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', size); removeEventListener('keydown', esc); clearTimeout(guard); html.style.overflow = ''; };
  }, []);

  if (gone) return null;
  return (
    <div ref={root} className="nv-ix" aria-hidden="true">
      <canvas ref={canvas} className="nv-ix__stars" />
      <div ref={scene} className="nv-ix__scene">
        <Planet className="nv-ix__planet" star={false} rimRef={rimA} />
        <div ref={starEl} className="nv-ix__star"><Star /></div>
      </div>
      <div className="nv-ix__logo">
        <div ref={word} className="nv-ix__word">
          {WORD.split('').map((c, i) => (
            <span key={i} className={`nv-ix__ch${i > 4 ? ' is-o' : ''}${c === ' ' ? ' is-sp' : ''}`}>
              <span className="nv-ix__fi">{c === ' ' ? ' ' : c}</span>
              <span className="nv-ix__gh" />
            </span>
          ))}
        </div>
        <div ref={tag} className="nv-ix__tag">Tu idea, en la web</div>
      </div>
      <div ref={meta} className="nv-ix__meta">
        <span>NOVA/WEB · <span ref={pct}>000</span>%</span>
        <span className="nv-ix__geo">Cartagena, CO · 10.39°N 75.51°W</span>
      </div>
      <div className="nv-ix__bar"><div ref={bar} /></div>
      <button type="button" className="nv-ix__skip" onClick={() => skipRef.current()}>Saltar</button>
    </div>
  );
}
