import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PageHero } from '@/components/page-hero';
import { Container } from '@/components/section';
import { Reveal } from '@/components/reveal';
import { DownloadButton } from '@/components/download-button';
import { JsonLd } from '@/components/analytics';
import { breadcrumbJsonLd, faqPageJsonLd } from '@/lib/jsonld';
import { FAQS, FAQ_CATEGORIES } from '@/lib/content';

export const metadata: Metadata = {
  title: '常见问题：下载安装、播放使用、账号安全与版权说明',
  description:
    '麻花影视常见问题大全：安卓 APK 如何下载安装、未知来源权限怎么开、无法播放如何切换线路、是否收费、是否安全、收藏进度如何同步、版权内容如何处理，答案一次讲清楚。',
  keywords: ['麻花影视常见问题', '麻花影视怎么下载', '麻花影视无法播放', '麻花影视安全吗', '麻花影视收费吗'],
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(FAQS)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { title: '首页', path: '/' },
          { title: '常见问题' },
        ])}
      />

      <PageHero
        crumbs={[{ title: '首页', href: '/' }, { title: '常见问题' }]}
        title="常见问题"
        description="汇总用户最关心的 10 个问题，覆盖下载、安装、播放、账号、安全与版权。如果没有找到答案，可通过页面底部渠道联系我们。"
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-12">
          {FAQ_CATEGORIES.map((category) => {
            const list = FAQS.filter((faq) => faq.category === category);
            if (list.length === 0) return null;
            return (
              <div key={category}>
                <Reveal>
                  <h2 className="flex items-center gap-3 text-[22px] font-extrabold text-[#fbf3f6]">
                    <span className="h-5 w-1.5 rounded-full bg-gradient-to-b from-[#ff3cdf] to-[#ff6b3d]" />
                    {category}
                  </h2>
                </Reveal>
                <Reveal delay={80}>
                  <Accordion type="single" collapsible className="mt-5 w-full">
                    {list.map((faq, index) => (
                      <AccordionItem
                        key={faq.question}
                        value={`faq-${category}-${index}`}
                        className="border-[#2a1e26]"
                      >
                        <AccordionTrigger className="text-left text-[15.5px] font-semibold text-[#f0e4e9] hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-[14px] leading-8 text-[#b8a3ab]">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Reveal>
              </div>
            );
          })}
        </Container>
      </section>

      <section className="pb-24">
        <Container className="glass-card flex flex-col items-center gap-5 rounded-3xl p-10 text-center sm:p-12">
          <h2 className="text-[24px] font-extrabold text-white">还是没有解决你的问题？</h2>
          <p className="max-w-xl text-[14px] leading-8 text-[#b8a3ab]">
            可前往“联系我们”页面，通过 App 内反馈或留言渠道描述你遇到的情况，我们会尽快回复。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-2xl border border-[#3a2833] px-6 py-3.5 text-[14.5px] text-[#e7d5d8] transition-colors hover:border-[#ff3cdf]/50"
            >
              联系客服
            </Link>
            <DownloadButton label="下载最新版本试试" />
          </div>
        </Container>
      </section>
    </>
  );
}
