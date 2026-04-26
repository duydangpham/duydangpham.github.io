import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const portraitCandidates = [
  '/assets/img/duydangpham_2026.JPG',
  '/assets/img/duydangpham_2026.jpg',
];

const portraitSrc = portraitCandidates.find((src) => {
  const absolutePath = fileURLToPath(new URL(`../../public${src}`, import.meta.url));
  return existsSync(absolutePath);
});

export const profilePortraitSrc = portraitSrc;
export const hasProfilePortrait = typeof portraitSrc === 'string';
