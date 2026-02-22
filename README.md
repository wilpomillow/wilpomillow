# Wilpo Millow — Portfolio

## Run locally
```bash
npm install
npm run dev
```

## Add your projects
Edit: `app/lib/projects.ts`

Put images in: `public/images/`

Each project needs:
- `slug` (used for `/projects/[slug]`)
- `href` (external link)
- `logoSrc`, `screenshotSrc`
- `description` (1 line)
- optional `details` for the subpage
