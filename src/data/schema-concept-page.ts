import {
  createFaqSchema,
  type FaqQuestionInput,
} from './schema-faq';

export interface ConceptPageInput {
  name: string;
  description: string;
  url: string;
  sameAs?: string[];
  faqs: FaqQuestionInput[];
}

interface PersonReference {
  '@id': string;
}

interface DefinedTermSetSchema {
  '@type': 'DefinedTermSet';
  name: string;
  url: string;
}

interface DefinedTermSchema {
  '@context': 'https://schema.org';
  '@type': 'DefinedTerm';
  name: string;
  description: string;
  url: string;
  sameAs?: string[];
  inDefinedTermSet: DefinedTermSetSchema;
  author: PersonReference;
}

type FaqPageSchema = ReturnType<typeof createFaqSchema>;

export function createConceptPageSchema(
  input: ConceptPageInput,
): [DefinedTermSchema, FaqPageSchema] {
  const definedTermSchema: DefinedTermSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: input.name,
    description: input.description,
    url: input.url,
    ...(input.sameAs ? { sameAs: input.sameAs } : {}),
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'ONA and AI Strategy Concepts',
      url: 'https://drduydangpham.com/concepts/',
    },
    author: { '@id': 'https://drduydangpham.com/#person' },
  };

  const faqSchema = createFaqSchema(input.faqs);

  return [definedTermSchema, faqSchema];
}
