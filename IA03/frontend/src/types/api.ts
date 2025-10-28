export interface RegisterRequest {
  email: string;
  password: string;
}

export interface RegisterResponse {
  id: string;
  email: string;
  createdAt: string;
}

export interface ApiError {
  message: string | string[];
  error?: string;
  statusCode?: number;
}
