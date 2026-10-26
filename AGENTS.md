# Repository Guidelines

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version may differ from prior Next.js releases. Before editing, read relevant guides in `node_modules/next/dist/docs/` and heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project Structure

- `app/` contains route entrypoints, the root layout, global styles, and the client-only `smooth-scroll.tsx` setup.
- `components/` contains reusable page sections; shadcn primitives live in `components/ui/`.
- `layout/` contains the shared header and navigation. `lib/` contains shared helpers; `public/` contains static assets.
- This is a French landing page for Full International Academy’s one-day laser auriculotherapy training. Use the supplied brochure as the source for course details.

## Development Commands

- `npm run dev` starts the local development server.
- `npm run lint` runs ESLint.
- `npm run build` creates a production build; `npm run start` serves that build.
- No test script or test framework is configured yet. Do not report tests as passing unless a test suite is added and run.

## Code and Design Conventions

- Use TypeScript, React, and Tailwind CSS. Prefer existing shadcn/ui components and `lucide-react` icons; do not add another icon library.
- Style with Tailwind utilities. Keep global CSS for imports, design tokens, base styles, scrollbar pseudo-elements, and animation keyframes that utilities reference.
- Use Lenis for smooth page and anchor scrolling. Respect `prefers-reduced-motion`; gate decorative movement with `motion-safe` and provide reduced-motion fallbacks.
- Keep changes focused and components simple. Use mobile-first responsive layouts and accessible labels, focus states, and contrast.
- For forms, use TanStack Form with Zod validation. For server data, use TanStack Query with the project’s Axios client if one is added. Ask before adding dependencies.
- Follow `design.md` for the Stodio-inspired red, black, white, and gray palette; do not reuse the brochure’s colors. Keep course content in French. Attribute accreditation and health-related statements to the brochure; do not present them as independently verified or promise medical outcomes.

## Commits and Pull Requests

The history has only the initial Create Next App commit. Use short imperative commit titles. Pull requests should explain the change and include screenshots for visual updates.
