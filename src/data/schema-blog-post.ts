export interface BlogPostSchemaInput {
  title: string;
  description: string;
  url: string;
  lang: 'en' | 'vi';
  datePublished: string;
  dateModified?: string;
  tags: string[];
  ogImage?: string;
}

interface ReferenceSchema {
  '@id': string;
}

interface WebPageSchema {
  '@type': 'WebPage';
  '@id': string;
}

interface BlogPostingSchema {
  '@context': 'https://schema.org';
  '@type': 'BlogPosting';
  headline: string;
  description: string;
  url: string;
  mainEntityOfPage: WebPageSchema;
  datePublished: string;
  dateModified?: string;
  inLanguage: 'en' | 'vi';
  author: ReferenceSchema;
  isPartOf: ReferenceSchema;
  keywords?: string[];
  image?: string;
}

export function createBlogPostSchema(
  input: BlogPostSchemaInput,
): BlogPostingSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    url: input.url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': input.url,
    },
    datePublished: input.datePublished,
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    inLanguage: input.lang,
    author: { '@id': 'https://drduydangpham.com/#person' },
    isPartOf: { '@id': 'https://drduydangpham.com/#website' },
    ...(input.tags.length > 0 ? { keywords: input.tags } : {}),
    ...(input.ogImage ? { image: input.ogImage } : {}),
  };
}
