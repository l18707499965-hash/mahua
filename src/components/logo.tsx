import { cn } from '@/lib/utils';

type LogoMarkProps = {
  className?: string;
};

/** 三色丝带播放三角形（与 src/app/icon.svg 保持一致） */
export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-full w-full', className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-gYellow" x1="256" y1="170" x2="846" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFCE2E" />
          <stop offset="0.55" stopColor="#FFA41B" />
          <stop offset="1" stopColor="#FB8A0C" />
        </linearGradient>
        <linearGradient id="logo-gMagenta" x1="256" y1="170" x2="332" y2="862" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF3CDF" />
          <stop offset="0.5" stopColor="#F30FD0" />
          <stop offset="1" stopColor="#D800C2" />
        </linearGradient>
        <linearGradient id="logo-gRed" x1="332" y1="862" x2="846" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#E91A1A" />
          <stop offset="0.55" stopColor="#F63B22" />
          <stop offset="1" stopColor="#FF6B3D" />
        </linearGradient>
      </defs>
      <line x1="333.7" y1="877.9" x2="254.3" y2="154.1" stroke="url(#logo-gMagenta)" strokeWidth="190" strokeLinecap="round" />
      <line x1="242.0" y1="162.2" x2="860.0" y2="507.8" stroke="url(#logo-gYellow)" strokeWidth="190" strokeLinecap="round" />
      <line x1="832.9" y1="509.2" x2="471.8" y2="763.5" stroke="url(#logo-gRed)" strokeWidth="190" strokeLinecap="round" />
      <line x1="528.2" y1="723.8" x2="318.9" y2="871.2" stroke="url(#logo-gMagenta)" strokeWidth="190" strokeLinecap="round" />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  showText?: boolean;
  textClassName?: string;
};

export function Logo({ className, showText = true, textClassName }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span className="relative block h-9 w-9 shrink-0">
        <LogoMark className="drop-shadow-[0_2px_10px_rgba(255,60,223,0.25)]" />
      </span>
      {showText && (
        <span className={cn('text-[17px] font-bold tracking-wide text-[#f5ecf0]', textClassName)}>
          麻花影视
        </span>
      )}
    </span>
  );
}
