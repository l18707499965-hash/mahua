import Script from 'next/script';
import { BAIDU_TONGJI_ID } from '@/lib/site';

/**
 * 百度统计代码（站点 ID 由 site.ts 统一管理）
 * 使用 next/script 延迟加载，不阻塞首屏渲染
 */
export function BaiduTongji() {
  return (
    <Script id="baidu-tongji" strategy="afterInteractive">
      {`
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?${BAIDU_TONGJI_ID}";
          hm.async = 1;
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
      `}
    </Script>
  );
}

/**
 * 百度搜索资源平台 - 链接自动推送
 * 每次页面被访问时自动向百度上报，加速页面收录
 */
export function BaiduAutoPush() {
  return (
    <Script
      id="baidu-auto-push"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(){
            var bp = document.createElement('script');
            var curProtocol = window.location.protocol.split(':')[0];
            bp.src = (curProtocol === 'https' ? 'https://zz.bdstatic.com/' : 'http://push.zhanzhang.baidu.com/') + 'push.js';
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(bp, s);
          })();
        `,
      }}
    />
  );
}

/**
 * 结构化数据 JSON-LD 通用注入组件
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // 内容来自服务端构建时的静态数据，安全可信
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}


