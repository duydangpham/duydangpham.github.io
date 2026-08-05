import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://drduydangpham.com',
  base: '/',
  output: 'static',
  outDir: './dist',
  redirects: {
    '/about': '/gioi-thieu/',
    '/contact': '/lien-he/',
    '/research': '/nghien-cuu/',
    '/media': '/truyen-thong/',
    '/publications': '/cong-bo-khoa-hoc/',
    '/insights': '/goc-nhin/',
    '/insights/what-to-expect-from-insights': '/goc-nhin/what-to-expect-from-insights/',
    '/concepts/organizational-network-analysis': '/khai-niem/phan-tich-mang-luoi-to-chuc/',
    '/concepts/ai-champions': '/khai-niem/nguoi-tien-phong-ai/',
    '/concepts/betweenness-centrality': '/khai-niem/do-trung-tam-trung-gian/',
  },
});
