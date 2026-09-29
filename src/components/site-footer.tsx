import Link from 'next/link';
import { Logo } from '@/components/logo';
import { FOOTER_NAV, SITE_NAME, ANDROID_DOWNLOAD_URL } from '@/lib/site';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#241820] bg-[#0a0509]">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[13.5px] leading-7 text-[#9a858e]">
              口袋里的随身影院。聚合海量电影、电视剧、综艺、动漫资源，安卓手机免费看剧，就用麻花影视。
            </p>
            <Link
              href={ANDROID_DOWNLOAD_URL}
              prefetch={false}
              className="mt-5 inline-flex rounded-lg border border-[#3a2833] px-4 py-2 text-[13px] text-[#e7d5d8] transition-colors hover:border-[#ff3cdf]/60 hover:text-white"
            >
              Android APK 官方下载
            </Link>
          </div>

          {FOOTER_NAV.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-[13px] font-semibold tracking-wider text-[#cbb9c0]">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13.5px] text-[#9a858e] transition-colors hover:text-[#ffd9f4]"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#1d1319] pt-6 text-[12.5px] text-[#7a6770] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_NAME} 官方网站. All Rights Reserved.
          </p>
          <p className="max-w-2xl leading-6">
            本站为影视资源聚合导航工具，不存储任何影视文件；作品版权归原权利人所有，如有侵权请及时联系处理。
          </p>
        </div>
      </div>
    </footer>
  );
}
