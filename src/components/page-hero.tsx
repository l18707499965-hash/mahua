import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/section';

export type Crumb = { title: string; href?: string };

export function PageHero({
  title,
  description,
  crumbs,
  children,
}: {
  title: string;
  description?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[#241820]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[380px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,60,223,0.16),transparent_65%)]"
      />
      <Container className="relative py-16 sm:py-20">
        <nav aria-label="面包屑导航" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-[#9a858e]">
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1;
              return (
                <li key={crumb.title} className="flex items-center gap-1.5">
                  {crumb.href && !isLast ? (
                    <Link href={crumb.href} className="transition-colors hover:text-[#ffd9f4]">
                      {crumb.title}
                    </Link>
                  ) : (
                    <span className={isLast ? 'text-[#e7d5d8]' : ''}>{crumb.title}</span>
                  )}
                  {!isLast && <ChevronRight className="h-3.5 w-3.5 text-[#5d4b53]" />}
                </li>
              );
            })}
          </ol>
        </nav>
        <h1 className="max-w-3xl text-[32px] font-extrabold leading-tight text-[#fbf3f6] sm:text-[42px]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-3xl text-[15.5px] leading-8 text-[#b8a3ab]">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
