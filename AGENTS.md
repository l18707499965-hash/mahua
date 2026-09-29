# 项目上下文

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4

## 目录结构

```
├── public/                 # 静态资源
├── scripts/                # 构建与启动脚本
│   ├── build.sh            # 构建脚本
│   ├── dev.sh              # 开发环境启动脚本
│   ├── prepare.sh          # 预处理脚本
│   └── start.sh            # 生产环境启动脚本
├── src/
│   ├── app/                # 页面路由与布局
│   ├── components/ui/      # Shadcn UI 组件库
│   ├── hooks/              # 自定义 Hooks
│   ├── lib/                # 工具库
│   │   └── utils.ts        # 通用工具函数 (cn)
│   └── server.ts           # 自定义服务端入口
├── next.config.ts          # Next.js 配置
├── package.json            # 项目依赖管理
└── tsconfig.json           # TypeScript 配置
```

- 项目文件（如 app 目录、pages 目录、components 等）默认初始化到 `src/` 目录下。

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。
**常用命令**：
- 安装依赖：`pnpm add <package>`
- 安装开发依赖：`pnpm add -D <package>`
- 安装所有依赖：`pnpm install`
- 移除依赖：`pnpm remove <package>`

## 开发规范

### 编码规范

- 默认按 TypeScript `strict` 心智写代码；优先复用当前作用域已声明的变量、函数、类型和导入，禁止引用未声明标识符或拼错变量名。
- 禁止隐式 `any` 和 `as any`；函数参数、返回值、解构项、事件对象、`catch` 错误在使用前应有明确类型或先完成类型收窄，并清理未使用的变量和导入。

### next.config 配置规范

- 配置的路径不要写死绝对路径，必须使用 path.resolve(__dirname, ...)、import.meta.dirname 或 process.cwd() 动态拼接。

### Hydration 问题防范

1. 严禁在 JSX 渲染逻辑中直接使用 typeof window、Date.now()、Math.random() 等动态数据。**必须使用 'use client' 并配合 useEffect + useState 确保动态内容仅在客户端挂载后渲染**；同时严禁非法 HTML 嵌套（如 <p> 嵌套 <div>）。
2. **禁止使用 head 标签**，优先使用 metadata，详见文档：https://nextjs.org/docs/app/api-reference/functions/generate-metadata
   1. 三方 CSS、字体等资源可在 `globals.css` 中顶部通过 `@import` 引入或使用 next/font
   2. preload, preconnect, dns-prefetch 通过 ReactDOM 的 preload、preconnect、dns-prefetch 方法引入
   3. json-ld 可阅读 https://nextjs.org/docs/app/guides/json-ld

## UI 设计与组件规范 (UI & Styling Standards)

- 模板默认预装核心组件库 `shadcn/ui`，位于`src/components/ui/`目录下
- Next.js 项目**必须默认**采用 shadcn/ui 组件、风格和规范，**除非用户指定用其他的组件和规范。**

## 站点页面地图（多页面官网）

| 路由 | 文件 | 说明 |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | 首页：英雄区、四大频道、八大功能、App 界面展示、三步上手、用户评价、FAQ 预览、下载 CTA |
| `/features` | `src/app/features/page.tsx` | 功能特色详解、使用场景、对比表 |
| `/categories` | `src/app/categories/page.tsx` | 电影/电视剧/综艺/动漫频道详情（锚点 `#movie #tv #variety #anime`） |
| `/download` | `src/app/download/page.tsx` | 安卓下载页（锚点 `#install #changelog`） |
| `/faq` | `src/app/faq/page.tsx` | 常见问题（按四类分组） |
| `/about` | `src/app/about/page.tsx` | 品牌故事、使命、价值观、里程碑 |
| `/contact` | `src/app/contact/page.tsx` | 反馈渠道、报错、版权投诉 |
| `/privacy` | `src/app/privacy/page.tsx` | 隐私政策 |
| `/terms` | `src/app/terms/page.tsx` | 用户协议（锚点 `#copyright` 版权声明） |

## SEO 与运营配置

- 全局配置集中在 `src/lib/site.ts`：站点名、描述、关键词、安卓下载地址、百度统计 ID、版本信息、导航；`getSiteUrl()` 从 `NEXT_PUBLIC_SITE_URL` / `COZE_PROJECT_DOMAIN_DEFAULT` 动态读取站点根地址。绑定正式域名后建议设置环境变量 `NEXT_PUBLIC_SITE_URL=https://你的域名`。
- 文案数据集中在 `src/lib/content.ts`：功能、分类、FAQ、评价、更新日志、统计数据。
- SEO 约定文件（均 `force-static`）：
  - `src/app/robots.ts` → `/robots.txt`，分别声明百度/谷歌/必应等爬虫规则并指向 sitemap
  - `src/app/sitemap.ts` → `/sitemap.xml`，列出全部 9 个页面
  - `src/app/manifest.ts` → `/manifest.webmanifest`
  - `src/app/icon.svg` 为 logo 源文件；`apple-icon.png`、`favicon.ico` 自动生效；PWA 图标在 `public/icon-192.png`、`public/icon-512.png`；OG 图 `public/og-image.png`
- 结构化数据：`src/lib/jsonld.ts` 生成 Organization / WebSite / SoftwareApplication / FAQPage / BreadcrumbList；通过 `src/components/analytics.tsx` 的 `JsonLd` 注入。
- 统计：`BaiduTongji` 已接入百度统计（ID 在 site.ts）；`BaiduAutoPush` 为百度链接自动推送。
- 站点固定暗色影院主题，设计规范见 `DESIGN.md`。

## 资源生成脚本

- `scripts/gen-assets.mjs`：由 `src/app/icon.svg` 生成各尺寸 PNG 图标与 OG 分享图（依赖 sharp）
- `scripts/gen-favicon.mjs`：生成 `src/app/favicon.ico`
- 修改 logo 后依次执行：`node scripts/gen-assets.mjs && node scripts/gen-favicon.mjs`

## 构建与验证

- 开发：`pnpm run dev`；构建：`pnpm run build`；生产启动：`pnpm run start`
- 静态检查：`pnpm ts-check`、`pnpm lint --quiet`（交付前通过 test_run 执行，禁止直接 curl 自测）
- 本站无 API 路由，接口冒烟测试不适用。
