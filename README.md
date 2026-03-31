# starVLA Web

Landing page for **starVLA**, built with Astro.

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
