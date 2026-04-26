import { getCollection, type CollectionEntry } from 'astro:content';

export type PublicationEntry = CollectionEntry<'publications'>;

export async function getPublications(): Promise<PublicationEntry[]> {
  const publications = await getCollection('publications');

  return [...publications].sort((left, right) => {
    if (left.data.year !== right.data.year) {
      return right.data.year - left.data.year;
    }

    return left.data.title.localeCompare(right.data.title);
  });
}

export function groupPublicationsByYear(
  publications: PublicationEntry[],
): Array<[number, PublicationEntry[]]> {
  const byYear = new Map<number, PublicationEntry[]>();

  for (const publication of publications) {
    const items = byYear.get(publication.data.year) ?? [];
    items.push(publication);
    byYear.set(publication.data.year, items);
  }

  return [...byYear.entries()].sort((left, right) => right[0] - left[0]);
}

export function getPublicationDoiUrl(
  publication: PublicationEntry,
): string | undefined {
  if (!publication.data.doi) {
    return undefined;
  }

  return `https://doi.org/${publication.data.doi}`;
}

export function getPublicationPrimaryUrl(
  publication: PublicationEntry,
): string | undefined {
  return getPublicationDoiUrl(publication) ?? publication.data.url ?? publication.data.pdf;
}

export function buildPublicationSearchText(publication: PublicationEntry): string {
  const parts = [
    publication.data.title,
    publication.data.authors.join(' '),
    publication.data.journal,
    publication.data.abstract ?? '',
    publication.data.tags.join(' '),
    publication.data.citationKey ?? '',
    publication.data.award ?? '',
  ];

  return parts.join(' ').toLowerCase();
}
