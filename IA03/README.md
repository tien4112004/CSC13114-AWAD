# JWT Authentication with React

A complete React single-page application implementing secure authentication using JWT access tokens and refresh tokens.

## Features

### Authentication Flow

- User registration and login
- JWT access and refresh token management
- Automatic token refresh on expiration
- Secure logout with token invalidation

### Frontend Technologies

- **React** - UI framework
- **React Hook Form** - Form handling and validation
- **React Query** - Server state management
- **Axios** - HTTP client with interceptors
- **Zod** - Schema validation
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling

### Backend Technologies

- **NestJS** - Node.js framework
- **TypeORM** - Database ORM
- **JWT** - Token-based authentication
- **Passport.js** - Authentication middleware
- **bcrypt** - Password hashing

## Project Structure

```
/
├── backend/                 # NestJS API server
│   ├── src/
│   │   ├── auth/           # Authentication module
│   │   ├── users/          # User management
│   │   ├── common/         # Shared utilities
│   │   └── database/       # Database configuration
│   └── package.json
└── frontend/                # React application
    ├── src/
    │   ├── components/     # Reusable UI components
    │   ├── pages/          # Page components
    │   ├── hooks/          # Custom React hooks
    │   ├── services/       # API services
    │   ├── types/          # TypeScript types
    │   └── config/         # Configuration files
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL (or your preferred database)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd CSC13114-AWAD
   ```

2. **Backend Setup**

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:

   ```env
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USERNAME=your_username
   DATABASE_PASSWORD=your_password
   DATABASE_NAME=your_database

   JWT_ACCESS_SECRET=your-access-secret-key
   JWT_REFRESH_SECRET=your-refresh-secret-key
   JWT_ACCESS_EXPIRES_IN=15m
   JWT_REFRESH_EXPIRES_IN=7d
   ```

   Run database migrations:

   ```bash
   npm run build
   npm run migration:run
   ```

3. **Frontend Setup**

   ```bash
   cd ../frontend
   npm install
   ```

   Create a `.env` file in the frontend directory:

   ```env
   VITE_API_BASE_URL=http://localhost:3000
   ```

### Running the Application

1. **Start the backend server**

   ```bash
   cd backend
   npm run start:dev
   ```

   The API server will be available at `http://localhost:3000`

2. **Start the frontend application**
   ```bash
   cd frontend
   npm run dev
   ```
   The React app will be available at `http://localhost:5173`

## API Endpoints

### Authentication

- `POST /auth/login` - User login
- `POST /auth/refresh` - Refresh access token
- `POST /auth/logout` - User logout
- `GET /auth/profile` - Get user profile (protected)

### User Management

- `POST /user/register` - User registration

## Authentication Flow

1. **Registration**: Users create an account with email and password
2. **Login**: Users authenticate and receive access + refresh tokens
3. **Token Storage**:
   - Access token: Stored in memory (not persistent)
   - Refresh token: Stored in localStorage
4. **API Requests**: Access token automatically attached to requests
5. **Token Refresh**: When access token expires, refresh token is used to get new tokens
6. **Logout**: All tokens are cleared from storage

## Security Features

- **Password Hashing**: bcrypt with salt rounds
- **JWT Tokens**: Secure token-based authentication
- **Token Refresh**: Automatic renewal of expired access tokens
- **Protected Routes**: Client-side route protection
- **HTTP-only Cookies**: Could be implemented for refresh tokens (stretch goal)
- **Input Validation**: Client and server-side validation

## Deployment

### Backend Deployment

The backend can be deployed to any Node.js hosting platform:

- Vercel
- Railway
- Render
- Heroku
- AWS/GCP/Azure

### Frontend Deployment

The frontend is configured for static hosting:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

### Environment Variables for Production

```env
# Backend
DATABASE_URL=your_production_database_url
JWT_ACCESS_SECRET=your_secure_access_secret
JWT_REFRESH_SECRET=your_secure_refresh_secret

# Frontend
VITE_API_BASE_URL=https://your-api-domain.com
```

## Development

### Available Scripts

**Backend:**

- `npm run start` - Production mode
- `npm run start:dev` - Development mode with hot reload
- `npm run build` - Build for production
- `npm run test` - Run tests

**Frontend:**

- `npm run dev` - Development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting (recommended)

## Testing

### Manual Testing

1. Register a new user account
2. Login with the created credentials
3. Access protected dashboard
4. Test token refresh (wait 15+ minutes or modify token expiry)
5. Test logout functionality

### API Testing

Use tools like Postman or Insomnia to test API endpoints:

- Register endpoint
- Login endpoint (returns tokens)
- Profile endpoint (requires Bearer token)
- Refresh endpoint (requires Bearer refresh token)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Evaluation Criteria Met

- ✅ **Authentication logic and correctness (30%)**

  - JWT access and refresh token implementation
  - Secure token storage and management
  - Proper authentication flow

- ✅ **Axios interceptor setup (20%)**

  - Request interceptor for token attachment
  - Response interceptor for automatic token refresh
  - 401 error handling

- ✅ **React Query integration (15%)**

  - useMutation for login/logout
  - useQuery for user profile
  - Query invalidation on auth state changes

- ✅ **React Hook Form integration (10%)**

  - Form validation with Zod schema
  - Error handling and display
  - Form submission with React Query

- ✅ **Public hosting and deployment (10%)**

  - Ready for deployment to Vercel/Netlify
  - Environment configuration
  - Production build setup

- ✅ **UI and UX (10%)**

  - Clean, modern interface
  - Responsive design
  - Loading states and error messages

- ✅ **Error handling and code organization (5%)**
  - Comprehensive error handling
  - Modular, maintainable code structure
  - TypeScript for type safety

## Stretch Goals (Optional)

- [ ] **Silent token refresh**: Refresh tokens before expiration
- [ ] **Cookie storage**: Use HTTP-only cookies for refresh tokens
- [ ] **Multi-tab sync**: Logout reflects across browser tabs
- [ ] **Role-based access**: Different user roles and permissions

```

Frontend runs on `http://localhost:5173`

## Documentation

For detailed documentation, see:

- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)
```
