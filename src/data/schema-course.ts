export interface CourseInput {
  name: string;
  description: string;
  provider: string;
  url: string;
  educationalLevel: string;
  teaches: string[];
  inLanguage: string[];
  audience: string;
}

interface PersonReference {
  '@id': string;
}

interface OrganizationSchema {
  '@type': 'Organization';
  name: string;
}

interface AudienceSchema {
  '@type': 'Audience';
  audienceType: string;
}

interface CourseSchema {
  '@context': 'https://schema.org';
  '@type': 'Course';
  name: string;
  description: string;
  provider: OrganizationSchema;
  instructor: PersonReference;
  url: string;
  educationalLevel: string;
  teaches: string[];
  inLanguage: string[];
  audience: AudienceSchema;
}

export function createCourseSchema(input: CourseInput): CourseSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: input.name,
    description: input.description,
    provider: {
      '@type': 'Organization',
      name: input.provider,
    },
    instructor: { '@id': 'https://drduydangpham.com/#person' },
    url: input.url,
    educationalLevel: input.educationalLevel,
    teaches: input.teaches,
    inLanguage: input.inLanguage,
    audience: {
      '@type': 'Audience',
      audienceType: input.audience,
    },
  };
}
