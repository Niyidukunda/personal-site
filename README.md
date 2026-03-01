This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Vercel Auto Deploy with GitHub Actions

This repository includes a workflow at `.github/workflows/vercel-deploy.yml` that deploys to Vercel automatically:

- Pull requests to `main` create a **Preview** deployment.
- Pushes to `main` create a **Production** deployment.

### Required GitHub repo settings

In your GitHub repository, go to **Settings → Secrets and variables → Actions** and add:

- Secret: `VERCEL_TOKEN`
- Variable: `VERCEL_ORG_ID`
- Variable: `VERCEL_PROJECT_ID`

You can get these from Vercel:

1. Run `vercel login` and `vercel link` locally in this project.
2. Open `.vercel/project.json` to find `orgId` and `projectId`.
3. Create a Vercel personal/team token at Vercel Account Settings and store it as `VERCEL_TOKEN` in GitHub secrets.
