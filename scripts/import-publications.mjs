import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const cwd = process.cwd();

function getArg(name) {
  const index = args.indexOf(name);
  if (index === -1) {
    return undefined;
  }

  return args[index + 1];
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

function slugify(value) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function escapeYamlString(value) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"');
}

function cleanText(value) {
  return value
    .replace(/\\&/g, '&')
    .replace(/~/g, ' ')
    .replace(/\\["'`^~=.uvHcbdkr]\{?([A-Za-z])\}?/g, '$1')
    .replace(/\\[a-zA-Z]+\{([^}]*)\}/g, '$1')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function splitAuthors(value) {
  const authors = [];
  let current = '';
  let depth = 0;

  for (let index = 0; index < value.length; index += 1) {
    const char = value[index];
    const nextSlice = value.slice(index, index + 5).toLowerCase();

    if (char === '{') {
      depth += 1;
      current += char;
      continue;
    }

    if (char === '}') {
      depth = Math.max(0, depth - 1);
      current += char;
      continue;
    }

    if (depth === 0 && nextSlice === ' and ') {
      authors.push(current.trim());
      current = '';
      index += 4;
      continue;
    }

    current += char;
  }

  if (current.trim()) {
    authors.push(current.trim());
  }

  return authors.map((author) => formatAuthorName(cleanText(author)));
}

function formatAuthorName(author) {
  const parts = author.split(',').map((part) => part.trim()).filter(Boolean);

  if (parts.length === 2) {
    return `${parts[1]} ${parts[0]}`.trim();
  }

  if (parts.length === 3) {
    return `${parts[2]} ${parts[1]} ${parts[0]}`.trim();
  }

  return author;
}

function splitKeywords(value) {
  return cleanText(value)
    .split(/[;,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function readBalancedValue(source, start, openChar, closeChar) {
  let index = start + 1;
  let depth = 1;
  let value = '';

  while (index < source.length && depth > 0) {
    const char = source[index];

    if (char === openChar) {
      depth += 1;
      value += char;
      index += 1;
      continue;
    }

    if (char === closeChar) {
      depth -= 1;

      if (depth === 0) {
        index += 1;
        break;
      }

      value += char;
      index += 1;
      continue;
    }

    value += char;
    index += 1;
  }

  return { value, index };
}

function readQuotedValue(source, start) {
  let index = start + 1;
  let value = '';
  let escaped = false;

  while (index < source.length) {
    const char = source[index];

    if (!escaped && char === '"') {
      index += 1;
      break;
    }

    if (!escaped && char === '\\') {
      escaped = true;
      value += char;
      index += 1;
      continue;
    }

    escaped = false;
    value += char;
    index += 1;
  }

  return { value, index };
}

function skipWhitespace(source, start) {
  let index = start;

  while (index < source.length && /\s/.test(source[index])) {
    index += 1;
  }

  return index;
}

function readAtomicValue(source, start, entryCloseChar) {
  const index = skipWhitespace(source, start);
  const char = source[index];

  if (char === '{') {
    return readBalancedValue(source, index, '{', '}');
  }

  if (char === '"') {
    return readQuotedValue(source, index);
  }

  let cursor = index;
  let value = '';

  while (cursor < source.length) {
    const current = source[cursor];

    if (current === ',' || current === '#' || current === entryCloseChar || /\s/.test(current)) {
      break;
    }

    value += current;
    cursor += 1;
  }

  return { value, index: cursor };
}

function readValue(source, start, entryCloseChar) {
  let index = skipWhitespace(source, start);
  let combined = '';

  while (index < source.length) {
    const token = readAtomicValue(source, index, entryCloseChar);
    combined += token.value;
    index = skipWhitespace(source, token.index);

    if (source[index] !== '#') {
      break;
    }

    index = skipWhitespace(source, index + 1);
  }

  return { value: combined.trim(), index };
}

function parseBibTeX(source) {
  const entries = [];
  let index = 0;

  while (index < source.length) {
    const atIndex = source.indexOf('@', index);

    if (atIndex === -1) {
      break;
    }

    index = atIndex + 1;
    index = skipWhitespace(source, index);

    let type = '';
    while (index < source.length && /[A-Za-z]/.test(source[index])) {
      type += source[index];
      index += 1;
    }

    type = type.toLowerCase();
    index = skipWhitespace(source, index);

    const openChar = source[index];
    const closeChar = openChar === '(' ? ')' : '}';

    if (openChar !== '{' && openChar !== '(') {
      continue;
    }

    index += 1;
    index = skipWhitespace(source, index);

    if (type === 'comment' || type === 'preamble' || type === 'string') {
      const ignored = readBalancedValue(source, index - 1, openChar, closeChar);
      index = ignored.index;
      continue;
    }

    let citationKey = '';

    while (index < source.length) {
      const char = source[index];

      if (char === ',') {
        index += 1;
        break;
      }

      if (char === closeChar) {
        break;
      }

      citationKey += char;
      index += 1;
    }

    const fields = {};

    while (index < source.length) {
      index = skipWhitespace(source, index);

      if (source[index] === closeChar) {
        index += 1;
        break;
      }

      if (source[index] === ',') {
        index += 1;
        continue;
      }

      let fieldName = '';

      while (index < source.length && /[A-Za-z0-9_-]/.test(source[index])) {
        fieldName += source[index];
        index += 1;
      }

      fieldName = fieldName.toLowerCase();
      index = skipWhitespace(source, index);

      if (source[index] !== '=') {
        while (index < source.length && source[index] !== ',' && source[index] !== closeChar) {
          index += 1;
        }
        continue;
      }

      index += 1;
      index = skipWhitespace(source, index);

      const parsedValue = readValue(source, index, closeChar);
      fields[fieldName] = parsedValue.value;
      index = parsedValue.index;
    }

    entries.push({
      type,
      citationKey: cleanText(citationKey),
      fields,
    });
  }

  return entries;
}

function resolveVenue(fields) {
  if (fields.journal) {
    return cleanText(fields.journal);
  }

  if (fields.booktitle) {
    return `In ${cleanText(fields.booktitle)}`;
  }

  const fallback = [
    fields.publisher,
    fields.school,
    fields.institution,
    fields.organization,
    fields.howpublished,
  ].find(Boolean);

  return fallback ? cleanText(fallback) : '';
}

function resolveExternalUrl(fields) {
  if (fields.url) {
    return cleanText(fields.url);
  }

  if (fields.doi) {
    return `https://doi.org/${cleanText(fields.doi)}`;
  }

  return undefined;
}

function resolvePreview(fields) {
  const preview = fields.preview ?? fields.thumbnail;

  if (!preview) {
    return undefined;
  }

  const cleaned = cleanText(preview);

  if (/^(https?:)?\//.test(cleaned)) {
    return cleaned;
  }

  return `/assets/img/publication_preview/${cleaned}`;
}

function resolvePdf(fields) {
  if (!fields.pdf) {
    return undefined;
  }

  return cleanText(fields.pdf);
}

function toFrontmatter(entry) {
  const lines = [
    '---',
    `title: "${escapeYamlString(entry.title)}"`,
    `authors:`,
    ...entry.authors.map((author) => `  - "${escapeYamlString(author)}"`),
    `journal: "${escapeYamlString(entry.journal)}"`,
    `year: ${entry.year}`,
  ];

  if (entry.doi) {
    lines.push(`doi: "${escapeYamlString(entry.doi)}"`);
  }

  if (entry.url) {
    lines.push(`url: "${escapeYamlString(entry.url)}"`);
  }

  if (entry.pdf) {
    lines.push(`pdf: "${escapeYamlString(entry.pdf)}"`);
  }

  if (entry.citationKey) {
    lines.push(`citationKey: "${escapeYamlString(entry.citationKey)}"`);
  }

  if (entry.thumbnail) {
    lines.push(`thumbnail: "${escapeYamlString(entry.thumbnail)}"`);
  }

  if (entry.award) {
    lines.push(`award: "${escapeYamlString(entry.award)}"`);
  }

  lines.push('tags:');

  if (entry.tags.length > 0) {
    lines.push(...entry.tags.map((tag) => `  - "${escapeYamlString(tag)}"`));
  } else {
    lines.push('  []');
  }

  lines.push('source: "bibtex"');

  if (entry.abstract) {
    lines.push('abstract: |-');
    lines.push(
      ...entry.abstract
        .split(/\r?\n/)
        .map((line) => `  ${line}`),
    );
  }

  lines.push('---', '');

  return lines.join('\n');
}

const sourcePath = path.resolve(
  cwd,
  getArg('--source') ?? path.join('src', 'data', 'publications.bib'),
);
const outputDir = path.resolve(
  cwd,
  path.join('src', 'content', 'publications', 'imported'),
);

if (!fs.existsSync(sourcePath)) {
  fail(
    `Could not find BibTeX source file at ${path.relative(cwd, sourcePath)}.`,
  );
}

const source = fs.readFileSync(sourcePath, 'utf8');
const parsedEntries = parseBibTeX(source);

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, '.gitkeep'), '');

let writtenCount = 0;
const usedFilenames = new Map();

for (const entry of parsedEntries) {
  const fields = entry.fields;
  const title = cleanText(fields.title ?? '');
  const authors = fields.author ? splitAuthors(fields.author) : [];
  const year = Number.parseInt(cleanText(fields.year ?? ''), 10);

  if (!title || authors.length === 0 || Number.isNaN(year)) {
    console.warn(
      `Skipping ${entry.citationKey || entry.type} because title, authors, or year is missing.`,
    );
    continue;
  }

  const record = {
    title,
    authors,
    journal: resolveVenue(fields),
    year,
    doi: fields.doi ? cleanText(fields.doi) : undefined,
    url: resolveExternalUrl(fields),
    pdf: resolvePdf(fields),
    abstract: fields.abstract ? cleanText(fields.abstract) : undefined,
    tags: fields.keywords ? splitKeywords(fields.keywords) : [],
    citationKey: entry.citationKey || undefined,
    thumbnail: resolvePreview(fields),
    award: cleanText(fields.award_name ?? fields.award ?? ''),
  };

  const slugBase = entry.citationKey || slugify(record.title);
  const occurrence = usedFilenames.get(slugBase) ?? 0;
  usedFilenames.set(slugBase, occurrence + 1);
  const uniqueSlug = occurrence === 0 ? slugBase : `${slugBase}-${occurrence + 1}`;
  const filename = `${uniqueSlug}.md`;
  const destinationPath = path.join(outputDir, filename);

  fs.writeFileSync(destinationPath, toFrontmatter(record));
  writtenCount += 1;
}

console.log(
  `Imported ${writtenCount} publication${writtenCount === 1 ? '' : 's'} from ${path.relative(cwd, sourcePath)}.`,
);
