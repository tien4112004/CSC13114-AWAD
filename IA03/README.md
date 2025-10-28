# User Registration System

A complete user registration and authentication system built with **NestJS** (backend) and **React** (frontend).

## 🚀 Features

### Backend (NestJS)

- ✅ User registration API endpoint (`POST /user/register`)
- ✅ Email and password validation using `class-validator`
- ✅ Secure password hashing with bcrypt
- ✅ Duplicate email checking
- ✅ PostgreSQL database integration with TypeORM
- ✅ CORS enabled for frontend communication
- ✅ Environment variable configuration

### Frontend (React)

- ✅ Modern UI with **Tailwind CSS**
- ✅ Form validation using **React Hook Form**
- ✅ API integration with **React Query** (TanStack Query)
- ✅ Responsive design
- ✅ Three main pages: Home, Login, and Sign Up
- ✅ Client-side routing with React Router
- ✅ Error handling and user feedback
- ✅ Loading states

## 📋 Requirements

### Backend

- Node.js >= 18
- PostgreSQL database
- npm or yarn

### Frontend

- Node.js >= 18
- npm or yarn

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd IA03
```

### 2. Backend Setup

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

The backend will run on `http://localhost:3000`

### 3. Frontend Setup

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

The frontend will run on `http://localhost:5173`

## 🎯 Usage

1. **Start the backend server** (make sure PostgreSQL is running)

   ```bash
   cd backend
   npm run start:dev
   ```

2. **Start the frontend development server**

   ```bash
   cd frontend
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:5173`

4. **Navigate through the application:**
   - **Home Page**: Overview and navigation
   - **Sign Up Page**: Register a new user account
   - **Login Page**: Mock login interface (UI only)

## 📁 Project Structure

### Backend Structure

```
backend/
├── src/
│   ├── common/
│   │   └── config/          # Configuration files
│   ├── database/            # Database module
│   ├── users/
│   │   ├── controller/      # User controller
│   │   ├── dto/            # Data Transfer Objects
│   │   ├── entities/       # User entity
│   │   ├── security/       # Bcrypt service
│   │   └── service/        # User service
│   ├── app.module.ts
│   └── main.ts
├── .env                     # Environment variables
└── package.json
```

### Frontend Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/             # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   └── Layout.tsx      # Main layout with navigation
│   ├── config/
│   │   └── api.ts          # API configuration
│   ├── pages/
│   │   ├── Home.tsx        # Home page
│   │   ├── Login.tsx       # Login page
│   │   └── SignUp.tsx      # Sign up page
│   ├── services/
│   │   └── api.ts          # API service functions
│   ├── types/
│   │   └── api.ts          # TypeScript types
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Entry point
├── .env                     # Environment variables
└── package.json
```

## 🔑 API Endpoints

### POST `/user/register`

Register a new user.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "SecurePass123!@#"
}
```

**Success Response (201):**

```json
{
  "id": "uuid",
  "email": "user@example.com",
  "createdAt": "2025-10-28T12:00:00.000Z"
}
```

**Error Responses:**

- **400 Bad Request** - Invalid input

```json
{
  "message": ["email must be an email", "password is too weak"],
  "error": "Bad Request",
  "statusCode": 400
}
```

- **409 Conflict** - Email already exists

```json
{
  "message": "Email already exists",
  "error": "Conflict",
  "statusCode": 409
}
```

## 🧪 Testing

### Backend Testing

```bash
cd backend
npm run test
npm run test:e2e
```

### Frontend Testing

```bash
cd frontend
npm run test
```

## 🏗️ Building for Production

### Backend

```bash
cd backend
npm run build
npm run start:prod
```

### Frontend

```bash
cd frontend
npm run build
# The build output will be in the 'dist' folder
```

## 🌐 Deployment

### Backend Deployment Options

- **Heroku**: Easy deployment with PostgreSQL addon
- **Railway**: Simple deployment with built-in PostgreSQL
- **Render**: Free tier available with PostgreSQL
- **AWS/GCP/Azure**: For production applications

### Frontend Deployment Options

- **Vercel**: Recommended for React apps
- **Netlify**: Easy static site hosting
- **GitHub Pages**: Free hosting option
- **AWS S3 + CloudFront**: Production-ready CDN

### Environment Variables for Production

**Backend (.env):**

```env
DB_HOST=your-production-db-host
DB_PORT=5432
DB_USERNAME=your-db-username
DB_PASSWORD=your-db-password
DB_NAME=your-db-name
PORT=3000
```

**Frontend (.env.production):**

```env
VITE_API_BASE_URL=https://your-backend-api-url.com
```

## 📝 Password Requirements

The application enforces the following password requirements:

- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character (@$!%\*?&#)

## 🔒 Security Features

- ✅ Password hashing with bcrypt (10 salt rounds)
- ✅ Input validation and sanitization
- ✅ CORS configuration
- ✅ Environment variable protection
- ✅ SQL injection prevention (TypeORM)

## 🛡️ Technologies Used

### Backend

- NestJS
- TypeORM
- PostgreSQL
- bcrypt
- class-validator
- class-transformer

### Frontend

- React 18
- TypeScript
- Tailwind CSS
- React Router
- React Hook Form
- React Query (TanStack Query)
- Axios
- Vite

## 📄 License

This project is created for educational purposes as part of CSC13114 - Advanced Web App Programming.

## 👥 Authors

- **Student Name**
- **Student ID**
- **University of Science, HCMUS**

## 🐛 Known Issues

- Login functionality is UI-only (no backend authentication yet)
- No email verification implemented
- No password reset functionality

## 🚧 Future Improvements

- [ ] Implement JWT authentication
- [ ] Add email verification
- [ ] Password reset functionality
- [ ] User profile management
- [ ] Admin dashboard
- [ ] Unit and integration tests
- [ ] API documentation with Swagger

## 📞 Support

For issues or questions, please contact:

- Email: your.email@example.com
- GitHub Issues: [repository-url]/issues
