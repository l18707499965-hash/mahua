import { ShieldCheck, Zap, Star } from 'lucide-react';
import { Container } from '@/components/section';
import { PhoneMockup } from '@/components/phone-mockup';
import { DownloadButton } from '@/components/download-button';
import { STATS } from '@/lib/content';
import { APP_VERSION, APP_SIZE } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* 背景氛围光 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(243,15,208,0.18),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-40 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(255,107,61,0.15),transparent_65%)]"
      />

      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#3a2833] bg-[#1a0f16] px-3.5 py-1.5 text-[12.5px] text-[#e7c9d2]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff3cdf]" />
            {APP_VERSION} 全新版本 · 安卓版官方下载
          </p>

          <h1 className="mt-6 text-[38px] font-extrabold leading-[1.2] tracking-tight text-[#fbf3f6] sm:text-[52px]">
            口袋里的
            <span className="text-gradient-brand">随身</span>
            影院
            <br />
            海量大片免费看
          </h1>

          <p className="mt-5 max-w-xl text-[16px] leading-8 text-[#c2acb4]">
            麻花影视聚合全网电影、电视剧、综艺、动漫资源，支持 1080P 高清秒播、智能搜索、追剧提醒、离线缓存与电视投屏。安装包仅 {APP_SIZE}，安卓手机即装即用。
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <DownloadButton subLabel={`官方 APK · ${APP_SIZE} · 安全检测通过`} />
            <div className="flex items-center gap-1.5 text-[14px] text-[#c2acb4]">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#ffce2e] text-[#ffce2e]" />
                ))}
              </span>
              <span className="font-semibold text-[#f5ecf0]">4.8</span>
              <span className="text-[#9a858e]">/ 8600 万用户选择</span>
            </div>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#a8919b]">
            {[
              { icon: ShieldCheck, text: '绿色安全 · 无恶意插件' },
              { icon: Zap, text: '即点即播 · 高清不卡顿' },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-1.5">
                <Icon className="h-4 w-4 text-[#ffa41b]" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <PhoneMockup />
      </Container>

      {/* 数据条 */}
      <Container className="relative pb-16">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#2a1e26] bg-[#2a1e26] sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-[#140c12] px-6 py-6 text-center">
              <dt className="order-2 mt-1 text-[12.5px] text-[#a8919b]">{stat.label}</dt>
              <dd className="text-[24px] font-extrabold text-gradient-brand">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
