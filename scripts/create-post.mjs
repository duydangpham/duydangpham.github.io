import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);

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

function escapeSingleQuotes(value) {
  return value.replace(/'/g, "\\'");
}

const slug = getArg('--slug');
const title = getArg('--title') ?? 'Replace with your post title';
const date = getArg('--date') ?? new Date().toISOString().slice(0, 10);
const draftValue = getArg('--draft');
const draft = draftValue ? draftValue === 'true' : true;

if (!slug) {
  fail('Missing required --slug value. Example: npm run new:post -- --slug my-first-post');
}

const destinationDir = path.join(process.cwd(), 'src', 'content', 'posts');

const filename = `${date}-${slug}.md`;
const filePath = path.join(destinationDir, filename);

if (fs.existsSync(filePath)) {
  fail(`Refusing to overwrite existing file: ${path.relative(process.cwd(), filePath)}`);
}

fs.mkdirSync(destinationDir, { recursive: true });

const description = 'Add a short summary that will appear on the Insights page.';

const bodyLines = [
  'Start writing here.',
  '',
  '## Suggested outline',
  '',
  '- Opening problem or question',
  '- Core argument',
  '- Evidence or examples',
  '- Practical implications',
  '',
  '> Do not add your own `# H1` heading in the body. The page title already comes from frontmatter.',
];

const lines = [
  '---',
  `title: '${escapeSingleQuotes(title)}'`,
  `date: ${date}`,
  `description: '${escapeSingleQuotes(description)}'`,
  'tags:',
  '  - topic',
  `draft: ${draft}`,
  '---',
  '',
  ...bodyLines,
  '',
];

fs.writeFileSync(filePath, lines.join('\n'));

console.log(`Created ${path.relative(process.cwd(), filePath)}`);
