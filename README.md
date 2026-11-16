# StarVLA Web

Landing page for **StarVLA** (https://starvla.github.io), built with Astro.

## Structure

- `src/pages/index.astro` – landing page (hero + "Compose your VLA" builder, architecture, research, benchmarks, quick start, model zoo, news, ecosystem, community, citation)
- `src/pages/contributor.astro` – contributors page
- `src/pages/blogs/index.astro` – Blogs listing
- `src/data/blogs.ts` – article titles, summaries, covers and links shared by the homepage and Blogs
- `src/components/BlogCard.astro` – shared article card
- `src/data/landingContent.ts` – landing-page copy, links and numbers (bilingual EN/ZH)
- `src/data/contributors.ts` – contributor list
- `src/layouts/BaseLayout.astro` – nav, footer, theme/locale toggles, live GitHub stats
- `src/styles/global.css` – design tokens and styles
- `public/assets/` – demo videos and figures
- `public/papers/starvla/` – static paper landing page (PDF + BibTeX)
- `public/blogs/<slug>/` – articles and their local figures, videos and downloads

## Blogs

The navigation links to `/blogs/`, and the homepage shows the three most recent entries from `src/data/blogs.ts`. The list supports English and Chinese titles and summaries; each card indicates the article's language.

To add a post:

1. Add its `index.html` and assets under `public/blogs/<slug>/`. Keep article-specific assets together so relative links work at `/blogs/<slug>/`.
2. Add one entry in `src/data/blogs.ts`, including the title, summary, author, project, cover and URL. Set `publishedAt` to the confirmed publication date (`YYYY-MM-DD`); omit it while preparing a preview. Dated entries sort newest first.
3. Add canonical and social sharing metadata to the article, and add its public URL to `public/sitemap.xml`.
4. Run `npm run build` and `npm run preview`; check the list, article, media and mobile layout.

The first article lives at `/blogs/starbenchserver/`, with task-level results at `/blogs/starbenchserver/scores.html`. It was imported from the evaluation repository's `docs/blog` at revision `69b56cd66120eb792a180f9ccdfdabe6d67176f0`. The article's inline results and interaction scripts, and all 14 replay videos, are preserved. Its source statistics and collection scripts remain in the evaluation repository. Edit the website copy for subsequent publication updates.

`cover.svg` is the editable illustration used in the list; `cover.png` is its social sharing export. A finalized PDF can be placed in the same article directory and linked from the article.

## Local Development

```bash
npm install
npm run dev
```

Dev server default: `http://localhost:4321`

## Build

```bash
npm run build
npm run preview
```

## Deployment (GitHub Pages)

This repo deploys with GitHub Actions using:

- `.github/workflows/deploy.yml`

Trigger conditions:

- Push to `main`
- Manual run (`workflow_dispatch`)

The workflow builds Astro static output from `dist/` and publishes to GitHub Pages.

## Related Repositories

- Main codebase: `https://github.com/starVLA/starVLA`
- Documentation: `https://github.com/starVLA/docs`
