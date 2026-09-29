import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  HardDrive,
  CalendarClock,
  Smartphone,
  Check,
  Settings,
  FileDown,
  Play,
  AlertTriangle,
  Bug,
  Wrench,
  Plus,
} from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Container } from '@/components/section';
import { Reveal } from '@/components/reveal';
import { DownloadButton } from '@/components/download-button';
import { JsonLd } from '@/components/analytics';
import { breadcrumbJsonLd, softwareAppJsonLd } from '@/lib/jsonld';
import { CHANGELOG } from '@/lib/content';
import {
  ANDROID_DOWNLOAD_URL,
  APP_VERSION,
  APP_SIZE,
  APP_UPDATED,
  APP_MIN_ANDROID,
  APP_PACKAGE,
} from '@/lib/site';

export const metadata: Metadata = {
  title: '安卓版下载 - 官方 APK 免费下载安装',
  description:
    '麻花影视安卓版官方下载入口，免费下载最新版 APK 安装包：海量电影电视剧综艺动漫聚合、1080P 高清秒播、离线缓存、追剧提醒与电视投屏，附详细安装教程与版本更新日志。',
  keywords: [
    '麻花影视下载',
    '麻花影视安卓版下载',
    '麻花影视apk',
    '麻花影视官方下载',
    '麻花影视最新版',
    '免费影视app下载',
  ],
  alternates: { canonical: '/download' },
};

const INSTALL_STEPS = [
  {
    icon: FileDown,
    title: '第一步：下载安装包',
    text: '点击页面上方“立即下载”按钮，将麻花影视官方 APK 保存到手机。建议在 Wi-Fi 网络下下载。',
  },
  {
    icon: Settings,
    title: '第二步：允许安装未知应用',
    text: '若系统弹出“未知来源”拦截，进入「设置 - 安全 - 安装未知应用」，为当前浏览器开启权限，该权限仅用于本次安装，装完即可关闭。',
  },
  {
    icon: Play,
    title: '第三步：安装并打开',
    text: '点击下载完成的 APK，按提示完成安装后打开应用，无需注册即可搜索观看，登录可解锁追剧同步等功能。',
  },
];

const PERMISSIONS = [
  { name: '存储权限', purpose: '保存离线缓存、读取本地已下载文件' },
  { name: '网络权限', purpose: '在线搜索、播放与资源更新' },
  { name: '设备信息', purpose: '适配机型、崩溃诊断与播放优化' },
  { name: '通知权限', purpose: '接收追剧更新提醒（可关闭）' },
];

const TROUBLESHOOT = [
  {
    q: '提示“未知来源”无法安装',
    a: '在系统设置中为浏览器开启“安装未知应用”权限后重试，详见上方安装教程。',
  },
  {
    q: '下载后提示“解析包错误”',
    a: '多为下载不完整或系统版本过低。请删除后重新下载，并确认系统不低于 Android 5.0。',
  },
  {
    q: '手机管家报风险提醒',
    a: '因未上架部分厂商商店，个别管家会对侧载安装包做通用提示。官方包经安全检测，请认准本站下载地址。',
  },
];

const CHANGELOG_ICONS = {
  new: { icon: Plus, label: '新增', color: 'text-[#ff9dc9]' },
  improve: { icon: Wrench, label: '优化', color: 'text-[#ffa41b]' },
  fix: { icon: Bug, label: '修复', color: 'text-[#34d399]' },
} as const;

export default function DownloadPage() {
  return (
    <>
      <JsonLd data={softwareAppJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { title: '首页', path: '/' },
          { title: '安卓下载' },
        ])}
      />

      <PageHero
        crumbs={[{ title: '首页', href: '/' }, { title: '安卓下载' }]}
        title="麻花影视安卓版官方下载"
        description="认准官方下载地址，免费获取最新版本 APK。安装包经安全检测，支持 Android 5.0 及以上机型。"
      />

      {/* 票根式下载卡片 */}
      <section className="py-16">
        <Container>
          <Reveal>
            <div className="glass-card relative overflow-hidden rounded-3xl">
              <div className="grid lg:grid-cols-[1.3fr_0.9fr]">
                <div className="p-8 sm:p-10">
                  <p className="inline-flex items-center gap-2 rounded-full bg-[#ff3cdf]/15 px-3 py-1 text-[12px] font-semibold text-[#ffb3ea]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff3cdf]" />
                    官方最新版本
                  </p>
                  <h2 className="mt-5 text-[30px] font-extrabold text-white">
                    麻花影视 <span className="text-gradient-brand">{APP_VERSION}</span>
                  </h2>
                  <p className="mt-3 max-w-lg text-[14.5px] leading-8 text-[#b8a3ab]">
                    电影、电视剧、综艺、动漫聚合观看；1080P 高清秒播、全网搜索、追剧提醒、离线缓存、电视投屏，全部免费使用。
                  </p>

                  <div className="mt-7 flex flex-wrap gap-4">
                    <DownloadButton />
                    <Link
                      href="#install"
                      className="inline-flex items-center rounded-2xl border border-[#3a2833] px-6 py-4 text-[14.5px] text-[#e7d5d8] transition-colors hover:border-[#ff3cdf]/50"
                    >
                      查看安装教程
                    </Link>
                  </div>

                  <p className="mt-5 flex items-center gap-2 text-[12.5px] text-[#9a858e]">
                    <ShieldCheck className="h-4 w-4 text-[#34d399]" />
                    安全检测通过 · 无病毒 · 无恶意扣费 · 无强制捆绑
                  </p>
                </div>

                {/* 版本信息：票根右侧 */}
                <div className="relative border-t border-dashed border-[#3a2833] bg-[#120a10] p-8 sm:p-10 lg:border-l lg:border-t-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 rounded-full bg-[#0c070b] lg:block"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 rounded-full bg-[#0c070b] lg:block"
                  />
                  <dl className="space-y-5 text-[14px]">
                    {[
                      { icon: Smartphone, label: '适用系统', value: APP_MIN_ANDROID },
                      { icon: HardDrive, label: '安装包大小', value: APP_SIZE },
                      { icon: CalendarClock, label: '更新时间', value: APP_UPDATED },
                      { icon: FileDown, label: '版本号', value: APP_VERSION },
                      { icon: ShieldCheck, label: '包名', value: APP_PACKAGE },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-[#ff9dc9]" />
                        <dt className="w-24 shrink-0 text-[#9a858e]">{label}</dt>
                        <dd className="font-medium text-[#f0e4e9] break-all">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-6 break-all rounded-lg bg-black/30 p-3 text-[11px] leading-5 text-[#8a7680]">
                    下载地址：{ANDROID_DOWNLOAD_URL}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 安装教程 */}
      <section id="install" className="scroll-mt-24 py-16">
        <Container>
          <Reveal>
            <h2 className="text-[28px] font-extrabold text-[#fbf3f6] sm:text-[32px]">
              安卓安装教程（图解版）
            </h2>
            <p className="mt-3 text-[14.5px] text-[#b8a3ab]">
              安卓手机因品牌系统差异，首次安装非应用商店 App 时可能需要手动授权，按以下步骤操作即可。
            </p>
          </Reveal>

          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {INSTALL_STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 90}>
                <li className="glass-card glass-card-hover h-full rounded-2xl p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff3cdf]/30 to-[#ff6b3d]/30">
                    <step.icon className="h-6 w-6 text-white" />
                  </span>
                  <h3 className="mt-5 text-[16.5px] font-bold text-[#fbf3f6]">{step.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-7 text-[#a8919b]">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* 权限说明 */}
      <section className="py-16">
        <Container>
          <Reveal>
            <h2 className="text-[28px] font-extrabold text-[#fbf3f6] sm:text-[32px]">
              权限申请说明
            </h2>
            <p className="mt-3 max-w-3xl text-[14.5px] leading-8 text-[#b8a3ab]">
              我们坚持“最小必要”原则，每一项权限都对应具体功能用途，并可在系统设置中随时收回。拒绝非必要权限不影响基础观看。
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="glass-card mt-8 overflow-hidden rounded-2xl">
              <ul>
                {PERMISSIONS.map((perm, index) => (
                  <li
                    key={perm.name}
                    className={`flex flex-col gap-1 px-7 py-5 sm:flex-row sm:items-center sm:gap-6 ${
                      index !== PERMISSIONS.length - 1 ? 'border-b border-[#211620]' : ''
                    }`}
                  >
                    <span className="flex w-40 shrink-0 items-center gap-2 text-[14.5px] font-semibold text-[#f0e4e9]">
                      <Check className="h-4 w-4 text-[#34d399]" />
                      {perm.name}
                    </span>
                    <span className="text-[13.5px] text-[#a8919b]">{perm.purpose}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 常见下载问题 */}
      <section className="py-16">
        <Container>
          <Reveal>
            <h2 className="flex items-center gap-2.5 text-[28px] font-extrabold text-[#fbf3f6] sm:text-[32px]">
              <AlertTriangle className="h-7 w-7 text-[#ffa41b]" />
              下载安装常见问题
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {TROUBLESHOOT.map((item, index) => (
              <Reveal key={item.q} delay={index * 80}>
                <div className="glass-card h-full rounded-2xl p-6">
                  <h3 className="text-[15px] font-bold text-[#fbf3f6]">{item.q}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-7 text-[#a8919b]">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-[13.5px] text-[#9a858e]">
            还有问题？前往
            <Link href="/faq" className="mx-1 text-[#ff9dc9] underline underline-offset-4">
              常见问题页
            </Link>
            或
            <Link href="/contact" className="mx-1 text-[#ff9dc9] underline underline-offset-4">
              联系我们
            </Link>
            。
          </p>
        </Container>
      </section>

      {/* 更新日志 */}
      <section id="changelog" className="scroll-mt-24 py-16">
        <Container>
          <Reveal>
            <h2 className="text-[28px] font-extrabold text-[#fbf3f6] sm:text-[32px]">更新日志</h2>
            <p className="mt-3 text-[14.5px] text-[#b8a3ab]">产品持续迭代，每一个版本都在变得更快、更稳、更好用。</p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {CHANGELOG.map((entry, index) => (
              <Reveal key={entry.version} delay={index * 60}>
                <article className="glass-card rounded-2xl p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-[18px] font-extrabold text-[#fbf3f6]">{entry.version}</h3>
                    <span className="text-[12.5px] text-[#8a7680]">{entry.date}</span>
                    {index === 0 && (
                      <span className="rounded-full bg-gradient-to-r from-[#ff3cdf] to-[#ff6b3d] px-2.5 py-0.5 text-[11px] font-semibold text-white">
                        当前版本
                      </span>
                    )}
                  </div>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {entry.items.map((item) => {
                      const meta = CHANGELOG_ICONS[item.type];
                      const MetaIcon = meta.icon;
                      return (
                        <li key={item.text} className="flex items-start gap-2.5 text-[13.5px] text-[#c2acb4]">
                          <MetaIcon className={`mt-0.5 h-4 w-4 shrink-0 ${meta.color}`} />
                          <span>
                            <span className={`mr-1.5 text-[11.5px] font-semibold ${meta.color}`}>
                              {meta.label}
                            </span>
                            {item.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <DownloadButton size="block" subLabel={`${APP_VERSION} · ${APP_SIZE} · ${APP_MIN_ANDROID}`} />
        </Container>
      </section>
    </>
  );
}
