import { Play, Search, Star } from 'lucide-react';
import { LogoMark } from '@/components/logo';

const POSTER_GRADIENTS: [string, string][] = [
  ['#ff3cdf', '#7a1040'],
  ['#ffa41b', '#7a2e00'],
  ['#ff5a33', '#6e1606'],
  ['#b527e8', '#3c0d57'],
  ['#ffce2e', '#8a4b00'],
  ['#f63b22', '#5e0f08'],
];

function Poster({ index, label }: { index: number; label: string }) {
  const [from, to] = POSTER_GRADIENTS[index % POSTER_GRADIENTS.length];
  return (
    <div
      className="relative flex aspect-[2/3] items-end overflow-hidden rounded-lg p-1.5"
      style={{ background: `linear-gradient(150deg, ${from}, ${to})` }}
    >
      <span
        aria-hidden="true"
        className="absolute right-1 top-1 h-5 w-5 rounded-full bg-white/15"
      />
      <span className="line-clamp-2 text-[9px] font-semibold leading-tight text-white/90">
        {label}
      </span>
    </div>
  );
}

export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ''}`}>
      {/* 光晕 */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(255,60,223,0.22),transparent_60%)] blur-2xl"
      />
      <div className="relative mx-auto w-[270px] rounded-[42px] border border-[#3a2833] bg-[#06030a] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
        <div className="relative overflow-hidden rounded-[32px] bg-[#120a10]">
          {/* 状态栏 */}
          <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[10px] text-white/80">
            <span>20:30</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            </span>
          </div>

          {/* 顶部标题栏 */}
          <div className="flex items-center gap-2 px-4 pb-2 pt-2">
            <span className="h-7 w-7">
              <LogoMark />
            </span>
            <span className="text-[13px] font-bold text-white">麻花影视</span>
            <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-white/8">
              <Search className="h-3.5 w-3.5 text-white/70" />
            </span>
          </div>

          {/* 焦点横幅 */}
          <div className="mx-4 mt-1 flex h-[88px] items-end overflow-hidden rounded-xl bg-gradient-to-br from-[#ff3cdf] via-[#c01f6e] to-[#ff6b3d] p-2.5">
            <div>
              <p className="flex items-center gap-1 text-[8.5px] font-semibold text-white/85">
                <Star className="h-2.5 w-2.5 fill-[#ffce2e] text-[#ffce2e]" /> 本周热播 · 高清上线
              </p>
              <p className="mt-1 text-[12px] font-bold text-white">热门院线大片合集</p>
            </div>
            <span className="mb-1 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/90">
              <Play className="ml-0.5 h-3.5 w-3.5 fill-[#e8386e] text-[#e8386e]" />
            </span>
          </div>

          {/* 分类标签 */}
          <div className="flex gap-1.5 overflow-hidden px-4 py-2.5 text-[9px] text-white/70">
            {['电影', '剧集', '综艺', '动漫', '榜单'].map((tag, i) => (
              <span
                key={tag}
                className={
                  i === 0
                    ? 'rounded-full bg-white/15 px-2.5 py-1 font-semibold text-white'
                    : 'rounded-full bg-white/[0.06] px-2.5 py-1'
                }
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 海报网格 */}
          <div className="grid grid-cols-3 gap-2 px-4 pb-3">
            {['深夜动作大片', '都市热播剧集', '王牌爆笑综艺', '本季新番速报', '悬疑高分佳作', '经典老片回顾'].map(
              (label, i) => (
                <Poster key={label} index={i} label={label} />
              ),
            )}
          </div>

          {/* 底部导航条 */}
          <div className="flex items-center justify-around border-t border-white/8 bg-[#0e0710] px-4 py-2.5 text-[8.5px] text-white/55">
            {['首页', '榜单', '收藏', '我的'].map((tab, i) => (
              <span key={tab} className={i === 0 ? 'font-semibold text-[#ff7ad9]' : ''}>
                {tab}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
