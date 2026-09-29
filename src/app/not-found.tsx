import Link from 'next/link';
import { Home, Download as DownloadIcon, Compass } from 'lucide-react';
import { LogoMark } from '@/components/logo';

export const metadata = {
  title: '页面未找到',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[360px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,60,223,0.14),transparent_65%)]"
      />
      <div className="relative text-center">
        <span className="mx-auto block h-20 w-20">
          <LogoMark />
        </span>
        <h1 className="mt-8 text-[88px] font-extrabold leading-none text-gradient-brand">
          404
        </h1>
        <p className="mt-4 text-[18px] font-bold text-[#fbf3f6]">
          放映厅打烊了，这个页面不存在
        </p>
        <p className="mx-auto mt-2 max-w-md text-[14px] leading-7 text-[#a8919b]">
          你访问的链接可能已失效或被移除，不如回到首页继续找片。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ff3cdf] to-[#ff6b3d] px-5 py-3 text-[14px] font-semibold text-white"
          >
            <Home className="h-4 w-4" />
            返回首页
          </Link>
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 rounded-xl border border-[#3a2833] px-5 py-3 text-[14px] text-[#e7d5d8]"
          >
            <Compass className="h-4 w-4" />
            浏览影视资源
          </Link>
          <Link
            href="/download"
            className="inline-flex items-center gap-2 rounded-xl border border-[#3a2833] px-5 py-3 text-[14px] text-[#e7d5d8]"
          >
            <DownloadIcon className="h-4 w-4" />
            安卓下载
          </Link>
        </div>
      </div>
    </section>
  );
}
