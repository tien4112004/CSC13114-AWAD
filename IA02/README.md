# Photo Gallery - Lorem Picsum

A responsive React application that displays photos from the Lorem Picsum API with infinite scroll and detailed photo views.

## Features

- **Photo Grid Display**: Browse photos in a responsive grid layout that adapts to different screen sizes
- **Infinite Scroll**: Automatically loads more photos as you scroll down the page
- **Photo Details**: Click on any photo to view full-size image with author information and technical details
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **TypeScript**: Fully typed codebase for better developer experience and code quality
- **Modern UI**: Clean, professional design using Tailwind CSS

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS framework
- **Lorem Picsum API** - Photo data source

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── PhotoCard.tsx   # Photo thumbnail card component
│   └── LoadingSpinner.tsx  # Loading indicator
├── pages/              # Page components
│   ├── PhotoList.tsx   # Main photo gallery with infinite scroll
│   └── PhotoDetail.tsx # Individual photo detail page
├── services/           # API integration
│   └── photoService.ts # Lorem Picsum API calls
├── hooks/              # Custom React hooks
│   └── useInfiniteScroll.ts  # Infinite scroll logic
├── types/              # TypeScript type definitions
│   └── photo.ts        # Photo data types
├── App.tsx             # Root component with routing
├── main.tsx            # Application entry point
└── index.css           # Global styles with Tailwind
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm installed on your machine

### Installation

1. Clone the repository or extract the project files

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## API Integration

This application uses the [Lorem Picsum API](https://picsum.photos/) to fetch photo data:

- **Photo List**: `https://picsum.photos/v2/list?page={page}&limit={limit}`
- **Photo Details**: `https://picsum.photos/id/{id}/info`

The API service is located in `src/services/photoService.ts` and includes:
- Pagination support for infinite scroll
- Error handling for failed requests
- Helper functions for generating image URLs

## Deployment

The project is ready to be deployed to any static hosting service:

### Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

The `vercel.json` configuration file is already set up for proper routing.

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. The `public/_redirects` file ensures proper routing for single-page applications

### Other Platforms

Build the project with `npm run build` and deploy the `dist` folder to any static hosting service.

## Implementation Highlights

### Infinite Scroll
- Uses the Intersection Observer API for efficient scroll detection
- Custom `useInfiniteScroll` hook for reusable functionality
- Automatic loading of new pages when user scrolls to bottom
- Loading indicators and end-of-list messages

### Routing
- React Router for navigation between list and detail views
- Clean URLs: `/` for gallery, `/photos/:id` for details
- Back navigation with browser history support

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Grid layout adapts from 1 column (mobile) to 4 columns (desktop)
- Touch-friendly interface for mobile devices
- Optimized images with lazy loading

### Code Quality
- TypeScript for type safety throughout the application
- Comprehensive JSDoc comments for documentation
- Organized component structure following React best practices
- Reusable components and custom hooks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a student project created for educational purposes.

## Acknowledgments

- Photos provided by [Lorem Picsum](https://picsum.photos/)
- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
