# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (starts Vite dev server with HMR)
- **Build**: `npm run build` (TypeScript compilation + Vite production build)
- **Linting**: `npm run lint` (ESLint with TypeScript support)
- **Preview**: `npm run preview` (preview production build locally)

## Project Architecture

This is a personal website built as a React SPA using:

### Core Stack
- **React 19** with TypeScript and Vite
- **React Router v7** for client-side routing with nested layouts
- **Tailwind CSS v4** with the new Vite plugin for styling
- **shadcn/ui** components (configured in `components.json`)

### Application Structure
- **Router-based architecture**: Uses `createBrowserRouter` with nested routes in `src/router.tsx`
- **Layout system**: `RootLayout` component provides consistent navigation and page structure
- **Page-based routing**: Three main pages (Home, About, Resume) in `src/pages/`
- **Component organization**: UI components in `src/components/ui/`, utilities in `src/lib/`

### Key Files
- `src/main.tsx`: Application entry point with RouterProvider
- `src/router.tsx`: Route configuration with nested layout structure
- `src/Layout.tsx`: Root layout component with navigation and main content area
- `src/pages/`: Individual page components
- `vite.config.ts`: Vite configuration with React, Tailwind, and path aliases (@/ → src/)

### Styling Approach
- Uses Tailwind CSS v4 with the new @tailwindcss/vite plugin
- Consistent design system with neutral colors and minimal aesthetic
- CSS variables enabled for shadcn/ui theming
- Responsive design with mobile-first approach

### Deployment
- **Cloudflare Workers**: Uses `wrangler.toml` for deployment configuration
- Static assets served from `./frontend/dist` after build
- Production builds optimized through Vite

### Development Notes
- Path alias `@/` maps to `src/` directory
- TypeScript configuration split between `tsconfig.app.json` and `tsconfig.node.json`
- ESLint configured with React and TypeScript rules
- Uses SWC for fast refresh during development
