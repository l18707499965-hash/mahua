import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const svg = await readFile(path.join(root, 'src/app/icon.svg'), 'utf8');

// padded white/transparent square renders for app icons
async function renderPng(size, outPath) {
  const buf = await sharp(Buffer.from(svg), { density: 384 })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  await mkdir(path.dirname(outPath), { recursive: true });
  await writeFile(outPath, buf);
  console.log('wrote', outPath);
}

await renderPng(180, path.join(root, 'src/app/apple-icon.png'));
await renderPng(192, path.join(root, 'public/icon-192.png'));
await renderPng(512, path.join(root, 'public/icon-512.png'));
await renderPng(64, path.join(root, 'public/favicon-64.png'));

// OpenGraph 1200x630
const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="bg" cx="22%" cy="28%" r="110%">
      <stop offset="0" stop-color="#2b1230"/>
      <stop offset="0.45" stop-color="#160b18"/>
      <stop offset="1" stop-color="#0a0608"/>
    </radialGradient>
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#ff3cdf"/>
      <stop offset="0.5" stop-color="#ff9d16"/>
      <stop offset="1" stop-color="#ff5a33"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1030" cy="70" r="220" fill="#ff3cdf" opacity="0.10"/>
  <circle cx="120" cy="580" r="180" fill="#ff9d16" opacity="0.08"/>
  <g transform="translate(120,165) scale(0.293)">
    ${svg.replace('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="none">', '').replace('</svg>', '')}
  </g>
  <text x="470" y="285" font-family="PingFang SC, Microsoft YaHei, Noto Sans CJK SC, sans-serif" font-size="92" font-weight="800" fill="#ffffff">麻花影视</text>
  <text x="474" y="362" font-family="PingFang SC, Microsoft YaHei, Noto Sans CJK SC, sans-serif" font-size="34" font-weight="400" fill="#e7d5d8">口袋里的随身影院 · 高清免费看剧 App</text>
  <rect x="474" y="402" width="372" height="6" rx="3" fill="url(#brand)"/>
  <text x="474" y="470" font-family="PingFang SC, Microsoft YaHei, Noto Sans CJK SC, sans-serif" font-size="28" fill="#b9a3a8">电影 · 电视剧 · 综艺 · 动漫　|　Android 安卓版下载</text>
</svg>`;
await sharp(Buffer.from(ogSvg), { density: 200 })
  .png()
  .toFile(path.join(root, 'src/app/opengraph-image.png'));
console.log('wrote opengraph-image.png');
await sharp(Buffer.from(ogSvg), { density: 200 })
  .resize(1200, 630)
  .png()
  .toFile(path.join(root, 'public/og-image.png'));
console.log('wrote public/og-image.png');
