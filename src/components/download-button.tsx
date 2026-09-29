'use client';

import Link from 'next/link';
import { Download } from 'lucide-react';
import { ANDROID_DOWNLOAD_URL } from '@/lib/site';
import { cn } from '@/lib/utils';

export function DownloadButton({
  className,
  size = 'lg',
  label = '立即下载安卓版',
  subLabel,
}: {
  className?: string;
  size?: 'lg' | 'md' | 'block';
  label?: string;
  subLabel?: string;
}) {
  const sizeClass =
    size === 'lg'
      ? 'px-8 py-4 text-[16px]'
      : size === 'block'
        ? 'w-full justify-center px-6 py-4 text-[16px]'
        : 'px-5 py-2.5 text-[14px]';

  return (
    <Link
      href={ANDROID_DOWNLOAD_URL}
      prefetch={false}
      data-download="android-apk"
      className={cn(
        'group relative inline-flex items-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-[#ff3cdf] via-[#e8386e] to-[#ff6b3d] font-semibold text-white shadow-[0_8px_30px_rgba(243,15,208,0.35)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.99]',
        sizeClass,
        className,
      )}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <Download className="h-5 w-5" />
      <span>
        {label}
        {subLabel && (
          <span className="mt-0.5 block text-[11.5px] font-normal text-white/85">{subLabel}</span>
        )}
      </span>
    </Link>
  );
}
