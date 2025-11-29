import { useAuthStore } from "@/stores/auth";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://0.0.0.0:19003/api/",
});


api.interceptors.request.use((config) => {
  const auth = useAuthStore();
  const token = auth.state.token; // ou auth.token

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
export default api;
