import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const png = await readFile(path.join(root, 'public/favicon-64.png'));

// ICO 容器（内嵌 PNG，Vista+ 及现代浏览器均支持）
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // count

const entry = Buffer.alloc(16);
entry.writeUInt8(64 === 256 ? 0 : 64, 0); // width
entry.writeUInt8(64 === 256 ? 0 : 64, 1); // height
entry.writeUInt8(0, 2); // palette
entry.writeUInt8(0, 3); // reserved
entry.writeUInt16LE(1, 4); // color planes
entry.writeUInt16LE(32, 6); // bpp
entry.writeUInt32LE(png.length, 8); // data size
entry.writeUInt32LE(22, 12); // offset (6 + 16)

await writeFile(path.join(root, 'src/app/favicon.ico'), Buffer.concat([header, entry, png]));
console.log('wrote favicon.ico, total bytes:', 22 + png.length);
