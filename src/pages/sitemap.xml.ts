import type { APIRoute } from 'astro';

import { getPublishedPosts, getPostUrl } from '../utils/posts';

const SITE_URL = 'https://drduydangpham.com';

const staticRoutes = [
  '/',
  '/about/',
  '/research/',
  '/netiq/',
  '/projects/',
  '/insights/',
  '/speaking/',
  '/publications/',
  '/contact/',
  '/concepts/organizational-network-analysis/',
  '/concepts/ai-champions/',
  '/concepts/betweenness-centrality/',
];

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function toAbsoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts();

  const staticEntries = staticRoutes.map((path) => {
    return {
      loc: toAbsoluteUrl(path),
    };
  });

  const postEntries = posts.map((post) => {
    const lastModified = post.data.updatedDate ?? post.data.date;

    return {
      loc: toAbsoluteUrl(`${getPostUrl(post)}/`),
      lastmod: lastModified.toISOString(),
    };
  });

  const allEntries = [...staticEntries, ...postEntries];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map((entry) => {
    const lastmod = entry.lastmod ? `\n    <lastmod>${escapeXml(entry.lastmod)}</lastmod>` : '';

    return `  <url>
    <loc>${escapeXml(entry.loc)}</loc>${lastmod}
  </url>`;
  })
  .join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
