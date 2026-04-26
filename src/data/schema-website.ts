export const websiteSchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://drduydangpham.com/#website',
  name: 'Dr. Duy Dang-Pham',
  url: 'https://drduydangpham.com',
  description:
    'Personal website of Dr. Duy Dang-Pham — Senior Lecturer at RMIT University Vietnam and Co-founder & CEO of NetIQ.',
  inLanguage: ['en'],
  author: { '@id': 'https://drduydangpham.com/#person' },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://drduydangpham.com/insights/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};
