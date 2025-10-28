import axios from "axios";
import { API_BASE_URL, API_ENDPOINTS } from "../config/api";
import type { RegisterRequest, RegisterResponse } from "../types/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authApi = {
  register: async (data: RegisterRequest): Promise<RegisterResponse> => {
    const response = await apiClient.post<RegisterResponse>(
      API_ENDPOINTS.REGISTER,
      data
    );
    return response.data;
  },
};
