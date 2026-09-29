import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

export const dynamic = 'force-static';

/**
 * /robots.txt
 * 分别声明百度（Baiduspider）、谷歌（Googlebot）、必应（Bingbot）规则，
 * 允许抓取全部公开页面，并指向站点地图。
 */
export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Baiduspider-render',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Slurp',
        allow: '/',
      },
      {
        userAgent: 'Sogou web spider',
        allow: '/',
      },
      {
        userAgent: '360Spider',
        allow: '/',
      },
      {
        userAgent: 'Bytespider',
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
