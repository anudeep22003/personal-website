# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal website with a full-stack architecture:
- **Frontend**: React + TypeScript + Vite (in `/frontend/`)
- **Backend**: FastAPI + Python (in `/backend/`)
- **Deployment**: Cloudflare Workers for static frontend

## Development Commands

### Frontend (React + TypeScript + Vite)
```bash
cd frontend
npm run dev        # Start development server with HMR
npm run build      # TypeScript compilation + Vite production build
npm run lint       # ESLint with TypeScript support
npm run preview    # Preview production build locally
```

### Backend (FastAPI + Python)
```bash
cd backend
uv sync --dev      # Install dependencies
uv run mypy .      # Type checking
uv run ruff check . # Linting
uv run ruff format . # Formatting
uv run ruff check --fix . # Auto-fix linting issues
```

## Architecture Overview

### Frontend Structure
- **Router-based SPA**: Uses React Router v7 with nested layouts
- **Layout System**: `RootLayout` component provides consistent navigation
- **Page Structure**: Four main routes (/, /resume, /about, /history)
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Path Alias**: `@/` maps to `src/` directory

### Key Frontend Files
- `src/main.tsx`: Application entry point with RouterProvider
- `src/router.tsx`: Route configuration with nested layout structure
- `src/Layout.tsx`: Root layout with dynamic navigation generation
- `src/pages/`: Individual page components
- `vite.config.ts`: Vite configuration with React, Tailwind, and path aliases

### Backend Structure  
- **Framework**: FastAPI with Pydantic for data validation
- **Python Version**: 3.12 with strict typing requirements
- **Code Quality**: MyPy for type checking, Ruff for linting/formatting
- **Package Management**: UV for dependency management

### Deployment
- **Frontend**: Static site deployed via Cloudflare Workers (`wrangler.toml`)
- **Build Output**: Frontend builds to `./frontend/dist`

## Code Quality Standards

### Frontend
- ESLint with TypeScript, React Hooks, and React Refresh rules
- Strict TypeScript configuration split between app and node configs
- Consistent component organization and naming conventions

### Backend
- MyPy strict mode with comprehensive type checking
- Ruff with extensive rule set (88 char line length, Python 3.12 target)
- Development principles emphasize readability, maintainability, and explicit typing

## Development Workflow

1. **Frontend Development**: Navigate to `frontend/` directory for React work
2. **Backend Development**: Navigate to `backend/` directory for FastAPI work  
3. **Testing**: Check project-specific testing approaches in respective directories
4. **Linting**: Always run linting commands before committing changes
5. **Build Verification**: Test production builds before deployment

## Utility Scripts

The `/scripts/` directory contains utility scripts for development tasks:
- File comparison utilities
- GCP environment setup
- Git diff automation for commit messages