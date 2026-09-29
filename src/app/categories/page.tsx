import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Film,
  MonitorPlay,
  Mic2,
  Sparkle,
  ArrowRight,
  Flame,
  Hash,
} from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Container } from '@/components/section';
import { Reveal } from '@/components/reveal';
import { DownloadButton } from '@/components/download-button';
import { JsonLd } from '@/components/analytics';
import { breadcrumbJsonLd } from '@/lib/jsonld';
import { CATEGORIES } from '@/lib/content';

const ICONS: Record<string, typeof Film> = {
  Film,
  MonitorPlay,
  Mic2,
  Sparkle,
};

export const metadata: Metadata = {
  title: '影视资源：电影、电视剧、综艺、动漫频道大全',
  description:
    '麻花影视资源频道总览：38000+ 部电影、16000+ 部电视剧、9500+ 部综艺、22000+ 部动漫持续更新，动作喜剧爱情科幻悬疑、美剧韩剧日剧新番一站看全，安卓手机免费追剧。',
  keywords: [
    '免费电影',
    '电视剧大全',
    '在线综艺',
    '动漫新番',
    '美剧韩剧日剧',
    '影视分类',
    '手机看剧',
  ],
  alternates: { canonical: '/categories' },
};

export default function CategoriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { title: '首页', path: '/' },
          { title: '影视资源' },
        ])}
      />

      <PageHero
        crumbs={[{ title: '首页', href: '/' }, { title: '影视资源' }]}
        title="四大频道，86000+ 部好片"
        description="无论你想看院线大片、热播长剧、下饭综艺还是二次元新番，麻花影视都能一次找全，并且每天持续更新。"
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-16">
          {CATEGORIES.map((category, index) => {
            const Icon = ICONS[category.icon] ?? Film;
            return (
              <article
                key={category.slug}
                id={category.slug}
                className="scroll-mt-24"
              >
                <Reveal>
                  <div className="flex flex-col gap-6 rounded-3xl border border-[#2a1e26] bg-[#130b11] p-8 sm:p-10 lg:flex-row lg:items-start lg:gap-10">
                    <span
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl"
                      style={{ background: category.gradient }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </span>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-[24px] font-extrabold text-[#fbf3f6]">{category.name}</h2>
                        <span className="text-[12.5px] tracking-wider text-[#8a7680]">
                          {category.enName}
                        </span>
                        <span className="rounded-full bg-[#ff3cdf]/15 px-3 py-1 text-[12px] font-semibold text-[#ffb3ea]">
                          {category.count}
                        </span>
                      </div>

                      <p className="mt-4 text-[14.5px] leading-8 text-[#b8a3ab]">
                        {category.description}
                      </p>

                      {/* 题材标签 */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 text-[12.5px] text-[#8a7680]">
                          <Hash className="h-3.5 w-3.5" />
                          热门题材：
                        </span>
                        {category.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#3a2833] bg-[#1c1017] px-3 py-1 text-[12.5px] text-[#cbb9c0]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* 精选榜单 */}
                      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {category.hotTitles.map((title) => (
                          <li
                            key={title}
                            className="flex items-center gap-2 rounded-xl bg-white/[0.04] px-4 py-3 text-[13px] text-[#d4c2c9]"
                          >
                            <Flame className="h-4 w-4 shrink-0 text-[#ff6b3d]" />
                            {title}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/download"
                      className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-xl border border-[#3a2833] px-4 py-2.5 text-[13px] text-[#e7d5d8] transition-colors hover:border-[#ff3cdf]/60"
                    >
                      下载观看
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <DownloadButton size="block" label="免费下载，一次看全四大频道" />
        </Container>
      </section>
    </>
  );
}
