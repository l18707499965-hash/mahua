import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { BaiduTongji, BaiduAutoPush } from '@/components/analytics';
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  getSiteUrl,
} from '@/lib/site';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME}官网 - 安卓版免费下载安装 | 口袋里的随身影院`,
    template: `%s | ${SITE_NAME}官网`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: `${SITE_NAME}团队` }],
  generator: 'Next.js',
  referrer: 'strict-origin-when-cross-origin',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }, { url: '/favicon-64.png', sizes: '64x64', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: `${SITE_NAME} - 口袋里的随身影院`,
    description: SITE_DESCRIPTION,
    url: siteUrl,
    siteName: SITE_NAME,
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME}安卓版免费下载`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME}官网 | 安卓版免费下载`,
    description: '海量电影电视剧综艺动漫聚合，高清秒播、离线缓存、追剧提醒，安卓免费看剧神器。',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    'baidu-site-verification': '',
    'msvalidate.01': '',
    'applicable-device': 'pc,mobile',
    'mobile-web-app-capable': 'yes',
    'format-detection': 'telephone=no',
  },
  category: 'technology',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0c070b',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-[#0c070b] text-[#f5ecf0] antialiased">
        <BaiduTongji />
        <BaiduAutoPush />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
