import { getCollection, type CollectionEntry } from 'astro:content';

export type PostEntry = CollectionEntry<'posts'>;
const insightsIndexUrl = '/insights/';

export function isPublishedPost(post: PostEntry): boolean {
  return !post.data.draft;
}

export function getPostRouteSlug(post: PostEntry): string {
  if (post.data.routeSlug) {
    return post.data.routeSlug;
  }

  return post.slug.replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

export function sortPosts<T extends PostEntry>(posts: T[]): T[] {
  return [...posts].sort((left, right) => {
    return right.data.date.getTime() - left.data.date.getTime();
  });
}

export async function getPublishedPosts(): Promise<PostEntry[]> {
  const posts = await getCollection('posts', ({ data }) => {
    return !data.draft;
  });

  return sortPosts(posts);
}

export function getInsightsIndexUrl(): string {
  return insightsIndexUrl;
}

export function getPostUrl(post: PostEntry): string {
  return `${insightsIndexUrl}${getPostRouteSlug(post)}`;
}

export function estimateReadingTimeMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 225));
}
