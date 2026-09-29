'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Logo } from '@/components/logo';
import { MAIN_NAV, ANDROID_DOWNLOAD_URL } from '@/lib/site';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string): boolean =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-[#241820]/80 bg-[#0c070b]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="麻花影视官网首页" className="flex items-center">
          <Logo />
        </Link>

        <nav aria-label="主导航" className="hidden items-center gap-1 lg:flex">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative rounded-lg px-3.5 py-2 text-[14.5px] transition-colors',
                isActive(item.href)
                  ? 'text-[#ffd9f4]'
                  : 'text-[#cbb9c0] hover:text-[#f5ecf0]',
              )}
            >
              {item.title}
              {isActive(item.href) && (
                <span className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-gradient-to-r from-[#ff3cdf] via-[#ffa41b] to-[#ff5a33]" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={ANDROID_DOWNLOAD_URL}
            prefetch={false}
            className="hidden items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#ff3cdf] via-[#e8386e] to-[#ff6b3d] px-4 py-2 text-[14px] font-semibold text-white shadow-[0_4px_18px_rgba(243,15,208,0.35)] transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            安卓下载
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#e7d5d8] lg:hidden"
            aria-label={open ? '关闭菜单' : '打开菜单'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#241820] bg-[#120a10] lg:hidden">
          <nav aria-label="移动端导航" className="mx-auto flex max-w-[1200px] flex-col px-4 py-3">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-lg px-3 py-3 text-[15px]',
                  isActive(item.href)
                    ? 'bg-[#201119] text-[#ffd9f4]'
                    : 'text-[#d9c8cf] hover:bg-[#1a0f16]',
                )}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href={ANDROID_DOWNLOAD_URL}
              prefetch={false}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff3cdf] to-[#ff6b3d] px-4 py-3 text-[15px] font-semibold text-white"
            >
              <Download className="h-4 w-4" />
              立即下载安卓版 APK
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
