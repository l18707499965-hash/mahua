import {
  Clapperboard,
  Sparkles,
  Search,
  Bookmark,
  Download,
  Cast,
  Gauge,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { Container, SectionHeading } from '@/components/section';
import { Reveal } from '@/components/reveal';
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

export function FeaturesGrid() {
  return (
    <section className="relative py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3a2833] to-transparent"
      />
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="WHY MAHUA"
            title="不只是能看，还要看得爽"
            description="从资源量、画质、速度到安全细节，每一项功能都围绕“随手打开，立刻开看”设计。"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = ICONS[feature.icon] ?? Clapperboard;
            return (
              <Reveal key={feature.title} delay={(index % 4) * 70}>
                <article className="glass-card glass-card-hover h-full rounded-2xl p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#3a2833] bg-[#211219]">
                    <Icon className="h-5 w-5 text-[#ff9dc9]" />
                  </span>
                  <h3 className="mt-4 text-[16.5px] font-bold text-[#fbf3f6]">{feature.title}</h3>
                  <p className="mt-1.5 text-[13px] font-medium text-[#ffa41b]">{feature.summary}</p>
                  <p className="mt-2.5 text-[13px] leading-7 text-[#a8919b]">{feature.detail}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
