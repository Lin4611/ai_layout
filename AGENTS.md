# Repository Guidelines

## Project Structure & Module Organization
`src/main.js` bootstraps the Vue 3 app, mounts `App.vue`, and wires in `src/router/index.js`; add new views under `src/views/<Feature>` and register them with the router. Global tokens and Tailwind layers belong in `src/assets/all.css`, while static files that should bypass bundling live under `public/`. Keep build and tooling configuration in `vite.config.js` and supporting files (for example, `jsconfig.json`) so collaborators can locate entry points quickly.

## Build, Test, and Development Commands
Run `npm install` with Node 20+ to sync dependencies. `npm run dev` starts the Vite dev server with hot module replacement at `http://localhost:5173`. `npm run build` outputs an optimized bundle to `dist/`—execute it before merging changes that touch routing, CSS, or environment handling. `npm run preview` serves the production build locally so you can verify asset paths and history mode behavior mirrors deployment.

## Coding Style & Naming Conventions
Favor Vue Single File Components that use `<script setup>` and 2-space indentation; name components in PascalCase (`DashboardPanel.vue`). Place composables inside `src/composables/useThing.js` and prefix them with `use`. Keep stateful logic in `setup()` and reserve default exports for components only; helper modules should use named exports. Lean on Tailwind utility classes for layout, and put any shared CSS variables or keyframes into `src/assets/all.css` to avoid duplication.

## Testing Guidelines
A formal test runner is not wired up yet, so introduce Vitest + Vue Test Utils when adding meaningful logic. Co-locate component specs under `src/__tests__/ComponentName.spec.js`, describe behaviors in plain English (`renders empty state when list is empty`), and stub router/navigation where possible. Once scripts exist, run `npm run test` (typically `vitest run`) and attach the output to your PR. Keep coverage high on new branches and explain any `skip` or `todo` blocks in review notes.

## Commit & Pull Request Guidelines
Follow the existing history by writing short, descriptive subjects (e.g., `初始化 Vue 3 專案，新增基本檔案結構與配置`) and supplementing details in the body when needed. Reference issues with `Fixes #123`, keep commits logically scoped, and avoid bundling unrelated refactors. Pull requests should include motivation, screenshots or GIFs for UI-facing work, and a checklist of commands executed (`npm run build`, `npm run preview`, or tests). Request at least one maintainer review and ensure CI (when added) passes before merging.

## Security & Configuration Tips
Use `.env.local` for secrets such as API keys, and never commit those files. Review third-party dependencies before adding them to `package.json`; favor lightweight Vue utilities over large UI kits. When configuring deployment, mirror the Vite `BASE_URL` used in `createWebHistory` to prevent broken routes.
