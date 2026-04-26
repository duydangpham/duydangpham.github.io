export interface PublicationInput {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  url?: string;
  abstract?: string;
  pageUrl: string;
}

interface PersonReference {
  '@id': string;
}

interface PersonName {
  '@type': 'Person';
  name: string;
}

interface Periodical {
  '@type': 'Periodical';
  name: string;
}

interface ScholarlyArticleSchema {
  '@context': 'https://schema.org';
  '@type': 'ScholarlyArticle';
  headline: string;
  author: Array<PersonReference | PersonName>;
  datePublished: string;
  publisher: Periodical;
  url: string;
  sameAs: string;
  abstract?: string;
  isPartOf: Periodical;
  about: PersonReference;
}

const PERSON_ID = 'https://drduydangpham.com/#person';

export function createPublicationSchema(
  input: PublicationInput,
): ScholarlyArticleSchema {
  const periodical: Periodical = {
    '@type': 'Periodical',
    name: input.journal,
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: input.title,
    author: input.authors.map((author) =>
      author === 'Duy Dang-Pham'
        ? { '@id': PERSON_ID }
        : { '@type': 'Person', name: author },
    ),
    datePublished: String(input.year),
    publisher: periodical,
    url: input.doi ? `https://doi.org/${input.doi}` : input.url ?? input.pageUrl,
    sameAs: input.pageUrl,
    ...(input.abstract ? { abstract: input.abstract } : {}),
    isPartOf: periodical,
    about: { '@id': PERSON_ID },
  };
}
