export const personSchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://drduydangpham.com/#person',
  name: 'Duy Dang-Pham',
  alternateName: ['Dr. Duy Dang-Pham', 'Duy Đặng Phạm'],
  honorificPrefix: 'Dr.',
  jobTitle: 'Senior Lecturer; Co-founder and CEO',
  description:
    'Senior Lecturer in Management Information Systems at RMIT University Vietnam and Co-founder & CEO of NetIQ, a consulting firm specializing in Organizational Network Analysis and AI strategy. Fulbright Scholar-in-Residence 2024. Author of 60+ peer-reviewed publications on information security, digital transformation, and social network analysis.',
  url: 'https://drduydangpham.com',
  image: 'https://drduydangpham.com/assets/img/duydangpham_2026.JPG',
  email: 'EMAIL_PLACEHOLDER',
  sameAs: [
    'https://scholar.google.com.vn/citations?user=lkYFFvAAAAAJ',
    'https://orcid.org/0000-0002-7798-6635',
    'LINKEDIN_URL_PLACEHOLDER',
  ],
  affiliation: [
    {
      '@type': 'Organization',
      '@id': 'https://drduydangpham.com/#netiq',
      name: 'NetIQ',
      url: 'NETIQ_URL_PLACEHOLDER',
    },
    {
      '@type': 'Organization',
      name: 'RMIT University Vietnam',
      url: 'https://www.rmit.edu.vn',
    },
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'RMIT University',
    url: 'https://www.rmit.edu.au',
  },
  knowsAbout: [
    'Organizational Network Analysis',
    'AI Champion Programs',
    'Information Security Governance',
    'Digital Transformation',
    'Social Network Analysis',
    'Management Information Systems',
    'AI Strategy',
    'Betweenness Centrality',
    'Infomap Community Detection',
  ],
  nationality: {
    '@type': 'Country',
    name: 'Vietnam',
  },
  award: [
    'Fulbright Scholar-in-Residence 2024, Gonzaga University',
    'Best Paper Award (1st Runner-Up), ACIS 2020',
  ],
  hasOccupation: [
    {
      '@type': 'Occupation',
      name: 'Senior Lecturer',
      occupationLocation: { '@type': 'Country', name: 'Vietnam' },
    },
    {
      '@type': 'Occupation',
      name: 'Chief Executive Officer',
      occupationLocation: { '@type': 'Country', name: 'Vietnam' },
    },
  ],
};
