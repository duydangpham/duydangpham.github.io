# Publications Workflow

The publications page is driven by Astro content entries generated from a BibTeX source file.

## Source of truth

- Edit [src/data/publications.bib](/Users/duydangpham/Documents/revamp-personal-website/drduydangpham-site/src/data/publications.bib)
- Run `npm run import:publications`
- Generated entries are written to [src/content/publications/imported](/Users/duydangpham/Documents/revamp-personal-website/drduydangpham-site/src/content/publications/imported)

Do not hand-edit the generated files unless you want those changes overwritten the next time the importer runs.

## Supported BibTeX fields

Core fields:

- `title`
- `author`
- `year`
- `journal` or `booktitle`

Optional fields used by the site:

- `abstract`
- `doi`
- `url`
- `pdf`
- `keywords`
- `preview`
- `thumbnail`
- `award`
- `award_name`

## Thumbnails

If you use `preview = {filename.png}` in your BibTeX entry, place that image in:

- [public/assets/img/publication_preview](/Users/duydangpham/Documents/revamp-personal-website/drduydangpham-site/public/assets/img/publication_preview)

If you use `thumbnail`, you can provide either:

- a full URL such as `https://...`
- a site-relative path such as `/assets/img/publication_preview/example.png`

## Example flow

1. Export your publications from Zotero, EndNote, JabRef, Overleaf, or another source as `.bib`
2. Replace the contents of `src/data/publications.bib`
3. Add any preview images to `public/assets/img/publication_preview/`
4. Run `npm run import:publications`
5. Start the site with `npm run dev`
