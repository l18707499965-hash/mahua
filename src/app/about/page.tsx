import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Eye, Compass, ShieldCheck } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Container, SectionHeading } from '@/components/section';
import { Reveal } from '@/components/reveal';
import { DownloadButton } from '@/components/download-button';
import { JsonLd } from '@/components/analytics';
import { breadcrumbJsonLd, organizationJsonLd } from '@/lib/jsonld';
import { STATS } from '@/lib/content';

export const metadata: Metadata = {
  title: '关于我们 - 品牌故事、使命与产品理念',
  description:
    '了解麻花影视团队：我们相信好内容不该被平台壁垒困住，致力于做简单、干净、好用的影视聚合工具，让每个人用一部手机就能拥有一间随身影院。',
  keywords: ['关于麻花影视', '麻花影视团队', '麻花影视品牌故事', '影视聚合工具'],
  alternates: { canonical: '/about' },
};

const VALUES = [
  {
    icon: Eye,
    title: '好内容，触手可及',
    text: '电影与剧集是生活的避难所。我们希望找片的成本越低越好，让“看什么”成为唯一需要思考的问题。',
  },
  {
    icon: Compass,
    title: '克制的产品观',
    text: '不做信息茧房，不诱导沉迷，不堆砌功能。界面保持干净，把选择权与时间交还给用户。',
  },
  {
    icon: ShieldCheck,
    title: '安全与合规底线',
    text: '尊重版权、保护隐私、透明用权限。对侵权投诉建立处理通道，对用户数据坚持最小必要原则。',
  },
  {
    icon: Heart,
    title: '和用户站在一起',
    text: '8600 万用户的真实反馈驱动产品迭代。我们认真对待每一条报错与建议，因为工具是为人服务的。',
  },
];

const MILESTONES = [
  { year: '2019', event: '麻花影视首个版本上线，定位“手机上的随身影院”' },
  { year: '2020', event: '用户规模突破 1000 万，上线离线缓存与追剧提醒' },
  { year: '2022', event: '播放内核全面升级，首帧速度提升，支持电视投屏' },
  { year: '2024', event: '累计用户超 8000 万，资源库持续扩充至 8.6 万部' },
  { year: '2025', event: '发布 5.x 系列版本，个性化推荐与云端续播全面上线' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { title: '首页', path: '/' },
          { title: '关于我们' },
        ])}
      />

      <PageHero
        crumbs={[{ title: '首页', href: '/' }, { title: '关于我们' }]}
        title="让每一部手机，都有一间影院"
        description="麻花影视是一款面向安卓用户的影视聚合工具。我们不生产内容，而是修好通往好内容的那条路——让它更短、更宽、更安全。"
      />

      {/* 品牌故事 */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <article className="prose-invert">
              <p className="text-[13px] font-semibold tracking-[0.25em] text-[#ff9dc9]">OUR STORY</p>
              <h2 className="mt-3 text-[26px] font-extrabold leading-snug text-[#fbf3f6]">
                一切始于“找片太累”
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-9 text-[#c2acb4]">
                <p>
                  团队最初的成员都是资深影迷。想看一部电影，往往要在三四个视频 App 之间来回搜索：这部在 A 平台独播，那部只有 B 平台有片源，经典老片更是散落各处。装了一堆应用，找片比看片还累。
                </p>
                <p>
                  于是我们做了麻花影视：一个统一的影视入口。输入一次片名，聚合全网结果；点一下，高清即播；追的剧更新了，主动提醒你。没有复杂的会员体系，没有花哨的社区，只把“搜、看、追、藏”做到顺手。
                </p>
                <p>
                  如今，麻花影视已服务超过 8600 万用户。我们依然保持着最初的克制——少即是多，快即是好，让用户把时间花在内容上，而不是工具上。
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#2a1e26] bg-[#2a1e26]">
                {STATS.map((stat) => (
                  <div key={stat.label} className="bg-[#140c12] px-5 py-7 text-center">
                    <dd className="text-[22px] font-extrabold text-gradient-brand">{stat.value}</dd>
                    <dt className="mt-1 text-[12.5px] text-[#a8919b]">{stat.label}</dt>
                  </div>
                ))}
              </dl>
              <div className="glass-card flex-1 rounded-2xl p-7">
                <h3 className="text-[17px] font-bold text-[#fbf3f6]">我们的使命</h3>
                <p className="mt-3 text-[14.5px] leading-8 text-[#b8a3ab]">
                  用技术消除内容与观众之间的壁垒，做最简单、最干净、最值得信赖的影视入口，让好故事抵达每一个人。
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 价值观 */}
      <section className="py-16">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="VALUES" title="我们坚持的四件事" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <div className="glass-card glass-card-hover h-full rounded-2xl p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3a2833] bg-[#211219]">
                    <value.icon className="h-5 w-5 text-[#ff9dc9]" />
                  </span>
                  <h3 className="mt-4 text-[16px] font-bold text-[#fbf3f6]">{value.title}</h3>
                  <p className="mt-2 text-[13px] leading-7 text-[#a8919b]">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 里程碑 */}
      <section className="py-16">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="MILESTONES" title="一路走来的脚印" align="left" />
          </Reveal>
          <ol className="mt-10 space-y-0 border-l border-[#3a2833] pl-8">
            {MILESTONES.map((item, index) => (
              <Reveal key={item.year} delay={index * 60}>
                <li className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[39px] top-1 h-3.5 w-3.5 rounded-full border-2 border-[#ff3cdf] bg-[#0c070b]" />
                  <span className="text-[15px] font-extrabold text-[#ff9dc9]">{item.year}</span>
                  <p className="mt-1 text-[14px] leading-7 text-[#c2acb4]">{item.event}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* 合规承诺 */}
      <section className="py-16">
        <Container>
          <Reveal>
            <div className="glass-card rounded-3xl p-8 sm:p-10">
              <h2 className="text-[22px] font-extrabold text-[#fbf3f6]">合规与版权承诺</h2>
              <p className="mt-4 max-w-4xl text-[14.5px] leading-9 text-[#b8a3ab]">
                麻花影视为影视资源聚合导航工具，不直接上传、存储任何影视内容，所有播放数据来自公开第三方站点。我们充分尊重创作者与版权方的合法权益，设有便捷的侵权投诉处理通道；如认为站内链接涉及侵权，可依照
                <Link href="/terms#copyright" className="mx-1 text-[#ff9dc9] underline underline-offset-4">
                  版权声明
                </Link>
                中的流程提交材料，我们将在核实后第一时间处理。
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <DownloadButton size="block" label="加入 8600 万用户，立即免费下载" />
        </Container>
      </section>
    </>
  );
}
