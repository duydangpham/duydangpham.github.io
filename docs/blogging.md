# Blogging Workflow

Write posts as Markdown files inside `src/content/posts/`.
The filename decides the post URL.

## Fastest way

Use the scaffold command:

```bash
npm run new:post -- --slug my-first-post --title "My First Post"
```

This creates a draft Markdown file with the required frontmatter, but the command is optional.
You can also create a Markdown file manually.

## Required frontmatter

```md
---
title: 'Replace with your post title'
date: 2026-04-26
description: 'Short summary shown on the Insights listing page.'
tags:
  - ONA
  - AI Strategy
draft: true
---
```

## Optional frontmatter

```md
updatedDate: 2026-04-27
ogImage: '/assets/images/posts/example-cover.jpg'
routeSlug: 'optional-custom-url-slug'
```

## How URLs work

- `src/content/posts/my-first-post.md` becomes `/insights/my-first-post/`
- `src/content/posts/2026-04-26-ai-champions.md` becomes `/insights/ai-champions/`

If you want to override the filename-based URL, add `routeSlug` in frontmatter.

## Publishing

1. Create a Markdown file in `src/content/posts/`.
2. Write the content in Markdown below the frontmatter.
3. Do not add your own `# H1` in the body. The post page already renders the title.
4. Set `draft: false` when you are ready to publish.
5. Run `npm run dev` and open `/insights/` to preview the result.
