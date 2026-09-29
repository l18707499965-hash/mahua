import Link from 'next/link';
import { Film, MonitorPlay, Mic2, Sparkle, ArrowRight } from 'lucide-react';
import { Container, SectionHeading } from '@/components/section';
import { Reveal } from '@/components/reveal';
import { CATEGORIES } from '@/lib/content';

const ICONS: Record<string, typeof Film> = {
  Film,
  MonitorPlay,
  Mic2,
  Sparkle,
};

export function CategoryStrip() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="RESOURCE MATRIX"
            title="四大频道，好片看到停不下来"
            description="从院线大片到卫视热剧，从下饭综艺到二次元新番，麻花影视把分散在各平台的好内容收进口袋。"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category, index) => {
            const Icon = ICONS[category.icon] ?? Film;
            return (
              <Reveal key={category.slug} delay={index * 80}>
                <Link
                  href={`/categories#${category.slug}`}
                  className="glass-card glass-card-hover group flex h-full flex-col rounded-2xl p-6"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: category.gradient }}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </span>
                  <h3 className="mt-5 text-[18px] font-bold text-[#fbf3f6]">{category.name}</h3>
                  <p className="mt-1 text-[12px] tracking-wider text-[#8a7680]">{category.enName}</p>
                  <p className="mt-3 text-[13.5px] leading-7 text-[#b8a3ab]">{category.count}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-[#ff9dc9] transition-all group-hover:gap-2">
                    进入频道
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
