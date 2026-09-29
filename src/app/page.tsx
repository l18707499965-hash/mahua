import { Hero } from '@/components/home/hero';
import { CategoryStrip } from '@/components/home/category-strip';
import { FeaturesGrid } from '@/components/home/features-grid';
import { ScreenShowcase } from '@/components/home/screen-showcase';
import { HowTo } from '@/components/home/how-to';
import { Reviews } from '@/components/home/reviews';
import { HomeFaq } from '@/components/home/home-faq';
import { CtaBanner } from '@/components/home/cta-banner';
import { JsonLd } from '@/components/analytics';
import {
  organizationJsonLd,
  websiteJsonLd,
  softwareAppJsonLd,
  faqPageJsonLd,
} from '@/lib/jsonld';
import { FAQS } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={softwareAppJsonLd()} />
      <JsonLd data={faqPageJsonLd(FAQS.slice(0, 6))} />

      <Hero />
      <CategoryStrip />
      <FeaturesGrid />
      <ScreenShowcase />
      <HowTo />
      <Reviews />
      <HomeFaq />
      <CtaBanner />
    </>
  );
}
