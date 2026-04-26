import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { mkdir, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url)) + '/..';
const source = join(root, 'public/brand/logo-ctrl.webp');
const outDir = join(root, 'public');

const targets = [
  { name: 'favicon-16.png', size: 16 },
  { name: 'favicon-32.png', size: 32 },
  { name: 'favicon-48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
];

await mkdir(outDir, { recursive: true });

for (const t of targets) {
  await sharp(source)
    .resize(t.size, t.size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(join(outDir, t.name));
  console.log(`✓ ${t.name} (${t.size}x${t.size})`);
}

const icoBuffer = await pngToIco([
  join(outDir, 'favicon-16.png'),
  join(outDir, 'favicon-32.png'),
  join(outDir, 'favicon-48.png'),
]);
await writeFile(join(outDir, 'favicon.ico'), icoBuffer);
console.log('✓ favicon.ico (16+32+48)');
