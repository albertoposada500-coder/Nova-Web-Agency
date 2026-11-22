import type { CSSProperties } from 'react';

/** Horizonte del planeta del logo de Nova Web, con la estrella sobre el borde. Todo en CSS/SVG: nítido en cualquier pantalla. */
export function Star({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="-100 -100 200 200" aria-hidden="true">
      <defs>
        <radialGradient id="nvStarGlow">
          <stop offset="0" stopColor="#fff" />
          <stop offset=".18" stopColor="#ffd2a8" />
          <stop offset=".42" stopColor="#ff7a3d" stopOpacity=".55" />
          <stop offset="1" stopColor="#ff7a3d" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="nvStarV" x1="0" y1="-1" x2="0" y2="1">
          <stop offset="0" stopColor="#9ad7ff" stopOpacity="0" />
          <stop offset=".5" stopColor="#fff" />
          <stop offset="1" stopColor="#9ad7ff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="nvStarH" x1="-1" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5fb4ff" stopOpacity="0" />
          <stop offset=".5" stopColor="#fff" />
          <stop offset="1" stopColor="#ff9a5c" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle r="60" fill="url(#nvStarGlow)" opacity=".85" />
      <path d="M0-98C4-20 4-6 0 0C-4-6-4-20 0-98ZM0 98C4 20 4 6 0 0C-4 6-4 20 0 98Z" fill="url(#nvStarV)" />
      <path d="M-98 0C-20 4-6 4 0 0C-6-4-20-4-98 0ZM98 0C20 4 6 4 0 0C6-4 20-4 98 0Z" fill="url(#nvStarH)" />
      <path d="M0-34C3-8 8-3 34 0C8 3 3 8 0 34C-3 8-8 3-34 0C-8-3-3-8 0-34Z" fill="#fff" />
      <circle r="7" fill="#fff" />
    </svg>
  );
}

type Props = { className?: string; style?: CSSProperties; star?: boolean; rimRef?: React.Ref<HTMLDivElement> };

export default function Planet({ className = '', style, star = true, rimRef }: Props) {
  return (
    <div className={`nv-planet ${className}`} style={style} aria-hidden="true">
      <div className="nv-planet__light" ref={rimRef}>
        <div className="nv-planet__haze" />
        <div className="nv-planet__glow" />
      </div>
      <div className="nv-planet__body" />
      <div className="nv-planet__light nv-planet__light--rim">
        <div className="nv-planet__rim" />
      </div>
      {star && <Star className="nv-planet__star" />}
    </div>
  );
}
