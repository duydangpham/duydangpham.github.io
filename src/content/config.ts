import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    journal: z.string(),
    year: z.number(),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    pdf: z.string().optional(),
    abstract: z.string().optional(),
    tags: z.array(z.string()).default([]),
    citationKey: z.string().optional(),
    thumbnail: z.string().optional(),
    award: z.string().optional(),
    source: z.string().optional(),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    updatedDate: z.date().optional(),
    description: z.string(),
    tags: z.array(z.string()),
    routeSlug: z.string().optional(),
    draft: z.boolean().default(false),
    ogImage: z.string().optional(),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.date(),
    content: z.string(),
    contentVi: z.string().optional(),
  }),
});

export const collections = {
  publications,
  posts,
  news,
};
