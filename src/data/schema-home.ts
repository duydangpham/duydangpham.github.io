import { netiqSchema } from './schema-organization';
import { personSchema } from './schema-person';
import { websiteSchema } from './schema-website';

export const homeSchema: Array<Record<string, unknown>> = [
  personSchema,
  netiqSchema,
  websiteSchema,
];
