import type { Metadata } from 'next';
import { MessageSquareText, Megaphone, Bug, Mail, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Container } from '@/components/section';
import { Reveal } from '@/components/reveal';
import { JsonLd } from '@/components/analytics';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: '联系我们：意见反馈、播放报错与商务合作',
  description:
    '联系麻花影视团队：App 内意见反馈、片源报错上报、版权投诉处理与商务合作渠道说明。我们重视每一条用户声音，会持续改进产品体验。',
  keywords: ['麻花影视客服', '麻花影视联系方式', '麻花影视反馈', '片源报错', '版权投诉'],
  alternates: { canonical: '/contact' },
  robots: { index: true, follow: true },
};

const CHANNELS = [
  {
    id: 'feedback',
    icon: MessageSquareText,
    title: 'App 内意见反馈（推荐）',
    text: '打开麻花影视，进入「我的 - 意见反馈」，可提交功能建议与问题描述。App 内反馈会自动附带机型与版本信息，定位问题最快。',
    hint: '路径：我的 → 设置 → 意见反馈',
  },
  {
    id: 'error',
    icon: Bug,
    title: '片源报错上报',
    text: '遇到某部影片无法播放、字幕异常或集数缺失，可在播放页点击「报错」按钮上报；也可在反馈中写明片名、集数与所选线路，我们会尽快修复。',
    hint: '路径：播放页 → 右上角菜单 → 报错',
  },
  {
    id: 'notice',
    icon: Megaphone,
    title: '公告与社群',
    text: '版本更新、线路维护等重要通知会在 App 首页公告栏与启动页第一时间发布，请保持应用为最新版本，避免错过服务变更信息。',
    hint: '位置：App 首页顶部公告',
  },
  {
    id: 'copyright',
    icon: Mail,
    title: '版权投诉与商务合作',
    text: '版权方投诉请按「用户协议 - 版权声明」要求准备权属证明材料，通过页面公示渠道提交；商务合作与媒体采访请在邮件标题注明合作类型，我们会转交对应负责人。',
    hint: '详见：用户协议 → 版权声明',
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { title: '首页', path: '/' },
          { title: '联系我们' },
        ])}
      />

      <PageHero
        crumbs={[{ title: '首页', href: '/' }, { title: '联系我们' }]}
        title="联系我们"
        description="你的每一条反馈，都在让麻花影视变得更好。以下是与我们取得联系的官方渠道。"
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-5 sm:grid-cols-2">
          {CHANNELS.map((channel, index) => (
            <Reveal key={channel.id} delay={(index % 2) * 90}>
              <article id={channel.id} className="glass-card glass-card-hover h-full scroll-mt-24 rounded-2xl p-7 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff3cdf]/30 to-[#ff6b3d]/30">
                  <channel.icon className="h-6 w-6 text-white" />
                </span>
                <h2 className="mt-5 text-[18px] font-bold text-[#fbf3f6]">{channel.title}</h2>
                <p className="mt-3 text-[14px] leading-8 text-[#b8a3ab]">{channel.text}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-black/30 px-3 py-1.5 text-[12px] text-[#ffa41b]">
                  {channel.hint}
                </p>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="pb-24">
        <Container className="glass-card flex flex-col items-center gap-4 rounded-3xl p-10 text-center">
          <h2 className="text-[22px] font-extrabold text-white">反馈前，建议先升级到最新版</h2>
          <p className="max-w-xl text-[14px] leading-8 text-[#b8a3ab]">
            不少问题在新版本中已经修复。如果仍有异常，也可以先查看常见问题页寻找答案。
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <a
              href="/download"
              className="inline-flex items-center gap-1.5 rounded-2xl bg-gradient-to-r from-[#ff3cdf] to-[#ff6b3d] px-6 py-3.5 text-[14px] font-semibold text-white"
            >
              前往下载页
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/faq"
              className="inline-flex items-center rounded-2xl border border-[#3a2833] px-6 py-3.5 text-[14px] text-[#e7d5d8]"
            >
              查看常见问题
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
