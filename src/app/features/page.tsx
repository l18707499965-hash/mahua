import type { Metadata } from 'next';
import {
  Clapperboard,
  Sparkles,
  Search,
  Bookmark,
  Download,
  Cast,
  Gauge,
  ShieldCheck,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Container, SectionHeading } from '@/components/section';
import { Reveal } from '@/components/reveal';
import { DownloadButton } from '@/components/download-button';
import { JsonLd } from '@/components/analytics';
import { breadcrumbJsonLd } from '@/lib/jsonld';
import { FEATURES } from '@/lib/content';

const ICONS: Record<string, LucideIcon> = {
  Clapperboard,
  Sparkles,
  Search,
  Bookmark,
  Download,
  Cast,
  Gauge,
  ShieldCheck,
};

export const metadata: Metadata = {
  title: '功能特色 - 高清秒播、全网搜索、追剧收藏、离线投屏',
  description:
    '麻花影视八大核心功能详解：海量影视聚合、1080P 蓝光秒播、智能全网搜索、追剧收藏提醒、离线缓存下载、电视投屏、轻量省流与安全绿色，安卓看剧一个 App 就够。',
  keywords: ['麻花影视功能', '影视app功能', '高清播放器', '离线缓存', '追剧提醒', '电视投屏'],
  alternates: { canonical: '/features' },
};

const SCENES = [
  {
    title: '通勤路上',
    text: '提前 Wi-Fi 离线缓存，地铁隧道里照样流畅看剧，不费流量不转圈。',
  },
  {
    title: '午休下饭',
    text: '打开综艺频道，王牌下饭综艺即点即播，十五分钟也能笑个过瘾。',
  },
  {
    title: '周末客厅',
    text: '一键投屏到电视，约上家人朋友，客厅秒变环绕声私人影院。',
  },
  {
    title: '深夜独处',
    text: '夜间模式柔和不刺眼，戴上耳机，一部好电影治愈一整天的疲惫。',
  },
];

export default function FeaturesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { title: '首页', path: '/' },
          { title: '功能特色' },
        ])}
      />

      <PageHero
        crumbs={[{ title: '首页', href: '/' }, { title: '功能特色' }]}
        title="把“看片”这件小事，做到极致"
        description="麻花影视不堆砌无用功能，所有设计都围绕一件事：让你在任何场景下，都能快速、清晰、安心地看到想看的内容。"
      >
        <DownloadButton label="下载体验全部功能" />
      </PageHero>

      {/* 八大功能详解 */}
      <section className="py-20">
        <Container>
          <div className="space-y-6">
            {FEATURES.map((feature, index) => {
              const Icon = ICONS[feature.icon] ?? Clapperboard;
              const reversed = index % 2 === 1;
              return (
                <Reveal key={feature.title}>
                  <article className="glass-card grid items-center gap-8 rounded-3xl p-8 sm:p-10 lg:grid-cols-[0.85fr_1.15fr]">
                    <div className={reversed ? 'lg:order-2' : ''}>
                      <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#3a2833] bg-[#211219]">
                        <Icon className="h-8 w-8 text-[#ff9dc9]" />
                      </span>
                      <h2 className="mt-5 text-[24px] font-extrabold text-[#fbf3f6]">
                        {feature.title}
                      </h2>
                      <p className="mt-2 text-[14.5px] font-medium text-[#ffa41b]">
                        {feature.summary}
                      </p>
                    </div>
                    <div className={reversed ? 'lg:order-1' : ''}>
                      <p className="text-[15.5px] leading-9 text-[#c2acb4]">{feature.detail}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 场景化 */}
      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="USE SCENES"
              title="一天四个时刻，麻花影视都在"
              description="工具好不好，最终要看它是否真正融入了你的生活。"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SCENES.map((scene, index) => (
              <Reveal key={scene.title} delay={index * 80}>
                <div className="glass-card glass-card-hover h-full rounded-2xl p-6">
                  <span className="text-[13px] font-bold tracking-[0.2em] text-[#ff9dc9]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-[17px] font-bold text-[#fbf3f6]">{scene.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-7 text-[#a8919b]">{scene.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 对比表 */}
      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="COMPARISON"
              title="麻花影视 vs 普通视频 App"
              description="没有贬低，只是选择更适合自己的那一个。"
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-card mt-10 overflow-hidden rounded-2xl">
              <table className="w-full text-left text-[14px]">
                <thead>
                  <tr className="border-b border-[#2a1e26] text-[13px] text-[#9a858e]">
                    <th className="px-6 py-4 font-medium">对比维度</th>
                    <th className="px-6 py-4 font-semibold text-[#ff9dc9]">麻花影视</th>
                    <th className="px-6 py-4 font-medium">单一平台视频 App</th>
                  </tr>
                </thead>
                <tbody className="text-[#cbb9c0]">
                  {[
                    ['资源覆盖', '电影/剧集/综艺/动漫聚合搜齐', '通常仅自有平台内容'],
                    ['会员门槛', '基础播放免费', '部分独播内容需开通会员'],
                    ['安装体积', '不足 30MB，轻量', '普遍 80MB 以上'],
                    ['跨平台追剧', '一个 App 追全平台更新', '需安装多个 App'],
                    ['离线缓存', '支持多任务缓存', '部分内容受限'],
                  ].map(([dim, a, b]) => (
                    <tr key={dim} className="border-b border-[#211620] last:border-0">
                      <td className="px-6 py-4 font-medium text-[#e7d5d8]">{dim}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#34d399]" />
                          {a}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[#9a858e]">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <DownloadButton size="block" label="免费下载麻花影视安卓版" />
        </Container>
      </section>
    </>
  );
}
