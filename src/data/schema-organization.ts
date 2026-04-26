export const netiqSchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://drduydangpham.com/#netiq',
  name: 'NetIQ',
  description:
    'Vietnamese consulting and training firm specializing in Organizational Network Analysis (ONA), AI strategy, and research advisory services. NetIQ helps organizations identify AI champions, map influence networks, and design AI adoption programs using network science methods.',
  url: 'https://netiq.vn',
  founder: { '@id': 'https://drduydangpham.com/#person' },
  foundingLocation: { '@type': 'Country', name: 'Vietnam' },
  areaServed: ['Vietnam', 'Southeast Asia'],
  knowsAbout: [
    'Organizational Network Analysis',
    'AI Champion Identification',
    'AI Strategy Consulting',
    'Network Science',
    'Infomap Community Detection',
    'Betweenness Centrality Analysis',
    'Digital Transformation Advisory',
  ],
  serviceType: [
    'Organizational Network Analysis Consulting',
    'AI Strategy Training',
    'Research and Advisory Services',
    'AI Champion Program Design',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'NetIQ Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Organizational Network Analysis',
          description:
            'Mapping and analyzing organizational networks using multiplex network methods including Work Advice, AI Support, Trust, Information, and Collaboration networks.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Strategy Training',
          description:
            'Executive education programs covering AI assessment, strategic planning, and implementation across three stages.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Champion Program Design',
          description:
            'Designing and deploying AI champion programs using ONA to identify Oracle, Broker, and Silo Buster archetypes within organizations.',
        },
      },
    ],
  },
};
