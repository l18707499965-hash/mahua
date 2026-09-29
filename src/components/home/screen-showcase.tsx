'use client';

import { useState } from 'react';
import { Play, Search, Bookmark, Download, Cast, Check } from 'lucide-react';
import { Container } from '@/components/section';
import { cn } from '@/lib/utils';

type Tab = {
  key: string;
  label: string;
  title: string;
  points: string[];
};

const TABS: Tab[] = [
  {
    key: 'home',
    label: '精选首页',
    title: '打开就是好内容',
    points: ['个性化推荐，越用越懂你', '热播榜单每日更新', '分类清晰，老人也会用'],
  },
  {
    key: 'search',
    label: '全网搜索',
    title: '一次输入，全网找片',
    points: ['支持拼音与演员名搜索', '模糊匹配，冷门老片也有', '搜索联想，少打字'],
  },
  {
    key: 'player',
    label: '高清播放器',
    title: '1080P 蓝光秒播',
    points: ['倍速播放与手势控制', '多线路一键切换', '一键投屏到电视'],
  },
  {
    key: 'mine',
    label: '我的追剧',
    title: '追剧进度不丢失',
    points: ['更新自动提醒', '观看进度云端续播', '离线缓存随时看'],
  },
];

const POSTER_PAIRS: [string, string][] = [
  ['#ff3cdf', '#5e0d44'],
  ['#ffa41b', '#6b2e00'],
  ['#ff5a33', '#5e1305'],
  ['#b527e8', '#330a4d'],
];

function MiniPosters() {
  return (
    <div className="grid grid-cols-4 gap-2">
      {POSTER_PAIRS.map(([from, to], i) => (
        <div
          key={i}
          className="aspect-[2/3] rounded-md"
          style={{ background: `linear-gradient(150deg,${from},${to})` }}
        />
      ))}
    </div>
  );
}

export function ScreenShowcase() {
  const [active, setActive] = useState('home');
  const current = TABS.find((tab) => tab.key === active) ?? TABS[0];

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[12.5px] font-semibold tracking-[0.25em] text-[#ff9dc9]">
            APP PREVIEW
          </p>
          <h2 className="text-[28px] font-extrabold text-[#fbf3f6] sm:text-[34px]">
            先睹为快，每一个界面都好用
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(tab.key)}
              className={cn(
                'rounded-full px-5 py-2.5 text-[13.5px] transition-all',
                active === tab.key
                  ? 'bg-gradient-to-r from-[#ff3cdf] to-[#ff6b3d] font-semibold text-white shadow-[0_4px_16px_rgba(243,15,208,0.3)]'
                  : 'border border-[#3a2833] text-[#b8a3ab] hover:text-white',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* 模拟界面卡片 */}
          <div className="glass-card relative mx-auto w-full max-w-[420px] overflow-hidden rounded-3xl p-5">
            <div className="film-strip rounded-t-xl bg-[#0f0810]">
              <div className="flex items-center gap-2 px-4 pb-2 pt-5">
                {active === 'search' ? (
                  <span className="flex flex-1 items-center gap-2 rounded-full bg-white/8 px-3 py-2 text-[12px] text-white/60">
                    <Search className="h-3.5 w-3.5" />
                    输入片名 / 演员 / 拼音
                  </span>
                ) : active === 'player' ? (
                  <>
                    <span className="text-[13px] font-bold text-white">高清大片正片</span>
                    <Cast className="ml-auto h-4 w-4 text-white/70" />
                  </>
                ) : active === 'mine' ? (
                  <>
                    <Bookmark className="h-4 w-4 text-[#ff9dc9]" />
                    <span className="text-[13px] font-bold text-white">我的追剧</span>
                  </>
                ) : (
                  <>
                    <span className="text-[13px] font-bold text-white">麻花精选</span>
                    <span className="ml-auto text-[11px] text-white/50">榜单 ›</span>
                  </>
                )}
              </div>
            </div>

            <div className="bg-[#0f0810] px-4 pb-5">
              {active === 'player' ? (
                <div>
                  <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#3a102e] via-[#1c0b22] to-[#000]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90">
                      <Play className="ml-0.5 h-5 w-5 fill-[#e8386e] text-[#e8386e]" />
                    </span>
                    <span className="absolute bottom-2 left-3 text-[9px] text-white/70">
                      00:42:18 / 01:58:40
                    </span>
                    <span className="absolute bottom-2 right-3 rounded bg-white/15 px-1.5 py-0.5 text-[8.5px] text-white">
                      1080P 蓝光
                    </span>
                  </div>
                  <div className="mt-3 flex gap-2 text-[10px]">
                    {['线路一', '线路二', '线路三'].map((line, i) => (
                      <span
                        key={line}
                        className={cn(
                          'rounded-full px-2.5 py-1',
                          i === 0 ? 'bg-[#ff3cdf]/25 text-[#ffb3ea]' : 'bg-white/[0.06] text-white/55',
                        )}
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              ) : active === 'mine' ? (
                <div className="space-y-2.5">
                  {[
                    ['#ff3cdf', '更新至 24 集'],
                    ['#ffa41b', '更新至 12 集'],
                    ['#ff5a33', '已完结'],
                  ].map(([color, status], i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-2.5">
                      <span className="h-12 w-9 shrink-0 rounded-md" style={{ background: color }} />
                      <div className="min-w-0">
                        <p className="truncate text-[12px] font-semibold text-white">追剧标题 {i + 1}</p>
                        <p className="text-[10px] text-white/50">{status} · 点击续播</p>
                      </div>
                      <Download className="ml-auto h-4 w-4 text-white/40" />
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {active === 'search' && (
                    <div className="mb-3 flex flex-wrap gap-1.5 text-[10px] text-white/60">
                      {['大家都在搜', '热播剧', '高分电影', '最新综艺'].map((word, i) => (
                        <span key={word} className={i === 0 ? 'text-[#ff9dc9]' : 'rounded-full bg-white/[0.06] px-2.5 py-1'}>
                          {word}
                        </span>
                      ))}
                    </div>
                  )}
                  <MiniPosters />
                  <MiniPosters />
                </div>
              )}
            </div>
          </div>

          {/* 文案点 */}
          <div>
            <h3 className="text-[26px] font-extrabold text-[#fbf3f6]">{current.title}</h3>
            <ul className="mt-6 space-y-4">
              {current.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] text-[#cbb9c0]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff3cdf]/15">
                    <Check className="h-3 w-3 text-[#ff9dc9]" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
