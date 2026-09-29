import type { MetadataRoute } from 'next';
import { SITE_NAME, SITE_SHORT_NAME, SITE_DESCRIPTION } from '@/lib/site';

export const dynamic = 'force-static';

/**
 * /manifest.webmanifest - PWA 清单，提升移动端安装体验与收录质量
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_SHORT_NAME,
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#0c070b',
    theme_color: '#0c070b',
    lang: 'zh-CN',
    scope: '/',
    orientation: 'portrait',
    categories: ['entertainment', 'video'],
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
