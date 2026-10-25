# Skopio Website

The official website for [Skopio](https://github.com/Skopio-app/skopio), a macOS productivity app for understanding app usage and coding activity. The site provides Apple Silicon and Intel downloads, feature previews, integration guides, and the privacy policy.

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- pnpm

## Local development

Install [Node.js 20 or later](https://nodejs.org/) and enable pnpm through Corepack:

```bash
corepack enable
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Changes are reflected automatically during development.

## Commands

```bash
pnpm dev          # Start the development server
pnpm build        # Create a production build
pnpm start        # Serve the production build
pnpm lint         # Run ESLint
pnpm format:check # Check formatting with Prettier
pnpm format       # Format the codebase
```

## Project structure

- `app/` — routes, metadata, global styles, and the privacy page
- `components/` — shared UI and landing-page sections
- `lib/integrations.ts` — integration data and download URLs
- `public/` — images, icons, and integration assets
