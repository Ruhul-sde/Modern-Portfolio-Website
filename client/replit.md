# Portfolio Website

## Overview
A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a clean design with animations, showcasing a software developer's skills, experience, and projects.

## Tech Stack
- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 with custom components
- **UI Components**: Radix UI primitives
- **Routing**: Wouter
- **State Management**: TanStack React Query
- **Icons**: Lucide React

## Project Structure
```
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components (buttons, cards, etc.)
│   │   └── ...           # Feature components (Hero, Portfolio, etc.)
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   └── main.jsx          # Application entry point
├── public/               # Static assets
└── index.html            # HTML template
```

## Development Setup (Replit)
The project is configured to run on Replit with the following settings:

### Vite Configuration
- **Dev Server**: Running on `0.0.0.0:5000`
- **HMR**: Configured for Replit's WebSocket proxy
- **Path Aliases**: `@/` points to `src/` directory

### Workflow
- **Dev Server**: `npm run dev` - Runs on port 5000 with hot module replacement

### Deployment
- **Target**: Autoscale (stateless website)
- **Build**: `npm run build`
- **Run**: `npm run preview`

## Recent Changes (October 16, 2025)
- Imported from GitHub repository
- Fixed TypeScript syntax in JSX files (removed `type` imports)
- Added missing Radix UI dependencies (@radix-ui/react-toast, @radix-ui/react-slot, @radix-ui/react-tooltip)
- Configured Vite for Replit environment (host, port, HMR settings)
- Added path alias configuration for cleaner imports
- Set up deployment configuration for production

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Features
- Responsive navigation with smooth scrolling
- Animated hero section with code snippet showcase
- Portfolio showcase section
- Experience and education timelines
- Interactive dashboard with charts
- 3D background effects
- Dark theme with modern design
