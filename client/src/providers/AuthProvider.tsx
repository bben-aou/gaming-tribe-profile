import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { getCookie } from "@/utils/getCookie";
import { AuthContextType, AuthProviderProps, TLoginRequestBody, TRegisterBody, User } from "@/interfaces/types";


const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const refreshAccessToken = async () => {
    if (isRefreshing) return null;
    setIsRefreshing(true);
    try {
      const response = await api.post("/auth/refresh-token");
      setIsRefreshing(false);
      const newAccessToken = response.data.accessToken;
      localStorage.setItem("accessToken", newAccessToken);
      api.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
      return newAccessToken;
    } catch (error) {
      setIsRefreshing(false);
      localStorage.removeItem("accessToken");
      api.defaults.headers.common["Authorization"] = "";
      setErrors({ refresh: "Failed to refresh token" });
      return null;
    }
  };

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      // Avoid retrying login or register requests
      if (
        originalRequest.url === "/auth/login" ||
        originalRequest.url === "/auth/register"
      ) {
        return Promise.reject(error); // No retry for these requests
      }

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const accessToken = await refreshAccessToken();
        if (accessToken) {
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          return api(originalRequest); // Retry with new token
        }
      }

      return Promise.reject(error); // Forward other errors
    }
  );

  const fetchUser = async () => {
    try {
      const response = await api.get("/auth/me");
      setUser(response.data.user);
      setErrors({});
    } catch (error) {
      console.error("Failed to fetch user:", error);
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        localStorage.removeItem("accessToken");
        api.defaults.headers.common["Authorization"] = "";
      }
      setUser(null);
      setErrors({ fetch: "Failed to fetch user data" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token =
        localStorage.getItem("accessToken") || getCookie("accessToken");
      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await fetchUser();
      } else {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (data: TLoginRequestBody) => {
    const { email, password } = data;
    try {
      const response = await api.post("/auth/login", { email, password });
      const accessToken = response.data.accessToken;
      api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      localStorage.setItem("accessToken", accessToken);
      await fetchUser();
      setErrors({});
    } catch (error) {
      console.error("Login failed:", error);
      setErrors({ login: "Invalid email or password" });
      throw error;
    }
  };


  const OAuthAuthentication = async (token: string) => {
    try {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("accessToken", token);
      await fetchUser();
      setErrors({});
    } catch (error) {
      console.error("OAuth Authentication failed:", error);
      setErrors({ OAuth: "OAuth Authentication failed" });
      throw error;
    }
  };


  const initiateGithubLogin = () => {
    window.location.href = `http://localhost:3000/api/auth/github/callback`;
  };
  const logout = async () => {
    try {
      await api.post("/auth/logout");
      setUser(null);
      api.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("accessToken");
      setErrors({});
    } catch (error) {
      console.error("Logout failed:", error);
      setErrors({ logout: "Failed to logout" });
    }
  };

  const register = async (data: TRegisterBody) => {
    const { email, password, firstName, lastName } = data;
    try {
      const response = await api.post("/auth/register", {
        email,
        password,
        firstName,
        lastName,
      });
      const accessToken = response.data.accessToken;
      api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      localStorage.setItem("accessToken", accessToken);
      await fetchUser();
      setErrors({});
    } catch (error) {
      console.error("Registration failed:", error);
      setErrors({ register: "Registration failed. Please try again." });
      throw error;
    }
  };

  const clearErrors = () => {
    setErrors({});
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        register,
        errors,
        clearErrors,
        initiateGithubLogin,
        OAuthAuthentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default api;
