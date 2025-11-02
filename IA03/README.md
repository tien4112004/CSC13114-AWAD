# User Registration System

A complete user registration and authentication system built with **NestJS** (backend) and **React** (frontend).

## Requirements

- Node.js >= 18
- PostgreSQL database
- npm or yarn

## Quick Start

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file with your database credentials
# Example .env:
# PORT=3000
# DATABASE_URL=postgresql://localhost:5432/webnc

# Run database migrations
npm run migration:run

# Start the backend server
npm run start:dev
```

Backend runs on `http://localhost:3000`

### 2. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd frontend

# Install dependencies
npm install

# Optional: Create .env file to customize API URL
# VITE_API_BASE_URL=http://localhost:3000
# (defaults to http://localhost:3000 if not set)

# Start the development server
npm run dev
```

Frontend runs on `http://localhost:5173`

## Documentation

For detailed documentation, see:

- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)
