import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { useUserProfile } from "../hooks/useAuth";

export const Home: React.FC = () => {
  const { data: user } = useUserProfile();

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to User Registration System
          </h1>
          <p className="text-lg text-gray-600">
            A complete user registration and authentication platform built with
            NestJS and React
          </p>
        </div>

        {user ? (
          <div className="text-center">
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Welcome back, {user.email}!
                </h2>
                <p className="text-gray-600 mb-6">
                  You are currently logged in. Visit your dashboard to see your
                  profile information.
                </p>
                <Link to="/dashboard">
                  <Button variant="primary">Go to Dashboard</Button>
                </Link>
              </div>
            </Card>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  New User?
                </h2>
                <p className="text-gray-600 mb-6">
                  Create a new account to get started with our platform
                </p>
                <Link to="/signup">
                  <Button variant="primary" className="w-full">
                    Sign Up Now
                  </Button>
                </Link>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Already have an account?
                </h2>
                <p className="text-gray-600 mb-6">
                  Sign in to access your dashboard and manage your profile
                </p>
                <Link to="/login">
                  <Button variant="secondary" className="w-full">
                    Sign In
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              JWT Authentication Features
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
              <div>
                <h4 className="font-medium mb-2">Frontend</h4>
                <ul className="space-y-1">
                  <li>• React Hook Form validation</li>
                  <li>• React Query for state management</li>
                  <li>• Axios interceptors for token refresh</li>
                  <li>• Protected routes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Backend</h4>
                <ul className="space-y-1">
                  <li>• JWT access & refresh tokens</li>
                  <li>• Passport.js authentication</li>
                  <li>• Secure token storage</li>
                  <li>• Automatic token refresh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
