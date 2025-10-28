# Frontend Application

React + TypeScript + Vite frontend application with Tailwind CSS.

## Prerequisites

- Node.js >= 18
- npm or yarn

## Environment Setup

Create a `.env` file in the frontend directory (optional):

```env
VITE_API_BASE_URL=http://localhost:3000
```

If not provided, it defaults to `http://localhost:3000`.

## Installation

Install dependencies:

```bash
npm install
```

## Running the Application

### Development Mode

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Features

- User Registration
- User Login (coming soon)
- Responsive UI with Tailwind CSS
- Form validation
- API integration with backend

## Technology Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Routing**: React Router DOM

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── services/       # API service layer
├── types/          # TypeScript type definitions
├── config/         # Configuration files
└── assets/         # Static assets
```

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
