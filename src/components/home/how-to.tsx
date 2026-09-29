import { Download as DownloadIcon, MousePointerClick, PlayCircle } from 'lucide-react';
import { Container, SectionHeading } from '@/components/section';
import { Reveal } from '@/components/reveal';

const STEPS = [
  {
    icon: DownloadIcon,
    step: '01',
    title: '下载 APK 安装包',
    text: '在本官网点击安卓下载，将官方安装包保存到手机，安装包小巧且通过安全检测。',
  },
  {
    icon: MousePointerClick,
    step: '02',
    title: '允许安装并打开',
    text: '点击安装包按提示完成安装，如遇“未知来源”提示，按引导开启一次安装权限即可。',
  },
  {
    icon: PlayCircle,
    step: '03',
    title: '搜片开看，随时追剧',
    text: '打开 App 搜索想看的节目即点即播，登录后还能收藏追剧、云端续播与离线缓存。',
  },
];

export function HowTo() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="GET STARTED"
            title="三步搞定，三十秒开始看片"
            description="无需注册即可观看，下载安装比点外卖还简单。"
          />
        </Reveal>

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          <span
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-9 hidden border-t border-dashed border-[#3a2833] md:block"
          />
          {STEPS.map((item, index) => (
            <Reveal key={item.step} delay={index * 100}>
              <div className="relative flex flex-col items-center text-center">
                <span className="relative flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-[#3a2833] bg-[#1a0f16]">
                  <item.icon className="h-7 w-7 text-[#ff9dc9]" />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-[#ff3cdf] to-[#ff6b3d] text-[12px] font-bold text-white">
                    {item.step}
                  </span>
                </span>
                <h3 className="mt-5 text-[17px] font-bold text-[#fbf3f6]">{item.title}</h3>
                <p className="mt-2 max-w-xs text-[13.5px] leading-7 text-[#a8919b]">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
