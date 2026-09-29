import { cn } from '@/lib/utils';

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[1200px] px-4 sm:px-6', className)}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-[12.5px] font-semibold tracking-[0.25em] text-[#ff9dc9]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[28px] font-extrabold leading-tight text-[#fbf3f6] sm:text-[34px]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-8 text-[#b8a3ab]">{description}</p>
      )}
    </div>
  );
}
