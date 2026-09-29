import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Container, SectionHeading } from '@/components/section';
import { Reveal } from '@/components/reveal';
import { FAQS } from '@/lib/content';
import { ArrowRight } from 'lucide-react';

export function HomeFaq() {
  const preview = FAQS.slice(0, 6);

  return (
    <section className="py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="mb-3 text-[12.5px] font-semibold tracking-[0.25em] text-[#ff9dc9]">
              FAQ
            </p>
            <h2 className="text-[28px] font-extrabold text-[#fbf3f6] sm:text-[34px]">
              下载使用前，
              <br />
              你可能想问
            </h2>
            <p className="mt-4 text-[14.5px] leading-8 text-[#b8a3ab]">
              关于安装、播放、安全与版权的常见疑问，我们都整理了明确答案。没有解决你的问题？欢迎到常见问题页查看全部内容或联系我们。
            </p>
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#ff9dc9] transition-all hover:gap-2.5"
            >
              查看全部常见问题
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Accordion type="single" collapsible className="w-full">
            {preview.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`home-faq-${index}`}
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
      </Container>
    </section>
  );
}
