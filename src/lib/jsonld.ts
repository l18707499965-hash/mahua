import {
  SITE_NAME,
  SITE_DESCRIPTION,
  ANDROID_DOWNLOAD_URL,
  APP_VERSION,
  getSiteUrl,
} from '@/lib/site';
import type { Faq } from '@/lib/content';

const siteUrl = getSiteUrl();

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    alternateName: 'MaHua Video',
    url: siteUrl,
    logo: `${siteUrl}/icon-512.png`,
    description: SITE_DESCRIPTION,
    slogan: '口袋里的随身影院',
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${SITE_NAME}官网`,
    url: siteUrl,
    description: SITE_DESCRIPTION,
    inLanguage: 'zh-CN',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/icon-512.png` },
    },
  };
}

export function softwareAppJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    operatingSystem: 'Android',
    applicationCategory: 'MultimediaApplication',
    applicationSubCategory: 'Video Streaming',
    softwareVersion: APP_VERSION,
    description: SITE_DESCRIPTION,
    url: `${siteUrl}/download`,
    downloadUrl: ANDROID_DOWNLOAD_URL,
    fileFormat: 'apk',
    inLanguage: 'zh-CN',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '128653',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: `${SITE_NAME}团队`,
    },
  };
}

export function faqPageJsonLd(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  crumbs: { title: string; path?: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.title,
      item: crumb.path ? `${siteUrl}${crumb.path}` : siteUrl,
    })),
  };
}
