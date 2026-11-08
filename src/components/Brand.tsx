type BrandProps = { size?: 'md' | 'sm' };

/** Logo de Nova Web: logo original + palabra en la tipografía espaciada del logo. */
export default function Brand({ size = 'md' }: BrandProps) {
  const md = size === 'md';
  return (
    <div className="flex items-center gap-3.5">
      <img
        src="/assets/images/logo-circular.png"
        alt=""
        aria-hidden="true"
        className={`${md ? 'h-16 w-16' : 'h-14 w-14'} rounded-full object-cover ring-2 ring-white/15 shadow-[0_0_24px_rgba(219,82,39,0.28)] transition-transform duration-300 group-hover:scale-105`}
      />
      <div className="flex flex-col leading-none">
        <span className={`brand-word ${md ? 'text-[19px]' : 'text-[17px]'}`}>
          <span className="text-white">NOVA</span> <span className="text-[#DB5227]">WEB</span>
        </span>
        <span className={`brand-tag mt-1.5 ${md ? 'text-[9.5px]' : 'text-[9px]'} uppercase`}>Tu idea, en la web</span>
      </div>
    </div>
  );
}
