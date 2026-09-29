/**
 * 麻花影视官网全局站点配置
 */

export const SITE_NAME = '麻花影视';
export const SITE_SHORT_NAME = '麻花影视';
export const SITE_EN_NAME = 'MaHua Video';
export const SITE_TAGLINE = '口袋里的随身影院';
export const SITE_DESCRIPTION =
  '麻花影视 App 官方网站，提供麻花影视安卓版免费下载安装。聚合海量电影、电视剧、综艺、动漫资源，支持高清秒播、智能搜索、追剧收藏与离线缓存，是安卓手机上好用的免费看剧软件。';
export const SITE_KEYWORDS = [
  '麻花影视',
  '麻花影视下载',
  '麻花影视官网',
  '麻花影视安卓版',
  '麻花影视apk',
  '免费看剧软件',
  '手机看电影神器',
  '影视聚合app',
  '高清电影免费观看',
  '电视剧在线观看',
  '追剧app',
  '电影下载',
  '安卓影视软件',
  '免费影视app推荐',
];

export const ANDROID_DOWNLOAD_URL =
  'https://bos.liao-hai.chat/yxq/%e9%ba%bb%e8%8a%b1%e5%bd%b1%e8%a7%86.apk';
export const BAIDU_TONGJI_ID = '2c7ab51f14382c572a4706be052b6d30';

export const APP_VERSION = 'v5.0.3';
export const APP_SIZE = '26.8 MB';
export const APP_UPDATED = '2025-09-18';
export const APP_MIN_ANDROID = 'Android 5.0 及以上';
export const APP_PACKAGE = 'com.mahua.video';

/**
 * 站点对外访问根地址（不含末尾斜杠）。
 * 优先使用显式配置，其次读取沙箱注入的默认域名。
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  const raw = explicit || process.env.COZE_PROJECT_DOMAIN_DEFAULT || '';
  const withProto = raw.startsWith('http') ? raw : `https://${raw}`;
  return withProto.replace(/\/+$/, '');
}

export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

export const MAIN_NAV: NavItem[] = [
  { title: '首页', href: '/' },
  { title: '功能特色', href: '/features' },
  { title: '影视资源', href: '/categories' },
  { title: '安卓下载', href: '/download' },
  { title: '常见问题', href: '/faq' },
  { title: '关于我们', href: '/about' },
];

export const FOOTER_NAV: { title: string; items: NavItem[] }[] = [
  {
    title: '产品',
    items: [
      { title: '功能特色', href: '/features' },
      { title: '影视资源', href: '/categories' },
      { title: '安卓下载', href: '/download' },
      { title: '更新日志', href: '/download#changelog' },
    ],
  },
  {
    title: '支持',
    items: [
      { title: '常见问题', href: '/faq' },
      { title: '安装教程', href: '/download#install' },
      { title: '联系我们', href: '/contact' },
      { title: '意见反馈', href: '/contact#feedback' },
    ],
  },
  {
    title: '关于',
    items: [
      { title: '关于麻花影视', href: '/about' },
      { title: '用户协议', href: '/terms' },
      { title: '隐私政策', href: '/privacy' },
      { title: '版权声明', href: '/terms#copyright' },
    ],
  },
];
