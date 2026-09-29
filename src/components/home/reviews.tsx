import { Star, Quote } from 'lucide-react';
import { Container, SectionHeading } from '@/components/section';
import { Reveal } from '@/components/reveal';
import { REVIEWS } from '@/lib/content';

export function Reviews() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="USER VOICES"
            title="8600 万用户的共同选择"
            description="以下评价来自真实用户的使用反馈（部分已做匿名化处理）。"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <Reveal key={review.name} delay={(index % 3) * 80}>
              <figure className="glass-card glass-card-hover h-full rounded-2xl p-6">
                <Quote className="h-6 w-6 text-[#ff3cdf]/50" />
                <blockquote className="mt-3 text-[14px] leading-7 text-[#d4c2c9]">
                  {review.content}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-[#241820] pt-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#ff3cdf]/40 to-[#ff6b3d]/40 text-[13px] font-bold text-white">
                    {review.name.slice(0, 1)}
                  </span>
                  <span>
                    <span className="block text-[13.5px] font-semibold text-[#f5ecf0]">{review.name}</span>
                    <span className="block text-[12px] text-[#8a7680]">{review.role}</span>
                  </span>
                  <span className="ml-auto flex">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[#ffce2e] text-[#ffce2e]" />
                    ))}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
