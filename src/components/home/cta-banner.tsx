import { ShieldCheck, Smartphone } from 'lucide-react';
import { Container } from '@/components/section';
import { Reveal } from '@/components/reveal';
import { DownloadButton } from '@/components/download-button';
import { APP_VERSION, APP_SIZE, APP_MIN_ANDROID } from '@/lib/site';

export function CtaBanner() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-[#3a2833] bg-gradient-to-br from-[#2a0e26] via-[#1a0b18] to-[#2a0f08] px-6 py-14 text-center sm:px-14 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,60,223,0.25),transparent_65%)]"
            />
            <div className="relative">
              <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#4a2e40] bg-black/30 px-3.5 py-1.5 text-[12.5px] text-[#e7c9d2]">
                <Smartphone className="h-3.5 w-3.5" />
                {APP_VERSION} · {APP_MIN_ANDROID}
              </p>
              <h2 className="mx-auto mt-6 max-w-2xl text-[30px] font-extrabold leading-tight text-white sm:text-[40px]">
                今晚，就在麻花影视
                <span className="text-gradient-brand">看场好片</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-8 text-[#d4c2c9]">
                官方 APK 安全无毒，免费下载、免费观看，8600 万用户的口袋影院，现在加入正当时。
              </p>
              <div className="mt-8 flex justify-center">
                <DownloadButton subLabel={`${APP_VERSION} · ${APP_SIZE} · 免费下载`} />
              </div>
              <p className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] text-[#a8919b]">
                <ShieldCheck className="h-4 w-4 text-[#34d399]" />
                安装包经多重安全检测 · 不扣费 · 不偷跑流量
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
